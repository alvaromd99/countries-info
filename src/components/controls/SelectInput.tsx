import './SelectInput.css'

export default function SelectInput() {
	return (
		<div className='select-cont'>
			<select name='region-select' id='region'>
				<option value=''>Select region</option>
				<option value=''>b</option>
				<option value=''>c</option>
				<option value=''>d</option>
				<option value=''>e</option>
			</select>
		</div>
	)
}
