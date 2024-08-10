import { useContext } from "react";
import { ThemeContext } from "../../services/providers/themeContext";
import CarouselCard from "./CarouselCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css.modules/Carousel.css";
import { NextArrow, PrevArrow } from "./SliderArrow";
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
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2.8,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2.4,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2.3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1.8,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};
	return (
		<Slider {...settings}>
			{/* ide mapelni kéne a projectcontentet és akkor úgy átpasszolni a propokat */}
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
