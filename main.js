/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("rect_prism_volume").addEventListener("click", rect_prism_volume);
document.getElementById("rect_prism_area").addEventListener("click", rect_prism_area);
document.getElementById("sphere_volume").addEventListener("click", sphere_volume)
document.getElementById("sphere_area").addEventListener("click", sphere_area)
document.getElementById("line_slope").addEventListener("click", line_slope)
document.getElementById("line_length").addEventListener("click", line_length)
document.getElementById("midpoint").addEventListener("click", midpoint)


/*** Functions ***/

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

//1. Creating a Javascript function delta(a,b) which returns the valueof a - b.
function delta(a,b) {
    return (a - b);

}

//2. Creating the function slope(x1,y1,x2,y2) which reiceives the points (x1,y1),(x2,y2) and returns the slope without rounding the result. 
function slope(x1,y1,x2,y2) {
    let m = delta(y2, y1)/ delta(x2, x1)
    return m;

}

//3. Creating the function average(n1,n2) which returns the average of the two numbers.
function average (n1,n2) {
    let average = (n1 + n2)/2
    return average;

}

//4. Creating the function round_user(value) which takes the value and rounds it to the user's request number of decimals, returning the answer.
function round_user(value){
    let decimals = Number(document.getElementById("rounding").value);
    let decimals2 = Math.round(value * 10**decimals) / 10**decimals;
    return decimals2
}

//5. Creating the function length(x1,y1,x2,y2) whih receives the points (x1,y1),(x2,y2) and returns the distance between the two points. 
function length(x1,y1,x2,y2){
    let distance = Math.sqrt(delta(x2,x1)**2 + delta(y2,y1)**2)
    return distance;
}

//Calculating rectangular prism volume for webpage
function rect_prism_volume(){
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("length").value);
    let height = Number(document.getElementById("length").value);
    let rect_volume_answer = round_user(length * width * height); 
    document.getElementById("rect_prism_volume").textContent = `The volume of the rectangular prism is ${rect_volume_answer}.`;

}

//Calculating rectangular prism area for webpage
function rect_prism_area(){
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let rect_area_answer = round_user(2*(width*length+height*length+height*width));
    document.getElementById("rect_prism_area").textContent = `The area of the rectangular prism is ${rect_area_answer}.`;
}

//Calculating sphere volume for wepbage
function sphere_volume(){
    let radius = Number(document.getElementById("radius").value);
    let sphere_volume_answer = round_user(4/3*Math.PI*radius**3);
    document.getElementById("sphere_volume").textContent = `The volume of the sphere is ${sphere_volume_answer}.`;
}

//Calculating sphere area for wepbage
function sphere_area(){
    let radius = Number(document.getElementById("radius").value);
    let sphere_area_answer = round_user(4*Math.PI*radius);
    document.getElementById("sphere_area").textContent = `The area of the sphere is ${sphere_area_answer}.`;
}

//Calculating line slope for wepbage
function line_slope(){
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let slope_answer = round_user(slope(x1,y1,x2,y2));
    document.getElementById("line_slope").textContent = `The slope of the line is ${slope_answer}.`;
}

//Calculating line length for wepbage
function line_length(){
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let length_answer = round_user(length(x1,y1,x2,y2));
    document.getElementById("line_length").textContent = `The length of the line is ${length_answer}.`;
}

//Calculating line midpoint for wepbage
function midpoint(){
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let midpoint_x = round_user(average(x1,x2));
    let midpoint_y = round_user(average(y1,y2));    
    document.getElementById("midpoint").textContent = `The midpoint of the line is (${midpoint_x},${midpoint_y}).`;
}