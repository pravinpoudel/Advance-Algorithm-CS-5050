// define margin, width and height of the SVG
const margin = { top: 20, right: 20, bottom: 40, left: 50 };
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const title = "Runtime Function of Simple Recursive Nim Algorithm";

let x = d3.scaleLinear().range([0, width]);

// linearly scaled Y axis
var y = d3.scaleLinear().range([height, 0]);

// for logarithmically scaled Y -axis
var y = d3.scaleLog().base(10).domain([1, 1000]).range([height, 0]);

// create a horizontal and vertical line of graph
let lines = d3
  .line()
  .x(function (d) {
    return x(d.number);
  })
  .y(function (d) {
    return y(d.executionTime);
  });

d3.select("body").append("h3").attr("class", "graph-title").text(title);

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", 600)
  .attr("height", 400)
  .append("g")
  .attr("transform", `translate( ${margin.left} , ${margin.top})`);

// add the label in x axis and y axis
svg
  .append("text")
  .attr("class", "xaxis-label")
  .attr(
    "transform",
    "translate(" + 0.4 * width + "," + (height + margin.top + 10) + ")"
  )
  .text("number of items in the heap");

svg
  .append("text")
  .attr("class", "yaxis-label")
  .attr("transform", "rotate(-90)")
  .attr("x", 0 - 0.5 * height)
  .attr("y", 0 - margin.left - 5)
  .attr("dy", "14px")
  .text("execution time (sec)");

d3.csv("files/timeRecord.csv", (err, value) => {
  if (err) {
    console.error(err);
    throw err;
  }
  value.forEach((data) => {
    // perform data manipulation and format
    data.number = Number(data.number);
    data.executionTime = Number(data.executionTime);
  });

  x.domain([
    0,
    d3.max(value, function (d) {
      return d.number;
    }),
  ]);

  y.domain(
    d3.extent(value, function (d) {
      console.log(typeof d.executionTime);
      return d.executionTime;
    })
  );

  svg.append("path").data([value]).attr("class", "line").attr("d", lines);

  svg.append("g").attr("transform", "translate(0, 340)").call(d3.axisBottom(x));

  svg.append("g").call(d3.axisLeft(y));
});
