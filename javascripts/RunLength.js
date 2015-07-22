$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val();
    var output = RunLength(input);


    function RunLength(str) {
      console.log("str --> ", str)
      var next = 1;
      var comp = str.split('').map(function(c, i, a){
        if (next > i + 1) { return; }
        var ahead = a[i + 1];
        var count = 0;
        while ((i + 1) <= a.length && ahead === c) {
          ahead = a[i + 1];
          count++;
          i++;
          next++;
          console.log("while --> ", i);
          console.log("c --> ", c);
          console.log("ahead --> ", ahead);
        }
        if (count === 0){
          count = 1;
        }
        return count + c;
      });
      return comp.join('');
    }



    $("#output").append(output);
  })
});