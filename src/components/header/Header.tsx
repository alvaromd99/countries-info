import './Header.css'
import moonSvg from '../../assets/moon.svg'
import sunSvg from '../../assets/sun.svg'
import { useState } from 'react'

export default function Header() {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const setDarkMode = () => {
		document.querySelector('body')?.setAttribute('data-theme', 'dark')
	}

	const setLightMode = () => {
		document.querySelector('body')?.setAttribute('data-theme', 'light')
	}

	const toggleTheme = () => {
		if (isDarkMode) setLightMode()
		else setDarkMode()

		setIsDarkMode(!isDarkMode)
	}

	return (
		<div className='header'>
			<h1>Where in the world ?</h1>
			<button className='theme-btn' onClick={toggleTheme}>
				<img src={isDarkMode ? sunSvg : moonSvg} alt='Moon svg' />
				<p>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
			</button>
		</div>
	)
}
