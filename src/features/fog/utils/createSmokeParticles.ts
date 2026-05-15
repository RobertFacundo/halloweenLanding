import * as THREE from 'three'

interface CreateSmokeParticlesProps {
    scene: THREE.Scene;
    smokeTextures: THREE.Texture[];
    smokeGeometry: THREE.PlaneGeometry;
    count: number;
}

const createSmokeParticles = ({
    scene,
    smokeTextures,
    smokeGeometry,
    count,
}: CreateSmokeParticlesProps) => {

    const smokeParticles: THREE.Mesh[] = [];
    const smokeMaterials: THREE.MeshBasicMaterial[] = [];

    for (let i = 0; i < count; i++) {

        const randomTexture =
            smokeTextures[Math.floor(Math.random() * smokeTextures.length)];

        const smokeMaterial = new THREE.MeshBasicMaterial({
            map: randomTexture,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            alphaTest: 0.01
        });

        const smokeMesh = new THREE.Mesh(
            smokeGeometry,
            smokeMaterial
        );

        smokeMesh.position.x = Math.random() * 2000 - 1000;
        smokeMesh.position.y = Math.random() * 1000 - 500;
        smokeMesh.position.z = Math.random() * 1000 - 500;

        smokeMesh.rotation.z = Math.random() * Math.PI * 2;

        const scale = Math.random() * 1.5 + 0.5;

        smokeMesh.scale.set(scale, scale, scale);

        scene.add(smokeMesh);

        smokeParticles.push(smokeMesh);
        smokeMaterials.push(smokeMaterial);
    }

    return {
        smokeParticles,
        smokeMaterials,
    };
};

export default createSmokeParticles;