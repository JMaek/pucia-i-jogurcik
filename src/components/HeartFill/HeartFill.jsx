export default function HeartFill({ percent }) {
	return (
		<svg
			className="Hea"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#ff0066"
			fill="url(#MyGradient)"
		>
			<g
				id="SVGRepo_bgCarrier"
				strokeWidth="0"
			></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="M12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5"
					stroke="#cc0047"
					strokeWidth="1.5"
					strokeLinecap="round"
				></path>
				<path
					opacity="1"
					d="M12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5"
					stroke="#cc0047"
					strokeWidth="1.5"
					strokeLinecap="round"
				></path>
			</g>

			<defs>
				<linearGradient
					id="MyGradient"
					x1="0%"
					y1="0%"
					x2="0%"
					y2="100%"
				>
					<stop
						offset={`${percent}%`}
						stopColor="rgba(0, 0, 0, 0)"
					/>
					<stop
						offset="0%"
						stopColor="#ff0066"
					/>
				</linearGradient>
			</defs>
		</svg>
	);
}
