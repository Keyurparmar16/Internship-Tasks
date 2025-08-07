const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "SCAM 1992", author: "HARSHAD MEHTA" },
  { id: 2, title: "1981", author: "MS DHONI" },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find((b) => b.id == id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((b) => b.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deleted = books.splice(index, 1);
  res.json({ message: "Book deleted", book: deleted[0] });
});

app.listen(port, () => {
  console.log(`Server running`);
});
