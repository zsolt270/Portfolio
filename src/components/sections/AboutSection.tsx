import waving from "../../assets/wave-icon.png";
import style from "./css.modules/About.module.css";

export default function AboutSection() {
	return (
		<div className='d-block d-md-flex gap-4 mb-5'>
			<div>
				<h2
					className={`text-center text-md-start mb-3 mb-sm-2 ${style.levitateText}`}
				>
					Hello, I'm Zsolt{" "}
					<img
						className={`pb-3 ${style.waving}`}
						src={waving}
						alt='an icon about a hand waving'
					/>
				</h2>
				<div className={`${style.imgDiv} d-block d-md-none mb-4 mb-sm-5`}></div>
				<p className={`${style.levitateText}`}>
					My name is <span className='fw-bold'>Zsolt Balogh</span>. I am a
					passionate, open-minded recently graduated software engineer from the
					University of Dunaújváros.
					<br />I like to work in a team, but I can also solve problems
					independently and I can also work outside my comfort zone when needed.
					My goal is to work as part of a dynamic team where I can encounter
					challenging projects and where I can expand my professional
					experience.
				</p>

				<p className={`${style.levitateText}`}>
					<span className='fw-bold'>When im not programming:</span> i love
					playing football, basketball, video/board games and listening to
					music.
				</p>
			</div>
			<div className={`${style.imgDiv} d-none d-md-block`}></div>
		</div>
	);
}
