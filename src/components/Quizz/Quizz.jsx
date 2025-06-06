"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { Button } from "@/components/Button/Button";
import { pytania } from "../../pytania/questions";
import { ScoreCard } from "../ScoreCard/ScoreCard";
import "./Quizz.scss";

export default function Quizz() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [answerChecked, setAnswerChecked] = useState(false);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
	const [showResults, setShowResults] = useState(false);
	const [quizResult, setQuizResult] = useState({
		score: 0,
		correctAnswers: 0,
		wrongAnswers: 0,
	});

	const { questions } = pytania;
	const { question, answers, correctAnswer, video, answerVideo } =
		questions[currentQuestionIndex];

	const [videoSrc, setVideoSrc] = useState(video);

	const onAnswerSelected = (answer, idx) => {
		setSelectedAnswerIndex(idx);
		setSelectedAnswer(answer);
		setAnswerChecked(true);
	};

	const handleWatchAnswer = () => {
		setVideoSrc(answerVideo);
		if (selectedAnswer === correctAnswer) {
			setQuizResult((prev) => ({
				...prev,
				score: prev.score + 5,
				correctAnswers: prev.correctAnswers + 1,
			}));
		} else {
			setQuizResult((prev) => ({
				...prev,
				wrongAnswers: prev.wrongAnswers + 1,
			}));
		}
		setSelectedAnswer("");
		setSelectedAnswerIndex(null);
		setAnswerChecked(false);
	};

	const handleNextQuestion = () => {
		if (currentQuestionIndex !== questions.length - 1) {
			setCurrentQuestionIndex((prev) => prev + 1);
		}
	};

	useEffect(() => {
		setVideoSrc(video);
	}, [currentQuestionIndex]);

	const handleSubmit = () => {
		setShowResults(true);
	};

	return (
		<>
			{!showResults ? (
				<div className="Quiz__Question">
					<h1>{question}</h1>
					<div className="Quiz__VidAns">
						<Suspense fallback={<img src="/heart.gif" />}>
							<video
								className="Video"
								autoPlay
								key={videoSrc}
							>
								<source
									src={videoSrc}
									type="video/mp4"
								/>
							</video>
						</Suspense>

						<div className="Quiz__Answers">
							{answers.map((answer, idx) => (
								<div
									key={idx + 1}
									onClick={() =>
										onAnswerSelected(answer, idx + 1)
									}
									className={
										"Quiz__Answer " +
										(selectedAnswerIndex === idx + 1
											? "active"
											: "")
									}
								>
									{answer}
								</div>
							))}
							{answerChecked ? (
								<Button
									onClick={handleWatchAnswer}
									disabled={!answerChecked}
								>
									Zobacz odpowiedź
								</Button>
							) : currentQuestionIndex < questions.length - 1 ? (
								<Button
									onClick={handleNextQuestion}
									disabled={answerChecked}
								>
									Następne Pytanie
								</Button>
							) : (
								<></>
							)}
							{currentQuestionIndex === questions.length - 1 && (
								<Button onClick={handleSubmit}>
									Podsumowanie
								</Button>
							)}
						</div>
					</div>
				</div>
			) : (
				<ScoreCard
					quizResult={quizResult}
					questions={questions}
				/>
			)}
		</>
	);
}
