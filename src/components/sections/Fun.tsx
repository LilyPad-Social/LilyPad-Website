/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
const Fun = () => {
	return (
		<div className="min-h-[100vh] bg-[url('/fun.jpg')] w-full bg-top sm:bg-center bg-cover">
			<div className="max-w-[1400px] w-full mx-auto overflow-hidden px-3 sm:px-6 lg:px-10 xl:px-0 py-20 ">
				<p className="text-white text-center font-semibold -tracking-[0.5px] text-[20px] mx-auto">
					Join the Fun{" "}
				</p>
				<p className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center mx-auto w-fit max-w-4xl lg:leading-15 -tracking-[2px] mt-2">
					Hop into one LilyPad at a time, Find your people in the crowd{" "}
				</p>

				<div className="relative w-[200px] h-[200px] mx-auto mt-14 hidden sm:flex">
					<Image src="/barcode.svg" alt="" className="object-contain" fill />
				</div>
				<div className="flex flex-col sm:hidden gap-3 mx-auto w-fit mt-10">
					{[
						{ name: "Download for iPhone", icon: "/appstore.png" },
						{ name: "Download for Android", icon: "/play.svg" },
					]?.map((m: any, index: number) => (
						<div key={index} className="bg-white rounded-full px-6 py-4 flex items-center w-fit gap-3">
							<div className="w-[23px] h-[22px] relative">
								<Image src={m?.icon} fill alt="" className="object-contain" />
							</div>
							<p className="text-black text-[16px] font-semibold">{m?.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Fun;
