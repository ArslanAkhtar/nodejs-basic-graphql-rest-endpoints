const typeDefs = `#graphql
  type Book {
    title: String
    authorId: Int
    author: Author
  }

  type Author {
    id: Int
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;

export default typeDefs;
