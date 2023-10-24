import { ChangeEvent, useState } from 'react'
import loupeSvg from '../../../assets/loupe.svg'
import './TextInput.css'
import { Filters } from '../../../types/typesTest'

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
			<img src={loupeSvg} alt='Loupe svg' />
			<input type='text' name='input' value={query} onChange={handleChange} />
		</div>
	)
}
