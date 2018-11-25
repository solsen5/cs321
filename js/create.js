//Link for the api gateway
var API_URL = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod//createUser"
//Turns off async so response from lambda can be used client-side
jQuery.ajaxSetup({async:false});

function createUser() {
    in_data = {
                "username": document.getElementById("usernameInput").value,
                "password": document.getElementById("passwordInput").value
              }
    var res =  $.ajax({
            type: "POST",
            url: API_URL,
            data: JSON.stringify(in_data),
            contentType: 'application/json'
            });
}