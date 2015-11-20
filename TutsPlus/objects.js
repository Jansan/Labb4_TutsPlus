// JavaScript source code
window.onload = function () {

    var course1 = { courseName: "Photoshop CC", startDate: "22 Nov 15" };
    var course2 = { courseName: "WordPress", startDate: "12 Dec 15" };

    document.getElementById("details1").innerHTML =
    course1.courseName + ", " + "Starts: " + course1.startDate;
    document.getElementById("details2").innerHTML =
    course2.courseName + ", " + "Starts: " + course2.startDate;

}



//creating a element with javascript


    var div = document.createElement('div');

    var container = document.getElementById('wrapper').appendChild(div);
    div.clientWidth = "500px";
    div.align = "center";
    div.textContent = 'Advertisments';
    div.innerHTML = '<img src="banner.jpg"/>';
    div.setAttribute('class', 'banner');
    






