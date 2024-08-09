type CarouselItemProps = {
	picture: string;
	title: string;
};

export default function CarouselItem({ picture, title }: CarouselItemProps) {
	return (
		<div className='carousel-item active'>
			<div
				className='card'
				style={{ width: "18rem" }}
			>
				<img
					className='card-img-top'
					src={picture}
					alt=''
				/>
				<div className='card-body'>
					<h5>{title}</h5>
				</div>
			</div>
		</div>
	);
}
