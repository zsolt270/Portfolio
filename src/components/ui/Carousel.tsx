import { useContext } from "react";
import { ThemeContext } from "../../services/providers/themeContext";
import { LanguageContext } from "../../services/providers/languageContext";
import CarouselCard from "./CarouselCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css.modules/Carousel.css";
import { NextArrow, PrevArrow } from "./SliderArrow";
import { projectContents } from "../../utils/contents/ProjectContents";

export default function Carousel() {
	console.log(
		projectContents.map((content) => {
			return content;
		})
	);
	const themeContext = useContext(ThemeContext);
	const languageContext = useContext(LanguageContext);
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
			{projectContents.map((content) => {
				return (
					<CarouselCard
						key={content.title}
						src={content.src}
						title={content.title}
						islight={themeContext?.islight}
						text={
							languageContext?.language == "HU"
								? content.text.HU
								: content.text.EN
						}
						demoLink={content.demoLink}
						githubLink={content.githubLink}
					/>
				);
			})}
		</Slider>
	);
}
