import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Pool me hi error pakadne ke liye
pool.on('error', (err) => {
  console.error('❌ Unexpected DB Error:', err.message);
});

export const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Database Connected Successfully');
    client.release();
    return true;
  } catch (error: any) {
    console.error('❌ Database Connection Failed:', error.message);
    console.error('Check karo: docker ps chal raha hai kya? aur .env me port 5433 hai kya?');
    throw error;
  }
};

export default pool;