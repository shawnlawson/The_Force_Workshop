//http://shawnlawson.github.io/The_Force/


void main () {
    vec2 stN = uvN();
    vec2 st = uv();
    
    float f = fract(stN.y * 60. - sin(time) );
    float f2 = fract(stN.y * 20. - cos(time) );
    float f3 = fract(stN.y * 80. - asin(time) );
 
 
    vec3 color = step(.5, f) * purple;
    vec3 color2 = step(.5, f2) * red;
    vec3 color3 = step(.5, f3) * green;

    color = max(color2, color);
    color = max(color3, color);
    
	gl_FragColor = vec4(color , 1.0);
}