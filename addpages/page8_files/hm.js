(function(){var h={},mt={},c={id:"322c99e6c2ea67aa2d3e035027d5eef5",dm:["./addpagesddpages/page8_files/bjhmcare.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:11960541,qiao:0,lxb:11960541,kbtrk:0,pt:0,aet:'',hca:'8B19FDBEFBE453D2',conv:0,med:1,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(b,a,e){var d;e.W&&(d=new Date,d.setTime(d.getTime()+e.W));document.cookie=b+"="+a+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.Jb?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};mt.lang={};mt.lang.d=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};
mt.lang.va=function(b){return mt.lang.d(b,"Number")&&isFinite(b)};mt.lang.ba=function(){return mt.lang.d(c.aet,"String")};mt.lang.j=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.C=function(b,a){var e=u;if(b==t||!mt.lang.d(b,"Array")||a===r)return e;if(Array.prototype.indexOf)e=-1!==b.indexOf(a);else for(var d=0;d<b.length;d++)if(b[d]===a){e=s;break}return e};
(function(){var b=mt.lang;mt.e={};mt.e.qa=function(a){return document.getElementById(a)};mt.e.$=function(a,b){var d=[],k=[];if(!a)return k;for(;a.parentNode!=t;){for(var l=0,p=0,m=a.parentNode.childNodes.length,f=0;f<m;f++){var g=a.parentNode.childNodes[f];if(g.nodeName===a.nodeName&&(l++,g===a&&(p=l),0<p&&1<l))break}if((m=""!==a.id)&&b){d.unshift("#"+encodeURIComponent(a.id));break}else m&&(m="#"+encodeURIComponent(a.id),m=0<d.length?m+">"+d.join(">"):m,k.push(m)),d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<l?"["+p+"]":""));a=a.parentNode}k.push(d.join(">"));return k};mt.e.Va=function(a){return(a=mt.e.$(a,s))&&a.length?String(a[0]):""};mt.e.Eb=function(a){return mt.e.$(a,u)};mt.e.Cb=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.e.Qa=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.e.Db=function(a){var b={top:0,left:0};if(!a)return b;var d=mt.e.Qa(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());
return{top:b.top+(window.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(window.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}};mt.e.getAttribute=function(a,b){var d=a.getAttribute&&a.getAttribute(b)||t;if(!d&&a.attributes&&a.attributes.length)for(var k=a.attributes,l=k.length,p=0;p<l;p++)k[p].nodeName===b&&(d=k[p].nodeValue);return d};mt.e.K=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.e.Xa=function(a){var e="";a.textContent?e=b.trim(a.textContent):
a.innerText&&(e=b.trim(a.innerText));e&&(e=e.replace(/\s+/g," ").substring(0,255));return e};mt.e.Ra=function(a){var b=mt.e.K(a);"input"===b&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===b?(b=mt.e.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.e.Xa(a);return String(a).substring(0,255)};(function(){(mt.e.za=function(){function a(){if(!a.N){a.N=s;for(var b=0,d=k.length;b<d;b++)k[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,
1);return}a()}var d=u,k=[],l;document.addEventListener?l=function(){document.removeEventListener("DOMContentLoaded",l,u);a()}:document.attachEvent&&(l=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())});(function(){if(!d)if(d=s,"complete"===document.readyState)a.N=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",l,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",
l);window.attachEvent("onload",a);var k=u;try{k=window.frameElement==t}catch(m){}document.documentElement.doScroll&&k&&b()}})();return function(b){a.N?b():k.push(b)}}()).N=u})();return mt.e})();mt.event={};mt.event.c=function(b,a,e){b.attachEvent?b.attachEvent("on"+a,function(a){e.call(b,a)}):b.addEventListener&&b.addEventListener(a,e,u)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=u};
(function(){var b=mt.event;mt.g={};mt.g.ua=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.fb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.jb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.L=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.B=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.m={};mt.m.parse=function(){return(new Function('return (" + source + ")'))()};
mt.m.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return b(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var e=["["],l=d.length,p,m,f;for(m=0;m<l;m++)switch(f=d[m],typeof f){case "undefined":case "function":case "unknown":break;default:p&&e.push(","),e.push(mt.m.stringify(f)),p=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+a(d.getMonth()+1)+"-"+a(d.getDate())+"T"+a(d.getHours())+":"+a(d.getMinutes())+":"+a(d.getSeconds())+'"';p=["{"];m=mt.m.stringify;for(l in d)if(Object.prototype.hasOwnProperty.call(d,l))switch(f=
d[l],typeof f){case "undefined":case "unknown":case "function":break;default:e&&p.push(","),e=1,p.push(m(l)+":"+m(f))}p.push("}");return p.join("")}}}();mt.localStorage={};mt.localStorage.Q=function(){if(!mt.localStorage.h)try{mt.localStorage.h=document.createElement("input"),mt.localStorage.h.type="hidden",mt.localStorage.h.style.display="none",mt.localStorage.h.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)}catch(b){return u}return s};
mt.localStorage.set=function(b,a,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(a=d.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.Q()&&(mt.localStorage.h.expires=d.toUTCString(),mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.setAttribute(b,a),mt.localStorage.h.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),e=b.substring(0,a)-0;if(e&&e>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.Q())try{return mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.getAttribute(b)}catch(d){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.Q())try{mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.removeAttribute(b),mt.localStorage.h.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(e){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):t};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.Aa={};mt.Aa.log=function(b,a){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=t;e=window[d]=t;a&&a(b)};e.src=b};mt.ha={};
mt.ha.Ya=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return b};
mt.ha.Bb=function(b,a,e,d,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+e+'" height="'+d+'" src="'+a+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.l=function(b,a){var e=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return e?e[3]:t};mt.url.Fb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.Ta=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.Z=function(b){return(b=mt.url.Ta(b))?b.replace(/:\d+$/,""):b};mt.url.$=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=u,b=document.getElementsByTagName("script"),d=b.length,d=100<d?100:d,k=0;k<d;k++){var l=b[k].src;if(l&&0===l.indexOf("http://hm.baidu.com/h")){a=s;break}}return a}return h.Pa=b})();var x=h.Pa;
h.k={Gb:"http://tongji.baidu.com/hm-web/welcome/ico",ya:"hm.baidu.com/hm.gif"/*tpa=src="./addpagesddpages/page8_files/hm.baidu.com/hm.gif*/,Fa:"./addpagesddpages/page8_files/tongji.baidu.com",bb:"hmmd",cb:"hmpl",vb:"utm_medium",ab:"hmkw",xb:"utm_term",Za:"hmci",ub:"utm_content",eb:"hmsr",wb:"utm_source",$a:"hmcu",tb:"utm_campaign",z:0,o:Math.round(+new Date/1E3),A:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",da:x()||"https:"===document.location.protocol?"https:":"http:",Hb:0,zb:6E5,hb:6E5,Ib:5E3,Ab:5,U:1024,yb:1,G:2147483647,Ba:"hca kb 材蜜管家 cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
D:s,na:["a","input","button"],Ha:{id:"data-hm-id",T:"data-hm-class",ka:"data-hm-xpath",content:"data-hm-content",P:"data-hm-tag",link:"data-hm-link"},ma:"data-hm-enabled",la:"data-hm-disabled"};(function(){var b={s:{},c:function(a,b){this.s[a]=this.s[a]||[];this.s[a].push(b)},J:function(a,b){this.s[a]=this.s[a]||[];for(var d=this.s[a].length,k=0;k<d;k++)this.s[a][k](b)}};return h.r=b})();
(function(){function b(b,d){var k=document.createElement("script");k.charset="utf-8";a.d(d,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=t,d()}:k.onload=function(){d()});k.src=b;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(k,l)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";h.b.a.nv?(b=encodeURIComponent(document.referrer),window.sessionStorage?e.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)):b=(window.sessionStorage?e.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||"";return b}var a=mt.localStorage,e=mt.sessionStorage;return h.pa=b})();
(function(){var b=mt.lang,a=mt.e,e=mt.event,d=mt.g,k=h.k,l=h.r,p=+new Date,m=[],f={oa:function(){return function(g){if(h.b&&h.b.D&&c.aet&&c.aet.length){var d=g.target||g.srcElement;if(d){var n=h.b.na,q=a.getAttribute(d,k.ma)!=t?s:u;if(a.getAttribute(d,k.la)==t)if(q)f.R(f.Y(d,g));else{var e=a.K(d);if(b.C(n,"*")||b.C(n,e))f.R(f.Y(d,g));else for(;d.parentNode!=t;){var q=d.parentNode,e=a.K(q),v="a"===e&&b.C(n,"a")?s:u,e="button"===e&&b.C(n,"button")?s:u,z=a.getAttribute(q,k.ma)!=t?s:u;if(a.getAttribute(q,
k.la)==t&&(v||e||z)){f.R(f.Y(q,g));break}d=d.parentNode}}}}}},Y:function(g,e){var n={},q=k.Ha;n.id=a.getAttribute(g,q.id)||a.getAttribute(g,"id")||"";n.T=a.getAttribute(g,q.T)||a.getAttribute(g,"class")||"";n.ka=a.getAttribute(g,q.ka)||a.Va(g);n.content=a.getAttribute(g,q.content)||a.Ra(g);n.P=a.getAttribute(g,q.P)||a.K(g);n.link=a.getAttribute(g,q.link)||a.getAttribute(g,"href")||"";n.type=e.type||"click";q=b.va(g.offsetTop)?g.offsetTop:0;"click"===e.type?q=d.ua?e.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):e.pageY:"touchend"===e.type&&(e.ea&&b.d(e.ea.changedTouches,"Array")&&e.ea.changedTouches.length)&&(q=e.ea.changedTouches[0].pageY);n.rb=q;return n},R:function(g){var a=b.j,a=[+new Date-(h.b.w!==r?h.b.w:p),a(g.id),a(g.T),a(g.P),a(g.ka),a(g.link),a(g.content),g.type,g.rb].join("*");f.S(a);b.C(["a"],g.P)&&b.d(this.H(),"Function")&&this.H()()},S:function(a){a.length>k.U||(encodeURIComponent(m.join("!")+a).length>k.U&&(f.I(m.join("!")),m=[]),m.push(a))},I:function(a){h.b.a.et=
5;h.b.a.ep=a;h.b.i()},H:function(){return function(){m&&m.length&&(f.I(m.join("!")),m=[])}}};b.ba()&&""!==c.aet&&l.c("pv-b",function(){e.c(document,"click",f.oa());"ontouchend"in document&&e.c(window,"touchend",f.oa());e.c(window,"unload",f.H())});return f})();
(function(){var b=mt.event,a=mt.g,e=h.k,d=h.r,k=+new Date,l=[],p=t,m={La:function(){return function(){h.b&&(h.b.D&&c.aet&&c.aet.length)&&(window.clearTimeout(p),p=window.setTimeout(function(){m.Da(a.L()+a.B())},150))}},Da:function(a){m.S([+new Date-(h.b.w!==r?h.b.w:k),a].join("*"))},S:function(a){if(encodeURIComponent(l.join("!")+a).length>e.U||5<l.length)m.I(l.join("!")),l=[];l.push(a)},I:function(b){h.b.a.et=6;h.b.a.vh=a.B();h.b.a.ep=b;h.b.i()},H:function(){return function(){l&&l.length&&(m.I(l.join("!")),
l=[])}}};mt.lang.ba()&&""!==c.aet&&d.c("pv-b",function(){b.c(window,"scroll",m.La());b.c(window,"unload",m.H())});return m})();
(function(){var b=mt.e,a=h.k,e=h.load,d=h.pa;h.r.c("pv-b",function(){var k=a.protocol+"//crs.baidu.com/";c.rec&&b.za(function(){for(var l=0,p=c.rp.length;l<p;l++){var m=c.rp[l][0],f=c.rp[l][1],g=b.qa("hm_t_"+m);if(f&&!(2==f&&!g||g&&""!==g.innerHTML))g="",g=Math.round(Math.random()*a.G),g=4==f?k+"hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+g].join("&"):k+"t.js?"+["siteId="+c.id,"planId="+m,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
g].join("&"),e(g)}})})})();(function(){var b=h.k,a=h.load,e=h.pa;h.r.c("pv-b",function(){if(c.trust&&c.vcard){var d="http://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+e(),"rnd="+Math.round(Math.random()*b.G),"hm=1"].join("&");a(d)}})})();
(function(){function b(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.V.Ua()+","+h.V.Sa();h.b.i()}}function a(){clearTimeout(C);var b;v&&(b="visible"==document[v]);z&&(b=!document[z]);m="undefined"==typeof b?s:b;if((!p||!f)&&m&&g)y=s,n=+new Date;else if(p&&f&&(!m||!g))y=u,q+=+new Date-n;p=m;f=g;C=setTimeout(a,100)}function e(a){var g=document,b="";if(a in g)b=a;else for(var n=["webkit","ms","moz","o"],q=0;q<n.length;q++){var e=n[q]+a.charAt(0).toUpperCase()+a.slice(1);if(e in g){b=
e;break}}return b}function d(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))g="focus"==b.type||"focusin"./addpagesddpages/page8_files/==b.type?s:u,a()}var k=mt.event,l=h.r,p=s,m=s,f=s,g=s,w=+new Date,n=w,q=0,y=s,v=e("visibilityState"),z=e("hidden"),C;a();(function(){var g=v.replace(/[vV]isibilityState/,"visibilitychange");k.c(document,g,a);k.c(window,"pageshow",a);k.c(window,"pagehide",a);"object"==typeof document.onfocusin?(k.c(document,"focusin",d),k.c(document,"focusout",d)):(k.c(window,"focus",d),
k.c(window,"blur",d))})();h.V={Ua:function(){return+new Date-w},Sa:function(){return y?+new Date-n+q:q}};l.c("pv-b",function(){k.c(window,"unload",b())});return h.V})();
(function(){var b=mt.lang,a=h.k,e=h.load,d={gb:function(d){if((window._dxt===r||b.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.X();e([a.protocol,"http://datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),d)}},qb:function(a){if(b.d(a,"String")||b.d(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ja=d})();
(function(){function b(a,b,n,q){if(!(a===r||b===r||q===r)){if(""===a)return[b,n,q].join("*");a=String(a).split("!");for(var e,d=u,f=0;f<a.length;f++)if(e=a[f].split("*"),String(b)===e[0]){e[1]=n;e[2]=q;a[f]=e.join("*");d=s;break}d||a.push([b,n,q].join("*"));return a.join("!")}}function a(b){for(var d in b)if({}.hasOwnProperty.call(b,d)){var n=b[d];e.d(n,"Object")||e.d(n,"Array")?a(n):b[d]=String(n)}}var e=mt.lang,d=mt.m,k=mt.g,l=h.k,p=h.r,m=h.Ja,f={F:[],O:0,wa:u,p:{ia:"",page:""},init:function(){f.f=
0;p.c("pv-b",function(){f.Ka();f.Na()});p.c("pv-d",function(){f.Oa();f.p.page=""});p.c("stag-b",function(){h.b.a.api=f.f||f.O?f.f+"_"+f.O:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f.p.ia,f.p.page].join("!")});p.c("stag-d",function(){h.b.a.api=0;f.f=0;f.O=0})},Ka:function(){var a=window._hmt||[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var g=arguments[b];e.d(g,"Array")&&(a.cmd[a.id].push(g),"_setAccount"===
g[0]&&(1<g.length&&/^[0-9a-f]{32}$/.test(g[1]))&&(g=g[1],a.id=g,a.cmd[g]=a.cmd[g]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Na:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],n=/^_track(Event|MobConv|Order|RTEvent)$/,e=0,d=b.length;e<d;e++){var v=b[e];n.test(v[0])?f.F.push(v):f.fa(v)}a.cmd[c.id]={push:f.fa}},Oa:function(){if(0<f.F.length)for(var a=0,b=f.F.length;a<b;a++)f.fa(f.F[a]);f.F=t},fa:function(a){var b=a[0];if(f.hasOwnProperty(b)&&
e.d(f[b],"Function"))f[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||s===a))f.f|=2,h.b.sa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.f|=4;h.b.a.et=0;h.b.a.ep="";h.b.a.vl=k.L()+k.B();h.b.a.kb=0;h.b.aa?(h.b.a.nv=0,h.b.a.st=4):h.b.aa=s;var b=h.b.a.u,n=h.b.a.su;h.b.a.u=l.protocol+"//"+document.location.host+a[1];f.wa||(h.b.a.su=document.location.href);h.b.i();h.b.a.u=b;
h.b.a.su=n;h.b.w=+new Date}},_trackEvent:function(a){2<a.length&&(f.f|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=e.j(a[1])+"*"+e.j(a[2])+(a[3]?"*"+e.j(a[3]):"")+(a[4]?"*"+e.j(a[4]):""),h.b.i())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],n=a[4]||3;if(0<b&&6>b&&0<n&&4>n){f.O++;for(var d=(h.b.a.cv||"*").split("!"),k=d.length;k<b-1;k++)d.push("*");d[b-1]=n+"*"+e.j(a[2])+"*"+e.j(a[3]);h.b.a.cv=d.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.b.ib("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var d=e.j(a[1]);a=e.j(a[2]);if(d!==r&&a!==r){var n=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),n=b(n,d,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(n),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var d=e.j(a[1]);a=e.j(a[2]);if(d!==r&&a!==r){var n=f.p.ia,n=b(n,d,2,a);f.p.ia=n}}},_setPageTag:function(a){if(!(3>a.length)){var d=e.j(a[1]);a=e.j(a[2]);if(d!==r&&a!==r){var n=f.p.page,
n=b(n,d,3,a);f.p.page=n}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],f.wa=s)},_trackOrder:function(b){b=b[1];e.d(b,"Object")&&(a(b),f.f|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.i())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.f|=32,h.b.a.et=93,h.b.a.ep=a,h.b.i()},_trackRTPageview:function(b){b=b[1];e.d(b,"Object")&&(a(b),b=d.stringify(b),
512>=encodeURIComponent(b).length&&(f.f|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.d(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var k=function(a){var b=h.b.a.rt;f.f|=128;h.b.a.et=90;h.b.a.rt=a;h.b.i();h.b.a.rt=b},n=b.length;if(900>=n)k.call(this,b);else for(var n=Math.ceil(n/900),q="block|"+Math.round(Math.random()*l.G).toString(16)+"|"+n+"|",m=[],v=0;v<n;v++)m.push(v),m.push(b.substring(900*v,900*v+900)),k.call(this,q+m.join("|")),m=[]}},_setUserId:function(a){a=a[1];m.gb();
m.qb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.ta=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.D=a}};f.init();h.Ga=f;return h.Ga})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.ta=this.sa=s,this.D=g.D,this.na=k.ba()&&0<c.aet.length?c.aet.split(","):"",this.aa=u,this.init())}var a=mt.url,e=mt.Aa,d=mt.ha,k=mt.lang,l=mt.cookie,p=mt.g,m=mt.localStorage,f=mt.sessionStorage,g=h.k,w=h.r;b.prototype={ca:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},xa:function(a,b){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(b)},M:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.xa(b,c.dm[d]))return s}else{var e=a.Z(b);if(e&&this.ca(e,c.dm[d]))return s}return u},X:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.ca(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},ra:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.xa(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+
"/"}return"/"},Wa:function(){if(!document.referrer)return g.o-g.z>c.vdur?1:4;var b=u;this.M(document.referrer)&&this.M(document.location.href)?b=s:(b=a.Z(document.referrer),b=this.ca(b||"",document.location.hostname));return b?g.o-g.z>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||f.get(a)||m.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.X(),path:this.ra(),W:d}),d?m.set(a,b,d):f.set(a,b)}catch(e){}},ib:function(a){try{l.set(a,"",{domain:this.X(),path:this.ra(),W:-1}),
f.remove(a),m.remove(a)}catch(b){}},ob:function(){var a,b,d,e,f;g.z=this.getData("Hm_lpvt_"+c.id)||0;13===g.z.length&&(g.z=Math.round(g.z/1E3));b=this.Wa();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<g.o-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(g.o);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=g.o,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,
g.o);d=g.o===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.M(document.location.href)&&(""===document.referrer||this.M(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.材蜜管家=d;this.a.lt=e;this.a.lv=f},nb:function(){for(var a=[],b=this.a.et,d=+new Date,e=0,f=g.Ba.length;e<f;e++){var k=g.Ba[e],l=this.a[k];"undefined"!==typeof l&&""!==l&&("tt"!==k||"tt"===k&&0===b)&&(("ct"!==k||"ct"===k&&0===b)&&("kb"!==k||"kb"===k&&3===b))&&a.push(k+"="+encodeURIComponent(l))}switch(b){case 0:a.push("sn="+
g.A);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+g.A);break;case 5:a.push("sn="+g.A);a.push("_lpt="+this.w);a.push("_ct="+d);break;case 6:a.push("sn="+g.A);a.push("_lpt="+this.w);a.push("_ct="+d);break;case 85:a.push("sn="+g.A);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},pb:function(){this.ob();this.a.si=c.id;this.a.hca="0"./addpagesddpages/page8_files/===c.hca?r:c.hca;this.a.su=document.referrer;this.a.hh=window.location.hash;this.a.ds=p.jb;this.a.cl=p.colorDepth+"-bit";this.a.ln=String(p.language).toLowerCase();this.a.ja=p.javaEnabled?1:0;this.a.ck=p.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=d.Ya();this.a.v="./addpagesddpages/page8_files/1.2.39";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";this.a.vl=p.L()+p.B();var b=document.location.href;this.a.cm=a.l(b,g.bb)||"";this.a.cp=a.l(b,g.cb)||a.l(b,g.vb)||"";this.a.cw=a.l(b,g.ab)||a.l(b,g.xb)||"";this.a.ci=a.l(b,g.Za)||a.l(b,g.ub)||"";this.a.cf=a.l(b,g.eb)||a.l(b,g.wb)||
"";this.a.cu=a.l(b,g.$a)||a.l(b,g.tb)||""},init:function(){try{this.pb(),0===this.a.nv?this.mb():this.ga(".*"),h.b=this,this.Ia(),w.J("pv-b"),this.lb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(g.da+"//"+g.ya+"?"+b.join("&"))}},lb:function(){function a(){w.J("pv-d"./addpagesddpages/page8_files/)}this.sa?(this.aa=s,this.a.et=0,this.a.ep="",this.a.vl=p.L()+p.B(),this.i(a)):a();this.w=+new Date},
i:function(a){if(this.ta){var b=this;b.a.rnd=Math.round(Math.random()*g.G);w.J("stag-b");var d=g.da+"//"+g.ya+"?"+b.nb();w.J("stag-d");b.Ea(d);e.log(d,function(d){b.ga(d);k.d(a,"Function")&&a.call(b)})}},Ia:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.Z(document.referrer)===g.Fa?1:0,f=a.l(b,"jn"),k=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&k)&&(this.a.rnd=Math.round(Math.random()*g.G),b=document.createElement("script"),b.setAttribute("type","text/javascript"),
b.setAttribute("charset","utf-8"),b.setAttribute("src",g.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,f))},Ea:function(a){var b=f.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");f.set("Hm_unsent_"+c.id,b)},ga:function(a){var b=f.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,
"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?f.set("Hm_unsent_"+c.id,b):f.remove("Hm_unsent_"+c.id))},mb:function(){var a=this,b=f.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){e.log(g.da+"//"+decodeURIComponent(b),function(b){a.ga(b)})},k=0,l=b.length;k<l;k++)d(b[k])}};return new b})();var A=h.k,B=h.load;if(c.apps){var D=[A.protocol,"http://ers.baidu.com/app/s.js?"];D.push(c.apps);B(D.join(""))}
(function(){var b=mt.event,a=mt.lang,e=h.k;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.a.kb=a.va(h.b.a.kb)?h.b.a.kb:0;var d=function(){h.b.a.et=85;h.b.a.ep=h.b.a.kb;h.b.i()};b.c(document,"keyup",function(){h.b.a.kb++});b.c(window,"unload",function(){d()});setInterval(d,e.hb)}})();var E=h.k,F=h.load;c.pt&&F([E.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));var G=h.k,H=h.load;c.lxb&&H([G.protocol,"http://lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var I=h.load,J=h.k.protocol;
if(c.qiao){for(var K=[J+"//goutong.baidu.com/site/"],L=c.id,M=5381,N=L.length,O=0;O<N;O++)M=(33*M+Number(L.charCodeAt(O)))%4294967296;2147483648<M&&(M-=2147483648);K.push(M%1E3+"/");K.push(c.id+"/b.js");K.push("?siteId="+c.qiao);I(K.join(""))}
(function(){var b=mt.g,a=mt.lang,e=mt.event,d=mt.m;if("undefined"!==typeof h.b&&(c.med||(!b.ua||7<b.fb)&&c.cvcc)){var k,l,p,m,f=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},g=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},w=function(b,e){var f={};f.n=k;f.t="clk";f.v=b;if(e){var g=e.getAttribute("href"),l=e.getAttribute("onclick")?""+e.getAttribute("onclick"):t,m=e.getAttribute("id")||"";p.test(g)?(f.sn="mediate",
f.snv=g):a.d(l,"String")&&p.test(l)&&(f.sn="wrap",f.snv=l);f.id=m}h.b.a.et=86;h.b.a.ep=d.stringify(f);h.b.i();for(f=+new Date;400>=+new Date-f;);};if(c.med)l="/zoosnet",k="swt",p=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(p.test(e)||p.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";k="other";p=c.cvcc.q||r;var n=c.cvcc.id||r;m={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],p!==r?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),n?(d=d.getAttribute("id"),(p.test(e)||p.test(g)||n.test(d))&&
a.push(b[k])):(p.test(e)||p.test(g))&&a.push(b[k])):n!==r&&(d=d.getAttribute("id"),n.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof p){var q;l+=/\/$/.test(l)?"":"/";var y=function(b,d){if(q===d)return w(l+b,d),u;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return w(l+b+"/"+(e+1),d[e]),u};e.c(document,"mousedown",function(b){b=b||window.event;q=b.target||b.srcElement;var d={};for(g(m,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&g(d,y)!==u;)q=q.parentNode})}}})();(function(){var b=mt.e,a=mt.lang,e=mt.event,d=mt.m;if("undefined"!==typeof h.b&&a.d(c.cvcf,"Array")&&0<c.cvcf.length){var k={Ca:function(){for(var a=c.cvcf.length,d,m=0;m<a;m++)(d=b.qa(decodeURIComponent(c.cvcf[m])))&&e.c(d,"click",k.Ma())},Ma:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=d.stringify(a);h.b.i()}}};b.za(function(){k.Ca()})}})();
(function(){var b=mt.event,a=mt.m;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,d={n:"anti",sb:0,kb:0,clk:0},k=function(){h.b.a.et=86;h.b.a.ep=a.stringify(d);h.b.i()};b.c(document,"click",function(){d.clk++});b.c(document,"keyup",function(){d.kb=1});b.c(window,"scroll",function(){d.sb++});b.c(window,"unload",function(){d.t=+new Date-e;k()});b.c(window,"load",function(){setTimeout(k,5E3)})}})();})();
