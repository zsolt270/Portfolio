import { useContext } from "react";
import { ThemeContext } from "../../services/providers/themeContext";
import CarouselCard from "./CarouselCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css.modules/Carousel.css";
import restcountry from "../../assets/projects/restcountry.png";
import todoapp from "../../assets/projects/todoapp.png";
import piano from "../../assets/projects/piano.png";
import loopstudios from "../../assets/projects/loopstudios.png";
import portfolio from "../../assets/projects/portfolio.png";

export default function Carousel() {
	const themeContext = useContext(ThemeContext);

	const settings = {
		accessibility: true,
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Slider {...settings}>
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
			<CarouselCard
				src={loopstudios}
				title={"Rest Country"}
				islight={themeContext?.islight}
			/>
			<CarouselCard
				src={portfolio}
				title={"Rest Country"}
				islight={themeContext?.islight}
			/>
		</Slider>
	);
}
