$(document).ready(function(){
      $("#login").click(Login);
});

function Login() {
  var username = $("#username").val();
  var password = $("#password").val();
  $.post(
               '/login',
               {username: username, password:password},
               function(result){
                 alert(result);

               }
           );
}
