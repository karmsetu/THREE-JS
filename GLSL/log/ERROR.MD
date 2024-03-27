# 1. issue #1 (unable to import .glsl file)

## techStack:

vite, node , threejs

## description:

-   i was not able to import the glsl files (vertex, fragmentShader)

## syntax:

```bash
failed to load config from D:\THREE-JS\GLSL\vite.config.js
error when starting dev server:
Error: Build failed with 1 error:
node_modules/esbuild/lib/main.js:1374:27: ERROR: [plugin: externalize-deps] "vite-plugin-glsl" resolved to an ESM file. ESM file cannot be loaded by `require`. See https://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only for more details.
    at failureErrorWithLog (D:\THREE-JS\GLSL\node_modules\esbuild\lib\main.js:1651:15)
    at D:\THREE-JS\GLSL\node_modules\esbuild\lib\main.js:1059:25
    at runOnEndCallbacks (D:\THREE-JS\GLSL\node_modules\esbuild\lib\main.js:1486:45)
    at buildResponseToResult (D:\THREE-JS\GLSL\node_modules\esbuild\lib\main.js:1057:7)
    at D:\THREE-JS\GLSL\node_modules\esbuild\lib\main.js:1086:16
    at responseCallbacks.<computed> (D:\THREE-JS\GLSL\node_modules\esbuild\lib\main.js:704:9)
    at handleIncomingPacket (D:\THREE-JS\GLSL\node_modules\esbuild\lib\main.js:764:9)
    at Socket.readFromStdout (D:\THREE-JS\GLSL\node_modules\esbuild\lib\main.js:680:7)
    at Socket.emit (node:events:514:28)
    at addChunk (node:internal/streams/readable:324:12)
```

## reason:

-   because of vite, as per my research; this issue doesnot rise in vanilla env the runtimer was not able to process the indents, spaces, line-breaks in the GLSL file
    ## sources:
-   [reddit-thread](https://www.reddit.com/r/threejs/comments/10q4cnl/shader_file_throws_error_unexpected_token/)
-   [npm-vite-plugin-glsl](https://www.npmjs.com/package/vite-plugin-glsl)
-   [npm-rollup-plugin-glslify](https://www.npmjs.com/package/rollup-plugin-glslify?activeTab=code)
    ## fix:
-   [npm-rollup-plugin-glslify](https://www.npmjs.com/package/rollup-plugin-glslify?activeTab=code)
    ## TODO:
    read the [npm-rollup-plugin-glslify](https://www.npmjs.com/package/rollup-plugin-glslify?activeTab=code) file and reimplement the utility function if possible
