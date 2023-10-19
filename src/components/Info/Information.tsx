import './Information.css'

interface InformationProps {
	info: string
	value?: string
}

export default function Information({ info, value }: InformationProps) {
	return (
		<p className='country-info'>
			<span className='bolder-text'>{info}: </span>
			{value || 'Capital'}
		</p>
	)
}
