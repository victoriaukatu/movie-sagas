const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// route to get movies from the database
router.get('/', (req, res) => {
    const queryText = 'SELECT "movies"."title", "movies"."poster", "movies"."description" FROM movies';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((error) => {
        console.log('Error completing the SELECT movie query!', error);
        res.sendStatus(500);
      });
  });

// route to get genres from the database

router.get('/genres', (req, res) => {
    const queryText = `SELECT "name" FROM "genres"
                        JOIN "movie_genres" ON genres.genre_id = movie_genres.id
                        JOIN "movies" ON "movies"."id"="movies_genres"."id"
                            WHERE movies.id=${req.query.id};`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((error) => {
        console.log('Error completing the SELECT genre query!', error);
        res.sendStatus(500);
      });
  });

module.exports = router;