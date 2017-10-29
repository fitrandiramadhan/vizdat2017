/**
 * ReviewController
 *
 * @description :: Server-side logic for managing reviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req,res) {
		res.view();
	},

	create: function(req,res,next) {
		Review.create( req.params.all(), function reviewCreated (err,review) {
			if(err) return next(err);

			res.json(review);
		});
	}
};
