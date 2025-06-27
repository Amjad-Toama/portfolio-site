import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

export function Greeting() {
    const phrases = ["H", "Hi", "Hi!", "Hi!", "Hi!", "Hi", "H", "",
        "I", "I'", "I’m", "I’m ", "I’m A", "I’m Am", "I’m Amj", "I’m Amja", 
        "I’m Amjad", "I’m Amjad ", "I’m Amjad T", "I’m Amjad To",
        "I’m Amjad Toa", "I’m Amjad Toam", "I’m Amjad Toama", ];

    const [index, setIndex] = useState(-1);
    const {ref, inView} = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (!inView) return;
        let current = 0;
        const timer = setInterval(() => {
        setIndex(current);
        console.log("Current index:", current); // debug output
        current++;
        if (current >= phrases.length) clearInterval(timer);
        }, 150);
        return () => clearInterval(timer);
    }, [inView]);

    return (
        <div ref={ref} className="flex items-center justify-center h-screen text-4xl handwriting font-bold text-center my-20">
            {index >= 0? phrases[index]: ""}
        </div>
    );
};