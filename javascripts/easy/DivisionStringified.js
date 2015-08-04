$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = +$("#input").val();
    var input2 = +$("#input2").val();
    var output = DivisionStringified(input, input2);



    function DivisionStringified(num1,num2) {
      var formatted = (Math.round(num1 / num2) + "").split('').reverse().map(function(n, index, arr){
        if ((index + 1) % 3 === 0 && arr.length > 3) {
          return ',' + n;
        } else {
          return n;
        }
      }).reverse();

      return formatted;
    }




    $("#output").append(output);
  })
});