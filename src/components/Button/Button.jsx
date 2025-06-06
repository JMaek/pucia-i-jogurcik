"use client";
import React from "react";
import "./Button.scss";
export const Button = ({ children, onClick, disabled }) => {
	return (
		<button
			onClick={onClick}
			className="Button"
			disabled={disabled}
		>
			{children}
		</button>
	);
};
