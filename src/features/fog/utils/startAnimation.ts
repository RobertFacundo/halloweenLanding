import * as THREE from 'three';

interface StartSmokeAnimationProps {
    smokeParticles: THREE.Mesh[];
    smokeMaterials: THREE.MeshBasicMaterial[];

    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;

    onReady?: () => void;
}

const startSmokeAnimation = ({
    smokeParticles,
    smokeMaterials,
    renderer,
    scene,
    camera,
    onReady,
}: StartSmokeAnimationProps) => {

    const clock = new THREE.Clock();

    let started = false;
    let startTime = 0;

    const animate = () => {

        requestAnimationFrame(animate);

        const elapsed = clock.getElapsedTime();

        if (!started) {
            started = true;
            onReady?.();
            startTime = elapsed;
        }

        smokeParticles.forEach((particle, i) => {

            particle.rotation.z += 0.001;

            particle.position.y +=
                Math.sin(elapsed + i) * 0.05;

            const t =
                Math.min((elapsed - startTime) * 0.5, 1);

            smokeMaterials[i].opacity = t * 0.12;
        });

        renderer.render(scene, camera);
    };

    animate();
};

export default startSmokeAnimation;