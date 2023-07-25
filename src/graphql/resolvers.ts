import { authors, books } from "../data/dataFile";
import { IBook, IAuthor } from "../utils/types";

const resolvers = {
  Book: {
    author: (parent: IBook) => {
      return authors.find((author: IAuthor) => author.id === parent.authorId);
    },
  },
  Author: {
    books: (parent: IAuthor) => {
      return books.filter((book: IBook) => book.authorId === parent.id);
    },
  },
  Query: {
    books: () => books,
    authors: () => authors,
  },
};

export default resolvers;
