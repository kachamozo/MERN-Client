import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

const getProducts = () => {
	try {
		const response = axios.get('http://localhost:3001/products');
		return response;
	} catch (error) {
		console.log(error);
	}
};

const ListProducts = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const response = await getProducts();
			if (response.status === 200) console.log(response.data.products);
		}
		loadProducts();
	}, []);

	return <>{isLoading ? <Loading /> : 'mostrar los componentes del fetch'}</>;
};

export default ListProducts;
