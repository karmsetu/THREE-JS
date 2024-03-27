# GLSL ref

## data types

-   primitive:

1. int
2. float
3. boolean

```c
#pragma endregion
vec4 vector = vector4(1,2,3,4)
float x = vector.x = 1
float s = vector.s = 1
float r = vector.r = 1

float y = vector.y = 2
float g = vector.g = 2
float t = vector.t = 2

float z = vector.z = 3
float b = vector.b = 3
float q = vector.q = 3

float w = vector.w = 4
float a = vector.a = 4
float p = vector.p = 4

/* here's the denomination:
1. (r,g,b,a)
2. (x,y,z,w)
3. (s,t,p,q)

*/

const
```

## Array

```c
float array[7]
array[4] = 69.0
```

## custom types

```c
struct myType {
  int c1,
  vec2 c2
}

myType myVar = (7, vec2(1,0,2.0))
```

## control flow statements

```c
if()
{
 // if true...
} else if()
{
 // if true...
} else {}

for (int i =0 ; i< 10; i++){
  // some statement
}
```

## functions

```c
<returnType> <functionName>(<inputType><inputName>){
  // codeBlock
  return statement
}
```

## Storage qualifiers

1. const
2. varying

-   used to transfer data from vertex to fragment shaders

3. attribute

-   recieve data from outside source (javascript file)
-   can be used only in the vertex shaders

4. uniform

-   recieve data from outside source (javascript file)
-   used in same/constant data (time)

## vertex shader

### Boiler code

```c
void main(){
  gl_position = projectionMatrix * modelViewMatrix * vec4(position, 1.0)
}
```

## fragment shader

### boiler code

```c
void main(){
  gl_fragcolor = vec4(1.0, 0.0, 0.0, 1.0)
}
```
