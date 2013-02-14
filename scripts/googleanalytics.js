// JavaScript Document
//Google Analytics
//Set tracking to base report
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXX-X']);
//Set Custom Variable to Platform-CONTENTdm
_gaq.push(['_setCustomVar',
      1,                   // This custom var is set to slot #1.  Required parameter.
      'platform',           // The top-level name for our report.  Required parameter.
      'contentdm',  // Sets the value of "Platform".  Required parameter.
      3                    // Sets the scope to page-level.  Optional parameter.
   ]);

_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

try{
var pageTracker = _gat._getTracker("UA-XXXXXX-X");
pageTracker._setAllowLinker(true);
pageTracker._trackPageview();
} catch(err) {}
