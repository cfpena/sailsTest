var soap = require('soap');
var url = 'https://ws.espol.edu.ec/saac/wsandroid.asmx?WSDL';
var username, password;
// var args = {name :  };

module.exports = {

  login: function(req,res){

    if (!req.session.authenticated){
    var url = 'https://ws.espol.edu.ec/saac/wsandroid.asmx?WSDL';
    var username = req.param('username');
    var password = req.param('password');
    soap.createClient(url,function(err,client){
      client.autenticacion({authUser: username, authContrasenia: password},function(err,result){
        req.session.authenticated = result.autenticacionResult;
        console.log(result.autenticacionResult);
        res.redirect("/dashboard");
      });
    });
  }

    },

  logout : function(req,res){
    req.session.authenticated = false;
    res.redirect("/");

  },
}
