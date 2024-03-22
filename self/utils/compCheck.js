import WebGL from "three/addons/capabilities/WebGL.js";

const compCheck = () => {
    if (WebGL.isWebGLAvailable()) {
        // Initiate function or other initializations here
        return true;
    } else {
        return WebGL.getWebGLErrorMessage();
    }
};

export default compCheck;
