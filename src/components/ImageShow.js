function ImageShow({ image }) {
	return (
		<div>
			<img src={image.urls.small} alt="query image"></img>
		</div>
	);
}

export default ImageShow;
