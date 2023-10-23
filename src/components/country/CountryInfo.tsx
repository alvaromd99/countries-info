import { CountryTest, Filters } from '../../types/typesTest'
import './CountryInfo.css'
import arrow from '../../assets/arrowLeft.svg'
import Information from '../Info/Information'
import data from '../../../mocks/data.json'
import { useState } from 'react'

interface CountryInfoProps {
	country: CountryTest
	changeSelected: (name: string) => void
	changeFilters: (field: keyof Filters, value: string) => void
}

export default function CountryInfo({
	country,
	changeSelected,
}: CountryInfoProps) {
	const [range, setRange] = useState({
		min: 0,
		max: 3,
	})

	const changeRange = (value: number) => {
		setRange((prevRange) => ({
			...prevRange,
			min: value,
			max: value + 3,
		}))
	}

	const languagesArr = country.languages.map((lang) => lang.name)

	const borderCountries = country.borders
		? country.borders.map((b) => {
				const borderData = data.find((c) => c.alpha3Code === b)
				return borderData?.name || ''
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  })
		: []

	return (
		<div className='info-cont'>
			<div className='btn-cont'>
				<button className='back-btn' onClick={() => changeSelected('')}>
					<img src={arrow} alt='Arrow left' />
					Back
				</button>
			</div>
			<div className='detail-info-cont'>
				<div className='info-flag'>
					<img src={country.flags.png} alt='Country flag' />
				</div>
				<div className='info-text'>
					<h2>{country.name}</h2>
					<div className='info-col-cont'>
						<div className='col1'>
							<Information info='Native Name' value={country.nativeName} />
							<Information
								info='Population'
								value={Intl.NumberFormat('en-US')
									.format(country.population)
									.toString()}
							/>
							<Information info='Region' value={country.region} />
							<Information info='Sub Region' value={country.subregion} />
							<Information info='Capital' value={country.capital} />
						</div>
						<div className='col2'>
							<Information
								info='Top Level Domain'
								value={country.topLevelDomain[0]}
							/>
							{country.currencies && (
								<Information
									info='Currencies'
									value={country.currencies[0].name}
								/>
							)}
							<Information info='Languages' value={languagesArr.join(', ')} />
						</div>
					</div>
					<div className='border-countries-cont'>
						<span>Border Countries: </span>
						{borderCountries[0] !== '' ? (
							<div className='border-countries-btn-cont'>
								{borderCountries
									.slice(range.min, range.max)
									.map((border, index) => (
										<button key={index} onClick={() => changeSelected(border)}>
											{border}
										</button>
									))}
							</div>
						) : (
							<p>No bordering countries found.</p>
						)}
						{range.max < borderCountries.length && (
							<button onClick={() => changeRange(range.max)}>More</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
