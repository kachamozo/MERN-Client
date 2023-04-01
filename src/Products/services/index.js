import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

const getProducts = () => {
	try {
		const response = axios.get(`${baseUrl}/products`);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export default getProducts;
