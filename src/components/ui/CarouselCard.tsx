import style from "./css.modules/CarouselCard.module.css";
import Button from "./Button";

type CarouselCardTProps = {
	src: string;
	title: string;
	islight?: boolean;
	text: string;
	demoLink: string;
	githubLink: string;
};

export default function CarouselCard({
	src,
	title,
	islight,
	text,
	demoLink,
	githubLink,
}: CarouselCardTProps) {
	return (
		<div className='d-flex justify-content-center'>
			<div
				className={`card ${
					islight ? style.lightCarouselCard : style.darkCarouselCard
				}`}
			>
				<img
					src={src}
					className={`${style.cardImgTop}`}
					alt='...'
				/>
				<div className={`card-body`}>
					<h3 className='card-title'>{title}</h3>
					<p className='card-text fs-6'>{text}</p>
					<div className='d-flex gap-3'>
						<Button
							href={demoLink}
							text='Demo'
						/>
						<Button
							href={githubLink}
							text='GitHub'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
