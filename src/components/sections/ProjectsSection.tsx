import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import SectionTitle from "../ui/SectionTitle";

export default function ProjectsSection() {
	const languageContext = useContext(LanguageContext);
	return (
		<>
			<SectionTitle
				title={
					languageContext?.language === "HU" ? "Projekteim" : "My Projects"
				}
			/>
		</>
	);
}
