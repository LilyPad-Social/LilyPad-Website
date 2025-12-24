import Navbar from "@/components/Navbar";
import Communication from "@/components/sections/Communication";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Fun from "@/components/sections/Fun";
import Hero from "@/components/sections/Hero";
import Interest from "@/components/sections/Interest";
import Privacy from "@/components/sections/Privacy";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="pt-[74px]">
				<Hero />
				<Interest />
				<Communication />
				<Privacy />
				<Fun />
				<FAQ />
				<Footer />
			</div>
		</>
	);
}
