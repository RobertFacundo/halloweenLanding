import { useEffect } from "react";
import gsap from "gsap";

interface UseFadeInProps {
    ref: React.RefObject<HTMLElement | null>;
    trigger: string;
    start?: string;
    end?: string;
    y?: number;
    scrub?: boolean;
}

const useFadeIn = ({
    ref,
    trigger,
    start = "top center",
    end = "bottom center",
    y = 0,
    scrub = true,
}: UseFadeInProps) => {

    useEffect(() => {

        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y,
            },
            {
                opacity: 1,
                y: 0,
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

export default useFadeIn;