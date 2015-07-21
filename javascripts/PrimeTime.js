$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = +$("#input").val();
    var output = PrimeTime(input);


    function PrimeTime(num) {
      for (var i = 2; i < num; i++ ){
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }



    $("#output").append(output);
  })
});