$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val();
    var input2 = $("#input2").val();
    var output = StringScramble(input, input2);


    function StringScramble(str1, str2) {
      return str2.split('').every(function(c){
        if (str1.search(c) !== -1){
          return true;
        } else {
          return false;
        }
      });
    }



    $("#output").append(output);
  })
});