import './App.css'
import data from '../mocks/data.json'
import Header from './components/header/Header'
import CountryCard from './components/countries/CountryCard'

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='main'>
				<div className='controls-cont'></div>
				<div className='countries-cont'>
					{data.map((c, index) => (
						<CountryCard key={index} country={c} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
