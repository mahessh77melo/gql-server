import React from "react";
import "./BookList.css";

import CreateBook from "./CreateBook";

const BookList = ({ data, loading, setBook }) => {
	// console.log(this.props.data.books);
	// if (data) console.log(data);
	const bookList = data ? data.books : [];
	return (
		<div>
			<div className="books">
				{loading ? (
					<h2>"Loading..."</h2>
				) : (
					<ul className="book-list">
						{bookList.map((book) => (
							<CreateBook setBook={setBook} key={book.id} book={book} />
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default BookList;
