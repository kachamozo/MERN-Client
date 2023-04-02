import { useRef, useState } from 'react';
import { Form as formBulma, Button } from 'react-bulma-components';

const Form = () => {
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

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(input);
		console.log(refFile.current.files);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Field>
				<Label>Name</Label>
				<Control>
					<Input
						type='text'
						name='name'
						value={input.name}
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
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</Control>
			</Field>
			<Field>
				<Label>Desciption</Label>
				<Control>
					<Input
						type='text'
						name='description'
						value={input.description}
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</Control>
			</Field>
			<Field>
				<Label>Image</Label>
				<Control>
					<input type='file' ref={refFile} />
				</Control>
			</Field>
			<Button type='submit' color='primary'>
				Save
			</Button>
		</form>
	);
};

export default Form;
