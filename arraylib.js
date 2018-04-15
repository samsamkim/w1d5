// Create a module that exports a function that takes a number as a parameter and stores it in a list.
// The list should not be accessible from outside the module.

var arr = [];




var makelist = function(num){
    var array = arr.push(num)
    return array;
  }

var sorter = function(){
  var array = arr.slice(0);
  array.sort(function (a, b) {return a - b;});
  return array;
}


// module.exports = {
//   makelist: makelist,
//   sorter: sorter
// }

makelist.makelist = makelist;
makelist.sorter = sorter;


module.exports = makelist





// module = {
//   exports: {
//     makelist: makelist
//   }


// }
