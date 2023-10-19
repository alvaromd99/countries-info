import './Header.css'
import moonSvg from '../../assets/moon.svg'

export default function Header() {
	return (
		<div className='header'>
			<h1>Where in the world ?</h1>
			<button className='theme-btn'>
				<img src={moonSvg} alt='Moon svg' />
				<p>Dark mode</p>
			</button>
		</div>
	)
}
