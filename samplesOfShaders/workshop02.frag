//http://shawnlawson.github.io/The_Force/


void main () {
    vec2 stN = uvN();
    vec2 st = uv();
    
    float f = snoise(rotate(vec2(.5), st, time * .3) * vec2(40., 1.) + vec2(0., -time));
    vec3 color = f + sin(time)  * teal;
  
    // vec3 color = step(.5, f) * lime;
    
    vec3 bb = texture2D(backbuffer,  stN).rgb;
    
    color = mix(color, bb, .9);
    
	gl_FragColor = vec4(color , 1.0);
}