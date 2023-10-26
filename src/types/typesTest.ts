export type Filters = {
	text: string
	region: string
}

export interface CountryTest {
	name: string
	topLevelDomain: string[]
	alpha2Code: string
	alpha3Code: string
	callingCodes: string[]
	capital?: string
	altSpellings?: string[]
	subregion: string
	region: string
	population: number
	latlng?: number[]
	demonym: string
	area?: number
	timezones: string[]
	borders?: string[]
	nativeName: string
	numericCode: string
	flags: Flag
	currencies?: Currency[]
	languages: Language[]
	translations: Translation
	flag: string
	regionalBlocs?: RegionalBloc[]
	cioc?: string
	independent: boolean
	gini?: number
}

export interface Currency {
	code: string
	name: string
	symbol: string
}

export interface Flag {
	svg: string
	png: string
}

export interface Language {
	iso639_1?: string
	iso639_2: string
	name: string
	nativeName?: string
}

export interface RegionalBloc {
	acronym: string
	name: string
	otherNames?: string[]
	otherAcronyms?: string[]
}

export interface Translation {
	br: string
	pt: string
	nl: string
	hr: string
	fa?: string
	de: string
	es: string
	fr: string
	ja: string
	it: string
	hu: string
}

export interface SelectContextType {
	selected: string
	updateSelected: (name: string) => void
}
