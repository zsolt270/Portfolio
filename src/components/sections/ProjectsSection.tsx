import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import SectionTitle from "../ui/SectionTitle";
import Carousel from "../ui/Carousel";

export default function ProjectsSection() {
	const languageContext = useContext(LanguageContext);
	return (
		<>
			<SectionTitle
				title={
					languageContext?.language === "HU" ? "Projekteim" : "My Projects"
				}
			/>
			<Carousel />
		</>
	);
}
