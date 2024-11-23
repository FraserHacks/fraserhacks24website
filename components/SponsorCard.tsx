'use client';
import { client } from "../sanity/lib/client";
import { useNextSanityImage } from "next-sanity-image";
import { SponsorData } from "./Sponsors";
import Image from 'next/image'

const SponsorCard = ({ name, link, image, imageHeight }: SponsorData) => {
    // Prepare next.js image from sanity CMS
    const sanityImageProps = useNextSanityImage(
        client,
        image
    );

    return (
        <a href={link} target="_blank" rel="noreferrer" className='hover:shadow-[8px_8px_0_0_rgba(92,58,146,1)] hover:border-fraser-purple border-2 border-white/10 opacity-100 rounded-sm transition-all duration-150 flex flex-col justify-center place-items-center h-full p-2'>
            <Image {...sanityImageProps} alt={name} height={imageHeight} width={sanityImageProps.width / sanityImageProps.height * imageHeight} className="transition-all duration-150" quality={100} />
        </a>
    )
}

export default SponsorCard;