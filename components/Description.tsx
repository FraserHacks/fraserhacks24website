import styles from '../styles.module.css'
import Image from 'next/image';

export default function Description(){
    return (
        <section className="flex flex-col items-center">
            <h2 className={`${styles.arcadeStyle} text-4xl pt-10 text-center text-white`}>Mississauga&apos;s Biggest Hackathon</h2>
            <div className="max-w-[800px] mx-auto flex flex-row xs:flex-col sm:flex-col items-center space-y-4 space-x-4 xs:space-y-0 sm:space-y-0">
                <div className="w-full xs:w-1/2 sm:w-1/2">

                    <Image
                    id="description-img"
                    src="/descript-img.png" 
                    alt="Description"
                    className="w-full h-auto" 
                    width={500}
                    height={500}
                    />
                </div>
                <div className="w-full xs:w-1/2 sm:w-1/2">
                    <p className="text-xl text-left xs:text-center sm:text-center mt-4 leading-6 tracking-wide text-white">
                    FraserHacks is Mississauga&apos;s largest high school hackathon organized entirely by students at John Fraser Secondary School. More than 100 students from all of Peel Region will be coming together on May 4, 2019, for a full 10 hours of friendly hacking, enthusiastic learning, and delicious food.
                        <br></br>
                        <br></br>
                        <b>2665 Erin Centre Blvd, Mississauga, ON L5M 5H6</b>
                    </p>

                </div>
            </div>

            <div className="w-full flex flex-row place-items-center xs:flex-col sm:flex-col">
                <div className="w-full xs:w-1/2 sm:w-1/2">
                    <div className="w-full text-white max-w-[560px] mx-auto mt-10">
                        <p className="text-xl mt-4 leading-6 xs:text-center sm:text-center">
                            On May 4, 2019, students from all over Peel gathered together to innovate, learn, and meet new people. We&apos;re excited to bring the fun back this year with FraserHacks 2024. For a look back visit <a href="https://kev.lu/FraserHacks-Website/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">FraserHacks 2019</a>.
                        </p>
                    </div>
                </div>
                <div className="w-full xs:w-1/2 sm:w-1/2 flex justify-center items-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/p5iQph5EPK4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div className="bg-black py-8">
                <h2 className="text-white text-center text-3xl font-bold mb-6">Check Out Our Success From 2019!</h2>
                <div className="flex justify-center space-x-4">
                    <div className="bg-showcase-blue rounded-lg p-4 w-[your-desired-width] text-white text-center">
                        <p className={`${styles.arcadeStyle} text-showcase-black text-4xl`}>Students</p>
                        <p className={`${styles.arcadeStyle}  text-5xl font-bold`}>130+</p>
                    </div>
                    <div className="bg-showcase-blue rounded-lg p-4 w-[your-desired-width] text-white text-center">
                        <p className={`${styles.arcadeStyle} text-showcase-black text-4xl`}>Prizes</p>
                        <p className={`${styles.arcadeStyle} text-5xl font-bold`}>13K+</p>
                    </div>
                    <div className="bg-showcase-blue rounded-lg p-4 w-[your-desired-width] text-white text-center">
                        <p className={`${styles.arcadeStyle} text-showcase-black text-4xl`}>Projects</p>
                        <p className={`${styles.arcadeStyle} text-5xl font-bold`}>30+</p>
                    </div>
                </div>
            </div>
        </section>
    )
}