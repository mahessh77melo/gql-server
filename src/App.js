import React, { useState } from "react";
import "./App.css";

// Components import
import Left from "./Left";
import BookDetail from "./BookDetail";
// Apollo imports
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Apollo set up.--> this is where we set up the graphiql server.
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});

function App() {
	// state is kept at the top level to push the state and setState to the right and left components respectively
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
