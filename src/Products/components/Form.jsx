import { useRef, useState } from 'react';
import { Form as formBulma, Button } from 'react-bulma-components';

const Form = ({ handleSubmit }) => {
	const { Field, Control, Label, Input } = formBulma;

	const [input, setInput] = useState({
		name: '',
		unitaryPrice: '',
		size: '',
		description: '',
	});

	const refFile = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value });
	};

	// _handleSubmit es una funcion privada del componente para poder reutilizarlo
	const _handleSubmit = (e) => {
		e.preventDefault();
		handleSubmit({ ...input, image: refFile.current.files[0] });
	};

	return (
		<form onSubmit={_handleSubmit}>
			<Field>
				<Label>Name</Label>
				<Control>
					<Input
						type='text'
						name='name'
						value={input.name}
						required
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</Control>
			</Field>
			<Field>
				<Label>Price</Label>
				<Control>
					<Input
						type='number'
						name='unitaryPrice'
						value={input.unitaryPrice}
						required
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</Control>
			</Field>
			<Field>
				<Label>Size</Label>
				<Control>
					<Input
						type='number'
						name='size'
						value={input.size}
						required
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</Control>
			</Field>
			<Field>
				<Label>Description</Label>
				<Control>
					<Input
						type='text'
						name='description'
						value={input.description}
						required
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</Control>
			</Field>
			<Field>
				<Label>Image</Label>
				<Control>
					<input type='file' ref={refFile} required />
				</Control>
			</Field>
			<Button type='submit' color='primary'>
				Save
			</Button>
		</form>
	);
};

export default Form;
