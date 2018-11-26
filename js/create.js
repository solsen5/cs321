//Link for the api gateway
var API_URL = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod/createUser"
//Turns off async so response from lambda can be used client-side
jQuery.ajaxSetup({async:false});

function createUser() {
    console.log("Creating a user");
    var password = document.getElementById("password").value
    var username = document.getElementById("username").value
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    in_data = {
                "username": username,
                "password": password,
                "fname": fname,
                "lname": lname,
                "part": "1"
              }
    var res =  $.ajax({
            type: "POST",
            url: API_URL,
            data: JSON.stringify(in_data),
            contentType: 'application/json'
            });

//storing the username so next create page will know the username that information is connected to
    localStorage.setItem("username", username);
    console.log(res)
}