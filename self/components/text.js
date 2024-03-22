import * as THREE from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
// import { FontLoader } from "three/examples/jsm/loaders/fontloader.js";
import line from "./line";

// const textElem = new CSS2DRenderer(line)
const textElem = new CSS2DRenderer();
console.log();
textElem.domElement;

// procedural text geometery
const loader = new FontLoader();

loader.load("fonts/helvetiker_regular.typeface.json", function (font) {
    const geometry = new TextGeometry("Hello three.js!", {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5,
    });
});

module.exports = {
    textElem,
};
// export default textElem;
