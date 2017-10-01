var keystone = require('keystone');

/**
 * ExampleAPIModel Model
 * ==================
 */

var ExampleAPIModel = new keystone.List('ExampleAPIModel');

ExampleAPIModel.add({
	entry: { type: String},
});

ExampleAPIModel.register();
