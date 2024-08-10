import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import { ThemeContext } from "../../services/providers/themeContext";
import SectionTitle from "../ui/SectionTitle";
import Carousel from "../ui/Carousel";

export default function ProjectsSection() {
	const languageContext = useContext(LanguageContext);
	const themeContext = useContext(ThemeContext);
	return (
		<div className=''>
			<SectionTitle
				title={
					languageContext?.language === "HU" ? "Projekteim" : "My Projects"
				}
			/>
			<Carousel />
			<a
				target='_blank'
				href='https://github.com/zsolt270'
			>
				<span className={`text-decoration-underline`}>More Projects Here</span>{" "}
				{/* <i className='bi bi-box-arrow-up-right'></i> */}
			</a>
		</div>
	);
}
