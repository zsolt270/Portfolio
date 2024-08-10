import { useContext } from "react";
import { ThemeContext } from "../../services/providers/themeContext";
import CarouselCard from "./CarouselCard";
import "./css.modules/Carousel.css";
import restcountry from "../../assets/projects/restcountry.png";
import todoapp from "../../assets/projects/todoapp.png";
import piano from "../../assets/projects/piano.png";
import loopstudios from "../../assets/projects/loopstudios.png";
import portfolio from "../../assets/projects/portfolio.png";

export default function Carousel() {
	const themeContext = useContext(ThemeContext);
	return (
		<div className='mb-5 d-flex gap-5'>
			<CarouselCard
				src={restcountry}
				title={"Rest Country"}
				islight={themeContext?.islight}
			/>
			<CarouselCard
				src={todoapp}
				title={"Rest Country"}
				islight={themeContext?.islight}
			/>
			<CarouselCard
				src={piano}
				title={"Rest Country"}
				islight={themeContext?.islight}
			/>
		</div>
	);
}
