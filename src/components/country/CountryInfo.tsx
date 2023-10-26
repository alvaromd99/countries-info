import { CountryTest, Filters } from '../../types/typesTest'
import './CountryInfo.css'
import Information from '../Info/Information'
import { useState } from 'react'
import { ArrowLeft } from '../../svg/SvgCollection'
import BorderCountries from './borders/BorderCountries'

interface CountryInfoProps {
	country: CountryTest
	changeSelected: (name: string) => void
	changeFilters: (field: keyof Filters, value: string) => void
}

export default function CountryInfo({
	country,
	changeSelected,
	changeFilters,
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

	return (
		<div className='info-cont'>
			<div className='btn-cont'>
				<button
					className='back-btn'
					onClick={() => {
						changeSelected('')
						changeFilters('text', '')
						changeFilters('region', 'all')
					}}>
					<div className='arrow-left-cont'>
						<ArrowLeft colorCode='var(--text-color)' />
					</div>
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
					<BorderCountries
						range={range}
						changeRange={changeRange}
						changeSelected={changeSelected}
						borders={country.borders}
					/>
				</div>
			</div>
		</div>
	)
}
