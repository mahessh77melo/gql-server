import React from "react";
import { useQuery } from "react-apollo";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { authorsQuery, booksQuery } from "./queries";
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
