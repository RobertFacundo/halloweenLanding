import { useEffect, useState, useRef } from "react";
import calculateTimeLeft from "../../shared/utils/timeCalculator";
import CounterCard from "./CounterCards";
import useTypingEffect from "../../shared/hooks/useTypingEffect";
import useScrollEnter from "../../shared/hooks/animations/useScrollEnter";
import useDirectionalReveal from "../../shared/hooks/animations/useDirectinoalReveal";
import useFadeIn from "../../shared/hooks/animations/useFadeIn";

const Counter = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [startTyping, setStartTyping] = useState(false)

    const counterItems = [
        {
            label: "DAYS",
            value: timeLeft.days
        },
        {
            label: "HOURS",
            value: timeLeft.hours
        },
        {
            label: "MINUTES",
            value: timeLeft.minutes
        },
        {
            label: "SECONDS",
            value: timeLeft.seconds
        }
    ];

    const cardRefs = [
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
    ];

    const textRef = useRef<HTMLParagraphElement | null>(null);

    const displayedText = useTypingEffect({
        text: "Dont miss out on exclusive offers and treats!",
        speed: 140,
        start: startTyping,
    });

    useScrollEnter({
        trigger: ".bg-landing",
        start: "35% top",
        onEnter: () => {
            setStartTyping(true);
        }
    });

    useDirectionalReveal({
        refs: cardRefs,
        trigger: ".bg-landing",

        start: "14% top",
        end: "60% top",

        directions: [
            { x: -350, y: 0 },
            { x: -280, y: 120 },
            { x: 280, y: 120 },
            { x: 350, y: 0 },
        ],
    });

    useFadeIn({
        ref: textRef,
        trigger: ".bg-landing",
        start: "55% top",
        end: "75% top",
        y: 30,
    });

    
    useEffect(() => {

        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);

    }, []);



    return (
        <section className="flex flex-col gap-3">
            <div className="flex flex-row gap-7">
                {counterItems.map((item, index) => (
                    <CounterCard
                        ref={cardRefs[index]}
                        key={item.label}
                        value={item.value}
                        label={item.label}
                    />
                ))}
            </div>
            <p
                ref={textRef}
                className="text-sm flex flex-row gap-2 text-xs text-zinc-400 tracking-normal items-center justify-center"
            >
                {displayedText}
            </p>
        </section>
    )
};

export default Counter;