import './SelectInput.css'
import { REGIONS_ARRAY as regions } from '../../../constants/constants'
import { useState } from 'react'

export default function SelectInput() {
	const [isSelectActive, setIsSelectActive] = useState(false)

	const toggleActive = () => {
		setIsSelectActive(!isSelectActive)
	}

	return (
		<div className='select-cont'>
			<div className='select-btn' onClick={toggleActive}>
				Filter by Region
			</div>
			<span
				className={`custom-arrow${isSelectActive ? ' up' : ' down'}`}></span>

			<div className={`select-dropdown${isSelectActive ? ' active' : ''}`}>
				{regions.map((region, index) => (
					<div className='option' key={index}>
						{region}
					</div>
				))}
			</div>
		</div>
	)
}
