import { forwardRef } from "react";

interface CounterCardProps {
    value: number;
    label: string;
}

const CounterCard = forwardRef<HTMLDivElement, CounterCardProps>(
    ({ value, label }, ref) => {

        return (
            <div
                ref={ref}
                className="
                    flex
                    flex-col
                    items-center
                    gap-2
                    bg-black/60
                    py-8
                    px-6
                    rounded-xl
                "
            >
                <h3 className="text-5xl font-thin text-orange-500">
                    {value}
                </h3>

                <p className="text-zinc-400 tracking-widest text-sm">
                    {label}
                </p>
            </div>
        );
    }
);

export default CounterCard;