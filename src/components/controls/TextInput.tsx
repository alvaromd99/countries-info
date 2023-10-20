import loupeSvg from '../../assets/loupe.svg'

export default function TextInput() {
	return (
		<div className='text-input'>
			<img src={loupeSvg} alt='Loupe svg' />
			<input type='text' />
		</div>
	)
}
