

//Link for the api gateway
var API_URL = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod/"
//Turns off async so response from lambda can be used client-side
jQuery.ajaxSetup({async:false});


//currently not being used
$(document).ready(function() {
    $("#submit").on("click", function() {
        console.log("dfsl");
        in_data = {
                    "user": "U",
                    "password": "p"
                  }
        in_date = JSON.stringify(in_data)
        $.ajax({
                type: JSON,
                url: API_URL,
                data: in_data,
                contentType: 'connection/json'
                });
    })
});

//validates the username and password
function validate() {
        //data that will be sent the lambda through the api gateway
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
        console.log(res["responseJSON"]['body'])
    //lambda(server-side) validates
    if(res["responseJSON"]['body'] === "validation succeeded")
    {
        alert( "validation succeeded" );
        location.href="profile.html";
    }
    else
    {
        alert( "Username or password was incorrect" );
//        location.href="fail.html";
//        instead needs to be red error message on the html side
    }
}

