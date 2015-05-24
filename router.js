//meteor add iron:router
Router.route('/', function () {
  this.render('homepage');
});
/*Router.route('/vote', function () {
  this.render('leaderboard');
});*/
Router.route('/vote', {name: 'leaderboard'});
