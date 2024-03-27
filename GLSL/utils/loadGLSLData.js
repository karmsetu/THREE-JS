export default function loadShaderFile(url, callback) {
    // checking the url
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Check if response is an HTML document
                var contentType = xhr.getResponseHeader("Content-Type");
                if (contentType && contentType.indexOf("text/html") !== -1) {
                    console.error({
                        devData: `check the URL in the 'loadShaderFile' function `,
                        message: `File is not a shader:${url}`,
                    });
                    callback(null); // Pass null to callback indicating failure
                } else {
                    callback(xhr.responseText);
                }
            } else {
                console.error("Failed to load shader file:", url);
                callback(null); // Pass null to callback indicating failure
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
