jQuery(document).ready(function() {

  function Portfolio() {

    this.setupExperienceTimeline = function() {
      var contentText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.';
      var myMappedObject = [
                {
                    "isSelected": "true",
                    "taskTitle": "VTU",
                    "taskSubTitle": "Undergrad student, programmer",
                    "assignDate": "01/06/2009",
                    "taskShortDate": "2009",
                    "taskDetails": "System, Web, Mobile Application programming"
                },
                {
                    "isSelected": "",
                    "taskTitle": "Vtiger",
                    "taskSubTitle": "Software Engineer",
                    "assignDate": "01/06/2013",
                    "taskShortDate": "2013",
                    "taskDetails": "Web, Mobile Application development"
                },
                {
                    "isSelected": "",
                    "taskTitle": "TAMUK",
                    "taskSubTitle": "Grad student, programmer",
                    "assignDate": "01/02/2017",
                    "taskShortDate": "2017",
                    "taskDetails": "Web, Mobile Application development"
                }
            ];

      var jtLine = jQuery('#experienceTimeline').jTLine({
           callType: 'jsonObject',
           structureObj: myMappedObject,
           map: {
              "dataRoot": "/",
              "title": "taskTitle",
              "subTitle": "taskSubTitle",
              "dateValue": "assignDate",
              "pointCnt": "taskShortDate",
              "bodyCnt": "taskDetails"
          }
       });
    };

    this.registerEvents = function() {
      console.log("registerEvents");
        this.setupExperienceTimeline();
    };
  }
 console.log("doc ready");
  var site = new Portfolio();
  site.registerEvents();

});
