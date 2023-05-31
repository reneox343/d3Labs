/*
*    main.js
*/

function random_rgba() {
    Math.random
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

async function challenge1(){
    var buildings = await d3.json("/resources/data/buildings.json").then((data) => {
        return data
    });
    width = 25
    var heights = buildings.map(item => parseFloat(item.height));

    var chartArea = d3.select("#chart-area")
    var svg = chartArea.append("svg");
    svg.attr("width", 1000);
    svg.attr("height", 1000);
    //appends circles with data
    var rects = svg.selectAll("rects").data(heights);
    console.log(heights);
    //adds atributes
    rects.enter()
        .append('rect')
        .attr("y", 25)
        .attr('x', (item, i) => {return (i*2 * width) + width;})
        .attr("width", width)
        .attr("height", (item) => {console.log(item);;return item})
        .attr("fill", random_rgba());
}

challenge1();
