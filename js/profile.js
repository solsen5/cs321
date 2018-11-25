function codeAddress() {
    var username = localStorage.getItem("username");

    document.getElementById("gender").innerText = "A";
    document.getElementById("age").innerText = "A";
    document.getElementById("height").innerText = "A";
    document.getElementById("weight").innerText = "A";
    document.getElementById("followers").innerText = "A";
    document.getElementById("following").innerText = "A";

 }
 window.onload = codeAddress;


