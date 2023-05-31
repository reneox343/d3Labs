/*
*    main.js
*/

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
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







loadData();
