import { createContext, useState } from "react";

type languageType = {
	language: string;
	setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

type themeContextProviderProps = {
	children: React.ReactNode;
};

export const LanguageContext = createContext<languageType | null>(null);

export const LanguageContextProvider = ({
	children,
}: themeContextProviderProps) => {
	const [language, setLanguage] = useState("eng");

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
