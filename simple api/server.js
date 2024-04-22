const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;
app.use(cors());
const books = require('./data');

// Sample data (can be replaced with real data)

app.get('/',(req,res)=>{
  res.send("you are looking for book data");
})

// Define a route to fetch all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

let sent = 0;
// Define a route to fetch a single book by ID
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(book => book.id === bookId);
  if (book) {
    if(sent==10){
      res.send("to much request");
      setTimeout(()=>{
        sent=0;
      },10000);
    }
    res.json(book);
    console.log('send');
    sent++;
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
