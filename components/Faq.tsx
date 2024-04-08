import React from "react"
import Accordion from "./Accordion"

interface questionAndAnswer {
    title: string,
    content: any
}

const questions: questionAndAnswer[] = [
    {
        title: "WHO IS THIS EVENT FOR?",
        content: "Anyone with an open mindset can participate. If you are a beginner at programming, designing, pitching or even quite experienced, this hackathon is for you! Note that only students from Peel District School Board are eligible to participate."
    },
    {
        title: "WILL THERE BE FOOD?",
        content: "Yep!"
    },
    {
        title: "DO I NEED A TEAM?",
        content: "You can go solo or participate with a team up with up to 4 individuals! Don&apos;t have a team but want to be part of one? You can specify while signing up that you would like to be part of a team and we will also have networking opportunity to make teams at the beginning of hackathon!"
    },
    {
        title: "WHERE CAN I FIND DIRECTIONS TO THE BUILDING?",
        content: "The hackathon is being held at 2665 Erin Centre Blvd, Mississauga, ON L5M 5H6, inside the cafeteria."
    },
    {
        title: "WILL THERE BE PRIZES?",
        content: "Yes!! There will be prizes for the top 3 projects as well as for various categories that you can compete in!"
    },
    {
        title: "WHAT DO I NEED TO BRING?",
        content: "A device to create your project on, chargers, and yourself!"
    },
    {
        title: "ANY QUESTIONS WE DIDN'T ANSWER?",
        content: <>You can contact us at <a href="mailto:fraserhacks24@gmail.com" className="text-fraser-turquoise">fraserhacks24@gmail.com </a>if you have any more questions.</>
    }
]



export default function Faq() {
    return (
        <section className='flex flex-col max-w-[800px] items-center md:p-20 md:py-16 lg:px-32 items-center" id="faq" style={{backgroundColor: "#000000"}}'>
            <div className='flex flex-col text-center mb-8'>
                <h1 className='text-4xl text-white font-bold'>Frequently Asked Questions</h1>
            </div>

            <div className='flex flex-col bg-black'>
                <div className='flex flex-col gap-x-4 text-left'>
                    {
                        questions.map((data, index) =>
                            <React.Fragment key={index}>
                                <Accordion {...data} />
                            </React.Fragment>
                        )
                    }
                </div>
            </div>
        </section>
    )
}