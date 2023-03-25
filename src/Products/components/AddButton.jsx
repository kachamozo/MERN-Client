import { Button, Container, Section } from 'react-bulma-components';

const AddButton = () => {
	return (
		<Section>
			<Container>
				<div className='is-pulled-right '>
					<Button color='primary' className='is-rounded '>
						Add
					</Button>
				</div>
			</Container>
		</Section>
	);
};

export default AddButton;
