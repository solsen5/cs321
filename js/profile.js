//Link for the api gateway
var API_URL = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod/retrieveuserinformation"
//Turns off async so response from lambda can be used client-side
jQuery.ajaxSetup({async:false});


function codeAddress() {
    var username = localStorage.getItem("username");
    in_data = {
                "username": username
              }
    var res =  $.ajax({
            type: "POST",
            url: API_URL,
            data: JSON.stringify(in_data),
            contentType: 'application/json'
            });

    document.getElementById("gender").innerText = "A";
    document.getElementById("age").innerText = "A";
    document.getElementById("height").innerText = "A";
    document.getElementById("weight").innerText = "A";
    document.getElementById("followers").innerText = "A";
    document.getElementById("following").innerText = "A";

 }
 window.onload = codeAddress;


