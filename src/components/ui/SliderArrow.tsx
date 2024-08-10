/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { ThemeContext } from "../../services/providers/themeContext";
import styles from "./css.modules/SliderArrow.module.css";

export function NextArrow(props: any) {
	const themeContext = useContext(ThemeContext);
	const { className, style, onClick } = props;
	if (themeContext?.islight) {
		const nextArrow = className + " " + styles.lightSlickNext;
		return (
			<div
				className={nextArrow}
				style={{ ...style, display: "block", color: "black" }}
				onClick={onClick}
			/>
		);
	} else {
		return (
			<div
				className={className}
				style={{ ...style, display: "block" }}
				onClick={onClick}
			/>
		);
	}
}

export function PrevArrow(props: any) {
	const themeContext = useContext(ThemeContext);
	const { className, style, onClick } = props;
	const prevArrow = className + " " + styles.lightSlickPrev;
	if (themeContext?.islight) {
		return (
			<div
				className={prevArrow}
				style={{ ...style, display: "block", color: "black" }}
				onClick={onClick}
			/>
		);
	} else {
		return (
			<div
				className={className}
				style={{ ...style, display: "block" }}
				onClick={onClick}
			/>
		);
	}
}
