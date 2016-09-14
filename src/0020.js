/**
 * Men før vi starter... 
 */

// - Clousures
var a = function(x) {return x + 1}
var a = (x) => {return x + 1} 
var a = (x) => x + 1 
var a = x => x + 1 

var b = (x,y) => x + y

var c = (x,y) => ({first: x, second: y})

// - map, reduce og filter
[1,2,3].reduce((acc, e) => acc + e, 0)
//6
[1,2,3].map(x => x + 1)
//[ 2, 3, 4 ]
[1,2,3].reduce((acc, e) => acc + e, 0)
//6
[1,2,3].filter(x => x > 1)
//[ 2, 3 ]
