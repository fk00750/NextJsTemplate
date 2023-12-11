import HeroSection from "@/components/home/hero-section";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tegi Tyres Website</title>
                <meta name="description" />
            </Head>
            <main>
                <HeroSection />
            </main>
        </>
    )
}