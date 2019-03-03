// Setup
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser());

const { Pool } = require('pg');

// create pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123',
});

// getting books
const getBooks = async function (limit) {
  const table = 'books';
  const query = `SELECT * FROM ${table} LIMIT ${limit}`;
  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (e) {
    return e;
  }
};

// add book
const addBook = async function (book) {
  const table = 'books';
  const query = `INSERT INTO ${table} (title, author, description) VALUES ($1, $2, $3) RETURNING *`;
  const values = [book.title, book.author, book.description];
  try {
    const { rows } = await pool.query(query, values);
    return !!rows[0];
  } catch (e) {
    return e;
  }
};

// delete book
const deleteBook = async function (id) {
  const table = 'books';
  const query = `DELETE FROM ${table} WHERE id = $1`;
  try {
    const { rows } = await pool.query(query, [id]);
    return !!rows[0];
  } catch (e) {
    return e;
  }
};

// get books router
app.get('/books', async (req, res, next) => {
  try {
    const limit = req.query.limit || 100;
    const books = await getBooks(limit);
    res.json(books);
  } catch (e) {
    next(e);
  }
});

// add book router
app.post('/add', async (req, res, next) => {
  try {
    const { title, author, description } = req.body;
    const book = {
      title,
      author,
      description,
    };

    const isAdded = await addBook(book);
    const message = isAdded ? 'success' : 'failure';
    res.json({ message });
  } catch (e) {
    next(e);
  }
});

// delete book router
app.post('/delete', async (req, res, next) => {
  try {
    const { id } = req.body;
    const isDeleted = await deleteBook(id);
    const message = isDeleted ? 'success' : 'failure';
    res.json({ message });
  } catch (e) {
    next(e);
  }
});

// main router
app.get('/', async (req, res, next) => {
  try {
    res.json(req.query);
  } catch (e) {
    next(e);
  }
});

// Listen
app.listen(3001, () => {});
