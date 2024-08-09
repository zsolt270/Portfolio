type SkillsRowProps = {
	texts: string[];
	srcs: string[];
};

export default function SkillsRow({ texts, srcs }: SkillsRowProps) {
	const collumns = texts.map((text, index) => {
		return (
			<div
				key={text}
				className='col text-center'
			>
				<img
					src={srcs[index]}
					alt={`${text} icon`}
				/>
				<p>{text}</p>
			</div>
		);
	});

	return <div className='row'>{collumns}</div>;
}
{
}
