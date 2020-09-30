import { gql } from "apollo-boost";

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
export { authorsQuery, booksQuery, createBookQuery, getBookQuery };
