"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "5/24/2024"

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;



const Countdown = () => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const [remaining, setRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);

        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    const handleCountdown = () => {
        const end = new Date(COUNTDOWN_FROM);

        const now = new Date();

        const distance = +end - +now;

        const days = Math.floor(distance / DAY);
        const hours = Math.floor((distance % DAY) / HOUR);
        const minutes = Math.floor((distance % HOUR) / MINUTE);
        const seconds = Math.floor((distance % MINUTE) / SECOND);

        setRemaining({
            days,
            hours,
            minutes,
            seconds,
        });
    };

    return (
        <div className="w-screen p-4 flex flex-row justify-center text-center">
            <div className="flex w-full justify-evenly place-center xs:flex-col sm:flex-col">
                <CountdownItem num={`${remaining.days}`} text="days" />
                <CountdownItem num={`${remaining.hours}`} text="hours" />
                <CountdownItem num={`${remaining.minutes}`} text="minutes" />
                <CountdownItem num={`${remaining.seconds}`} text="seconds" />
            </div>
        </div>
    );
};

const CountdownItem = ({ num, text }: { num: any; text: string }) => {
    return (
        <div className="w-1/4 xs:w-full sm:w-full h-36 flex flex-col items-center justify-center text-[2em] xs:text-[1.5em] sm:text-[1.5em]">
            <div className="w-full text-center relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={num}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ ease: "backIn", duration: 0.75 }}
                        className="block text-white"
                    >
                        {num}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="">
                {text}
            </span>
        </div>
    );
};

export default Countdown;