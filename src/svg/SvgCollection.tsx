interface ColorProps {
	colorCode: string
}

export const ArrowLeft = ({ colorCode }: ColorProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-arrow-narrow-left'
			width='44'
			height='44'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke={colorCode}
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M5 12l14 0' />
			<path d='M5 12l4 4' />
			<path d='M5 12l4 -4' />
		</svg>
	)
}

export const ArrowLiteLeft = ({ colorCode }: ColorProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-chevron-left'
			width='34'
			height='34'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke={colorCode}
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M15 6l-6 6l6 6' />
		</svg>
	)
}

export const ArrowLiteRight = ({ colorCode }: ColorProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-chevron-right'
			width='34'
			height='34'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke={colorCode}
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M9 6l6 6l-6 6' />
		</svg>
	)
}

export const Loupe = ({ colorCode }: ColorProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-search'
			width='32'
			height='32'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke={colorCode}
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
			<path d='M21 21l-6 -6' />
		</svg>
	)
}
