import { CountryTest } from '../../types/typesTest'
import Information from '../Info/Information'
import './CountryCard.css'

interface CountryCardProps {
	country: CountryTest
	changeSelected: (name: string) => void
}

export default function CountryCard({
	country,
	changeSelected,
}: CountryCardProps) {
	return (
		<div className='card' onClick={() => changeSelected(country.name)}>
			<div className='card-image'>
				<img src={country.flags.png} alt='Country flag' />
			</div>
			<div className='card-info'>
				<h2>{country.name}</h2>
				<div className='detail-info'>
					<Information
						info='Population'
						value={Intl.NumberFormat('en-US')
							.format(country.population)
							.toString()}
					/>
					<Information info='Region' value={country.region} />
					<Information info='Capital' value={country.capital} />
				</div>
			</div>
		</div>
	)
}
