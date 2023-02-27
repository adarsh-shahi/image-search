import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
	const [images, setImages] = useState([]);
	const handleSubmit = async (term) => {
		const temp = await searchImages(term);
		setImages([...temp]);
	};
	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
			<ImageList images={images} />
		</div>
	);
}

export default App;
