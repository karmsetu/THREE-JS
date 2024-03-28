uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform sampler2D u_image;
varying vec2 vUv;


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec4 texture = texture2D(u_image, vUv);
    gl_FragColor = vec4(texture.r, texture.g, texture.b, 1.0);
}
