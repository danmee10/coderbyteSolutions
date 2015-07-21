$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val().split(",");
    var output = ArrayAdditionI(input);


    function ArrayAdditionI(arr) {
      var largestNum = arr.sort(function(a, b){ return b - a;}).splice(0, 1)[0];
      var combs = combinations(arr);

      var nonePass = combs.every(function(nums){
        return nums.reduce(function(a, b){ return a + b; }) !== largestNum;
      });

      return !nonePass;

    }
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