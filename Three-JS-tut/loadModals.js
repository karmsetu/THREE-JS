import * as THREE from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
);

camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);
// TODO add assets to the asset file anf load them on the path below
// ? i have used this one "https://sketchfab.com/3d-models/free-1975-porsche-911-930-turbo-8568d9d14a994b9cae59499f0dbed21e#download"
const objPath = "./assets/car.glb";
const scene = new THREE.Scene();
// loading model
loader.load(objPath, (gltf) => {
    scene.add(gltf.scene);
});
// loader.load(
//     "./assets/obj.glb",
//     function (gltf) {
//         scene.add(gltf.scene);
//     },
//     undefined,
//     function (error) {
//         console.error(error);
//     }
// );

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
} //render Loop

const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
// light.

const rect = () => {
    const geometry = new THREE.BoxGeometry(2, 1, 3); //? (Len, breadth, height)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // ? use hex coded colors
    const cube = new THREE.Mesh(geometry, material);
    return cube;
};
const cube = rect();
scene.add(cube);

animate();
