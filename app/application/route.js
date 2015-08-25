import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    Ember.$.get('notification.txt', null, function(response) {
      controller.set('notification', (!response.length) ? false : response);
    });
  }
});
