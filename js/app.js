var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route( 'about' );
  this.resource( 'espressos', function() {
    this.resource( 'espresso', { path: '/:name' } );
  });
});

App.EspressosRoute = Ember.Route.extend({
  model: function() {
    return App.ESPRESSOS;
  }
});

App.EspressoRoute = Ember.Route.extend({
  model: function(params) {
    return App.ESPRESSOS.findBy('name', params.name);
  }
});

App.IndexController = Ember.Controller.extend({
  name: 'Chris',
  espresso: './img/espresso.jpg',
  date: function() {
    return ( new Date() ).toDateString();
  }.property()
});

App.EspressosController = Ember.Controller.extend({

});

App.ESPRESSOS = [
  {
    name: 'Espresso',
    ingredients: [
      {
        type: 'espresso',
        quantity: 1
      }
    ],
    price: 2.50
  },
  {
    name: 'Macchiato',
    ingredients: [
      {
        type: 'espresso',
        quantity: 1
      },
      {
        type: 'milk',
        quantity: 1
      }
    ],
    price: 3.25
  },
];