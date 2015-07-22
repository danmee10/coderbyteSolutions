$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val();
    var output = SwapCase(input);


    function SwapCase(str) {
      return str.replace(/[a-z]/ig, function(c){
        if (c.toUpperCase() === c) {
          return c.toLowerCase();
        } else {
          return c.toUpperCase();
        }
      });
    }



    $("#output").append(output);
  })
});