$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val();
    var output = NumberAddition(input);


    function NumberAddition(str) {
      return str.split(/\D/ig).reduce(function(sum, curr, i, a){
        if (typeof +curr == 'number') {
          return +sum + +curr;
        }
      });
    }



    $("#output").append(output);
  })
});