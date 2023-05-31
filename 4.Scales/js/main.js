/*
*    main.js
*/

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

async function scalesExersice(){
    var chartArea = d3.select("#chart-area")
    var svg = chartArea.append("svg");
    svg.attr("width", 500);
    svg.attr("height", 500);

    var buildings = await d3.json("/resources/data/buildings.json").then((data) => {
        return data
    });

    var heights = buildings.map(item => parseFloat(item.height));
    var names = buildings.map(item => item.name);


    var x = d3.scaleBand()
    .domain(names)
    .range([0,400])
    .paddingInner(0.3)
    .paddingOuter(0.3);

    maxHeight = Math.max(...heights)
    var y = d3.scaleLinear()
    .domain([0,maxHeight])
    .range([0,400]);

    

    var buildings = buildings.forEach((item,i)=>{
        item.height = parseFloat(item.height);
        console.log(x(item.name));
        var rect = svg.append("rect")
        rect.attr("x", x(item.name))
        rect.attr("y", 0)
        rect.attr("width", 25)
        rect.attr("height", y(item.height))
        rect.attr("fill", random_rgba())
    })


}




scalesExersice();
