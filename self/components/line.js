import * as THREE from "three";

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
// After material we will need a geometry with some vertices:

const points = [];
points.push(new THREE.Vector3(-1, 0, 0));
points.push(new THREE.Vector3(0, 1, 0));
points.push(new THREE.Vector3(1, 0, 0));
points.push(new THREE.Vector3(0, -1, 0));
points.push(new THREE.Vector3(-1, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

export default line;
