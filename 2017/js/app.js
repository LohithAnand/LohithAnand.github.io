jQuery(document).ready(function() {

  function Portfolio() {

    this.setupSkillsCloud = function() {
      var entries = [
      { label: 'CRM'},
      { label: 'Web Applications'},
      { label: 'Mobile Applications'},
      { label: 'HTML'},
      { label: 'CSS'},
      { label: 'JavaScript'},
      { label: 'PHP'},
      { label: 'Smarty'},
      { label: 'Android'},
      { label: 'Java'},
      { label: 'NodeJS'},
      { label: 'MySql'},
      { label: 'IndexedDB'},
      { label: 'GIT'},
      { label: 'SVN'},
      { label: 'jQuery'},
      { label: 'AngularJS'},
      { label: 'Data Structures'},
      { label: 'C, C++'},
      { label: 'Chrome extensions'},
      { label: 'Firefox Add-ons'},
      { label: 'Apache Cordova'}
      ];
      jQuery('#skillsCloud').svg3DTagCloud({
        entries: entries,
        bgColor: '#fff',
        fontColor: '#000',
        radius: '70%',
        speed: 1
      });
    };

    this.smoothScroll = function() {
      var $root = $('html, body');
      $('a.smoothScroll').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
          scrollTop: $(href).offset().top
        }, 500, function () {
          window.location.hash = href;
        });
        return false;
      });
    };

    this.registerEvents = function() {
      console.log("registerEvents");
        this.setupSkillsCloud();
        this.smoothScroll();
    };
  }
 console.log("doc ready");
  var site = new Portfolio();
  site.registerEvents();

});
