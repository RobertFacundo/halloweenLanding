import * as THREE from 'three';

const loadSmokeTextures = (
    smokeImages: string[]
) => {
    const textureLoader = new THREE.TextureLoader();

    return smokeImages.map((image) => 
        textureLoader.load(image)
    );
};

export default loadSmokeTextures;