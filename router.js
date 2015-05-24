Router.route('/', function () {
  this.render('homepage');
});
Router.route('/vote', function () {
  this.render('leaderboard');
});
