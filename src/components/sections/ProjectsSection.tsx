import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import { ThemeContext } from "../../services/providers/themeContext";
import style from "./css.modules/ProjectSection.module.css";
import SectionTitle from "../ui/SectionTitle";
import Carousel from "../ui/Carousel";

export default function ProjectsSection() {
	const languageContext = useContext(LanguageContext);
	const themeContext = useContext(ThemeContext);
	return (
		<div>
			<SectionTitle
				title={
					languageContext?.language === "HU" ? "Projekteim" : "My Projects"
				}
			/>
			<Carousel />
			<div className='text-center'>
				<p>FOR MORE PROJECTS</p>
				<a
					target='_blank'
					href='https://github.com/zsolt270'
				>
					<span
						className={`text-decoration-underline ${
							themeContext?.islight ? style.darkLink : style.lightLink
						}`}
					>
						CLICK HERE
					</span>{" "}
				</a>
			</div>
		</div>
	);
}
