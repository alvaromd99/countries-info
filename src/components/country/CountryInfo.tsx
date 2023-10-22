import { CountryTest } from '../../types/typesTest'
import './CountryInfo.css'
import arrow from '../../assets/arrowLeft.svg'

interface CountryInfoProps {
	country: CountryTest
	changeSelected: (name: string) => void
}

export default function CountryInfo({
	country,
	changeSelected,
}: CountryInfoProps) {
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
				</div>
			</div>
		</div>
	)
}