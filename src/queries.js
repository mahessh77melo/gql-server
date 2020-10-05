import { gql } from "apollo-boost";

/* seperate file for queries. this makes the real code clean and non-hard coded. */

const authorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`;
const booksQuery = gql`
	{
		books {
			name
			genre
			id
		}
	}
`;
// this is the format for mutation, can give the mutation a name if u want, the types of the arguments have to be specified and the necessary arguments for creating a mutation had to be given.

const createBookQuery = gql`
	mutation($name: String!, $genre: String!, $author: ID!) {
		addBook(name: $name, genre: $genre, authorId: $author) {
			name
		}
	}
`;

const getBookQuery = gql`
	query($id: ID!) {
		book(id: $id) {
			name
			genre
			id
			author {
				name
				age
				id
				books {
					name
					id
					genre
				}
			}
		}
	}
`;
// Named imports
export { authorsQuery, booksQuery, createBookQuery, getBookQuery };
