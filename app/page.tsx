import Image from "next/image";
import styles from "../styles.module.css";
import "./globals.css";
import Faq from "../components/Faq";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import Description from "../components/Description";
import Attendance from "@/src/pages/attendance";

export default async function Home() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-start p-7 space-y-12 bg-black">
        <div id="home" className="mt-20">
          <Image
              id="hero-logo"
              src="/hero-logo.svg"
              alt="FraserHacks Logo: Purple circular logo"
              width={500}
              height={500}
              className={`${styles.glow} mb-0 select-none`}
          />
        </div>

        <div className="text-center max-w-[800px]">
          <h2 className={`${styles.arcadeStyle} text-white text-4xl font-semibold mt-4`}>
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
                    href="https://forms.gle/ApN1E78zsCk1Qjoj6"
                >
                  Register
                </a>
              </div>
            </label>
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

        {/* Attendance Section with Visual Separator */}
        <div className="w-full max-w-4xl my-12">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex-grow border-t border-gray-700"></div>
            <h2 className="text-2xl font-bold text-white px-4 bg-black">
              Attendance
            </h2>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          <div id="attendance" className="w-full">
            <Attendance />
          </div>
        </div>

        <Footer />
      </main>
  );
}