import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import SectionTitle from "../ui/SectionTitle";
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
