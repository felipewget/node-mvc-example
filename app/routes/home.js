module.exports = function(app){

    app.get('/', function(req, res){
    	var homeController = require("./../controllers/homeController.js");
		homeController = new homeController();
		homeController.get(req, res, app);
    });

}