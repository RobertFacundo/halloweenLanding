import { useEffect } from "react";
import gsap from "gsap";

interface UseRevealProps {
    ref: React.RefObject<HTMLElement | null>;
    x?: number;
    y?: number;
    opacity?: number;
    scale?: number;
    trigger: string;
    start?: string;
    end?: string;
    scrub?: boolean;
}

const useSplitReveal = ({
    ref,
    x = 0,
    y = 0,
    opacity = 0,
    scale = 1,
    trigger,
    start = "top center",
    end = "bottom center",
    scrub = true,
}: UseRevealProps) => {

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity,
                x,
                y,
                scale,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger,
                    start,
                    end,
                    scrub,
                },
            }
        );
    }, []);
};

export default useSplitReveal;