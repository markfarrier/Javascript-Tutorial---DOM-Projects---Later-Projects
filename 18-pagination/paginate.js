const paginate = (followers) => {
	const itemsPerPage = 9;
	const numberOfPages = Math.ceil(followers.length / itemsPerPage);
	// console.log(numberOfPages);
	// Array.from takes in an object with a length property, so we set one here
	const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
		const start = index * itemsPerPage;
		return followers.slice(start, start + itemsPerPage);
	});
	return newFollowers;
};

export default paginate;
