import styles from '../styles.module.css'
import Image from 'next/image';

export default function Description() {
  return (
    <section className="flex flex-col md:px-20 md:pt-10 lg:px-32 items-center" id="faq" style={{ backgroundColor: "#000000" }}>
      <h2 className={`${styles.arcadeStyle} text-4xl text-center text-white py-10`}>Mississauga&apos;s Biggest Hackathon</h2>

      <div className="flex flex-col md:flex-row">
        <div className="flex md:w-[50%] w-full justify-center md:justify-end items-center py-10">
          <Image
            id="description-img"
            src="/descript-img.png"
            alt="Description"
            className="flex px-2"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-[50%] ">
          <p className="flex text-xl text-center md:text-left leading-6 tracking-wide text-white">
            FraserHacks is Mississauga&apos;s largest high school hackathon organized entirely by students at John Fraser Secondary School. More than 100 students from all of Peel Region will be coming together on May 4, 2019, for a full 10 hours of friendly hacking, enthusiastic learning, and delicious food.
          </p>
          <b className="py-10 text-xl text-center">2665 Erin Centre Blvd, Mississauga, ON L5M 5H6</b>
        </div>
      </div>

      <div className="flex flex-col md:flex-row pb-10">
        <div className="flex md:w-[50%] w-full justify-center items-center">
          <p className="text-xl leading-6 text-center text-white md:px-10">
            On May 4th 2019, students from all over Peel gathered together to innovate, learn, and meet new people. We&apos;re excited to bring the fun back this year with FraserHacks 2024. For a look back visit <a href="https://kev.lu/FraserHacks-Website/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">FraserHacks 2019</a>.
          </p>
        </div>
        <div className="flex md:w-[50%] pt-7 pb-10 md:py-0 w-full h-full justify-center items-center">
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/p5iQph5EPK4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

      <div className="flex flex-col bg-black ">
        <h2 className="text-white text-center text-3xl font-bold pb-5">Check Out Our Success From 2019!</h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col bg-fraser-blue rounded-lg p-4 my-2 md:mx-5 w-auto text-white text-center space-x-4">
            <p className={`${styles.arcadeStyle} text-showcase-black text-4xl`}>Students</p>
            <p className={`${styles.arcadeStyle}  text-5xl font-bold`}>130+</p>
          </div>
          <div className="flex flex-col bg-fraser-blue rounded-lg p-4 my-2 md:mx-5 w-auto text-white text-center space-x-4">
            <p className={`${styles.arcadeStyle} text-showcase-black text-4xl`}>Prizes</p>
            <p className={`${styles.arcadeStyle} text-5xl font-bold`}>13K+</p>
          </div>
          <div className="flex flex-col bg-fraser-blue rounded-lg p-4 my-2 md:mx-5 w-auto text-white text-center space-x-4">
            <p className={`${styles.arcadeStyle} text-showcase-black text-4xl`}>Projects</p>
            <p className={`${styles.arcadeStyle} text-5xl font-bold`}>30+</p>
          </div>
        </div>
      </div>
    </section>
  )
}
