//Link for the api gateway
var API_URL = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod/createuser"
//Turns off async so response from lambda can be used client-side
jQuery.ajaxSetup({async:false});

function updateUserInformation() {
    console.log("inside update");
    var username = localStorage.getItem("username");
    var weight = document.getElementById("weight").value
    var gender = document.getElementById("gender").value
    var feet = document.getElementById("feet").value
    var inches = document.getElementById("inches").value
    var age = document.getElementById("age").value
    in_data = {
                "username": username,
                "age" : age,
                "gender": gender,
                "weight": weight,
                "height": feet + "'" + inches + '"',
                "part": "2"
              }
    var res =  $.ajax({
            type: "POST",
            url: API_URL,
            data: JSON.stringify(in_data),
            contentType: 'application/json'
            });

}