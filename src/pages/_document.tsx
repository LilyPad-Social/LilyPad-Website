import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap"
					rel="stylesheet"
				/>

				{/* open graph */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="LilyPad" />
				<meta property="og:title" content="LilyPad - Voice & Video Chat App" key="title" />
				<meta
					property="og:description"
					content="LilyPad is an application for Android and iOS mobile phone to meet and connect with strangers anonymously. LilyPad is where conversations spark, and connections happen. Join a world of spontaneous chats with people from all walks of life. Anonymity, real-time engagement, and endless possibilities await. Dive in and discover who’s out there, one chat at a time. Unauthorized reproduction or redistribution of copyrighted materials on this website and Kusala's digital media pages is strictly prohibited. Additional disclosures can be found in the resources section of our website.
"
				/>
				<meta property="og:url" content="https://lilypad.benagos.com/" />
				<meta property="og:author" name="Afolabi Babatunde Joseph" />
				<meta property="og:author" name="Ehizojie Ihayere" />
				<meta name="og:image" content="https://i.ibb.co/fGYrKSqX/favicon.jpg" />

				{/* Twitter Cards */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="LilyPad - Voice & Video Chat App" />
				<meta
					name="twitter:description"
					content="LilyPad is an application for Android and iOS mobile phone to meet and connect with strangers
					anonymously. LilyPad is where conversations spark, and connections happen. Join a world of
					spontaneous chats with people from all walks of life. Anonymity, real-time engagement, and
					endless possibilities await. Dive in and discover who’s out there, one chat at a time.
					Unauthorized reproduction or redistribution of copyrighted materials on this website and
					LilyPad's digital media pages is strictly prohibited. Additional disclosures can be found
					in the resources section of our website.
					LilyPad is part of the Benagos family apps. Benagos is a product studio on a mission to build
					human-first digital tools — for connection, creativity, clarity, and change. Each of our
					products is a petal, blooming from one vision: to make the internet more thoughtful.
"
				/>
				<meta name="twitter:image" content="https://i.ibb.co/fGYrKSqX/favicon.jpg" />
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
