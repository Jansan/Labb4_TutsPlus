// JavaScript ANIMATION source code 



window.onload = function () {

    //Text animation start here
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

    frameLooper(); //end animation code block

    //Error Handling for title printing
    var title = "Build a Full HTML Site Layout";

    try {
        var p = document.getElementById("heading_p");
        p.innerHTML = title;

        

    }
    catch (e) {
        alert("Error: " + e.description);
        
    }
    finally {
        alert("First Video's title successfully printed!");
        var p = document.getElementById("heading_p").innerHTML = a;

    } // end error handling code

  
} 



                           

                        





