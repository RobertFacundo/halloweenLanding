import { useEffect, useState } from "react";
import calculateTimeLeft from "../../shared/utils/timeCalculator";
import CounterCard from "./CounterCards";


const Counter = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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

    useEffect(() => {

        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section className="flex flex-col gap-3">
            <div className="flex flex-row gap-7">
                {counterItems.map((item) => (
                    <CounterCard
                        key={item.label}
                        value={item.value}
                        label={item.label}
                    />
                ))}
            </div>
            <p className="text-sm flex flex-row gap-2 text-xs text-zinc-400 tracking-normal items-center justify-center">
                Dont miss out on exclusive offers and treats!
            </p>
        </section>
    )
};

export default Counter;