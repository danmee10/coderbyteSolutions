$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val().split(", ");
    var output = SecondGreatLow(input);



    function SecondGreatLow(arr) {

      var sorted = arr.sort(function(a, b){ return a - b; });

      var sG = sorted[arr.length - 2]
      var sL = sorted[1]

      return sL + " " + sG;
    }




    $("#output").append(output);
  })
});