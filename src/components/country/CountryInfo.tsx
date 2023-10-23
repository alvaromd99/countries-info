import { CountryTest } from '../../types/typesTest'
import './CountryInfo.css'
import arrow from '../../assets/arrowLeft.svg'
import Information from '../Info/Information'

interface CountryInfoProps {
	country: CountryTest
	changeSelected: (name: string) => void
}

export default function CountryInfo({
	country,
	changeSelected,
}: CountryInfoProps) {
	const languagesArr = country.languages.map((lang) => lang.name)

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
						<div className='border-countries-cont'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
