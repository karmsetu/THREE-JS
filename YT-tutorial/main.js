import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
// Scene
const scene = new THREE.Scene();
// camera
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
camera.position.z = 20;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer();
const updateStyle = true; //? If you wish to keep the size of your app but render it at a lower resolution (updateStyle=false)
renderer.setSize(size.width, size.height, updateStyle);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(2);
// creating object
const geometry = new THREE.SphereGeometry(3, 64, 64); //? (Len, breadth, height)
const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xff0000),
    roughness: 0.2,
}); // ? use THREE js color func
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
// adding light
const Light = new THREE.PointLight(0xffffff, 20, 100);
Light.position.set(2, 2, 4);
Light.intensity = 10;
scene.add(Light);

// ! all the objects added to the scene will have a starting point of (0,0,0)
// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;
// main loop
function animate() {
    controls.update();
    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
} //render Loop

// compatibility check
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

// GSAP

const tl = gsap.timeline({
    defaults: {
        duration: 1,
    },
});
tl.fromTo(
    sphere.scale,
    {
        z: 0,
        x: 0,
        y: 0,
    },
    {
        z: 1,
        x: 1,
        y: 1,
    }
);
// Animate color
let mouseDown = false;
let rgb = [];
window.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = true));
window.addEventListener("mousemove", (e) => {
    if (mouseDown) {
        rgb = [
            Math.round((e.pageX / size.width) * 255),
            Math.round((e.pageY / size.height) * 255),
            150,
        ];
        // main animation
        let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
        // console.log(newColor);
        gsap.to(sphere.material.color, {
            r: newColor.r,
            g: newColor.g,
            b: newColor.b,
        });
    }
});
