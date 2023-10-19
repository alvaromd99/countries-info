import { CountryTest } from '../../types/typesTest'

interface CountryCardProps {
	key: number
	country: CountryTest
}

export default function CountryCard({ country }: CountryCardProps) {
	return <div>{country.name}</div>
}
