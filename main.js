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

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)

}

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


//Creating the function length(x1,y1,x2,y2) whih receives the points (x1,y1),(x2,y2) and reutrns the distance between the two points. 
function length(x1,y1,x2,y2){
    let distance = Math.sqrt(delta(x2,x1)**2 + delta(y2,y1)**2)
    return distance;
}

function rect_prism_volume(){
    let rect_volume = 
}