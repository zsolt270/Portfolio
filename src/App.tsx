import { useContext } from "react";
import { ThemeContext } from "./services/providers/themeContext";
import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	const themeContext = useContext(ThemeContext);

	return (
		<div
			className={`container-fluid ${
				themeContext?.islight ? styles.lightBody : styles.darkBody
			}`}
		>
			<div className='container'>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;
