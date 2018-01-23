$(document).ready(function(){

    $(".beepForm").submit(function(event) {
    event.preventDefault();

    var userInput = $(".sentence").val();

        $(".appendToMe").html("");


      for (var i = 1; i <= userInput; i ++) {
        var iString = i.toString()

        if ( i % 3 == 0)
        {
          $(".appendToMe").append("I'm sorry Dave, I'm afraid I can't do that!")
        }else if (iString.includes("1")){
          $(".appendToMe").append("<br>boop!</br>")
        }else if (iString.includes("0")){
          $(".appendToMe").append("<br>beep!</br>")
        }else
        {
          $(".appendToMe").append("<br>"+i+"</br>")
        }
      }

   });
});
