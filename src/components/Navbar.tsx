/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectTrigger,
// } from "@/components/ui/select";
// import { Globe } from "lucide-react";
import { TbMenu, TbX } from "react-icons/tb";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
const Navbar = () => {
	// const [activeLang, setActiveLang] = useState("English");
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div
			className="bg-transparent py-4 px-3 sm:px-6 lg:px-10 2xl:px-30 fixed left-0 right-0 w-full z-40 backdrop-blur-lg"
			id="top"
		>
			<AnimatePresence mode="wait">
				{menuOpen && (
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 50, opacity: 0 }}
						transition={{ ease: easeInOut, duration: 0.3 }}
						className="fixed left-0 top-0 w-full min-h-screen backdrop-blur-sm z-10 p-2"
					>
						<div className="bg-[#111111] p-4 max-w-md ml-auto min-h-screen">
							<div className="flex flex-row-reverse justify-between items-center w-full">
								<TbX className="text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)} />
								{/* <Select onValueChange={(value: any) => setActiveLang(value)} value={activeLang}>
									<SelectTrigger className="w-fit bg-brandGray rounded-full px-3 py-[22px] focus-visible:ring-0 border-0 border-transparent cursor-pointer">
										<div className="flex items-center gap-[10px]">
											<Globe className="text-white size-4" />
											<p className="text-white text-sm capitalize">{activeLang}</p>
										</div>
									</SelectTrigger>
									<SelectContent
										position="popper"
										className="bg-[#111111] text-white border-0 border-transparent focus-visible:border-0"
									>
										<SelectGroup>
											{[{ name: "English" }, { name: "French" }, { name: "German" }]?.map(
												(l: any, index: number) => (
													<SelectItem
														value={l?.name.toLowerCase()}
														key={index}
														className="hover:bg-[#333333]! hover:text-white! cursor-pointer"
													>
														{l?.name}
													</SelectItem>
												)
											)}
										</SelectGroup>
									</SelectContent>
								</Select> */}
							</div>
							<div className="flex flex-col gap-8 mt-12">
								{[
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
								]?.map((n: any, index: number) => (
									<Link href={n?.link} key={index} onClick={() => setMenuOpen(!menuOpen)}>
										<p className="text-white text-end text-xl hover:text-brandGreen transition-all ease-in-out duration-300">
											{n?.name}
										</p>
									</Link>
								))}
							</div>
							<Link
								href="https://onelink.to/cvj3p3"
								className="flex items-center gap-[13px] bg-white rounded-full overflow-hidden h-auto px-5 cursor-pointer w-fit ml-auto py-3 mt-6"
							>
								<div className="relative w-[22px] h-[22px]">
									<Image src="/appstore.png" fill alt="" style={{ objectFit: "contain" }} />
								</div>
								<div className="relative w-[22px] h-[22px]">
									<Image src="/play.svg" fill alt="" style={{ objectFit: "contain" }} />
								</div>
								<p className="text-base font-medium text-black">Download App</p>
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -50, opacity: 0 }}
				transition={{ ease: easeInOut, duration: 0.3 }}
			>
				<div className="flex items-center justify-between">
					{/* logo and links */}
					<div className="flex items-center gap-14">
						<div className="relative w-32 h-8">
							<Image src="/logo.svg" alt="" fill style={{ objectFit: "contain" }} />
						</div>

						<div className="lg:flex items-center gap-8 hidden">
							{[
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
							]?.map((n: any, index: number) => (
								<Link href={n?.link} key={index} target="_blank">
									<p className="text-white text-[16px] hover:text-brandGreen transition-all ease-in-out duration-300">
										{n?.name}
									</p>
								</Link>
							))}
						</div>
					</div>

					<div className="lg:flex items-stretch gap-4 hidden">
						{/* <Select onValueChange={(value: any) => setActiveLang(value)} value={activeLang}>
							<SelectTrigger className="w-fit bg-[#4D4B4A] rounded-full px-3 py-[22px] focus-visible:ring-0 border-0 border-transparent cursor-pointer">
								<div className="flex items-center gap-[10px]">
									<Globe className="text-white size-4" />
									<p className="text-white text-sm capitalize">{activeLang}</p>
								</div>
							</SelectTrigger>
							<SelectContent
								position="popper"
								className="bg-[#4D4B4A] w-fit text-white border-0 border-transparent focus-visible:border-0"
							>
								<SelectGroup>
									{[{ name: "English" }, { name: "French" }, { name: "German" }]?.map(
										(l: any, index: number) => (
											<SelectItem
												value={l?.name.toLowerCase()}
												key={index}
												className="hover:bg-[#333333]! hover:text-white! cursor-pointer"
											>
												{l?.name}
											</SelectItem>
										)
									)}
								</SelectGroup>
							</SelectContent>
						</Select> */}

						<Link
							href="https://onelink.to/cvj3p3"
							className="flex items-center gap-[13px] bg-white rounded-full overflow-hidden h-auto px-5 cursor-pointer py-3"
						>
							<div className="relative w-[20px] h-[20px]">
								<Image src="/appstore.png" fill alt="" style={{ objectFit: "contain" }} />
							</div>
							<div className="relative w-[20px] h-[20px]">
								<Image src="/play.svg" fill alt="" style={{ objectFit: "contain" }} />
							</div>
							<p className="text-base font-medium text-black">Download App</p>
						</Link>
					</div>

					<div
						className="bg-[rgba(255,255,255,0.2)] py-2 sm:py-[10px] px-3 sm:px-4 rounded-full flex gap-2 items-center lg:hidden "
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<TbMenu className="text-white text-2xl" />

						<p className="text-white text-base sm:text-lg">MENU</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Navbar;
