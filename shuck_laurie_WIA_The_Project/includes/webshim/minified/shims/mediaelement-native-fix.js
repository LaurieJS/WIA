webshims.register("mediaelement-native-fix",function(a,b,c,d){if(!Modernizr.videoBuffered){var e=function(a){var c=b.data(a,"mediaelementBuffered");return c||(c={buffered:{start:function(a){return a>=c.buffered.length?(b.error("buffered index size error"),void 0):0},end:function(a){return a>=c.buffered.length?(b.error("buffered index size error"),void 0):c.loaded},length:0},loaded:0},b.data(a,"mediaelementBuffered",c)),c},f=function(c){if(c=c.originalEvent,c&&"lengthComputable"in c){var d=b.data(c.target,"mediaelement");if((!d||"html5"==d.isActive)&&c.lengthComputable&&"loaded"in c){var f=c.target.duration,g=e(c.target);g.loaded=f?c.loaded/c.total*f:0,g.loaded&&(g.buffered.length=1),"load"==c.type&&a(c.target).triggerHandler("progress")}}},g=function(a){var b=e(a.target);b.buffered.length=0,b.loaded=0};["audio","video"].forEach(function(a){var c=b.defineNodeNameProperty(a,"buffered",{prop:{get:function(){var a=b.data(this,"mediaelement");return a&&"flash"==a.isActive&&c.prop._supget?(c.prop._supget.apply(this),void 0):e(this).buffered}}})}),function(){var a=d.createElement("video");if(!("preload"in a)&&"autobuffer"in a){var c={metadata:1,none:1};b.onNodeNamesPropertyModify(["audio","video"],["preload"],{set:function(a,d,e){c[a]||"removeAttr"==e?this.autobuffer=!1:"html5"==!(b.data(this,"mediaelement")||{}).isActive&&(this.autobuffer=!0)},initAttr:!0})}}(),b.addReady(function(b,c){a("video, audio",b).add(c.filter("video, audio")).on("load progress",f).on("emptied",g)})}});