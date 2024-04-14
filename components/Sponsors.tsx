import Image from 'next/image'

import client from "../../lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import { SanityReference } from "@sanity/image-url/lib/types/types";

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

const SponsorCard = ({ name, link, image, imageHeight }: SponsorData) => {
    // Prepare next.js image from sanity CMS
    const sanityImageProps = useNextSanityImage(
        client,
        image
    );

    return (
        <a href={link} target="_blank" rel="noreferrer" className='hover:scale-110 transition-all duration-150'>
            <Image {...sanityImageProps} alt={name} height={imageHeight} width={sanityImageProps.width / sanityImageProps.height * imageHeight} className="transition-all duration-150" quality={100} />
        </a>
    )
}

export default function Sponsors({ sponsors }: { sponsors: SponsorList }) {
    return (
        <section className="flex flex-col p-10 items-center md:py-16 md:p-20 lg:px-32 xl:px-40 items-lef bg-emerald-800 z-30" id="sponsors">
            <div className="flex flex-col text-center mb-8">
                <span className="text-lg text-emerald-200 font-semibold">Making it possible</span>
                <h1 className="text-4xl text-white font-bold">Sponsors</h1>
            </div>

            <div className='flex flex-col gap-12 w-full items-center'>
                {sponsors.platinum.length > 0 && (
                    <div className='flex flex-wrap gap-6 lg:gap-12 items-center justify-center'>
                        {sponsors.platinum.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={160} />)}
                    </div>
                )}

                {sponsors.gold.length > 0 && (
                    <div className='flex flex-wrap gap-6 lg:gap-12 items-center justify-center'>
                        {sponsors.gold.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={140} />)}
                    </div>
                )}

                {sponsors.silver.length > 0 && (
                    <div className='flex flex-wrap gap-6 items-center justify-center'>
                        {sponsors.silver.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={120} />)}
                    </div>
                )}

                {sponsors.bronze.length > 0 && (
                    <div className='flex flex-wrap gap-6 items-center justify-center'>
                        {sponsors.bronze.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={60} />)}
                    </div>
                )}

                {/*sponsors.none.length ? (
                    <div className='flex flex-wrap gap-6 items-center justify-center'>
                        {sponsors.none.map((data: SponsorData) => <SponsorCard {...data} key={data.name} imageHeight={80} />)}
                    </div>
                ) : <></>*/}

                <a
                    className="px-9 py-4 rounded-xl text-2xl font-semibold bg-emerald-700 text-white hover:bg-white hover:text-emerald-700 active:bg-emerald-500 active:text-white transition-all duration-300 text-center"
                    href="/documents/TurtleHacksSponsorshipPackage.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Sponsor Us Today!
                </a>
            </div>
        </section>
    )
}