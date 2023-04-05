import { Button, Container, Section } from 'react-bulma-components';

const AddButton = ({ onClick }) => {
	return (
		<Section>
			<Container>
				<div className='is-pulled-right '>
					<Button
						onClick={onClick}
						color='primary'
						className='is-rounded '
						size='large'
					>
						Add
					</Button>
				</div>
			</Container>
		</Section>
	);
};

export default AddButton;
