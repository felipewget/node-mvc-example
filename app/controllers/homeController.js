var homeController = function() {} // homeController constructor

homeController.prototype.get = function(req, res, app) {

	res.render('../views/home.ejs');
	res.end();

}

module.exports = homeController;