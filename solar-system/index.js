// planet texture
import mercuryTexture from "./assets/mercurymap.jpg";
import venusTexture from "./assets/venusmap.jpg";
import earthTexture from "./assets/earthmap.jpg";
import marsTexture from "./assets/marsmap.jpg";
import jupiterTexture from "./assets/jupitermap.jpg";
import saturnTexture from "./assets/saturnmap.jpg";
import uranusTexture from "./assets/uranusmap.jpg";
import neptuneTexture from "./assets/neptunemap.jpg";
import plutoTexture from "./assets/plutomap.jpg";
import saturnRingTexture from "./assets/saturnringcolor.jpg";
import uranusRingTexture from "./assets/uranusringcolour.jpg";
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
// const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);

// background

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    // starsTexture,
    starsAndMilkyWayTexture,
    // starsAndMilkyWayTexture,
    // starsAndMilkyWayTexture,
    // starsAndMilkyWayTexture,
    // starsAndMilkyWayTexture,
    // starsAndMilkyWayTexture,
]);

// const geometry = new THREE.BoxGeometry(10, 10, 10);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// sun
import sun from "./components/Sun";
scene.add(sun);

// planets

import createPlanet from "./utils/createPlanet";
const mercury = createPlanet(scene, 3.2, mercuryTexture, 28);
const venus = createPlanet(scene, 5.8, venusTexture, 44);
const earth = createPlanet(scene, 6, earthTexture, 62);
const mars = createPlanet(scene, 4, marsTexture, 78);
const jupiter = createPlanet(scene, 12, jupiterTexture, 100);
const saturn = createPlanet(scene, 10, saturnTexture, 138, {
    innerRadius: 10,
    outerRadius: 20,
    texture: saturnRingTexture,
});
const uranus = createPlanet(scene, 7, uranusTexture, 176, {
    innerRadius: 7,
    outerRadius: 12,
    texture: uranusRingTexture,
});
const neptune = createPlanet(scene, 7, neptuneTexture, 200);
const pluto = createPlanet(scene, 2.8, plutoTexture, 216);

const sunLight = new THREE.PointLight(0xffffff, 1000, 300);
const pointLightHelper = new THREE.PointLightHelper(sunLight, 10);
scene.add(sunLight);
scene.add(pointLightHelper);

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(10, 10, 10),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
);
cube.position.x = 10;
// scene.add(cube);

function animate() {
    // rotation
    // sun
    sun.rotateY(0.004);
    mercury.mesh.rotateY(0.004);
    venus.mesh.rotateY(0.002);
    earth.mesh.rotateY(0.02);
    mars.mesh.rotateY(0.018);
    jupiter.mesh.rotateY(0.04);
    saturn.mesh.rotateY(0.038);
    uranus.mesh.rotateY(0.03);
    neptune.mesh.rotateY(0.032);
    pluto.mesh.rotateY(0.008);

    //Around-sun-rotation
    mercury.obj.rotateY(0.04);
    venus.obj.rotateY(0.015);
    earth.obj.rotateY(0.01);
    mars.obj.rotateY(0.008);
    jupiter.obj.rotateY(0.002);
    saturn.obj.rotateY(0.0009);
    uranus.obj.rotateY(0.0004);
    neptune.obj.rotateY(0.0001);
    pluto.obj.rotateY(0.00007);
    // revolution
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", (e) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
