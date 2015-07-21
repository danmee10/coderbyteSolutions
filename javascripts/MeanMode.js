$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val().split(", ");
    var output = MeanMode(input);



    function MeanMode(arr) {
      var mean = arr.reduce(function(a, b){ return +a + +b; }) / arr.length
      var countMap = arr.reduce(function(o, c){
        if (typeof o[c] == "undefined"){
          o[c] = 1;
        } else {
          o[c] ++;
        }
        return o;
      }, {});

      var max = 0;
      var mode = null;
      Object.keys(countMap).forEach(function(k){
        if (countMap[k] > max) {
          max = countMap[k];
          mode = k;
        }
      });

      if (mean == mode) {
        var response = 1;
      } else {
        var response = 0;
      }

      return response;
    }




    $("#output").append(output);
  })
});