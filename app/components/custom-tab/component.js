import Ember from 'ember';

export default Ember.Component.extend({
  showInputs: true,
  iframeSrc: false,
  
  inputErrors0: false,
  inputErrors1: false,
  inputErrors2: false,
  
  name0: '',
  name1: '',
  name2: '',
  
  url0: '',
  url1: '',
  url2: '',

  loadReports: function() {
    var reports = JSON.parse(localStorage.getItem(this.get('name')));
    var component = this;
    var urls = [];

    if (reports !== null) {
      reports.forEach(function(report, index) {
        if (report !== null) {
          component.set('name' + index.toString(), report.name);
          component.set('url' + index.toString(), report.url);
          component.set('iframeSrc', report.url);
          component.set('showInputs', false);
          if ( (report.url.length > 0) && (report.name.length > 0) ) {
            urls.push(report);
          }
        }
      });
    }
    component.set('iframeSrc', ((urls.length > 0) ? urls[urls.length - 1].url : ''));
    component.set('urlSelect', urls);
  }.on('init'),
  
  actions: {
    
    changeIframe: function() {
      var selectedValue = this.get('urlSelect')[this.$('select')[0].selectedIndex].url;
      this.set('iframeSrc', selectedValue);
    },
    
    toggleMenu: function() {
      this.toggleProperty('showInputs');
    },
    
    saveReports: function() {
      var urlregex = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
      var reports = [];
      var urlSelect = [];
      var name, url = '';
      var errors = false;
      for (var i=0; i<3; i++) {
        this.set('inputErrors' + i.toString(), false);
        name = this.get('name' + i.toString());
        url = this.get('url' + i.toString());
        
        if ( ((!url.length) && (name.length > 0)) || ((url.length > 0) && (!name.length)) || ((url.length > 0) && (!urlregex.test(url))) ) {
          reports[i] = null;
          this.set('inputErrors' + i.toString(), true);
          errors = true;
        } else {
          reports[i] = {
            'name': name,
            'url': url
          };
          if ((url.length > 0) && (name.length > 0)) {
            urlSelect.push(reports[i]);
          }
        }
      }
      localStorage.setItem(this.get('name'), JSON.stringify(reports));
      this.set('iframeSrc', ((urlSelect.length > 0) ? urlSelect[0].url : false));
      if (!errors) {
        this.toggleProperty('showInputs');
      }
      this.set('urlSelect', urlSelect);
    }
  }
});
