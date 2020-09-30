import React, { useState } from "react";
import "./App.css";

// Components import
import Left from "./Left";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookDetail from "./BookDetail";

// Apollo set up.
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});

function App() {
	const [book, setBook] = useState(null);
	return (
		<ApolloProvider client={client}>
			<div className="app">
				<Left setBook={setBook} />
				<BookDetail book={book} />
			</div>
		</ApolloProvider>
	);
}

export default App;
