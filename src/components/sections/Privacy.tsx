/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { MessageCircle, Mic, Video } from "lucide-react";
import Image from "next/image";

const Privacy = () => {
	return (
		<div className="bg-[#131B20] py-20">
			<div className="max-w-[1400px] w-full mx-auto overflow-hidden px-3 sm:px-6 lg:px-10 xl:px-0">
				<div className="flex flex-col gap-3 items-center px-3 sm:px-6 lg:px-10 xl:px-0">
					<p className="text-white text-center font-semibold -tracking-[0.5px] text-[20px] mx-auto">
						Feel Secure Every Step of the Way{" "}
					</p>
					<p className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center mx-auto w-fit max-w-xl lg:leading-15 -tracking-[2px]">
						Privacy, encryption and safety{" "}
					</p>
					<p className="text-white text-center font-medium mx-auto -tracking-[0.5px] text-[18px] max-w-4xl mt-1">
						LilyPad prioritizes your security and peace of mind. Every conversation is protected with
						end-to-end encryption, and we provide tools to ensure a safe and respectful experience every
						time you connect.
					</p>
				</div>

				<div className="flex items-center flex-col-reverse sm:flex-wrap justify-center gap-4 mx-auto w-fit mt-7 ">
					{[
						{ name: "Audio Conversation", icon: Mic },
						{ name: "Video Conversation", icon: Video },
						{ name: "Messaging", icon: MessageCircle },
					].map((n: any, index: number) => {
						const Icon = n?.icon;
						return (
							<div
								className="rounded-full bg-[#233039] py-3 px-4 flex gap-2 text-white items-center w-fit text-[14px]"
								key={index}
							>
								<Icon className="size-5" />
								{n?.name}
							</div>
						);
					})}
				</div>

				<div className="relative w-full h-[250px] sm:max-w-[350px] sm:h-[350px] mt-10 sm:mt-20 mx-auto">
					<Image src="/padlock.svg" fill alt="" className="object-contain" />
				</div>
			</div>
		</div>
	);
};

export default Privacy;
