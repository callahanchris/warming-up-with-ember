var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route( 'about' );
});

App.IndexController = Ember.Controller.extend({
  name: 'Chris',
  espresso: './img/espresso.jpg',
  date: function() {
    return (new Date()).toDateString();
  }.property()
});