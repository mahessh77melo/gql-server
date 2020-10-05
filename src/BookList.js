import React from "react";
import "./BookList.css";
import CreateBook from "./CreateBook";

const BookList = ({ data, loading, setBook }) => {
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
							// CreateBook is to render every single book. So when we click a particular book, the setBook function is called and the state of the uppermost App component changes, And consequently, the BookDetail component displays a different book
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default BookList;
