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
