import styles from '../styles.module.css'
import Image from 'next/image';

export default function Description(){
return (
    <section className="flex flex-col items-center">
<h2 className={`${styles.arcadeStyle} text-4xl pt-10 text-center text-white`}>Mississauga&apos;s Biggest Hackathon</h2>
<div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">

  <div className="w-full md:w-1/2">

    <Image
    id="description-img"
     src="/descript-img.png" 
     alt="Description"
    className="w-full h-auto" 
     width={500}
     height={500}
    />
  </div>
  <div className="w-full md:w-1/2">

    <p className="text-xl text-center md:text-left mt-4 leading-6 tracking-wide">
    FraserHacks is Mississauga&apos;s largest high school hackathon organized entirely by students at John Fraser Secondary School. More than 100 students from all of Peel Region will be coming together on May 4, 2019, for a full 10 hours of friendly hacking, enthusiastic learning, and delicious food.
      <br></br>
      <br></br>
      <b>2665 Erin Centre Blvd, Mississauga, ON L5M 5H6</b>
    </p>

  </div>
</div>



  <div className="w-full lg:w-1/2">

  <h2 className={`${styles.arcadeStyle} text-center text-4xl text-white mt-6`}>FraserHacks 2019</h2>
    <p className="text-center text-xl mt-4 leading-6 tracking-wide pb-10">
      On May 4 2019 students from all over Peel gathered together to innovate, learn and meet new people. We&apos;re excited to bring the fun back this year with FraserHacks 2024. For a look back visit <a href="https://kev.lu/FraserHacks-Website/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">FraserHacks 2019</a>.
    </p>

  </div>
  </section>
)
}