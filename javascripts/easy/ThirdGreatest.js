$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val().split(',');
    var output = ThirdGreatest(input);


    function ThirdGreatest(strArr) {
      return strArr.sort(function(a, b){
        return b.length - a.length;
      })[2];
    };


    $("#output").append(output);
  })
});