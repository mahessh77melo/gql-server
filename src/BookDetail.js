import React, { useEffect, useState } from "react";
import { useLazyQuery } from "react-apollo";
import { getBookQuery } from "./queries";
import "./BookDetail.css";
const BookDetail = ({ book }) => {
	const [getBook, { loading, error, data, refetch }] = useLazyQuery(
		getBookQuery
	);
	const [bookData, setBookData] = useState([]);
	useEffect(() => {
		book = book ? book : "5f707e2635c3a34e74e50a6a";
		if (book) console.log(book);
		if (book) getBook({ variables: { id: book } });
		if (data && !loading) setBookData(data.book);
		console.log(bookData);
	}, [book, data]);
	return (
		<>
			{bookData ? (
				<div className="book__detail">
					<div>
						<div className="book__name">{bookData.name}</div>
						<div className="book__genre field">Genre : {bookData.genre}</div>
						<div className="field">
							{bookData.author
								? `Written by ${bookData.author.name} who is ${bookData.author.age} years old.`
								: ""}
						</div>
					</div>

					<ul className="other-books">
						<h3 className="list-header">Other Books by this author.</h3>
						{bookData.author
							? bookData.author.books.map((book) => (
									<li className="other-books__item">{book.name}</li>
							  ))
							: ""}
					</ul>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default BookDetail;
