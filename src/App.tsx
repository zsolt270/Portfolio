import "./App.css";
import pic from "./assets/programming.svg";

function App() {
	return (
		<>
			<h1>Valami h1</h1>
			<p className='fw-bold'>
				Valami szöveg és egy <span>span</span>
			</p>
			<div className='darkCarodiv'>ez a div </div>

			<div className='imgDiv'></div>
			{/* <img
				src={pic}
				alt=''
			/> */}
		</>
	);
}

export default App;
