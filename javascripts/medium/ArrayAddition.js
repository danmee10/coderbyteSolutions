$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val().split(',');
    var output = ArrayAddition(input);


    function ArrayAddition(arr) {
      var greatest = arr.sort(function(a, b){ return a - b; }).pop();
      var combs = combinations(arr);
      return !combs.every(function(set){
        var sum = set.reduce(function(sum, n){
          return +sum + +n;
        });
        return sum != greatest;
      });
    };

    // Thanks jpillora! https://gist.github.com/jpillora/4435759
    function combinations(set) {
      return (function acc(xs, set) {
        var x = xs[0];
        if(typeof x === "undefined")
          return set;
        for(var i = 0, l = set.length; i < l; ++i)
          set.push(set[i].concat(x));
        return acc(xs.slice(1), set);
      })(set, [[]]).slice(1);
    };


    $("#output").append(output);
  })
});