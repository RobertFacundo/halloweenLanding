import { useEffect } from "react";
import gsap from "gsap";

interface Direction {
    x: number;
    y: number;
}

interface UseDirectionalRevealProps {
    refs: React.RefObject<HTMLDivElement | null>[];
    trigger: string;
    directions: Direction[];
    start?: string;
    end?: string;
    scrub?: boolean;
}

const useDirectionalReveal = ({
    refs,
    trigger,
    directions,
    start = "top center",
    end = "bottom center",
    scrub = true,
}: UseDirectionalRevealProps) => {
    useEffect(() => {
        refs.forEach((ref, index) => {
            if (!ref.current) return;

            const direction = directions[index];

            gsap.fromTo(
                ref.current,
                {
                    opacity: 0,
                    x: direction.x,
                    y: direction.y,
                    scale: 0.8,
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
        });
    }, []);
};

export default useDirectionalReveal;