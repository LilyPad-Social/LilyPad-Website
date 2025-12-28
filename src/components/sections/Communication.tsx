/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { MessageCircle, Mic, Video } from "lucide-react";
// import { useRef } from "react";
// import { Play } from "lucide-react";

const Communication = () => {
	// const [isPlaying, setPlaying] = useState(false);

	return (
		<div className="bg-brandGray py-20">
			<div className="max-w-[1400px] w-full mx-auto overflow-hidden px-3 sm:px-6 lg:px-10 xl:px-0">
				<div className="flex flex-col gap-3 items-center px-3 sm:px-6 lg:px-10 xl:px-0">
					<p className="text-white text-center font-semibold -tracking-[0.5px] text-[20px] mx-auto">
						Instant Communication{" "}
					</p>
					<p className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center mx-auto w-fit max-w-xl lg:leading-15 -tracking-[2px]">
						It’s like a phone call but more <span className="text-brandGreen">exciting!</span>
					</p>
					<p className="text-white text-center font-medium mx-auto -tracking-[0.5px] text-[18px] max-w-3xl mt-1">
						Break down barriers and connect with people from all corners of the globe. LilyPad lets you
						dive into unique, unfiltered conversations, no matter where you are or who you’re hoping
					</p>
				</div>

				<div className="flex items-center flex-col-reverse sm:flex-wrap sm:flex-row justify-center gap-4 mx-auto w-fit mt-7 ">
					{[
						{ name: "Audio Conversation", icon: Mic },
						{ name: "Video Conversation", icon: Video },
						{ name: "Messaging", icon: MessageCircle },
					].map((n: any, index: number) => {
						const Icon = n?.icon;
						return (
							<div
								className="rounded-full bg-[#2A2C2F] py-3 px-4 flex gap-2 text-white items-center w-fit text-[14px]"
								key={index}
							>
								<Icon className="size-5" />
								{n?.name}
							</div>
						);
					})}
				</div>

				<div className="relative max-w-[800px] h-[300px] sm:h-[400px] lg:h-[500px] w-full mx-auto mt-14 sm:mt-20 overflow-hidden rounded-2xl relative">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/wDchsz8nmbo?si=FKrVHkIcSXi2uHRJ"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Communication;
