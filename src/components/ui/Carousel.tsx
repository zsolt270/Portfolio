import CarouselCard from "./CarouselCard";
import style from "./css.modules/Carousel.module.css";
import restcountry from "../../assets/projects/restcountry.png";
import todoapp from "../../assets/projects/todoapp.png";
import piano from "../../assets/projects/piano.png";
import loopstudios from "../../assets/projects/loopstudios.png";
import portfolio from "../../assets/projects/portfolio.png";

export default function Carousel() {
	return (
		<>
			<div
				id='carouselExample'
				className='carousel slide mb-5'
			>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<CarouselCard
							src={restcountry}
							title={"Rest Country"}
						/>
					</div>
					<div className='carousel-item'>
						<CarouselCard
							src={todoapp}
							title={"Todo App"}
						/>
					</div>
					<div className='carousel-item'>
						<CarouselCard
							src={piano}
							title={"Coloured-Piano"}
						/>
					</div>
					<div className='carousel-item'>
						<CarouselCard
							src={loopstudios}
							title={"LoopStudios"}
						/>
					</div>
					<div className='carousel-item'>
						<CarouselCard
							src={portfolio}
							title={"Portfolio"}
						/>
					</div>
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExample'
					data-bs-slide='prev'
				>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExample'
					data-bs-slide='next'
				>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</>
	);
}
{
	/* <CarouselCard
src={restcountry}
title={"Rest Country"}
/> */
}
