import { useState } from 'react';
import AddButton from './AddButton';
import Header from './Header';
import ListProducts from './ListProducts';
import { Modal } from 'react-bulma-components';
import Form from './Form';
import { saveProduct } from '../services';

const ProductLayout = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleSubmit = (data) => {
		saveProduct(data);
	};

	return (
		<>
			<Header title='Products App' />
			<AddButton onClick={() => setIsOpenModal(true)} />
			<ListProducts />
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
		</>
	);
};

export default ProductLayout;
