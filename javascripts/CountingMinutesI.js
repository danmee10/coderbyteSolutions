$(function(){
  $("button#run-code").click(function(e){
    e.preventDefault;
    $("#output").empty();
    var input = $("#input").val();
    var output = CountingMinutesI(input);



    function CountingMinutesI(str) {
      var start = buildDate(str.split('-')[0]);
      var end = buildDate(str.split('-')[1]);

      if (end < start) {
        end.setDate(2);
      }

      return (end - start) / 1000 / 60;
    }

    function buildDate(str) {
      var elements = str.split(/(\D)/);
      var param = "1 Jan 1900 " + elements[0] +
                                  elements[1] +
                                  elements[2] +
                                  ":00 " +
                                  elements[3].toUpperCase() +
                                  elements[5].toUpperCase();

      return new Date(param);
    }



    $("#output").append(output);
  })
});