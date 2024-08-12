import { useContext } from "react";
import { ThemeContext } from "./services/providers/themeContext";
import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import valami from "./assets/projects/portfolio.webp";

function App() {
	const themeContext = useContext(ThemeContext);

	return (
		<div
			className={`container-fluid ${
				themeContext?.islight ? styles.lightBody : styles.darkBody
			}`}
		>
			<div className='container px-sm-0'>
				<Header />
				<Main />
				<Footer />
			</div>
			<img
				src={valami}
				alt=''
			/>
		</div>
	);
}

export default App;
