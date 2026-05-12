import useScrollCTA from "../../shared/hooks/animations/useScrollCTA";

const Scroll = () => {
    const ctaRef = useScrollCTA();
    return (
        <div className="scroll-cta" ref={ctaRef}>
            <div className="scroll-indicator">
                <span>Scroll if you dare</span>
                <img
                    src="/scroll.png"
                    alt="scroll indicator"
                    className="arrow-img"
                />
            </div>
        </div>
    )
};

export default Scroll;