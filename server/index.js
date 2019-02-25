/* eslint-disable */
// Setup
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser());

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123'
})

const getBooks = async function(limit) {
  const table = 'books'
  const query = `SELECT * FROM ${table} LIMIT ${limit}`
  try {
    const { rows } = await pool.query(query)
    return rows
  } catch(e) {
    console.log('error')
  } finally {
    console.log('finally')
  }
};

const addBook = async function(book) {
  const table = 'books'
  const query = `INSERT INTO ${table} (title, author, description) VALUES ($1, $2, $3) RETURNING *`
  const values = [book.title, book.author, book.description]
  try {
    const { rows } = await pool.query(query, values)
    return !!rows[0]
  } catch(e) {
    console.log('error')
  } finally {
    console.log('finally')
  }
};

app.get('/books', async (req, res, next) => {
  try {
    const limit = req.query.limit || 100
    const books = await getBooks(limit);
    res.json(books);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e);
  }
})

app.post('/add', async (req, res, next) => {
  try {
    const { title, author, description } = req.body;
    const book = {
      title,
      author, 
      description
    };

    const isAdded = await addBook(book);
    const message = isAdded ? 'success' : 'failure';
    console.log('message = ', message)
    res.json({message});

  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e);
  }
})

app.get('/', async (req, res, next) => {
  try {
    res.json(req.query);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
})

// Listen
app.listen(3001, () => {});
