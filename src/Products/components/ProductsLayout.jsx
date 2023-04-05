import { useEffect, useState } from 'react';
import AddButton from './AddButton';
import Header from './Header';
import ListProducts from './ListProducts';
import { Container, Modal } from 'react-bulma-components';
import Form from './Form';
import Loading from './Loading';
import { saveProduct, getProducts } from '../services';
import Img from './Img';

const ProductLayout = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const response = await getProducts();
			if (response.status === 200) setProducts(response.data.products);
			setIsLoading(false);
		}
		loadProducts();
	}, [isOpenModal]);

	const handleSubmit = async (data) => {
		await saveProduct(data);
		setIsOpenModal(false);
	};

	return (
		<Container breakpoint='mobile'>
			<Header title='Products App' />

			<Img />
			<AddButton onClick={() => setIsOpenModal(true)} />
			<br />
			{isLoading && <Loading />}
			{!isLoading && !products.length && (
				<h2 className='title has-text-centered'>No existen productos</h2>
			)}
			<ListProducts products={products} />
			<Modal show={isOpenModal} onClose={() => setIsOpenModal(false)}>
				<Modal.Card>
					<Modal.Card.Header>
						<Modal.Card.Title>Add Product</Modal.Card.Title>
					</Modal.Card.Header>
					<Modal.Card.Body>
						<Form handleSubmit={handleSubmit} />
					</Modal.Card.Body>
				</Modal.Card>
			</Modal>
		</Container>
	);
};

export default ProductLayout;
