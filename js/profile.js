//Link for the api gateway
var API_URL = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod/retrieveuserinformation"
var API_URL2 = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod/getactivityinformation"
var API_URL3 = "https://rvyl38zfdf.execute-api.us-east-1.amazonaws.com/prod/addactivityinformation"
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
    console.log(res["responseJSON"]);
    var userInfo = res["responseJSON"];

    document.getElementById("gender").innerText = "Gender: " + userInfo['gender'];
    document.getElementById("age").innerText = "Age: " +userInfo['age'];
    document.getElementById("height").innerText = "Height: " +userInfo['height'];
    document.getElementById("weight").innerText = "Weight: " +userInfo['weight'];
    document.getElementById("followers").innerText = "Followers: " +"-2";
    document.getElementById("following").innerText = "Following: " +"100";

 }
 window.onload = codeAddress;


 function activityCodeAddress(){
 
     var username = localStorage.getItem("username");
     in_data = {
         "username": username
     }
     var res =  $.ajax({
         type: "POST",
         url: API_URL2,
         data: JSON.stringify(in_data),
         contentType: 'application/json'
     });
     console.log(res["responseJSON"]);
 
 }
window.onload = activityCodeAddress;

 function activityAdd() {

     in_data = {
         "user_name": localStorage.getItem("username"),
         "activity_title": document.getElementById("name").value,
         "activity_starttime": document.getElementById("start_time").value,
         "activity_endtime": document.getElementById("end_time").value,
         "activity_ISO": document.getElementById("date").value,
         "activity_desc": document.getElementById("description").value
     }
     var res = $.ajax({
         type: "POST",
         url: API_URL3,
         data: JSON.stringify(in_data),
         contentType: 'application/json'
     });
     console.log(res["responseJSON"]);
 }
