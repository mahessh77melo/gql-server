import React from "react";
import { useQuery } from "react-apollo";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { authorsQuery, booksQuery } from "./queries";

/* this Left component wraps up the booklist and addbook component. just to make things more distributed. Sorry if i complicated it a bit */

const Left = ({ setBook }) => {
	const { loading, data, refetch } = useQuery(booksQuery);
	const { data: authors } = useQuery(authorsQuery);

	return (
		<div className="left">
			<h1 className="header-left">Geek's Basketball List</h1>
			<BookList setBook={setBook} data={data} loading={loading} />
			<AddBook data={authors} refetch={refetch} />
		</div>
	);
};

export default Left;

/* useQuery hook ->
			loading and data are pretty much self explanatory, what refetch does, whenever we feel the data should be refreshed, we can call refetch. Like when we add in a new book or something. just call the refetch method and its done. No need to pass in any arguments
*/
