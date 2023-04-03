import { string } from 'prop-types';
import { Card, Columns, Content, Heading } from 'react-bulma-components';

const ListProducts = ({ products }) => {
	return (
		<Columns>
			{products.map((el) => (
				<Columns.Column size={4} key={el._id}>
					<Card>
						<Card.Image size='4by3' src={el.imgUrl} />
						<Card.Header>
							<Card.Header.Title justifyContent='center'>
								<Heading>{el.name}</Heading>
							</Card.Header.Title>
						</Card.Header>
						<Card.Content>
							<Content>
								<Heading subtitle size={6}>
									UnitaryPrice: {el.unitaryPrice}
								</Heading>
								<Heading subtitle size={6}>
									Size:
									{el.size}
								</Heading>
								<p>Description: {el.description}</p>
							</Content>
						</Card.Content>
					</Card>
				</Columns.Column>
			))}
		</Columns>
	);
};

export default ListProducts;
