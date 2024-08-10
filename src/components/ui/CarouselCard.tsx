import style from "./css.modules/CarouselCard.module.css";
import Button from "./Button";

type CarouselCardTProps = {
	src: string;
	title: string;
	islight?: boolean;
	// text
};

export default function CarouselCard({
	src,
	title,
	islight,
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
					<p className='card-text fs-6'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id commodi
						recusandae debitis saepe amet earum qui quam numquam aperiam dicta
						veniam, vero molestiae nostrum sequi? Recusandae, cupiditate eius
						laborum distinctio atque in quibusdam saepe corrupti velit placeat
						odit fuga quisquam pariatur aspernatur quod perspiciatis ipsum,
						officia, earum natus. Sapiente, veniam?
					</p>
					<div className='d-flex gap-3'>
						<Button
							href='https://zsolt270.github.io/REST-COUNTRY/'
							text='Demo'
						/>
						<Button
							href='https://github.com/zsolt270/REST-COUNTRY'
							text='GitHub'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
