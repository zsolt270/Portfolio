import { useContext, useState } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import SkillsRow from "../ui/SkillsRow";
import htmlIcon from "../../assets/icons/html-icon.svg";
import cssIcon from "../../assets/icons/css-icon.svg";
import bootstrapIcon from "../../assets/icons/bootstrap-icon.svg";
import jsIcon from "../../assets/icons/js-icon.svg";
import tsIcon from "../../assets/icons/ts-icon.svg";
import reactIcon from "../../assets/icons/react-icon.svg";
import nodejsIcon from "../../assets/icons/nodejs-icon.svg";
import expressjsIcon from "../../assets/icons/expressjs-icon.svg";
import mongodbIcon from "../../assets/icons/mongodb-icon.svg";
import mysqlIcon from "../../assets/icons/mysql-icon.svg";
import gitlIcon from "../../assets/icons/git-icon.svg";
import githublIcon from "../../assets/icons/github-icon.svg";
import figmalIcon from "../../assets/icons/figma-icon.svg";
import npmlIcon from "../../assets/icons/npm-icon.svg";

export default function SkillsSection() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const languageContext = useContext(LanguageContext);
	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	window.addEventListener("resize", handleResize);

	const skills = [
		"HTML",
		"CSS",
		"Bootstrap 5",
		"JavaScript",
		"TypeScript",
		"React",
		"Figma",
		"Node.js",
		"Express.js",
		"MongoDB",
		"MySql",
		"NPM",
		"Git",
		"Github",
	];
	const skillsIcons = [
		htmlIcon,
		cssIcon,
		bootstrapIcon,
		jsIcon,
		tsIcon,
		reactIcon,
		figmalIcon,
		nodejsIcon,
		expressjsIcon,
		mongodbIcon,
		mysqlIcon,
		npmlIcon,
		gitlIcon,
		githublIcon,
	];
	if (windowWidth > 992) {
		return (
			<>
				<div
					id={languageContext?.language == "HU" ? "Készségek" : "Skills"}
					className='row my-4'
				>
					<h2>
						{languageContext?.language === "HU" ? "Készségeim" : "My Skills"}
					</h2>
				</div>
				<SkillsRow
					texts={skills.slice(0, 7)}
					srcs={skillsIcons.slice(0, 7)}
				/>
				<SkillsRow
					texts={skills.slice(7, 14)}
					srcs={skillsIcons.slice(7, 14)}
				/>
			</>
		);
	} else if (windowWidth < 992 && innerWidth > 768) {
		return (
			<>
				<div
					id={languageContext?.language == "HU" ? "Készségek" : "Skills"}
					className='row my-4'
				>
					<h2>
						{languageContext?.language === "HU" ? "Készségeim" : "My Skill"}
					</h2>
				</div>
				<SkillsRow
					texts={skills.slice(0, 5)}
					srcs={skillsIcons.slice(0, 5)}
				/>
				<SkillsRow
					texts={skills.slice(5, 10)}
					srcs={skillsIcons.slice(5, 10)}
				/>
				<SkillsRow
					texts={skills.slice(10, 14)}
					srcs={skillsIcons.slice(10, 14)}
				/>
			</>
		);
	} else if (windowWidth < 768 && innerWidth > 486) {
		return (
			<>
				<div
					id={languageContext?.language == "HU" ? "Készségek" : "Skills"}
					className='row text-center my-4'
				>
					<h2>
						{languageContext?.language === "HU" ? "Készségeim" : "My Skill"}
					</h2>
				</div>
				<SkillsRow
					texts={skills.slice(0, 4)}
					srcs={skillsIcons.slice(0, 4)}
				/>
				<SkillsRow
					texts={skills.slice(4, 8)}
					srcs={skillsIcons.slice(4, 8)}
				/>
				<SkillsRow
					texts={skills.slice(8, 12)}
					srcs={skillsIcons.slice(8, 12)}
				/>
				<SkillsRow
					texts={skills.slice(12, 14)}
					srcs={skillsIcons.slice(12, 14)}
				/>
			</>
		);
	} else {
		return (
			<>
				<div
					id={languageContext?.language == "HU" ? "Készségek" : "Skills"}
					className='row text-center my-4'
				>
					<h2>
						{languageContext?.language === "HU" ? "Készségeim" : "My Skill"}
					</h2>
				</div>
				<SkillsRow
					texts={skills.slice(0, 3)}
					srcs={skillsIcons.slice(0, 3)}
				/>
				<SkillsRow
					texts={skills.slice(3, 6)}
					srcs={skillsIcons.slice(3, 6)}
				/>
				<SkillsRow
					texts={skills.slice(6, 9)}
					srcs={skillsIcons.slice(6, 9)}
				/>
				<SkillsRow
					texts={skills.slice(9, 12)}
					srcs={skillsIcons.slice(9, 12)}
				/>
				<SkillsRow
					texts={skills.slice(12, 14)}
					srcs={skillsIcons.slice(12, 14)}
				/>
			</>
		);
	}
}
