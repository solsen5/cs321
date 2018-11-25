var API_URL = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod/"

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

function validate()
{
    jQuery.ajaxSetup({async:false});
    console.log("dfsl");
        in_data = {
                    "username": document.getElementById("usernameInput").value,
                    "password": document.getElementById("passwordInput").value
                  }
        var res =  $.ajax({
                type: "POST",
                url: API_URL,
                data: JSON.stringify(in_data),
                contentType: 'application/json'
//                async: false
                });
        console.log(res["responseJSON"]['body'])

//    if(   document.getElementById("usernameInput").value == "a"
//       && document.getElementById("passwordInput").value == "a" )
//    {
//        alert( "validation succeeded" );
//        location.href="profile.html";
//    }
//    else
//    {
//        alert( "Username or password was incorrect" );
////        location.href="fail.html";
//    }
}

