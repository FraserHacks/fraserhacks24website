import Image from "next/image";
import styles from "../styles.module.css";
import "./globals.css";
import Faq from "../components/Faq";

import Sponsors from "../components/Sponsors";

import Footer from "../components/Footer";
import Description from "../components/Description";

export default async function Home() {
  return (
    <>
      <main
        className={` min-h-screen flex flex-col items-center justify-start p-7 space-y-12 bg-black `}
      >
        <div id="home" className="mt-20">
          <Image
            id="hero-logo"
            src="/hero-logo.svg"
            alt="FraserHacks Logo: Purple circular logo"
            width={500}
            height={500}
            className={`${styles.blink} ${styles.glow} mb-0`}
          />
        </div>

        <div className="text-center max-w-[800px]">
          <h2
            className={`${styles.arcadeStyle} text-white text-4xl font-semibold mt-4`}
          >
            November 29th 2024, 8AM - 7:30PM
          </h2>
          <h3 className="text-gray-400 text-xl font-normal mt-2 mb-5">
            John Fraser Secondary School, Mississauga
          </h3>
          <div id="mc_embed_signup">
            <label>
              <span className="label text-white">
                Register for FraserHacks on the Google Form below!
              </span>
              <div className="mt-4">
                <a
                  id="register"
                  className="bg-purple-600 text-white py-3 px-6 text-lg font-medium rounded-lg cursor-pointer transition-colors duration-300 hover:bg-purple-700"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeV5FAnPZzQ_LL5Cx3f3lA7rH-N3DtHTNkFh6gP21Kyr_eNGw/viewform"
                >
                  Register
                </a>
              </div>
            </label>
            {/* Hidden input for bot protection */}
            <div className="absolute left-[-5000px]" aria-hidden="true">
              <input
                type="text"
                name="b_a50dd0c50b611bd5e179d9b85_36ad7a17fc"
                value=""
                readOnly
              />
            </div>
            <div className="info"></div>
          </div>
        </div>
        <div id="about">
          <Description />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <div id="sponsors">
          <Sponsors />
        </div>

        <Footer />
      </main>
    </>
  );
}
