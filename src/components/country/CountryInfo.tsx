import { CountryTest } from '../../types/typesTest'
import './CountryInfo.css'

interface CountryInfoProps {
	country: CountryTest
	changeSelected: (name: string) => void
}

export default function CountryInfo({
	country,
	changeSelected,
}: CountryInfoProps) {
	return (
		<div>
			<button onClick={() => changeSelected('')}>Back</button>
			{country.name}
		</div>
	)
}
