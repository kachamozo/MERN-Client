import { useState } from 'react';
import Loading from './Loading';

const ListProducts = () => {
	const [isLoading, setIsLoading] = useState(true);

	return <>{isLoading ? <Loading /> : 'mostrar los componentes del fetch'}</>;
};

export default ListProducts;
