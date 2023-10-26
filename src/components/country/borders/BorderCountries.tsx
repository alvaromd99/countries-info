import { ArrowLiteLeft, ArrowLiteRight } from '../../../svg/SvgCollection'
import data from '../../../../mocks/data.json'

interface BorderCountriesProps {
	range: { min: number; max: number }
	changeRange: (value: number) => void
	changeSelected: (name: string) => void
	borders: string[] | undefined
}

export default function BorderCountries({
	range,
	changeRange,
	changeSelected,
	borders,
}: BorderCountriesProps) {
	const borderCountries = borders
		? borders.map((b) => {
				const borderData = data.find((c) => c.alpha3Code === b)
				return borderData?.name || ''
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  })
		: []

	return (
		<div className='border-countries-cont'>
			<span>Border Countries: </span>
			{borderCountries[0] !== undefined ? (
				<div className='border-countries-btn-cont'>
					{borderCountries.slice(range.min, range.max).map((border, index) => (
						<button
							key={index}
							onClick={() => {
								changeSelected(border)
								changeRange(0)
							}}>
							{border}
						</button>
					))}
				</div>
			) : (
				<p>No bordering countries found.</p>
			)}
			{range.max < borderCountries.length && (
				<button className='borders-btn' onClick={() => changeRange(range.max)}>
					<div className='arrow-right-left-cont'>
						<ArrowLiteRight colorCode='var(--text-color)' />
					</div>
				</button>
			)}
			{range.min !== 0 && borderCountries.length > 0 && (
				<button
					className='borders-btn'
					onClick={() => changeRange(range.min - 3)}>
					<div className='arrow-lite-left-cont'>
						<ArrowLiteLeft colorCode='var(--text-color)' />
					</div>
				</button>
			)}
		</div>
	)
}
