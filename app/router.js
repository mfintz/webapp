import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('quickReports');
  this.route('publicFolders');
  this.route('myFolders');
  this.route('myTeamFolders');
});

export default Router;
