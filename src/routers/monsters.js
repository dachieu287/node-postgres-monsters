const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (req, res, next) => {
  pool.query('SELECT * FROM monsters', (err, result) => {
    if (err) {
      return next(err);
    }
    res.json(result.rows);
  });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  pool.query('SELECT * FROM monsters WHERE id = $1', [id], (err, result) => {
    if (err) {
      return next(err);
    }

    res.json(result.rows);
  });
});

router.post('/', (req, res, next) => {
  const { name, personality } = req.body;
  pool.query('INSERT INTO monsters(name, personality) VALUES ($1, $2)',
    [name, personality]),
    (err, result) => {
      if (err) {
        return next(err);
      }
    }
  res.redirect('/monsters');
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const keys = ['name', 'personality'];
  const fields = [];
  keys.forEach(key => {
    if (req.body[key]) fields.push(key);
  });

  fields.forEach(field => {
    pool.query(
      `UPDATE monsters SET ${field}=$1 WHERE id=$2`,
      [req.body[field], id],
      (err, result) => {
        if (err) {
          return next(err);
        }
      });
  })
  res.redirect('/monsters');
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  pool.query('DELETE FROM monsters WHERE id=$1',
    [id],
    (err, result) => {
      if (err) {
        return next(err);
      }

      res.redirect('/monsters');
    })
});

module.exports = router;