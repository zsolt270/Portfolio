import { useContext } from "react";
import { LanguageContext } from "../services/providers/languageContext";

export default function Footer() {
	const languageContext = useContext(LanguageContext);
	return (
		<div className='row align-items-center py-5'>
			<div className='col fs-6'>
				<div className='d-flex gap-2 align-items-center mb-1'>
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
			<div className='col'>
				<h4>Let's connect!</h4>
				<p className='mb-0'>valami</p>
			</div>
		</div>
	);
}
