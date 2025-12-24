/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Dot } from "lucide-react";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="bg-black">
			<div className="max-w-[1400px] w-full mx-auto pt-20 px-3 sm:px-6 lg:px-10 2xl:px-0 h-auto">
				<div className="flex flex-col xl:flex-row justify-between w-full gap-10 xl:gap-0">
					<p className="max-w-sm text-sm font-light text-white -tracking-[0.2px]">
						Inspired by nature, LilyPad is a social platform whether it’s meaningful talks or lighthearted
						moments, LilyPad is your safe, welcoming space to explore the world, one conversation at a
						time.
					</p>

					<div className="flex flex-col sm:flex-row gap-8 lg:gap-12 2xl:gap-16 mb-20">
						{[
							{
								name: "Get LilyPad",
								items: [
									{
										name: "iPhone",
										link: "/",
									},
									{
										name: "Android",
										link: "/",
									},
								],
							},
							{
								name: "Need help",
								items: [
									{
										name: "LilyPad Commons",
										link: "/",
									},
									{
										name: "Community Guidelines",
										link: "/",
									},
									{
										name: "Terms of Service",
										link: "/",
									},
								],
							},
							{
								name: "Social",
								items: [
									{
										name: "TikTok",
										link: "/",
									},
									{
										name: "Instagram",
										link: "/",
									},
									{
										name: "X(Twitter)",
										link: "/",
									},
									{
										name: "Linkedin",
										link: "/",
									},
								],
							},
							{
								name: "Contact",
								items: [
									{
										name: "Benagos LLC, Benagos Technologies Limited Lekki, Lagos, Nigeria",
									},
									{
										name: "lilypad@benagos.com",
									},
								],
							},
						]?.map((f: any, index: number) => (
							<div key={index}>
								<p className="font-semibold text-[15px] text-[#979797] -tracking-[0.5px]">{f?.name}</p>
								<div className="font-light text-[13px] text-white flex flex-col gap-3 sm:gap-4 mt-4">
									{f?.items?.map((m: any, index: number) => (
										<Link
											href={m?.link ?? "#"}
											key={index}
											className={`${m?.link ? "cursor-pointer" : "cursor-auto"} hover:${
												m.link ? "text-brandOrange" : "text-white"
											} transition-all ease-in-out duration-300`}
										>
											<p className="max-w-xs -tracking-[0.2px]">{m?.name}</p>
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-[url('/map-base.png')] bg-cover bg-top bg-no-repeat min-h-[200px] sm:min-h-[300px] items-center justify-center flex flex-col px-3 sm:px-6 lg:px-10 2xl:px-0 ">
				<p className="text-brandGreen mx-auto text-center text-3xl sm:text-4xl lg:text-5xl max-w-3xl font-normal -tracking-[2px]">
					Like Mia and Sebastian, meet your someone in the Crowd
				</p>
			</div>

			<div className="max-w-[1400px] w-full mx-auto pb-20 px-3 sm:px-6 lg:px-10 2xl:px-0">
				<hr className="border-white opacity-10" />

				<p className="text-sm font-light text-[#A8A8A8] mt-10">
					LilyPad is an application for Android and iOS mobile phone to meet and connect with strangers
					anonymously. LilyPad is where conversations spark, and connections happen. Join a world of
					spontaneous chats with people from all walks of life. Anonymity, real-time engagement, and
					endless possibilities await. Dive in and discover who’s out there, one chat at a time.
					Unauthorized reproduction or redistribution of copyrighted materials on this website and
					Kusala&apos;s digital media pages is strictly prohibited. Additional disclosures can be found
					in the resources section of our website.
					<br /> <br />
					From a single heart, we build for the curious, the creative, and the future. Benagos is a
					product studio on a mission to build human-first digital tools — for connection, creativity,
					clarity, and change. Each of our products is a petal, blooming from one vision: to make the
					internet more thoughtful.
				</p>
				<div className="my-10 justify-between w-full flex flex-col md:flex-row md:items-center gap-5">
					<p className="text-white font-light text-sm -tracking-[0.5px]">
						© LilyPad, {new Date().getFullYear()}. A Benagos Product
					</p>
					<div className="flex flex-wrap items-center">
						{[
							{ name: "Report User", link: "" },
							{ name: "Privacy and Terms", link: "" },
							{ name: "Contact LilyPad", link: "" },
							{ name: "Brand Guide", link: "" },
						]?.map((n: any, index: number, arr: any) => (
							<Link href={n?.link} key={index} className="flex items-center">
								<p className="text-white text-sm font-light hover:text-brandOrange ease-in-out transition-all duration-300 -tracking-[0.5px]">
									{n?.name}
								</p>
								{arr?.length - 1 !== index && <Dot className="text-white size-5 mx-1" />}
							</Link>
						))}
					</div>
				</div>
				<div className="relative w-full h-20 sm:h-35 lg:h-40 xl:h-60 mt-20">
					<Image src="/footer logo.svg" fill alt="" className="object-contain xl:object-contain" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
