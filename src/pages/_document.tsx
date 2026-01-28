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
					content="	LilyPad is an application for Android and iOS mobile phone to meet and connect with strangers
					anonymously. LilyPad is where conversations spark, and connections happen. 
"
				/>
				<meta property="og:url" content="https://lilypad.benagos.com/" />
				<meta property="og:author" name="Afolabi Babatunde Joseph" />
				<meta property="og:author" name="Ehizojie Ihayere" />
				<meta property="og:image" content="https://i.ibb.co/XfYVNybF/Lily-Pad.png?v=2" />

				{/* Twitter Cards */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="LilyPad - Voice & Video Chat App" />
				<meta
					name="twitter:description"
					content="	LilyPad is an application for Android and iOS mobile phone to meet and connect with strangers
					anonymously. LilyPad is where conversations spark, and connections happen. "
				/>
				<meta name="twitter:image" content="https://i.ibb.co/XfYVNybF/Lily-Pad.png?v=2" />
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
