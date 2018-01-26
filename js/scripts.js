//back end logic
function beepBoop(userInput) {
    var numbersArray = [];
    for (var i = 1; i <= userInput; i++) {
        var iString = i.toString();

        if (i % 3 === 0) {
            numbersArray.push("I'm sorry Dave, I'm afraid I can't do that!");
        } else if (iString.includes("1")) {
            numbersArray.push("<br>boop!</br>");
        } else if (iString.includes("0")) {
            numbersArray.push("<br>beep!</br>");
        } else {
            numbersArray.push("<br>" + i + "</br>");

        }
    }
    return numbersArray
}

//ui logic
$(document).ready(function() {



    $(".beepForm").submit(function(event) {
        var userInput = $(".numberInput").val();
        console.log(userInput)

        event.preventDefault();
        var displayThisArray = beepBoop(userInput)

        $(".appendToMe").html(displayThisArray);
    });



});
