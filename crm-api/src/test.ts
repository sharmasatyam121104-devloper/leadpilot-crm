import pool, { connectDB } from "./config/db.config";

const testDB = async () => {
  try {
    await connectDB();
    
    const { rows } = await pool.query('SELECT NOW() as time');
    console.log('✅ DB Query Success, Time:', rows[0].time);
    
  } catch (err: any) {
    console.error('❌ Test Failed:', err.message);
  } finally {
    try {
      await pool.end();
      console.log('🔌 Pool Closed');
    } catch (e) {}
  }
};

testDB();