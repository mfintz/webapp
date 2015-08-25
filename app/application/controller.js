import Ember from 'ember';

export default Ember.Controller.extend({
  dropdowns: [
    {
      'header': 'Choose QS report',
      'image': 'blah.jpg',
      'options': [
        {'name': 'Corporate', link: 'http://netcraft.com'},
        {'name': 'Simple', link: 'http://netcraft.com'},
        {'name': 'Business', link: 'http://netcraft.com'}
      ]
    },
    {
      'header': 'Choose Dashboard',
      'image': 'blah.jpg',
      'options': [
        {'name': 'Account Dashboard', link: 'http://netcraft.com'},
        {'name': 'Daily Huddle Dashboard', link: 'http://netcraft.com'},
        {'name': 'Tier 2 Dashboard', link: 'http://netcraft.com'},
        {'name': 'ADM Dashboard', link: 'http://netcraft.com'}
      ]
    },
    {
      'header': 'Choose Guide',
      'image': 'blah.jpg',
      'options': [
        {'name': 'Real Time', link: 'http://netcraft.com'},
        {'name': 'Past Data', link: 'http://netcraft.com'},
        {'name': 'Corporate Data', link: 'http://netcraft.com'}
      ]
    }
  ]
});
