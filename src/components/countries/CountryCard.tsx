import { CountryTest } from '../../types/typesTest'
import Information from '../Info/Information'
import './CountryCard.css'

interface CountryCardProps {
	country: CountryTest
}

export default function CountryCard({ country }: CountryCardProps) {
	return (
		<div className='card'>
			<img className='card-info' src={country.flags.png} alt='Country flag' />
			<div className='card-info'>
				<h2>{country.name}</h2>
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
	)
}
