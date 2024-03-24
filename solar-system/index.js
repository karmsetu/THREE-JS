// importing
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import starsAndMilkyWayTexture from "./assets/starAndMilkyway.jpg";
import starsTexture from "./assets/stars.jpg";

// scene
const scene = new THREE.Scene();
// camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-90, 140, 140);
orbit.update();

// lighting
const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

// background

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    // starsTexture,
    // starsTexture,
    // starsTexture,
    // starsTexture,
    starsAndMilkyWayTexture,
    starsAndMilkyWayTexture,
    starsAndMilkyWayTexture,
    starsAndMilkyWayTexture,
    starsAndMilkyWayTexture,
    starsAndMilkyWayTexture,
    // starsTexture
]);

// const geometry = new THREE.BoxGeometry(10, 10, 10);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// sun
import sun from "./components/Sun";
scene.add(sun);
// planets

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", (e) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
