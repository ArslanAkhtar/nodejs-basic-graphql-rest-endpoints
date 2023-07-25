import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  updateBook,
} from "../controller/books.controller";

const router = Router();

router.get("/books", getAllBooks);

router.get("/books/:id", getBookById);

router.put("/books/:id", updateBook);

export default router;
