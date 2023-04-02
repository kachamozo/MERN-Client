const ListProducts = ({ products }) => {
	return (
		<>
			{products.length ? (
				'Productos: ' + products.length
			) : (
				<h2 className='title has-text-centered'>No existen productos</h2>
			)}
		</>
	);
};

export default ListProducts;
