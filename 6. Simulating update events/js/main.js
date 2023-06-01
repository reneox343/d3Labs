/*
*    main.js
*/

function random_rgba() {
	var o = Math.round, r = Math.random, s = 255;
	return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function events() {
	d3.json("data/revenues.json").then((data) => {

		data.forEach((d) => {

			d.revenue = +d.revenue;

		});

		var bars = g.selectAll("rect")

			.data(data)

			.enter()

			.append("rect")

			.attr("x", (d) => {

				return x(d.month);

			})

			.attr("y", (d) => { return y(d.revenue); })

			.attr("width", x.bandwidth)

			.attr("height", (d) => {

				return height - y(d.revenue);

			})

			.attr("fill", "yellow");

		d3.interval(() => {

			console.log("Hello World");

		}, 1000);

	}).catch((error) => {

		console.log(error);

	});

}
events();