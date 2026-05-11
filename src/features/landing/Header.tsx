import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from 'react';
import useTypingEffect from '../../shared/hooks/useTypingEffect';
import useFadeIn from '../../shared/hooks/animations/useFadeIn';
import useScrollEnter from '../../shared/hooks/animations/useScrollEnter';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const [startTyping, setStartTyping] = useState(false);
    const headerRef = useRef<HTMLElement | null>(null);

    useFadeIn({
        ref: headerRef,
        trigger: ".bg-landing",
        start: "30% top",
        end: "90% top",
    });

    const displayedText = useTypingEffect({
        text: "The scariest deals of the year are coming...",
        speed: 140,
        start: startTyping,
    });

    useScrollEnter({
        trigger: ".bg-landing",
        start: "25% top",
        onEnter: () => {
            setStartTyping(true);
        }
    });


    return (
        <header
            ref={headerRef}
            className="flex flex-col gap-2"
        >
            <h1 className="text-[60px] text-white tracking-wider">
                HALLOWEEN DEALS
            </h1>
            <p className="
            text-sm
            text-zinc-400
            tracking-widest
            ">
                {displayedText}
            </p>
        </header >
    )
};

export default Header;