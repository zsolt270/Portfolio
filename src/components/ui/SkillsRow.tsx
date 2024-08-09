import { useContext } from "react";
import { ThemeContext } from "../../services/providers/themeContext";
import style from "./css.modules/SkillRow.module.css";

type SkillsRowProps = {
	texts: string[];
	srcs: string[];
};

export default function SkillsRow({ texts, srcs }: SkillsRowProps) {
	const themeContext = useContext(ThemeContext);
	const collumns = texts.map((text, index) => {
		return (
			<div
				key={text}
				className={`col text-center ${
					themeContext?.islight ? style.lightSkill : style.darkSkill
				}`}
			>
				<img
					src={srcs[index]}
					alt={`${text} icon`}
				/>
				<p className='pt-1'>{text}</p>
			</div>
		);
	});

	return <div className='row align-items-center mb-3 me-xl-5'>{collumns}</div>;
}
