const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (req, res, next) => {
  pool.query('SELECT * FROM lives', (err, result) => {
    if (err) {
      next(err);
    }

    res.json(result.rows);
  });
});

router.get('/conditions', (req, res, next) => {
  pool.query(
    'SELECT * FROM lives l JOIN habitats hbt ON hbt.name = l.habitat',
    (err, result) => {
      if (err) {
        return next(err);
      }

      res.json(result.rows);
    }
  );
});

module.exports = router;