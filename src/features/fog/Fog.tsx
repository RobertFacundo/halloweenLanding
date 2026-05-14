import useFogAnimation from "./useFogAnimation";
import { useRef } from "react";

const Fog = ({ onReady }: { onReady?: () => void }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useFogAnimation(canvasRef, onReady);
    return (
        <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />
    );
};

export default Fog;