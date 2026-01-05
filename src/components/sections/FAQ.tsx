/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ReactElement } from "react";

const FAQ = () => {
	const faqs: { name: string; note: string | ReactElement }[] = [
		{
			name: "Is my identity really anonymous on LilyPad?",
			note:
				"Yes. LilyPad is built for anonymity. You don’t share your real name, phone number, or personal identifiers with other users. Conversations happen without revealing who you are.",
		},
		{
			name: "Are my conversations secure on LilyPad",
			note:
				"Yes. LilyPad uses secure communication protocols to protect conversations in transit. While no platform can guarantee absolute security, we prioritize privacy and data protection by design.",
		},
		{
			name: "Can I report inappropriate behavior?",
			note:
				"Absolutely. If you encounter harassment, abuse, or any behavior that violates our community guidelines, you can report the user directly from the conversation. Reports are reviewed promptly to keep LilyPad safe for everyone.",
		},
		{
			name: "How are matches made?",
			note:
				"Matches are made randomly and contextually, depending on availability and selected conversation modes. The goal is to help you connect with new people organically—without profiles, pressure, or expectations.",
		},
		{
			name: "Do I need to create an account to use LilyPad?",
			note: (
				<p>
					Yes, you will need to.{" "}
					<span className="text-brandGreen">
						<Link href="/">Download</Link>
					</span>{" "}
					the app to get started.
				</p>
			),
		},
		{
			name: "Is there an age restriction for using LilyPad?",
			note:
				"Yes. LilyPad is intended for users 16 years and older. This helps ensure mature, respectful conversations across the platform.",
		},
		{
			name: "Is LilyPad Free to Use?",
			note:
				"Yes. LilyPad is free to use. Some features may be enhanced or expanded in the future, but the core experience remains accessible.",
		},
	];
	return (
		<div className="bg-brandGray py-20">
			<div className="max-w-[1400px] w-full mx-auto overflow-hidden px-3 sm:px-6 lg:px-10 xl:px-0">
				<div className="flex flex-col gap-3 items-center px-3 sm:px-6 lg:px-10 xl:px-0">
					<p className="text-white text-center font-semibold -tracking-[0.5px] text-[20px] mx-auto">
						FAQs{" "}
					</p>
					<p className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center mx-auto w-fit max-w-lg lg:leading-15 -tracking-[2px]">
						Likely Questions You May Have{" "}
					</p>
					<p className="text-white text-center font-medium mx-auto -tracking-[0.5px] text-[18px] max-w-3xl mt-1">
						We have answers to some questions you may have.
						<br className="hidden sm:block" /> Didn&apos;t find what you’re looking for? Send us a mail at{" "}
						<span className="text-brandGreen">lilypad@benagos.com</span>
					</p>
				</div>
				{/* faqs */}
				<Accordion type="single" collapsible className="max-w-[900px] mx-auto mt-14">
					{faqs?.map((n: any, index: number) => (
						<AccordionItem value={n?.name} key={index} className="border-b-[1px] border-[#2A2C2F]">
							<AccordionTrigger className="text-base cursor-pointer hover:no-underline !font-normal">
								{n?.name}
							</AccordionTrigger>
							<AccordionContent className="!font-light">
								<p className="font-light text-sm text-[#6E6D7A]">{n?.note}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FAQ;
