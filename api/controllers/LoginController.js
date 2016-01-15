var soap = require('soap');
var url = 'https://ws.espol.edu.ec/saac/wsandroid.asmx?WSDL';
var username, password;
// var args = {name :  };

module.exports = {

  login: function(req,res){


    var url = 'https://ws.espol.edu.ec/saac/wsandroid.asmx?WSDL';
    var username = req.param('username');
    var password = req.param('password');
    soap.createClient(url,function(err,client){
      client.autenticacion({authUser: username, authContrasenia: password},function(err,result){

        if (result.autenticacionResult){
        res.cookie('login', 'true');
        res.send('autentication sucesfull');
        console.log('pass');
      }
      else {
        console.log('autentication fail');
      }
        // return res.json({resultado: result});
      });
    });
},
}
