import { ChangeEvent, useState } from 'react'
import './TextInput.css'
import { Filters } from '../../../types/typesTest'
import { Loupe } from '../../../svg/SvgCollection'

export interface TextInputProps {
	changeFilters: (field: keyof Filters, value: string) => void
}

export default function TextInput({ changeFilters }: TextInputProps) {
	const [query, setQuery] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
		changeFilters('text', e.target.value)
	}

	return (
		<div className='text-input'>
			<div className='loupe-cont'>
				<Loupe colorCode='var(--text-color)' />
			</div>
			<input type='text' name='input' value={query} onChange={handleChange} />
		</div>
	)
}
