import { useState, useEffect } from "react"

interface UseTypingEffectProps {
    text: string;
    speed: number;
    start: boolean
}

const useTypingEffect = ({
    text,
    speed = 130,
    start,
}: UseTypingEffectProps) => {
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        if (!start) return;
        let index = 0;

        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index));

            index++;

            if (index > text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [start, text, speed]);

    return displayedText;
}

export default useTypingEffect;