import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import { ThemeContext } from "../../services/providers/themeContext";
import style from "./css.modules/ProjectSection.module.css";
import Carousel from "../ui/Carousel";

export default function ProjectsSection() {
	const languageContext = useContext(LanguageContext);
	const themeContext = useContext(ThemeContext);
	return (
		<div
			id={languageContext?.language == "HU" ? "Projektek" : "Projects"}
			className='mt-5'
		>
			<div className='row text-center text-md-start mt-4'>
				<h2>
					{languageContext?.language === "HU" ? "Projekteim" : "My Projects"}
				</h2>
			</div>
			<Carousel />
			<div className='text-center mt-4'>
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
