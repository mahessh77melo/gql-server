import React, { useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import "./AddBook.css";
import { createBookQuery } from "./queries";

const AddBook = ({ data, refetch }) => {
	const [name, setName] = useState("");
	const [genre, setGenre] = useState("");
	const [author, setAuthor] = useState("");
	// useMutation notes at the bottom
	const [addBook, { data: newBook }] = useMutation(createBookQuery);
	/* adding a newbook returns some form of data. so whenever the value of the newbook changes, (when a new book is created) reset the input values. */
	useEffect(() => {
		setName("");
		setAuthor("#");
		setGenre("");
		refetch();
	}, [newBook, refetch]);

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent the reload
		addBook({ variables: { name, genre, author } });
		console.log(newBook);
	};
	return (
		// Good old react form control
		<form className="add-book" onSubmit={handleSubmit}>
			<div className="field">
				<label htmlFor="name">Book Name : </label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="field">
				<label htmlFor="genre">Genre : </label>
				<input
					type="text"
					name="genre"
					id="genre"
					value={genre}
					onChange={(e) => setGenre(e.target.value)}
				/>
			</div>
			<div className="field">
				<label>Select the Author</label>
				<select defaultValue="#" onChange={(e) => setAuthor(e.target.value)}>
					<option value="#" disabled>
						Select the author
					</option>
					{data
						? data.authors.map((author) => (
								<option key={author.id} value={author.id}>
									{author.name}
								</option>
						  ))
						: ""}
				</select>
			</div>
			<button className="submit" type="submit">
				+
			</button>
		</form>
	);
};

export default AddBook;

/* useMutation-->
			the useMutation hook can be destructed into a function and the returned data value which i have renamed as newBook in the named import. This function, when called along with the suitable arguments, triggers the mutation for the values given. In this case, addBook is the name of the function */
