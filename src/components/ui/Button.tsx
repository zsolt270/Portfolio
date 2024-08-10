import { useContext } from "react";
import { ThemeContext } from "../../services/providers/themeContext";
import style from "./css.modules/Button.module.css";

interface ButtonProps {
	href: string;
	text: string;
}

export default function Button({ href, text }: ButtonProps) {
	const themeContext = useContext(ThemeContext);

	return (
		<a
			className={`${
				themeContext?.islight ? style.lightButton : style.darkButton
			} position-relative`}
			target='_blank'
			href={href}
		>
			{text}
			<i className='bi bi-chevron-right '></i>
		</a>
	);
}
