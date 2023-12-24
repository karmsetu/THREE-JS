import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import "./style.css";
const scene = new THREE.Scene();
const FOV = 75; //? (in degrees)
var size = {
    height: window.innerHeight,
    width: window.innerWidth,
};
const camera = new THREE.PerspectiveCamera(
    FOV,
    size.height / size.width, //?aspect ratio
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
const updateStyle = true; //? If you wish to keep the size of your app but render it at a lower resolution (updateStyle=false)
renderer.setSize(size.width, size.height, updateStyle);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.SphereGeometry(3, 64, 64); //? (Len, breadth, height)
const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xff0000),
}); // ? use THREE js color func
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const Light = new THREE.PointLight(0xffffff, 20, 100);
Light.position.set(3, 2, 5);
scene.add(Light);

// ! all the objects added to the scene will have a starting point of (0,0,0)
camera.position.z = 20;
function animate() {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    window.requestAnimationFrame(animate);
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

// dynamic resize
window.addEventListener("resize", () => {
    //
    console.log(`lol`);
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    // update camera
    camera.updateProjectionMatrix();
    camera.aspect = size.width / size.height;
    renderer.setSize(size.width, size.height);
});
