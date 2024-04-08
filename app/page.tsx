import Image from 'next/image';
import styles from "../styles.module.css"
import Faq from '../components/Faq';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-10 space-y-12">
      <div>
        <Image
          id="hero-logo"
          src="/hero-logo.png"
          alt="FraserHacks Logo: Blue circular logo"
          width={500}
          height={500}
          className={`${styles.blink} ${styles.glow}`}
        />
      </div>

      <div className="text-center max-w-[800px] mx-auto">
        <h2 className={`${styles.arcadeStyle} text-white text-4xl font-semibold mt-4`}>May 4, 2019</h2>
        <h3 className="text-gray-400 text-xl font-normal mt-2 mb-5">John Fraser Secondary School, Mississauga</h3>
        <div id="mc_embed_signup">
          <label>
            <span className="label">
              Sign up for our mailing list to be notified of when applications are open.
            </span>
            <div className="mt-4">
              <button id="register" className="bg-purple-600 text-white py-3 px-6 text-lg font-medium rounded-lg cursor-pointer transition-colors duration-300 hover:bg-purple-700">
                Register
              </button>
            </div>
          </label>
          {/* Hidden input for bot protection */}
          <div className="absolute left-[-5000px]" aria-hidden="true">
            <input type="text" name="b_a50dd0c50b611bd5e179d9b85_36ad7a17fc" value="" />
          </div>
          <div className="info"></div>

        </div>
      </div>

      {/* Short Description Section */}
      <h2 className={`${styles.arcadeStyle} text-3xl text-white`}>Mississauga's Biggest Hackathon</h2>
      <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">

        <div className="w-full md:w-1/2">

          <img src="/descript-img.png" alt="Description" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2">

          <p className={`${styles.arcadeStyle} text-xl mt-4 leading-6 tracking-wide`}>
            FraserHacks is Mississauga's largest high school hackathon organized entirely by students at John Fraser Secondary School. More than 100 students
            <br></br>
            <br></br>
            2665 Erin Centre Blvd, Mississauga, ON L5M 5H6
          </p>

        </div>
      </div>
  
      {/* FAQ Section */}
      <Faq />

      {/* Footer Section */}
      <Footer />
      
      {/* Additional sections can be added here following the same pattern */}
    </main>
  );
}
