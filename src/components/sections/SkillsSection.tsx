import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import SectionTitle from "../ui/SectionTitle";

export default function SkillsSection() {
	const languageContext = useContext(LanguageContext);
	return (
		<>
			<SectionTitle
				title={languageContext?.language === "HU" ? "Készségeim" : "My Skill"}
			/>
			<div className='row'>
				<div className='col'>
					<p>HTML</p>
				</div>
				<div className='col'>
					<p>CSS</p>
				</div>
				<div className='col'>
					<p>Bootstrap 5</p>
				</div>
				<div className='col'>
					<p>JavaScript</p>
				</div>
				<div className='col'>
					<p>TypeScript</p>
				</div>
				<div className='col'>
					<p>React</p>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<p>Node.js</p>
				</div>
				<div className='col'>
					<p>Express.js</p>
				</div>
				<div className='col'>
					<p>MongoDB 5</p>
				</div>
				<div className='col'>
					<p>MySql</p>
				</div>
				<div className='col'>
					<p>Git</p>
				</div>
				<div className='col'>
					<p>Github</p>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<p>Figma</p>
				</div>
				<div className='col'>
					<p>NPM</p>
				</div>
			</div>
		</>
	);
}
