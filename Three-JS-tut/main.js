import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

const scene = new THREE.Scene();
const FOV = 75; //? (in degrees)
const camera = new THREE.PerspectiveCamera(
    FOV,
    window.innerWidth / window.innerHeight, //?aspect ratio
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
const updateStyle = true; //? If you wish to keep the size of your app but render it at a lower resolution (updateStyle=false)
renderer.setSize(window.innerWidth, window.innerHeight, updateStyle);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(2, 1, 3); //? (Len, breadth, height)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // ? use hex coded colors
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// ! all the objects added to the scene will have a starting point of (0,0,0)
camera.position.z = 5;
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
} //render Loop

if (WebGL.isWebGLAvailable()) {
    // Initiate function or other initializations here
    console.log("this browser supports webGL");
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    console.log(`this browser does not support webGL: ${warning}`);
    document.body.appendChild(warning);
}
