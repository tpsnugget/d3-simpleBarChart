var data = [30, 86, 168, 281, 303, 365];

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("height", 40 + "px")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });