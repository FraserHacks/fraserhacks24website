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
        <a href={link} target="_blank" rel="noreferrer" className='hover:opacity-85 opacity-100 transition-all duration-150 p-4 bg-white flex flex-col justify-center place-items-center'>
            <Image {...sanityImageProps} alt={name} height={imageHeight} width={sanityImageProps.width / sanityImageProps.height * imageHeight} className="transition-all duration-150" quality={100} />
        </a>
    )
}

export default SponsorCard;