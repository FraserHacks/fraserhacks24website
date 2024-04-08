'use client'

import { FC, useState } from "react";
import { motion, useAnimationControls } from "framer-motion"
import { BiChevronLeft } from "react-icons/bi"


// copied from hack:peel lol lol lol lol (with aritros blessings ofc)
interface Props {
    title: string,
    content: string,
};

const contentVariants = {
    closed: {
        opacity: 0,
        height: 0,
        marginTop: "0px"
    },
    open: {
        opacity: 1,
        height: "auto",
        marginTop: "10px"
    }
}

const arrowVariants = {
    closed: {
        rotate: "0deg"
    },
    open: {
        rotate: "-90deg"
    }
}

const Accordion: FC<Props> = ({ title, content }) => {
    const [open, setOpen] = useState(false);
    const controls = useAnimationControls();

    const handleToggle = () => {
        !open ? controls.start("open") : controls.start("closed");
        setOpen(!open);
    };

    return (
        <div className="p-4 relative mt-[-2px] w-full text-white">
            <button className="flex justify-between items-center w-full" onClick={handleToggle}>
                <p className="text-left text-xl font-semibold underline decoration-fraser-purple ">{title}</p>
                <motion.span variants={arrowVariants} initial="closed" animate={controls}>
                    <BiChevronLeft />
                </motion.span>
            </button>

            <motion.p
                className="text-md overflow-hidden text-gray-100"
                variants={contentVariants}
                animate={controls}
                initial="closed"
                transition={{ ease: "easeInOut", duration: 0.2 }}
            >
                {content}
            </motion.p>
        </div>
    );
}

export default Accordion;