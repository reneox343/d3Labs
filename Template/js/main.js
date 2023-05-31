/*
*    main.js
*/

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function d3Commands() {
    //fist instance
    console.log(d3.select("rect"));
    console.log(d3.select("#center"));

    // all instances
    console.log(d3.selectAll("rect"));

    //example of how to add an element
    var svg = d3.select("#canvas")
    var rect = svg.append("rect")
    rect.attr("x", 25)
    rect.attr("y", 0)
    rect.attr("width", 80)
    rect.attr("height", 40)
    rect.attr("fill", "green")
    rect.attr("fill", "green")
    rect.attr("stroke", "red")
    rect.attr("stroke-width", "5")

}

function d3CommandsExercise() {
    var chartArea = d3.select("#chart-area")
    var svg = chartArea.append("svg");
    console.log(svg);
    svg.attr("width", 400);
    svg.attr("height", 400);
    var circle = svg.append("circle").attr("cx", 100).attr("cy", 250).attr("r", 70).attr("fill", "green");
    var rect = svg.append("rect").attr("x", 20).attr("y", 20).attr("width", 20).attr("height", 20).attr("fill", "red");
}

function bindingData() {
    var data = [25, 20, 15, 10, 5]
    var chartArea = d3.select("#chart-area")
    var svg = chartArea.append("svg");
    svg.attr("width", 400);
    svg.attr("height", 400);
    //appends circles with data
    var circles = svg.selectAll("circle").data(data);
    //adds atributes
    circles.enter()
        .append('circle')
        .attr('cx', (item, i) => {
            return (i * 50) + 25;
        })
        .attr('cy', 250)
        .attr('r', (item) => { return item })
        .attr("fill", "green");
}

function loadData() {
    // //d3 csv tsv json xml
    // d3.csv("/resources/data/ages.csv").then((data) => {
    //     console.log(data);
    // });
    // d3.tsv("/resources/data/ages.tsv").then((data) => {

    //     console.log(data);
    // });
    // d3.json("/resources/data/ages.json").then((data) => {
    //     console.log(data);
    //     for (let i = 0; i < data.length; i++) {
    //         console.log(data[i].name,data[i].age);

    //     }
    // });

    //challenge
    d3.json("/resources/data/ages.json").then((data) => {
        //* the ages are parsed to ints
        ages = data.map((item) => { return parseInt(item.age); })
        max = Math.max(...ages);
        //*adding data to chart area
        var chartArea = d3.select("#chart-area")
        var svg = chartArea.append("svg");
        svg.attr("width", 400);
        svg.attr("height", 400);
        circles = svg.selectAll("circles").data(ages);
        circles.enter()
            .append('circle')
            .attr('cx', (data, i) => {
                return (i * max * 2) + max;
            })
            .attr('cy', 250)
            .attr('r', (data) => {
                return data
            })
            .attr('fill', random_rgba());
    });
}

function scales() {

//     var y = d3.scaleLinear().domain([0, 828]).range([0, 400]);

//     var color = d3.scaleOrdinal()
//         .domain(["AZTECS", "MAYANS", "INCAS", "WIRRARIKA", "NAVAJO"])
//         .range(["RED", "BLUE", "YELLOW", "ORANGE", "INDIGO"]);

//     console.log(color("AZTECS"));
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
        rect.attr("fill", "black")
    })


}


function helpers() {
    var data = [{ name: "Jake", height: 1.63 },{ name: "Aaron", height: 1.80 },{ name: "Mary", height: 1.72 }]

    var max = d3.max(data, (d) => { d.height; }); 	// Will return 1.80

    var min = d3.min(data, (d) => { d.height; });

    var ranges = d3.extent(data, (d) => { d.height; }); 	// Will return [1.63, 1.80]

    var names = data.map((d) => { d.name; });

}

scalesExersice();
