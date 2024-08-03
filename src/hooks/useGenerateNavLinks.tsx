import style from "../components/css.modules/Header.module.css";
import { useContext } from "react";
import { LanguageContext } from "../services/providers/languageContext";
import { ThemeContext } from "../services/providers/themeContext";
import * as HeaderContent from "../utils/contents/HeaderContent.json";

export const useGenerateNavLinks = () => {
	const themeContext = useContext(ThemeContext);
	const languageContext = useContext(LanguageContext);

	let navLinks = null;

	if (languageContext?.language == "HU") {
		navLinks = HeaderContent.HU.navLinks.map((navlink) => {
			return (
				<a
					className={`nav-item mb-0 ${
						themeContext?.islight ? style.lightNavLink : style.darkNavLink
					}`}
					key={navlink}
				>
					{navlink}
				</a>
			);
		});
	} else {
		navLinks = HeaderContent.EN.navLinks.map((navlink) => {
			return (
				<a
					className={`nav-item mb-0 ${
						themeContext?.islight ? style.lightNavLink : style.darkNavLink
					}`}
					key={navlink}
				>
					{navlink}
				</a>
			);
		});
	}
	return navLinks;
};
