"use client";

import { Button } from "@/components/Button/Button";
import "./page.scss";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<div>
			<main>
				<div className="Home__Hero">
					<video
						className="Home__Video"
						autoPlay
						muted
						loop
					>
						<source
							src="herovid.mp4"
							type="video/mp4"
						/>
					</video>

					<div className="Home__Titles">
						<h1 className="Home__Title"> Najowy Quiz o Marku</h1>
						<h2 className="Home__SubTitle">
							Czy są ze sobą kompatybilni? Sprawdź teraz!
						</h2>

						<Button onClick={() => router.push("/quiz/pytanka")}>
							Rozpocznij Quiz
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
