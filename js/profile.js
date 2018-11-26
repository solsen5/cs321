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

    document.getElementById("fullname").innerText = userInfo['fname'] + " " + userInfo['lname'];
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

 function addToTable()
 {
     var name = document.getElementById("name").value;
     var description = document.getElementById("description").value;
     var start_time = document.getElementById("start_time").value;
     var end_time = document.getElementById("end_time").value;

     if (name.length == 0 || description.length == 0 || start_time.length == 0 || end_time.length == 0)
     {
         document.getElementById("error_msg").style.visibility = "visible";
     }
     else
     {
         document.getElementById("error_msg").style.visibility = "hidden";

         document.getElementById("name").value = "";
         document.getElementById("description").value = "";
         document.getElementById("start_time").value = "";
         document.getElementById("end_time").value = "";
         $('#add').modal('hide');

         var table = document.getElementsByClassName("tab-pane fade in active")[0].firstElementChild;
         var row = table.insertRow(-1);

         var newStartTime = start_time.slice(0, 2).valueOf();
         var newEndTime = end_time.slice(0, 2).valueOf();
         
         if (start_time.slice(0, 2).valueOf() > 12) {
             newStartTime -= 12;
             start_time = newStartTime + start_time.slice(2) + " pm";
         }
         else {
             start_time = start_time + " am";
         }
         if (end_time.slice(0, 2).valueOf() > 12) {
             newEndTime -= 12;
             end_time = newEndTime + end_time.slice(2) + " pm";
         }
         else {
             end_time = end_time + " am";
         }
         if (start_time.slice(0, 1).valueOf() == 0)
             start_time = start_time.slice(1);
         if (end_time.slice(0, 1).valueOf() == 0)
             end_time = end_time.slice(1);

         row.insertCell(0).innerText = name;
         row.insertCell(1).innerText = start_time;
         row.insertCell(2).innerText = end_time;
         row.insertCell(3).innerText = description;

         activityAdd();
     }
 }
 //window.onload = activityCodeAddress;

//window.onload = activityCodeAddress;

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
