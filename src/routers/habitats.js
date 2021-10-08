const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (req, res, next) => {
  pool.query('SELECT * FROM habitats', (err, result) => {
    if (err) {
      next(err);
    }

    res.json(result.rows);
  });
});

router.post('/', (req, res, next) => {
  const { name, climate, temperature } = req.body;
  pool.query(
    'INSERT INTO habitats(name, climate, temperature) VALUES($1, $2, $3)',
    [name, climate, temperature],
    (err, result) => {
      if (err) {
        return next(err);
      }

      res.redirect('/habitats');
    });
});

module.exports = router;