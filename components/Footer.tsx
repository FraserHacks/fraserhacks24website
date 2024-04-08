import React from "react"
import Image from "next/image"

// TODO: Change links and images to real ones

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-black text-white py-4">
            {/* <hr className="flex h-px bg-white w-[100%] lg:w-[70%] my-5"></hr> */}
            {/* <div className="flex items-center gap-3">
                <a href="https://github.com/AritroSaha10" target="_blank">
                    <Image src="/socials/icon_clyde_blurple_RGB.svg" alt="Discord Link" width={27} height={27} id="discord" />
                </a>
                <a href="https://github.com/AritroSaha10" target="_blank">
                    <Image src="/socials/icon_clyde_blurple_RGB.svg" alt="Discord Link" width={27} height={27} id="discord" />
                </a>
                <a href="https://github.com/AritroSaha10" target="_blank">
                    <Image src="/socials/icon_clyde_blurple_RGB.svg" alt="Discord Link" width={27} height={27} id="discord" />
                </a>
            </div> */}
            {/* <hr className="flex h-px bg-white w-[100%] lg:w-[70%] my-5"></hr> */}
            <p className="text-sm">Made with ❤️ by the FraserHacks team</p>
        </footer>
    )
}