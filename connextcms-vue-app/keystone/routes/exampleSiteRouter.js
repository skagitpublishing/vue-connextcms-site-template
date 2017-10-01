var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api') 
};

module.exports = function(app) {

  // Keystone Views
  app.get('/test', routes.views.test);
  app.get('/appdashboard', routes.views.appdashboard);
  
  // Plugin API Route
  app.get('/api/exampleapi/list', keystone.middleware.api, routes.api.exampleapi.list);
  app.all('/api/exampleapi/create', keystone.middleware.api, routes.api.exampleapi.create);
  app.all('/api/exampleapi/:id/update', keystone.middleware.api, routes.api.exampleapi.update);
	app.get('/api/exampleapi/:id/remove', keystone.middleware.api, routes.api.exampleapi.remove);
  
  // NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
  app.get('/loggedinuser', middleware.requireUser, routes.views.loggedinuser);
}