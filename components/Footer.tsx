import React from "react"
import Image from "next/image"

// TODO: Change links and images to real ones

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-black text-white py-4">
            <hr className="flex h-px bg-white w-[85%] md:w-[70%] my-5"></hr> 
            <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/fraserhacks2024" target="_blank">
                    <Image src="/socials/Instagram_Glyph_Gradient.svg" alt="Instagram Link" width={27} height={27} id="instagram" />
                </a>
                <a href="https://www.tiktok.com/@fraserhacks" target="_blank">
                    <Image src="/socials/TikTok-Social-Icon-Circle-White.svg" alt="TikTok Link" width={27} height={27} id="tiktok" />
                </a>
                <a href="https://www.linkedin.com/in/fraser-hacks-8bb1b0303/" target="_blank">
                    <Image src="/socials/LI-In-Bug.png" alt="Linkedin Link" width={27} height={27} id="linkedin" />
                </a>
                <a href="https://twitter.com/FraserHacks24" target="_blank">
                    <Image src="/socials/Twitter_Logo.svg" alt="Twitter Link" width={23} height={23} id="Twitter" />
                </a>
            </div>
            <hr className="flex h-px bg-white w-[85%] md:w-[70%] my-5"></hr>
            <p className="text-sm">Made with ❤️ by the FraserHacks team</p>
        </footer>
    )
}