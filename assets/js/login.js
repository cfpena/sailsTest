$(document).ready(function(){
      $("#login").click(Login);
});

function Login() {
  var username = $("#username").val();
  var password = $("#password").val();
  $.post(
               '/login',
               {username: username, password:password},
               function(){
                
               }
           ).fail(function(res){
               alert("Error: " + res.getResponseHeader("error"));
           });
}
