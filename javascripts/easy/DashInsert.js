$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val();
    var output = DashInsert(input);



    function DashInsert(str) {
      return str.split("").map(function(n, i, a){
        if (n % 2 === 0 || (!a[i+1] || a[i+1] % 2 === 0)) {
          return n;
        } else {
          return n + "-";
        }
      }).join("");
    }




    $("#output").append(output);
  })
});