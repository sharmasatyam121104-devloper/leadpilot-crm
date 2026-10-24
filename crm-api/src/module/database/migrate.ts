import fs from 'fs';
import path from 'path';
import pool from '../../config/db.config.js';

const MIGRATIONS_DIR = path.join(process.cwd(), 'src/module');
const isFresh = process.argv.includes('--fresh');

const runMigrations = async () => {
  try {
    if (isFresh && process.env.NODE_ENV === 'production') {
        console.error('❌ BLOCKED! You cannot run --fresh in production. It will delete all data!');
        process.exit(1);
    }
    console.log(isFresh ? '🔥 FRESH Migration (Delete & Create)...' : '🔄 Migration Started...');

    if (isFresh) {
      // saare tables delete ( _migrations ko chhod ke )
      console.log('🗑️ Deleting all old tables...');
      await pool.query(`
        DO $$ DECLARE
          r RECORD;
        BEGIN
          FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename != '_migrations') LOOP
            EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
          END LOOP;
        END $$;
      `);
      await pool.query('DELETE FROM _migrations');
      console.log('✅ All old tables deleted');
    }

    await pool.query(`
      CREATE TABLE IF NOT EXISTS _migrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        executed_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    await pool.query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";');

    const getSqlFiles = (dir: string): string[] => {
      let files: string[] = [];
      if (!fs.existsSync(dir)) return files;
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          files = files.concat(getSqlFiles(fullPath));
        } else if (item.endsWith('.sql')) {
          files.push(fullPath);
        }
      }
      return files.sort();
    };

    const sqlFiles = getSqlFiles(MIGRATIONS_DIR);

    for (const filePath of sqlFiles) {
      const fileName = path.relative(MIGRATIONS_DIR, filePath);
      const sql = fs.readFileSync(filePath, 'utf-8');

      console.log(`▶️ Running: ${fileName} (DELETE + CREATE)`);
      await pool.query(sql);
      
      // fresh me har baar insert/update
      await pool.query(`
        INSERT INTO _migrations(name) VALUES($1) 
        ON CONFLICT (name) DO UPDATE SET executed_at = NOW()
      `, [fileName]);
      
      console.log(`✅ Done: ${fileName}`);
    }

    console.log('🎉 All Tables Re-Created! Fresh!');
  } catch (error: any) {
    console.error('❌ Failed:', error.message);
  } finally {
    await pool.end();
  }
};

runMigrations();