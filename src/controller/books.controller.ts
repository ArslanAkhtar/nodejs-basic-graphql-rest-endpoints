import { Request, Response } from "express";
import { books } from "../data/dataFile";
import { IBook } from "../utils/types";

export const getAllBooks = (req: Request, res: Response) => {
  res.status(200).json({ books });
};

export const getBookById = (req: Request, res: Response) => {
  const bookId = req.params.id;

  if (!bookId) {
    return res.status(400).json({ message: "Missing bookId" });
  }

  const book = books.find((book: IBook) => book.id === parseInt(bookId));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json({ book });
};

export const updateBook = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  const bookTitle = req.body.title;

  if (!bookId) {
    return res.status(400).json({ message: "Missing bookId" });
  }

  const bookIndex = books.findIndex((book: IBook) => book.id === bookId);

  if (bookIndex < 0) {
    return res.status(404).json({ message: "Book not found" });
  }

  books[bookIndex] = {
    id: books[bookIndex].id,
    title: bookTitle,
    authorId: books[bookIndex].authorId,
  };

  res.status(200).json({ book: books[bookIndex] });
};
