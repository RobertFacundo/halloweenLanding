import { useEffect, useRef } from "react";
import gsap from "gsap";

const useScrollCTA = () => {
    const ctaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ctaRef.current) return;

        gsap.to(ctaRef.current, {
            opacity: 0,
            scale: 0.8,
            filter: "blur(4px)",
            y: -30,
            scrollTrigger: {
                trigger: ".bg-landing",
                start: "top top",
                end: "25% top",
                scrub: true,
            },
        });
    }, []);

    return ctaRef;
};

export default useScrollCTA;