import * as THREE from "three";
import compCheck from "./utils/compCheck";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new GLTFLoader();

// importing cube
// import cube from "./components/cube";
// scene.add(cube);

// text
// import textElem from "./components/text";
// textElem.render(scene, camera);

// importing line
// import line from "./components/line";
// scene.add(line);

// laoding items
import uploadFile from "./components/objects";
uploadFile(`./assets/obj.glb`, scene);

const light = new THREE.DirectionalLight(0xffffff);
scene.add(light);

const helper = new THREE.DirectionalLightHelper(light, 5);
scene.add(helper);

camera.position.z = 5;
controls.update();
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    // line.rotation.x += 0.01;
    // line.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// checking compatibility
const compatibilityChecker = compCheck();
if (compatibilityChecker === true) {
    animate();
} else throw new Error(compatibilityChecker);
