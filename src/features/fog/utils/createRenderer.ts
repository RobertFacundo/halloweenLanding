import * as THREE from 'three';

const createRenderer = (
    canvas: HTMLCanvasElement
) => {
    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
    });

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    return renderer;
};

export default createRenderer;