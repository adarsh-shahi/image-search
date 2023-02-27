import ImageShow from "./ImageShow";

function ImageList({ images }) {
	const renderList = images.map((image, index) => {
		return <ImageShow image={image} key={index} />;
	});
	return <div>{renderList}</div>;
}

export default ImageList;
