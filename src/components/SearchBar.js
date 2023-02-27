import { useState } from "react";

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");

	const handleInputChange = (event) => {
		setTerm(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input value={term} onChange={handleInputChange} />
				{/* Passing the term state to the value attribute of the input form is what
				makes this a controlled element/component. It is the recommended way to
				implement forms in React and keeps your state and the input in sync.
				https://reactjs.org/docs/forms.html#controlled-components */}
			</form>
		</div>
	);
}

export default SearchBar;
