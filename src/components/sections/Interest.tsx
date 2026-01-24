/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageCircle, Mic, Video } from "lucide-react";
import { motion } from "framer-motion";
const Interest = () => {
	return (
		<div className="bg-brandGreen pt-20 ">
			<div className="max-w-[1400px] w-full mx-auto overflow-hidden">
				<div className="flex flex-col gap-3 items-center px-3 sm:px-6 lg:px-10 xl:px-0">
					<p className="text-white text-center font-semibold -tracking-[0.5px] text-[20px] mx-auto">
						Meet Like-Minded People
					</p>
					<p className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center mx-auto w-fit max-w-4xl lg:leading-15 -tracking-[2px]">
						Find people and conversations that matches your{" "}
						<span className="text-[#1d1e1f]">interests</span>
					</p>
					<p className="text-white text-center font-medium mx-auto -tracking-[0.5px] text-[18px] max-w-3xl mt-1">
						Want to talk about something specific? With LilyPad, you can filter by interest, making it
						easier to meet people who share your passions and have something to say.{" "}
					</p>
					{/* <div className="flex items-center flex-col-reverse sm:flex-wrap sm:flex-row justify-center gap-4  mx-auto w-fit mt-7 ">
						{[
							{ name: "Audio Conversation", icon: Mic },
							{ name: "Video Conversation", icon: Video },
							{ name: "Messaging", icon: MessageCircle },
						].map((n: any, index: number) => {
							const Icon = n?.icon;
							return (
								<div
									className="rounded-full bg-brandDarkGreen py-3 px-4 flex gap-2 text-white items-center w-fit text-[14px]"
									key={index}
								>
									<Icon className="size-5" />
									{n?.name}
								</div>
							);
						})}
					</div> */}
				</div>
				<motion.div
					className="relative sm:w-full lg:max-w-[900px] mx-auto sm:pt-16 lg:pt-28 h-full overflow-hidden lg:overflow-visible"
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ ease: "anticipate", duration: 1 }}
				>
					<div className="mb-10 mt-10 lg:hidden flex flex-col">
						<div className="tags-big ml-auto -mr-5 sm:-mr-10 lg:hidden flex flex-col justify-center items-center ">
							Would-you-rather{" "}
						</div>
						<div className="tags-sm -rotate-10 -mt-5 sm:mt-0 -ml-8 sm:-ml-10 lg:hidden flex flex-col justify-center items-center ">
							Old cartoons
						</div>
						<div className="tags-sm rotate-6 mt-4 sm:mt-0 mx-auto lg:ml-70 lg:hidden flex flex-col justify-center items-center ">
							Songs that take you back
						</div>
					</div>

					<div className="bg-top bg-cover sm:bg-[url('/beam-bg.png')] w-full h-auto bg-no-repeat sm:pb-20 sm:pt-4 md:pt-6 lg:pt-0 lg:pb-20">
						<div className="tags-big ml-auto lg:mr-32 hidden lg:flex flex-col justify-center items-center ">
							Would-you-rather{" "}
						</div>
						<div className="tags-sm -rotate-10 sm:-ml-10 xl:-ml-20 hidden lg:flex flex-col justify-center items-center ">
							Old cartoons
						</div>
						<div className="tags-sm rotate-6 lg:ml-70 hidden lg:flex flex-col justify-center items-center ">
							Songs that take you back
						</div>
						<div className="tags-big mt-10 rotate-6 sm:rotate-14 md:rotate-20 lg:rotate-16 ml-auto mr-10 sm:mr-30 lg:-mr-10 lg:-mt-5 flex flex-col justify-center items-center">
							Music tastes
						</div>
						<div className="tags-big mb-5 -mt-6 md:mt-8 -ml-8 sm:-ml-5 lg:ml-6 flex flex-col justify-center items-center">
							Personal growth
						</div>
						<div className="tags-sm ml-5 sm:ml-50 md:ml-60 mt-10 sm:mt-3 lg:ml-110 lg:-mt-8 flex flex-col justify-center items-center">
							Childhood memories
						</div>
						<div className="tags-xs -mt-15 mr-2 sm:mr-10 md:mr-30 lg:mr-0 ml-auto mr-3 -rotate-12 sm:mt-4 lg:-mt-10 flex flex-col justify-center items-center">
							Hot takes
						</div>
						<div className="tags-sm mt-10 sm:-mt-1 -ml-6 sm:-ml-10 xl:-ml-20 md:mt-10 flex flex-col justify-center items-center">
							Small wins
						</div>
						<div className="tags-sm -mt-5 ml-auto -mr-6 sm:-mr-6 lg:-mr-8 xl:-mr-14 sm:mt-2 lg:-mt-10 flex flex-col justify-center items-center">
							Late-night thoughts
						</div>
					</div>
				</motion.div>
				<div className="bg-top bg-cover bg-[url('/beam-bg.png')] w-[700px] h-[400px] bg-no-repeat mx-auto -ml-40 -mt-70 flex sm:hidden" />
			</div>
		</div>
	);
};

export default Interest;
