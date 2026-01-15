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
										link:
											"https://benagos.notion.site/LilyPad-Commons-1bf3c9f91dc78036a643f9967832f96f?source=copy_link",
									},
									{
										name: "Community Guidelines",
										link:
											"https://benagos.notion.site/LilyPad-Community-Guidelines-TOS-1bf3c9f91dc7818b8d06c3a0ef906384?source=copy_link",
									},
									{
										name: "Email Us",
										link: "/",
									},
								],
							},
							{
								name: "Social",
								items: [
									{
										name: "Linkedin",
										link: "https://linkedin.com/company/benagos",
									},
									{
										name: "Instagram",
										link: "https://instagram.com/benagoshq",
									},
									{
										name: "X(Twitter)",
										link: " https://x.com/benagoshq",
									},
									{
										name: "TikTok",
										link: "https://www.tiktok.com/@benagoshq",
									},
								],
							},
							{
								name: "Contact",
								items: [
									{
										name: "Benagos Technologies Limited Lagos, Nigeria",
									},
									{
										name: "lilypad@benagos.com",
										link: "mailto:lilypad@benagos.com",
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
											target="_blank"
											key={index}
											className={`${m?.link ? "cursor-pointer" : "cursor-auto"} hover:${
												m.link ? "text-brandGreen" : "text-white"
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
					LilyPad&apos;s digital media pages is strictly prohibited. Additional disclosures can be found
					in the resources section of our website.
					<br /> <br />
					LilyPad is part of the Benagos family apps. Benagos is a product studio on a mission to build
					human-first digital tools — for connection, creativity, clarity, and change. Each of our
					products is a petal, blooming from one vision: to make the internet more thoughtful.
				</p>
				<div className="my-10 justify-between w-full flex flex-col md:flex-row md:items-center gap-5">
					<p className="text-white font-light text-sm -tracking-[0.5px]">
						© LilyPad, {new Date().getFullYear()}. A Benagos Product
					</p>
					<div className="flex flex-wrap items-center">
						{[
							{
								name: "Report User",
								link:
									"https://benagos.notion.site/LilyPad-Support-Channels-1bf3c9f91dc78143bc29c7953f2d6535?source=copy_link",
							},
							{
								name: "Privacy and Terms",
								link:
									"https://benagos.notion.site/LilyPad-Privacy-1bf3c9f91dc78151981cc9fa97db4c2c?source=copy_link",
							},
							{
								name: "Contact LilyPad",
								link:
									"https://benagos.notion.site/LilyPad-Cookie-policy-2e73c9f91dc7806cb709c78d0f487882?source=copy_link",
							},
							{
								name: "Brand Guide",
								link:
									"https://benagos.notion.site/LilyPad-Brand-Guide-2e73c9f91dc78030810affbaad298bff?source=copy_link",
							},
						]?.map((n: any, index: number, arr: any) => (
							<Link href={n?.link} key={index} className="flex items-center" target="_blank">
								<p className="text-white text-sm font-light hover:text-brandGreen ease-in-out transition-all duration-300 -tracking-[0.5px]">
									{n?.name}
								</p>
								{arr?.length - 1 !== index && <Dot className="text-white size-5 mx-1" />}
							</Link>
						))}
					</div>
				</div>
				<div className="w-full mt-20">
					<Image
						src="/footer logo.svg"
						width={1200} // your image's natural width
						height={100} // your image's natural height
						alt="Footer Logo"
						className="w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
