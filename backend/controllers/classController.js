const pool = require('../config/db');

// Get all classes
const getClasses = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM classes');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Create a new class
const createClass = async (req, res) => {
  const { className } = req.body;
  try {
    await pool.query('INSERT INTO classes (name) VALUES ($1)', [className]);
    res.status(201).send('Class created');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

module.exports = { getClasses, createClass };
