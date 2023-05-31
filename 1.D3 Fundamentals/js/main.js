/*
*    main.js
*/

function d3CommandsExercise() {
    var chartArea = d3.select("#chart-area")
    var svg = chartArea.append("svg");
    console.log(svg);
    svg.attr("width", 400);
    svg.attr("height", 400);
    var circle = svg.append("circle").attr("cx", 100).attr("cy", 250).attr("r", 70).attr("fill", "green");
    var rect = svg.append("rect").attr("x", 20).attr("y", 20).attr("width", 20).attr("height", 20).attr("fill", "red");
}


d3CommandsExercise();
