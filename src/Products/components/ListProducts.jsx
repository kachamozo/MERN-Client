import { useEffect, useState } from 'react';
import { getProducts } from '../services';
import Loading from './Loading';

const ListProducts = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const response = await getProducts();
			if (response.status === 200) setProducts(response.data.products);
			setIsLoading(false);
		}
		loadProducts();
	}, []);

	if (isLoading) return <Loading />;
	return (
		<>
			{products.length ? (
				'mostrar resultados'
			) : (
				<h2 className='title has-text-centered'>No existen productos</h2>
			)}
		</>
	);
};

export default ListProducts;
