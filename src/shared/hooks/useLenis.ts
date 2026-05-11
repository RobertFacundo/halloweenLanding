import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        // 🔥 sincroniza scroll real
        lenis.on("scroll", ScrollTrigger.update);

        // 🔥 GSAP controla el loop
        const raf = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        // 🔥 importantísimo en React
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });

        return () => {
            gsap.ticker.remove(raf);
            lenis.destroy();
        };
    }, []);
};