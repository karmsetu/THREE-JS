import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Create an object (Sphere)
const geometry = new THREE.SphereGeometry(3, 64, 64); // 3-> size/radius , 64->segment/width , 64-> height
const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const FOV = 45; //! dont do much or it will distort the object
const aspectRatioLen = 800;
const aspectRatioWidth = 600;
const camera = new THREE.PerspectiveCamera(45, 800 / 600);
// Light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

camera.position.z = 20; //? moves camera away from the center point
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera);
