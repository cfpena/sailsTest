/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req,res){
		if (req.session.authenticated) res.view('dashboard');
		else res.send('is not authenticated');
	},
	


};
