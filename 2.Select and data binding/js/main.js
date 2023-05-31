/*
*    main.js
*/


function bindingData() {
    var data = [25, 20, 15, 10, 5]
    var chartArea = d3.select("#chart-area")
    var svg = chartArea.append("svg");
    svg.attr("width", 400);
    svg.attr("height", 400);
    //appends circles with data
    var circles = svg.selectAll("rects").data(data);
    //adds atributes
    circles.enter()
        .append('rect')
        .attr("y", 25)
        .attr('x', 1)
        .attr('x', (item, i) => {return (i * 50) + 25;})
        .attr("width", 40)
        .attr("height", (item) => {return item;})
        .attr("fill", "green");
}


bindingData();
