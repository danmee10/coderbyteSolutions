$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val();
    var output = PalindromeTwo(input);


    function PalindromeTwo(str) {
      var letters = str.replace(/\W+/ig, '').toLowerCase();
      return letters.split('').reverse().join('') === letters;
    }



    $("#output").append(output);
  })
});