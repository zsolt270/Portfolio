import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../services/providers/languageContext";
import style from "./css.modules/Select.module.css";

type LanguageType = "HU" | "EN";

export default function Select() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectValue, setSelectValue] = useState("EN");
	const languageContext = useContext(LanguageContext);

	const handleSelect = (language: LanguageType) => {
		setSelectValue(language);
		languageContext?.setLanguage(language);
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div
				className={`d-flex justify-content-between align-items-center gap-2 pt-1 ${style.selectDiv}`}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<p className='mb-0'>{selectValue}</p>
				<i className='bi bi-chevron-down '></i>
			</div>
			{isOpen ? (
				<ul className={style.options}>
					<li
						onClick={() => {
							handleSelect("EN");
						}}
					>
						EN
					</li>
					<li
						onClick={() => {
							handleSelect("HU");
						}}
					>
						HU
					</li>
				</ul>
			) : null}
		</div>
	);
}
