// d3.select('h1').style('color', 'red')
//  .attr('class', 'heading') // This adds a class to the h1 of name heading
//  .text('This changes the h1 tag text')

//  d3.select('body').append('p').text('First paragraph')
//  d3.select('body').append('p').text('Second paragraph')
//  d3.select('body').append('p').text('Third paragraph')

//  d3.selectAll('p').style('color', 'blue')

var dataset = [1, 2, 3, 4, 5]

d3.select('body')
  .selectAll('p')
  .data(dataset)
  .enter()
  .append('p')
  .text( function(d) { return d } )
  // .text( + '.' + 'D3 is awesome!')