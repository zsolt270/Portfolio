// import style from "./css.modules/Header.module.css";

export default function Header() {
	return (
		<>
			<header>
				<nav className='navbar navbar-expand-lg '>
					<div className='container-fluid px-0 mt-4'>
						<a
							className='navbar-brand'
							href='#'
						>
							<i className='bi bi-house-fill'></i>
							{/* <i
								className={`bi ${
									style.lightmode ? "bi-house" : "bi-house-fill"
								}`}
							></i> */}
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarScroll'
							aria-controls='navbarScroll'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse w-100 justify-content-between'
							id='navbarScroll'
						>
							{/* ide kell egy select a nyelvnek és a thememodenak*/}

							<div className='navbar-nav'>
								<a className='nav-item mb-0'>About</a>
								<a className='nav-item mb-0'>Skills</a>
								<a className='nav-item mb-0'>Project</a>
								<a className='nav-item mb-0'>Contact</a>
							</div>
							<div className='d-flex gap-3'>
								{/* wave icon kéne ide ami a legtetejére viszi */}
								<p className='mb-0'>select</p>
								<i className='bi bi-brightness-high-fill'></i>
								{/* ez kell majd */}
								{/* <i
									class={`bi ${
										style.lightmode ? "bi-brightness-high-fill" : "bi-moon-fill"
									}`}
								></i> */}
							</div>
							{/* <ul className='navbar-nav w-100 justify-content-end'>
								<li className='nav-item'>
									<a
										className='nav-link'
										aria-current='page'
										href='#'
									>
										About
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link'
										href='#'
									>
										Skills
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link '
										aria-disabled='true'
									>
										Projects
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link '
										aria-disabled='true'
									>
										Contact
									</a>
								</li>
							</ul> */}
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
