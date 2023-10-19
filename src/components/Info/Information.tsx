interface InformationProps {
	info: string
	value?: string
}

export default function Information({ info, value }: InformationProps) {
	return (
		<p>
			<span className='bolder-text'>{info}: </span>
			{value || 'Capital'}
		</p>
	)
}
