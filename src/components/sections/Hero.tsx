/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
	const container: any = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 1,
			},
		},
	};

	const item: any = {
		hidden: { y: 30, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1.5,
				ease: "easeOut",
				delay: 0.5,
			},
		},
	};

	return (
		<div className="relative overflow-hidden">
			{/* hero background image */}
			<div className="bg-cover bg-[url('/hero.webp')] w-full bg-top">
				{/* content container */}
				<div className=" pt-20 lg:pt-30 bg-[rgba(29,30,31,0.7)]">
					<div className="h-full w-full flex flex-col justify-center items-center">
						<motion.div
							className="max-w-3xl mx-auto mb-20 lg:mb-40 px-3 sm:px-6 lg:px-10 2xl:px-0"
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-100px" }}
						>
							<motion.p
								className="text-white text-base sm:text-[22px] w-fit mx-auto text-center font-semibold -tracking-[0.5px]"
								variants={item}
							>
								Your Safe Welcoming Space{" "}
							</motion.p>
							<motion.div className="mt-2 sm:mt-4 lg:mt-[16px]" variants={item}>
								<motion.p className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center mx-auto w-fit text-transparent bg-clip-text bg-linear-to-br from-[#6DAF20] to-[#B1E574] -tracking-[1.5px]">
									Make new friends
									<br /> and find your someone in the crowd
								</motion.p>
							</motion.div>
							<motion.div
								className="flex flex-col sm:flex-row gap-3 mx-auto max-w-[260px] sm:max-w-lg mt-10 sm:mt-14 items-center justify-center"
								variants={item}
							>
								{[
									{ name: "Download for iPhone", icon: "/appstore.png" },
									{ name: "Download for Android", icon: "/play.svg" },
								]?.map((m: any, index: number) => (
									<motion.div
										key={index}
										className="bg-white rounded-full px-5 py-4 flex items-center w-full gap-3 cursor-pointer justify-center"
									>
										<div className="w-[23px] h-[22px] relative">
											<Image src={m?.icon} fill alt="" className="object-contain" />
										</div>
										<p className="text-black text-[16px] font-semibold">{m?.name}</p>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
						<div className="mt-auto w-full sm:flex justify-between gap-5 hidden">
							{/* img1 */}
							<motion.div
								className="w-[250px] h-[500px] relative -mt-28"
								animate={{ y: [0, -12, 0] }}
								transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
							>
								<Image src="/img-1.png" fill alt="" className="object-contain xl:object-cover" />
							</motion.div>

							{/* img2 */}
							<motion.div
								className="w-[341px] h-[497px] relative"
								animate={{ y: [0, -8, 0] }}
								transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
							>
								<Image src="/img-2.png" fill alt="" className="object-contain xl:object-cover" />
							</motion.div>

							{/* img3 */}
							<motion.div
								className="w-[301px] h-[505px] relative -mt-10"
								animate={{ y: [0, -15, 0] }}
								transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
							>
								<Image src="/img-3.png" fill alt="" className="object-contain xl:object-cover" />
							</motion.div>

							{/* img4 */}
							<motion.div
								className="w-[260px] h-[500px] relative -mt-28"
								animate={{ y: [0, -10, 0] }}
								transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
							>
								<Image src="/img-4.png" fill alt="" className="object-contain xl:object-cover" />
							</motion.div>
						</div>
						<div className="mt-auto flex gap-4 justify-between w-full items-stretch sm:hidden">
							{/* img1 mobile */}
							<div className="relative w-28 h-[350px] mt-12">
								<Image src="/img1mobile.png" alt="" fill className="object-contain" />
							</div>

							{/* img1 mobile */}
							<div className="relative w-full h-auto">
								<Image src="/img2mobile.png" alt="" fill className="object-contain" />
							</div>

							{/* img3 mobile */}
							<div className="relative w-28 h-[350px] mt-12">
								<Image src="/img3mobile.png" alt="" fill className="object-contain" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
