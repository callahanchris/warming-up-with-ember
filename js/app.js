var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route( 'about' );
  this.resource( 'espressos', function() {
    this.resource( 'espresso', { path: '/:espresso_id' } );
  });
});

App.IndexController = Ember.ArrayController.extend({
  name: 'Chris',
  espresso: './img/espresso.jpg',
  date: function() {
    return ( new Date() ).toDateString();
  }.property(),
  espressosCount: Ember.computed.alias( 'length' )
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find( 'espresso' );
  }
});

App.EspressosController = Ember.ArrayController.extend({
  sortProperties: ['name']
});

App.EspressosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find( 'espresso' );
  }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
});

App.Espresso = DS.Model.extend({
  name: DS.attr(),
  ingredients: DS.attr(),
  price: DS.attr(),
  reviews: DS.hasMany( 'review', { async: true } )
});

App.Espresso.FIXTURES = [
  {
    id: 1,
    name: 'Espresso',
    ingredients: [
      {
        type: 'espresso',
        quantity: 1
      }
    ],
    price: 2.50,
    reviews: [1, 2]
  },
  {
    id: 2,
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
    price: 3.25,
    reviews: [3]
  },
];

App.Review = DS.Model.extend({
  text: DS.attr(),
  rating: DS.attr(),
  espresso: DS.belongsTo( 'espresso' )
});

App.Review.FIXTURES = [
  {
    id: 1,
    espresso: 1,
    text: 'A true classic.',
    rating: 4
  },
  {
    id: 2,
    espresso: 1,
    text: 'My favorite, always a sure bet!',
    rating: 5
  },
  {
    id: 3,
    espresso: 2,
    text: 'Sometimes a little milk makes for a rich experience.',
    rating: 4
  }
];
