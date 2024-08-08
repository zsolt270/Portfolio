import picture from "../../assets/programming.svg";
import waving from "../../assets/wave-icon.png";

export default function AboutSection() {
	return (
		<div className='d-flex'>
			<div>
				<h3>
					Hello, I'm Zsolt{" "}
					<img
						src={waving}
						alt='an icon about a hand waving'
					/>
				</h3>
				<p>
					My name is <span className='fw-bold'>Zsolt Balogh</span>. I am a
					recently graduated sorftware engineer from the University of
					Dunaújváros.
					<br />
					(ide a CV bevezetp szövegem)
					<br />
					<span className='fw-bold'>When im not programming:</span> i love
					playing football & bastkellball & video/board games and listening to
					music.
				</p>
			</div>
			<div>
				<img
					src={picture}
					alt='An image about someone programming'
				/>
			</div>
		</div>
	);
}
