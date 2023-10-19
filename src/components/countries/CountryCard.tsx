import { CountryTest } from '../../types/typesTest'

interface CountryCardProps {
	country: CountryTest
}

export default function CountryCard({ country }: CountryCardProps) {
	return <div>{country.name}</div>
}
