import './SelectInput.css'
import { REGIONS_ARRAY as regions } from '../../../constants/constants'
import { CSSProperties, useState } from 'react'
import { Filters } from '../../../types/typesTest'

interface SelectInputProps {
	changeFilters: (field: keyof Filters, value: string) => void
}

export interface MyCustomCSS extends CSSProperties {
	'--trans': string
	'--rot': string
}

export default function SelectInput({ changeFilters }: SelectInputProps) {
	const [isSelectActive, setIsSelectActive] = useState(false)
	const [regionValue, setRegionValue] = useState('all')

	const toggleActive = () => {
		setIsSelectActive(!isSelectActive)
	}

	const handleClick = (region: string) => {
		setRegionValue(region)
		changeFilters('region', region)
		setIsSelectActive(false)
	}

	const regionsArr = regions.filter((region) => region !== regionValue)

	const customArrowStyle = isSelectActive
		? { '--trans': '-20%', '--rot': '225deg' }
		: { '--trans': '-80%', '--rot': '45deg' }

	return (
		<div className='select-cont'>
			<div className='select-btn' onClick={toggleActive}>
				{regionValue === 'all' ? 'Filter by region' : regionValue}
			</div>
			<span
				className='custom-arrow'
				style={customArrowStyle as MyCustomCSS}></span>
			<div className={`select-dropdown${isSelectActive ? ' active' : ''}`}>
				{regionsArr.map((region, index) => (
					<div
						className='option'
						key={index}
						onClick={() => handleClick(region)}>
						{region === 'all' ? 'All regions' : region}
					</div>
				))}
			</div>
		</div>
	)
}
