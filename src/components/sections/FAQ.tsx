/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
	const faqs = [
		{
			name: "Is my identity really anonymous on LilyPad?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Are my conversations secure on LilyPad",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Can I report inappropriate behavior?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "How are matches made?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Do I need to create an account to use LilyPad?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Is there an age restriction for using LilyPad?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
		},
		{
			name: "Is LilyPad Free to Use?",
			note:
				"Lorem ipsum dolor sit amet consectetur. Et hac velit viverra gravida in curabitur odio nulla ornare. Blandit massa at ut facilisi aenean nam. Phasellus cras vulputate arcu convallis scelerisque sed iaculis etiam. Ultricies facilisi vulputate enim urna nunc semper tincidunt suspendisse in. Dictumst mattis porttitor dui semper tempus lorem.Est luctus odio commodo sed sit. Varius in sit nisi nec ac mattis. Euismod turpis vitae venenatis purus bibendum lectus aenean eget vivamus. Nunc eu facilisis gravida scelerisque ultrices ut velit cursus amet. Donec lectus urna dignissim fermentum habitant massa cras malesuada. Nisi nibh montes sit ullamcorper et. Sit lacinia orci vitae viverra sagittis mattis dui cras non. Id nascetur ullamcorper at gravida massa amet lectus. Commodo risus sollicitudin velit erat. Suspendisse at ultricies in nec quis tristique. Facilisis amet egestas dolor maecenas. Nibh ac quam iaculis purus hac odio orci. ",
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
						LilyPad prioritizes your security and peace of mind. Every conversation is protected with
						end-to-end encryption, and we provide tools to ensure a safe and respectful experience every
						time you connect.
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
								<p className="font-light text-sm opacity-50">{n?.note}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FAQ;
