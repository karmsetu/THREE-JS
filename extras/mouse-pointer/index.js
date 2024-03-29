import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const controls = new OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement);
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
camera.position.z = 5;

// helper objects
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// mouse events
const mouse = new THREE.Vector2();
const interSectionPoint = new THREE.Vector3();
const planeNormal = new THREE.Vector3();
const plane = new THREE.Plane();
const rayCaster = new THREE.Raycaster();

window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    planeNormal.copy(camera.position).normalize();
    plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
    rayCaster.setFromCamera(mouse, camera);
    rayCaster.ray.intersectPlane(plane, interSectionPoint);
});

window.addEventListener('click', (e) => {
    const sphereGeo = new THREE.Mesh(
        new THREE.SphereGeometry(0.125, 30, 30),
        new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
    );
    scene.add(sphereGeo);
    sphereGeo.position.copy(interSectionPoint);
});

controls.update();
function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    controls.update();
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
