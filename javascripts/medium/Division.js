$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = +$("#input").val();
    var input2 = +$("#input2").val();
    var output = Division(input, input2);


    function Division(num1, num2) {
      var ceil = Math.min(num1, num2);

      var gcf = 1;
      for (var i = 1; i <= ceil; i++){
        if (num1 % i === 0 && num2 % i === 0) {
          gcf = i;
        }
      }

      return gcf;
    }



    $("#output").append(output);
  })
});