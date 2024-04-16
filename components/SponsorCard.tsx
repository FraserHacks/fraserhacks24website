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
        <a href={link} target="_blank" rel="noreferrer" className='hover:scale-110 transition-all duration-150'>
            <Image {...sanityImageProps} alt={name} height={imageHeight} width={sanityImageProps.width / sanityImageProps.height * imageHeight} className="transition-all duration-150" quality={100} />
        </a>
    )
}

export default SponsorCard;