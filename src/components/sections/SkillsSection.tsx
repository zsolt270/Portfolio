import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import SectionTitle from "../ui/SectionTitle";
import SkillsRow from "../ui/SkillsRow";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import tsIcon from "../../assets/ts-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import nodejsIcon from "../../assets/nodejs-icon.svg";
import expressjsIcon from "../../assets/expressjs-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import gitlIcon from "../../assets/git-icon.svg";
import githublIcon from "../../assets/github-icon.svg";
import figmalIcon from "../../assets/figma-icon.svg";
import npmlIcon from "../../assets/npm-icon.svg";

export default function SkillsSection() {
	const languageContext = useContext(LanguageContext);
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
	return (
		<>
			<SectionTitle
				title={languageContext?.language === "HU" ? "Készségeim" : "My Skill"}
			/>
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
}
