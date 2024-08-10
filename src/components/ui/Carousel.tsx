import CarouselCard from "./CarouselCard";
import restcountry from "../../assets/projects/restcountry.png";
import todoapp from "../../assets/projects/todoapp.png";
import piano from "../../assets/projects/piano.png";
import loopstudios from "../../assets/projects/loopstudios.png";
import portfolio from "../../assets/projects/portfolio.png";

export default function Carousel() {
	return (
		<>
			<CarouselCard
				src={restcountry}
				title={"Rest Country"}
			/>
		</>
	);
}
