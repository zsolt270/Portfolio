import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import waving from "../../assets/wave-icon.png";
import style from "./css.modules/About.module.css";
import * as AboutContent from "../../utils/contents/AboutContent.json";

export default function AboutSection() {
	const languageContext = useContext(LanguageContext);
	let mainText;
	let otherText;
	if (languageContext?.language == "HU") {
		mainText = AboutContent.HU.mainText.split(".");
		otherText = AboutContent.HU.Other.split(":");
	} else {
		mainText = AboutContent.EN.mainText.split(".");
		otherText = AboutContent.EN.Other.split(":");
	}
	return (
		<div className='d-block d-md-flex gap-4 mb-5'>
			<div>
				<h1
					className={`text-center text-md-start mb-3 mb-sm-2 ${style.levitateText}`}
				>
					{languageContext?.language == "HU"
						? AboutContent.HU.title
						: AboutContent.EN.title}
					<img
						className={`pb-3 ${style.waving}`}
						src={waving}
						alt='an icon about a hand waving'
					/>
				</h1>
				<div className={`${style.imgDiv} d-block d-md-none mb-4 mb-sm-5`}></div>
				<p className={`${style.levitateText}`}>
					<span className='fw-bold'>{mainText[0]}.</span>
					{mainText[1]}.
					<br />
					{mainText[2]}.{mainText[3]}
				</p>

				<p className={`${style.levitateText}`}>
					<span className='fw-bold'>{otherText[0]}: </span>
					{otherText[1]}
				</p>
			</div>
			<div className={`${style.imgDiv} d-none d-md-block`}></div>
		</div>
	);
}
