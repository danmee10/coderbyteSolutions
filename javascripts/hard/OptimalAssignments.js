$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val().split(',').map(function(s){return +s;});
    var output = OptimalAssignments(input);


    function OptimalAssignments(strArr) {

    };


    $("#output").append(output);
  })
});