import axios from 'axios';

const searchImages = async (term) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID Nksy-XcHrtfnFeuW9Q4RLdieDJeD3HLGbLqZ0-15K8g'
		}, 
		params: {
			query: term,
		},
	});

	return response.data.results;
};

export default searchImages;