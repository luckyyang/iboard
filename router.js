//meteor add iron:router
Router.configure({
  layoutTemplate:"layoutTemplate"
});

Router.route('/', function () {
  this.render('homepage');
  this.layout('');
});
/*Router.route('/vote', function () {
  this.render('leaderboard');
});*/
Router.route('/vote', {name: 'leaderboard'});
Router.route('/admin', {name: 'admin'});
