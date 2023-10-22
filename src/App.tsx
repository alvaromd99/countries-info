import './App.css'
import data from '../mocks/data.json'
import { useState } from 'react'
import { Filters } from './types/typesTest'
import Header from './components/header/Header'
import CountryCard from './components/countries/CountryCard'
import CountryInfo from './components/country/CountryInfo'
import TextInput from './components/controls/text/TextInput'
import SelectInput from './components/controls/select/SelectInput'

function App() {
	const [filters, setFilters] = useState<Filters>({ text: '', region: 'all' })
	const [selected, setSelected] = useState('Belgium')

	const updateFilter = (field: keyof Filters, value: string) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[field]: value,
		}))
	}

	const updateSelected = (name: string) => {
		setSelected(name)
	}

	const filteredData = data.filter((c) => {
		const isMatchingRegion =
			filters.region === 'all' || c.region === filters.region
		const isMatchingText = c.name
			.toLowerCase()
			.includes(filters.text.toLowerCase())

		return isMatchingRegion && (filters.text === '' || isMatchingText)
	})

	const selectedCountry =
		selected !== '' ? data.find((c) => c.name === selected) : null

	return (
		<div className='App'>
			<div className='header-cont'>
				<Header />
			</div>
			{selectedCountry ? (
				<div className='more-info-main'>
					<CountryInfo
						country={selectedCountry}
						changeSelected={updateSelected}
					/>
				</div>
			) : (
				<div className='main'>
					<div className='controls-cont'>
						<TextInput changeFilters={updateFilter} />
						<SelectInput changeFilters={updateFilter} />
					</div>
					<div className='countries-cont'>
						{filteredData.map((c, index) => (
							<CountryCard
								key={index}
								country={c}
								changeSelected={updateSelected}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default App
