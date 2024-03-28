import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);
controls.zoomToCursor = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// importing shaders
// import vertexShader from "./GLSL/vertexShader.glsl";
import loadShaderFile from "./utils/loadGLSLData";
import vertexShader from "./GLSL/vertexShader.glsl";
import fragmentShader from "./GLSL/fragmentShader.glsl";
let loaded = false;
// loadShaderFile("../GLSL/vertexShader.glsl", (e) => (vertexShader = e));
// loadShaderFile("../GLSL/fragmentShader.glsl", (e) => (fragmentShader = e));

// vertexShader = `${vertexShader}`;
// fragmentShader = `${fragmentShader}`;

console.log(vertexShader, fragmentShader);
camera.position.z = 5;
controls.update();

// shaders
const uniforms = {
    u_time: {
        type: "f",
        value: 0.0,
    },
};

const geometry = new THREE.PlaneGeometry(5, 5, 30, 30);
const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    wireframe: true,
    uniforms,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    // shader specific
    uniforms.u_time.value = clock.getElapsedTime();
    controls.update();
    if (!loaded) {
        if (vertexShader && fragmentShader) {
            loaded = true;
            console.log(vertexShader);
            console.log(fragmentShader);
        }
    }
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.addEventListener("resize", (e) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
    controls.update();
});

animate();
