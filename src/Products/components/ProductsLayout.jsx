import AddButton from './AddButton';
import Header from './Header';
import ListProducts from './ListProducts';

const ProductLayout = () => {
	return (
		<>
			<Header title='Products App' />
			<AddButton />
			<ListProducts />
		</>
	);
};

export default ProductLayout;
