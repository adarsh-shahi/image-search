const URL = "https://api.unsplash.com/search/photos?query=";
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const searchImages = async (text) => {
	const result = await fetch(URL + text, {
		method: "GET",
		headers: {
			Authorization: `Client-ID ${ACCESS_KEY}`,
		},
	});
	return (await result.json()).results;
};

export default searchImages;
