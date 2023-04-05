import Logo from '../../assets/Roly-Ochoa.png';

const Img = () => (
	<>
		<div style={{ height: '250px', display: 'flex', justifyContent: 'center' }}>
			<img src={Logo} />
		</div>
		<div style={{ textAlign: 'center' }}>
			<a
				href='https://www.linkedin.com/in/rolyochoa/'
				style={{
					color: 'blue',
					fontSize: 25,
				}}
				target='_blank'
			>
				Linkedin
			</a>
		</div>
	</>
);

export default Img;
