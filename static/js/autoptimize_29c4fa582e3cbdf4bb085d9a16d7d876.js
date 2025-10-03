/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+o[a]<+n[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.1";var t=Object.create(null);s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")&&!e("5.0.0")||n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var o={};function u(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n,o),r},set:function(e){u(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&u(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function c(e,t,r,n,o){if(!o)throw new Error("No warning message provided");return a(e,t,r,n,o),0}function i(e,t,r,n){return a(e,t,r,n),0}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("quirks","jQuery is not compatible with Quirks Mode");var d,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;for(d in i(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(u("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,i(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,d)&&(s.find[d]=y[d]);c(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),c(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),c(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),c(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&c(s,"trim",function(e){return null==e?"":(e+"").replace(v,"$1")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(c(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),c(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(c(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),c(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),c(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),c(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,i(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(c(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),c(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),c(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&u("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function x(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}i(s.fn,"removeAttr",function(e){var r=this,n=!1;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&r.each(function(){if(!1!==s(this).prop(t))return!(n=!0)}),n&&(u("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),i(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(u("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var Q,A,R=!1,C=/^[a-z]/,N=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return R=!0,e=r.apply(this,arguments),R=!1,e})}),i(s,"swap",function(e,t,r,n){var o,a,i={};for(a in R||u("swap","jQuery.swap() is undocumented and deprecated"),t)i[a]=e.style[a],e.style[a]=t[a];for(a in o=r.apply(e,n||[]),t)e.style[a]=i[a];return o},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")?(A={animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},"undefined"!=typeof Proxy?s.cssNumber=new Proxy(A,{get:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}}):s.cssNumber=A):A=s.cssNumber,Q=s.fn.css,i(s.fn,"css",function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=x(e),n=r,C.test(n)&&N.test(n[0].toUpperCase()+n.slice(1))||A[r]||u("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))},"css-number");var S,P,k,H,E=s.data;i(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&E.call(this,e),o={},t)a!==x(a)?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return E.call(this,e,o),t}return t&&"string"==typeof t&&t!==x(t)&&(n=s.hasData(e)&&E.call(this,e))&&t in n?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):E.apply(this,arguments)},"data-camelCase"),s.fx&&(k=s.Tween.prototype.run,H=function(e){return e},i(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(u("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=H),k.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,P="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u("fx-interval",P),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){u("fx-interval",P),S=e}}));var M=s.fn.load,q=s.event.add,O=s.event.fix;s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),i(s.event,"fix",function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("event-old-patch","jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=O.call(this,e),n&&n.filter?n.filter(t,e):t},"event-old-patch"),i(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("load-after-event","jQuery(window).on('load'...) called after load event occurred"),q.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){i(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?M.apply(this,e):(u("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){c(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("ready-event","'ready' event is deprecated")}},c(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),c(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),c(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),c(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),c(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated");function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},i(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(F,"<$1></$2>"))!==t&&T(t)!==T(r)&&u("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(F,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags");var D,W,_,I=s.fn.offset;return i(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?I.apply(this,arguments):(u("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(D=s.param,i(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)},"param-ajax-traditional")),c(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(W=s.Deferred,_=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],i(s,"Deferred",function(e){var a=W(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(_,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return c(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),c(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=W.exceptionHook),s});
(function($){"use strict";$(function(){var container=$("#to_top_scrollup").css({'opacity':0});var data=to_top_options;var mouse_over=false;var hideEventID=0;var fnHide=function(){clearTimeout(hideEventID);if(container.is(":visible")){container.stop().fadeTo(200,0,function(){container.hide();mouse_over=false;});}};var fnHideEvent=function(){if(!mouse_over&&data.enable_autohide==1){clearTimeout(hideEventID);hideEventID=setTimeout(function(){fnHide();},data.autohide_time*1000);}};var scrollHandled=false;var fnScroll=function(){if(scrollHandled)
return;scrollHandled=true;if($(window).scrollTop()>data.scroll_offset){container.stop().css("opacity",mouse_over?1:parseFloat(data.icon_opacity/100)).show();fnHideEvent();}else{fnHide();}
scrollHandled=false;};if("undefined"!=typeof to_top_options.enable_hide_small_device&&"1"==to_top_options.enable_hide_small_device){if($(window).width()>to_top_options.small_device_max_width){$(window).on("scroll",fnScroll);$(document).on("scroll",fnScroll);}}else{$(window).on("scroll",fnScroll);$(document).on("scroll",fnScroll);}
container.on("hover",function(){clearTimeout(hideEventID);mouse_over=true;$(this).css("opacity",1);},function(){$(this).css("opacity",parseFloat(data.icon_opacity/100));mouse_over=false;fnHideEvent();}).on("click",function(){$("html, body").animate({scrollTop:0},400);return false;});});})(jQuery);
!function(a,r){var e;a&&r&&(r.FooBox={},FooBox.$=a,FooBox.version="2.4.7",FooBox.defaults={affiliate:{enabled:!(FooBox.instances=[]),prefix:"Powered by ",url:"http://fooplugins.com/plugins/foobox/"},alwaysInit:!0,closeOnOverlayClick:!0,containerCssClass:"fbx-instance",countMessage:"item %index of %total",error:"Could not load the item",excludes:".fbx-link, .nofoobox",externalSelector:"a[data-foobox],input[data-foobox]",fitToScreen:!1,hideScrollbars:!0,loadDelay:0,loaderTimeout:600,modalClass:"",preload:!1,rel:null,resizeSpeed:300,selector:"a",showButtons:!0,showCount:!0,style:"fbx-rounded",theme:"fbx-light",transitionInSpeed:200,transitionOutSpeed:200,initCallback:null,loop:!0},FooBox.isjQuery=function(e){return e instanceof jQuery||e&&e.jquery},FooBox.isFn=function(e){return e===r.alert||"[object Function]"===Object.prototype.toString.call(e)},FooBox.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},FooBox.inArray=function(e,o){return FooBox.isArray(o)?o.indexOf(e):-1},FooBox.trim=function(e){return"[object String]"===Object.prototype.toString.call(e)?e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):""},FooBox.ready=function(e){function o(){try{e.call(r,FooBox.$)}catch(e){console.error(e)}}(Function("/*@cc_on return true@*/")()?"complete"===document.readyState:"loading"!==document.readyState)?o():document.addEventListener("DOMContentLoaded",o,!1)},FooBox.browser={isIE:!(FooBox.format=function(e,o,t){for(var i,n=e,s=0;s<arguments.length-1;s++)i=new RegExp("\\{"+s+"\\}","gm"),n=n.replace(i,arguments[s+1]);return n}),isChrome:!1,isSafari:!1,isLtSafari10:!1,version:0,css:"",iOS:!1,Mac:!1,isMobile:(e=navigator.userAgent||navigator.vendor||r.opera,/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))),check:function(){var e=navigator.appVersion.toLowerCase(),o=navigator.userAgent.toLowerCase(),t=navigator.platform,i=(FooBox.browser.iOS=/(iPad|iPhone|iPod)/g.test(t),FooBox.browser.iOS12OrBelow=!1,FooBox.browser.iOS&&(FooBox.browser.css+=" fbx-ios",FooBox.browser.iOS12OrBelow=(i=e.match(/OS (\d+)_(\d+)_?(\d+)?/i),[parseInt(i[1],10),parseInt(i[2],10),parseInt(i[3]||0,10)][0]<=12),FooBox.browser.iOS12OrBelow)&&(FooBox.browser.css+=" fbx-ios-12-or-below"),FooBox.browser.Mac=/(Mac)/g.test(t),FooBox.browser.Mac&&(FooBox.browser.css+=" fbx-mac"),FooBox.browser.isChrome=-1<e.indexOf("chrome")||-1<e.indexOf("crios"),FooBox.browser.isChrome&&(FooBox.browser.css+=" fbx-chrome"),FooBox.browser.isSafari=-1<e.indexOf("safari")&&!FooBox.browser.isChrome,FooBox.browser.isSafari&&(FooBox.browser.css+=" fbx-safari",FooBox.browser.isLtSafari10=/constructor/i.test(r.HTMLElement)),FooBox.browser.isFirefox=-1<o.indexOf("firefox"),FooBox.browser.isFirefox&&(FooBox.browser.css+=" fbx-firefox"),o.indexOf("msie ")),t=o.indexOf("trident/"),e=o.indexOf("edge/");FooBox.browser.isIE=-1<i||-1<t||-1<e,FooBox.browser.isIE&&(-1<i?FooBox.browser.version=parseInt(o.substring(i+5,o.indexOf(".",i)),10):-1<t?(t=o.indexOf("rv:"),FooBox.browser.version=parseInt(o.substring(t+3,o.indexOf(".",t)),10)):-1<e&&(FooBox.browser.version=parseInt(o.substring(e+5,o.indexOf(".",e)),10)),FooBox.browser.css="fbx-ie fbx-ie"+FooBox.browser.version)},supportsTransitions:function(){var e=(document.body||document.documentElement).style;if("string"==typeof e[t="transition"])return!0;for(var o=["Moz","Webkit","Khtml","O","ms"],t=t.charAt(0).toUpperCase()+t.substr(1),i=0;i<o.length;i++)if("string"==typeof e[o[i]+t])return!0;return!1},transitionEnd:function(){var e,o=document.createElement("fakeelement"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in t)if(t.hasOwnProperty(e)&&void 0!==o.style[e])return t[e];return null}},FooBox.browser.check(),FooBox.qualifiedURL=function(e){var o=document.createElement("a");return o.href=e,o.href},jQuery.Event.prototype.fb={instance:null,modal:null,options:null,handled:!1},FooBox.raise=function(e,o,t){t=t||{};var i=a.Event(o);return i.fb={},i.fb.instance=e,i.fb.modal=e.modal.element,i.fb.options=e.options,a.extend(!0,i.fb,t),e.element.one(o,function(e){e.stopPropagation()}).trigger(i),i},FooBox.options={isMultipart:function(e,o){return"string"==typeof e&&0<e.length&&-1!==e.indexOf(o)},hasProperties:function(e){if("object"==typeof e)for(var o in e)if(e.hasOwnProperty(o))return!0;return!1},get:function(e,o){var t,i;return FooBox.options.isMultipart(o,".")?(t=o.substring(0,o.indexOf(".")),i=o.substring(o.indexOf(".")+1),e[t]=e[t]||{},FooBox.options.get(e[t],i)):e[o]},set:function(e,o,t){var i,n;FooBox.options.isMultipart(o,".")?(i=o.substring(0,o.indexOf(".")),n=o.substring(o.indexOf(".")+1),e[i]=e[i]||{},FooBox.options.set(e[i],n,t)):e[o]=t},merge:function(e,o,t){var i,n=Array.prototype.slice.call(arguments);for(e=n.shift(),o=n.shift(),FooBox.options._merge(e,o),i=0;i<n.length;i++)t=n[i],FooBox.options._merge(e,t);return e},_merge:function(e,o){for(var t in o)o.hasOwnProperty(t)&&(FooBox.options.hasProperties(o[t])&&!FooBox.isArray(o[t])?(e[t]=e[t]||{},FooBox.options._merge(e[t],o[t])):FooBox.isArray(o[t])?(e[t]=[],a.extend(!0,e[t],o[t])):e[t]=o[t])}},FooBox.objects={registered:{},ensure:function(e){return FooBox.objects.registered[e]=FooBox.objects.registered[e]||[]},register:function(e,o,t){return FooBox.objects.ensure(e).push(o),"object"==typeof t&&a.extend(!0,FooBox.defaults,t),!0},load:function(e,o){for(var t,i=[],n=FooBox.objects.ensure(e),s=0;s<n.length;s++)try{t=n[s],i.push(new t(o))}catch(e){console.error(e)}o.objects=o.objects||{},o.objects[e]=i},call:function(e,o,t,i,n){for(var s,a=Array.prototype.slice.call(arguments),r=(e=a.shift(),o=a.shift(),t=a.shift(),o.objects[e]||[]),l=0;l<r.length;l++)try{s=r[l],FooBox.isFn(s[t])&&s[t].apply(s,a)}catch(e){console.error(e)}},get:function(e,o,t){var i,n=o.objects[e];if(n&&FooBox.isFn(t))for(i=0;i<n.length;i++)if(t(n[i]))return n[i];return null}},FooBox.addons={_ns:"addons",validate:function(e){return!!FooBox.isFn(e)||(console.error(FooBox.format('Expected type "function", received type "{0}".',typeof e)),!1)},register:function(e,o){return FooBox.addons.validate(e)?FooBox.objects.register(FooBox.addons._ns,e,o):(console.error("Failed to register the addon."),!1)},load:function(e){FooBox.objects.load(FooBox.addons._ns,e)},call:function(e,o,t,i){var n=Array.prototype.slice.call(arguments);n.unshift(FooBox.addons._ns),FooBox.objects.call.apply(this,n)}},FooBox.handlers={_ns:"handlers",validate:function(e){var o;return FooBox.isFn(e)?(o=new e,FooBox.isFn(o.handles)?FooBox.isFn(o.defaults)?FooBox.isFn(o.parse)?FooBox.isFn(o.load)?FooBox.isFn(o.getSize)?FooBox.isFn(o.hasChanged)?!!FooBox.isFn(o.preload)||(console.error('The required "preload" method is not implemented.'),!1):(console.error('The required "hasChanged" method is not implemented.'),!1):(console.error('The required "getSize" method is not implemented.'),!1):(console.error('The required "load" method is not implemented.'),!1):(console.error('The required "parse" method is not implemented.'),!1):(console.error('The required "defaults" method is not implemented.'),!1):(console.error('The required "handles" method is not implemented.'),!1)):(console.error(FooBox.format('Expected type "function", received type "{0}".',typeof e)),!1)},register:function(e,o){return FooBox.handlers.validate(e)?FooBox.objects.register(FooBox.handlers._ns,e,o):(console.error("Failed to register the handler."),!1)},load:function(e){FooBox.objects.load(FooBox.handlers._ns,e)},call:function(e,o,t,i){var n=Array.prototype.slice.call(arguments);n.unshift(FooBox.handlers._ns),FooBox.objects.call.apply(this,n)},get:function(e,o){return FooBox.objects.get(FooBox.handlers._ns,e,function(e){return e.type==o})}},FooBox.Item=function(e,o,t){return this.type=e,this.element=FooBox.isjQuery(o)?o:a(o),this.handler=t,this.width=null,this.height=null,this.url=null,this.overflow=!1,this.preloaded=!1,this.proportion=!1,this.error=!1,this},FooBox.Size=function(e,o){return this.width="number"==typeof e?e:parseInt(e,0),this.height="number"==typeof o?o:parseInt(o,0),this.equalTo=function(e){return this.width==e.width&&this.height==e.height},this},FooBox.Size.check=function(e){return"number"==typeof e?e:isNaN(parseInt(e))?null:parseInt(e)},FooBox.Timer=function(){this.id=null,this.busy=!1;var i=this;return this.start=function(e,o,t){t=t||e,i.stop(),i.id=setTimeout(function(){e.call(t),i.id=null,i.busy=!1},o),i.busy=!0},this.stop=function(){null!==i.id&&!1!==i.busy&&(clearTimeout(i.id),i.id=null,i.busy=!1)},this},a.fn.foobox=function(i){return i=i||{},this.each(function(){var e=a(this),o=e.data("fbx_instance"),t=e.data("__FooGallery__"),e=a.extend(!0,{},i,e.data("foobox"));o instanceof FooBox.Instance?!0===o.options.alwaysInit||t?((t=o.options).alwaysInit=!0,o.destroy(),(o=new FooBox.Instance(o.id)).init(this,a.extend(!0,t,e))):o.reinit(e):(o=a(this).data("fbx_p_instance"))instanceof FooBox.Instance||(o=new FooBox.Instance).init(this,e)})},FooBox.open=function(e){var o,t,i=null;return null!=(i="object"==typeof e?(t=document.createElement("a"),a(t).foobox(e),a(t).data("fbx_instance")):(o=(o="number"==typeof e?e:(o=parseInt(e||0),isNaN(o)?0:o))>FooBox.instances.length-1?FooBox.instances.length-1:o<0?0:o,FooBox.instances[o]))&&i.modal instanceof FooBox.Modal?(i.modal.show(!0),i):null},FooBox.close=function(){for(var e=[],o=null,t=0;t<FooBox.instances.length;t++)null!=(o=FooBox.instances[t])&&o.modal instanceof FooBox.Modal&&FooBox.isjQuery(o.modal.element)&&o.modal.element.hasClass("fbx-show")&&e.push(o);for(t=0;t<e.length;t++)(o=e[t]).modal.close()},FooBox.resize=function(e,o){if(e||o)for(var t,i,n,s=0;s<FooBox.instances.length;s++)null!=(t=FooBox.instances[s])&&t.modal instanceof FooBox.Modal&&FooBox.isjQuery(t.modal.element)&&t.modal.element.hasClass("fbx-show")&&(i=t.items.current(),n=new FooBox.Size(e||i.width||0,o||i.height||0),i.width=n.width,i.height=n.height,t.modal.resize(n,t.modal.element.find(".fbx-item-current")));else a(r).trigger("resize.foobox")},FooBox.lateBind=function(e,o){var t=a.extend(!0,{},FooBox.defaults,o||r.FOOBOX&&FOOBOX.o||{}),i=a(e);i.on("click.foobox",t.selector,function(e){e.preventDefault();e=i.data("fbx_instance");(e=e||i.foobox(t).data("fbx_instance"))instanceof FooBox.Instance&&"number"==typeof this.index&&(e.items.indexes.set(this.index),e.modal.show(!0))})})}(jQuery,window),function(e){let t=new globalThis.Set(["accesskey","autocapitalize","autofocus","class","contenteditable","data-","dir","draggable","enterkeyhint","exportparts","hidden","id","inert","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","part","popover","role","slot","spellcheck","style","tabindex","title","translate"]),i=new globalThis.Map([["html",["xmlns"]],["base",["href","target"]],["head",[]],["link",["as","crossorigin","disabled","fetchpriority","href","hreflang","imagesizes","imagesrcset","integrity","media","referrerpolicy","rel","sizes","type"]],["meta",["charset","content","http-equiv","name"]],["style",["media"]],["title",[]],["body",["onafterprint","onbeforeprint","onbeforeunload","onblur","onerror","onfocus","onhashchange","onlanguagechange","onload","onmessage","onoffline","ononline","onpopstate","onresize","onstorage","onunload"]],["address",[]],["article",[]],["aside",[]],["footer",[]],["header",[]],["h1",[]],["h2",[]],["h3",[]],["h4",[]],["h5",[]],["h6",[]],["hgroup",[]],["main",[]],["nav",[]],["section",[]],["search",[]],["blockquote",["cite"]],["dd",[]],["div",[]],["dl",[]],["dt",[]],["figcaption",[]],["figure",[]],["hr",[]],["li",["value"]],["menu",[]],["ol",["reversed","start","type"]],["p",[]],["pre",[]],["ul",[]],["a",["download","href","hreflang","ping","referrerpolicy","rel","target","type"]],["abbr",[]],["b",[]],["bdi",[]],["bdo",[]],["br",[]],["cite",[]],["code",[]],["data",["value"]],["dfn",[]],["em",[]],["i",[]],["kbd",[]],["mark",[]],["q",["cite"]],["rp",[]],["rt",[]],["ruby",[]],["s",[]],["samp",[]],["small",[]],["span",[]],["strong",[]],["sub",[]],["sup",[]],["time",["datetime"]],["u",[]],["var",[]],["wbr",[]],["area",["alt","coords","download","href","ping","referrerpolicy","rel","shape","target"]],["audio",["autoplay","controls","controlslist","crossorigin","disableremoteplayback","loop","muted","preload","src"]],["img",["alt","crossorigin","decoding","elementtiming","fetchpriority","height","ismap","loading","referrerpolicy","sizes","src","srcset","usemap","width"]],["map",["name"]],["track",["default","kind","label","src","srclang"]],["video",["autoplay","controls","controlslist","crossorigin","disablepictureinpicture","disableremoteplayback","height","loop","muted","playsinline","poster","preload","src","width"]],["embed",["height","src","type","width"]],["iframe",["allow","allowfullscreen","height","loading","name","referrerpolicy","sandbox","src","srcdoc","width"]],["object",["data","form","height","name","type","width"]],["picture",[]],["portal",["referrerpolicy","src"]],["source",["height","media","sizes","src","srcset","type","width"]],["svg",["height","preserveaspectratio","viewbox","width","x","y"]],["canvas",["height","width"]],["noscript",[]],["script",["async","crossorigin","defer","fetchpriority","integrity","nomodule","referrerpolicy","src","type"]],["del",["cite","datetime"]],["ins",["cite","datetime"]],["caption",[]],["col",["span"]],["colgroup",["span"]],["table",[]],["tbody",[]],["td",["colspan","headers","rowspan"]],["tfoot",[]],["th",["abbr","colspan","headers","rowspan","scope"]],["thead",[]],["tr",[]],["button",["disabled","form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","popovertarget","popovertargetaction","type","value"]],["datalist",[]],["fieldset",["disabled","form","name"]],["form",["accept-charset","autocomplete","name","rel"]],["input",[]],["label",["for"]],["legend",[]],["meter",["form","high","low","max","min","optimum","value"]],["optgroup",["disabled","label"]],["option",["disabled","label","selected","value"]],["output",["for","form","name"]],["progress",["max","value"]],["select",["autocomplete","disabled","form","multiple","name","required","size"]],["textarea",["autocomplete","cols","dirname","disabled","form","maxlength","minlength","name","placeholder","readonly","required","rows","wrap"]],["details",["name","open"]],["dialog",["open"]],["summary",[]],["slot",["name"]],["template",["shadowrootclonable","shadowrootdelegatesfocus","shadowrootmode"]]]),n=new globalThis.Set(["code","codebase","src","href","formaction","ping","cite","action","background","poster","profile","manifest","data"]),s=(["script","embed","object"].forEach(e=>i.delete(e)),e=>(e instanceof globalThis.Node?e.nodeName:"string"==typeof e?e:"").toLowerCase()),a=e=>{if(e instanceof globalThis.Attr){var o=s(e.ownerElement);if(i.has(o))return i.get(o).includes(e.name)}return!1},o=/^(?!javascript|vbscript|livescript|mocha)(?:[a-z0-9+.-]+:[^<>]*$|[^&:\/?#]*(?:[\/?#]|$))/i,r=e=>o.test(e),l=/@import|expression|behaviou?r|binding|(?:javascript|vbscript|livescript|mocha):|[\x00-\x08\x0E-\x1F\x7F-\uFFFF]|\/\*.*?\*\/|<--.*?-->/i,d=e=>!l.test(e.replace(/\s+/g," ")),c=/^[a-z](?:[\x2D.0-9_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,h=e=>c.test(s(e)),f=/^[a-z](?:[.0-9_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*-(?:[\x2D.0-9_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,p=e=>f.test(s(e)),m=e=>p(e?.ownerElement)&&h(e),u=e=>{var o=s(e);return!o.startsWith("on")&&(!(!o.startsWith("aria-")&&!o.startsWith("data-"))||(t.has(o)||a(e)?n.has(o)?r(e.value):"style"!==o||d(e.value):m(e)))},x=e=>{if(e instanceof globalThis.Element){var o=s(e);if(i.has(o)||p(e)){for(var t of e.attributes)if(!u(t))return!1;return"style"===o?d(e.textContent):!0}}return!1},b=(e,o=!1)=>{if(e instanceof globalThis.Element){var t;if(x(e))return t=e.cloneNode(!1),o&&e.hasChildNodes()&&t.append(...v(e.childNodes,o)),t;throw new TypeError("UNSAFE_NODE")}return e instanceof globalThis.Text?e.cloneNode():null},v=(e,o=!1)=>{var t,i=[];for(t of e){var n=b(t,o);n instanceof globalThis.Node&&i.push(n)}return i},g;e.safeParse=e=>{if("string"==typeof e)try{var o=(g instanceof globalThis.DOMParser?g:g=new globalThis.DOMParser).parseFromString(e,"text/html");if(o.body.hasChildNodes())return v(o.body.childNodes,!0).map(e=>1===e.nodeType?e.outerHTML:3===e.nodeType?e.nodeValue:"").join("")}catch(e){"UNSAFE_NODE"!==e.message&&console.error("FooBox.safeParse: Unexpected Error",e)}return""}}(window.FooBox),function(n,e){e.Icons=function(){return this.className="fbx-icon",this.registered={default:{close:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path class="[CURRENT_ICON_CLASS]-default" d="M13.405 11.404q0 0.357-0.25 0.607l-1.214 1.214q-0.25 0.25-0.607 0.25t-0.607-0.25l-2.625-2.625-2.625 2.625q-0.25 0.25-0.607 0.25t-0.607-0.25l-1.214-1.214q-0.25-0.25-0.25-0.607t0.25-0.607l2.625-2.625-2.625-2.625q-0.25-0.25-0.25-0.607t0.25-0.607l1.214-1.214q0.25-0.25 0.607-0.25t0.607 0.25l2.625 2.625 2.625-2.625q0.25-0.25 0.607-0.25t0.607 0.25l1.214 1.214q0.25 0.25 0.25 0.607t-0.25 0.607l-2.625 2.625 2.625 2.625q0.25 0.25 0.25 0.607z"></path><path class="[CURRENT_ICON_CLASS]-flat" d="M12.667 3q0.286 0 0.477 0.19t0.19 0.477q0 0.281-0.193 0.474l-4.198 4.193 4.198 4.193q0.193 0.193 0.193 0.474 0 0.286-0.19 0.477t-0.477 0.19q-0.281 0-0.474-0.193l-4.193-4.198-4.193 4.198q-0.193 0.193-0.474 0.193-0.286 0-0.477-0.19t-0.19-0.477q0-0.281 0.193-0.474l4.198-4.193-4.198-4.193q-0.193-0.193-0.193-0.474 0-0.286 0.19-0.477t0.477-0.19q0.281 0 0.474 0.193l4.193 4.198 4.193-4.198q0.193-0.193 0.474-0.193z"></path></svg>',prev:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path class="[ICON_CLASS]-arrows-default" d="M14.57 8.643q0 0.473-0.29 0.808t-0.754 0.335h-6.286l2.616 2.625q0.339 0.321 0.339 0.804t-0.339 0.804l-0.67 0.679q-0.33 0.33-0.804 0.33-0.464 0-0.813-0.33l-5.813-5.821q-0.33-0.33-0.33-0.804 0-0.464 0.33-0.813l5.813-5.804q0.339-0.339 0.813-0.339 0.464 0 0.804 0.339l0.67 0.661q0.339 0.339 0.339 0.813t-0.339 0.813l-2.616 2.616h6.286q0.464 0 0.754 0.335t0.29 0.808z"></path><path class="[ICON_CLASS]-arrows-flat" d="M6.667 3q0.276 0 0.471 0.195t0.195 0.471q0 0.281-0.198 0.474l-3.526 3.526h10.391q0.276 0 0.471 0.195t0.195 0.471-0.195 0.471-0.471 0.195h-10.391l3.526 3.526q0.198 0.193 0.198 0.474 0 0.276-0.195 0.471t-0.471 0.195q-0.281 0-0.474-0.193l-4.667-4.667q-0.193-0.203-0.193-0.474t0.193-0.474l4.667-4.667q0.198-0.193 0.474-0.193z"></path><path class="[ICON_CLASS]-arrows-1" d="M10 16l3-3-5-5 5-5-3-3-8 8z"></path><path class="[ICON_CLASS]-arrows-2" d="M0 8l16 7-3-7 3-7z"></path><path class="[ICON_CLASS]-arrows-3" d="M12 0l-8 8 8 8-4-8z"></path><path class="[ICON_CLASS]-arrows-4" d="M10 4l-4 4 4 4z"></path><path class="[ICON_CLASS]-arrows-5" d="M0 8l8 8v-5h8l0-6h-8v-5l-8 8zM2.375 7.039l0.25-0.25v2.422l-0.25-0.25v-1.922zM2.125 8.711l-0.25-0.25v-0.922l0.25-0.25v1.422zM2.875 6.539l0.25-0.25v3.422l-0.25-0.25v-2.922zM3.375 6.039l0.25-0.25v4.422l-0.25-0.25v-3.922zM3.875 5.539l0.25-0.25v5.422l-0.25-0.25v-4.922zM4.375 5.039l0.25-0.25v6.422l-0.25-0.25v-5.922zM4.875 4.539l0.25-0.25v7.422l-0.25-0.25v-6.922zM5.375 4.039l0.25-0.25v8.422l-0.25-0.25v-7.922zM5.875 3.539l0.25-0.25v9.422l-0.25-0.25v-8.922zM6.375 3.039l0.25-0.25v10.422l-0.25-0.25v-9.922zM1.625 7.789v0.422l-0.211-0.211 0.211-0.211zM7.375 10v-4h0.25v4h-0.25zM7.875 10v-4h0.25v4h-0.25zM8.375 10v-4h0.25v4h-0.25zM8.875 10v-4h0.25v4h-0.25zM9.375 10v-4h0.25v4h-0.25zM9.875 10v-4h0.25v4h-0.25zM10.375 10v-4h0.25v4h-0.25zM10.875 10v-4h0.25v4h-0.25zM11.375 10v-4h0.25v4h-0.25zM11.875 10v-4h0.25v4h-0.25zM12.375 10v-4h0.25v4h-0.25zM12.875 10v-4h0.25v4h-0.25zM13.375 10v-4h0.25v4h-0.25zM13.875 10v-4h0.25v4h-0.25zM14.375 10v-4h0.25v4h-0.25zM15 10h-0.125v-4h0.125l-0 4zM7 6h0.125v4h-0.125v3.586l-0.125-0.125v-10.922l0.125-0.125v3.586z"></path><path class="[ICON_CLASS]-arrows-6" d="M0 8l8 8v-5h8l0-6h-8v-5z"></path><path class="[ICON_CLASS]-arrows-7" d="M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM3.293 8.707l4 4c0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293c0.391-0.391 0.391-1.024 0-1.414l-2.293-2.293h5.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-5.586l2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4 4c-0.391 0.391-0.391 1.024-0 1.414z"></path><path class="[ICON_CLASS]-arrows-8" d="M0 16h16v-16h-16l0 16zM14 2v12h-12l-0-12h12zM7 11.5l-3.5-3.5 3.5-3.5v2.5h5v2h-5v2.5z"></path><path class="[ICON_CLASS]-arrows-9" d="M15 5h1v6h-1zM13 5h1v6h-1zM11 5h1v6h-1zM0 8l7-7v4h3v6h-3v4z"></path><path class="[ICON_CLASS]-arrows-10" d="M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM7 11.5v-2.5h5v-2h-5v-2.5l-3.5 3.5 3.5 3.5z"></path><path class="[ICON_CLASS]-arrows-11" d="M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM8 14.5c3.59 0 6.5-2.91 6.5-6.5s-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5zM3.293 7.293l4-4c0.391-0.391 1.024-0.391 1.414 0s0.391 1.024 0 1.414l-2.293 2.293h5.586c0.552 0 1 0.448 1 1s-0.448 1-1 1h-5.586l2.293 2.293c0.391 0.391 0.391 1.024 0 1.414-0.195 0.195-0.451 0.293-0.707 0.293s-0.512-0.098-0.707-0.293l-4-4c-0.39-0.391-0.39-1.024 0-1.414z"></path></svg>',next:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path class="[ICON_CLASS]-arrows-default" d="M14.57 8.071q0 0.482-0.33 0.813l-5.813 5.813q-0.348 0.33-0.813 0.33-0.455 0-0.804-0.33l-0.67-0.67q-0.339-0.339-0.339-0.813t0.339-0.813l2.616-2.616h-6.286q-0.464 0-0.754-0.335t-0.29-0.808v-1.143q0-0.473 0.29-0.808t0.754-0.335h6.286l-2.616-2.625q-0.339-0.321-0.339-0.804t0.339-0.804l0.67-0.67q0.339-0.339 0.804-0.339 0.473 0 0.813 0.339l5.813 5.813q0.33 0.313 0.33 0.804z"></path><path class="[ICON_CLASS]-arrows-flat" d="M9.333 3q0.281 0 0.474 0.193l4.667 4.667q0.193 0.193 0.193 0.474t-0.193 0.474l-4.667 4.667q-0.193 0.193-0.474 0.193-0.286 0-0.477-0.19t-0.19-0.477q0-0.281 0.193-0.474l3.531-3.526h-10.391q-0.276 0-0.471-0.195t-0.195-0.471 0.195-0.471 0.471-0.195h10.391l-3.531-3.526q-0.193-0.193-0.193-0.474 0-0.286 0.19-0.477t0.477-0.19z"></path><path class="[ICON_CLASS]-arrows-1" d="M6 0l-3 3 5 5-5 5 3 3 8-8z"></path><path class="[ICON_CLASS]-arrows-2" d="M16 8l-16-7 3 7-3 7z"></path><path class="[ICON_CLASS]-arrows-3" d="M4 16l8-8-8-8 4 8z"></path><path class="[ICON_CLASS]-arrows-4" d="M6 12l4-4-4-4z"></path><path class="[ICON_CLASS]-arrows-5" d="M16 8l-8-8v5h-8l-0 6h8v5l8-8zM13.625 8.961l-0.25 0.25v-2.422l0.25 0.25v1.922zM13.875 7.289l0.25 0.25v0.922l-0.25 0.25v-1.422zM13.125 9.461l-0.25 0.25v-3.422l0.25 0.25v2.922zM12.625 9.961l-0.25 0.25v-4.422l0.25 0.25v3.922zM12.125 10.461l-0.25 0.25v-5.422l0.25 0.25v4.922zM11.625 10.961l-0.25 0.25v-6.422l0.25 0.25v5.922zM11.125 11.461l-0.25 0.25v-7.422l0.25 0.25v6.922zM10.625 11.961l-0.25 0.25v-8.422l0.25 0.25v7.922zM10.125 12.461l-0.25 0.25v-9.422l0.25 0.25v8.922zM9.625 12.961l-0.25 0.25v-10.422l0.25 0.25v9.922zM14.375 8.211v-0.422l0.211 0.211-0.211 0.211zM8.625 6v4h-0.25v-4h0.25zM8.125 6v4h-0.25v-4h0.25zM7.625 6v4h-0.25v-4h0.25zM7.125 6v4h-0.25v-4h0.25zM6.625 6v4h-0.25v-4h0.25zM6.125 6v4h-0.25v-4h0.25zM5.625 6v4h-0.25v-4h0.25zM5.125 6v4h-0.25v-4h0.25zM4.625 6v4h-0.25v-4h0.25zM4.125 6v4h-0.25v-4h0.25zM3.625 6v4h-0.25v-4h0.25zM3.125 6v4h-0.25v-4h0.25zM2.625 6v4h-0.25v-4h0.25zM2.125 6v4h-0.25v-4h0.25zM1.625 6v4h-0.25v-4h0.25zM1 6h0.125v4h-0.125l0-4zM9 10h-0.125v-4h0.125v-3.586l0.125 0.125v10.922l-0.125 0.125v-3.586z"></path><path class="[ICON_CLASS]-arrows-6" d="M16 8l-8-8v5h-8l-0 6h8v5z"></path><path class="[ICON_CLASS]-arrows-7" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM12.707 8.707l-4 4c-0.195 0.195-0.451 0.293-0.707 0.293s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.024 0-1.414l2.293-2.293h-5.586c-0.552 0-1-0.448-1-1s0.448-1 1-1h5.586l-2.293-2.293c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l4 4c0.391 0.391 0.391 1.024 0 1.414z"></path><path class="[ICON_CLASS]-arrows-8" d="M16 16h-16v-16h16l-0 16zM2 2v12h12l0-12h-12zM9 11.5l3.5-3.5-3.5-3.5v2.5h-5v2h5v2.5z"></path><path class="[ICON_CLASS]-arrows-9" d="M0 5h1v6h-1zM2 5h1v6h-1zM4 5h1v6h-1zM16 8l-7-7v4h-3v6h3v4z"></path><path class="[ICON_CLASS]-arrows-10" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM9 11.5v-2.5h-5v-2h5v-2.5l3.5 3.5-3.5 3.5z"></path><path class="[ICON_CLASS]-arrows-11" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zM12.707 7.293l-4-4c-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293h-5.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.586l-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l4-4c0.39-0.391 0.39-1.024 0-1.414z"></path></svg>',error:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 1.5c-1.736 0-3.369 0.676-4.596 1.904s-1.904 2.86-1.904 4.596c0 1.736 0.676 3.369 1.904 4.596s2.86 1.904 4.596 1.904c1.736 0 3.369-0.676 4.596-1.904s1.904-2.86 1.904-4.596c0-1.736-0.676-3.369-1.904-4.596s-2.86-1.904-4.596-1.904zM8 0v0c4.418 0 8 3.582 8 8s-3.582 8-8 8c-4.418 0-8-3.582-8-8s3.582-8 8-8zM7 11h2v2h-2zM7 3h2v6h-2z"></path></svg>',spinner:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path class="[CURRENT_ICON_CLASS]-default" d="M3 8c0-0.19 0.011-0.378 0.032-0.563l-2.89-0.939c-0.092 0.487-0.141 0.989-0.141 1.502 0 2.3 0.971 4.374 2.526 5.833l1.786-2.458c-0.814-0.889-1.312-2.074-1.312-3.375zM13 8c0 1.301-0.497 2.486-1.312 3.375l1.786 2.458c1.555-1.459 2.526-3.533 2.526-5.833 0-0.513-0.049-1.015-0.141-1.502l-2.89 0.939c0.021 0.185 0.032 0.373 0.032 0.563zM9 3.1c1.436 0.292 2.649 1.199 3.351 2.435l2.89-0.939c-1.144-2.428-3.473-4.188-6.241-4.534v3.038zM3.649 5.535c0.702-1.236 1.914-2.143 3.351-2.435v-3.038c-2.769 0.345-5.097 2.105-6.241 4.534l2.89 0.939zM10.071 12.552c-0.631 0.288-1.332 0.448-2.071 0.448s-1.44-0.16-2.071-0.448l-1.786 2.458c1.144 0.631 2.458 0.99 3.857 0.99s2.713-0.359 3.857-0.99l-1.786-2.458z"></path><path class="[CURRENT_ICON_CLASS]-flat" d="M10.833 10.495q0.271 0 0.469 0.198l1.885 1.885q0.198 0.198 0.198 0.474 0 0.271-0.198 0.469t-0.469 0.198q-0.276 0-0.474-0.198l-1.885-1.885q-0.193-0.193-0.193-0.474 0-0.276 0.195-0.471t0.471-0.195zM5.172 10.495q0.276 0 0.471 0.195t0.195 0.471-0.198 0.474l-1.885 1.885q-0.198 0.198-0.469 0.198-0.276 0-0.471-0.195t-0.195-0.471q0-0.281 0.193-0.474l1.885-1.885q0.198-0.198 0.474-0.198zM1.333 7.667h2.667q0.276 0 0.471 0.195t0.195 0.471-0.195 0.471-0.471 0.195h-2.667q-0.276 0-0.471-0.195t-0.195-0.471 0.195-0.471 0.471-0.195zM8 11.667q0.276 0 0.471 0.195t0.195 0.471v2.667q0 0.276-0.195 0.471t-0.471 0.195-0.471-0.195-0.195-0.471v-2.667q0-0.276 0.195-0.471t0.471-0.195zM3.286 2.948q0.271 0 0.469 0.198l1.885 1.885q0.198 0.198 0.198 0.469 0 0.276-0.195 0.471t-0.471 0.195q-0.281 0-0.474-0.193l-1.885-1.885q-0.193-0.193-0.193-0.474 0-0.276 0.195-0.471t0.471-0.195zM12 7.667h2.667q0.276 0 0.471 0.195t0.195 0.471-0.195 0.471-0.471 0.195h-2.667q-0.276 0-0.471-0.195t-0.195-0.471 0.195-0.471 0.471-0.195zM8 1q0.276 0 0.471 0.195t0.195 0.471v2.667q0 0.276-0.195 0.471t-0.471 0.195-0.471-0.195-0.195-0.471v-2.667q0-0.276 0.195-0.471t0.471-0.195zM12.719 2.948q0.271 0 0.469 0.198t0.198 0.469q0 0.276-0.198 0.474l-1.885 1.885q-0.193 0.193-0.469 0.193-0.286 0-0.477-0.19t-0.19-0.477q0-0.276 0.193-0.469l1.885-1.885q0.198-0.198 0.474-0.198z"></path><path class="[CURRENT_ICON_CLASS]-1" d="M5.569 12q0 0.536-0.379 0.911t-0.906 0.375q-0.536 0-0.911-0.375t-0.375-0.911 0.375-0.911 0.911-0.375q0.527 0 0.906 0.375t0.379 0.911zM9.426 13.714q0 0.473-0.335 0.808t-0.808 0.335-0.808-0.335-0.335-0.808 0.335-0.808 0.808-0.335 0.808 0.335 0.335 0.808zM3.857 8q0 0.589-0.42 1.009t-1.009 0.42-1.009-0.42-0.42-1.009 0.42-1.009 1.009-0.42 1.009 0.42 0.42 1.009zM13.283 12q0 0.411-0.295 0.705t-0.705 0.295-0.705-0.295-0.295-0.705 0.295-0.705 0.705-0.295 0.705 0.295 0.295 0.705zM5.854 4q0 0.652-0.46 1.112t-1.112 0.46-1.112-0.46-0.46-1.112 0.46-1.112 1.112-0.46 1.112 0.46 0.46 1.112zM9.997 2.286q0 0.714-0.5 1.214t-1.214 0.5-1.214-0.5-0.5-1.214 0.5-1.214 1.214-0.5 1.214 0.5 0.5 1.214zM14.844 8q0 0.357-0.25 0.607t-0.607 0.25-0.607-0.25-0.25-0.607 0.25-0.607 0.607-0.25 0.607 0.25 0.25 0.607zM12.997 4q0 0.295-0.21 0.504t-0.504 0.21-0.504-0.21-0.21-0.504 0.21-0.504 0.504-0.21 0.504 0.21 0.21 0.504z"></path><path class="[CURRENT_ICON_CLASS]-2" d="M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z"></path><path class="[CURRENT_ICON_CLASS]-3" d="M7 4c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 13c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 8c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5c1.795 0 3.25 1.455 3.25 3.25s-1.455 3.25-3.25 3.25z"></path><path class="[CURRENT_ICON_CLASS]-4" d="M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10.243 3.757c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM13 8c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM11.243 12.243c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM7 14c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.757 12.243c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.257 3.757c0 0 0 0 0 0 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM0.875 8c0-0.621 0.504-1.125 1.125-1.125s1.125 0.504 1.125 1.125c0 0.621-0.504 1.125-1.125 1.125s-1.125-0.504-1.125-1.125z"></path><path class="[CURRENT_ICON_CLASS]-5" d="M8 0c-4.355 0-7.898 3.481-7.998 7.812 0.092-3.779 2.966-6.812 6.498-6.812 3.59 0 6.5 3.134 6.5 7 0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-4.418-3.582-8-8-8zM8 16c4.355 0 7.898-3.481 7.998-7.812-0.092 3.779-2.966 6.812-6.498 6.812-3.59 0-6.5-3.134-6.5-7 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 4.418 3.582 8 8 8z"></path><path class="[CURRENT_ICON_CLASS]-6" d="M0.001 8.025l-0 0c0 0 0 0.001 0 0.003 0.002 0.061 0.009 0.12 0.021 0.177 0.003 0.027 0.007 0.057 0.011 0.090 0.003 0.029 0.007 0.061 0.011 0.095 0.006 0.040 0.012 0.083 0.019 0.128 0.013 0.090 0.028 0.189 0.045 0.296 0.021 0.101 0.044 0.21 0.068 0.326 0.011 0.058 0.028 0.117 0.044 0.178s0.032 0.123 0.049 0.188c0.009 0.032 0.016 0.065 0.027 0.097s0.021 0.065 0.031 0.098 0.043 0.134 0.065 0.203c0.006 0.017 0.011 0.035 0.017 0.052s0.013 0.034 0.019 0.052 0.026 0.070 0.039 0.105c0.027 0.070 0.053 0.142 0.081 0.215 0.031 0.071 0.062 0.144 0.094 0.218 0.016 0.037 0.032 0.074 0.048 0.111s0.035 0.073 0.053 0.111 0.073 0.148 0.11 0.224c0.039 0.075 0.081 0.149 0.123 0.224 0.021 0.037 0.042 0.075 0.063 0.113s0.045 0.074 0.068 0.112 0.093 0.149 0.14 0.224c0.198 0.295 0.417 0.587 0.66 0.864 0.245 0.275 0.511 0.535 0.792 0.775 0.284 0.236 0.582 0.452 0.886 0.642 0.306 0.188 0.619 0.349 0.928 0.487 0.078 0.032 0.156 0.063 0.232 0.095 0.038 0.015 0.076 0.032 0.115 0.046s0.077 0.027 0.115 0.041 0.151 0.054 0.226 0.078c0.075 0.022 0.15 0.044 0.224 0.066 0.037 0.011 0.073 0.022 0.109 0.031s0.073 0.018 0.109 0.027 0.143 0.035 0.213 0.052c0.070 0.014 0.139 0.027 0.207 0.040 0.034 0.006 0.067 0.013 0.101 0.019 0.017 0.003 0.033 0.006 0.049 0.009s0.033 0.005 0.049 0.007c0.066 0.009 0.13 0.018 0.192 0.027 0.031 0.004 0.062 0.009 0.093 0.013s0.061 0.006 0.091 0.009 0.118 0.010 0.174 0.015c0.056 0.005 0.111 0.011 0.164 0.012 0.004 0 0.007 0 0.011 0 0.010 0.544 0.453 0.982 1 0.982 0.008 0 0.017-0 0.025-0.001v0c0 0 0.001-0 0.004-0 0.061-0.002 0.12-0.009 0.177-0.021 0.027-0.003 0.057-0.007 0.090-0.011 0.029-0.003 0.061-0.007 0.095-0.011 0.040-0.006 0.083-0.012 0.128-0.019 0.090-0.013 0.189-0.028 0.296-0.045 0.101-0.021 0.21-0.044 0.326-0.068 0.058-0.011 0.117-0.028 0.178-0.044s0.123-0.033 0.188-0.049c0.032-0.009 0.065-0.016 0.097-0.027s0.065-0.021 0.098-0.031 0.134-0.043 0.203-0.065c0.017-0.006 0.035-0.011 0.052-0.017s0.034-0.013 0.052-0.019 0.070-0.026 0.105-0.039c0.070-0.027 0.142-0.053 0.215-0.081 0.071-0.031 0.144-0.062 0.218-0.094 0.037-0.016 0.074-0.032 0.111-0.048s0.073-0.035 0.111-0.053 0.148-0.073 0.224-0.11c0.075-0.039 0.149-0.081 0.224-0.123 0.037-0.021 0.075-0.042 0.113-0.063s0.074-0.045 0.112-0.068 0.149-0.093 0.224-0.14c0.295-0.197 0.587-0.417 0.864-0.66 0.275-0.245 0.535-0.511 0.775-0.792 0.236-0.284 0.452-0.582 0.642-0.886 0.188-0.306 0.349-0.619 0.487-0.928 0.032-0.078 0.063-0.156 0.095-0.232 0.015-0.038 0.032-0.076 0.046-0.115s0.027-0.077 0.040-0.115 0.054-0.151 0.078-0.226c0.022-0.075 0.044-0.15 0.066-0.224 0.011-0.037 0.022-0.073 0.031-0.109s0.018-0.073 0.027-0.109 0.035-0.143 0.052-0.213c0.014-0.070 0.027-0.139 0.040-0.207 0.006-0.034 0.013-0.067 0.019-0.101 0.003-0.017 0.006-0.033 0.009-0.049s0.005-0.033 0.007-0.050c0.009-0.065 0.018-0.13 0.027-0.192 0.004-0.031 0.009-0.062 0.013-0.093s0.006-0.061 0.009-0.091 0.010-0.118 0.015-0.174c0.005-0.056 0.011-0.111 0.012-0.165 0-0.008 0.001-0.016 0.001-0.025 0.55-0.002 0.996-0.449 0.996-1 0-0.008-0-0.017-0.001-0.025h0c0 0-0-0.001-0-0.003-0.002-0.061-0.009-0.12-0.021-0.177-0.003-0.027-0.007-0.057-0.011-0.090-0.003-0.029-0.007-0.061-0.011-0.095-0.006-0.040-0.012-0.083-0.019-0.128-0.013-0.090-0.028-0.189-0.045-0.296-0.021-0.101-0.044-0.21-0.068-0.326-0.011-0.058-0.028-0.117-0.044-0.178s-0.032-0.123-0.049-0.188c-0.009-0.032-0.016-0.065-0.027-0.097s-0.021-0.065-0.031-0.098-0.043-0.134-0.065-0.203c-0.005-0.017-0.011-0.035-0.017-0.052s-0.013-0.034-0.019-0.052-0.026-0.070-0.039-0.105c-0.027-0.070-0.053-0.142-0.081-0.215-0.031-0.071-0.062-0.144-0.094-0.218-0.016-0.037-0.032-0.074-0.048-0.111s-0.035-0.073-0.053-0.111-0.073-0.148-0.11-0.224c-0.039-0.075-0.081-0.149-0.123-0.224-0.021-0.037-0.042-0.075-0.063-0.113s-0.045-0.074-0.068-0.112-0.093-0.149-0.14-0.224c-0.197-0.295-0.417-0.587-0.66-0.864-0.245-0.275-0.511-0.535-0.792-0.775-0.284-0.236-0.582-0.452-0.886-0.642-0.306-0.188-0.619-0.349-0.928-0.487-0.078-0.032-0.156-0.063-0.232-0.095-0.038-0.015-0.076-0.032-0.115-0.046s-0.077-0.027-0.115-0.040-0.151-0.054-0.226-0.078c-0.075-0.022-0.15-0.044-0.224-0.066-0.037-0.010-0.073-0.022-0.109-0.031s-0.073-0.018-0.109-0.027-0.143-0.035-0.213-0.052c-0.070-0.014-0.139-0.027-0.207-0.040-0.034-0.006-0.067-0.013-0.101-0.019-0.017-0.003-0.033-0.006-0.049-0.009s-0.033-0.005-0.049-0.007c-0.066-0.009-0.13-0.018-0.192-0.027-0.031-0.004-0.062-0.009-0.093-0.013s-0.061-0.006-0.091-0.009-0.118-0.010-0.174-0.015c-0.056-0.005-0.111-0.011-0.164-0.012-0.013-0-0.026-0.001-0.039-0.001-0.010-0.543-0.454-0.981-0.999-0.981-0.008 0-0.017 0-0.025 0.001l-0-0c0 0-0.001 0-0.003 0-0.061 0.002-0.12 0.009-0.177 0.021-0.027 0.003-0.057 0.007-0.090 0.011-0.029 0.003-0.061 0.007-0.095 0.011-0.040 0.006-0.083 0.012-0.128 0.019-0.090 0.013-0.189 0.028-0.296 0.045-0.101 0.021-0.21 0.044-0.326 0.068-0.058 0.011-0.117 0.028-0.178 0.044s-0.123 0.033-0.188 0.049c-0.032 0.009-0.065 0.016-0.097 0.027s-0.065 0.021-0.098 0.031-0.134 0.043-0.203 0.065c-0.017 0.006-0.035 0.011-0.052 0.017s-0.034 0.013-0.052 0.019-0.070 0.026-0.105 0.039c-0.070 0.027-0.142 0.053-0.215 0.081-0.071 0.031-0.144 0.062-0.218 0.094-0.037 0.016-0.074 0.032-0.111 0.048s-0.073 0.035-0.111 0.053-0.148 0.073-0.224 0.11c-0.075 0.039-0.149 0.081-0.224 0.123-0.037 0.021-0.075 0.042-0.113 0.063s-0.074 0.045-0.112 0.068-0.149 0.093-0.224 0.14c-0.295 0.198-0.587 0.417-0.864 0.66-0.275 0.245-0.535 0.511-0.775 0.792-0.236 0.284-0.452 0.582-0.642 0.886-0.188 0.306-0.349 0.619-0.487 0.928-0.032 0.078-0.063 0.156-0.095 0.232-0.015 0.038-0.032 0.076-0.046 0.115s-0.027 0.077-0.040 0.115-0.054 0.151-0.078 0.226c-0.022 0.075-0.044 0.15-0.066 0.224-0.011 0.037-0.022 0.073-0.032 0.109s-0.018 0.073-0.027 0.109-0.035 0.143-0.052 0.213c-0.014 0.070-0.027 0.139-0.040 0.207-0.006 0.034-0.013 0.067-0.019 0.101-0.003 0.017-0.006 0.033-0.009 0.049s-0.005 0.033-0.007 0.050c-0.009 0.065-0.018 0.13-0.027 0.192-0.004 0.031-0.009 0.062-0.013 0.093s-0.006 0.061-0.009 0.091-0.010 0.118-0.015 0.174c-0.005 0.056-0.011 0.111-0.012 0.165-0 0.009-0.001 0.017-0.001 0.025-0.537 0.017-0.967 0.458-0.967 0.999 0 0.008 0 0.017 0.001 0.025zM1.149 7.011c0.001-0.003 0.001-0.006 0.002-0.009 0.010-0.051 0.026-0.102 0.040-0.155s0.030-0.107 0.045-0.163c0.008-0.028 0.015-0.056 0.024-0.084s0.019-0.057 0.028-0.086 0.038-0.116 0.058-0.176c0.005-0.015 0.010-0.030 0.015-0.045s0.012-0.030 0.017-0.045 0.023-0.060 0.035-0.091 0.048-0.123 0.073-0.186c0.028-0.062 0.056-0.125 0.084-0.189 0.014-0.032 0.028-0.064 0.043-0.096s0.032-0.064 0.048-0.096 0.065-0.128 0.098-0.194c0.034-0.065 0.073-0.128 0.109-0.194 0.018-0.032 0.037-0.065 0.056-0.098s0.040-0.064 0.061-0.096c0.041-0.064 0.082-0.129 0.124-0.194 0.176-0.255 0.369-0.506 0.583-0.744 0.217-0.236 0.451-0.459 0.697-0.665 0.25-0.202 0.511-0.385 0.776-0.547 0.268-0.159 0.541-0.294 0.808-0.41 0.068-0.027 0.135-0.053 0.202-0.079 0.033-0.013 0.066-0.027 0.099-0.038s0.067-0.022 0.1-0.033 0.131-0.045 0.196-0.065c0.065-0.018 0.13-0.036 0.194-0.054 0.032-0.009 0.063-0.019 0.095-0.026s0.063-0.014 0.094-0.021 0.123-0.028 0.184-0.042c0.061-0.011 0.12-0.021 0.179-0.032 0.029-0.005 0.058-0.010 0.087-0.015 0.014-0.003 0.029-0.005 0.043-0.008s0.029-0.003 0.043-0.005c0.056-0.007 0.112-0.014 0.166-0.020 0.027-0.003 0.053-0.007 0.080-0.010s0.053-0.004 0.078-0.006 0.102-0.007 0.15-0.011c0.049-0.003 0.095-0.008 0.142-0.008 0.091-0.002 0.177-0.004 0.256-0.006 0.073 0.003 0.14 0.005 0.2 0.007 0.030 0.001 0.058 0.002 0.085 0.002 0.033 0.002 0.064 0.004 0.093 0.006 0.033 0.002 0.063 0.004 0.091 0.006 0.051 0.008 0.103 0.012 0.156 0.012 0.007 0 0.015-0 0.022-0.001 0.002 0 0.004 0 0.004 0v-0c0.487-0.012 0.887-0.372 0.962-0.84 0.008 0.002 0.017 0.004 0.025 0.006 0.051 0.010 0.102 0.026 0.155 0.040s0.107 0.030 0.163 0.045c0.028 0.008 0.056 0.015 0.084 0.024s0.057 0.019 0.086 0.028 0.116 0.038 0.176 0.058c0.015 0.005 0.030 0.010 0.045 0.015s0.030 0.012 0.045 0.017 0.060 0.023 0.091 0.035 0.123 0.048 0.186 0.073c0.062 0.028 0.125 0.056 0.189 0.084 0.032 0.014 0.064 0.028 0.096 0.043s0.064 0.032 0.096 0.048 0.128 0.065 0.194 0.098c0.065 0.034 0.129 0.073 0.194 0.109 0.032 0.018 0.065 0.037 0.098 0.056s0.064 0.040 0.096 0.061 0.129 0.082 0.194 0.124c0.255 0.176 0.506 0.369 0.744 0.583 0.236 0.217 0.459 0.451 0.665 0.697 0.202 0.25 0.385 0.511 0.547 0.776 0.159 0.268 0.294 0.541 0.41 0.808 0.027 0.068 0.053 0.135 0.079 0.202 0.013 0.033 0.027 0.066 0.038 0.099s0.022 0.067 0.033 0.1 0.045 0.131 0.065 0.196c0.018 0.065 0.036 0.13 0.054 0.194 0.009 0.032 0.019 0.063 0.026 0.095s0.014 0.063 0.021 0.094 0.028 0.123 0.042 0.184c0.011 0.061 0.021 0.12 0.032 0.179 0.005 0.029 0.010 0.058 0.015 0.087 0.003 0.014 0.005 0.029 0.008 0.043s0.003 0.029 0.005 0.043c0.007 0.056 0.014 0.112 0.020 0.166 0.003 0.027 0.007 0.053 0.010 0.080s0.004 0.053 0.006 0.078 0.007 0.102 0.011 0.15c0.003 0.049 0.008 0.095 0.008 0.142 0.002 0.091 0.004 0.177 0.006 0.256-0.003 0.073-0.005 0.14-0.007 0.2-0.001 0.030-0.002 0.058-0.002 0.085-0.002 0.033-0.004 0.064-0.006 0.093-0.002 0.033-0.004 0.063-0.006 0.091-0.008 0.051-0.012 0.103-0.012 0.156 0 0.007 0 0.015 0.001 0.022-0 0.002-0 0.004-0 0.004h0c0.012 0.481 0.363 0.877 0.823 0.959-0.001 0.005-0.002 0.009-0.003 0.014-0.010 0.051-0.025 0.102-0.040 0.155s-0.030 0.107-0.045 0.163c-0.008 0.028-0.015 0.056-0.024 0.084s-0.019 0.057-0.028 0.086-0.039 0.116-0.058 0.176c-0.005 0.015-0.010 0.030-0.015 0.045s-0.012 0.030-0.017 0.045-0.023 0.060-0.035 0.091-0.048 0.123-0.073 0.186c-0.028 0.062-0.056 0.125-0.084 0.189-0.014 0.032-0.028 0.064-0.043 0.096s-0.032 0.064-0.048 0.096-0.065 0.128-0.098 0.194c-0.034 0.065-0.073 0.129-0.109 0.194-0.018 0.032-0.037 0.065-0.056 0.098s-0.040 0.064-0.061 0.096-0.082 0.129-0.124 0.194c-0.176 0.255-0.369 0.506-0.583 0.744-0.217 0.236-0.451 0.459-0.697 0.665-0.25 0.202-0.511 0.385-0.776 0.547-0.268 0.159-0.541 0.294-0.808 0.41-0.068 0.027-0.135 0.053-0.202 0.079-0.033 0.013-0.066 0.027-0.099 0.038s-0.067 0.022-0.1 0.033-0.131 0.045-0.196 0.065c-0.065 0.018-0.13 0.036-0.194 0.054-0.032 0.009-0.063 0.019-0.095 0.026s-0.063 0.014-0.094 0.021-0.123 0.028-0.184 0.042c-0.061 0.011-0.12 0.021-0.179 0.032-0.029 0.005-0.058 0.010-0.087 0.015-0.014 0.003-0.028 0.005-0.043 0.008s-0.029 0.003-0.043 0.005c-0.056 0.007-0.112 0.014-0.166 0.020-0.027 0.003-0.053 0.007-0.080 0.010s-0.053 0.004-0.078 0.006-0.102 0.007-0.15 0.011c-0.049 0.003-0.095 0.008-0.142 0.008-0.091 0.002-0.177 0.004-0.256 0.006-0.073-0.003-0.14-0.005-0.2-0.007-0.030-0.001-0.058-0.002-0.085-0.002-0.033-0.002-0.064-0.004-0.093-0.006-0.033-0.002-0.063-0.004-0.091-0.006-0.051-0.008-0.103-0.012-0.156-0.012-0.007 0-0.015 0-0.022 0.001-0.002-0-0.003-0-0.003-0v0c-0.484 0.012-0.883 0.369-0.961 0.834-0.050-0.010-0.101-0.025-0.153-0.039s-0.107-0.030-0.163-0.045c-0.028-0.008-0.056-0.015-0.084-0.024s-0.057-0.019-0.086-0.028-0.116-0.039-0.176-0.058c-0.015-0.005-0.030-0.010-0.045-0.015s-0.030-0.012-0.045-0.017-0.060-0.023-0.091-0.035-0.123-0.048-0.186-0.073c-0.062-0.028-0.125-0.056-0.189-0.084-0.032-0.014-0.064-0.028-0.096-0.043s-0.064-0.032-0.096-0.048-0.128-0.065-0.194-0.098c-0.065-0.034-0.129-0.073-0.194-0.109-0.032-0.018-0.065-0.037-0.098-0.056s-0.064-0.040-0.096-0.061c-0.064-0.041-0.129-0.082-0.194-0.124-0.255-0.175-0.506-0.369-0.744-0.583-0.236-0.217-0.459-0.451-0.665-0.697-0.202-0.25-0.385-0.511-0.547-0.776-0.159-0.268-0.294-0.541-0.41-0.808-0.027-0.068-0.053-0.135-0.079-0.202-0.013-0.033-0.027-0.066-0.038-0.099s-0.022-0.067-0.033-0.1-0.045-0.131-0.065-0.196c-0.018-0.065-0.036-0.13-0.054-0.194-0.009-0.032-0.019-0.063-0.026-0.095s-0.014-0.063-0.021-0.094-0.028-0.123-0.042-0.184c-0.011-0.061-0.021-0.12-0.032-0.179-0.005-0.029-0.010-0.058-0.015-0.087-0.003-0.014-0.005-0.028-0.008-0.043s-0.003-0.029-0.005-0.043c-0.007-0.056-0.014-0.112-0.020-0.166-0.003-0.027-0.007-0.053-0.010-0.080s-0.004-0.053-0.006-0.078-0.007-0.101-0.011-0.15c-0.003-0.049-0.008-0.095-0.008-0.142-0.002-0.091-0.004-0.177-0.006-0.256 0.003-0.073 0.005-0.14 0.007-0.2 0.001-0.030 0.002-0.058 0.002-0.085 0.002-0.033 0.004-0.064 0.006-0.093 0.002-0.033 0.004-0.063 0.006-0.091 0.008-0.051 0.012-0.103 0.012-0.156 0-0.007-0-0.015-0.001-0.022 0-0.002 0-0.003 0-0.003h-0c-0.012-0.49-0.377-0.893-0.851-0.964z"></path><path class="[CURRENT_ICON_CLASS]-7" d="M16 6.5l-3.527-0.353 2.245-2.743-2.121-2.121-2.743 2.245-0.353-3.527h-3l-0.353 3.527-2.743-2.245-2.121 2.121 2.245 2.743-3.527 0.353v3l3.527 0.353-2.245 2.743 2.121 2.121 2.743-2.245 0.353 3.527h3l0.353-3.527 2.743 2.245 2.121-2.121-2.245-2.743 3.527-0.353v-3zM11 6.757v2.485l-1.757 1.757h-2.485l-1.757-1.757v-2.485l1.757-1.757h2.485l1.757 1.757z"></path><path class="[CURRENT_ICON_CLASS]-8" d="M13.657 2.343c-1.448-1.448-3.447-2.343-5.657-2.343-3.429 0-6.355 2.158-7.492 5.19l1.873 0.702c0.853-2.274 3.047-3.893 5.619-3.893 1.657 0 3.157 0.672 4.242 1.758l-2.242 2.242h6v-6l-2.343 2.343zM8 14c-1.657 0-3.157-0.672-4.242-1.758l2.242-2.242h-6v6l2.344-2.344c1.448 1.448 3.447 2.344 5.656 2.344 3.43 0 6.355-2.158 7.492-5.19l-1.873-0.702c-0.853 2.274-3.047 3.893-5.619 3.893z"></path><path class="[CURRENT_ICON_CLASS]-9" d="M8 3.25c-1.566 0-2.962 0.731-3.849 1.863l-1.2-0.9c1.161-1.496 2.992-2.464 5.048-2.464v-1.75l2.5 2.5-2.5 2.5v-1.75zM8 12.75c1.566 0 2.962-0.731 3.849-1.863l1.2 0.9c-1.161 1.496-2.992 2.464-5.048 2.464v1.75l-2.5-2.5 2.5-2.5v1.75zM3.15 8c0 1.568 0.78 2.961 1.98 3.827l-0.9 1.2c-1.564-1.139-2.58-2.968-2.58-5.026h-1.65l2.5-2.5 2.5 2.5h-1.85zM14.35 8h1.65l-2.5 2.5-2.5-2.5h1.85c0-1.568-0.78-2.961-1.98-3.827l0.9-1.2c1.564 1.139 2.58 2.968 2.58 5.026z"></path><path class="[CURRENT_ICON_CLASS]-10" d="M12.999 3.23v0 0zM13.032 8c1.631-1.56 2.423-3.087 1.896-4-0.301-0.521-0.99-0.77-1.929-0.77v0.75c0.659 0 1.137 0.148 1.28 0.395 0.113 0.195 0.050 0.496-0.023 0.713-0.139 0.417-0.442 0.917-0.876 1.444-0.263 0.32-0.567 0.643-0.904 0.963-0.465-0.402-0.982-0.801-1.544-1.188-0.055-0.679-0.142-1.327-0.257-1.93 0.878-0.26 1.675-0.397 2.323-0.397l0-0.75c-0 0-0 0-0 0-0.706 0-1.553 0.141-2.482 0.413-0.535-2.192-1.462-3.642-2.516-3.642s-1.981 1.45-2.516 3.642c-0.929-0.271-1.777-0.412-2.482-0.412-0.939 0-1.629 0.249-1.93 0.77-0.527 0.913 0.265 2.44 1.896 4-1.631 1.559-2.423 3.087-1.896 4 0.301 0.521 0.99 0.77 1.93 0.77 0.706 0 1.553-0.141 2.482-0.412 0.535 2.192 1.462 3.642 2.516 3.642s1.981-1.45 2.516-3.642c0.929 0.271 1.777 0.412 2.482 0.412 0.939 0 1.629-0.249 1.93-0.77 0.527-0.913-0.265-2.441-1.896-4zM11.915 8c-0.291 0.248-0.601 0.493-0.927 0.734 0.008-0.242 0.013-0.487 0.013-0.734s-0.004-0.492-0.013-0.734c0.327 0.241 0.637 0.486 0.927 0.734zM9.958 11.389c-0.36-0.128-0.728-0.274-1.098-0.435 0.213-0.113 0.426-0.232 0.64-0.355s0.424-0.25 0.63-0.378c-0.045 0.403-0.103 0.793-0.172 1.169zM9.125 9.949c-0.372 0.214-0.748 0.416-1.125 0.603-0.377-0.187-0.753-0.389-1.125-0.603-0.375-0.216-0.737-0.441-1.086-0.672-0.026-0.417-0.039-0.844-0.039-1.277s0.013-0.859 0.039-1.276c0.349-0.231 0.711-0.456 1.086-0.672 0.372-0.215 0.748-0.416 1.125-0.603 0.377 0.187 0.753 0.389 1.125 0.603 0.375 0.216 0.737 0.441 1.086 0.672 0.026 0.417 0.039 0.844 0.039 1.276s-0.013 0.859-0.039 1.277c-0.349 0.231-0.711 0.456-1.086 0.672zM5.87 10.22c0.205 0.128 0.415 0.254 0.63 0.378s0.427 0.242 0.64 0.355c-0.37 0.162-0.738 0.307-1.098 0.435-0.069-0.375-0.127-0.766-0.172-1.168zM5.013 8.734c-0.327-0.241-0.637-0.486-0.927-0.734 0.291-0.248 0.601-0.494 0.927-0.734-0.008 0.242-0.013 0.487-0.013 0.734s0.004 0.492 0.013 0.734zM6.042 4.612c0.36 0.128 0.728 0.274 1.098 0.435-0.213 0.113-0.426 0.232-0.64 0.355s-0.424 0.25-0.63 0.378c0.045-0.403 0.103-0.793 0.172-1.168zM9.5 5.402c-0.214-0.123-0.427-0.242-0.64-0.355 0.37-0.162 0.738-0.307 1.098-0.435 0.069 0.375 0.127 0.766 0.172 1.168-0.205-0.128-0.415-0.254-0.63-0.378zM6.581 2.607c0.24-0.639 0.521-1.151 0.813-1.48 0.152-0.172 0.381-0.376 0.607-0.376s0.454 0.205 0.607 0.376c0.292 0.329 0.573 0.841 0.813 1.48 0.146 0.388 0.273 0.812 0.382 1.265-0.58 0.202-1.185 0.45-1.801 0.743-0.616-0.292-1.221-0.541-1.801-0.743 0.109-0.453 0.237-0.877 0.382-1.265zM2.62 6.532c-0.434-0.527-0.736-1.026-0.876-1.444-0.073-0.218-0.135-0.518-0.023-0.713 0.143-0.247 0.621-0.395 1.28-0.395h0c0.648 0 1.445 0.137 2.323 0.397-0.115 0.603-0.202 1.251-0.257 1.93-0.561 0.387-1.079 0.787-1.544 1.188-0.338-0.321-0.641-0.643-0.904-0.963zM3.002 12.020c-0.659 0-1.137-0.148-1.28-0.395-0.113-0.195-0.050-0.496 0.023-0.713 0.139-0.417 0.442-0.917 0.876-1.444 0.263-0.32 0.567-0.643 0.904-0.963 0.465 0.402 0.982 0.801 1.544 1.188 0.055 0.679 0.142 1.327 0.257 1.93-0.878 0.26-1.675 0.397-2.323 0.397zM9.419 13.393c-0.24 0.639-0.521 1.151-0.813 1.48-0.152 0.172-0.381 0.376-0.607 0.376s-0.454-0.205-0.607-0.376c-0.292-0.329-0.573-0.841-0.813-1.48-0.146-0.388-0.273-0.812-0.382-1.265 0.58-0.202 1.185-0.45 1.801-0.743 0.616 0.292 1.221 0.541 1.801 0.743-0.109 0.453-0.236 0.877-0.382 1.265zM14.256 10.912c0.073 0.218 0.135 0.518 0.023 0.713-0.143 0.248-0.622 0.395-1.28 0.395-0.648 0-1.445-0.137-2.323-0.397 0.115-0.603 0.202-1.251 0.257-1.93 0.561-0.387 1.079-0.787 1.544-1.188 0.338 0.321 0.641 0.643 0.904 0.963 0.434 0.527 0.736 1.027 0.876 1.444zM6.75 8c0-0.69 0.56-1.25 1.25-1.25s1.25 0.56 1.25 1.25c0 0.69-0.56 1.25-1.25 1.25s-1.25-0.56-1.25-1.25z"></path><path class="[CURRENT_ICON_CLASS]-11" d="M7.282 8.718l-5-5-2.282 2.282v-6h6l-2.282 2.282 5 5zM8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8c-4.418 0-8-3.582-8-8h2c0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6v-2z"></path></svg>',slideshow:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path class="[ICON_CLASS]-play-default" d="M15.28 8.277l-11.857 6.589q-0.205 0.116-0.353 0.027t-0.147-0.321v-13.143q0-0.232 0.147-0.321t0.353 0.027l11.857 6.589q0.205 0.116 0.205 0.277t-0.205 0.277z"></path><path class="[ICON_CLASS]-play-flat" d="M4.8 3.677l7.313 4.656-7.313 4.656v-9.313z"></path><path class="[ICON_CLASS]-pause-default" d="M14.86 1.714v12.571q0 0.232-0.17 0.402t-0.402 0.17h-4.571q-0.232 0-0.402-0.17t-0.17-0.402v-12.571q0-0.232 0.17-0.402t0.402-0.17h4.571q0.232 0 0.402 0.17t0.17 0.402zM6.841 1.714v12.571q0 0.232-0.17 0.402t-0.402 0.17h-4.571q-0.232 0-0.402-0.17t-0.17-0.402v-12.571q0-0.232 0.17-0.402t0.402-0.17h4.571q0.232 0 0.402 0.17t0.17 0.402z"></path><path class="[ICON_CLASS]-pause-flat" d="M9.344 3.677h2.656v9.313h-2.656v-9.313zM4 12.99v-9.313h2.656v9.313h-2.656z"></path></svg>',fullscreen:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path class="[ICON_CLASS]-maximize-default" d="M16 0v6l-2.16-2.16-3.313 3.313-1.679-1.679 3.313-3.313-2.16-2.16zM3.84 2.16l3.313 3.313-1.679 1.679-3.313-3.313-2.16 2.16v-6h6zM13.84 12.16l2.16-2.16v6h-6l2.16-2.16-3.313-3.313 1.679-1.679zM7.152 10.527l-3.313 3.313 2.16 2.16h-6v-6l2.16 2.16 3.313-3.313z"></path><path class="[ICON_CLASS]-maximize-flat" d="M11.333 1h2q0.828 0 1.414 0.586t0.586 1.414v2q0 0.276-0.195 0.471t-0.471 0.195-0.471-0.195-0.195-0.471v-2q0-0.276-0.195-0.471t-0.471-0.195h-2q-0.276 0-0.471-0.195t-0.195-0.471 0.195-0.471 0.471-0.195zM1.333 11q0.276 0 0.471 0.195t0.195 0.471v2q0 0.276 0.195 0.471t0.471 0.195h2q0.276 0 0.471 0.195t0.195 0.471-0.195 0.471-0.471 0.195h-2q-0.828 0-1.414-0.586t-0.586-1.414v-2q0-0.276 0.195-0.471t0.471-0.195zM2.667 1h2q0.276 0 0.471 0.195t0.195 0.471-0.195 0.471-0.471 0.195h-2q-0.276 0-0.471 0.195t-0.195 0.471v2q0 0.276-0.195 0.471t-0.471 0.195-0.471-0.195-0.195-0.471v-2q0-0.828 0.586-1.414t1.414-0.586zM14.667 11q0.276 0 0.471 0.195t0.195 0.471v2q0 0.828-0.586 1.414t-1.414 0.586h-2q-0.276 0-0.471-0.195t-0.195-0.471 0.195-0.471 0.471-0.195h2q0.276 0 0.471-0.195t0.195-0.471v-2q0-0.276 0.195-0.471t0.471-0.195z"></path><path class="[ICON_CLASS]-minimize-default" d="M1 9h6v6l-2.16-2.16-3.156 3.156-1.679-1.679 3.156-3.156zM12.84 11.16l3.156 3.156-1.679 1.679-3.156-3.156-2.16 2.16v-6h6zM15 7h-6v-6l2.16 2.16 3.156-3.156 1.679 1.679-3.156 3.156zM4.84 3.16l2.16-2.16v6h-6l2.16-2.16-3.156-3.156 1.679-1.679z"></path><path class="[ICON_CLASS]-minimize-flat" d="M11.333 1q0.276 0 0.471 0.195t0.195 0.471v2q0 0.276 0.195 0.471t0.471 0.195h2q0.276 0 0.471 0.195t0.195 0.471-0.195 0.471-0.471 0.195h-2q-0.828 0-1.414-0.586t-0.586-1.414v-2q0-0.276 0.195-0.471t0.471-0.195zM1.333 11h2q0.828 0 1.414 0.586t0.586 1.414v2q0 0.276-0.195 0.471t-0.471 0.195-0.471-0.195-0.195-0.471v-2q0-0.276-0.195-0.471t-0.471-0.195h-2q-0.276 0-0.471-0.195t-0.195-0.471 0.195-0.471 0.471-0.195zM4.667 1q0.276 0 0.471 0.195t0.195 0.471v2q0 0.828-0.586 1.414t-1.414 0.586h-2q-0.276 0-0.471-0.195t-0.195-0.471 0.195-0.471 0.471-0.195h2q0.276 0 0.471-0.195t0.195-0.471v-2q0-0.276 0.195-0.471t0.471-0.195zM12.667 11h2q0.276 0 0.471 0.195t0.195 0.471-0.195 0.471-0.471 0.195h-2q-0.276 0-0.471 0.195t-0.195 0.471v2q0 0.276-0.195 0.471t-0.471 0.195-0.471-0.195-0.195-0.471v-2q0-0.828 0.586-1.414t1.414-0.586z"></path></svg>',social:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M13.5 11c-0.706 0-1.342 0.293-1.797 0.763l-6.734-3.367c0.021-0.129 0.032-0.261 0.032-0.396s-0.011-0.267-0.032-0.396l6.734-3.367c0.455 0.47 1.091 0.763 1.797 0.763 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5c0 0.135 0.011 0.267 0.031 0.396l-6.734 3.367c-0.455-0.47-1.091-0.763-1.797-0.763-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c0.706 0 1.343-0.293 1.797-0.763l6.734 3.367c-0.021 0.129-0.031 0.261-0.031 0.396 0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path></svg>',facebook:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M0,0H64V64H0ZM0 0v64h64V0zm39.6 22h-2.8c-2.2 0-2.6 1.1-2.6 2.6V28h5.3l-.7 5.3h-4.6V47h-5.5V33.3H24V28h4.6v-4c0-4.6 2.8-7 6.9-7 2 0 3.6.1 4.1.2z"></path></svg>',linkedin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M0,0H64V64H0ZM0 0v64h64V0zm25.8 44h-5.4V26.6h5.4zm-2.7-19.7c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1M46 44h-5.4v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V44h-5.4V26.6h5.2V29h.1c.7-1.4 2.5-2.8 5.1-2.8 5.5 0 6.5 3.6 6.5 8.3V44z"></path></svg>',pinterest:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M0,0H64V64H0ZM0 0v64h64V0zm32 48c-1.6 0-3.1-.2-4.5-.7.6-1 1.3-2.2 1.6-3.4.2-.7 1.1-4.4 1.1-4.4.6 1.1 2.2 2 3.9 2 5.1 0 8.6-4.7 8.6-11 0-4.7-4-9.2-10.1-9.2-7.6 0-11.4 5.5-11.4 10 0 2.8 1 5.2 3.3 6.1.4.1.7 0 .8-.4.1-.3.2-1 .3-1.3.1-.4.1-.5-.2-.9-.6-.8-1.1-1.7-1.1-3.1 0-4 3-7.7 7.9-7.7 4.3 0 6.7 2.6 6.7 6.1 0 4.6-2 8.5-5.1 8.5-1.7 0-2.9-1.4-2.5-3.1.5-2 1.4-4.2 1.4-5.7 0-1.3-.7-2.4-2.2-2.4-1.7 0-3.1 1.8-3.1 4.1 0 1.5.5 2.5.5 2.5s-1.8 7.4-2.1 8.7c-.3 1.2-.3 2.6-.3 3.7C19.9 44.2 16 38.6 16 32c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16"></path></svg>',reddit:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M0,0H64V64H0ZM0 0v64h64V0zm53.344 32a4.67 4.67 0 0 0-7.903-3.2 22.77 22.77 0 0 0-12.32-3.937L35.2 14.88l6.848 1.441a3.2 3.2 0 0 0 3.02 2.852 3.2 3.2 0 1 0-2.602-4.805l-7.84-1.566a1 1 0 0 0-.754.136.98.98 0 0 0-.43.63l-2.37 11.105a22.8 22.8 0 0 0-12.477 3.937 4.672 4.672 0 1 0-5.152 7.648q-.06.704 0 1.407c0 7.168 8.351 12.992 18.656 12.992 10.3 0 18.656-5.824 18.656-12.992a9.4 9.4 0 0 0 0-1.406A4.68 4.68 0 0 0 53.344 32m-32 3.2a3.198 3.198 0 1 1 6.398 0 3.195 3.195 0 0 1-3.199 3.198c-1.766 0-3.2-1.43-3.2-3.199M39.938 44a12.3 12.3 0 0 1-7.907 2.465A12.3 12.3 0 0 1 24.13 44a.87.87 0 0 1 .055-1.16.87.87 0 0 1 1.16-.055A10.48 10.48 0 0 0 32 44.801a10.5 10.5 0 0 0 6.688-1.953.9.9 0 0 1 1.265.015.9.9 0 0 1-.016 1.266Zm-.579-5.473a3.2 3.2 0 0 1-3.199-3.199 3.198 3.198 0 1 1 6.398 0 3.2 3.2 0 0 1-3.23 3.328Zm0 0"></path></svg>',tumblr:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M0,0H64V64H0ZM0 0v64h64V0zm35.4 47c-6.5.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6 5.6-5.7 5.9-8.1 0-.2.1-.2.2-.2h4.4v7.6h6v4.5h-6v9.3c0 1.3.5 3 2.9 3 .8 0 1.9-.3 2.4-.5l1.4 4.3c-.5.8-3 1.8-5.2 1.8"></path></svg>',twitter:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M0,0H64V64H0ZM0 0v64h64V0zm16 17.537h10.125l6.992 9.242 8.084-9.242h4.908L35.39 29.79 48 46.463h-9.875l-7.734-10.111-8.85 10.11h-4.908l11.465-13.105zm5.73 2.783 17.75 23.205h2.72L24.647 20.32z"></path></svg>',email:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M15 2h-14c-0.55 0-1 0.45-1 1v10c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-10c0-0.55-0.45-1-1-1zM14 4v0.719l-6 3.536-6-3.536v-0.719h12zM2 12v-5.54l6 3.536 6-3.536v5.54h-12z"></path></svg>',download:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 9l4-4h-3v-4h-2v4h-3zM11.636 7.364l-1.121 1.121 4.064 1.515-6.579 2.453-6.579-2.453 4.064-1.515-1.121-1.121-4.364 1.636v4l8 3 8-3v-4z"></path></svg>'}},this.getGroup=function(e){var o="default",t=n.extend(!0,{},this.registered.default);return"string"==typeof e&&this.registered.hasOwnProperty(e)&&n.extend(!0,t,this.registered[e]),"object"==typeof e&&(o="custom",n.extend(!0,t,this.registered.default,e)),{name:o,icons:t}},this.get=function(e,o){var t=this,o=t.getGroup(o),i="string"==typeof e&&o.icons.hasOwnProperty(e)?o.icons[e].replace(/\[ICON_CLASS]/g,t.className).replace(/\[CURRENT_ICON_CLASS]/g,t.className+"-"+e):null,e=[!1,e,o.name].map(function(e){return!1===e?t.className:t.className+"-"+e}).join(" ");return n(i).attr("class",e)},this},e.icons=new e.Icons}(jQuery,window.FooBox),function(s,d){d.Instance=function(e){this.id=null,"number"==typeof e?(this.id=e,d.instances[e-1]=this):this.id=d.instances.push(this),this.element=null,this.options=s.extend(!0,{},d.defaults),this.modal=new d.Modal(this),this.objects={},d.addons.load(this),d.handlers.load(this);var l=this;return this.raise=function(e,o){return d.raise(l,e,o)},this.init=function(e,o){l.element=d.isjQuery(e)?e:s(e),l.options=d.options.merge(l.options,o||{}),d.addons.call(l,"preinit",l.element,l.options),l.items.init(),0<l.items.array.length?(l.element.data("fbx_instance",l),l.options.containerCssClass&&l.element.addClass(l.options.containerCssClass),l.setup.bind(),l.modal.init(e,l.options),d.handlers.call(l,"init",l.element,l.options),l.raise("foobox.initialized"),d.isFn(l.options.initCallback)&&l.options.initCallback.call(l)):l.destroy()},this.reinit=function(e){l.options=d.options.merge(l.options,e||{}),l.items.init(!0),0<l.items.array.length?(l.setup.bind(),l.modal.reinit(l.options),d.handlers.call(l,"reinit",l.options),l.raise("foobox.reinitialized")):l.destroy()},this.destroy=function(){d.addons.call(l,"destroy"),d.handlers.call(l,"destroy"),l.items.destroy(),l.modal.destroy(),l.element.removeClass("fbx-instance fbx-item").data({fbx_instance:null,fbx_p_instance:null}),l.id==d.instances.length?d.instances.splice(l.id-1,1):d.instances[l.id-1]=null,l.raise("foobox.destroy")},this.setup={bind:function(){s(l.options.externalSelector).off("click.fooboxExternal").on("click.fooboxExternal",function(e){e.preventDefault();var e=s(this).data("foobox"),e=s(e),o=e.data("fbx_instance")||e.data("fbx_p_instance");return 0<e.length&&o instanceof d.Instance&&o.modal instanceof d.Modal&&o.modal.show(!0),!1})}},this.items={array:[],indexes:{prev:-1,current:0,next:1,direction:"*",set:function(e){var o=l.items.indexes.current,t=(e=(e=e||0)>l.items.array.length-1?0:e<0?l.items.array.length-1:e)-1,i=e+1;l.items.indexes.current=e,l.items.indexes.prev=t<0?l.items.array.length-1:t,l.items.indexes.next=i>l.items.array.length-1?0:i,l.items.indexes.direction=l.items.indexes._direction(o,e,l.items.array.length-1)},_direction:function(e,o,t){return 0==o&&e==t?">":o==t&&0==e?"<":e<o?">":o<e?"<":"*"}},new_array:function(e){var o,t,i=0;if(1==(e=e||!1)){if(0<l.items.array.length){for(var n=0;n<l.items.array.length;n++)o=l.items.array[n],d.isjQuery(o.element)?0==o.element.parents(":first").length&&(l.items.array.splice(n,1),--n):o.option||(l.items.array.splice(n,1),--n);for(var s=0;s<l.items.array.length;s++)o=l.items.array[s],d.isjQuery(o.element)?o.element.get(0).index=o.index=s:o.index=s}}else l.items.array=[];if(d.isArray(l.options.items))for(var a=0;a<l.options.items.length;a++)if(o=l.options.items[a],-1==l.items.indexOf(o))for(var r=0;r<l.objects.handlers.length;r++)if(l.objects.handlers[r].type==o.type){o.index=i,o.option=!0,o.handler=l.objects.handlers[r],o.handler.defaults(o),t=l.raise("foobox.parseItem",{element:null,item:o}),l.items.array.push(t.fb.item),i++;break}},init:function(e){l.items.new_array(e=e||!1);l.element.is(l.options.selector)&&!l.element.is(l.options.excludes)&&l.items.add(l.element)?l.element.off("click.item").on("click.item",l.items.clicked):((l.element.is(".foogallery")&&(e=l.element.data("__FooGallery__"))&&e.items&&0<(e=e.items.available(function(e){return!e.noLightbox&&!e.panelHide})).length?(e=s.map(e,function(e){return e.$anchor?e.$anchor.get(0):null}),s(e)):l.element.find(l.options.selector)).not(l.options.excludes).off("click.item").filter(function(){return l.items.add(this)}).on("click.item",l.items.clicked),l.element.on("click.item",".fbx-link",l.items.clicked)),l.items.rel()},destroy:function(){var e,o;for(l.element.off("click.item",".fbx-link",l.items.clicked),o=0;o<l.items.array.length;o++)e=l.items.array[o],d.isFn(e.destroy)&&e.destroy(),d.isjQuery(e.element)&&e.element.off("click.item").removeClass("fbx-link").data("fbx_p_instance",null);l.items.array=[]},rel:function(){var e=l.options.rel||l.element.attr("rel")||(l.items.first(function(e){return!!d.isjQuery(e.element)&&"string"==typeof e.element.attr("rel")})||{element:s()}).element.attr("rel");"string"==typeof e&&s('[rel="'+e+'"]').not(l.options.excludes).not(l.element).off("click.item").filter(function(){return l.items.add(this)}).on("click.item",l.items.clicked)},indexOf:function(e,o){var t;if(e)for(o=o||"url",t=0;t<l.items.array.length;t++)if(l.items.array[t][o]==e[o])return t;return-1},is:{first:function(e){return!(!l.items.array||0==l.items.array.length)&&l.items.array[0].index==e.index},last:function(e){return!(!l.items.array||0==l.items.array.length)&&l.items.array[l.items.array.length-1].index==e.index}},add:function(e){e=d.isjQuery(e)?e:s(e);var o,t,i=l.items.parse(e,l.items.array.length);return null!==i&&(o=e.get(0),-1!=(t=l.items.indexOf(i))?(i=l.items.array[t],o.index=i.index):o.index=i.index=l.items.array.push(i)-1,e.addClass("fbx-link").data("fbx_p_instance")instanceof d.Instance||e.data("fbx_p_instance",l),!0)},get:function(e){var o=null,e=(e=d.isjQuery(e)?e:s(e)).get(0).index;return o=e&&0<e&&e<=l.items.array.length-1?l.items.array[e]:o},parse:function(e,o){var t,i;e=d.isjQuery(e)?e:s(e);for(var n=0;n<l.objects.handlers.length;n++)if(l.objects.handlers[n].handles(e,l.element)){t=l.objects.handlers[n].parse(e),isNaN(o)||(t.index=o),i=l.raise("foobox.parseItem",{element:e,item:t});break}return void 0!==i&&i.fb.item?i.fb.item:null},error:function(e){var o,t,i,n;return l.items.array.length>e&&1==l.items.array[e].error?l.items.array[e]:(n=!1,null==(o=d.handlers.get(l,"html"))&&(o=new function(e){var n=this;return n.FooBox=e,n.type="error",n.handles=function(){return!1},n.hasChanged=function(){return!1},n.defaults=function(){},n.parse=function(){},n.load=function(e,o,t,i){try{o.empty().append(e.content),d.isFn(t)&&t(n.getSize(e))}catch(e){d.isFn(i)&&i(e)}},n.getSize=function(e){return new d.Size(e.width,e.height)},n}(l)),null!==l.options.error.match(/^#/i)&&0<s(l.options.error).length?(t=s(l.options.error),n=!0):t=s('<div class="fbx-error-msg" data-width="240" data-height="240"></div>').append(d.icons.get("error")).append(s("<p/>").text(l.options.error)),(i=new d.Item(o.type,t.get(0),o)).selector=1==n?l.options.error:null,i.index=e,i.error=!0,i.title=t.data("title")||null,i.description=t.data("description")||null,i.width=t.data("width")||240,i.height=t.data("height")||240,i.content=1==n?null:t,i.fullscreen=!0,i.handler=o,l.items.array[e]=i)},first:function(e){for(var o=null,t=0;t<l.items.array.length;t++)if(e(l.items.array[t])){o=l.items.array[t];break}return o},current:function(){return l.items.array[l.items.indexes.current]},prev:function(){return l.items.array[l.items.indexes.prev]},next:function(){return l.items.array[l.items.indexes.next]},multiple:function(){return 1<l.items.array.length},clicked:function(e){return e.preventDefault(),l.items.indexes.set(this.index),l.modal.show(!0),!1}},this}}(jQuery,window.FooBox),function(l,M){M.Modal=function(e){this.FooBox=e,this.element=null,this.loaderTimeout=new M.Timer,this._first=!1,this._busy=!1,this._closed=!1;var C=this;return this.init=function(e,o){C.setup.html(),C.setup.options(o),C.setup.bind()},this.reinit=function(e){C.setup.options(e)},this.destroy=function(){M.isjQuery(C.element)&&C.element.remove()},this.setup={html:function(){var e,o;M.isjQuery(C.element)||(C.element=l('<div class="fbx-modal"></div>'),C.element.append('<div class="fbx-inner-spacer"></div>'),(e=l('<div class="fbx-stage"></div>')).append('<div class="fbx-item-current"></div>'),e.append('<div class="fbx-item-next"></div>'),(o=l('<div class="fbx-inner fbx-inner-shadow"></div>')).append(e),o.append(l('<a class="fbx-prev fbx-btn-transition fbx-btn-shadow"></a>').append(M.icons.get("prev"))),o.append('<div class="fbx-credit"><a target="_blank" href=""><em></em><span> FooBox</span></a></div>'),o.append('<span class="fbx-count" />'),o.append(l('<a class="fbx-next fbx-btn-transition fbx-btn-shadow"></a>').append(M.icons.get("next"))),o.append(l('<a class="fbx-close fbx-btn-transition fbx-btn-shadow"></a>').append(M.icons.get("close"))),C.element.append(l('<div class="fbx-loader"></div>').append(M.icons.get("spinner"))),C.element.append(o),C.FooBox.raise("foobox.setupHtml"),l("body").append(C.element))},options:function(e){var o;C.element.removeClass().addClass("fbx-modal").addClass("fbx-"+C.FooBox.id).addClass(C.FooBox.element.data("style")||e.style).addClass(C.FooBox.element.data("theme")||e.theme).addClass(C.FooBox.element.data("modal-class")).addClass(e.modalClass).data("fbx_instance",C.FooBox),C.element.addClass(M.browser.css),e.affiliate.enabled?(C.element.find(".fbx-credit > a").attr("href",e.affiliate.url),C.element.find(".fbx-credit > a > em").text(e.affiliate.prefix)):C.element.find(".fbx-credit").remove(),o=e.showCount&&C.FooBox.items.multiple()?"":"none",C.element.find(".fbx-count").css("display",o),e.showButtons&&C.FooBox.items.multiple()||C.element.addClass("fbx-no-buttons"),C.FooBox.raise("foobox.setupOptions")},bind:function(){1==C.FooBox.options.closeOnOverlayClick&&C.element.off("click.foobox").on("click.foobox",function(e){1==C.FooBox.options.closeOnOverlayClick&&l(e.target).is(".fbx-modal")&&C.close()}),C.element.find(".fbx-close").off("click.foobox").on("click.foobox",function(e){e.preventDefault(),e.stopPropagation(),C.close()}).end().find(".fbx-prev").off("click.foobox").on("click.foobox",function(e){e.preventDefault(),e.stopPropagation(),l(this).hasClass("fbx-disabled")||C.prev()}).end().find(".fbx-next").off("click.foobox").on("click.foobox",function(e){e.preventDefault(),e.stopPropagation(),l(this).hasClass("fbx-disabled")||C.next()})}},this.prioritize=function(){1<M.instances.length&&C.element.nextAll(".fbx-modal:last").after(C.element)},this.preload=function(){var e;1==C.FooBox.options.preload&&((e=C.FooBox.items.prev())&&e.handler.preload(e),e=C.FooBox.items.next())&&e.handler.preload(e)},this.show=function(o){var t,i,e,n,s,a=C.FooBox.items.current();function r(e){C.loaderTimeout.stop(),C.element.removeClass("fbx-loading"),C._busy=!1,console.error(e),C.FooBox.raise("foobox.onError",{error:e}).isDefaultPrevented()||null!=C.FooBox.items.error(a.index)&&C.show(o)}a&&(o=o||!1,C._first=o,C._busy=!0,C._closed=!1,l("body").addClass("fbx-active"),C.FooBox.options.hideScrollbars&&l("html").addClass("fbx-no-scroll"),1==a.error?C.element.addClass("fbx-error"):C.element.removeClass("fbx-error"),C.element.hasClass("fbx-show")||(C.prioritize(),e=C.getMaxSize(),C.element.addClass("fbx-loading").find(".fbx-inner").css({width:e.width,height:e.height,"margin-top":e.marginTop,"margin-left":e.marginLeft})),t=C.element.find(".fbx-item-current"),(i=C.element.find(".fbx-item-next")).css({opacity:0,visibility:"hidden"}),C.element.find(".fbx-count").text(C.FooBox.options.countMessage.replace("%index",""+(C.FooBox.items.indexes.current+1)).replace("%total",""+C.FooBox.items.array.length)),C.FooBox.raise("foobox.beforeLoad",{item:a}).isDefaultPrevented()?C._busy=!1:(a.handler.hasChanged(a)&&(e=a.index,n=a.element.get(0),a=a.handler.parse(a.element),s=C.FooBox.raise("foobox.parseItem",{element:a.element,item:a}),n.index=s.fb.item.index=e,C.FooBox.items.array[e]=s.fb.item),C.preload(),C.loaderTimeout.start(function(){C._closed||C.element.addClass("fbx-loading")},C.FooBox.options.loaderTimeout),setTimeout(function(){C.checkForLoop(a),a.handler.load(a,i,function(e){1==C._closed?C._busy=!1:C.transitionOut(t,function(){t.find("video").each(function(){this.pause(),this.removeAttribute("src"),this.load()}),1==C._closed?C._busy=!1:C.resize(e,i,function(){1==C._closed?C._busy=!1:(C.loaderTimeout.stop(),i.css({opacity:"",visibility:""}),C.transitionIn(i,function(){1==C._closed?C._busy=!1:(i.add(t).toggleClass("fbx-item-next fbx-item-current"),t.empty(),C.element.hasClass("fbx-show")?(C.element.removeClass("fbx-loading"),C.FooBox.raise("foobox.afterLoad",{item:a}),C.triggerFooGalleryLayout(i),C._busy=!1):C.FooBox.raise("foobox.beforeShow",{item:a}).isDefaultPrevented()||(C.element.removeClass("fbx-loading").addClass("fbx-show"),C.FooBox.raise("foobox.afterShow",{item:a}),C.FooBox.raise("foobox.afterLoad",{item:a}),C.triggerFooGalleryLayout(i),C._busy=!1))},r))},r)},r)},r)},C.FooBox.options.loadDelay)))},this.triggerFooGalleryLayout=function(e){window.FooGallery&&e.find(".foogallery").each(function(){var e=l(this).data("__FooGallery__");e&&e.initialized&&e.layout()})},this.checkForLoop=function(e){1!=C.FooBox.options.loop&&(C.element.find(".fbx-prev, .fbx-next").removeClass("fbx-disabled"),C.FooBox.items.is.first(e)&&C.element.find(".fbx-prev").addClass("fbx-disabled"),C.FooBox.items.is.last(e))&&C.element.find(".fbx-next").addClass("fbx-disabled")},this.getMaxSize=function(){var e=C.element.find(".fbx-inner"),o=C.element.find(".fbx-inner-spacer"),t=parseInt(o.css("padding-top"),0),i=parseInt(o.css("padding-bottom"),0),n=parseInt(o.css("padding-left"),0),o=parseInt(o.css("padding-right"),0),s=parseInt(e.css("border-top-width"),0),a=parseInt(e.css("border-bottom-width"),0),r=parseInt(e.css("border-left-width"),0),l=parseInt(e.css("border-right-width"),0),e=parseInt(e.css("padding-left"),0),d=t+i+2*e+s+a,c=n+o+2*e+r+l,c=new M.Size(C.element.width()-c,C.element.height()-d);return c.marginTop=-(c.height/2+e+(a+s)/2+i/2-t/2),c.marginLeft=-(c.width/2+e+(l+r)/2+o/2-n/2),c},this.resize=function(e,o,t,i){try{var n,s,a,r,l,d,c,h,f,p,m,u,x,b,v,g,w,F,y,B,z;0===e.width||0===e.height?M.isFn(i)&&i("Invalid size supplied. Width = "+e.width+", Height = "+e.height):(n=C.FooBox.items.current(),s=new M.Size(e.width,e.height),a=C.element.find(".fbx-inner"),r=C.element.find(".fbx-inner-spacer"),l=parseInt(r.css("padding-top"),0),d=parseInt(r.css("padding-bottom"),0),c=parseInt(r.css("padding-left"),0),h=parseInt(r.css("padding-right"),0),f=parseInt(a.css("border-top-width"),0),p=parseInt(a.css("border-bottom-width"),0),m=parseInt(a.css("border-left-width"),0),u=parseInt(a.css("border-right-width"),0),b=l+d+2*(x=parseInt(a.css("padding-left"),0))+f+p,v=c+h+2*x+m+u,g=new M.Size(parseInt(a.css("width"),0),parseInt(a.css("height"),0)),F=(w=new M.Size(C.element.width()-v,C.element.height()-b)).width/e.width,B=(w.height<e.height*F&&(F=w.height/e.height),!0===C.FooBox.options.fitToScreen||1==n.proportion&&(w.height<e.height||w.width<e.width)?(e.height=Math.floor(e.height*F),e.width=Math.floor(e.width*F)):0==n.proportion&&(w.height<e.height&&(e.height=w.height),w.width<e.width)&&(e.width=w.width),e.height<100&&(e.height=100),e.width<100&&(e.width=100),-(e.height/2+x+(p+f)/2+d/2-l/2)),z=-(e.width/2+x+(u+m)/2+h/2-c/2),g.equalTo(e)?(a.css({height:e.height,width:e.width,"margin-top":B,"margin-left":z}),C.overflow(n,s,e,o),C.FooBox.raise("foobox.afterResize",{item:n,size:e}),M.isFn(t)&&t()):C.FooBox.raise("foobox.beforeResize",{item:n,size:e,offset:{top:B,left:z},error:i,success:t}).isDefaultPrevented()||(B=-(e.height/2+x+(p+f)/2+d/2-l/2),z=-(e.width/2+x+(u+m)/2+h/2-c/2),C.element.hasClass("fbx-show")?M.browser.supportsTransitions()?(y="all "+C.FooBox.options.resizeSpeed/1e3+"s ease-in-out",a.css({WebkitTransition:y,MozTransition:y,MsTransition:y,OTransition:y,transition:y}),a.css({height:e.height,width:e.width,"margin-top":B,"margin-left":z}),setTimeout(function(){a.css({WebkitTransition:"",MozTransition:"",MsTransition:"",OTransition:"",transition:""}),C.overflow(n,s,e,o),C.FooBox.raise("foobox.afterResize",{item:n,size:e}),M.isFn(t)&&t(e)},C.FooBox.options.resizeSpeed)):a.animate({height:e.height,width:e.width,"margin-top":B,"margin-left":z},C.FooBox.options.resizeSpeed,function(){C.overflow(n,s,e,o),C.FooBox.raise("foobox.afterResize",{item:n,size:e}),M.isFn(t)&&t(e)}):(a.css({height:e.height,width:e.width,"margin-top":B,"margin-left":z}),C.overflow(n,s,e,o),C.FooBox.raise("foobox.afterResize",{item:n,size:e}),M.isFn(t)&&t())))}catch(e){M.isFn(i)&&i(e)}},this.overflow=function(e,o,t,i){var n=i.find(".fbx-item");e.overflow&&(t.width<.8*o.width||t.height<.8*o.height)||e.overflow&&!e.proportion&&(t.width<o.width||t.height<o.height)||e.overflow&&"html"===e.type?("html"===e.type?(n.css({width:"100%",height:"auto",overflow:""}),i.css("overflow","auto")):(n.css({width:o.width,height:o.height,overflow:""}),i.css({"overflow-x":o.width<=t.width?"hidden":"","overflow-y":o.height<=t.height?"hidden":""})),C.FooBox.raise("foobox.showOverflow",{item:e,container:i})):(n.css({width:"",height:"",overflow:n.is("iframe")?"":"hidden"}),i.css({"overflow-x":"","overflow-y":"",overflow:"hidden"}),C.FooBox.raise("foobox.hideOverflow",{item:e,container:i}))},this.transitionOut=function(e,o,t){try{C.element.hasClass("fbx-show")?e.animate({opacity:0},e.is(":visible")?C.FooBox.options.transitionOutSpeed:0,function(){M.isFn(o)&&o()}):M.isFn(o)&&o()}catch(e){M.isFn(t)&&t(e)}},this.transitionIn=function(e,o,t){try{C.element.hasClass("fbx-show")?e.animate({opacity:1},C.FooBox.options.transitionInSpeed,function(){M.isFn(o)&&o()}):(e.css({opacity:1}),M.isFn(o)&&o())}catch(e){M.isFn(t)&&t(e)}},this.close=function(){C.FooBox.raise("foobox.beforeClose").isDefaultPrevented()||(C._closed=!0,C._busy=!1,C.loaderTimeout.stop(),C.element.removeClass("fbx-loading fbx-show"),l("body").removeClass("fbx-active"),C.FooBox.raise("foobox.close"),C.element.find(".fbx-item-current video, .fbx-item-next video").each(function(){this.pause(),this.removeAttribute("src"),this.load()}),C.element.find(".fbx-item-current, .fbx-item-next").empty(),l("html").removeClass("fbx-no-scroll"),C.FooBox.raise("foobox.afterClose"))},this.prev=function(e){if(1!=C._busy){if(C.FooBox.items.indexes.set(C.FooBox.items.indexes.prev),"string"==typeof e)for(var o=C.FooBox.items.current();o.type!=e;)C.FooBox.items.indexes.set(C.FooBox.items.indexes.prev),o=C.FooBox.items.current();C.show(!1),C.FooBox.raise("foobox.previous")}},this.next=function(e){if(1!=C._busy){if(C.FooBox.items.indexes.set(C.FooBox.items.indexes.next),"string"==typeof e)for(var o=C.FooBox.items.current();o.type!=e;)C.FooBox.items.indexes.set(C.FooBox.items.indexes.next),o=C.FooBox.items.current();C.show(!1),C.FooBox.raise("foobox.next")}},this}}(jQuery,window.FooBox),function(a,r){var e={images:{noRightClick:!1,attr:"href",overflow:!1,fullscreen:!0,showCaptions:!0,regex:/https?:\/\/.*?\/.*?\.(jpg|jpeg|png|gif|bmp|webp|svg)/i,maxWidth:-1,maxHeight:-1,findUrl:function(e,o){return o?o.data("image")?o.data("image"):"string"==typeof o.attr(e.options.images.attr)?r.qualifiedURL(o.attr(e.options.images.attr)):"":""}}};r.Item.prototype.image=null,r.Item.prototype.maxWidth=null,r.Item.prototype.maxHeight=null,r.ImageHandler=function(e){this.FooBox=e,this.type="image";var s=this;this.handles=function(e){var o=s.FooBox.options.images.findUrl(s.FooBox,e),o="string"==typeof o&&null!=o.match(s.FooBox.options.images.regex);return s.FooBox.raise("foobox.handlesImage",{element:e,handle:o}).fb.handle},this.defaults=function(e){e.fullscreen=e.fullscreen||s.FooBox.options.images.fullscreen,e.captions=e.captions||s.FooBox.options.images.showCaptions,e.social=e.social||!0,e.overflow=e.overflow||s.FooBox.options.images.overflow,e.proportion=e.proportion||!0,e.maxWidth=e.maxWidth||s.FooBox.options.images.maxWidth,e.maxHeight=e.maxHeight||s.FooBox.options.images.maxHeight},this.parse=function(e){var o=new r.Item(s.type,e,this);return s.defaults(o),o.url=s.FooBox.options.images.findUrl(s.FooBox,e)||null,o.width=r.Size.check(e.data("width")||o.width||null),o.height=r.Size.check(e.data("height")||o.height||null),o.fullscreen="boolean"==typeof e.data("fullscreen")?e.data("fullscreen"):o.fullscreen,o.overflow="boolean"==typeof e.data("overflow")?e.data("overflow"):o.overflow,o.proportion="boolean"==typeof e.data("proportion")?e.data("proportion"):o.proportion,o.maxWidth="number"==typeof e.data("maxWidth")?e.data("maxWidth"):o.maxWidth,o.maxHeight="number"==typeof e.data("maxHeight")?e.data("maxHeight"):o.maxHeight,o.image=null,o.image_url=o.url,o},this.load=function(o,t,i,n){try{var e=function(){var e=a(o.image).addClass("fbx-item fbx-item-image");s.FooBox.options.images.noRightClick&&e.on("contextmenu",function(e){return e.preventDefault(),!1}),t.empty().append(e),r.isFn(i)&&i(s.getSize(o))};o.image&&null!==o.image?e():(o.image=new Image,o.image.onload=function(){o.image.onload=o.image.onerror=null,o.width&&o.height||(o.height=o.image.height,o.width=o.image.width),e()},o.image.onerror=function(){o.image.onload=o.image.onerror=null,o.image=null,r.isFn(n)&&n("An error occurred attempting to load the image.")},o.image.src=o.url)}catch(e){r.isFn(n)&&n(e)}},this.preload=function(e){1!=e.preloaded&&((new Image).src=e.url,e.preloaded=!0)},this.getSize=function(e){var o;return null!=e.width&&null!=e.height?(0<e.maxWidth&&0<e.maxHeight&&(e.maxWidth<e.width||e.maxHeight<e.height)&&(e.width*=o=e.height<e.width?e.maxWidth/e.width:e.maxHeight/e.height,e.height*=o),new r.Size(e.width,e.height)):new r.Size(0,0)},this.hasChanged=function(e){var o;return!!r.isjQuery(e.element)&&(o=s.FooBox.options.images.findUrl(s.FooBox,e.element),e.url!=o)}},r.handlers.register(r.ImageHandler,e)}(jQuery,window.FooBox),function(o){o.Keyboard=function(e){this.FooBox=e;var i=this;this.preinit=function(e){i.handlers.unbind(!0),e.on({"foobox.initialized foobox.reinitialized":i.handlers.initialized,"foobox.setupHtml":i.handlers.setupHtml})},this.destroy=function(){i.handlers.unbind(!0)},this.handlers={unbind:function(e){(e=e||!1)&&i.FooBox.element.off({"foobox.initialized foobox.reinitialized":i.handlers.initialized,"foobox.setupHtml":i.handlers.setupHtml}),i.FooBox.element.off("foobox.afterLoad",i.handlers.afterLoad),o.isjQuery(i.FooBox.modal.element)&&i.FooBox.modal.element.off("keydown.foobox",i.handlers.onKeydown)},initialized:function(){i.handlers.unbind(),1==i.FooBox.options.keyboard.enabled&&(i.FooBox.element.on("foobox.afterLoad",i.handlers.afterLoad),o.isjQuery(i.FooBox.modal.element))&&i.FooBox.modal.element.on("keydown.foobox",i.handlers.onKeydown)},setupHtml:function(e){e.fb.modal.attr("tabindex",0)},afterLoad:function(e){e.fb.modal.trigger("focus")},onKeydown:function(e){var o=i.FooBox.modal,t=i.FooBox.options.keyboard;o.element.hasClass("fbx-show")&&(o.element.hasClass("fbx-fullscreen-mode")||27!==e.which?i.FooBox.items.multiple()&&37===e.which?o.prev():i.FooBox.items.multiple()&&39===e.which&&o.next():o.close(),1==t.preventDefault&&e.preventDefault(),1==t.stopPropagation&&e.stopPropagation(),i.FooBox.raise("foobox.keydown",{keyCode:e.which}))}}},o.addons.register(o.Keyboard,{keyboard:{enabled:!0,preventDefault:!1,stopPropagation:!1}})}((jQuery,window.FooBox)),function(r,l){l.BPInfo=function(e){var o,t=r(window),i=(this.width=t.width(),this.height=t.height(),this.orientation=this.width>this.height?"fbx-landscape":"fbx-portrait",null);if(l.isArray(e))for(var n=0;n<e.length;n++)if((o=e[n])&&o.width&&this.width<=o.width){i=o;break}this.breakpoint=null==i?"fbx-desktop":i.name},l.Responsive=function(e){this.FooBox=e,this.breakpoint={values:[],names:""},this.timers={resize:new l.Timer,ios:new l.Timer};var s=this,a=null;this.preinit=function(e){s.handlers.unbind(!0),e.on("foobox.initialized foobox.reinitialized",s.handlers.initialized)},this.destroy=function(){s.handlers.unbind(!0)},this.handlers={unbind:function(e){(e=e||!1)&&s.FooBox.element.off("foobox.initialized foobox.reinitialized",s.handlers.initialized),r(window).off("resize.foobox",s.handlers.resize),s.FooBox.element.off({"foobox.beforeShow":s.handlers.iosBeforeShow,"foobox.close":s.handlers.iosClose})},initialized:function(){s.handlers.unbind(),s.setup.breakpoints(),s.style(),r(window).on("resize.foobox",s.handlers.resize),l.browser.iOS12OrBelow&&(l.browser.isSafari||l.browser.isChrome)&&s.FooBox.element.on({"foobox.beforeShow":s.handlers.iosBeforeShow,"foobox.close":s.handlers.iosClose})},resize:function(){s.timers.resize.start(function(){s.style();var e,o,t=s.FooBox,i=s.FooBox.items.current();t.modal.element.has("fbx-show")&&null!=i&&(e=i.handler.getSize(i),o=t.modal.element.find(".fbx-item-current"),t.modal.resize(e,o,function(){t.modal.triggerFooGalleryLayout(o);var e=i.handler.getSize(i);o.height()!=e.height&&t.modal.resize(e,o,function(){t.modal.triggerFooGalleryLayout(o)})}))},s.FooBox.options.resizeTimeout)},iosBeforeShow:function(){s.timers.ios.start(s.handlers.ios,s.FooBox.options.iosInterval)},iosClose:function(){s.timers.ios.stop()},ios:function(){var e,o,t,i,n;s.FooBox.modal.element.hasClass("fbx-show")&&(o=window.orientation||0,e=window.innerHeight,i=t=0,n=(o=90===o||-90===o)?screen.availWidth:screen.availHeight,l.browser.isChrome?(t=n-(o?76:56),i=n-(o?0:20)):l.browser.isSafari&&(t=n-88,i=n-(o?0:19)),(null==a||!1===a)&&e<=t?(a=!0,s.iosRedraw()):(null==a||!0===a)&&i<=e&&(a=!1,s.iosRedraw())),s.timers.ios.start(s.handlers.ios,s.FooBox.options.iosInterval)}},this.setup={breakpoints:function(){for(var e in s.breakpoint.values=[],s.breakpoint.names="",s.FooBox.options.breakpoints)s.FooBox.options.breakpoints.hasOwnProperty(e)&&(s.breakpoint.values.push({name:s.fixName(e),width:s.FooBox.options.breakpoints[e]}),s.breakpoint.names+=s.fixName(e)+" ");s.breakpoint.values.sort(function(e,o){return e.width-o.width})}},this.iosRedraw=function(){window.scrollTo(0,document.body.scrollTop),r(window).trigger("resize")},this.fixName=function(e){return/^fbx-[a-zA-Z0-9]/.test(e)?e:"fbx-"+e},this.style=function(){var e=new l.BPInfo(s.breakpoint.values),o=s.FooBox.modal.element;o.removeClass(s.breakpoint.names).removeClass("fbx-desktop fbx-landscape fbx-portrait").addClass(e.breakpoint).addClass(e.orientation),!0===s.FooBox.options.hideNavOnMobile?o.addClass("fbx-no-nav"):o.removeClass("fbx-no-nav")}},l.Responsive.metaCheck=function(){var e=r("meta[name=viewport]"),o=e.attr("content");if(0<e.length&&"string"==typeof o){for(var t=o.split(","),i=!1,n=!1,s=0;s<t.length;s++){var a=l.trim(t[s]);"width"==a.substring(0,5)&&-1!==a.indexOf("device-width")?i=!0:"initial-scale"==a.substring(0,13)&&(n=!0)}i&&!n&&(t.push("initial-scale=1"),o=t.join(","),e.attr("content",o))}},l.addons.register(l.Responsive,{hideNavOnMobile:!1,resizeTimeout:300,breakpoints:{phone:812,tablet:1366},iosInterval:200}),l.Responsive.metaCheck()}(jQuery,window.FooBox),function(a,l){l.Item.prototype.captions=!1,l.Item.prototype.title=null,l.Item.prototype.description=null,l.Item.prototype.caption=null,l.Captions=function(e){this.FooBox=e,this.timers={hover:new l.Timer};var r=this;this.preinit=function(e){r.handlers.unbind(!0),e.on({"foobox.initialized foobox.reinitialized":r.handlers.initialized,"foobox.setupHtml":r.handlers.setupHtml,"foobox.setupOptions":r.handlers.setupOptions,"foobox.parseItem":r.handlers.parseItem,"foobox.onError":r.handlers.onError,"foobox.beforeClose":r.handlers.beforeClose})},this.destroy=function(){r.handlers.unbind(!0)},this.getDataValue=function(e,o,t){if("none"===t)return"";for(var i=null,n=0,s=o.length;n<s;n++){var a=e.data(o[n]);if("string"==typeof a){i=a;break}}return i=null===i?r.text(e,t):i},this.handlers={unbind:function(e){(e=e||!1)&&r.FooBox.element.off({"foobox.initialized foobox.reinitialized":r.handlers.initialized,"foobox.setupHtml":r.handlers.setupHtml,"foobox.setupOptions":r.handlers.setupOptions,"foobox.parseItem":r.handlers.parseItem,"foobox.onError":r.handlers.onError,"foobox.beforeClose":r.handlers.beforeClose}),r.FooBox.element.off({"foobox.beforeLoad":r.handlers.beforeLoad,"foobox.afterLoad":r.handlers.afterLoad}),r.FooBox.modal instanceof l.Modal&&l.isjQuery(r.FooBox.modal.element)&&r.FooBox.modal.element.off("mouseenter.captions mouseleave.captions").find(".fbx-item-current, .fbx-item-next").off("click.captions")},initialized:function(e){r.handlers.unbind(),!0===e.fb.options.captions.enabled&&(e.fb.instance.element.on({"foobox.beforeLoad":r.handlers.beforeLoad,"foobox.afterLoad":r.handlers.afterLoad,"foobox.beforeClose":r.handlers.beforeClose}),-1===e.fb.options.modalClass.indexOf("fbx-caption-toggle-only")&&e.fb.modal.find(".fbx-item-current, .fbx-item-next").on("click.captions",r.handlers.toggleCaptions),!0!==e.fb.options.captions.onlyShowOnHover||e.fb.modal.hasClass("fbx-phone")||e.fb.modal.on("mouseenter.captions",".fbx-inner:not(:has(.fbx-item-error))",r.handlers.mouseenter).on("mouseleave.captions",".fbx-inner:not(:has(.fbx-item-error))",r.handlers.mouseleave))},toggleCaptions:function(e){var o,t;(a(e.target).is("img")||a(e.target).is(".fbx-close-caption")||a(e.target).is(".fbx-open-caption"))&&(o=r.FooBox.items.current(),t=r.FooBox.modal.element,o.captions)&&!t.hasClass("fbx-error")&&(e.preventDefault(),t.find(".fbx-caption").is(".fbx-fade-caption, .fbx-slide-caption, .fbx-hide-caption")?(t.removeClass("fbx-captions-hidden"),r.show()):(t.addClass("fbx-captions-hidden"),r.hide()))},mouseenter:function(){r.timers.hover.start(function(){r.show()},r.FooBox.options.captions.hoverDelay)},mouseleave:function(){r.timers.hover.start(function(){r.hide()},r.FooBox.options.captions.hoverDelay)},setupHtml:function(e){var o=a("<div/>",{class:"fbx-caption"}),t=a("<a/>",{class:"fbx-open-caption",html:"&hellip;"}).on("click.captions",r.handlers.toggleCaptions);"string"==typeof e.fb.options.modalClass&&-1!=e.fb.options.modalClass.indexOf("fbx-sticky-caption")?e.fb.modal.append(o,t):(e.fb.modal.find(".fbx-stage").append(o),e.fb.modal.find(".fbx-inner").append(t))},setupOptions:function(e){e.fb.modal.find(".fbx-caption").addClass(r.animation())},beforeClose:function(e){1!=e.fb.options.captions.onlyShowOnHover&&e.fb.modal.find(".fbx-caption").addClass("fbx-hide-caption")},beforeLoad:function(e){1!=e.fb.options.captions.onlyShowOnHover&&e.fb.modal.find(".fbx-caption").addClass(r.animation())},afterLoad:function(e){var o=e.fb.item;!o||o.error||o.captionLoaded||(e.fb.instance.raise("foobox.alterCaption",{element:e.fb.element,item:o}),o.captionLoaded=!0),1==e.fb.options.captions.onlyShowOnHover?r.update():0==e.fb.options.captions.onlyShowOnClick&&r.show()},onError:function(e){e.fb.modal.find(".fbx-caption").addClass(r.animation())},parseItem:function(e){var o,t,i,n=e.fb.options.captions;function s(e){return n.html?l.safeParse(e):a("<div/>").text(e).html()}e.fb.item.captions&&0!=n.enabled&&(o="",i=null!=e.fb.element?(t=a(e.fb.element).data("titleSource")||a(e.fb.instance.element).data("titleSource")||n.titleSource,i=a(e.fb.element).data("descSource")||a(e.fb.instance.element).data("descSource")||n.descSource,t=r.getDataValue(e.fb.element,n.dataTitle,t),r.getDataValue(e.fb.element,n.dataDesc,i)):(t=e.fb.item.title,e.fb.item.description),t=(null==t||void 0===t?"":t+"").trim(),i=(null==i||void 0===i?"":i+"").trim(),t&&t===i&&(i=""),t=s(t),i=s(i),o="string"==typeof t&&0<t.length?'<div class="fbx-caption-title">'+t+"</div>":"",o="string"==typeof i&&0<i.length?o+'<div class="fbx-caption-desc">'+i+"</div>":o,e.fb.item.title=t,e.fb.item.description=i,e.fb.item.caption=o,e.fb.instance.raise("foobox.createCaption",{element:e.fb.element,item:e.fb.item}))}},this.text=function(e,o){var t;switch(o){case"find":t=l.trim(e.data("title")||e.attr("title")||e.find("img:first").data("title")||e.find("img:first").data("alt")||e.find("img:first").attr("title")||e.find("img:first").attr("alt"));break;case"image_find":t=l.trim(e.find("img:first").data("title")||e.find("img:first").data("alt")||e.find("img:first").attr("title")||e.find("img:first").attr("alt"));break;case"image":t=l.trim(e.find("img:first").data("title")||e.find("img:first").attr("title"));break;case"image_alt":t=l.trim(e.find("img:first").data("alt")||e.find("img:first").attr("alt"));break;case"anchor":t=l.trim(e.data("title")||e.attr("title"));break;default:t=null}return t=r.FooBox.options.captions.prettify?r.prettifier(t):t},this.animation=function(){switch(r.FooBox.options.captions.animation){case"fade":return"fbx-fade-caption";case"slide":return"fbx-slide-caption";default:return"fbx-hide-caption"}},this.hide=function(){var e=r.FooBox.items.current(),o=r.FooBox.modal.element.find(".fbx-caption");r.FooBox.options.captions.enabled&&e&&e.captions&&"string"==typeof e.caption&&0!=e.caption.length?(o.addClass(r.animation()),r.FooBox.raise("foobox.captionsHide",{item:e})):o.addClass("fbx-hide-caption")},this.show=function(){var e=r.FooBox,o=e.items.current(),t=e.modal.element.find(".fbx-caption");!e.options.captions.enabled||!o.captions||"string"!=typeof o.caption||0==o.caption.length||e.modal.element.hasClass("fbx-captions-hidden")||l.isjQuery(o.element)&&o.element.hasClass("no-captions")?t.addClass("fbx-hide-caption"):(r.update(),t.removeClass("fbx-fade-caption fbx-slide-caption fbx-hide-caption"),r.FooBox.raise("foobox.captionsShow",{item:o}))},this.update=function(){var e=r.FooBox.items.current(),o=r.FooBox.modal.element.find(".fbx-caption");o.html(e.caption).find('a[href^="#"]').filter(function(){var e=a(this).attr("href"),e=a(e),o=e.data("fbx_instance")||e.data("fbx_p_instance");return 0<e.length&&o instanceof l.Instance&&(a(this).data("hrefTarget",e.get(0)),!0)}).off("click.captions").on("click.captions",function(e){e.preventDefault();var e=a(this).data("hrefTarget"),o=a(e).data("fbx_instance")||a(e).data("fbx_p_instance");return o instanceof l.Instance&&(r.FooBox.modal.close(),o.items.indexes.set(e.index),o.modal.show()),!1}),a("<a/>",{class:"fbx-close-caption",html:"&times;"}).on("click.captions",r.handlers.toggleCaptions).prependTo(o)},this.prettifier=function(e){return"string"!=typeof e?null:(e=e.replace(/\s*-\d+/g,"").replace(/\s*_\d+/g,"").replace(/-/g," ").replace(/_/g," ")).replace(/\w\S*/g,function(e){return-1!=e.indexOf("#")?e:e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}},l.addons.register(l.Captions,{captions:{html:!0,animation:"slide",enabled:!0,descSource:"find",hoverDelay:300,maxHeight:.4,onlyShowOnHover:!1,onlyShowOnClick:!1,overrideDesc:!1,overrideTitle:!1,prettify:!1,titleSource:"image_find",dataTitle:["captionTitle","title"],dataDesc:["captionDesc","description"]}})}(jQuery,window.FooBox),function(l,d){d.Wordpress=function(e){this.FooBox=e;var o=this;this.preinit=function(e){o.handlers.unbind(!0),e.on("foobox.createCaption",o.handlers.onCreateCaption)},this.destroy=function(){o.handlers.unbind(!0)},this.handlers={unbind:function(e){(e=e||!1)&&o.FooBox.element.off("foobox.createCaption",o.handlers.onCreateCaption)},onCreateCaption:function(e){var o=e.fb.options,t=e.fb.instance.element,i=e.fb.item.element,n=e.fb.item.title,s=e.fb.item.description;if(1==o.wordpress.enabled&&d.isjQuery(i)){var a=i.data("captionTitle")||i.data("title"),r=i.data("captionDesc")||i.data("description");if(t.hasClass("gallery"))!1===o.captions.overrideTitle&&(n=a||i.parents(".gallery-item:first").find(".wp-caption-text:first").html()||i.parents(".gallery-item:first").find(".gallery-caption:first").html()||n||""),!1===o.captions.overrideDesc&&(s=r||i.find("img").attr("alt")||s||"");else if(t.hasClass("wp-caption")||i.hasClass("wp-caption"))!1===o.captions.overrideTitle&&(n=a||i.find("img").attr("title")||i.parents(".wp-caption:first").find(".wp-caption-text:first").html()||n||""),!1===o.captions.overrideDesc&&(s=r||i.find("img").attr("alt")||s||"");else if(0<i.parents(".wp-caption:first").length)!1===o.captions.overrideTitle&&(n=a||i.parents(".wp-caption:first").find("img").attr("title")||i.parents(".wp-caption:first").find(".wp-caption-text:first").html()||n||""),!1===o.captions.overrideDesc&&(s=r||i.parents(".wp-caption:first").find("img").attr("alt")||s||"");else if(t.hasClass("tiled-gallery"))!1===o.captions.overrideTitle&&(n=a||i.parents(".tiled-gallery-item:first").find(".tiled-gallery-caption").html()||i.find("img").data("image-title")||i.find("img").attr("title")||n||""),!1===o.captions.overrideDesc&&(s=r||d.trim(i.find("img").data("image-description")).replace(/(^<p>)|(<\/p>$)/gi,"")||s||"");else{if(!t.hasClass("wp-block-gallery")&&!t.hasClass("wp-block-image"))return;!1===o.captions.overrideTitle&&(n=a||i.parents("figure:first").find("figcaption").html()||n||""),!1===o.captions.overrideDesc&&(s=r||s||"")}n=(n+="")||"",s=(s+="")||"",t=l("<div/>"),a=t.html(n).text(),i=t.html(s).text();d.trim(n)!==d.trim(s)&&a!==i||(s=null),o="string"==typeof n&&0<n.length?'<div class="fbx-caption-title">'+n+"</div>":"",o="string"==typeof s&&0<s.length?o+'<div class="fbx-caption-desc">'+s+"</div>":o,e.fb.item.title=n,e.fb.item.description=s,e.fb.item.caption=o}}}},d.addons.register(d.Wordpress,{wordpress:{enabled:!1}})}(jQuery,window.FooBox),function(u,x){x.Pan=function(e){this.FooBox=e;var t,i,n,s,a=this,r=!1,l=!1,d=null,c=null,h=null,f=null,p=null,m=0;this.preinit=function(e){a.handlers.unbind(!0),e.on({"foobox.initialized foobox.reinitialized":a.handlers.initialized})},this.destroy=function(){a.handlers.unbind(!0)},this.setOverview=function(){var e=parseInt(f.css("max-width")),o=parseInt(f.css("max-height")),e=e/d.width,o=o/d.height,o=(m=o<e?o:e,d.width*m),e=d.height*m;f.width(o).height(e).css("background-image","url("+d.url+")")},this.setViewport=function(){var e=h.width(),o=h.height(),e=e*m,o=o*m;p.width(e).height(o)},this.disableCaptionImageClick=function(){var e=a.FooBox.modal.element,o=x.objects.get("addons",a.FooBox,function(e){return e instanceof x.Captions});o&&e.find(".fbx-item-current, .fbx-item-next").off("click.captions",o.handlers.toggleCaptions)},this.enableCaptionImageClick=function(){var e=a.FooBox.modal.element,o=x.objects.get("addons",a.FooBox,function(e){return e instanceof x.Captions});o&&e.find(".fbx-item-current, .fbx-item-next").on("click.captions",o.handlers.toggleCaptions)},this.handlers={unbind:function(e){(e=e||!1)&&a.FooBox.element.off({"foobox.initialized foobox.reinitialized":a.handlers.initialized}),a.FooBox.element.off({"foobox.afterLoad":a.handlers.onAfterLoad,"foobox.showOverflow":a.handlers.onShowOverflow,"foobox.hideOverflow foobox.beforeLoad":a.handlers.onHideOverflow}),a.FooBox.modal instanceof x.Modal&&x.isjQuery(a.FooBox.modal.element)&&a.FooBox.modal.element.find(".fbx-stage").off({mousedown:a.handlers.onMouseDown,mousemove:a.handlers.onMouseMove,mouseup:a.handlers.onMouseUp}).removeClass("fbx-pannable fbx-panning")},initialized:function(e){a.handlers.unbind(),!0===e.fb.options.pan.enabled&&a.FooBox.element.on({"foobox.close":a.handlers.onMouseUp,"foobox.afterLoad":a.handlers.onAfterLoad,"foobox.showOverflow":a.handlers.onShowOverflow,"foobox.hideOverflow foobox.beforeLoad":a.handlers.onHideOverflow})},onAfterLoad:function(e){!0===r&&"image"==e.fb.item.handler.type&&(a.setOverview(),a.setViewport())},onShowOverflow:function(e){"image"==e.fb.item.handler.type&&(!0===r?(a.setOverview(),a.setViewport()):(r=!0,a.disableCaptionImageClick(),d=e.fb.item,h=a.FooBox.modal.element.addClass("fbx-pannable-item").find(".fbx-stage").on({mousedown:a.handlers.onMouseDown,mousemove:a.handlers.onMouseMove,"mouseup mouseleave":a.handlers.onMouseUp}).addClass("fbx-pannable"),c=e.fb.container,!0===e.fb.options.pan.showOverview&&(f=u("<div/>",{class:"fbx-pan-overview"}).addClass(e.fb.options.pan.position).on("click",a.handlers.onOverviewClick).appendTo(h),p=u("<div/>",{class:"fbx-pan-viewport"}).appendTo(f),c.on("scroll",a.handlers.onScroll),a.setOverview(),a.setViewport())))},onHideOverflow:function(e){!0===r&&(r=!1,a.enableCaptionImageClick(),!0===e.fb.options.pan.showOverview&&f.remove(),c.off("scroll",a.handlers.onScroll),h.off({mousedown:a.handlers.onMouseDown,mousemove:a.handlers.onMouseMove,"mouseup mouseleave":a.handlers.onMouseUp}).removeClass("fbx-pannable fbx-panning"),a.FooBox.modal.element.removeClass("fbx-pannable-item"))},onMouseDown:function(e){var o;!0===r&&(e.preventDefault(),h.addClass("fbx-panning"),o=c.get(0),l=!0,t=e.pageX,i=e.pageY,n=o.scrollLeft,s=o.scrollTop)},onMouseMove:function(e){var o;!0===l&&!0===r&&((o=c.get(0)).scrollLeft=n-(e.pageX-t),o.scrollTop=s-(e.pageY-i))},onMouseUp:function(){!0===r&&(l=!1,h.removeClass("fbx-panning"),s=n=i=t=0)},onScroll:function(){var e=c.get(0),o=e.scrollTop/d.height*100,e=e.scrollLeft/d.width*100;p.css({top:o+"%",left:e+"%"})},onOverviewClick:function(e){var o=u(this).offset(),t=(e.pageX-o.left)/m,e=(e.pageY-o.top)/m,o=t-c.width()/2,t=e-c.height()/2;c.animate({scrollTop:t,scrollLeft:o},300)}}},x.addons.register(x.Pan,{pan:{enabled:!0,showOverview:!0,position:"fbx-top-right"}})}(jQuery,window.FooBox),function(i){i.Swipe=function(e){this.FooBox=e,this.isMoving=!1;var o,t=this;this.preinit=function(e){t.handlers.unbind(!0),e.on("foobox.initialized foobox.reinitialized",t.handlers.initialized)},this.destroy=function(){t.handlers.unbind(!0)},this.handlers={unbind:function(e){(e=e||!1)&&t.FooBox.element.off("foobox.initialized foobox.reinitialized",t.handlers.initialized),t.FooBox.modal instanceof i.Modal&&i.isjQuery(t.FooBox.modal.element)&&t.FooBox.modal.element.off({touchstart:t.handlers.onTouchStart,touchmove:t.handlers.onTouchMove})},initialized:function(e){t.handlers.unbind(),!0===e.fb.options.swipe.enabled&&e.fb.modal.on("touchstart",t.handlers.onTouchStart)},onTouchStart:function(e){e=e.originalEvent.touches||e.touches;1==e.length&&t.FooBox.items.multiple()&&(o=e[0].pageX,t.isMoving=!0,t.FooBox.modal.element.on("touchmove",t.handlers.onTouchMove))},onTouchMove:function(e){t.isMoving&&(e=(e.originalEvent.touches||e.touches)[0].pageX,e=o-e,Math.abs(e)>=t.FooBox.options.swipe.min)&&(t.cancelTouch(),0<e?(t.FooBox.raise("foobox.swipeRight"),t.FooBox.modal.next()):(t.FooBox.raise("foobox.swipeLeft"),t.FooBox.modal.prev()))}},this.cancelTouch=function(){t.FooBox.modal.element.off("touchmove",t.handlers.onTouchMove),o=null,t.isMoving=!1}},i.addons.register(i.Swipe,{swipe:{enabled:!0,min:80}})}((jQuery,window.FooBox)),function(t,e,i){if(i){if(i.o&&i.customOptions&&t.extend(!0,i.o,i.customOptions),i.init=function(){if(t(".fbx-link").removeClass("fbx-link"),FooBox.isFn(i.pre))try{i.pre(t)}catch(e){console.error(e)}if(i.disableOthers&&(t("a.thickbox").removeClass("thickbox").unbind("click"),t("#TB_overlay, #TB_load, #TB_window").remove()),t.each(i.selectors,function(e,o){t(o).foobox(i.o)}),i.disableOthers&&t(".fbx-link").unbind(".prettyphoto").unbind(".fb"),FooBox.isFn(i.post))try{i.post(t)}catch(e){console.error(e)}},e.once=function(){var e=t("body");i.init(),t(document).trigger("foobox-after-init"),e.on("post-load",i.init)},i.ready?e.ready(e.once):t(e.once),FooBox.isFn(i.custom))try{i.custom(t)}catch(e){console.error(e)}}else console.log("No configuration for FooBox found.")}(jQuery,window.FooBox,window.FOOBOX);
/*!
 * Jarallax v2.2.1 (https://github.com/nk-o/jarallax)
 * Copyright 2024 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).jarallax=t()}(this,(function(){"use strict";function e(e){"complete"===document.readyState||"interactive"===document.readyState?e():document.addEventListener("DOMContentLoaded",e,{capture:!0,once:!0,passive:!0})}let t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var i=t,o={type:"scroll",speed:.5,containerClass:"jarallax-container",imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null,videoClass:"jarallax-video",videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,disableVideo:!1,onVideoInsert:null,onVideoWorkerInit:null};const{navigator:n}=i,a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n.userAgent);let s,l,r;function c(){s=i.innerWidth||document.documentElement.clientWidth,a?(!r&&document.body&&(r=document.createElement("div"),r.style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(r)),l=(r?r.clientHeight:0)||i.innerHeight||document.documentElement.clientHeight):l=i.innerHeight||document.documentElement.clientHeight}function p(){return{width:s,height:l}}c(),i.addEventListener("resize",c),i.addEventListener("orientationchange",c),i.addEventListener("load",c),e((()=>{c()}));const m=[];function d(){if(!m.length)return;const{width:e,height:t}=p();m.forEach(((i,o)=>{const{instance:n,oldData:a}=i;if(!n.isVisible())return;const s=n.$item.getBoundingClientRect(),l={width:s.width,height:s.height,top:s.top,bottom:s.bottom,wndW:e,wndH:t},r=!a||a.wndW!==l.wndW||a.wndH!==l.wndH||a.width!==l.width||a.height!==l.height,c=r||!a||a.top!==l.top||a.bottom!==l.bottom;m[o].oldData=l,r&&n.onResize(),c&&n.onScroll()})),i.requestAnimationFrame(d)}const g=new i.IntersectionObserver((e=>{e.forEach((e=>{e.target.jarallax.isElementInViewport=e.isIntersecting}))}),{rootMargin:"50px"});const{navigator:u}=i;let f=0;class h{constructor(e,t){const i=this;i.instanceID=f,f+=1,i.$item=e,i.defaults={...o};const n=i.$item.dataset||{},a={};if(Object.keys(n).forEach((e=>{const t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==i.defaults[t]&&(a[t]=n[e])})),i.options=i.extend({},i.defaults,a,t),i.pureOptions=i.extend({},i.options),Object.keys(i.options).forEach((e=>{"true"===i.options[e]?i.options[e]=!0:"false"===i.options[e]&&(i.options[e]=!1)})),i.options.speed=Math.min(2,Math.max(-1,parseFloat(i.options.speed))),"string"==typeof i.options.disableParallax&&(i.options.disableParallax=new RegExp(i.options.disableParallax)),i.options.disableParallax instanceof RegExp){const e=i.options.disableParallax;i.options.disableParallax=()=>e.test(u.userAgent)}if("function"!=typeof i.options.disableParallax){const e=i.options.disableParallax;i.options.disableParallax=()=>!0===e}if("string"==typeof i.options.disableVideo&&(i.options.disableVideo=new RegExp(i.options.disableVideo)),i.options.disableVideo instanceof RegExp){const e=i.options.disableVideo;i.options.disableVideo=()=>e.test(u.userAgent)}if("function"!=typeof i.options.disableVideo){const e=i.options.disableVideo;i.options.disableVideo=()=>!0===e}let s=i.options.elementInViewport;s&&"object"==typeof s&&void 0!==s.length&&([s]=s),s instanceof Element||(s=null),i.options.elementInViewport=s,i.image={src:i.options.imgSrc||null,$container:null,useImgTag:!1,position:"fixed"},i.initImg()&&i.canInitParallax()&&i.init()}css(e,t){return function(e,t){return"string"==typeof t?i.getComputedStyle(e).getPropertyValue(t):(Object.keys(t).forEach((i=>{e.style[i]=t[i]})),e)}(e,t)}extend(e,...t){return function(e,...t){return e=e||{},Object.keys(t).forEach((i=>{t[i]&&Object.keys(t[i]).forEach((o=>{e[o]=t[i][o]}))})),e}(e,...t)}getWindowData(){const{width:e,height:t}=p();return{width:e,height:t,y:document.documentElement.scrollTop}}initImg(){const e=this;let t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(e.options.imgSrc?(t=new Image,t.src=e.options.imgSrc):t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}canInitParallax(){return!this.options.disableParallax()}init(){const e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};let o={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden"};if(!e.options.keepImg){const t=e.$item.getAttribute("style");if(t&&e.$item.setAttribute("data-jarallax-original-styles",t),e.image.useImgTag){const t=e.image.$item.getAttribute("style");t&&e.image.$item.setAttribute("data-jarallax-original-styles",t)}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),"fixed"===this.image.position&&e.css(e.image.$container,{"-webkit-clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)","clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}),e.image.$container.setAttribute("id",`jarallax-container-${e.instanceID}`),e.options.containerClass&&e.image.$container.setAttribute("class",e.options.containerClass),e.$item.appendChild(e.image.$container),e.image.useImgTag?o=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"max-width":"none"},t,o):(e.image.$item=document.createElement("div"),e.image.src&&(o=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":e.image.bgImage||`url("${e.image.src}")`},t,o))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position){const t=function(e){const t=[];for(;null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(e.$item).filter((e=>{const t=i.getComputedStyle(e),o=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return o&&"none"!==o||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}));e.image.position=t.length?"absolute":"fixed"}var n;o.position=e.image.position,e.css(e.image.$item,o),e.image.$container.appendChild(e.image.$item),e.onResize(),e.onScroll(!0),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),n=e,m.push({instance:n}),1===m.length&&i.requestAnimationFrame(d),g.observe(n.options.elementInViewport||n.$item)}destroy(){const e=this;var t;t=e,m.forEach(((e,i)=>{e.instance.instanceID===t.instanceID&&m.splice(i,1)})),g.unobserve(t.options.elementInViewport||t.$item);const i=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),i?e.$item.setAttribute("style",i):e.$item.removeAttribute("style"),e.image.useImgTag){const t=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",i):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}coverImage(){const e=this,{height:t}=p(),i=e.image.$container.getBoundingClientRect(),o=i.height,{speed:n}=e.options,a="scroll"===e.options.type||"scroll-opacity"===e.options.type;let s=0,l=o,r=0;return a&&(n<0?(s=n*Math.max(o,t),t<o&&(s-=n*(o-t))):s=n*(o+t),n>1?l=Math.abs(s-t):n<0?l=s/n+Math.abs(s):l+=(t-o)*(1-n),s/=2),e.parallaxScrollDistance=s,r=a?(t-l)/2:(o-l)/2,e.css(e.image.$item,{height:`${l}px`,marginTop:`${r}px`,left:"fixed"===e.image.position?`${i.left}px`:"0",width:`${i.width}px`}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:l,marginTop:r},container:i}}isVisible(){return this.isElementInViewport||!1}onScroll(e){const t=this;if(!e&&!t.isVisible())return;const{height:i}=p(),o=t.$item.getBoundingClientRect(),n=o.top,a=o.height,s={},l=Math.max(0,n),r=Math.max(0,a+n),c=Math.max(0,-n),m=Math.max(0,n+a-i),d=Math.max(0,a-(n+a-i)),g=Math.max(0,-n+i-a),u=1-(i-n)/(i+a)*2;let f=1;if(a<i?f=1-(c||m)/a:r<=i?f=r/i:d<=i&&(f=d/i),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(s.transform="translate3d(0,0,0)",s.opacity=f),"scale"===t.options.type||"scale-opacity"===t.options.type){let e=1;t.options.speed<0?e-=t.options.speed*f:e+=t.options.speed*(1-f),s.transform=`scale(${e}) translate3d(0,0,0)`}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){let e=t.parallaxScrollDistance*u;"absolute"===t.image.position&&(e-=n),s.transform=`translate3d(0,${e}px,0)`}t.css(t.image.$item,s),t.options.onScroll&&t.options.onScroll.call(t,{section:o,beforeTop:l,beforeTopEnd:r,afterTop:c,beforeBottom:m,beforeBottomEnd:d,afterBottom:g,visiblePercent:f,fromViewportCenter:u})}onResize(){this.coverImage()}}const b=function(e,t,...i){("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);const o=e.length;let n,a=0;for(;a<o;a+=1)if("object"==typeof t||void 0===t?e[a].jarallax||(e[a].jarallax=new h(e[a],t)):e[a].jarallax&&(n=e[a].jarallax[t].apply(e[a].jarallax,i)),void 0!==n)return n;return e};b.constructor=h;const y=i.jQuery;if(void 0!==y){const e=function(...e){Array.prototype.unshift.call(e,this);const t=b.apply(i,e);return"object"!=typeof t?t:this};e.constructor=b.constructor;const t=y.fn.jarallax;y.fn.jarallax=e,y.fn.jarallax.noConflict=function(){return y.fn.jarallax=t,this}}return e((()=>{b(document.querySelectorAll("[data-jarallax]"))})),b}));//# sourceMappingURL=jarallax.min.js.map;
/*!
 * Video Extension for Jarallax v2.2.1 (https://github.com/nk-o/jarallax)
 * Copyright 2024 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).jarallaxVideo=t()}(this,(function(){"use strict";
/*!
 * Video Worker v2.2.0 (https://github.com/nk-o/video-worker)
 * Copyright 2024 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/video-worker/blob/master/LICENSE)
 */var e={autoplay:!1,loop:!1,mute:!1,volume:100,showControls:!0,accessibilityHidden:!1,startTime:0,endTime:0};let t,o=0;class i{type="none";constructor(t,o){const i=this;i.url=t,i.options_default={...e},i.options=function(e,...t){return e=e||{},Object.keys(t).forEach((o=>{t[o]&&Object.keys(t[o]).forEach((i=>{e[i]=t[o][i]}))})),e}({},i.options_default,o),i.videoID=i.constructor.parseURL(t),i.videoID&&i.init()}isValid(){return!!this.videoID}init(){const e=this;e.ID=o,o+=1,e.playerID=`VideoWorker-${e.ID}`}on(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}off(e,t){this.userEventsList&&this.userEventsList[e]&&(t?this.userEventsList[e].forEach(((o,i)=>{o===t&&(this.userEventsList[e][i]=!1)})):delete this.userEventsList[e])}fire(e,...t){this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach((e=>{e&&e.apply(this,t)}))}static parseURL(e){return!1}play(e){}pause(){}mute(){}unmute(){}setVolume(e=!1){}getVolume(e){}getMuted(e){}setCurrentTime(e=!1){}getCurrentTime(e){}getImageURL(e){}getVideo(e){}}t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a=t;function n(){this.doneCallbacks=[],this.failCallbacks=[]}n.prototype={execute(e,t){let o=e.length;for(t=Array.prototype.slice.call(t);o;)o-=1,e[o].apply(null,t)},resolve(...e){this.execute(this.doneCallbacks,e)},reject(...e){this.execute(this.failCallbacks,e)},done(e){this.doneCallbacks.push(e)},fail(e){this.failCallbacks.push(e)}};let s=0,r=0;const l=new n;let p=0,d=0;const u=new n;function m(e,t){let o=!1;return Object.keys(m.providers).forEach((i=>{!o&&m.providers[i].parseURL(e)&&(o=new m.providers[i](e,t))})),o||new i(e,t)}let y;m.BaseClass=i,m.providers={Youtube:class extends i{type="youtube";static parseURL(e){const t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=)([^#\&\?]*).*/);return!(!t||11!==t[1].length)&&t[1]}init(){super.init(),function(){if(s)return;s=!0;let e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.src="https://www.youtube.com/iframe_api",t.appendChild(e),t=null,e=null}()}play(e){const t=this;t.player&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),a.YT.PlayerState.PLAYING!==t.player.getPlayerState()&&(t.options.endTime&&!t.options.loop?t.getCurrentTime((e=>{e<t.options.endTime&&t.player.playVideo()})):t.player.playVideo()))}pause(){const e=this;e.player&&e.player.pauseVideo&&a.YT.PlayerState.PLAYING===e.player.getPlayerState()&&e.player.pauseVideo()}mute(){const e=this;e.player&&e.player.mute&&e.player.mute()}unmute(){const e=this;e.player&&e.player.unMute&&e.player.unMute()}setVolume(e=!1){const t=this;t.player&&"number"==typeof e&&t.player.setVolume&&t.player.setVolume(e)}getVolume(e){const t=this;t.player?t.player.getVolume&&e(t.player.getVolume()):e(!1)}getMuted(e){const t=this;t.player?t.player.isMuted&&e(t.player.isMuted()):e(null)}setCurrentTime(e=!1){const t=this;t.player&&"number"==typeof e&&t.player.seekTo&&t.player.seekTo(e)}getCurrentTime(e){const t=this;t.player&&t.player.getCurrentTime&&e(t.player.getCurrentTime())}getImageURL(e){const t=this;if(t.videoImage)return void e(t.videoImage);const o=["maxresdefault","sddefault","hqdefault","0"];let i=0;const a=new Image;a.onload=function(){120!==(this.naturalWidth||this.width)||i===o.length-1?(t.videoImage=`https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`,e(t.videoImage)):(i+=1,this.src=`https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`)},a.src=`https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`}getVideo(e){const t=this;t.$video?e(t.$video):function(e){void 0!==a.YT&&0!==a.YT.loaded||r?"object"==typeof a.YT&&1===a.YT.loaded?e():l.done((()=>{e()})):(r=1,a.onYouTubeIframeAPIReady=function(){a.onYouTubeIframeAPIReady=null,l.resolve("done"),e()})}((()=>{let o,i,n;t.$video||(o=document.createElement("div"),o.style.display="none"),t.playerOptions={host:"https://www.youtube-nocookie.com",videoId:t.videoID,playerVars:{autohide:1,rel:0,autoplay:0,playsinline:1}},t.options.showControls||(t.playerOptions.playerVars.iv_load_policy=3,t.playerOptions.playerVars.modestbranding=1,t.playerOptions.playerVars.controls=0,t.playerOptions.playerVars.showinfo=0,t.playerOptions.playerVars.disablekb=1),t.playerOptions.events={onReady(e){if(t.options.mute?e.target.mute():"number"==typeof t.options.volume&&e.target.setVolume(t.options.volume),t.options.autoplay&&t.play(t.options.startTime),t.fire("ready",e),t.options.loop&&!t.options.endTime){const e=.1;t.options.endTime=t.player.getDuration()-e}setInterval((()=>{t.getVolume((o=>{t.options.volume!==o&&(t.options.volume=o,t.fire("volumechange",e))}))}),150)},onStateChange(e){t.options.loop&&e.data===a.YT.PlayerState.ENDED&&t.play(t.options.startTime),i||e.data!==a.YT.PlayerState.PLAYING||(i=1,t.fire("started",e)),e.data===a.YT.PlayerState.PLAYING&&t.fire("play",e),e.data===a.YT.PlayerState.PAUSED&&t.fire("pause",e),e.data===a.YT.PlayerState.ENDED&&t.fire("ended",e),e.data===a.YT.PlayerState.PLAYING?n=setInterval((()=>{t.fire("timeupdate",e),t.options.endTime&&t.player.getCurrentTime()>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),150):clearInterval(n)},onError(e){t.fire("error",e)}};const s=!t.$video;if(s){const e=document.createElement("div");e.setAttribute("id",t.playerID),o.appendChild(e),document.body.appendChild(o)}t.player=t.player||new a.YT.Player(t.playerID,t.playerOptions),s&&(t.$video=document.getElementById(t.playerID),t.options.accessibilityHidden&&(t.$video.setAttribute("tabindex","-1"),t.$video.setAttribute("aria-hidden","true")),t.videoWidth=parseInt(t.$video.getAttribute("width"),10)||1280,t.videoHeight=parseInt(t.$video.getAttribute("height"),10)||720),e(t.$video)}))}},Vimeo:class extends i{type="vimeo";static parseURL(e){const t=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);return!(!t||!t[3])&&t[3]}static parseURLHash(e){const t=e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);return t&&5===t.length?t[4]:null}init(){super.init(),function(){if(p)return;if(p=!0,void 0!==a.Vimeo)return;let e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.src="https://player.vimeo.com/api/player.js",t.appendChild(e),t=null,e=null}()}play(e){const t=this;t.player&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then((e=>{e&&(t.options.endTime&&!t.options.loop?t.getCurrentTime((e=>{e<t.options.endTime&&t.player.play()})):t.player.play())})))}pause(){const e=this;e.player&&e.player.getPaused().then((t=>{t||e.player.pause()}))}mute(){const e=this;e.player&&e.player.setVolume&&e.setVolume(0)}unmute(){const e=this;e.player&&e.player.setVolume&&e.setVolume(e.options.volume||100)}setVolume(e=!1){const t=this;t.player&&"number"==typeof e&&t.player.setVolume&&t.player.setVolume(e/100)}getVolume(e){const t=this;t.player?t.player.getVolume&&t.player.getVolume().then((t=>{e(100*t)})):e(!1)}getMuted(e){const t=this;t.player?t.player.getVolume&&t.player.getVolume().then((t=>{e(!!t)})):e(null)}setCurrentTime(e=!1){const t=this;t.player&&"number"==typeof e&&t.player.setCurrentTime&&t.player.setCurrentTime(e)}getCurrentTime(e){const t=this;t.player&&t.player.getCurrentTime&&t.player.getCurrentTime().then((t=>{e(t)}))}getImageURL(e){const t=this;if(t.videoImage)return void e(t.videoImage);let o=a.innerWidth||1920;a.devicePixelRatio&&(o*=a.devicePixelRatio),o=Math.min(o,1920);let i=new XMLHttpRequest;i.open("GET",`https://vimeo.com/api/oembed.json?url=${t.url}&width=${o}`,!0),i.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){const o=JSON.parse(this.responseText);o.thumbnail_url&&(t.videoImage=o.thumbnail_url,e(t.videoImage))}},i.send(),i=null}getVideo(e){const t=this;t.$video?e(t.$video):function(e){if(void 0!==a.Vimeo||d)void 0!==a.Vimeo?e():u.done((()=>{e()}));else{d=1;const t=setInterval((()=>{void 0!==a.Vimeo&&(clearInterval(t),u.resolve("done"),e())}),20)}}((()=>{let o;t.$video||(o=document.createElement("div"),o.style.display="none"),t.playerOptions={dnt:1,id:t.videoID,autopause:0,transparent:0,autoplay:t.options.autoplay?1:0,loop:t.options.loop?1:0,muted:t.options.mute||0===t.options.volume?1:0};const i=t.constructor.parseURLHash(t.url);if(i&&(t.playerOptions.h=i),t.options.showControls||(t.playerOptions.controls=0),!t.options.showControls&&t.options.loop&&t.options.autoplay&&(t.playerOptions.background=1),!t.$video){let e="";Object.keys(t.playerOptions).forEach((o=>{""!==e&&(e+="&"),e+=`${o}=${encodeURIComponent(t.playerOptions[o])}`})),t.$video=document.createElement("iframe"),t.$video.setAttribute("id",t.playerID),t.$video.setAttribute("src",`https://player.vimeo.com/video/${t.videoID}?${e}`),t.$video.setAttribute("frameborder","0"),t.$video.setAttribute("mozallowfullscreen",""),t.$video.setAttribute("allowfullscreen",""),t.$video.setAttribute("title","Vimeo video player"),t.options.accessibilityHidden&&(t.$video.setAttribute("tabindex","-1"),t.$video.setAttribute("aria-hidden","true")),o.appendChild(t.$video),document.body.appendChild(o)}let n;t.player=t.player||new a.Vimeo.Player(t.$video,t.playerOptions),t.options.mute||"number"!=typeof t.options.volume||t.setVolume(t.options.volume),t.options.startTime&&t.options.autoplay&&t.player.setCurrentTime(t.options.startTime),t.player.getVideoWidth().then((e=>{t.videoWidth=e||1280})),t.player.getVideoHeight().then((e=>{t.videoHeight=e||720})),t.player.on("timeupdate",(e=>{n||(t.fire("started",e),n=1),t.fire("timeupdate",e),t.options.endTime&&e.seconds>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())})),t.player.on("play",(e=>{t.fire("play",e),t.options.startTime&&0===e.seconds&&t.play(t.options.startTime)})),t.player.on("pause",(e=>{t.fire("pause",e)})),t.player.on("ended",(e=>{t.fire("ended",e)})),t.player.on("loaded",(e=>{t.fire("ready",e)})),t.player.on("volumechange",(e=>{t.getVolume((e=>{t.options.volume=e})),t.fire("volumechange",e)})),t.player.on("error",(e=>{t.fire("error",e)})),e(t.$video)}))}},Local:class extends i{type="local";static parseURL(e){const t=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),o={};let i=0;return t.forEach((e=>{const t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(o["ogv"===t[1]?"ogg":t[1]]=t[2],i=1)})),!!i&&o}play(e){const t=this;t.player&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&(t.options.endTime&&!t.options.loop?t.getCurrentTime((e=>{e<t.options.endTime&&t.player.play()})):t.player.play()))}pause(){const e=this;e.player&&!e.player.paused&&e.player.pause()}mute(){this.player&&(this.$video.muted=!0)}unmute(){this.player&&(this.$video.muted=!1)}setVolume(e=!1){this.player&&"number"==typeof e&&(this.$video.volume=e/100)}getVolume(e){this.player?e(100*this.$video.volume):e(!1)}getMuted(e){this.player?e(this.$video.muted):e(null)}setCurrentTime(e=!1){this.player&&"number"==typeof e&&(this.$video.currentTime=e)}getCurrentTime(e){this.player&&e(this.player.currentTime)}getImageURL(e){const t=this;t.videoImage&&e(t.videoImage)}getVideo(e){const t=this;if(t.$video)return void e(t.$video);let o,i;t.$video||(o=document.createElement("div"),o.style.display="none"),t.$video||(t.$video=document.createElement("video"),t.player=t.$video,t.options.showControls&&(t.$video.controls=!0),"number"==typeof t.options.volume&&t.setVolume(t.options.volume),t.options.mute&&t.mute(),t.options.loop&&(t.$video.loop=!0),t.$video.setAttribute("playsinline",""),t.$video.setAttribute("webkit-playsinline",""),t.options.accessibilityHidden&&(t.$video.setAttribute("tabindex","-1"),t.$video.setAttribute("aria-hidden","true")),t.$video.setAttribute("id",t.playerID),o.appendChild(t.$video),document.body.appendChild(o),Object.keys(t.videoID).forEach((e=>{!function(e,t,o){const i=document.createElement("source");i.src=t,i.type=o,e.appendChild(i)}(t.$video,t.videoID[e],`video/${e}`)}))),t.player.addEventListener("playing",(e=>{i||t.fire("started",e),i=1})),t.player.addEventListener("timeupdate",(function(e){t.fire("timeupdate",e),t.options.endTime&&this.currentTime>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())})),t.player.addEventListener("play",(e=>{t.fire("play",e)})),t.player.addEventListener("pause",(e=>{t.fire("pause",e)})),t.player.addEventListener("ended",(e=>{t.fire("ended",e)})),t.player.addEventListener("loadedmetadata",(function(){t.videoWidth=this.videoWidth||1280,t.videoHeight=this.videoHeight||720,t.fire("ready"),t.options.autoplay&&t.play(t.options.startTime)})),t.player.addEventListener("volumechange",(e=>{t.getVolume((e=>{t.options.volume=e})),t.fire("volumechange",e)})),t.player.addEventListener("error",(e=>{t.fire("error",e)})),e(t.$video)}}},y="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c,v=y;function h(e=v.jarallax){if(void 0===e)return;const t=e.constructor,o=t.prototype.onScroll;t.prototype.onScroll=function(){const e=this;o.apply(e);!e.isVideoInserted&&e.video&&(!e.options.videoLazyLoading||e.isElementInViewport)&&!e.options.disableVideo()&&(e.isVideoInserted=!0,e.video.getVideo((t=>{const o=t.parentNode;e.css(t,{position:e.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",margin:0,zIndex:-1}),e.$video=t,"local"===e.video.type&&(e.image.src?e.$video.setAttribute("poster",e.image.src):e.image.$item&&"IMG"===e.image.$item.tagName&&e.image.$item.src&&e.$video.setAttribute("poster",e.image.$item.src)),e.options.videoClass&&e.$video.setAttribute("class",`${e.options.videoClass} ${e.options.videoClass}-${e.video.type}`),e.image.$container.appendChild(t),o.parentNode.removeChild(o),e.options.onVideoInsert&&e.options.onVideoInsert.call(e)})))};const i=t.prototype.coverImage;t.prototype.coverImage=function(){const e=this,t=i.apply(e),o=!!e.image.$item&&e.image.$item.nodeName;if(t&&e.video&&o&&("IFRAME"===o||"VIDEO"===o)){let i=t.image.height,a=i*e.image.width/e.image.height,n=(t.container.width-a)/2,s=t.image.marginTop;t.container.width>a&&(a=t.container.width,i=a*e.image.height/e.image.width,n=0,s+=(t.image.height-i)/2),"IFRAME"===o&&(i+=400,s-=200),e.css(e.$video,{width:`${a}px`,marginLeft:`${n}px`,height:`${i}px`,marginTop:`${s}px`})}return t};const a=t.prototype.initImg;t.prototype.initImg=function(){const e=this,t=a.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t};const n=t.prototype.canInitParallax;t.prototype.canInitParallax=function(){const e=this;let t=n.apply(e);if(!e.options.videoSrc)return t;const o=new m(e.options.videoSrc,{autoplay:!0,loop:e.options.videoLoop,showControls:!1,accessibilityHidden:!0,startTime:e.options.videoStartTime||0,endTime:e.options.videoEndTime||0,mute:!e.options.videoVolume,volume:e.options.videoVolume||0});function i(){e.image.$default_item&&(e.image.$item=e.image.$default_item,e.image.$item.style.display="block",e.coverImage(),e.onScroll())}if(e.options.onVideoWorkerInit&&e.options.onVideoWorkerInit.call(e,o),o.isValid())if(this.options.disableParallax()&&(t=!0,e.image.position="absolute",e.options.type="scroll",e.options.speed=1),t){if(o.on("ready",(()=>{if(e.options.videoPlayOnlyVisible){const t=e.onScroll;e.onScroll=function(){t.apply(e),e.videoError||!e.options.videoLoop&&(e.options.videoLoop||e.videoEnded)||(e.isVisible()?o.play():o.pause())}}else o.play()})),o.on("started",(()=>{e.image.$default_item=e.image.$item,e.image.$item=e.$video,e.image.width=e.video.videoWidth||1280,e.image.height=e.video.videoHeight||720,e.coverImage(),e.onScroll(),e.image.$default_item&&(e.image.$default_item.style.display="none")})),o.on("ended",(()=>{e.videoEnded=!0,e.options.videoLoop||i()})),o.on("error",(()=>{e.videoError=!0,i()})),e.video=o,!e.defaultInitImgResult&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"!==o.type))return o.getImageURL((t=>{e.image.bgImage=`url("${t}")`,e.init()})),!1}else e.defaultInitImgResult||o.getImageURL((t=>{const o=e.$item.getAttribute("style");o&&e.$item.setAttribute("data-jarallax-original-styles",o),e.css(e.$item,{"background-image":`url("${t}")`,"background-position":"center","background-size":"cover"})}));return t};const s=t.prototype.destroy;t.prototype.destroy=function(){const e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),s.apply(e)}}return h(),c=()=>{void 0!==v.jarallax&&v.jarallax(document.querySelectorAll("[data-jarallax-video]"))},"complete"===document.readyState||"interactive"===document.readyState?c():document.addEventListener("DOMContentLoaded",c,{capture:!0,once:!0,passive:!0}),v.VideoWorker||(v.VideoWorker=m),h}));//# sourceMappingURL=jarallax-video.min.js.map;
/*! For license information please see awb.js.LICENSE.txt */
!function(){var t={880:function(){document.addEventListener("jetpack-lazy-loaded-image",(t=>{if(t.target.classList.contains("jarallax-img")){const e=t.target.parentNode.parentNode;e&&e.jarallax&&e.jarallax.image&&e.jarallax.image.$item&&(e.jarallax.image.$item=t.target)}}),{passive:!0})}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,i),o.exports}!function(){"use strict";function t(t,e,i){var a,n=i||{},o=n.noTrailing,r=void 0!==o&&o,s=n.noLeading,l=void 0!==s&&s,d=n.debounceMode,c=void 0===d?void 0:d,g=!1,u=0;function b(){a&&clearTimeout(a)}function w(){for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];var s=this,d=Date.now()-u;function w(){u=Date.now(),e.apply(s,n)}function p(){a=void 0}g||(l||!c||a||w(),b(),void 0===c&&d>t?l?(u=Date.now(),r||(a=setTimeout(c?p:w,t))):w():!0!==r&&(a=setTimeout(c?p:w,void 0===c?t-d:t)))}return w.cancel=function(t){var e=(t||{}).upcomingOnly,i=void 0!==e&&e;b(),g=!i},w}function e(t,e,i){const a=new CustomEvent(`awb-${e}`,{bubbles:!0,cancelable:!0,detail:i});t.dispatchEvent(a)}function a(t,e){(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document).addEventListener(`awb-${t}`,e)}const{AWB:n={}}=window,o=/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent||navigator.vendor||window.opera),r=!!document.documentMode,s=!r&&!!window.StyleMedia,l="undefined"!=typeof InstallTrigger,d=/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),c=!!window.chrome&&!!window.chrome.webstore,g=!!window.opr&&!!window.opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0;let u=!1,b=!1;function w(){return n}n.settings&&n.settings.disable_parallax&&n.settings.disable_parallax.length&&n.settings.disable_parallax.forEach((t=>{if(!u)switch(t){case"everywhere":u=!0;break;case"mobile":u=o;break;case"ie":u=r;break;case"edge":u=s;break;case"firefox":u=l;break;case"safari":u=d;break;case"chrome":u=c;break;case"opera":u=g}})),n.settings&&n.settings.disable_video&&n.settings.disable_video.length&&n.settings.disable_video.forEach((t=>{if(!b)switch(t){case"everywhere":b=!0;break;case"mobile":b=o;break;case"ie":b=r;break;case"edge":b=s;break;case"firefox":b=l;break;case"safari":b=d;break;case"chrome":b=c;break;case"opera":b=g}})),n.isMobile=o,n.disableParallax=u,n.disableVideo=b,i(880),a("before-init",(t=>{!function(t){if(!t||!t.parentNode||!t.parentNode.classList.contains("nk-awb-after-vc_row"))return;const e=t.parentNode;let i=e.previousElementSibling;i=!!i.classList.contains("vc_clearfix")&&i;let a=(i||e).previousElementSibling;a=!(!a||!a.matches(".vc_row:not(.nk-awb)"))&&a,a&&("true"===a.getAttribute("data-vc-full-width")&&t.removeAttribute("data-awb-stretch"),a.classList.add("nk-awb"),a.append(t)),e.remove()}(t.target),function(t){if(!t||!t.parentNode||!t.parentNode.classList.contains("nk-awb-after-vc_column"))return;const e=t.parentNode;let i=e.previousElementSibling;i=!(!i||!i.matches(".wpb_column:not(.nk-awb)"))&&i;const a=i.closest(".vc_row");i&&(a.matches("[data-vc-stretch-content=true]")&&t.removeAttribute("data-awb-stretch"),i.classList.add("nk-awb"),i.append(t)),e.remove()}(t.target)}));let p=!1,f="";a("before-init",(t=>{window.GHOSTKIT||function(t){const e=t.parentNode&&t.parentNode.getAttribute("data-ghostkit-styles");e&&(p||(p=document.createElement("style"),p.setAttribute("id","ghostkit-awb-custom-css-inline-css"),document.head.appendChild(p)),f+=e,t.parentNode.removeAttribute("data-ghostkit-styles"),p.textContent=f)}(t.target)}));const{settings:m}=w(),h=[],v=[],y=[];function x(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;t&&t.length&&t.forEach((t=>{const e=t.getBoundingClientRect(),{left:i,right:a}=e,n=window.innerWidth-a,o=getComputedStyle(t),r=parseFloat(o["margin-left"]||0),s=parseFloat(o["margin-right"]||0);t.style["margin-left"]=r-i+"px",t.style["margin-right"]=s-n+"px"}))}function k(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;t&&t.length&&t.forEach((t=>{const e=t.closest(".vc_row"),i=t.closest(".wpb_column"),a=t.getBoundingClientRect(),n=e.getBoundingClientRect(),o=i.getBoundingClientRect(),r=getComputedStyle(t),s=getComputedStyle(e),l=a.left,d=window.innerWidth-a.right,c=n.left+(parseFloat(s["padding-left"])||0),g=window.innerWidth-n.right+(parseFloat(s["padding-right"])||0),u=o.left,b=window.innerWidth-o.right,w={"margin-left":0,"margin-right":0};if(Math.round(c)===Math.round(u)){const t=parseFloat(r["margin-left"]||0);w["margin-left"]=t-l+"px"}if(Math.round(g)===Math.round(b)){const t=parseFloat(r["margin-right"]||0);w["margin-right"]=t-d+"px"}t.style["margin-left"]=w["margin-left"],t.style["margin-right"]=w["margin-right"]}))}function A(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;t&&t.length&&t.forEach((t=>{const e=t.getBoundingClientRect(),{left:i,bottom:a}=e,n=window.innerWidth-e.right,o=getComputedStyle(t),r=parseFloat(o["margin-left"]||0),s=parseFloat(o["margin-right"]||0),l=parseFloat(o["margin-bottom"]||0);let d=r-i,c=s-n,g="";const u=t.closest(".ghostkit-col");if(u){const e=t.closest(".ghostkit-grid").getBoundingClientRect(),o=u.getBoundingClientRect(),b=e.left,w=window.innerWidth-e.right,p=o.left,f=window.innerWidth-o.right,m=o.bottom;Math.round(b)!==Math.round(p)&&(d=p-i+r),Math.round(w)!==Math.round(f)&&(c=f-n+s),g=l-(m-a)}t.style["margin-left"]=`${d}px`,t.style["margin-right"]=`${c}px`,t.style["margin-bottom"]=`${g}px`}))}const E=t(200,(function(){x(),k(),A()}));a("before-init",(t=>{!function(t){const e=t.getAttribute("data-awb-stretch");e&&t.parentNode.classList.contains("wpb_column")?(k([t]),v.push(t)):e?(x([t]),h.push(t)):m.full_width_fallback&&t.parentNode.classList.contains("alignfull")&&(A([t]),y.push(t))}(t.target)})),window.addEventListener("resize",E,{passive:!0}),window.addEventListener("orientationchange",E,{passive:!0}),window.addEventListener("load",E,{passive:!0});const{IntersectionObserver:L}=window,{isMobile:_}=w(),S=[];let z=1;function M(){S.forEach((t=>{t.awbMouseData.is_in_viewport&&(t.awbMouseData.rect=t.parentNode.getBoundingClientRect())}))}const j=t(200,M);setInterval(M,3e3),window.addEventListener("resize",j,{passive:!0}),window.addEventListener("orientationchange",j,{passive:!0}),window.addEventListener("load",j,{passive:!0}),document.addEventListener("scroll",j,{passive:!0});const C=t(200,((t,e,i)=>{!function(t,e,i){let a,n,o;S.forEach((r=>{a=r.awbMouseData,a&&"object"==typeof a&&(a.is_in_viewport||i&&z)&&(i?(n=-a.size*t,o=-a.size*e):(n=(a.rect.width-(t-a.rect.left))/a.rect.width,o=(a.rect.height-(e-a.rect.top))/a.rect.height,(n>1||n<0||o>1||o<0)&&(n=.5,o=.5),n=a.size*(n-.5)*2,o=a.size*(o-.5)*2),r.style.transform=`translateX(${n}px) translateY(${o}px) translateZ(0)`,i&&z||(r.style.transition=`transform ${i?2:a.speed}s  cubic-bezier(.22, .63, .6, .88)`))})),z=0}(t,e,i)})),N=new L((t=>{t.forEach((t=>{t.target.awbMouseData&&(t.target.awbMouseData.is_in_viewport=t.isIntersecting,t.isIntersecting&&j())}))}),{rootMargin:"50px"});function F(t){t&&t.length||(t=document.querySelectorAll(".nk-awb .nk-awb-inner img")),t&&t.length&&t.forEach((t=>{const e=window.getComputedStyle(t,null);if(e&&e.objectFit&&"cover"===e.objectFit){const e=parseInt(t.getAttribute("height"),10),i=parseInt(t.getAttribute("width"),10);if(e){let a=t.clientWidth;i/e>t.clientWidth/t.clientHeight&&(a=parseInt(t.clientHeight*i/e,10)),t.getAttribute("sizes")!==`${a}px`&&(t.setAttribute("sizes",`${a}px`),t.getAttribute("data-sizes")&&t.setAttribute("data-sizes",`${a}px`),t.getAttribute("data-lazy-sizes")&&t.setAttribute("data-lazy-sizes",`${a}px`))}}}))}a("init",(t=>{!function(t){if(t.classList.contains("nk-awb-mouse-parallax")||!t.getAttribute("data-awb-mouse-parallax-size"))return;const e=t.querySelector(":scope > .nk-awb-inner"),i=parseFloat(t.getAttribute("data-awb-mouse-parallax-size"))||30,a=parseFloat(t.getAttribute("data-awb-mouse-parallax-speed"))||1e4;t.classList.add("nk-awb-mouse-parallax"),e.awbMouseData={is_in_viewport:0,rect:t.getBoundingClientRect(),size:i,speed:a/1e3},e.style.left=-i+"px",e.style.right=-i+"px",e.style.top=-i+"px",e.style.bottom=-i+"px",N.observe(e),S.push(e),1===S.length&&(_&&window.DeviceOrientationEvent?window.addEventListener("deviceorientation",(t=>{C(t.gamma/90,t.beta/180,!0)}),{passive:!0}):window.addEventListener("mousemove",(t=>{C(t.clientX,t.clientY)}),{passive:!0}))}(t.target)}));const B=(500,t(500,F,{debounceMode:!1!==(void 0!==(W={}.atBegin)&&W)}));var W;a("before-init",(t=>{F(t.target.querySelectorAll(".nk-awb-inner img"))})),window.addEventListener("resize",B,{passive:!0}),window.addEventListener("orientationchange",B,{passive:!0}),window.addEventListener("load",B,{passive:!0});const $=!!document.querySelector("#twentytwenty-style-css, #twenty-twenty-style-css, #twenty-twenty-one-style-css");a("before-jarallax-init",(t=>{$&&function(t,e){const i=t.querySelector(":scope > .nk-awb-inner"),a=e.onInit;e.onInit=function(){Array.from(i.children).forEach((t=>{t.classList.add("intrinsic-ignore")})),a&&a()}}(t.target,t.detail)}));const{jarallax:I}=window,{isMobile:P,disableParallax:R,disableVideo:T}=w();a("init",(t=>{!function(t){if(void 0===I)return;const i=t.getAttribute("data-awb-type");if("color"===i)return;const a=t.querySelector(".jarallax-img"),n=t.getAttribute("data-awb-image-background-size"),o=t.getAttribute("data-awb-image-background-position");let r=!1,s=0,l=0,d=0,c=!0,g=!0,u=!1,b=t.getAttribute("data-awb-parallax"),w=t.getAttribute("data-awb-parallax-speed"),p="true"===t.getAttribute("data-awb-parallax-mobile")||"1"===t.getAttribute("data-awb-parallax-mobile");if("yt_vm_video"!==i&&"video"!==i||(r=t.getAttribute("data-awb-video"),s=parseFloat(t.getAttribute("data-awb-video-start-time"))||0,l=parseFloat(t.getAttribute("data-awb-video-end-time"))||0,d=parseFloat(t.getAttribute("data-awb-video-volume"))||0,c="false"!==t.getAttribute("data-awb-video-loop"),g="true"===t.getAttribute("data-awb-video-always-play"),u="1"===t.getAttribute("data-awb-video-mobile")||"true"===t.getAttribute("data-awb-video-mobile"),!r||b||w||(b="scroll",w=1,p=u)),!b&&!r){const e=t.getAttribute("data-awb-image-background-size")||"cover",i=t.getAttribute("data-awb-image-background-position")||"50% 50%";return void(a&&(a.style.objectFit=e,a.style.objectPosition=i))}const f={type:b,speed:w,disableParallax(){return R||!p&&P},disableVideo(){return T||!u&&P},imgSize:n||"cover",imgPosition:o||"50% 50%"};"pattern"===n&&(f.imgSize="auto",f.imgRepeat="repeat"),r&&(f.speed=b?w:1,f.videoSrc=r,f.videoStartTime=s,f.videoEndTime=l,f.videoVolume=d,f.videoLoop=c,f.videoPlayOnlyVisible=!g);const m=t.querySelector(":scope > .nk-awb-inner"),h=m.querySelector("picture .jarallax-img");h&&(h.classList.remove("jarallax-img"),h.closest("picture").classList.add("jarallax-img")),e(t,"before-jarallax-init",f),I(m,f),e(t,"after-jarallax-init",f)}(t.target)}));const q=w();q.selector=".nk-awb .nk-awb-wrap:not(.nk-awb-rendered)",q.events={on:a,trigger:e},q.init=function(t){const i=document.querySelectorAll(t||q.selector);i&&i.length&&i.forEach((function(t){e(t,"before-init"),t.classList.add("nk-awb-rendered"),e(t,"init"),e(t,"after-init")}))},q.initThrottled=t(200,(()=>{q.init()})),q.init(),new window.MutationObserver((t=>{if(!t||!t.length)return;let e=!1;t.forEach((t=>{let{addedNodes:i}=t;!e&&i&&i.length&&i.forEach((t=>{!e&&t.tagName&&(t.classList.contains("nk-awb")||t.classList.contains("nk-awb-after-vc_row")||t.classList.contains("nk-awb-after-vc_column")||t.firstElementChild&&t.querySelector(".nk-awb, .nk-awb-after-vc_row, .nk-awb-after-vc_column"))&&(e=!0)}))})),e&&q.initThrottled()})).observe(document.documentElement,{childList:!0,subtree:!0}),window.AWB=q,e(document,"ready"),window.nkAwbInit=function(){console.warn('You are using the "nkAwbInit()" function, which is deprecated since v1.11.1. Please, use "AWB.init()" instead.'),window.AWB.init()}}()}();
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t,e){"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,(function(){function t(){}let e=t.prototype;return e.on=function(t,e){if(!t||!e)return this;let i=this._events=this._events||{},s=i[t]=i[t]||[];return s.includes(e)||s.push(e),this},e.once=function(t,e){if(!t||!e)return this;this.on(t,e);let i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this},e.off=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;let s=i.indexOf(e);return-1!=s&&i.splice(s,1),this},e.emitEvent=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;i=i.slice(0),e=e||[];let s=this._onceEvents&&this._onceEvents[t];for(let n of i){s&&s[n]&&(this.off(t,n),delete s[n]),n.apply(this,e)}return this},e.allOff=function(){return delete this._events,delete this._onceEvents,this},t})),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,e){let i=t.jQuery,s=t.console;function n(t,e,o){if(!(this instanceof n))return new n(t,e,o);let r=t;var h;("string"==typeof t&&(r=document.querySelectorAll(t)),r)?(this.elements=(h=r,Array.isArray(h)?h:"object"==typeof h&&"number"==typeof h.length?[...h]:[h]),this.options={},"function"==typeof e?o=e:Object.assign(this.options,e),o&&this.on("always",o),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):s.error(`Bad element for imagesLoaded ${r||t}`)}n.prototype=Object.create(e.prototype),n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const o=[1,9,11];n.prototype.addElementImages=function(t){"IMG"===t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);let{nodeType:e}=t;if(!e||!o.includes(e))return;let i=t.querySelectorAll("img");for(let t of i)this.addImage(t);if("string"==typeof this.options.background){let e=t.querySelectorAll(this.options.background);for(let t of e)this.addElementBackgroundImages(t)}};const r=/url\((['"])?(.*?)\1\)/gi;function h(t){this.img=t}function d(t,e){this.url=t,this.element=e,this.img=new Image}return n.prototype.addElementBackgroundImages=function(t){let e=getComputedStyle(t);if(!e)return;let i=r.exec(e.backgroundImage);for(;null!==i;){let s=i&&i[2];s&&this.addBackground(s,t),i=r.exec(e.backgroundImage)}},n.prototype.addImage=function(t){let e=new h(t);this.images.push(e)},n.prototype.addBackground=function(t,e){let i=new d(t,e);this.images.push(i)},n.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();let t=(t,e,i)=>{setTimeout((()=>{this.progress(t,e,i)}))};this.images.forEach((function(e){e.once("progress",t),e.check()}))},n.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${i}`,t,e)},n.prototype.complete=function(){let t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){let t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t;let{parentNode:i}=this.img,s="PICTURE"===i.nodeName?i:this.img;this.emitEvent("progress",[this,s,e])},h.prototype.handleEvent=function(t){let e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype=Object.create(h.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},n.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&(i=e,i.fn.imagesLoaded=function(t,e){return new n(this,t,e).jqDeferred.promise(i(this))})},n.makeJQueryPlugin(),n}));
/*! This file is auto-generated */
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
/*!
 * Masonry v2 shim
 * to maintain backwards compatibility
 * as of Masonry v3.1.2
 *
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function(a){"use strict";var b=a.Masonry;b.prototype._remapV2Options=function(){this._remapOption("gutterWidth","gutter"),this._remapOption("isResizable","isResizeBound"),this._remapOption("isRTL","isOriginLeft",function(a){return!a});var a=this.options.isAnimated;if(void 0!==a&&(this.options.transitionDuration=a?this.options.transitionDuration:0),void 0===a||a){var b=this.options.animationOptions,c=b&&b.duration;c&&(this.options.transitionDuration="string"==typeof c?c:c+"ms")}},b.prototype._remapOption=function(a,b,c){var d=this.options[a];void 0!==d&&(this.options[b]=c?c(d):d)};var c=b.prototype._create;b.prototype._create=function(){var a=this;this._remapV2Options(),c.apply(this,arguments),setTimeout(function(){jQuery(a.element).addClass("masonry")},0)};var d=b.prototype.layout;b.prototype.layout=function(){this._remapV2Options(),d.apply(this,arguments)};var e=b.prototype.option;b.prototype.option=function(){e.apply(this,arguments),this._remapV2Options()};var f=b.prototype._itemize;b.prototype._itemize=function(a){var b=f.apply(this,arguments);return jQuery(a).addClass("masonry-brick"),b};var g=b.prototype.measureColumns;b.prototype.measureColumns=function(){var a=this.options.columnWidth;a&&"function"==typeof a&&(this.getContainerWidth(),this.columnWidth=a(this.containerWidth)),g.apply(this,arguments)},b.prototype.reload=function(){this.reloadItems.apply(this,arguments),this.layout.apply(this)};var h=b.prototype.destroy;b.prototype.destroy=function(){var a=this.getItemElements();jQuery(this.element).removeClass("masonry"),jQuery(a).removeClass("masonry-brick"),h.apply(this,arguments)}}(window);
"use strict";
function _typeof(t) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }! function(t, e) { "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = t || self).bootstrap = {}, t.jQuery) }(void 0, function(t, p) {
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) { return Object.getOwnPropertyDescriptor(r, t).enumerable }))), e.forEach(function(t) {
                var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i
            })
        }
        return o
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var e = "transitionend";
    function n(t) {
        var e = this,
            n = !1;
        return p(this).one(m.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || m.triggerTransitionEnd(e) }, t), this
    }
    var m = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try { return document.querySelector(e) ? e : null } catch (t) { return null }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = p(t).css("transition-duration"),
                n = p(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) { return t.offsetHeight },
        triggerTransitionEnd: function(t) { p(t).trigger(e) },
        supportsTransitionEnd: function() { return Boolean(e) },
        isElement: function(t) { return (t[0] || t).nodeType },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? m.findShadowRoot(t.parentNode) : null; var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null }
    };
    p.fn.emulateTransitionEnd = n, p.event.special[m.TRANSITION_END] = { bindType: e, delegateType: e, handle: function(t) { if (p(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } };
    var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = p.fn[o],
        u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" },
        h = "alert",
        f = "fade",
        d = "show",
        g = function() {
            function i(t) { this._element = t }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() { p.removeData(this._element, r), this._element = null }, t._getRootElement = function(t) {
                var e = m.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n || (n = p(t).closest("." + h)[0]), n
            }, t._triggerCloseEvent = function(t) { var e = p.Event(u.CLOSE); return p(t).trigger(e), e }, t._removeElement = function(e) {
                var n = this;
                if (p(e).removeClass(d), p(e).hasClass(f)) {
                    var t = m.getTransitionDurationFromElement(e);
                    p(e).one(m.TRANSITION_END, function(t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) { p(t).detach().trigger(u.CLOSED).remove() }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this),
                        e = t.data(r);
                    e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) { return function(t) { t && t.preventDefault(), e.close(this) } }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), i
        }();
    p(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), p.fn[o] = g._jQueryInterface, p.fn[o].Constructor = g, p.fn[o].noConflict = function() { return p.fn[o] = c, g._jQueryInterface };
    var _ = "button",
        v = "bs.button",
        y = "." + v,
        E = ".data-api",
        b = p.fn[_],
        w = "active",
        C = "btn",
        T = "focus",
        S = '[data-toggle^="button"]',
        D = '[data-toggle="buttons"]',
        I = 'input:not([type="hidden"])',
        A = ".active",
        O = ".btn",
        N = { CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E },
        k = function() {
            function n(t) { this._element = t }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = p(this._element).closest(D)[0];
                if (n) {
                    var i = this._element.querySelector(I);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(w)) t = !1;
                            else {
                                var o = n.querySelector(A);
                                o && p(o).removeClass(w)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(w), p(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), t && p(this._element).toggleClass(w)
            }, t.dispose = function() { p.removeData(this._element, v), this._element = null }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = p(this).data(v);
                    t || (t = new n(this), p(this).data(v, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), n
        }();
    p(document).on(N.CLICK_DATA_API, S, function(t) {
        t.preventDefault();
        var e = t.target;
        p(e).hasClass(C) || (e = p(e).closest(O)), k._jQueryInterface.call(p(e), "toggle")
    }).on(N.FOCUS_BLUR_DATA_API, S, function(t) {
        var e = p(t.target).closest(O)[0];
        p(e).toggleClass(T, /^focus(in)?$/.test(t.type))
    }), p.fn[_] = k._jQueryInterface, p.fn[_].Constructor = k, p.fn[_].noConflict = function() { return p.fn[_] = b, k._jQueryInterface };
    var L = "carousel",
        x = "bs.carousel",
        P = "." + x,
        H = ".data-api",
        j = p.fn[L],
        R = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        F = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        M = "next",
        W = "prev",
        U = "left",
        B = "right",
        q = { SLIDE: "slide" + P, SLID: "slid" + P, KEYDOWN: "keydown" + P, MOUSEENTER: "mouseenter" + P, MOUSELEAVE: "mouseleave" + P, TOUCHSTART: "touchstart" + P, TOUCHMOVE: "touchmove" + P, TOUCHEND: "touchend" + P, POINTERDOWN: "pointerdown" + P, POINTERUP: "pointerup" + P, DRAG_START: "dragstart" + P, LOAD_DATA_API: "load" + P + H, CLICK_DATA_API: "click" + P + H },
        K = "carousel",
        Q = "active",
        V = "slide",
        Y = "carousel-item-right",
        z = "carousel-item-left",
        X = "carousel-item-next",
        G = "carousel-item-prev",
        $ = "pointer-event",
        J = ".active",
        Z = ".active.carousel-item",
        tt = ".carousel-item",
        et = ".carousel-item img",
        nt = ".carousel-item-next, .carousel-item-prev",
        it = ".carousel-indicators",
        ot = "[data-slide], [data-slide-to]",
        rt = '[data-ride="carousel"]',
        st = { TOUCH: "touch", PEN: "pen" },
        at = function() {
            function r(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(it), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() }
            var t = r.prototype;
            return t.next = function() { this._isSliding || this._slide(M) }, t.nextWhenVisible = function() {!document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next() }, t.prev = function() { this._isSliding || this._slide(W) }, t.pause = function(t) { t || (this._isPaused = !0), this._element.querySelector(nt) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(Z);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) p(this._element).one(q.SLID, function() { return e.to(t) });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? M : W;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() { p(this._element).off(P), p.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function(t) { return t = l({}, R, t), m.typeCheckConfig(L, t, F), t }, t._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    0 < e && this.prev(), e < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && p(this._element).on(q.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && p(this._element).on(q.MOUSEENTER, function(t) { return e.pause(t) }).on(q.MOUSELEAVE, function(t) { return e.cycle(t) }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) { e._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX) },
                        i = function(t) { e._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, 500 + e._config.interval)) };
                    p(this._element.querySelectorAll(et)).on(q.DRAG_START, function(t) { return t.preventDefault() }), this._pointerEvent ? (p(this._element).on(q.POINTERDOWN, function(t) { return n(t) }), p(this._element).on(q.POINTERUP, function(t) { return i(t) }), this._element.classList.add($)) : (p(this._element).on(q.TOUCHSTART, function(t) { return n(t) }), p(this._element).on(q.TOUCHMOVE, function(t) { return function(t) { t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX }(t) }), p(this._element).on(q.TOUCHEND, function(t) { return i(t) }))
                }
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t) }, t._getItemByDirection = function(t, e) {
                var n = t === M,
                    i = t === W,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === W ? -1 : 1)) % this._items.length;
                return -1 == s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(Z)),
                    o = p.Event(q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
                return p(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(J));
                    p(e).removeClass(Q);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && p(n).addClass(Q)
                }
            }, t._slide = function(t, e) {
                var n, i, o, r = this,
                    s = this._element.querySelector(Z),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if (o = t === M ? (n = z, i = X, U) : (n = Y, i = G, B), l && p(l).hasClass(Q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                    var h = p.Event(q.SLID, { relatedTarget: l, direction: o, from: a, to: c });
                    if (p(this._element).hasClass(V)) {
                        p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var d = m.getTransitionDurationFromElement(s);
                        p(s).one(m.TRANSITION_END, function() { p(l).removeClass(n + " " + i).addClass(Q), p(s).removeClass(Q + " " + i + " " + n), r._isSliding = !1, setTimeout(function() { return p(r._element).trigger(h) }, 0) }).emulateTransitionEnd(d)
                    } else p(s).removeClass(Q), p(l).addClass(Q), this._isSliding = !1, p(this._element).trigger(h);
                    u && this.cycle()
                }
            }, r._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = p(this).data(x),
                        e = l({}, R, p(this).data());
                    "object" === _typeof(i) && (e = l({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new r(this, e), p(this).data(x, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && e.ride && (t.pause(), t.cycle())
                })
            }, r._dataApiClickHandler = function(t) {
                var e = m.getSelectorFromElement(this);
                if (e) {
                    var n = p(e)[0];
                    if (n && p(n).hasClass(K)) {
                        var i = l({}, p(n).data(), p(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(p(n), i), o && p(n).data(x).to(o), t.preventDefault()
                    }
                }
            }, s(r, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return R } }]), r
        }();
    p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler), p(window).on(q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
            var i = p(t[e]);
            at._jQueryInterface.call(i, i.data())
        }
    }), p.fn[L] = at._jQueryInterface, p.fn[L].Constructor = at, p.fn[L].noConflict = function() { return p.fn[L] = j, at._jQueryInterface };
    var lt = "collapse",
        ct = "bs.collapse",
        ut = "." + ct,
        ht = p.fn[lt],
        ft = { toggle: !0, parent: "" },
        dt = { toggle: "boolean", parent: "(string|element)" },
        pt = { SHOW: "show" + ut, SHOWN: "shown" + ut, HIDE: "hide" + ut, HIDDEN: "hidden" + ut, CLICK_DATA_API: "click" + ut + ".data-api" },
        mt = "show",
        gt = "collapse",
        _t = "collapsing",
        vt = "collapsed",
        yt = "width",
        Et = "height",
        bt = ".show, .collapsing",
        wt = '[data-toggle="collapse"]',
        Ct = function() {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(wt)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = m.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) { return t === e });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() { p(this._element).hasClass(mt) ? this.hide() : this.show() }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !p(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(bt)).filter(function(t) { return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(gt) })).length && (t = null), !(t && (e = p(t).not(this._selector).data(ct)) && e._isTransitioning))) {
                    var i = p.Event(pt.SHOW);
                    if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(p(t).not(this._selector), "hide"), e || p(t).data(ct, null));
                        var o = this._getDimension();
                        p(this._element).removeClass(gt).addClass(_t), this._element.style[o] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(vt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() { p(n._element).removeClass(_t).addClass(gt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), p(n._element).trigger(pt.SHOWN) }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && p(this._element).hasClass(mt)) {
                    var e = p.Event(pt.HIDE);
                    if (p(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), p(this._element).addClass(_t).removeClass(gt).removeClass(mt);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var r = this._triggerArray[o],
                                    s = m.getSelectorFromElement(r);
                                if (null !== s) p([].slice.call(document.querySelectorAll(s))).hasClass(mt) || p(r).addClass(vt).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() { t.setTransitioning(!1), p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN) }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function(t) { this._isTransitioning = t }, t.dispose = function() { p.removeData(this._element, ct), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function(t) { return (t = l({}, ft, t)).toggle = Boolean(t.toggle), m.typeCheckConfig(lt, t, dt), t }, t._getDimension = function() { return p(this._element).hasClass(yt) ? yt : Et }, t._getParent = function() {
                var t, n = this;
                m.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e));
                return p(i).each(function(t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                var n = p(t).hasClass(mt);
                e.length && p(e).toggleClass(vt, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function(t) { var e = m.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = p(this),
                        e = t.data(ct),
                        n = l({}, ft, t.data(), "object" === _typeof(i) && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ct, e)), "string" == typeof i) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return ft } }]), a
        }();
    p(document).on(pt.CLICK_DATA_API, wt, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = p(this),
            e = m.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        p(i).each(function() {
            var t = p(this),
                e = t.data(ct) ? "toggle" : n.data();
            Ct._jQueryInterface.call(t, e)
        })
    }), p.fn[lt] = Ct._jQueryInterface, p.fn[lt].Constructor = Ct, p.fn[lt].noConflict = function() { return p.fn[lt] = ht, Ct._jQueryInterface };
    for (var Tt = "undefined" != typeof window && "undefined" != typeof document, St = ["Edge", "Trident", "Firefox"], Dt = 0, It = 0; It < St.length; It += 1)
        if (Tt && 0 <= navigator.userAgent.indexOf(St[It])) { Dt = 1; break }
    var At = Tt && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then(function() { e = !1, t() })) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout(function() { e = !1, t() }, Dt)) } };
    function Ot(t) { return t && "[object Function]" === {}.toString.call(t) }
    function Nt(t, e) { if (1 !== t.nodeType) return []; var n = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? n[e] : n }
    function kt(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }
    function Lt(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = Nt(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : Lt(kt(t))
    }
    var xt = Tt && !(!window.MSInputMethodContext || !document.documentMode),
        Pt = Tt && /MSIE 10/.test(navigator.userAgent);
    function Ht(t) { return 11 === t ? xt : 10 === t ? Pt : xt || Pt }
    function jt(t) { if (!t) return document.documentElement; for (var e = Ht(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Nt(n, "position") ? jt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement }
    function Rt(t) { return null !== t.parentNode ? Rt(t.parentNode) : t }
    function Ft(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s = r.commonAncestorContainer;
        if (t !== s && e !== s || i.contains(o)) return function(t) { var e = t.nodeName; return "BODY" !== e && ("HTML" === e || jt(t.firstElementChild) === t) }(s) ? s : jt(s);
        var a = Rt(t);
        return a.host ? Ft(a.host, e) : Ft(t, Rt(e).host)
    }
    function Mt(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" !== n && "HTML" !== n) return t[e];
        var i = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || i)[e]
    }
    function Wt(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }
    function Ut(t, e, n, i) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Ht(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0) }
    function Bt(t) {
        var e = t.body,
            n = t.documentElement,
            i = Ht(10) && getComputedStyle(n);
        return { height: Ut("Height", e, n, i), width: Ut("Width", e, n, i) }
    }
    var qt = function() {
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }
        }(),
        Kt = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t },
        Qt = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t };
    function Vt(t) { return Qt({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }
    function Yt(t) {
        var e = {};
        try {
            if (Ht(10)) {
                e = t.getBoundingClientRect();
                var n = Mt(t, "top"),
                    i = Mt(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            r = "HTML" === t.nodeName ? Bt(t.ownerDocument) : {},
            s = r.width || t.clientWidth || o.right - o.left,
            a = r.height || t.clientHeight || o.bottom - o.top,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a;
        if (l || c) {
            var u = Nt(t);
            l -= Wt(u, "x"), c -= Wt(u, "y"), o.width -= l, o.height -= c
        }
        return Vt(o)
    }
    function zt(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Ht(10),
            o = "HTML" === e.nodeName,
            r = Yt(t),
            s = Yt(e),
            a = Lt(t),
            l = Nt(e),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var h = Vt({ top: r.top - s.top - c, left: r.left - s.left - u, width: r.width, height: r.height });
        if (h.marginTop = 0, h.marginLeft = 0, !i && o) {
            var f = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            h.top -= c - f, h.bottom -= c - f, h.left -= u - d, h.right -= u - d, h.marginTop = f, h.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = function(t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = Mt(e, "top"),
                o = Mt(e, "left"),
                r = n ? -1 : 1;
            return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t
        }(h, e)), h
    }
    function Xt(t) { if (!t || !t.parentElement || Ht()) return document.documentElement; for (var e = t.parentElement; e && "none" === Nt(e, "transform");) e = e.parentElement; return e || document.documentElement }
    function Gt(t, e, n, i) {
        var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            s = o ? Xt(t) : Ft(t, e);
        if ("viewport" === i) r = function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = zt(t, n),
                o = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                s = e ? 0 : Mt(n),
                a = e ? 0 : Mt(n, "left");
            return Vt({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r })
        }(s, o);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = Lt(kt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = zt(a, s, o);
            if ("HTML" !== a.nodeName || function t(e) { var n = e.nodeName; if ("BODY" === n || "HTML" === n) return !1; if ("fixed" === Nt(e, "position")) return !0; var i = kt(e); return !!i && t(i) }(s)) r = l;
            else {
                var c = Bt(t.ownerDocument),
                    u = c.height,
                    h = c.width;
                r.top += l.top - l.marginTop, r.bottom = u + l.top, r.left += l.left - l.marginLeft, r.right = h + l.left
            }
        }
        var f = "number" == typeof(n = n || 0);
        return r.left += f ? n : n.left || 0, r.top += f ? n : n.top || 0, r.right -= f ? n : n.right || 0, r.bottom -= f ? n : n.bottom || 0, r
    }
    function $t(t, e, i, n, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = Gt(i, n, r, o),
            a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
            l = Object.keys(a).map(function(t) { return Qt({ key: t }, a[t], { area: function(t) { return t.width * t.height }(a[t]) }) }).sort(function(t, e) { return e.area - t.area }),
            c = l.filter(function(t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            h = t.split("-")[1];
        return u + (h ? "-" + h : "")
    }
    function Jt(t, e, n) { var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return zt(n, i ? Xt(e) : Ft(e, n), i) }
    function Zt(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return { width: t.offsetWidth + i, height: t.offsetHeight + n }
    }
    function te(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function(t) { return e[t] }) }
    function ee(t, e, n) {
        n = n.split("-")[0];
        var i = Zt(t),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[te(a)], o
    }
    function ne(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }
    function ie(t, n, e) {
        return (void 0 === e ? t : t.slice(0, function(t, e, n) { if (Array.prototype.findIndex) return t.findIndex(function(t) { return t[e] === n }); var i = ne(t, function(t) { return t[e] === n }); return t.indexOf(i) }(t, "name", e))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var e = t.function || t.fn;
            t.enabled && Ot(e) && (n.offsets.popper = Vt(n.offsets.popper), n.offsets.reference = Vt(n.offsets.reference), n = e(n, t))
        }), n
    }
    function oe(t, n) { return t.some(function(t) { var e = t.name; return t.enabled && e === n }) }
    function re(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i],
                r = o ? "" + o + n : t;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }
    function se(t) { var e = t.ownerDocument; return e ? e.defaultView : window }
    function ae(t, e, n, i) {
        n.updateBound = i, se(t).addEventListener("resize", n.updateBound, { passive: !0 });
        var o = Lt(t);
        return function t(e, n, i, o) {
            var r = "BODY" === e.nodeName,
                s = r ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, { passive: !0 }), r || t(Lt(s.parentNode), n, i, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }
    function le() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function(t, e) { return se(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e }(this.reference, this.state)) }
    function ce(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }
    function ue(n, i) { Object.keys(i).forEach(function(t) { var e = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ce(i[t]) && (e = "px"), n.style[t] = i[t] + e }) }
    var he = Tt && /Firefox/i.test(navigator.userAgent);
    function fe(t, e, n) {
        var i = ne(t, function(t) { return t.name === e }),
            o = !!i && t.some(function(t) { return t.name === n && t.enabled && t.order < i.order });
        if (!o) {
            var r = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        pe = de.slice(3);
    function me(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = pe.indexOf(t),
            i = pe.slice(n + 1).concat(pe.slice(0, n));
        return e ? i.reverse() : i
    }
    var ge = "flip",
        _e = "clockwise",
        ve = "counterclockwise";
    function ye(t, o, r, e) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(e),
            n = t.split(/(\+|\-)/).map(function(t) { return t.trim() }),
            i = n.indexOf(ne(n, function(t) { return -1 !== t.search(/,|\s/) }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(t, e) {
            var n = (1 === e ? !a : a) ? "height" : "width",
                i = !1;
            return t.reduce(function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e) }, []).map(function(t) {
                return function(t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        s = o[2];
                    if (!r) return t;
                    if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                    var a = void 0;
                    switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                    }
                    return Vt(a)[e] / 100 * r
                }(t, n, o, r)
            })
        })).forEach(function(n, i) { n.forEach(function(t, e) { ce(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1)) }) }), s
    }
    var Ee = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var o = t.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = { start: Kt({}, l, r[l]), end: Kt({}, l, r[l] + r[c] - s[c]) };
                            t.offsets.popper = Qt({}, s, u[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = ce(+n) ? [+n, 0] : ye(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, i) {
                        var e = i.boundariesElement || jt(t.instance.popper);
                        t.instance.reference === e && (e = jt(e));
                        var n = re("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[n];
                        o.top = "", o.left = "", o[n] = "";
                        var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
                        o.top = r, o.left = s, o[n] = a, i.boundaries = l;
                        var c = i.priority,
                            u = t.offsets.popper,
                            h = {
                                primary: function(t) { var e = u[t]; return u[t] < l[t] && !i.escapeWithReference && (e = Math.max(u[t], l[t])), Kt({}, t, e) },
                                secondary: function(t) {
                                    var e = "right" === t ? "left" : "top",
                                        n = u[e];
                                    return u[t] > l[t] && !i.escapeWithReference && (n = Math.min(u[e], l[t] - ("right" === t ? u.width : u.height))), Kt({}, e, n)
                                }
                            };
                        return c.forEach(function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            u = Qt({}, u, h[e](t))
                        }), t.offsets.popper = u, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!fe(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) { if (!(i = t.instance.popper.querySelector(i))) return t } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var o = t.placement.split("-")[0],
                            r = t.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            h = u.toLowerCase(),
                            f = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = Zt(i)[c];
                        a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]), t.offsets.popper = Vt(t.offsets.popper);
                        var m = a[h] + a[c] / 2 - p / 2,
                            g = Nt(t.instance.popper),
                            _ = parseFloat(g["margin" + u], 10),
                            v = parseFloat(g["border" + u + "Width"], 10),
                            y = m - t.offsets.popper[h] - _ - v;
                        return y = Math.max(Math.min(s[c] - p, y), 0), t.arrowElement = i, t.offsets.arrow = (Kt(n = {}, h, Math.round(y)), Kt(n, f, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(d, p) {
                        if (oe(d.instance.modifiers, "inner")) return d;
                        if (d.flipped && d.placement === d.originalPlacement) return d;
                        var m = Gt(d.instance.popper, d.instance.reference, p.padding, p.boundariesElement, d.positionFixed),
                            g = d.placement.split("-")[0],
                            _ = te(g),
                            v = d.placement.split("-")[1] || "",
                            y = [];
                        switch (p.behavior) {
                            case ge:
                                y = [g, _];
                                break;
                            case _e:
                                y = me(g);
                                break;
                            case ve:
                                y = me(g, !0);
                                break;
                            default:
                                y = p.behavior
                        }
                        return y.forEach(function(t, e) {
                            if (g !== t || y.length === e + 1) return d;
                            g = d.placement.split("-")[0], _ = te(g);
                            var n = d.offsets.popper,
                                i = d.offsets.reference,
                                o = Math.floor,
                                r = "left" === g && o(n.right) > o(i.left) || "right" === g && o(n.left) < o(i.right) || "top" === g && o(n.bottom) > o(i.top) || "bottom" === g && o(n.top) < o(i.bottom),
                                s = o(n.left) < o(m.left),
                                a = o(n.right) > o(m.right),
                                l = o(n.top) < o(m.top),
                                c = o(n.bottom) > o(m.bottom),
                                u = "left" === g && s || "right" === g && a || "top" === g && l || "bottom" === g && c,
                                h = -1 !== ["top", "bottom"].indexOf(g),
                                f = !!p.flipVariations && (h && "start" === v && s || h && "end" === v && a || !h && "start" === v && l || !h && "end" === v && c);
                            (r || u || f) && (d.flipped = !0, (r || u) && (g = y[e + 1]), f && (v = function(t) { return "end" === t ? "start" : "start" === t ? "end" : t }(v)), d.placement = g + (v ? "-" + v : ""), d.offsets.popper = Qt({}, d.offsets.popper, ee(d.instance.popper, d.offsets.reference, d.placement)), d = ie(d.instance.modifiers, d, "flip"))
                        }), d
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = te(e), t.offsets.popper = Vt(o), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!fe(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = ne(t.instance.modifiers, function(t) { return "preventOverflow" === t.name }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = ne(t.instance.modifiers, function(t) { return "applyStyle" === t.name }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== r ? r : e.gpuAcceleration,
                            a = jt(t.instance.popper),
                            l = Yt(a),
                            c = { position: o.position },
                            u = function(t, e) {
                                var n = t.offsets,
                                    i = n.popper,
                                    o = n.reference,
                                    r = Math.round,
                                    s = Math.floor,
                                    a = function(t) { return t },
                                    l = r(o.width),
                                    c = r(i.width),
                                    u = -1 !== ["left", "right"].indexOf(t.placement),
                                    h = -1 !== t.placement.indexOf("-"),
                                    f = e ? u || h || l % 2 == c % 2 ? r : s : a,
                                    d = e ? r : a;
                                return { left: f(l % 2 == 1 && c % 2 == 1 && !h && e ? i.left - 1 : i.left), top: d(i.top), bottom: d(i.bottom), right: f(i.right) }
                            }(t, window.devicePixelRatio < 2 || !he),
                            h = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            d = re("transform"),
                            p = void 0,
                            m = void 0;
                        if (m = "bottom" == h ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, p = "right" == f ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && d) c[d] = "translate3d(" + p + "px, " + m + "px, 0)", c[h] = 0, c[f] = 0, c.willChange = "transform";
                        else {
                            var g = "bottom" == h ? -1 : 1,
                                _ = "right" == f ? -1 : 1;
                            c[h] = m * g, c[f] = p * _, c.willChange = h + ", " + f
                        }
                        var v = { "x-placement": t.placement };
                        return t.attributes = Qt({}, v, t.attributes), t.styles = Qt({}, c, t.styles), t.arrowStyles = Qt({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        return ue(t.instance.popper, t.styles),
                            function(e, n) { Object.keys(n).forEach(function(t) {!1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t) }) }(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && ue(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function(t, e, n, i, o) {
                        var r = Jt(o, e, t, n.positionFixed),
                            s = $t(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), ue(e, { position: n.positionFixed ? "fixed" : "absolute" }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        be = function() {
            function r(t, e) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, r), this.scheduleUpdate = function() { return requestAnimationFrame(n.update) }, this.update = At(this.update.bind(this)), this.options = Qt({}, r.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Qt({}, r.Defaults.modifiers, i.modifiers)).forEach(function(t) { n.options.modifiers[t] = Qt({}, r.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return Qt({ name: t }, n.options.modifiers[t]) }).sort(function(t, e) { return t.order - e.order }), this.modifiers.forEach(function(t) { t.enabled && Ot(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state) }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return qt(r, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                            t.offsets.reference = Jt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = $t(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = ee(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ie(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = ae(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return le.call(this) } }]), r
        }();
    be.Utils = ("undefined" != typeof window ? window : global).PopperUtils, be.placements = de, be.Defaults = Ee;
    var we = "dropdown",
        Ce = "bs.dropdown",
        Te = "." + Ce,
        Se = ".data-api",
        De = p.fn[we],
        Ie = new RegExp("38|40|27"),
        Ae = { HIDE: "hide" + Te, HIDDEN: "hidden" + Te, SHOW: "show" + Te, SHOWN: "shown" + Te, CLICK: "click" + Te, CLICK_DATA_API: "click" + Te + Se, KEYDOWN_DATA_API: "keydown" + Te + Se, KEYUP_DATA_API: "keyup" + Te + Se },
        Oe = "disabled",
        Ne = "show",
        ke = "dropup",
        Le = "dropright",
        xe = "dropleft",
        Pe = "dropdown-menu-right",
        He = "position-static",
        je = '[data-toggle="dropdown"]',
        Re = ".dropdown form",
        Fe = ".dropdown-menu",
        Me = ".navbar-nav",
        We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Ue = "top-start",
        Be = "top-end",
        qe = "bottom-start",
        Ke = "bottom-end",
        Qe = "right-start",
        Ve = "left-start",
        Ye = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        ze = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        Xe = function() {
            function c(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
            var t = c.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
                    var t = c._getParentFromElement(this._element),
                        e = p(this._menu).hasClass(Ne);
                    if (c._clearMenus(), !e) {
                        var n = { relatedTarget: this._element },
                            i = p.Event(Ae.SHOW, n);
                        if (p(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if (void 0 === be) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var o = this._element; "parent" === this._config.reference ? o = t : m.isElement(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(t).addClass(He), this._popper = new be(o, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === p(t).closest(Me).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(Ne), p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n)) }
                    }
                }
            }, t.show = function() {
                if (!(this._element.disabled || p(this._element).hasClass(Oe) || p(this._menu).hasClass(Ne))) {
                    var t = { relatedTarget: this._element },
                        e = p.Event(Ae.SHOW, t),
                        n = c._getParentFromElement(this._element);
                    p(n).trigger(e), e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t)))
                }
            }, t.hide = function() {
                if (!this._element.disabled && !p(this._element).hasClass(Oe) && p(this._menu).hasClass(Ne)) {
                    var t = { relatedTarget: this._element },
                        e = p.Event(Ae.HIDE, t),
                        n = c._getParentFromElement(this._element);
                    p(n).trigger(e), e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t)))
                }
            }, t.dispose = function() { p.removeData(this._element, Ce), p(this._element).off(Te), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function() {
                var e = this;
                p(this._element).on(Ae.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() })
            }, t._getConfig = function(t) { return t = l({}, this.constructor.Default, p(this._element).data(), t), m.typeCheckConfig(we, t, this.constructor.DefaultType), t }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Fe))
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = p(this._element.parentNode),
                    e = qe;
                return t.hasClass(ke) ? (e = Ue, p(this._menu).hasClass(Pe) && (e = Be)) : t.hasClass(Le) ? e = Qe : t.hasClass(xe) ? e = Ve : p(this._menu).hasClass(Pe) && (e = Ke), e
            }, t._detectNavbar = function() { return 0 < p(this._element).closest(".navbar").length }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) { return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t }, c._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this).data(Ce),
                        e = "object" === _typeof(n) ? n : null;
                    if (t || (t = new c(this, e), p(this).data(Ce, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, c._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(je)), n = 0, i = e.length; n < i; n++) {
                        var o = c._getParentFromElement(e[n]),
                            r = p(e[n]).data(Ce),
                            s = { relatedTarget: e[n] };
                        if (t && "click" === t.type && (s.clickEvent = t), r) {
                            var a = r._menu;
                            if (p(o).hasClass(Ne) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && p.contains(o, t.target))) {
                                var l = p.Event(Ae.HIDE, s);
                                p(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), e[n].setAttribute("aria-expanded", "false"), p(a).removeClass(Ne), p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(t) { var e, n = m.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, c._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || p(t.target).closest(Fe).length)) : Ie.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !p(this).hasClass(Oe))) {
                    var e = c._getParentFromElement(this),
                        n = p(e).hasClass(Ne);
                    if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = [].slice.call(e.querySelectorAll(We));
                        if (0 !== i.length) {
                            var o = i.indexOf(t.target);
                            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var r = e.querySelector(je);
                            p(r).trigger("focus")
                        }
                        p(this).trigger("click")
                    }
                }
            }, s(c, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Ye } }, { key: "DefaultType", get: function() { return ze } }]), c
        }();
    p(document).on(Ae.KEYDOWN_DATA_API, je, Xe._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, Fe, Xe._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, Xe._clearMenus).on(Ae.CLICK_DATA_API, je, function(t) { t.preventDefault(), t.stopPropagation(), Xe._jQueryInterface.call(p(this), "toggle") }).on(Ae.CLICK_DATA_API, Re, function(t) { t.stopPropagation() }), p.fn[we] = Xe._jQueryInterface, p.fn[we].Constructor = Xe, p.fn[we].noConflict = function() { return p.fn[we] = De, Xe._jQueryInterface };
    var Ge = "modal",
        $e = "bs.modal",
        Je = "." + $e,
        Ze = p.fn[Ge],
        tn = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        en = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        nn = { HIDE: "hide" + Je, HIDDEN: "hidden" + Je, SHOW: "show" + Je, SHOWN: "shown" + Je, FOCUSIN: "focusin" + Je, RESIZE: "resize" + Je, CLICK_DISMISS: "click.dismiss" + Je, KEYDOWN_DISMISS: "keydown.dismiss" + Je, MOUSEUP_DISMISS: "mouseup.dismiss" + Je, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Je, CLICK_DATA_API: "click" + Je + ".data-api" },
        on = "modal-dialog-scrollable",
        rn = "modal-scrollbar-measure",
        sn = "modal-backdrop",
        an = "modal-open",
        ln = "fade",
        cn = "show",
        un = ".modal-dialog",
        hn = ".modal-body",
        fn = '[data-toggle="modal"]',
        dn = '[data-dismiss="modal"]',
        pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        mn = ".sticky-top",
        gn = function() {
            function o(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(un), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 }
            var t = o.prototype;
            return t.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    p(this._element).hasClass(ln) && (this._isTransitioning = !0);
                    var n = p.Event(nn.SHOW, { relatedTarget: t });
                    p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(nn.CLICK_DISMISS, dn, function(t) { return e.hide(t) }), p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function() { p(e._element).one(nn.MOUSEUP_DISMISS, function(t) { p(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return e._showElement(t) }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = p.Event(nn.HIDE);
                    if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = p(this._element).hasClass(ln);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(nn.FOCUSIN), p(this._element).removeClass(cn), p(this._element).off(nn.CLICK_DISMISS), p(this._dialog).off(nn.MOUSEDOWN_DISMISS), i) {
                            var o = m.getTransitionDurationFromElement(this._element);
                            p(this._element).one(m.TRANSITION_END, function(t) { return e._hideModal(t) }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) { return p(t).off(Je) }), p(document).off(nn.FOCUSIN), p.removeData(this._element, $e), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() { this._adjustDialog() }, t._getConfig = function(t) { return t = l({}, tn, t), m.typeCheckConfig(Ge, t, en), t }, t._showElement = function(t) {
                var e = this,
                    n = p(this._element).hasClass(ln);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(on) ? this._dialog.querySelector(hn).scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), p(this._element).addClass(cn), this._config.focus && this._enforceFocus();
                var i = p.Event(nn.SHOWN, { relatedTarget: t }),
                    o = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, p(e._element).trigger(i) };
                if (n) {
                    var r = m.getTransitionDurationFromElement(this._dialog);
                    p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                } else o()
            }, t._enforceFocus = function() {
                var e = this;
                p(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function(t) { document !== t.target && e._element !== t.target && 0 === p(e._element).has(t.target).length && e._element.focus() })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? p(this._element).on(nn.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? p(window).on(nn.RESIZE, function(t) { return e.handleUpdate(t) }) : p(window).off(nn.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() { p(document.body).removeClass(an), t._resetAdjustments(), t._resetScrollbar(), p(t._element).trigger(nn.HIDDEN) })
            }, t._removeBackdrop = function() { this._backdrop && (p(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function(t) {
                var e = this,
                    n = p(this._element).hasClass(ln) ? ln : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = sn, n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(nn.CLICK_DISMISS, function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && m.reflow(this._backdrop), p(this._backdrop).addClass(cn), !t) return;
                    if (!n) return void t();
                    var i = m.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    p(this._backdrop).removeClass(cn);
                    var o = function() { e._removeBackdrop(), t && t() };
                    if (p(this._element).hasClass(ln)) {
                        var r = m.getTransitionDurationFromElement(this._backdrop);
                        p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o()
                } else t && t()
            }, t._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var o = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(pn)),
                        e = [].slice.call(document.querySelectorAll(mn));
                    p(t).each(function(t, e) {
                        var n = e.style.paddingRight,
                            i = p(e).css("padding-right");
                        p(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                    }), p(e).each(function(t, e) {
                        var n = e.style.marginRight,
                            i = p(e).css("margin-right");
                        p(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = p(document.body).css("padding-right");
                    p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                p(document.body).addClass(an)
            }, t._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(pn));
                p(t).each(function(t, e) {
                    var n = p(e).data("padding-right");
                    p(e).removeData("padding-right"), e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + mn));
                p(e).each(function(t, e) {
                    var n = p(e).data("margin-right");
                    void 0 !== n && p(e).css("margin-right", n).removeData("margin-right")
                });
                var n = p(document.body).data("padding-right");
                p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = rn, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = p(this).data($e),
                        e = l({}, tn, p(this).data(), "object" === _typeof(n) && n ? n : {});
                    if (t || (t = new o(this, e), p(this).data($e, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(o, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return tn } }]), o
        }();
    p(document).on(nn.CLICK_DATA_API, fn, function(t) {
        var e, n = this,
            i = m.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = p(e).data($e) ? "toggle" : l({}, p(e).data(), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = p(e).one(nn.SHOW, function(t) { t.isDefaultPrevented() || r.one(nn.HIDDEN, function() { p(n).is(":visible") && n.focus() }) });
        gn._jQueryInterface.call(p(e), o, this)
    }), p.fn[Ge] = gn._jQueryInterface, p.fn[Ge].Constructor = gn, p.fn[Ge].noConflict = function() { return p.fn[Ge] = Ze, gn._jQueryInterface };
    var _n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        vn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        yn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        En = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function bn(t, s, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(t, e) {
                var n = l[t],
                    i = n.nodeName.toLowerCase();
                if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var o = [].slice.call(n.attributes),
                    r = [].concat(s["*"] || [], s[i] || []);
                o.forEach(function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === _n.indexOf(n) || Boolean(t.nodeValue.match(yn) || t.nodeValue.match(En));
                        for (var i = e.filter(function(t) { return t instanceof RegExp }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(t, r) || n.removeAttribute(t.nodeName)
                })
            }, o = 0, r = l.length; o < r; o++) i(o);
        return n.body.innerHTML
    }
    var wn = "tooltip",
        Cn = "bs.tooltip",
        Tn = "." + Cn,
        Sn = p.fn[wn],
        Dn = "bs-tooltip",
        In = new RegExp("(^|\\s)" + Dn + "\\S+", "g"),
        An = ["sanitize", "whiteList", "sanitizeFn"],
        On = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
        Nn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        kn = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: vn },
        Ln = "show",
        xn = "out",
        Pn = { HIDE: "hide" + Tn, HIDDEN: "hidden" + Tn, SHOW: "show" + Tn, SHOWN: "shown" + Tn, INSERTED: "inserted" + Tn, CLICK: "click" + Tn, FOCUSIN: "focusin" + Tn, FOCUSOUT: "focusout" + Tn, MOUSEENTER: "mouseenter" + Tn, MOUSELEAVE: "mouseleave" + Tn },
        Hn = "fade",
        jn = "show",
        Rn = ".tooltip-inner",
        Fn = ".arrow",
        Mn = "hover",
        Wn = "focus",
        Un = "click",
        Bn = "manual",
        qn = function() {
            function i(t, e) {
                if (void 0 === be) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() { this._isEnabled = !0 }, t.disable = function() { this._isEnabled = !1 }, t.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = p(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (p(this.getTipElement()).hasClass(jn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() { clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function() {
                var e = this;
                if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = p.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    p(this.element).trigger(t);
                    var n = m.findShadowRoot(this.element),
                        i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                        r = m.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && p(o).addClass(Hn);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    p(o).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new be(this.element, o, { placement: a, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Fn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { return e._handlePopperPlacementChange(t) } }), p(o).addClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                    var c = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, p(e.element).trigger(e.constructor.Event.SHOWN), t === xn && e._leave(null, e)
                    };
                    if (p(this.tip).hasClass(Hn)) {
                        var u = m.getTransitionDurationFromElement(this.tip);
                        p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(u)
                    } else c()
                }
            }, t.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = p.Event(this.constructor.Event.HIDE),
                    o = function() { e._hoverState !== Ln && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), p(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() };
                if (p(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (p(n).removeClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Un] = !1, this._activeTrigger[Wn] = !1, this._activeTrigger[Mn] = !1, p(this.tip).hasClass(Hn)) {
                        var r = m.getTransitionDurationFromElement(n);
                        p(n).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o();
                    this._hoverState = ""
                }
            }, t.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function() { return Boolean(this.getTitle()) }, t.addAttachmentClass = function(t) { p(this.getTipElement()).addClass(Dn + "-" + t) }, t.getTipElement = function() { return this.tip = this.tip || p(this.config.template)[0], this.tip }, t.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(p(t.querySelectorAll(Rn)), this.getTitle()), p(t).removeClass(Hn + " " + jn)
            }, t.setElementContent = function(t, e) { "object" !== _typeof(e) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = bn(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? p(e).parent().is(t) || t.empty().append(e) : t.text(p(e).text()) }, t.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) { return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t } : t.offset = this.config.offset, t
            }, t._getContainer = function() { return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container) }, t._getAttachment = function(t) { return Nn[t.toUpperCase()] }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) { return i.toggle(t) });
                    else if (t !== Bn) {
                        var e = t === Mn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Mn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        p(i.element).on(e, i.config.selector, function(t) { return i._enter(t) }).on(n, i.config.selector, function(t) { return i._leave(t) })
                    }
                }), p(this.element).closest(".modal").on("hide.bs.modal", function() { i.element && i.hide() }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = _typeof(this.element.getAttribute("data-original-title"));
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Wn : Mn] = !0), p(e.getTipElement()).hasClass(jn) || e._hoverState === Ln ? e._hoverState = Ln : (clearTimeout(e._timeout), e._hoverState = Ln, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() { e._hoverState === Ln && e.show() }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Wn : Mn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = xn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() { e._hoverState === xn && e.hide() }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) { var e = p(this.element).data(); return Object.keys(e).forEach(function(t) {-1 !== An.indexOf(t) && delete e[t] }), "number" == typeof(t = l({}, this.constructor.Default, e, "object" === _typeof(t) && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), m.typeCheckConfig(wn, t, this.constructor.DefaultType), t.sanitize && (t.template = bn(t.template, t.whiteList, t.sanitizeFn)), t }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = p(this.getTipElement()),
                    e = t.attr("class").match(In);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (p(t).removeClass(Hn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this).data(Cn),
                        e = "object" === _typeof(n) && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), p(this).data(Cn, t)), "string" == typeof n)) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return kn } }, { key: "NAME", get: function() { return wn } }, { key: "DATA_KEY", get: function() { return Cn } }, { key: "Event", get: function() { return Pn } }, { key: "EVENT_KEY", get: function() { return Tn } }, { key: "DefaultType", get: function() { return On } }]), i
        }();
    p.fn[wn] = qn._jQueryInterface, p.fn[wn].Constructor = qn, p.fn[wn].noConflict = function() { return p.fn[wn] = Sn, qn._jQueryInterface };
    var Kn = "popover",
        Qn = "bs.popover",
        Vn = "." + Qn,
        Yn = p.fn[Kn],
        zn = "bs-popover",
        Xn = new RegExp("(^|\\s)" + zn + "\\S+", "g"),
        Gn = l({}, qn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        $n = l({}, qn.DefaultType, { content: "(string|element|function)" }),
        Jn = "fade",
        Zn = "show",
        ti = ".popover-header",
        ei = ".popover-body",
        ni = { HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn, INSERTED: "inserted" + Vn, CLICK: "click" + Vn, FOCUSIN: "focusin" + Vn, FOCUSOUT: "focusout" + Vn, MOUSEENTER: "mouseenter" + Vn, MOUSELEAVE: "mouseleave" + Vn },
        ii = function(t) {
            function i() { return t.apply(this, arguments) || this }! function(t, e) { t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e }(i, t);
            var e = i.prototype;
            return e.isWithContent = function() { return this.getTitle() || this._getContent() }, e.addAttachmentClass = function(t) { p(this.getTipElement()).addClass(zn + "-" + t) }, e.getTipElement = function() { return this.tip = this.tip || p(this.config.template)[0], this.tip }, e.setContent = function() {
                var t = p(this.getTipElement());
                this.setElementContent(t.find(ti), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ei), e), t.removeClass(Jn + " " + Zn)
            }, e._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, e._cleanTipClass = function() {
                var t = p(this.getTipElement()),
                    e = t.attr("class").match(Xn);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this).data(Qn),
                        e = "object" === _typeof(n) ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), p(this).data(Qn, t)), "string" == typeof n)) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Gn } }, { key: "NAME", get: function() { return Kn } }, { key: "DATA_KEY", get: function() { return Qn } }, { key: "Event", get: function() { return ni } }, { key: "EVENT_KEY", get: function() { return Vn } }, { key: "DefaultType", get: function() { return $n } }]), i
        }(qn);
    p.fn[Kn] = ii._jQueryInterface, p.fn[Kn].Constructor = ii, p.fn[Kn].noConflict = function() { return p.fn[Kn] = Yn, ii._jQueryInterface };
    var oi = "scrollspy",
        ri = "bs.scrollspy",
        si = "." + ri,
        ai = p.fn[oi],
        li = { offset: 10, method: "auto", target: "" },
        ci = { offset: "number", method: "string", target: "(string|element)" },
        ui = { ACTIVATE: "activate" + si, SCROLL: "scroll" + si, LOAD_DATA_API: "load" + si + ".data-api" },
        hi = "dropdown-item",
        fi = "active",
        di = '[data-spy="scroll"]',
        pi = ".nav, .list-group",
        mi = ".nav-link",
        gi = ".nav-item",
        _i = ".list-group-item",
        vi = ".dropdown",
        yi = ".dropdown-item",
        Ei = ".dropdown-toggle",
        bi = "offset",
        wi = "position",
        Ci = function() {
            function i(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(ui.SCROLL, function(t) { return n._process(t) }), this.refresh(), this._process()
            }
            var t = i.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? bi : wi,
                    o = "auto" === this._config.method ? t : this._config.method,
                    r = o === wi ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) { var e, n = m.getSelectorFromElement(t); if (n && (e = document.querySelector(n)), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [p(e)[o]().top + r, n] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) })
            }, t.dispose = function() { p.removeData(this._element, ri), p(this._scrollElement).off(si), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function(t) {
                if ("string" != typeof(t = l({}, li, "object" === _typeof(t) && t ? t : {})).target) {
                    var e = p(t.target).attr("id");
                    e || (e = m.getUID(oi), p(t.target).attr("id", e)), t.target = "#" + e
                }
                return m.typeCheckConfig(oi, t, ci), t
            }, t._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }),
                    n = p([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(hi) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), p(this._scrollElement).trigger(ui.ACTIVATE, { relatedTarget: e })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) { return t.classList.contains(fi) }).forEach(function(t) { return t.classList.remove(fi) })
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this).data(ri),
                        e = "object" === _typeof(n) && n;
                    if (t || (t = new i(this, e), p(this).data(ri, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return li } }]), i
        }();
    p(window).on(ui.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(di)), e = t.length; e--;) {
            var n = p(t[e]);
            Ci._jQueryInterface.call(n, n.data())
        }
    }), p.fn[oi] = Ci._jQueryInterface, p.fn[oi].Constructor = Ci, p.fn[oi].noConflict = function() { return p.fn[oi] = ai, Ci._jQueryInterface };
    var Ti = "bs.tab",
        Si = "." + Ti,
        Di = p.fn.tab,
        Ii = { HIDE: "hide" + Si, HIDDEN: "hidden" + Si, SHOW: "show" + Si, SHOWN: "shown" + Si, CLICK_DATA_API: "click" + Si + ".data-api" },
        Ai = "dropdown-menu",
        Oi = "active",
        Ni = "disabled",
        ki = "fade",
        Li = "show",
        xi = ".dropdown",
        Pi = ".nav, .list-group",
        Hi = ".active",
        ji = "> li > .active",
        Ri = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Fi = ".dropdown-toggle",
        Mi = "> .dropdown-menu .active",
        Wi = function() {
            function i(t) { this._element = t }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(Oi) || p(this._element).hasClass(Ni))) {
                    var t, i, e = p(this._element).closest(Pi)[0],
                        o = m.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName || "OL" === e.nodeName ? ji : Hi;
                        i = (i = p.makeArray(p(e).find(r)))[i.length - 1]
                    }
                    var s = p.Event(Ii.HIDE, { relatedTarget: this._element }),
                        a = p.Event(Ii.SHOW, { relatedTarget: i });
                    if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, e);
                        var l = function() {
                            var t = p.Event(Ii.HIDDEN, { relatedTarget: n._element }),
                                e = p.Event(Ii.SHOWN, { relatedTarget: i });
                            p(i).trigger(t), p(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() { p.removeData(this._element, Ti), this._element = null }, t._activate = function(t, e, n) {
                var i = this,
                    o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? p(e).children(Hi) : p(e).find(ji))[0],
                    r = n && o && p(o).hasClass(ki),
                    s = function() { return i._transitionComplete(t, o, n) };
                if (o && r) {
                    var a = m.getTransitionDurationFromElement(o);
                    p(o).removeClass(Li).one(m.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    p(e).removeClass(Oi);
                    var i = p(e.parentNode).find(Mi)[0];
                    i && p(i).removeClass(Oi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (p(t).addClass(Oi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m.reflow(t), t.classList.contains(ki) && t.classList.add(Li), t.parentNode && p(t.parentNode).hasClass(Ai)) {
                    var o = p(t).closest(xi)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(Fi));
                        p(r).addClass(Oi)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this),
                        e = t.data(Ti);
                    if (e || (e = new i(this), t.data(Ti, e)), "string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), i
        }();
    p(document).on(Ii.CLICK_DATA_API, Ri, function(t) { t.preventDefault(), Wi._jQueryInterface.call(p(this), "show") }), p.fn.tab = Wi._jQueryInterface, p.fn.tab.Constructor = Wi, p.fn.tab.noConflict = function() { return p.fn.tab = Di, Wi._jQueryInterface };
    var Ui = "toast",
        Bi = "bs.toast",
        qi = "." + Bi,
        Ki = p.fn[Ui],
        Qi = { CLICK_DISMISS: "click.dismiss" + qi, HIDE: "hide" + qi, HIDDEN: "hidden" + qi, SHOW: "show" + qi, SHOWN: "shown" + qi },
        Vi = "fade",
        Yi = "hide",
        zi = "show",
        Xi = "showing",
        Gi = { animation: "boolean", autohide: "boolean", delay: "number" },
        $i = { animation: !0, autohide: !0, delay: 500 },
        Ji = '[data-dismiss="toast"]',
        Zi = function() {
            function o(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() }
            var t = o.prototype;
            return t.show = function() {
                var t = this;
                p(this._element).trigger(Qi.SHOW), this._config.animation && this._element.classList.add(Vi);
                var e = function() { t._element.classList.remove(Xi), t._element.classList.add(zi), p(t._element).trigger(Qi.SHOWN), t._config.autohide && t.hide() };
                if (this._element.classList.remove(Yi), this._element.classList.add(Xi), this._config.animation) {
                    var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, t.hide = function(t) {
                var e = this;
                this._element.classList.contains(zi) && (p(this._element).trigger(Qi.HIDE), t ? this._close() : this._timeout = setTimeout(function() { e._close() }, this._config.delay))
            }, t.dispose = function() { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(zi) && this._element.classList.remove(zi), p(this._element).off(Qi.CLICK_DISMISS), p.removeData(this._element, Bi), this._element = null, this._config = null }, t._getConfig = function(t) { return t = l({}, $i, p(this._element).data(), "object" === _typeof(t) && t ? t : {}), m.typeCheckConfig(Ui, t, this.constructor.DefaultType), t }, t._setListeners = function() {
                var t = this;
                p(this._element).on(Qi.CLICK_DISMISS, Ji, function() { return t.hide(!0) })
            }, t._close = function() {
                var t = this,
                    e = function() { t._element.classList.add(Yi), p(t._element).trigger(Qi.HIDDEN) };
                if (this._element.classList.remove(zi), this._config.animation) {
                    var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, o._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = p(this),
                        e = t.data(Bi),
                        n = "object" === _typeof(i) && i;
                    if (e || (e = new o(this, n), t.data(Bi, e)), "string" == typeof i) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i](this)
                    }
                })
            }, s(o, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "DefaultType", get: function() { return Gi } }, { key: "Default", get: function() { return $i } }]), o
        }();
    p.fn[Ui] = Zi._jQueryInterface, p.fn[Ui].Constructor = Zi, p.fn[Ui].noConflict = function() { return p.fn[Ui] = Ki, Zi._jQueryInterface },
        function() { if (void 0 === p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = p.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(), t.Util = m, t.Alert = g, t.Button = k, t.Carousel = at, t.Collapse = Ct, t.Dropdown = Xe, t.Modal = gn, t.Popover = ii, t.Scrollspy = Ci, t.Tab = Wi, t.Toast = Zi, t.Tooltip = qn, Object.defineProperty(t, "__esModule", { value: !0 })
}),
function() {
    var t = -1 < navigator.userAgent.toLowerCase().indexOf("webkit"),
        e = -1 < navigator.userAgent.toLowerCase().indexOf("opera"),
        n = -1 < navigator.userAgent.toLowerCase().indexOf("msie");
    (t || e || n) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function() { var t, e = location.hash.substring(1); /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus()) }, !1)
}();
(function($, root, undefined) {
    $(function() {
        'use strict';
        $('.postz').imagesLoaded(function() {
            $('.postz').masonry({
                itemSelector: '.newsblock',
                columnWidth: '.single',
                percentPosition: true,
                gutter: 30,
            });
        });
    });
})(jQuery, this);
/*! This file is auto-generated */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):jQuery&&!jQuery.fn.hoverIntent&&e(jQuery)}(function(f){"use strict";function u(e){return"function"==typeof e}var i,r,v={interval:100,sensitivity:6,timeout:0},s=0,a=function(e){i=e.pageX,r=e.pageY},p=function(e,t,n,o){if(Math.sqrt((n.pX-i)*(n.pX-i)+(n.pY-r)*(n.pY-r))<o.sensitivity)return t.off(n.event,a),delete n.timeoutId,n.isActive=!0,e.pageX=i,e.pageY=r,delete n.pX,delete n.pY,o.over.apply(t[0],[e]);n.pX=i,n.pY=r,n.timeoutId=setTimeout(function(){p(e,t,n,o)},o.interval)};f.fn.hoverIntent=function(e,t,n){function o(e){var u=f.extend({},e),r=f(this),v=((t=r.data("hoverIntent"))||r.data("hoverIntent",t={}),t[i]),t=(v||(t[i]=v={id:i}),v.timeoutId&&(v.timeoutId=clearTimeout(v.timeoutId)),v.event="mousemove.hoverIntent.hoverIntent"+i);"mouseenter"===e.type?v.isActive||(v.pX=u.pageX,v.pY=u.pageY,r.off(t,a).on(t,a),v.timeoutId=setTimeout(function(){p(u,r,v,d)},d.interval)):v.isActive&&(r.off(t,a),v.timeoutId=setTimeout(function(){var e,t,n,o,i;e=u,t=r,n=v,o=d.out,(i=t.data("hoverIntent"))&&delete i[n.id],o.apply(t[0],[e])},d.timeout))}var i=s++,d=f.extend({},v);f.isPlainObject(e)?(d=f.extend(d,e),u(d.out)||(d.out=d.over)):d=u(t)?f.extend(d,{over:e,out:t,selector:n}):f.extend(d,{over:e,out:e,selector:t});return this.on({"mouseenter.hoverIntent":o,"mouseleave.hoverIntent":o},d.selector)}});
/*! Max Mega Menu jQuery Plugin */
(function($){"use strict";$.maxmegamenu=function(menu,options){var plugin=this;var $menu=$(menu);var $wrap=$(menu).parent();var $toggle_bar=$menu.siblings(".mega-menu-toggle");var html_body_class_timeout;var defaults={event:$menu.attr("data-event"),effect:$menu.attr("data-effect"),effect_speed:parseInt($menu.attr("data-effect-speed")),effect_mobile:$menu.attr("data-effect-mobile"),effect_speed_mobile:parseInt($menu.attr("data-effect-speed-mobile")),panel_width:$menu.attr("data-panel-width"),panel_inner_width:$menu.attr("data-panel-inner-width"),mobile_force_width:$menu.attr("data-mobile-force-width"),mobile_overlay:$menu.attr("data-mobile-overlay"),mobile_state:$menu.attr("data-mobile-state"),mobile_direction:$menu.attr("data-mobile-direction"),second_click:$menu.attr("data-second-click"),vertical_behaviour:$menu.attr("data-vertical-behaviour"),document_click:$menu.attr("data-document-click"),breakpoint:$menu.attr("data-breakpoint"),unbind_events:$menu.attr("data-unbind"),hover_intent_timeout:$menu.attr("data-hover-intent-timeout"),hover_intent_interval:$menu.attr("data-hover-intent-interval")};plugin.settings={};var items_with_submenus=$("li.mega-menu-megamenu.mega-menu-item-has-children,"+"li.mega-menu-flyout.mega-menu-item-has-children,"+"li.mega-menu-tabbed > ul.mega-sub-menu > li.mega-menu-item-has-children,"+"li.mega-menu-flyout li.mega-menu-item-has-children",$menu);var collapse_children_parents=$("li.mega-menu-megamenu li.mega-menu-item-has-children.mega-collapse-children > a.mega-menu-link",$menu);plugin.addAnimatingClass=function(element){if(plugin.settings.effect==="disabled"){return;}
$(".mega-animating").removeClass("mega-animating");var timeout=plugin.settings.effect_speed+parseInt(plugin.settings.hover_intent_timeout,10);element.addClass("mega-animating");setTimeout(function(){element.removeClass("mega-animating");},timeout);};plugin.hideAllPanels=function(){$(".mega-toggle-on > a.mega-menu-link",$menu).each(function(){plugin.hidePanel($(this),false);});};plugin.expandMobileSubMenus=function(){if(plugin.settings.mobile_direction!=='vertical'){return;}
$(".mega-menu-item-has-children.mega-expand-on-mobile > a.mega-menu-link",$menu).each(function(){plugin.showPanel($(this),true);});if(plugin.settings.mobile_state=='expand_all'){$(".mega-menu-item-has-children:not(.mega-toggle-on) > a.mega-menu-link",$menu).each(function(){plugin.showPanel($(this),true);});}
if(plugin.settings.mobile_state=='expand_active'){const activeItemSelectors=["li.mega-current-menu-ancestor.mega-menu-item-has-children > a.mega-menu-link","li.mega-current-menu-item.mega-menu-item-has-children > a.mega-menu-link","li.mega-current-menu-parent.mega-menu-item-has-children > a.mega-menu-link","li.mega-current_page_ancestor.mega-menu-item-has-children > a.mega-menu-link","li.mega-current_page_item.mega-menu-item-has-children > a.mega-menu-link"];$menu.find(activeItemSelectors.join(', ')).each(function(){plugin.showPanel($(this),true);});}}
plugin.hideSiblingPanels=function(anchor,immediate){anchor.parent().parent().find(".mega-toggle-on").children("a.mega-menu-link").each(function(){plugin.hidePanel($(this),immediate);});};plugin.isDesktopView=function(){var width=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return width>plugin.settings.breakpoint;};plugin.isMobileView=function(){return!plugin.isDesktopView();};plugin.showPanel=function(anchor,immediate){if($.isNumeric(anchor)){anchor=$("li.mega-menu-item-"+anchor,$menu).find("a.mega-menu-link").first();}else if(anchor.is("li.mega-menu-item")){anchor=anchor.find("a.mega-menu-link").first();}
anchor.parent().triggerHandler("before_open_panel");anchor.parent().find("[aria-expanded]").first().attr("aria-expanded","true");$(".mega-animating").removeClass("mega-animating");if(plugin.isMobileView()&&anchor.parent().hasClass("mega-hide-sub-menu-on-mobile")){return;}
if(plugin.isDesktopView()&&($menu.hasClass("mega-menu-horizontal")||$menu.hasClass("mega-menu-vertical"))&&!anchor.parent().hasClass("mega-collapse-children")){plugin.hideSiblingPanels(anchor,true);}
if((plugin.isMobileView()&&$wrap.hasClass("mega-keyboard-navigation"))||plugin.settings.vertical_behaviour==="accordion"){plugin.hideSiblingPanels(anchor,false);}
plugin.calculateDynamicSubmenuWidths(anchor);if(plugin.shouldUseSlideAnimation(anchor,immediate)){var speed=plugin.isMobileView()?plugin.settings.effect_speed_mobile:plugin.settings.effect_speed;anchor.siblings(".mega-sub-menu").css("display","none").animate({"height":"show","paddingTop":"show","paddingBottom":"show","minHeight":"show"},speed,function(){$(this).css("display","");});}
anchor.parent().addClass("mega-toggle-on").triggerHandler("open_panel");};plugin.shouldUseSlideAnimation=function(anchor,immediate){if(immediate==true){return false;}
if(anchor.parent().hasClass("mega-collapse-children")){return true;}
if(plugin.isDesktopView()&&plugin.settings.effect==="slide"){return true;}
if(plugin.isMobileView()){if(plugin.settings.effect_mobile==="slide"){return true;}
if(plugin.settings.effect_mobile==="slide_left"||plugin.settings.effect_mobile==="slide_right"){return plugin.settings.mobile_direction!=="horizontal";}}
return false;};plugin.hidePanel=function(anchor,immediate){if($.isNumeric(anchor)){anchor=$("li.mega-menu-item-"+anchor,$menu).find("a.mega-menu-link").first();}else if(anchor.is("li.mega-menu-item")){anchor=anchor.find("a.mega-menu-link").first();}
anchor.parent().triggerHandler("before_close_panel");anchor.parent().find("[aria-expanded]").first().attr("aria-expanded","false");if(plugin.shouldUseSlideAnimation(anchor)){var speed=plugin.isMobileView()?plugin.settings.effect_speed_mobile:plugin.settings.effect_speed;anchor.siblings(".mega-sub-menu").animate({"height":"hide","paddingTop":"hide","paddingBottom":"hide","minHeight":"hide"},speed,function(){anchor.siblings(".mega-sub-menu").css("display","");anchor.parent().removeClass("mega-toggle-on").triggerHandler("close_panel");});return;}
if(immediate){anchor.siblings(".mega-sub-menu").css("display","none").delay(plugin.settings.effect_speed).queue(function(){$(this).css("display","").dequeue();});}
anchor.siblings(".mega-sub-menu").find(".widget_media_video video").each(function(){this.player.pause();});anchor.parent().removeClass("mega-toggle-on").triggerHandler("close_panel");plugin.addAnimatingClass(anchor.parent());};plugin.calculateDynamicSubmenuWidths=function(anchor){if(anchor.parent().hasClass("mega-menu-megamenu")&&anchor.parent().parent().hasClass("max-mega-menu")&&plugin.settings.panel_width){if(plugin.isDesktopView()){var submenu_offset=$menu.offset();var target_offset=$(plugin.settings.panel_width).offset();if(plugin.settings.panel_width=='100vw'){target_offset=$('body').offset();anchor.siblings(".mega-sub-menu").css({left:(target_offset.left-submenu_offset.left)+"px"});}else if($(plugin.settings.panel_width).length>0){anchor.siblings(".mega-sub-menu").css({width:$(plugin.settings.panel_width).outerWidth(),left:(target_offset.left-submenu_offset.left)+"px"});}}else{anchor.siblings(".mega-sub-menu").css({width:"",left:""});}}
if(anchor.parent().hasClass("mega-menu-megamenu")&&anchor.parent().parent().hasClass("max-mega-menu")&&plugin.settings.panel_inner_width&&$(plugin.settings.panel_inner_width).length>0){var target_width=0;if($(plugin.settings.panel_inner_width).length){target_width=parseInt($(plugin.settings.panel_inner_width).width(),10);}else{target_width=parseInt(plugin.settings.panel_inner_width,10);}
anchor.siblings(".mega-sub-menu").css({"paddingLeft":"","paddingRight":""});var submenu_width=parseInt(anchor.siblings(".mega-sub-menu").innerWidth(),10);if(plugin.isDesktopView()&&target_width>0&&target_width<submenu_width){anchor.siblings(".mega-sub-menu").css({"paddingLeft":(submenu_width-target_width)/2+"px","paddingRight":(submenu_width-target_width)/2+"px"});}}};plugin.bindClickEvents=function(){if($wrap.data('has-click-events')===true){return;}
$wrap.data('has-click-events',true);var dragging=false;$(document).on({"touchmove":function(e){dragging=true;},"touchstart":function(e){dragging=false;}});$(document).on("click touchend",function(e){if(!dragging&&plugin.settings.document_click==="collapse"&&!$(e.target).closest(".mega-menu-wrap").length){plugin.hideAllPanels();plugin.hideMobileMenu();}
dragging=false;});var clickable_parents=$("> a.mega-menu-link",items_with_submenus).add(collapse_children_parents);clickable_parents.on("touchend.megamenu",function(e){if(plugin.settings.event==="hover_intent"){plugin.unbindHoverIntentEvents();}
if(plugin.settings.event==="hover"){plugin.unbindHoverEvents();}});clickable_parents.on("click.megamenu",function(e){if($(e.target).hasClass('mega-indicator')){return;}
if(plugin.isDesktopView()&&$(this).parent().hasClass("mega-toggle-on")&&$(this).closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")){if(plugin.settings.second_click==="go"){return;}else{e.preventDefault();return;}}
if(dragging){return;}
if(plugin.isMobileView()&&$(this).parent().hasClass("mega-hide-sub-menu-on-mobile")){return;}
if((plugin.settings.second_click==="go"||$(this).parent().hasClass("mega-click-click-go"))&&$(this).attr("href")!==undefined){if(!$(this).parent().hasClass("mega-toggle-on")){e.preventDefault();plugin.showPanel($(this));}}else{e.preventDefault();if($(this).parent().hasClass("mega-toggle-on")){plugin.hidePanel($(this),false);}else{plugin.showPanel($(this));}}});if(plugin.settings.second_click==="disabled"){clickable_parents.off("click.megamenu");}
$(".mega-close-after-click:not(.mega-menu-item-has-children) > a.mega-menu-link",$menu).on("click",function(){plugin.hideAllPanels();plugin.hideMobileMenu();});$("button.mega-close",$wrap).on("click",function(e){plugin.hideMobileMenu();});};plugin.bindHoverEvents=function(){items_with_submenus.on({"mouseenter.megamenu":function(){plugin.unbindClickEvents();if(!$(this).hasClass("mega-toggle-on")){plugin.showPanel($(this).children("a.mega-menu-link"));}},"mouseleave.megamenu":function(){if($(this).hasClass("mega-toggle-on")&&!$(this).hasClass("mega-disable-collapse")&&!$(this).parent().parent().hasClass("mega-menu-tabbed")){plugin.hidePanel($(this).children("a.mega-menu-link"),false);}}});};plugin.bindHoverIntentEvents=function(){items_with_submenus.hoverIntent({over:function(){plugin.unbindClickEvents();if(!$(this).hasClass("mega-toggle-on")){plugin.showPanel($(this).children("a.mega-menu-link"));}},out:function(){if($(this).hasClass("mega-toggle-on")&&!$(this).hasClass("mega-disable-collapse")&&!$(this).parent().parent().hasClass("mega-menu-tabbed")){plugin.hidePanel($(this).children("a.mega-menu-link"),false);}},timeout:plugin.settings.hover_intent_timeout,interval:plugin.settings.hover_intent_interval});};plugin.bindKeyboardEvents=function(){var tab_key=9;var escape_key=27;var enter_key=13;var left_arrow_key=37;var up_arrow_key=38;var right_arrow_key=39;var down_arrow_key=40;var space_key=32;var isMobileOffCanvasHorizontal=function(){return plugin.isMobileView()&&(plugin.settings.effect_mobile==='slide_right'||plugin.settings.effect_mobile==='')&&plugin.settings.mobile_direction==='horizontal';}
var shouldTrapFocusInCurrentSubMenu=function(){return isMobileOffCanvasHorizontal()&&(keyCode===up_arrow_key||keyCode===down_arrow_key||keyCode===tab_key);}
$wrap.on("keyup.megamenu",".max-mega-menu, .mega-menu-toggle",function(e){var keyCode=e.keyCode||e.which;var active_link=$(e.target);if(keyCode===tab_key){$wrap.addClass("mega-keyboard-navigation");plugin.bindClickEvents();}});$wrap.on("keydown.megamenu","a.mega-menu-link, .mega-indicator, .mega-menu-toggle-block, .mega-menu-toggle-animated-block button",function(e){if(!$wrap.hasClass("mega-keyboard-navigation")){return;}
var keyCode=e.keyCode||e.which;var active_link=$(e.target);if(keyCode===space_key&&active_link.is(".mega-menu-link")){e.preventDefault();if(active_link.parent().is(items_with_submenus)){if(active_link.parent().hasClass("mega-toggle-on")&&!active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")){plugin.hidePanel(active_link);}else{plugin.showPanel(active_link);}}}
if(keyCode===space_key&&active_link.is("mega-indicator")){e.preventDefault();if(active_link.parent().parent().hasClass("mega-toggle-on")&&!active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")){plugin.hidePanel(active_link.parent());}else{plugin.showPanel(active_link.parent());}}
if(keyCode===escape_key){var submenu_open=$(".mega-toggle-on",$menu).length!==0;if(submenu_open){var focused_menu_item=$menu.find(":focus");if(focused_menu_item.closest('.mega-menu-flyout.mega-toggle-on').length!==0){var nearest_parent_of_focused_item_li=focused_menu_item.closest('.mega-toggle-on');var nearest_parent_of_focused_item_a=$("> a.mega-menu-link",nearest_parent_of_focused_item_li);plugin.hidePanel(nearest_parent_of_focused_item_a);nearest_parent_of_focused_item_a.focus();}
if(focused_menu_item.closest('.mega-menu-megamenu.mega-toggle-on').length!==0){var nearest_parent_of_focused_item_li=focused_menu_item.closest('.mega-menu-megamenu.mega-toggle-on');var nearest_parent_of_focused_item_a=$("> a.mega-menu-link",nearest_parent_of_focused_item_li);plugin.hidePanel(nearest_parent_of_focused_item_a);nearest_parent_of_focused_item_a.focus();}}
if(plugin.isMobileView()&&!submenu_open){plugin.hideMobileMenu();$(".mega-menu-toggle-block, button.mega-toggle-animated",$toggle_bar).first().focus();}}
if(keyCode===space_key||keyCode===enter_key){if(active_link.is(".mega-menu-toggle-block, .mega-menu-toggle-animated-block button")){e.preventDefault();if($toggle_bar.hasClass("mega-menu-open")){plugin.hideMobileMenu();}else{plugin.showMobileMenu();}}}
if(keyCode===enter_key){if(active_link.is(".mega-indicator")){if(active_link.closest("li.mega-menu-item").hasClass("mega-toggle-on")&&!active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")){plugin.hidePanel(active_link.parent());}else{plugin.showPanel(active_link.parent());}
return;}
if(active_link.parent().is(items_with_submenus)){if(plugin.isMobileView()&&active_link.parent().is(".mega-hide-sub-menu-on-mobile")){return;}
if(active_link.is("[href]")===false){if(active_link.parent().hasClass("mega-toggle-on")&&!active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")){plugin.hidePanel(active_link);}else{plugin.showPanel(active_link);}
return;}
if(active_link.parent().hasClass("mega-toggle-on")&&!active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")){return;}else{e.preventDefault();plugin.showPanel(active_link);}}}
if(shouldTrapFocusInCurrentSubMenu()){var focused_item=$(":focus",$menu);if(focused_item.length===0){e.preventDefault();$("> li.mega-menu-item:visible",$menu).find("> a.mega-menu-link, .mega-search span[role=button]").first().focus();return;}
var next_item_to_focus=focused_item.parent().nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").first();if(next_item_to_focus.length===0&&focused_item.closest(".mega-menu-megamenu").length!==0){var all_li_parents=focused_item.parentsUntil(".mega-menu-megamenu");if(focused_item.is(all_li_parents.find("a.mega-menu-link").last())){next_item_to_focus=all_li_parents.find(".mega-back-button:visible > a.mega-menu-link").first();}}
if(next_item_to_focus.length===0){next_item_to_focus=focused_item.parent().prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").first();}
if(next_item_to_focus.length!==0){e.preventDefault();next_item_to_focus.focus();}}
var shouldGoToNextTopLevelItem=function(){return((keyCode===right_arrow_key&&plugin.isDesktopView())||(keyCode===down_arrow_key&&plugin.isMobileView()))&&$menu.hasClass("mega-menu-horizontal");}
var shouldGoToPreviousTopLevelItem=function(){return((keyCode===left_arrow_key&&plugin.isDesktopView())||(keyCode===up_arrow_key&&plugin.isMobileView()))&&$menu.hasClass("mega-menu-horizontal");}
if(shouldGoToNextTopLevelItem()){e.preventDefault();var next_top_level_item=$("> .mega-toggle-on",$menu).nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").first();if(next_top_level_item.length===0){next_top_level_item=$(":focus",$menu).parent().nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").first();}
if(next_top_level_item.length===0){next_top_level_item=$(":focus",$menu).parent().parent().parent().nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").first();}
plugin.hideAllPanels();next_top_level_item.focus();}
if(shouldGoToPreviousTopLevelItem()){e.preventDefault();var prev_top_level_item=$("> .mega-toggle-on",$menu).prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").last();if(prev_top_level_item.length===0){prev_top_level_item=$(":focus",$menu).parent().prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").last();}
if(prev_top_level_item.length===0){prev_top_level_item=$(":focus",$menu).parent().parent().parent().prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").last();}
plugin.hideAllPanels();prev_top_level_item.focus();}});$wrap.on("focusout.megamenu",function(e){if($wrap.hasClass("mega-keyboard-navigation")){setTimeout(function(){var menu_has_focus=$wrap.find(":focus").length>0;if(!menu_has_focus){$wrap.removeClass("mega-keyboard-navigation");plugin.hideAllPanels();plugin.hideMobileMenu();}},10);}});};plugin.unbindAllEvents=function(){$("ul.mega-sub-menu, li.mega-menu-item, li.mega-menu-row, li.mega-menu-column, a.mega-menu-link, .mega-indicator",$menu).off().unbind();};plugin.unbindClickEvents=function(){if($wrap.hasClass('mega-keyboard-navigation')){return;}
$("> a.mega-menu-link",items_with_submenus).not(collapse_children_parents).off("click.megamenu touchend.megamenu");$wrap.data('has-click-events',false);};plugin.unbindHoverEvents=function(){items_with_submenus.off("mouseenter.megamenu mouseleave.megamenu");};plugin.unbindHoverIntentEvents=function(){items_with_submenus.off("mouseenter mouseleave").removeProp("hoverIntent_t").removeProp("hoverIntent_s");};plugin.unbindKeyboardEvents=function(){$wrap.off("keyup.megamenu keydown.megamenu focusout.megamenu");};plugin.unbindMegaMenuEvents=function(){if(plugin.settings.event==="hover_intent"){plugin.unbindHoverIntentEvents();}
if(plugin.settings.event==="hover"){plugin.unbindHoverEvents();}
plugin.unbindClickEvents();plugin.unbindKeyboardEvents();};plugin.bindMegaMenuEvents=function(){plugin.unbindMegaMenuEvents();if(plugin.isDesktopView()&&plugin.settings.event==="hover_intent"){plugin.bindHoverIntentEvents();}
if(plugin.isDesktopView()&&plugin.settings.event==="hover"){plugin.bindHoverEvents();}
plugin.bindClickEvents();plugin.bindKeyboardEvents();};plugin.checkWidth=function(){if(plugin.isMobileView()&&$menu.data("view")==="desktop"){plugin.switchToMobile();}
if(plugin.isDesktopView()&&$menu.data("view")==="mobile"){plugin.switchToDesktop();}
plugin.calculateDynamicSubmenuWidths($("> li.mega-menu-megamenu > a.mega-menu-link",$menu));};plugin.reverseRightAlignedItems=function(){if(!$("body").hasClass("rtl")&&$menu.hasClass("mega-menu-horizontal")&&$menu.css("display")!=='flex'){$menu.append($menu.children("li.mega-item-align-right").get().reverse());}};plugin.addClearClassesToMobileItems=function(){$(".mega-menu-row",$menu).each(function(){$("> .mega-sub-menu > .mega-menu-column:not(.mega-hide-on-mobile)",$(this)).filter(":even").addClass("mega-menu-clear");});};plugin.initDesktop=function(){$menu.data("view","desktop");plugin.bindMegaMenuEvents();plugin.initIndicators();};plugin.initMobile=function(){plugin.switchToMobile();};plugin.switchToDesktop=function(){$menu.data("view","desktop");plugin.bindMegaMenuEvents();plugin.reverseRightAlignedItems();plugin.hideAllPanels();plugin.hideMobileMenu(true);};plugin.switchToMobile=function(){$menu.data("view","mobile");plugin.bindMegaMenuEvents();plugin.initIndicators();plugin.reverseRightAlignedItems();plugin.addClearClassesToMobileItems();plugin.hideAllPanels();plugin.expandMobileSubMenus();};plugin.initToggleBar=function(){$toggle_bar.on("click",function(e){if($(e.target).is(".mega-menu-toggle, .mega-menu-toggle-custom-block *, .mega-menu-toggle-block, .mega-menu-toggle-animated-block, .mega-menu-toggle-animated-block *, .mega-toggle-blocks-left, .mega-toggle-blocks-center, .mega-toggle-blocks-right, .mega-toggle-label, .mega-toggle-label span")){e.preventDefault();if($(this).hasClass("mega-menu-open")){plugin.hideMobileMenu();}else{plugin.showMobileMenu();}}});};plugin.initIndicators=function(){$menu.off('click.megamenu','.mega-indicator');$menu.on('click.megamenu','.mega-indicator',function(e){e.preventDefault();e.stopPropagation();if($(this).closest(".mega-menu-item").hasClass("mega-toggle-on")){if(!$(this).closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")||plugin.isMobileView()){plugin.hidePanel($(this).parent(),false);}}else{plugin.showPanel($(this).parent(),false);}});};plugin.hideMobileMenu=function(force){force=force||false;if(!$toggle_bar.is(":visible")&&!force){return;}
html_body_class_timeout=setTimeout(function(){$("body").removeClass($menu.attr("id")+"-mobile-open");$("html").removeClass($menu.attr("id")+"-off-canvas-open");},plugin.settings.effect_speed_mobile);$(".mega-toggle-label, .mega-toggle-animated",$toggle_bar).attr("aria-expanded","false");if(plugin.settings.effect_mobile==="slide"&&!force){$menu.animate({"height":"hide"},plugin.settings.effect_speed_mobile,function(){$menu.css({width:"",left:"",display:""});$toggle_bar.removeClass("mega-menu-open");});}else{$menu.css({width:"",left:"",display:""});$toggle_bar.removeClass("mega-menu-open");}
$menu.triggerHandler("mmm:hideMobileMenu");};plugin.showMobileMenu=function(){if(!$toggle_bar.is(":visible")){return;}
clearTimeout(html_body_class_timeout);$("body").addClass($menu.attr("id")+"-mobile-open");plugin.expandMobileSubMenus();if(plugin.settings.effect_mobile==="slide_left"||plugin.settings.effect_mobile==="slide_right"){$("html").addClass($menu.attr("id")+"-off-canvas-open");}
$(".mega-toggle-label, .mega-toggle-animated",$toggle_bar).attr("aria-expanded","true");if(plugin.settings.effect_mobile==="slide"){$menu.animate({"height":"show"},plugin.settings.effect_speed_mobile,function(){$(this).css("display","");});}
$toggle_bar.addClass("mega-menu-open");plugin.toggleBarForceWidth();$menu.triggerHandler("mmm:showMobileMenu");};plugin.toggleBarForceWidth=function(){if($(plugin.settings.mobile_force_width).length&&(plugin.settings.effect_mobile==="slide"||plugin.settings.effect_mobile==="disabled")){var submenu_offset=$toggle_bar.offset();var target_offset=$(plugin.settings.mobile_force_width).offset();$menu.css({width:$(plugin.settings.mobile_force_width).outerWidth(),left:(target_offset.left-submenu_offset.left)+"px"});}};plugin.init=function(){$menu.triggerHandler("before_mega_menu_init");plugin.settings=$.extend({},defaults,options);$menu.removeClass("mega-no-js");plugin.initToggleBar();if(plugin.settings.unbind_events==="true"){plugin.unbindAllEvents();}
$(window).on("load",function(){plugin.calculateDynamicSubmenuWidths($("> li.mega-menu-megamenu > a.mega-menu-link",$menu));});if(plugin.isDesktopView()){plugin.initDesktop();}else{plugin.initMobile();}
$(window).on("resize",function(){plugin.checkWidth();});$menu.triggerHandler("after_mega_menu_init");};plugin.init();};$.fn.maxmegamenu=function(options){return this.each(function(){if(undefined===$(this).data("maxmegamenu")){var plugin=new $.maxmegamenu(this,options);$(this).data("maxmegamenu",plugin);}});};$(function(){$(".max-mega-menu").maxmegamenu();});}(jQuery));


(function() {
  const translations = {
    en: {
      "欢迎": "Welcome",
      "这是一个语言切换演示": "This is a demo of language switching",
      "点击我": "Click me"
    },
    es: {
      "欢迎": "Bienvenido",
      "这是一个语言切换演示": "Esta es una demostración del cambio de idioma",
      "点击我": "Haz clic"
    }
  };

  // 创建语言选择器
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '16px';
  container.style.right = '16px';
  container.style.zIndex = '9999';
  container.innerHTML = `
    <select id="langSelect" style="
      padding: 6px 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background: white;
      font-size: 14px;
      cursor: pointer;
    ">
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  `;
  document.body.appendChild(container);

  function translatePage(lang) {
    if(lang=='es'){
        location.href='/es/index.html'
    }else{
        location.href='/index.html'
    }
  }

  document.getElementById('langSelect').addEventListener('change', function() {
    translatePage(this.value);
  });

})();