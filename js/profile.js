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
//window.onload = activityCodeAddress;

 function addToTable()
 {
     var name = document.getElementById("name").value;
     var description = document.getElementById("description").value;
     var start_time = document.getElementById("start_time").value;
     var end_time = document.getElementById("end_time").value;
     var date = document.getElementById("date").value;

     if (name.length == 0 || description.length == 0 || start_time.length == 0 || end_time.length == 0 || date.length == 0)
     {
         document.getElementById("error_msg").style.visibility = "visible";
     }
     else
     {
         activityAdd();

         document.getElementById("error_msg").style.visibility = "hidden";

         document.getElementById("name").value = "";
         document.getElementById("description").value = "";
         document.getElementById("date").value = "";
         document.getElementById("start_time").value = "";
         document.getElementById("end_time").value = "";
         $('#add').modal('hide');

         var table = document.getElementsByClassName("tab-pane fade in active")[0].firstElementChild;
         var row = table.insertRow(-1);

         start_time = convertTime(start_time);
         end_time = convertTime(end_time);

         row.insertCell(0).innerText = name;
         row.insertCell(1).innerText = start_time;
         row.insertCell(2).innerText = end_time;
         row.insertCell(3).innerText = description;
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

 function convertTime(time)
 {
     var newTime = time.slice(0, 2).valueOf();

     if (time.slice(0, 2).valueOf() > 12) {
         newTime -= 12;
         time = newTime + time.slice(2) + " pm";
     }
     else {
         time = time + " am";
     }
     if (time.slice(0, 1).valueOf() == 0)
         time = time.slice(1);

     return time;
 }
