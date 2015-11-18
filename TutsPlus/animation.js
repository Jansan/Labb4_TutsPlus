// JavaScript ANIMATION source code 

//Text animation start here

window.onload = function () {


    var myString = "HTML & CSS TUTORIALS.";
    var myArray = myString.split("");

    function frameLooper() {

        if (myArray.length > 0) {
            document.getElementById("myTypingText").innerHTML += myArray.shift();
        } else {
            clearTimeout(loopTimer);
        }
        var loopTimer = setTimeout(function () {
            frameLooper();
        }, 70);
    };

    frameLooper();
  
}  //Text animation end here





