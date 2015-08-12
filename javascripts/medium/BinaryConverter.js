$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val();
    var output = BinaryConverter(input);


    function BinaryConverter(str) {
      // or this...parseInt(str, 2);
      var len = str.length;
      return str.split('').reverse().reduce(function(p, d, i, a){
        var base = getBase(i);
        p += (base * d);
        return p;
      }, 0);
    };

    function getBase(index) {
      if (index === 0) { return 1; }
      var prev = 1;
      var base;
      for (var i = 1; i <= index; i++) {
        base = prev*2;
        prev = prev*2;
      }
      return base;
    }


    $("#output").append(output);
  })
});