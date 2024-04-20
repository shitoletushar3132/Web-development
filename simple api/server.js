const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;
app.use(cors());

// Sample data (can be replaced with real data)
const books = [
  { id: 1, title: 'Python', author: 'Author 1' },
  { id: 2, title: 'C++', author: 'Author 2' },
  { id: 3, title: 'JavaScript', author: 'Author 3' }
];

// Define a route to fetch all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Define a route to fetch a single book by ID
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(book => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
