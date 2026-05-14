import { useEffect } from "react"
import * as THREE from 'three';
import smoke from '../../assets/smoke.png'
import smokeIV from '../../assets/smokeIV.png'
import smokeV from '../../assets/smokeV.png'

const useFogAnimation = (
    canvasRef: React.RefObject<HTMLCanvasElement | null>,
    onReady?: () => void
) => {

    useEffect(() => {
        if (!canvasRef.current) return;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true
        });

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )

        camera.position.y = -120;
        camera.position.z = 800;
        camera.rotation.x = 0.15;

        const textureLoader = new THREE.TextureLoader();

        const smokeImages = [
            smoke,
            smokeIV,
            smokeV
        ];

        const smokeTextures = smokeImages.map((image) =>
            textureLoader.load(image)
        );

        const smokeGeometry = new THREE.PlaneGeometry(500, 500);

        const smokeParticles: THREE.Mesh[] = [];
        const smokeMaterials: THREE.MeshBasicMaterial[] = [];

        let startTime = 0;
        const clock = new THREE.Clock();

        for (let i = 0; i < 40; i++) {
            const randomTexture = smokeTextures[Math.floor(Math.random() * smokeTextures.length)];

            const smokeMaterial = new THREE.MeshBasicMaterial({
                map: randomTexture,
                transparent: true,
                opacity: 0,
                depthWrite: false,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                alphaTest: 0.01
            });

            const smokeMesh = new THREE.Mesh(smokeGeometry, smokeMaterial);

            smokeMesh.position.x = Math.random() * 2000 - 1000;
            smokeMesh.position.y = Math.random() * 1000 - 500;
            smokeMesh.position.z = Math.random() * 1000 - 500;
            smokeMesh.rotation.z = Math.random() * Math.PI * 2;

            smokeMesh.scale.set(
                Math.random() * 1.5 + 0.5,
                Math.random() * 1.5 + 0.5,
                Math.random() * 1.5 + 0.5
            );

            scene.add(smokeMesh);

            smokeParticles.push(smokeMesh);
            smokeMaterials.push(smokeMaterial);
        }

       let started = false;

        const animate = () => {
            requestAnimationFrame(animate);

            const elapsed = clock.getElapsedTime();

            if(!started){
                started = true;
                onReady?.();
                startTime = elapsed
            }


            smokeParticles.forEach((particle, i) => {
                particle.rotation.z += 0.001;
                particle.position.y += Math.sin(elapsed + i) * 0.05;

                    const t = Math.min((elapsed - startTime) * 0.5, 1);
                    smokeMaterials[i].opacity = t * 0.12;
            });

            renderer.render(scene, camera);
        };

        animate();
    }, []);
};

export default useFogAnimation;