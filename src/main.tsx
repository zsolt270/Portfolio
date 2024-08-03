import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { ThemeContextProvider } from "./services/providers/themeContext.tsx";
import { LanguageContextProvider } from "./services/providers/languageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<LanguageContextProvider>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</LanguageContextProvider>
	</React.StrictMode>
);
