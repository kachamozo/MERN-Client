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
	const { name, priceUnitary, size, description, image } = productData;
	try {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('priceUnitary', priceUnitary);
		formData.append('size', size);
		formData.append('description', description);
		formData.append('image', image);

		const response = await axios({
			url: `${baseUrl}/products`,
			method: 'POST',
			data: formData,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
