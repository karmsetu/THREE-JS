import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/**
 * [{
	"resource": "/d:/THREE-JS/self/components/objects.js",
	"owner": "typescript",
	"code": "1149",
	"severity": 8,
	"message": "File name 'C:/Users/lenovo/AppData/Local/Microsoft/TypeScript/5.3/node_modules/@types/three/examples/jsm/loaders/gltfloader.d.ts' differs from already included file name 'C:/Users/lenovo/AppData/Local/Microsoft/TypeScript/5.3/node_modules/@types/three/examples/jsm/loaders/GLTFLoader.d.ts' only in casing.\n  The file is in the program because:\n    Imported via \"three/examples/jsm/loaders/GLTFLoader\" from file 'd:/THREE-JS/self/main.js' with packageId '@types/three/examples/jsm/loaders/GLTFLoader.d.ts@0.162.0'\n    Imported via \"three/examples/jsm/loaders/gltfloader\" from file 'd:/THREE-JS/self/components/objects.js' with packageId '@types/three/examples/jsm/loaders/gltfloader.d.ts@0.162.0'",
	"source": "ts",
	"startLineNumber": 1,
	"startColumn": 28,
	"endLineNumber": 1,
	"endColumn": 67,
	"relatedInformation": [
		{
			"startLineNumber": 4,
			"startColumn": 28,
			"endLineNumber": 4,
			"endColumn": 67,
			"message": "File is included via import here.",
			"resource": "/d:/THREE-JS/self/main.js"
		}
	]
}]


  File name 'C:/Users/lenovo/AppData/Local/Microsoft/TypeScript/5.3/node_modules/@types/three/examples/jsm/loaders/gltfloader.d.ts' differs from already included file name 'C:/Users/lenovo/AppData/Local/Microsoft/TypeScript/5.3/node_modules/@types/three/examples/jsm/loaders/GLTFLoader.d.ts' only in casing.
  The file is in the program because:
    Imported via "three/examples/jsm/loaders/GLTFLoader" from file 'd:/THREE-JS/self/main.js' with packageId '@types/three/examples/jsm/loaders/GLTFLoader.d.ts@0.162.0'
    Imported via "three/examples/jsm/loaders/gltfloader" from file 'd:/THREE-JS/self/components/objects.js' with packageId '@types/three/examples/jsm/loaders/gltfloader.d.ts@0.162.0'
 */

const loader = new GLTFLoader();

const uploadFile = (filePath, scene) => {
    loader.load(
        `${filePath}`,
        function (gltf) {
            scene.add(gltf.scene);
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );
};

export default uploadFile;
