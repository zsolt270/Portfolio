import style from "./css.modules/Header.module.css";
import { useContext } from "react";
import { ThemeContext } from "../services/providers/themeContext";
import { useGenerateNavLinks } from "../hooks/useGenerateNavLinks";
import Select from "./ui/Select";

export default function Header() {
	const themeContext = useContext(ThemeContext);
	const navLinks = useGenerateNavLinks();

	return (
		<>
			<header>
				<nav className='navbar navbar-expand-md '>
					<div className='container-fluid px-0 mt-4'>
						<a
							className='pb-1 pe-4'
							href='#'
						>
							<i
								className={`bi fs-5  ${
									themeContext?.islight ? "bi-house" : "bi-house-fill"
								}`}
							></i>
						</a>
						<button
							className={`navbar-toggler ${
								themeContext?.islight
									? style.lightHamburger
									: style.darkHamburger
							}`}
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarScroll'
							aria-controls='navbarScroll'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon '></span>
						</button>
						<div
							className='collapse navbar-collapse w-100 justify-content-between'
							id='navbarScroll'
						>
							<div className='navbar-nav gap-2 gap-md-4 pt-1 mb-3 mb-md-0'>
								{navLinks}
							</div>
							<div className='d-flex gap-3'>
								<Select />
								<i
									className={`bi fs-5 ${
										themeContext?.islight
											? `bi-moon-fill ${style.lightThemeToggler}`
											: `bi-sun-fill ${style.darkThemeToggler}`
									} `}
									onClick={() => {
										themeContext?.setIsLight(!themeContext.islight);
									}}
								></i>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
