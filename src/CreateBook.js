import React from "react";

const CreateBook = ({ book, setBook }) => {
	return (
		<div>
			<li key={book.id} className="book-list__item">
				<h4 className="title" onClick={() => setBook(book.id)}>
					{book.name}
				</h4>
			</li>
		</div>
	);
};

export default CreateBook;
/*  the setBook function up there passes in the current id of this book(whatever book is clicked), so the state of the app component is set to the id of the clicked book */
