import React from "react";
import ReactDOM from "react-dom";

const App = ({ title }) => {
	const [count, setCount] = React.useState(0);

	return (
		<div>
			<h1> Count is {count} </h1>
			<button onClick={() => setCount(count + 1)}>Increment </button>
		</div>
	);
};

const root = document.querySelector("#root");
ReactDOM.render(<App title="Hello JSX" />, root);
