import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getProducts = async () => {
	try {
		const response = await axios({
			url: `${baseUrl}/products`,
			method: 'GET',
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

export const saveProduct = async (productData) => {
	try {
		console.log(productData);
		// const response = await axios({
		// 	url: `${baseUrl}/products`,
		// 	method: 'POST',
		// 	data: productData,
		// });

		// return response;
	} catch (error) {
		console.log(error);
	}
};
