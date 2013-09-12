/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */

  login: function(req, res){
  	res.view();
  },
  create: function(req, res, next){
  	User.create(req.params.all(), function userCreated(err, user){
		if(err){
			console.log(err);
			req.session.flash = {
				err: err
			}
			return res.redirect("/user/login");
		}

		// Room.create({'users': [user]}, function roomCreated(err, room){
		// 	if(err) return next(err);
		// 	res.json(room);
		// 	res.session.flash = {};
		// });
		res.json(user);
  	});
  }
  

};
