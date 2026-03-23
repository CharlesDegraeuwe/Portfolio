"use client"
import { useEffect, useRef, useState } from "react";

export default function Typer() {
    const titles = [
        "Computer Science Student",
        "Full Stack Builder",
        "Design-Driven Developer",
        "Web App & Platform Creator",
        "UI/UX Enthusiast",
        "Freelance Videographer & Editor",
        "Exploring AI & Smart Systems",
    ];

    const typeSpeed = 200;
    const deleteSpeed = 50;
    const holdSpeed = 400;

    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [titleIndex, setTitleIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);
    const timeoutRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const currentTitle = titles[titleIndex];

        const handleType = () => {
            if (!isDeleting && timeoutRef.current) {
                if (text.length < currentTitle.length) {
                    setText(currentTitle.substring(0, text.length + 1));
                    timeoutRef.current = setTimeout(handleType, typeSpeed);
                } else {
                    timeoutRef.current = setTimeout(() => {
                        setIsDeleting(true);
                    }, holdSpeed);
                }
            } else {
                if (text.length > 0 && timeoutRef.current) {
                    setText(currentTitle.substring(0, text.length - 1));
                    timeoutRef.current = setTimeout(handleType, deleteSpeed);
                } else {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        };

        timeoutRef.current = setTimeout(handleType, 100);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [text, isDeleting, titleIndex, titles, typeSpeed, deleteSpeed, holdSpeed]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="w-fit px-5 text-lg py-1 gap-2 flex items-center justify-start border-zinc-400/20 dark:border-zinc-300/10 border-solid border
		dark:bg-zinc-700/20 bg-zinc-300/10 rounded-full shadow-lg">
            <span>✨</span>

            <span className="w-fit flex flex-row items-center justify-center p-0 dark:text-white text-zinc-800">
        <span ref={timeoutRef}>{text}</span>
        <span
            className={`bg-blue-400 min-h-4 min-w-[2px] rounded-full ml-1 transition-opacity duration-100 ${
                cursorVisible ? "opacity-100" : "opacity-0"
            }`}
        ></span>
      </span>
        </div>
    );
}