import './App.css'
import data from '../mocks/data.json'
import Header from './components/header/Header'
import CountryCard from './components/countries/CountryCard'
import TextInput from './components/controls/text/TextInput'
import SelectInput from './components/controls/select/SelectInput'
import { useState } from 'react'
import { Filters } from './types/typesTest'

function App() {
	const [filters, setFilters] = useState<Filters>({ text: '', region: 'all' })

	// 	const changeTextFilter = (text: string) => {}
	const updateFilter = (field: keyof Filters, value: string) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[field]: value,
		}))
	}

	console.log('Filter -> ', filters.region)

	const filteredData = data.filter((c) => {
		if (filters.region === 'all') {
			return c
		}
		return c.region === filters.region
	})

	return (
		<div className='App'>
			<Header />
			<div className='main'>
				<div className='controls-cont'>
					<TextInput />
					<SelectInput changeFilters={updateFilter} />
				</div>
				<div className='countries-cont'>
					{filteredData.map((c, index) => (
						<CountryCard key={index} country={c} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
