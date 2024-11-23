'use server';

import { sanityFetch } from "../sanity/lib/util";
import { SanityReference } from "@sanity/image-url/lib/types/types";
import SponsorCard from './SponsorCard'

export interface SponsorData {
    name: string,
    link: string,
    tier: string,
    image: SanityReference,
    imageHeight: number
}

export interface SponsorList {
    platinum: SponsorData[],
    gold: SponsorData[],
    silver: SponsorData[],
    bronze: SponsorData[],
    none: SponsorData[]
}

export async function SponsorSection({ sponsors, name, size }: { sponsors: SponsorData[]; name: string, size: number }) {
    let gradient;

    switch(name) {
        case "Platinum":
            gradient = "bg-gradient-to-r from-slate-600 to-slate-400 p-4 rounded-lg shadow-[0_0_80px_-10px_rgba(255,255,255,0.8)] mb-8";
            break;
        case "Gold":
            gradient = "bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-200 mb-4";
            break;
        case "Silver":
            gradient = "bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white mb-4";
            break;
        case "Bronze":
            gradient = "bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-200 mb-4";
            break;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className={`text-3xl font-semibold pb-5 text-center ${gradient} mt-4`}>{name} Sponsors</h2>
            <div className={`flex gap-4 lg:gap-6 items-center justify-center`}>
                {sponsors.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={size} />)}
            </div>
        </div>
    )
}

export default async function Sponsors() {

    const sponsorsRaw = await sanityFetch({ query: "*[_type == 'sponsor'] | order(tier asc)", options: {next: { revalidate: 60 }} }) as SponsorData[];

    const sponsors: SponsorList = {
        platinum: sponsorsRaw.filter(({ tier }) => tier === "platinum"),
        gold: sponsorsRaw.filter(({ tier }) => tier === "gold"),
        silver: sponsorsRaw.filter(({ tier }) => tier === "silver"),
        bronze: sponsorsRaw.filter(({ tier }) => tier === "bronze"),
        none: sponsorsRaw.filter(({ tier }) => tier === "none")
    };

    return (
        <section className="flex flex-col p-10 items-center md:py-16 md:p-20 lg:px-32 xl:px-40 items-le bg-black z-30" id="sponsors">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Sponsors</h1>
            </div>

            <div className='flex flex-col gap-12 w-full items-center'>
                {sponsors.platinum.length > 0 && (
                    <div className="">
                        <div className="w-full flex justify-center">
                            <h2 className={`w-fit text-3xl font-semibold pb-5 text-center bg-gradient-to-r from-slate-600 to-slate-400 p-4 rounded-lg shadow-[0_0_80px_-10px_rgba(255,255,255,0.8)] mb-8 mt-4`}>Platinum Sponsors</h2>
                        </div>
                        <div className="flex flex-row overflow-y-hidden">
                            <div className="relative flex overflow-hidden gap-x-4 h-full w-screen">
                                <div className="flex gap-x-4 animate-marquee overflow-hidden h-full p-4">
                                    {sponsors.platinum.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={250} />)}
                                </div>

                                <div className="absolute flex gap-x-4 top-0 animate-marquee2 overflow-hidden h-full py-4">
                                    {sponsors.platinum.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={250} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {sponsors.gold.length > 0 && (
                    <SponsorSection sponsors={sponsors.gold} name="Gold" size={140} />
                )}

                {sponsors.silver.length > 0 && (
                    <SponsorSection sponsors={sponsors.silver} name="Silver" size={120} />
                )}

                {sponsors.bronze.length > 0 && (
                    <div className="w-full px-8"><SponsorSection sponsors={sponsors.bronze} name="Bronze" size={100} /></div>
                )}

                {/* {sponsors.none.length > 0 && (
                    <SponsorSection sponsors={sponsors.none} name="Other" size={100} />
                )} */}

                <a className="flex items-center justify-center bg-fraser-turquoise h-12 py-3 px-6 text-md md:text-lg text-black font-medium rounded-lg cursor-pointer transition-colors duration-300 hover:bg-fraser-dark-turquoise" href="mailto:sponsors@fraserhacks.com" target="_blank">
                    Become a Sponsor
                </a>
                <a className="flex items-center justify-center bg-fraser-turquoise h-12 py-6 md:py-3 px-6 text-center text-sm md:text-lg text-black font-medium rounded-lg cursor-pointer transition-colors duration-300 hover:bg-fraser-dark-turquoise" href="/documents/Sponsorship.pdf" target="_blank">
                    View our Sponsorship Package
                </a>
            </div>
        </section>
    )
}