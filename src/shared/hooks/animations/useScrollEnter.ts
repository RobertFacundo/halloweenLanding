import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseScrollEnterProps {
    trigger: string;
    start?: string;
    onEnter: () => void;
}

const useScrollEnter = ({
    trigger,
    start = "top center",
    onEnter,
}: UseScrollEnterProps) => {

    useEffect(() => {

        const triggerInstance = ScrollTrigger.create({
            trigger,
            start,
            onEnter,
        });

        return () => {
            triggerInstance.kill();
        };

    }, []);
};

export default useScrollEnter;