(function(F,C,P){String.trim||(String.prototype.trim=function(){var $=this,$=$.replace(/^\s\s*/,""),_=/\s/,A=$.length;while(_.test($.charAt(--A)));return $.slice(0,A+1)});String.replaceTpl||(String.prototype.replaceTpl=function($){return this.replace(/#\{([^}]*)\}/mg,function(A,_){return A=$[_.trim()]})});String.htmlEncode||(String.prototype.htmlEncode=function(){return String(this).replace(/\x26/g,"&amp;").replace(/\x3c/g,"&lt;").replace(/\x3E/g,"&gt;").replace(/\x22/g,"&quot;").replace(/\x27/g,"&#39;").replace(/\xA9/g,"&copy;")});var M=" ",H=null,D=document.documentElement.classList!==P,Q=/\w/.test("\u0130"),A=Q&&!F.XMLHttpRequest,B=C.documentMode&&C.documentMode===9,I=function(_){if(!_)return;var $=_.split("."),C=$.length,B=window,D=0,A;if(C>1)for(;D<C-1;D++){A=$[D];B=(0===D&&B[A])?B[A]:A in B?B[A]:B[A]={}}return B},J=D?function(_,$){return _.classList.contains($)}:function(_,$){return-1<(M+_.className+M).indexOf(M+$+M)},_=D?function(_,$){_.classList.add($)}:function(_,$){if(!J(_,$))_.className+=(_.className?M:"")+$},K=D?function(_,$){_.classList.remove($)}:function(_,$){if(!J(_,$))return;var A=new RegExp("(\\s|^)"+$+"(\\s|$)");_.className=_.className.replace(A,M)},L=C.addEventListener?function($,A,_){$.addEventListener(A,_,!1)}:function($,A,_){$.attachEvent("on"+A,_)},O=function($,A,_){L($,A,function($){$=$||F.event;var A=$.srcElement||$.target;_.call(A,$)})},E=Q?function(_,$){$=$.replace(/\-(\w)/g,function(_,$){return $.toUpperCase()});return _.currentStyle[$]}:function(_,$){return C.defaultView.getComputedStyle(_,null).getPropertyValue($)},$=function(A,B){if(!(this instanceof $))return new $(A,B);var _=this;_.el=A+""===A?C.getElementById(A):A;if(!_.el)return;_.o={classNameWrap:B.classNameWrap||"sug-wrap",classNameQuery:B.classNameQuery,classNameQueryNull:B.classNameQueryNull,classNameSelect:B.classNameSelect||"sug-select",classNameClose:B.classNameClose||"sug-close",classNameShim:B.classNameShim||"sug-shim",locAbs:B.locAbs||false,pressDelay:B.pressDelay===P?3:B.pressDelay,autoFocus:B.autoFocus||false,delay:B.delay||200,n:B.n||10,t:B.t||true,autoCompleteData:B.autoCompleteData||false,url:B.url||false,charset:B.charset,callbackFn:B.callbackFn||false,callbackName:B.callbackName||false,callbackDataKey:B.callbackDataKey||false,callbackDataNum:B.callbackDataNum||false,requestQuery:B.requestQuery||false,requestParas:B.requestParas||{},noSubmit:B.noSubmit||false,onSelect:B.onSelect,onMouseSelect:B.onMouseSelect,onShow:B.onShow,onHide:B.onHide,onRequest:B.onRequest,onSucess:B.onSucess,onError:B.onError,onEnable:B.onEnable,customUrl:B.customUrl||false,templ:B.templ||false};_.wrap=_.el.parentNode;_.init()},N=$.prototype;N.init=function(){var A=this,C=A.o;A.layoutInit();A.reset();A.inputHandle();C.autoFocus&&setTimeout(function(){A.el.focus()},16);if(C.autoCompleteData)return;var D=C.callbackFn,B=I(D,true),$=D.split("."),_=$.pop();A.callback=function($){$=$||{};var _=arguments.callee;A=D&&_.repeat?_.context||A:A;A.o.onSucess&&A.o.onSucess.call(A);var C=A.o.callbackDataKey||A.o.callbackDataNum,B=C?$[C]:$;if(!B||!B.length){A.hide(1);A.isHide=false;return}A.fill($,A.q);A.show();A.cache[A.q]=$};if(B[_])B[_].repeat=true;else if(D)B[_]=A.callback};N.reset=function(_){var $=this,A;for(A in _)$.o[A]=_[A];$.cache={};$.q="";$.s=H;$.i=-1;$.subType=-1;$.inputTimer();$.isHide=false;$.hide(1)};N.layoutInit=function(){var D=this,G=D.o,B=G.locAbs?C.body:D.wrap,$=D.sugWrap=C.createElement("div");D.el.setAttribute("autocomplete","off");if(A){var F=D.shim=$.appendChild(C.createElement("iframe"));F.src="about:blank";_(F,G.classNameShim);F.frameBorder=0;F.scrolling="no";D.content=$.appendChild($.cloneNode(null))}else D.content=$;_($,G.classNameWrap);!G.locAbs&&E(B,"position")==="static"&&(B.style.position="relative");B.appendChild($)};N.show=function(){this.sugWrap.style.display="";this.o.onShow&&this.o.onShow.call(this)};N.hide=function(_){var $=this;$.sugWrap.style.display="none";$.q=$.el.value;if(_!=2){$.s=H;$.i=-1}_==1&&$.fill();$.o.onHide&&$.o.onHide.call($)};N.holdFocus=function(_,$){if($.preventDefault)$.preventDefault();else _.onbeforedeactivate=function(){F.event.returnValue=false;_.onbeforedeactivate=null}};N.inputTimer=function(C){var $=this,A=$.el,_=$.t,B;if(C){if(_)return;$.t=setInterval(function(){B=A.value;if($.o.onEnable&&!$.o.onEnable($.el))return;if(!B.trim()){$.hide(1);$.q=B;return}if(B!==$.q)$.updata(B)},$.o.delay)}else{_&&clearInterval($.t);$.t=0}};N.getIndex=function($,A){var _=A.length;while(_--)if(A[_]===$)return _;return-1};N.matchEl=function(_,$,A){while(_!==$){if(A.call(_))return _;_=_.parentNode}return H};N.submitForm=function(){var $=this.el.form;if($.onsubmit)$.onsubmit();else $.submit()};N.keydownMove=function(L){var B=this,J=B.sugWrap.getElementsByTagName("OL")[0];if(!J)return;if(B.isHide){B.isHide=false;return}var I=J.getElementsByTagName("LI"),G=I.length,D=B.el,C=B.s,F=B.o,A=F.classNameSelect,E=B.q||"",$;if(C){K(C,A);B.i=B.getIndex(C,I);B.s=H}B.i===P&&(B.index=-1);B.i!==-1&&K(I[B.i],A);if(L===40)B.i++;else if(L===38)B.i--;if(B.i===-2)B.i=G-1;else if(B.i===G){D.value=E;B.i=-1}else if(B.i===-1)D.value=E;if(B.i!==-1&&B.i!==G){$=I[B.i];_($,A);!F.autoCompleteData&&(D.value=$.getAttribute("q"));B.s=$}};N.inputHandle=function(){var B=this,F=B.o,D=B.el,C=D.form,A=B.sugWrap,$=F.classNameSelect,H=F.autoCompleteData,E=0,G;D.onkeydown=function($){$=$||window.event;G=$.keyCode;if(G===27){B.hide(2);A.getElementsByTagName("ol")[0]&&(B.isHide=true);!H&&(D.value=B.q);B.inputTimer();return false}else if(G>32&&G<41){if(!D.value&&A.style.display==="none")D.blur();else if(G===40||G===38){if(B.o.onEnable&&!B.o.onEnable(B.el))return;if(!F.pressDelay||E++===0){B.isHide&&B.show();B.keydownMove(G);B.inputTimer()}else if(E===F.pressDelay)E=0;!Q&&$.preventDefault()}}else if(G===13){B.inputTimer();B.hide(2);F.onSelect&&F.onSelect.call(B,B.q,B.s?B.s.getAttribute("site"):"");if(H){D.value=B.s?B.s.getAttribute("q"):"";return false}B.subType=2;if(F.noSubmit)return false}else if(G>8&&G<19){G!==9&&B.holdFocus(D,$);return}else B.inputTimer(1)};L(D,"keyup",function(){E=0});L(D,"blur",function(){B.hide(2);A.getElementsByTagName("ol")[0]&&(B.isHide=true);B.inputTimer()});O(A,"mouseover",function(){var C=B.matchEl(this,A,function(){return this.tagName==="LI"});if(!C)return;B.s&&K(B.s,$);_(C,$);B.s=C});O(A,"mouseout",function(){var _=B.matchEl(this,A,function(){return this.tagName==="LI"});this.tagName==="LI"&&this!==_&&K(_,$)});L(A,"mousedown",function($){B.inputTimer();B.holdFocus(D,$)});O(A,"mouseup",function(_){B.subType=3;var C=A.getElementsByTagName("OL")[0],$;if(!C||_.which&&_.which>2||_.button&&(_.button!==1&&_.button!==4))return;J(this,F.classNameClose)&&B.hide();$=B.matchEl(this,A,function(){return this.tagName==="LI"});if(!$)return;D.value=$.getAttribute("q");B.hide();B.inputTimer();B.i=B.getIndex($,C.getElementsByTagName("LI"));F.onSelect&&F.onSelect.call(B,$.getAttribute("q"),$.getAttribute("site"));F.onMouseSelect&&F.onMouseSelect.call(B,$.getAttribute("q"),$.getAttribute("site"));!F.autoCompleteData&&!F.noSubmit&&B.submitForm()})};N.fill=function(B,A){var _=this,$=_.content;if(arguments.length<2){$.innerHTML="";return}var C=_.o,D=C.templ,F=C.classNameQueryNull,E=C.classNameQuery;this.content.innerHTML=D?D.call(_,B,A):function(){B=B[C.callbackDataKey||C.callbackDataNum]||[];var G=0,D=Math.min(B.length,C.n),_=[],$;A=A.trim();for(;G<D;G++){$=B[G];$!==P&&_.push('<li q="'+$+'"'+(F&&$.indexOf(A)>-1?"":" class="+F)+">"+(E?$.replace(A,'<span class="'+E+'">'+A+"</span>"):$)+"</li>")}return"<ol>"+_.join("")+"</ol>"}()};N.updata=function(_){var $=this,A=$.o.autoCompleteData||$.cache[_];$.q=_;$.i=-1;$.isHide=false;if(A!==P){$.fill(A,_);$.show();return}$.request(_)};N.request=function(R){var O=this,E=O.o,L=E.callbackFn,V=E.callbackName,F=E.onSucess,_=E.onError,A=E.onRequest,T=O.callback,J=E.url,U=E.customUrl,K=E.requestParas,$=[],G,M;if(L){var S=I(L),D=L.split(".").pop();S[D]=O.callback;if(S[D].repeat)S[D].context=O}else if(V){M=O.script;if(M.readyState)M.onreadystatechange=function(){if(M.readyState=="loaded"||M.readyState=="complete"){M.onreadystatechange=H;F&&F.call(O);T(V)}};else M.onload=function(){F&&F.call(O);T(V)}}_&&(O.script.onerror=function(){_.call(O)});if(!O.script||!Q||B){var N=C.getElementsByTagName("script")[0];M=C.createElement("script");M.type="text/javascript";M.async=true;if(O.script)N.parentNode.replaceChild(M,O.script);else N.parentNode.insertBefore(M,N);O.script=M}A&&A.call(this);K=function(){for(G in K)((M=K[G])!==P)&&$.push(G+"="+K[G]);E.t&&$.push("t"+"="+ +new Date);return $.join("&")}();O.script.charset=E.charset?E.charset:"";O.script.src=U&&U.call(O,K)||J+"?"+E.requestQuery+"="+encodeURIComponent(R)+"&"+K};F.G||(F.G={}),G.suggest=G.sug=$})(window,document);Model.Global.setHomePage={sethome:function(_,D){var C=window,B=Conf.Global.setHomePage,G=B.helpurl,$=B.shell,A=B.browser;if(!!T.browser.isShell){C.open(G+"#"+$[T.browser.shell[0]]);return false}if(!T.browser.ie&&!!T.browser.types[0]){C.open(G+"#"+A[T.browser.types[0]]);return false}if(D=="open"){C.open(G+"#"+A[T.browser.types[0]]);return false}if(!!T.browser.ie){try{var F=F||_.href||window.location;_.style.behavior="url(#default#homepage)";_.setHomePage(F)}catch(E){C.open(G+"#"+A[T.browser.types[0]])}}},action:function(A,C,_){var B=window,$=this;switch(C){case"open":$.sethome(A,C);break;case"refresh":B.location.reload();break;case"none":T.dom.stop(_);break;case"sethome":default:$.sethome(A)}},bind:function(_,A){var $=this,_=T.dom.g(_);T.event.on(_,"click",function(B){$.action(_,A,B)});return this}};Model.Index.mail=function(){var K=T.dom.g("mailSelect"),C=T.dom.g("mailForm"),L=T.dom.g("mailUserName"),D=T.dom.g("mailPassWord"),M=T.dom.g("mailParas"),_=K.parentNode,H=Conf.Index.mail,J=H.mails,G=H.links,$=[],E,B=Model.Global.UT,I=T.cookie.get("HAOMAILSV"),F=T.cookie.get("HAOMAILUN");L.value=F||"";D.value="";T.array.each(J,function($,_){if(J[_].mail==I){C.action=J[_].action;K.innerHTML=A(J[_].name);K.setAttribute("data-n",_)}});T.event.on(C,"submit",function(A){var E=K.getAttribute("data-n"),_=L.value,C=D.value,$=[];if(!T.string.trim(_)){alert("\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1\u8d26\u53f7\uff0c\u767b\u5f55\u60a8\u7684\u90ae\u7bb1");T.event.stop(A);return false}if(!T.string.trim(C)){alert("\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1\u5bc6\u7801\uff0c\u767b\u5f55\u60a8\u7684\u90ae\u7bb1");T.event.stop(A);return false}T.cookie.set("HAOMAILUN",_);T.cookie.set("HAOMAILSV",J[E].mail);B.send({type:"mail",index:J[E].name});D.value="";T.object.each(J[E].params,function(A,B){$.push('<input name="'+B+'" value="'+T.string.format(A,{u:T.string.encodeHTML(_),p:T.string.encodeHTML(C)})+'" type="hidden">')});M.innerHTML=$.join("")});E=document.createElement("ul");E.style.display="none";E.className="box-mail_layer";T.array.each(J,function(_,A){$.push('<li data-n="'+A+'">'+_.name+"</li>")});$.push('<li class="no">\u4ee5\u4e0b\u5f39\u51fa\u767b\u5f55</li>');T.array.each(G,function(_,A){$.push('<li><a href="'+_.url+'">'+_.name+"</a></li>")});E.innerHTML=$.join("");document.body.appendChild(E);T.dom.disSelect(_);T.dom.disSelect(E);function A($){return(T.string.getByteLength($)<10)?$:T.string.subByte($,9,"...")}T.event.on(K,"mousedown",function(){T.dom.addClass(_,"box-mail_select_click");if(E&&E.style.display){var $=T.dom.getCoords(_);E.style.display="";E.style.top=$.y+19+"px";E.style.left=$.x+"px"}else E.style.display="none"});T.event.on(K,"mouseup",function(){T.dom.removeClass(_,"box-mail_select_click")});T.event.on(K,"mouseout",function(){T.dom.removeClass(_,"box-mail_select_click")});T.event.bind(E,"mouseup",function(){var $=this.parentNode.tagName==="LI"?this.parentNode:this,_;if(_=$.getAttribute("data-n")){K.innerHTML=A($.innerHTML);K.setAttribute("data-n",_);C.action=J[_].action}if(!T.dom.hasClass($,"no"))E.style.display="none"});T.event.bind(E,"mousedown",function(){this.tagName==="A"&&this.parentNode.tagName==="LI"&&B.send({type:"mail",index:this.innerHTML})});T.event.bind(E,"mouseover",function(){var $=this.parentNode.tagName==="LI"?this.parentNode:this;!T.dom.hasClass($,"no")&&T.dom.addClass($,"hover")});T.event.bind(E,"mouseout",function(){var $=this.parentNode.tagName==="LI"?this.parentNode:this;!T.dom.hasClass($,"no")&&T.dom.removeClass($,"hover")});T.event.bind(document,"mousedown",function(){var $=this;if(!E.style.display&&$!==K&&!T.dom.contains(K,$)&&!T.dom.contains(E,$))E.style.display="none"})};T.sio.callByBrowser("js/weather/date.js",function(){Model.Index.clock=function(A,C,B,_){if(!(this instanceof Model.Index.clock))return new Model.Index.clock(A,C,B,_);var $=this;$.el=T.dom.g(A);$.url=C||"http://www.kuudoo.comm/images/track.gif";$.tpl=B||"#{y}-#{m}-#{d} #{hh}:#{mm}:#{ss}";$.rate=_||500;$.ssCache=0,$.el.innerHTML=$.format(new Date);$.get()};Model.Index.clock.prototype={constructor:Model.Index.clock,get:function(){var $=this,_=T.ajax.request($.url,{async:true,noCache:true,onfailure:function(){$.show(_)},onsuccess:function(){$.show(_)}})},getDate:function($){!T.lang.isDate($)&&($=new Date());return{y:$.getFullYear(),m:$.getMonth()+1,d:$.getDate()}},show:function(C){C=(C=C.getResponseHeader("Date"))?new Date(C):new Date;var _=this,D=H.date.formatLunar,$=_.getDate,E=0,B,A=function(){var A=new Date-_.startTime,$=++E*_.rate;return Math.abs(A-$)>1000*60?$:A};_.startTime=new Date;_.timer=setInterval(function(){(B=new Date(C.getTime())).setMilliseconds(B.getMilliseconds()+A());var $=_.format(B);if($)_.el.innerHTML=$},_.rate)},format:function(C){var $=this,_=$.getDate(C),B=H.date(_.y,_.m,_.d),A;B.hh=T.number.pad(C.getHours(),2);B.mm=T.number.pad(C.getMinutes(),2);B.ss=T.number.pad(C.getSeconds(),2);this.ssCache=B.ss;return T.string.format($.tpl,B)}};var $=Conf.Index.clock;Model.Index.clock("dateBox",$.url,$.tpl,$.rate)});Model.Index.searchGroup=function(A){if(!(this instanceof Model.Index.searchGroup))return new Model.Index.searchGroup(A);A=A||{};var $=this,B=A.conf||Conf.Index.searchGroup,_=T.url.getQueryValue(window.location.href,"tn");$.defaultConf=B.defaultConf;$.conf=B.tabSwitchConf;$.moreList=B.moreConf;$.logo=T.G(A.logo||"searchGroupLogo");$.tabs=T.G(A.tabs||"searchGroupTabs");$.form=T.G(A.form||"searchGroupForm");$.input=T.G(A.input||"searchGroupInput");$.btn=T.G(A.btn||"searchGroupBtn");$.moreTab=T.dom.g(A.moreTab||"searchGroupMoreTab"),$.params=T.G(A.params||"searchGroupParams");$.btnWrap=$.btn.parentNode;$.sugMon=T.G("sugMonParam");$.type=$.defaultConf.curName;$.defaultN=$.defaultConf.curN||0;$.curTab=$.tabs.getElementsByTagName("a")[$.defaultN];$.getCurTabValue=function(){return $.curTab.getAttribute("data-t")};if(_!=null){$.conf.web["url"]="http://www.baidu.com/index.php?tn="+_;$.conf.web["params"].tn=_;$.resetForm("web")}$.init()};Model.Index.searchGroup.prototype={constructor:Model.Index.searchGroup,init:function(){var $=this,_=document,A=window;$.more=_.body.appendChild(_.createElement("div"));$.more.style.display="none";$.more.className="box-search_more_wrap";$.input.value="";$.initEvent();$.sug=G.sug($.input,{classNameQuery:"sug-query",classNameQueryNull:"sug-querynull",requestQuery:"wd",autoFocus:true,charset:"gbk",delay:100,url:"http://suggestion.baidu.com/su",callbackFn:"baidu.sug",callbackDataKey:"s",requestParas:{sc:"hao123"},onSelect:function(){if($.sug.subType===3){$.sug.subType=-1;$.sug.i=-1;if(!$.sugMon)return;$.sugMon.innerHTML='<input type="hidden" name="f" value="3">'}},onMouseSelect:function(){Model.Global.UT.send({type:"submit",position:$.getCurTabValue(),title:$.input.value,pageId:pageId,sug:1})}});setTimeout(function(){var _="http://app.hao123.com/ipquery/getcity.php?rtype=2",C="getCityIdByMap",B;A[C]=function(_){_&&_.content&&($.conf.map.params.c=$.conf.map.sug.requestParas.cid=_.content.code||1)};A.HaoLocationCallback=function(_){var $=/city/.test(_)?_.match(/city['"]:['"]([^'"]*)['"]/)[1]:"\u5168\u56fd";T.sio.load.js("http://api.map.baidu.com/?qt=cur&wd="+encodeURIComponent($)+"&lc=1&ie=gbk&resid=02&oue=1&newmap=1&callback="+C)};T.sio.load.js(_)},300)},initEvent:function(){var $=this,A=$.btn,C=$.btnWrap,_=$.more,B=$.moreTab;T.dom.disSelect($.tabs);T.event.on(A,"mousedown",function(){T.dom.addClass(C,"box-search_btn_click")});T.event.on(A,"mouseup",function(){T.dom.removeClass(C,"box-search_btn_click")});T.event.on(A,"mouseout",function(){T.dom.removeClass(C,"box-search_btn_click")});T.event.bind($.tabs,"mousedown",function(){var _=this;_.getAttribute("data-t")&&!T.dom.hasClass(_,"cur")&&$.switchTab(_)});T.event.bind(_,"mousedown",function(){this.tagName==="A"&&this.parentNode.parentNode===_&&setTimeout($.showMore,200)});T.event.bind(document,"mousedown",function(){var A=this;!_.style.display&&A!==B&&!T.dom.contains(B,A)&&!T.dom.contains(_,A)&&$.showMore()});T.event.bind($.form,"mousedown",function(_){var A=$.input.parentNode;(this===A||T.dom.contains(A,this))&&document.activeElement&&document.activeElement!==$.input&&setTimeout(function(){$.input.focus()},16)});T.event.on($.form,"submit",function(){if(!$.sugMon)return;if($.sug.subType===2&&$.sug.i!=-1){$.sugMon.innerHTML='<input type="hidden" name="f" value="3">';$.sug.i=-1}else $.sugMon.innerHTML="";$.sug.subType=-1;setTimeout(function(){$.input.select()},100)})},switchTab:function(B){if(B===this.moreTab){this.showMore();return}var $=this,D=B.getAttribute("data-t"),C=$.conf,_=$.input,A=C[D].sug;T.dom.removeClass($.curTab,"cur");T.dom.addClass(B,"cur");$.curTab=B;if($.sug){A.templ=A.templ||false;A.charset=A.charset||"gbk";$.sug.reset(A)}$.resetForm(D);setTimeout(function(){T.dom.setCursorPos(_,_.value.length)},16)},showMore:function(){var A=this,C=A.moreList,_=[],B=A.more,$=function(){if(A.more.style.display){var $=T.dom.getCoords(A.moreTab);B.style.display="";B.style.top=$.y+25+"px";B.style.left=$.x-9+"px"}else B.style.display="none"};T.object.each(C,function($){_.push('<a href="'+$.url+'">'+$.name+"</a>")});B.innerHTML='<b class="shadow"></b><div class="content">'+_.join("");(A.showMore=$)()},resetForm:function(C){var A=this,B=A.conf[C],_=A.logo,$=[];A.type=C;A.form.action=B.action;A.input.name=B.q;_.src=A.defaultConf.logoPath+C+".png";_.alt=_.parentNode.title=B.alt;_.parentNode.href=B.url;A.params.innerHTML=function(){T.object.each(B.params,function(_,A){$.push('<input type="hidden" name="'+A+'" value="'+T.string.encodeHTML(_)+'">')});return $.join("")}()}};Model.Index.starSection=function(){var A=Conf.Index.starSection,B=A.url,$=A.tpl,_=A.list;T.sio.load.js(B+"?r="+new Date().getTime()+"&callback=indexMing.update",null,{charset:"gbk"});window.indexMing||(window.indexMing={});indexMing.update=function(D){if(!D)return;var B=[];T.object.each(D,function(A,C){T.object.each(_[C],function($,_){A[_]=$});A.title=A.title||"";B.push(T.string.format($,A))});T.dom.g("starBar").innerHTML=B.join("");try{if(window.external.msIsSiteMode()){window.external.msSiteModeClearJumpList();window.external.msSiteModeCreateJumpList(A.jumpTitle);T.object.each(D,function($,A){var _=typeof $.icon!=undefined?$.icon:"haofav";window.external.msSiteModeAddJumpListItem($.text,$.href,"images/"+_+".ico")})}}catch(C){}}};var HaoForecast=null;window.city||(window.city={});window.county||(window.county={});window.config||(window.config={});config.fixWeather={"101081108":"101080504","101201406":"101200806","101310207":"1013101","101310214":"1013101","101310206":"1013101","101310204":"1013101","101310209":"1013101","101310202":"1013101","101310221":"1013101","101310203":"1013101","101310216":"1013101","101310220":"1013101","101310211":"1013101","101310208":"1013101","101310201":"1013101","101310210":"1013101","101310215":"1013101","101310212":"1013101","101310222":"1013101","101310217":"1013101","101310205":"1013101"};config.dataCityUrl="js/weather/";var provinces={"01":"B \u5317\u4eac-10101","02":"S \u4e0a\u6d77-10102","03":"T \u5929\u6d25-10103","04":"C \u91cd\u5e86-10104","05":"A \u5b89\u5fbd-10122","06":"F \u798f\u5efa-10123","07":"G \u7518\u8083-10116","08":"G \u5e7f\u4e1c-10128","09":"G \u5e7f\u897f-10130","10":"G \u8d35\u5dde-10126","11":"H \u6d77\u5357-10131","12":"H \u6cb3\u5317-10109","13":"H \u6cb3\u5357-10118","14":"H \u9ed1\u9f99\u6c5f-10105","15":"H \u6e56\u5317-10120","16":"H \u6e56\u5357-10125","17":"J \u6c5f\u82cf-10119","18":"J \u6c5f\u897f-10124","19":"J \u5409\u6797-10106","20":"L \u8fbd\u5b81-10107","21":"N \u5185\u8499\u53e4-10108","22":"N \u5b81\u590f-10117","23":"Q \u9752\u6d77-10115","24":"S \u5c71\u4e1c-10112","25":"S \u5c71\u897f-10110","26":"S \u9655\u897f-10111","27":"S \u56db\u5ddd-10127","28":"X \u897f\u85cf-10114","29":"X \u65b0\u7586-10113","30":"Y \u4e91\u5357-10129","31":"Z \u6d59\u6c5f-10121","32":"X \u9999\u6e2f-10132","33":"A \u6fb3\u95e8-10133","34":"T \u53f0\u6e7e-10134","35":"G \u56fd\u5916-10135"};Model.Index.weather={init:function(){var $=Model.Index.weather;$.fillSelect(T.G("provSelect"),provinces,1);$.loadWeather({t:1,onsuccess:function(){if(typeof HaoForecast=="undefined"||HaoForecast==null)$.error();else{T.G("weatherTip").innerHTML="";var _=$.cityInfo(HaoForecast);$.selectInit(_);$.show(HaoForecast)}},onfailure:function(){}});T.on(T.G("provSelect"),"change",$.switchSelect);T.on(T.G("citySelect"),"change",$.switchCitySelect);T.on(T.G("setBtn"),"click",$.update);T.on(T.G("cancel"),"click",function(){T.G("setCity").style.display="none";T.G("weatherInfo").style.display="block"})},cityInfo:function(B){var A=B.URL,D={},_=A.split(".shtml")[0].replace(/[^0-9]/ig,"").toString();for(var $ in config.fixWeather)if($===_){_=config.fixWeather[$];D.str=$;break}D.provId=_.substring(0,5);D.cityId=T.number.pad(_.substring(5,7),2);D.countyId=T.number.pad(_.substring(7,9),2);var C;if(parseInt(D.provId,10)<=10104){C=D.cityId;D.cityId=D.countyId;D.countyId=C}return D},selectInit:function(_){var $=T.G("provSelect").options,A=$.length;if(_.provId<10101||_.provId>10134)T.G("provSelect").options[34].selected=true;else for(var B=0;B<A;B++)if($[B].value==_.provId){T.G("provSelect").options[B].selected=true;break}Model.Index.weather.switchSelect(_)},switchSelect:function(D){var C,A,$,B;if(D&&(D.provId<10101||D.provId>10134)){C=10135;A=D.provId.substring(0,3);$=1}else{if(D&&D.provId)C=D.provId;else C=T.G("provSelect").options[T.G("provSelect").selectedIndex].value;if(D&&D.cityId){if((parseInt(D.provId,10)-10100)<=4&&(parseInt(D.provId,10)-10100)>=1)A="00";else if(D.provId==10131)A="01";else A=D.cityId}else{var _=T.G("provSelect").selectedIndex;if(_<4)A="00";else if(_>=34)A="305";else A="01"}if(D&&D.countyId){if(D.str)$=D.str;else $=D.countyId}else $="01"}B="js/weather/"+C+".js";T.sio.callByBrowser(B,function(){Model.Index.weather.fillSelect(T.G("citySelect"),city[C],1,A)});var E="js/weather/"+C+A+".js";T.sio.callByBrowser(E,function(){Model.Index.weather.fillSelect(T.G("countySelect"),county[C+A],1,$)})},switchCitySelect:function(){var A=T.G("provSelect").options[T.G("provSelect").selectedIndex].value,$=T.G("citySelect").options[T.G("citySelect").selectedIndex].value,_="js/weather/"+A+$+".js";T.sio.callByBrowser(_,function(){Model.Index.weather.fillSelect(T.G("countySelect"),county[A+$],1)})},fillSelect:function(_,A,E,$){_.length=0;var B=document.createDocumentFragment(),C=0,H=1;for(var D in A)C++;if(A["00"]){H=0;C=C-1}if(E&&E==1)for(;H<=C;H++){H=T.number.pad(H,2);if(!A[H]){C++;continue}var G=A[H].split("-"),F=document.createElement("option");F.value=G[1];F.appendChild(document.createTextNode(G[0]));if(G[1]==$)F.selected=true;B.appendChild(F)}_.appendChild(B);B=null},loadWeather:function(_){T.G("forecast_content").style.display="block";var $={};$.t=_.t;$.r=Math.random();if(_.t==2){$.provice=_.prov;$.city=_.city}_.url="images/weather/forecast.php";var A="",A=T.url.jsonToQuery($),B=Model.Index.weather.glueURL(_.url,A);T.sio.callByBrowser(B,function(){if(typeof HaoForecast=="undefined"||HaoForecast==null)_.onfailure();else _.onsuccess()},{timeOut:5000,onfailure:function(){var $='<a href="javascript:void(0)" onclick="Model.Index.weather.init(); return false" style="color:#999;">\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\uff0c\u5929\u6c14\u52a0\u8f7d\u5931\u8d25...<b>\u70b9\u6b64\u91cd\u8bd5</b></a>';T.G("weatherTip").style.display="block";T.G("forecast_content").style.display="none";T.G("weatherTip").innerHTML=$}})},update:function(){if(T.G("provSelect").selectedIndex>=0)if(navigator.cookieEnabled){T.G("weatherTip").innerHTML='<span style="color:#666;">\u6b63\u5728\u52a0\u8f7d\u5929\u6c14\u4fe1\u606f...\u8bf7\u7a0d\u5019</span>';Model.Index.weather.loadWeather({t:2,prov:(function(){var $="";if(T.G("provSelect").selectedIndex<34)$=T.G("provSelect").options[T.G("provSelect").selectedIndex].innerHTML.split(" ")[1];else $=T.G("citySelect").options[T.G("citySelect").selectedIndex].innerHTML.split(" ")[1];return encodeURIComponent($)})(),city:encodeURIComponent(T.G("countySelect").options[T.G("countySelect").selectedIndex].innerHTML.split(" ")[1]),onsuccess:function(){if(typeof HaoForecast=="undefined"||HaoForecast==null)Model.Index.weather.error();else{T.G("setCity").style.display="none";T.G("weatherInfo").style.display="block";T.G("weatherTip").innerHTML="";Model.Index.weather.show(HaoForecast)}},onfailure:function(){T.G("weatherTip").innerHTML='<a href="javascript:void(0)" onclick="Model.Index.weather.init()">\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\uff0c\u5929\u6c14\u52a0\u8f7d\u5931\u8d25...<b>\u70b9\u6b64\u91cd\u8bd5</b></a>'}})}else T.G("weatherTip").innerHTML='\u63d0\u793a\uff1a\u60a8\u7684\u6d4f\u89c8\u5668\u672a\u5f00\u542fcookies\uff0c\u4e0d\u80fd\u5b9a\u5236\u57ce\u5e02\uff01<a href="redian/scookie.htm" target="_blank">\u5982\u4f55\u5f00\u542fcookies\u529f\u80fd</a>'},show:function(A){var E=A.forecast,D=E.length,F=A.URL,_='<div class="box-weather_city"><div class="change-city"><a href="#" title="\u4fee\u6539\u57ce\u5e02" id="changeCity"><span class="cityName">'+Model.Index.weather.getCityName(A.Name)+'</span><span class="city_edit"></span></a></div><a target="_blank" href="'+F+'#7d" title="\u6700\u8fd17\u65e5\u5929\u6c14\u8be6\u60c5">\u4e03\u65e5\u5929\u6c14</a></div><div class="box-weather_info">',C=["\u4eca\u5929","\u660e\u5929"];for(var H=0;H<D;H++){if(H==2)break;var B=Model.Index.weather.getWeather(E[H].Weather),$=Conf.Index.weather[B],G=T.string.trim(E[H].Tmin)==T.string.trim(E[H].Tmax)?E[H].Tmin+"\u2103":E[H].Tmax+"&nbsp;~&nbsp;"+E[H].Tmin+"\u2103";_+='<a target="_blank" title="'+B+'" href="'+F+'"><div class="box-weather_info_item"><div class="box-weather_info_item_icon" style="background:url('+Conf.Global.s1+"images/weather/icon/"+$+'.jpg) no-repeat;"></div><p class="weather_day">'+C[H]+"</p><p>"+G+"</p></div></a>"}_+="</div>";T.G("weatherInfo").style.display="block";T.G("weatherTip").style.display="none";T.G("forecast_content").innerHTML=_;T.on(T.G("changeCity"),"click",function($){T.event.preventDefault($);T.G("setCity").style.display="block";T.G("weatherInfo").style.display="none"})},getWeather:function($){var _=$.indexOf("\u8f6c");if(_>0)$=$.substring(0,_);if(T.string.getByteLength($)>9){_=$.indexOf("-");if(_>0)$=$.substring(_+1);else $=$.substring(0,3)}return $},getCityName:function($){if($&&$.length>4)$=$.substring(0,4);return $},glueURL:function(_,$){if(!_)return"";if(-1<_.indexOf("?"))return _+"&"+$;return _+"?"+$},error:function(){T.G("weatherTip").innerHTML='<span style="color:#666;">\u7f51\u901f\u4e0d\u7ed9\u529b\u554a\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5</span>'}};var ieUserData={init:function(){this.defaultExps=365;this.input=document.createElement("input");this.input.type="hidden";this.input.id="ieuserdata";this.input.addBehavior("#default#userData");document.body.appendChild(this.input);return this},set:function(A,$,B){this.input.load(A);var _=new Date();B=B||this.defaultExps;_.setDate(_.getDate()+B);this.input.load(A);this.input.expires=_.toUTCString();this.input.setAttribute("code",$);this.input.save(A)},get:function($,A){this.input.load($);var A=A||function(){},_=this.input.getAttribute("code");A(_);return _},is:function(_,A){var $=this.get(_);return($!=null&&$!="")?true:false},remove:function($){this.set($,false,-this.defaultExps)}};(function(C,A,B){var $=function(B){if(!(this instanceof $))return new $(B);var _=this;_.id=B;_.el=B+""===B?A.getElementById(B):B;_.sites=[];_.o={conId:_.id+"-con",slistId:_.id+"-slist",closeId:_.id+"-close"};_.init()};_=$.prototype;_.init=function(){var $=this;$.initData();$.show()};_.initData=function(){var _=this,$=[],B;if(window.localStorage)B=window.localStorage.getItem("userFavorite");else{try{B=ieUserData.init().get("userFavorite")}catch(A){}}(T.lang.isString(B))&&T.array.each(B.split(";"),function(A,B){var _=A.split(",");$.push({name:_[0],url:_[1]})});_.sites=$};_.upSite=function(){var _=this,$=_.sites;tpl='<dd style=""><a href="#{url}" title="#{title}" target="_blank" class="site">#{name}</a></dd>',ret=[];$&&T.array.each($,function($,_){if(_>=8)return true;if(typeof $.name!="undefined"&&typeof $.url!="undefined")if(T.string.trim($.name)!=""&&T.string.trim($.url)!=""){$.title=$.name;$.url=decodeURIComponent($.url);ret.push(T.string.format(tpl,$))}});if(ret.length>0)T.g(_.o.slistId).innerHTML='<dt class="t_color">\u7f51\u7edc\u6536\u85cf\u5939\uff1a</dt>'+ret.join("");else _.el.style.display="none"};_.show=function(){var $=this;if($.sites.length>0){var _='<div class="site s-edit" id="#{conId}">\t\t\t\t\t\t<div class="s-list">\t\t\t\t\t\t\t<dl style="display: block;" id="#{slistId}" class="clearfix haoMySite"></dl>\t\t\t\t\t\t</div>\t\t\t\t\t </div>';$.el.innerHTML=T.string.format(_,$.o);$.el.style.display="block";$.upSite()}};C.H||(C.H={}),H.index||(H.index={}),H.index.netsite=$})(window,document);Model.Index.flashStorage=(function(){var C="flashStorage",O="http://s1.hao123img.com/index/swf/LocalStorage.swf",Q="$hao123$",S=0,F=1,P=2,A,K,G=S,_=[];function U(){var $;$=T.dom.create("div");document.body.appendChild($);return $}function L($){T.swf.create({id:C,url:O,width:"1",height:"1",allowscriptaccess:"always",ver:"9.0.0",vars:{width:1,height:1}},$);return M()}function M(){return A=(A||T.swf.getMovie(C))}function R(A){var $,_;_=setInterval(function(){$=M();if($&&$.flashInit&&$.flashInit()){clearInterval(_);G=P;A&&A()}},50)}function H(A){var $;G=F;$=U();L($);R(function(){var B,C,$;B=_.length;while(B--){C=_.shift();clearTimeout(C.token);$=C.callback;$&&$(true)}A&&A()});B(Q)}function J(A,B){var $;switch(G){case S:H();case F:$={callback:A,token:B?setTimeout(function(){A&&A(G==P);$.callback=null},B):0};_.push($);break;case P:A(true);break;default:A(false);break}}function B($){K=String($)}function I(A,_){var $;$=M();$&&$.call("write",[K,String(A),_])}function $(A){var _,$;_=M();_&&($=_.call("read",[K,String(A)]));return $}function E(_){var $;$=M();$&&$.call("remove",[K,String(_)])}function N(){var _,$;_=M();_&&($=_.call("getKeyList",[K]));return $}function D(){var $;$=M();$&&$.call("clear",[K])}return{init:H,wait:J,setStorageArea:B,setValue:I,getValue:$,removeKey:E,getKeys:N,clearData:D}})();Model.Index.flashCookie=(function(){var B=0,A=false,_=false,C=false;function D($,D){if(A)$(_);else{C=$;B=setTimeout(function(){C&&C(_);C=false},D)}}function $($){clearTimeout(B);_=$;A=true;C&&C($);C=false}return{trigger:$,wait:D}})()