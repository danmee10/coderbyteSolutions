$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val().split(',').map(function(s){return +s;});
    var output = ArithGeoII(input);


    function ArithGeoII(arr) {
      if (isArith(arr)) {
        return "Arithmetic";
      } else if (isGeo(arr)) {
        return "Geometric";
      } else {
        return -1;
      }
    };

    function isArith(arr) {
      var diffs = arr.map(function(n, i, a){
        return a[i + 1] - n;
      })
      diffs.pop();
      return homogenousArr(diffs);
    }

    function isGeo(arr) {
      var diffs = arr.map(function(n, i, a){
        return a[i + 1] / n;
      })
      diffs.pop();
      return homogenousArr(diffs);
    }

    function homogenousArr(arr) {
      return arr.every(function(n, i, a){
        if (n === a[0]){
          return true;
        } else {
          return false;
        }
      });
    }


    $("#output").append(output);
  })
});