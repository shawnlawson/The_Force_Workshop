//http://shawnlawson.github.io/The_Force/


void main () {
    vec2 stN = uvN();
    vec2 st = uv();
    vec3 color = black;
    for (int i = 0; i < 150; i++) {
        float x = fract(float(i) * PI2 + time * .1);
        float y = rand(float(i) * .9876543 + time * .00001);
        // float y = rand(float(i));
        
        color += circle(y * 4. - 2., x * 2. - 1., .2 + .2 * bands.y, .001) * blue;
        color += circle(y * 4. - 2., x * 2. - 1., .5 , .5) * yellow * bands.x * 4.;
    }
    
    vec3 bb = texture2D(backbuffer,  stN).rgb;
    
    color = mix(color, bb, .94);
    
    vec3 fade = 1.1 - stN.y * white;
    
	gl_FragColor = vec4(color * fade , 1.0);
}