"use client";
import React from "react";
import "./ScoreCard.scss";
import HeartFill from "../HeartFill/HeartFill";

export const ScoreCard = ({ quizResult, questions }) => {
	const percentage = (quizResult.score / (questions.length * 5)) * 100;
	const pp = 100 - percentage;

	return (
		<>
			<div className="Card">
				<h1>Oto Wasza kompatybilność: </h1>
				<div className="Card__Container">
					<div className="Card__Results">
						<h2>Ilość Pytań:</h2>
						<div>{questions.length}</div>
						<h2>Wynik:</h2>
						<div>{quizResult.score}</div>
						<h2>Procent:</h2>
						<div>{percentage}%</div>
					</div>
					<div className="Card__Heart">
						<HeartFill percent={pp} />
						{console.log(pp)}
					</div>
				</div>
			</div>
		</>
	);
};
