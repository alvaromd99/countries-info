import { CountryTest } from '../../types/typesTest'
import './CountryInfo.css'

interface CountryInfoProps {
	country: CountryTest
}

export default function CountryInfo({ country }: CountryInfoProps) {
	return <div>{country.name}</div>
}
