// Setup
const express = require('express');
const app = express();

const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/bookshelf")

const postSchema = new mongoose.Schema({
  body: String,
  title: String,
  author: String,
});
const Post = mongoose.model('Post', postSchema);


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.post('/add', (req, res) => {
  const postData = new Post(req.body);

  postData.save().then( result => {
    res.redirect('/');
  }).catch(err => {
    res.status(400).send("Unable to save data");
  });
});

app.get('/books', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const query = Post.find({}).select('-__v')

  query.exec((err, posts) => {
    res.send(posts)
  });

});

// Listen
app.listen(3001, () => {
  console.log('Server listing on 3001');
})
