function byId(a){return"string"===typeof a?document.getElementById(a):a}function each(g,e,c){if(g.length===undefined){for(var b in g){if(e(g[b],b,g)===false){break}}}else{var a=g.length;if(c&&c<=a){a=c}for(var d=0;d<a;d++){if(d in g){if(e(g[d],d,g)===false){break}}}}}var on=document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)};var un=document.removeEventListener?function(b,a,c){b.removeEventListener(a,c)}:function(b,a,c){b.detachEvent("on"+a,c)};function bind(c,b,a){on(c,b,function(f){f=f||window.event;var d=f.srcElement||f.target;a(d)})}function hasClass(b,a){return -1<(" "+b.className+" ").indexOf(" "+a+" ")}function addClass(b,a){if(!hasClass(b,a)){b.className+=" "+a}}function removeClass(c,a){if(hasClass(c,a)){var b=new RegExp("(\\s|^)"+a+"(\\s|$)");c.className=c.className.replace(b," ")}}function trim(c){var d=c.replace(/^(\s|\u00A0)+/,""),a=/\s/,b=d.length;while(a.test(d.charAt(--b))){}return d.slice(0,b+1)}function disableSelection(a){if(typeof a.onselectstart!="undefined"){a.onselectstart=function(){return false}}else{if(typeof a.style.MozUserSelect!="undefined"){a.style.MozUserSelect="none"}else{a.onmousedown=function(){return false}}}}function setCursorPos(b,c){if(b.setSelectionRange){b.focus();b.setSelectionRange(c,c)}else{if(b.createTextRange){var a=b.createTextRange();a.collapse(true);a.moveEnd("character",c);a.moveStart("character",c);a.select()}}}function getCoords(a){var d=a.getBoundingClientRect(),i=a.ownerDocument,f=i.body,e=i.documentElement,c=e.clientTop||f.clientTop||0,g=e.clientLeft||f.clientLeft||0,h=d.top+(self.pageYOffset||e.scrollTop||f.scrollTop)-c,b=d.left+(self.pageXOffset||e.scrollLeft||f.scrollLeft)-g;return{x:b,y:h}}function contains(b,a){return b===document||b!==a&&(b.contains?b.contains(a):!!(b.compareDocumentPosition(a)&16))}var getStyle=document.defaultView?function(b,a){return document.defaultView.getComputedStyle(b,null).getPropertyValue(a)}:function(b,a){a=a.replace(/\-(\w)/g,function(d,c){return c.toUpperCase()});return b.currentStyle[a]};function getText(a){return a.textContent?a.textContent:a.innerText}function removeNode(a){if(document.all){this.removeNodeDiv=this.removeNodeDiv||document.createElement("DIV");this.removeNodeDiv.appendChild(a);this.removeNodeDiv.innerHTML=""}else{a.parentNode&&a.parentNode.removeChild(a)}}function replaceTpl(c,f,b){var d=String(c),e=b||/#\{([^}]*)\}/mg,a=String.trim||function(g){return g.replace(/^\s+|\s+$/g,"")};return d.replace(e,function(h,g){return h=f[a(g)]})}function stopDefault(a){if(a&&a.preventDefault){a.preventDefault()}else{window.event.returnValue=false}return false}function resetClass(d,b,e){for(var c=0,a=d.length;c<a;c++){removeClass(d[c],b)}addClass(e,b)}function loadJs(l,f,e){var b={}.toString.call(l)==="[object Array]",a=document.getElementsByTagName("SCRIPT")[0],h=a.parentNode,d=0,j=false,g=3000,c=function(m){if(m.clearAttributes){m.clearAttributes()}else{m.onload=m.onreadystatechange=m.onerror=null}h.removeChild(m)},i=function(){if(!f){return}if(b){d++;if(d===l.length){j=true;f()}}else{j=true;f()}},k=function(n){var m=document.createElement("SCRIPT");m.type="text/javascript";m.charset="utf-8";m.async=true;if(m.readyState){m.onreadystatechange=function(){if(m.readyState=="loaded"||m.readyState=="complete"){m.onreadystatechange=null;i()}}}else{m.onload=function(){i()}}if(e){m.onerror=function(){c(m);j=true;e()};setTimeout(function(){!j&&e()},g)}m.src=n;h.insertBefore(m,a)};if({}.toString.call(l)==="[object Array]"){each(l,function(m){k(m)})}else{k(l)}}window.btoa||(window.btoa=function(g){if(/([^\u0000-\u00ff])/.test(g)){return}var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,f,d,b,a=[];while(c<g.length){f=g.charCodeAt(c);b=(c+1)%3;switch(b){case 1:a.push(e.charAt(f>>2));break;case 2:a.push(e.charAt((d&3)<<4|(f>>4)));break;case 0:a.push(e.charAt((d&15)<<2|(f>>6)));a.push(e.charAt(f&63));break}d=f;c++}if(b==1){a.push(e.charAt((d&3)<<4));a.push("==")}else{if(b==2){a.push(e.charAt((d&15)<<2));a.push("=")}}return a.join("")});window.G||(window.G={});G.setHome=function(b){var a=b.href||window.location;try{b.style.behavior="url(#default#homepage)";b.setHomePage(a)}catch(c){window.open("/how.html")}return false};var UA=(function(b,i){var j={ie:"msie",sf:"safari",tt:"tencenttraveler"},c={browser:"("+j.ie+"|"+j.sf+"|firefox|chrome|opera)",shell:"(maxthon|360se|theworld|se|theworld|greenbrowser|qqbrowser)",tt:"(tencenttraveler)",os:"(windows nt|macintosh|solaris|linux)"},f=function(m){var l=new RegExp(m+"\\b[ \\/]?([\\w\\.]*)","i"),k=i.match(l);return k?k.slice(1):["",""]},a=function(){var k=i.toLowerCase().indexOf("360chrome")>-1?!!1:!1,l;try{if(b.external&&b.external.twGetRunPath){l=b.external.twGetRunPath;if(l&&l.toLowerCase().indexOf("360se")>-1){k=!!1}}}catch(m){k=!1}return k}(),e=function(){try{if(/(\d+\.\d)/.test(external.max_version)){return parseFloat(RegExp["\x241"])}}catch(k){}}(),g=f(c.browser),h=f(c.shell),d=f(c.os);if(g[0].toLowerCase()===j.ie){if(a){h=["360se",""]}else{if(e){h=["maxthon",e]}else{if(h==","){h=f(c.tt)}}}}else{if(g[0].toLowerCase()===j.sf){g[1]=f("version")+"."+g[1]}}return{browser:g.join(","),shell:h.join(","),os:d.join(",")}})(window,navigator.userAgent);var indexSetHome={config:{helpUrl:"http://www.kuudoo.com/redian/sheshouyef.htm",shell:{"360se":"02",maxthon:"03",se:"04",qqbrowser:"05",theworld:"10",greenbrowser:"12"},browser:{firefox:"ff",chrome:"08",opera:"09",safari:"11"}},set:function(d,b){var g=UA.browser.split(",")[0].toLowerCase(),h=UA.shell.split(",")[0].toLowerCase(),f=this.config,j=f.helpUrl,c="您的浏览器不支持，请手动设置",a=function(){try{d.style.behavior="url(#default#homepage)";d.setHomePage(b)}catch(k){alert(c)}};if(g==="msie"&&(!h||h==="tencenttraveler")){a();return false}else{if(h&&f.shell[h]){j+="#"+f.shell[h];if(h==="maxthon"){try{if(external.max_version){window.open(j);return false}else{a();return false}}catch(i){a();return false}}else{window.open(j);return false}}else{if(f.browser[g]){if(g==="chrome"){try{if(external.max_version){j+="#03";window.open(j);return false}else{j+="#"+f.browser[g];window.open(j);return false}}catch(i){j+="#"+f.browser[g];window.open(j);return false}}else{j+="#"+f.browser[g];window.open(j);return false}}else{alert(c);return false}}}},bind:function(c,b){c=typeof c==="string"?document.getElementById(c):c;if(c.href.indexOf("hao123.com")<0){return}b=b||c.href||window.location;var d=this,a=document.addEventListener?function(f,e,g){f.addEventListener(e,g,!1)}:function(f,e,g){f.attachEvent("on"+e,g)};a(c,"click",function(){d.set(c,b);return false});return this}};G.cookie=function(a,d,b){var c=function(f){return typeof f==="string"&&f!==""},e=function(f){var g=new Date();g.setTime(g.getTime()+f*86400000);return g.toUTCString()};return(d||d===null)?function(f,h,g){var j=encodeURIComponent(h);if(g){var i={expires:typeof g.expires==="number"?g.expires:365,domain:c(g.domain)?g.domain:"http://hao123.com",path:c(g.path)?g.path:"/",secure:g.secure?"; secure":""};if(h===null){j="";i.expires=-1}i={expires:"; expires="+e(i.expires),domain:"; domain="+i.domain,path:"; path="+i.path,secure:i.secure};j+=i.expires+i.domain+i.path+i.secure}else{j+="; expires="+e(365)+"; path=/"}if(h===null){j="; expires="+e(-1)}document.cookie=f+"="+j}(a,d,b):function(h){var g,f;if(c(h)){if((f=document.cookie.match("(?:^| )"+h+"(?:(?:=([^;]*))|;|$)"))){g=f[1]?decodeURIComponent(f[1]):""}}return g}(a)};this.UT||(this.UT={url:"http://www.kuudoo.com/images/track.gif",send:function(f){f=f||{};var i=this.conf,b=i&&i.url||this.url,a=f.r=+new Date(),l=window,g=encodeURIComponent,e=l["UT"+a]=new Image(),c=i&&i.data,j,h=[];if(c){for(var d in c){c[d]!==j&&(f[d]=c[d])}}for(j in f){h.push(g(j)+"="+g(f[j]))}e.onload=e.onerror=function(){l["UT"+a]=null};e.src=b+"?"+h.join("&");e=h=null}});