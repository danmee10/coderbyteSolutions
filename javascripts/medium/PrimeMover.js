$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = +$("#input").val();
    var output = PrimeMover(input);


    function PrimeMover(num) {
      var primes = [];
      var current = 2;
      while (primes.length < num) {
        if (PrimeTime(current)){
          primes.push(current);
        }
        current++;
      }
      return primes.pop();
    }

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