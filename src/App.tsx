import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className={`container-fluid ${styles.darkBody}`}>
			<div className='container'>
				<Header />
				<Main />
			</div>
		</div>
	);
}

export default App;
