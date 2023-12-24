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
const geometry = new THREE.SphereGeometry(3, 64, 64); //? (Len, breadth, height)
const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xff0000),
}); // ? use hex coded colors
const cube = new THREE.Mesh(geometry, material);

const geometry1 = new THREE.BoxGeometry(2, 2, 2);
const material1 = new THREE.MeshStandardMaterial({
    color: "#00ff83",
});
const cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube);
scene.add(cube1);

const Light = new THREE.PointLight(0xffffff, 20, 100);
Light.position.set(4, 4, 4);
scene.add(Light);

// ! all the objects added to the scene will have a starting point of (0,0,0)
camera.position.z = 20;
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
