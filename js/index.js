

//Link for the api gateway
var API_URL = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod/"
//Turns off async so response from lambda can be used client-side
jQuery.ajaxSetup({async:false});

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
        console.log(res)
    //lambda(server-side) validates
    if(res["responseJSON"] === "validation succeeded")
    {
        location.href="profile.html";
    }
    else
    {
       // alert( "Username or password was incorrect" );
		document.getElementById("login_failed").innerHTML = "Login Failed. Username or password is incorrect.";
//        location.href="fail.html";
//        instead needs to be red error message on the html side
    }
}

