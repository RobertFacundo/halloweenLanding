import { useEffect } from "react"
import * as THREE from 'three';
import smoke from '../../../assets/smoke.png'
import smokeIV from '../../../assets/smokeIV.png'
import smokeV from '../../../assets/smokeV.png'
import createRenderer from "../utils/createRenderer";
import createCamera from "../utils/createCamera";
import loadSmokeTextures from "../utils/loadSmokeTextures";
import createSmokeParticles from "../utils/createSmokeParticles";
import startSmokeAnimation from "../utils/startAnimation";

const useFogAnimation = (
    canvasRef: React.RefObject<HTMLCanvasElement | null>,
    onReady?: () => void
) => {

    useEffect(() => {
        if (!canvasRef.current) return;

        const renderer = createRenderer(canvasRef.current)

        const scene = new THREE.Scene();

        const camera = createCamera();

        const smokeImages = [
            smoke,
            smokeIV,
            smokeV
        ];

        const smokeTextures = loadSmokeTextures(smokeImages);

        const smokeGeometry = new THREE.PlaneGeometry(500, 500);

        const { smokeParticles, smokeMaterials } =
            createSmokeParticles({
                scene,
                smokeTextures,
                smokeGeometry,
                count: 40,
            });

        startSmokeAnimation({
            smokeParticles,
            smokeMaterials,
            renderer,
            scene,
            camera,
            onReady,
        });
        
    }, []);
};

export default useFogAnimation;