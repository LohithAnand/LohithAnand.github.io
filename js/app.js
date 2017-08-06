jQuery(document).ready(function() {

  function Portfolio() {

    this.setupSkillsCloud = function() {
      var entries = [
      { label: 'CRM', url: "javascript:void(0)"},
      { label: 'Web Applications', url: "javascript:void(0)"},
      { label: 'Mobile Applications', url: "javascript:void(0)"},
      { label: 'HTML', url: "javascript:void(0)"},
      { label: 'CSS', url: "javascript:void(0)"},
      { label: 'JavaScript', url: "javascript:void(0)"},
      { label: 'PHP', url: "javascript:void(0)"},
      { label: 'Smarty', url: "javascript:void(0)"},
      { label: 'Android', url: "javascript:void(0)"},
      { label: 'Java', url: "javascript:void(0)"},
      { label: 'NodeJS', url: "javascript:void(0)"},
      { label: 'MySql', url: "javascript:void(0)"},
      { label: 'Sqlite', url: "javascript:void(0)"},
      { label: 'IndexedDB', url: "javascript:void(0)"},
      { label: 'GIT', url: "javascript:void(0)"},
      { label: 'SVN', url: "javascript:void(0)"},
      { label: 'jQuery', url: "javascript:void(0)"},
      { label: 'AngularJS', url: "javascript:void(0)"},
      { label: 'Data Structures', url: "javascript:void(0)"},
      { label: 'C, C++', url: "javascript:void(0)"},
      { label: 'Chrome extensions', url: "javascript:void(0)"},
      { label: 'Firefox Add-ons', url: "javascript:void(0)"},
      { label: 'API', url: "javascript:void(0)"},
      { label: 'Unit Testing', url: "javascript:void(0)"},
      { label: 'Selenium', url: "javascript:void(0)"},
      { label: 'IDEs', url: "javascript:void(0)"},
      ];
      jQuery('#skillsCloud').svg3DTagCloud({
        entries: entries,
        bgColor: '#fff',
        fontColor: '#000',
        radius: '90%',
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

    this.updateSelectedTabOnClick = function() {
      jQuery(window).on('scroll', function() {
        var fromTop = $(this).scrollTop() + 54;
        var scrollItems = jQuery('.contentBlocks');
        var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
        });
        cur = jQuery(cur[cur.length-1]);
        var id = cur && cur.length ? cur.attr('id') : "landing";
        jQuery('.nav-list li a').removeClass('selected').filter("[href='#"+id+"']").addClass('selected');
      }).trigger('scroll');
    };

    this.registerEvents = function() {
      console.log("registerEvents");
        this.setupSkillsCloud();
        this.smoothScroll();
        this.updateSelectedTabOnClick();
    };
  }
 console.log("doc ready");
  var site = new Portfolio();
  site.registerEvents();

});
