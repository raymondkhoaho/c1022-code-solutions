const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.use(express.json());

// GET
app.get('/api/grades/', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
