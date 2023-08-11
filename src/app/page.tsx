import { FC } from "react";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Service } from "@/components/Service";
import { Cases } from "@/components/Cases";
import { JoinUs } from "@/components/JoinUs";
import { Footer } from "@/components/Footer";

const Home: FC = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<About />
				<Service />
				<Cases />
				<JoinUs />
			</main>
			<Footer />
		</>
	);
};

export default Home;
