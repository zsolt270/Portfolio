import { useContext } from "react";
import { LanguageContext } from "../services/providers/languageContext";
import { ThemeContext } from "../services/providers/themeContext";
import style from "./css.modules/Footer.module.css";

export default function Footer() {
	const languageContext = useContext(LanguageContext);
	const themeContext = useContext(ThemeContext);
	return (
		<div className='row py-5 align-items-end'>
			{/* mobile get in touch */}
			<div className='col-12 text-center d-block d-sm-none mb-5'>
				<h4 className='mb-3'>
					{languageContext?.language == "HU"
						? "Kapcsolatfelvétel"
						: "Get in touch"}
				</h4>
				<div
					className={`d-flex justify-content-center gap-4 fs-1 ${
						themeContext?.islight ? style.lightconnect : style.darkconnect
					}`}
				>
					<a href='mailto:disha@uplers.com'>
						<i className='bi bi-envelope-fill'></i>
					</a>
					<a
						target='_blank'
						href='https://www.linkedin.com/in/zsoltbalogh-junior/'
					>
						<i className='bi bi-linkedin'></i>
					</a>
					<a
						target='_blank'
						href='https://github.com/zsolt270'
					>
						<i className='bi bi-github'></i>
					</a>
				</div>
			</div>
			{/* mobile get in touch end*/}

			<div className='col fs-6 text-center text-sm-start'>
				<div className='d-flex justify-content-center justify-content-sm-start gap-2 mb-1'>
					<i className='bi bi-c-circle'></i>
					<p className='mb-0'>
						2024{" "}
						{languageContext?.language == "HU"
							? "Balogh Zsolt."
							: "Zsolt Balogh."}
					</p>
				</div>
				{languageContext?.language == "HU" ? "Legtöbb ikon " : "Most icons by "}
				<a
					target='_blank'
					href='https://icons8.com'
				>
					<span className='text-decoration-underline'>Icons8</span>{" "}
					{languageContext?.language == "HU" && " által"}
				</a>
			</div>

			<div className='col text-end d-none d-sm-inline'>
				<h4>
					{languageContext?.language == "HU"
						? "Kapcsolatfelvétel"
						: "Get in touch"}
				</h4>
				<div
					className={`d-flex justify-content-end gap-4 fs-3 ${
						themeContext?.islight ? style.lightconnect : style.darkconnect
					}`}
				>
					<a href='mailto:disha@uplers.com'>
						<i className='bi bi-envelope-fill'></i>
					</a>
					<a
						target='_blank'
						href='https://www.linkedin.com/in/zsoltbalogh-junior/'
					>
						<i className='bi bi-linkedin'></i>
					</a>
					<a
						target='_blank'
						href='https://github.com/zsolt270'
					>
						<i className='bi bi-github'></i>
					</a>
				</div>
			</div>
		</div>
	);
}
