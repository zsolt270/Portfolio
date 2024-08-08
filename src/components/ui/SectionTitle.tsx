interface SectionTitleType {
	title: string;
}

export default function SectionTitle({ title }: SectionTitleType) {
	return (
		<div className='row my-4'>
			<h2>{title}</h2>
		</div>
	);
}
