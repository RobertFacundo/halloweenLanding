import * as THREE from 'three';

const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(
        35,
        window.innerHeight / window.innerHeight,
        0.1,
        1000
    );

    camera.position.y = -120;
    camera.position.z = 800;

    camera.rotation.x = 0.15;

    return camera;
};

export default createCamera;
