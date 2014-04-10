//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","   ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);

var Forms = {
    menuGmail : function() {

        var menPM = '<div class="LrBjie bbLinkWrapper"><div class="TK"><div class="aim linkItem"><div class="TO linkItemInner listToggle"><div class="TN aY7xie aze link" style="margin-left:0px;"><div class="TH aih J-J5-Ji expando" role="link" tabindex="0"></div><div class="aio aip" id="kplianMenu"><span class="nU CJ">Process Maker</span><span class="bentoBoxIndicator" style="margin-top:1px;"></span></div><div class="linkItem newPipeline CL" style="" id=kplianPMNewCase><a class="CK" href="#">+ New</a></div></div></div></div></div>';

        var data = [{
            "menu" : "Inbox"
        }, {
            "menu" : "Draft"
        }, {
            "menu" : "Participated"
        }, {
            "menu" : "Unassigned"
        }, {
            "menu" : "PMUI"
        }];

        var left = '<div class="TK linkList"><div class="aim linkItem pipeline"><div class="TO linkItemInner"><div class="TN aY7xie aik" style="margin-left: 12px"><div class="TH aih J-J5-Ji expando" role="link" tabindex="0" style="display: none;"></div><div class="aio aip" id="kplianSubMenu';
        var rigth = '</span></div><div class="nL aig menuButtonAnchor"><div class="pM menuButton aj0" style="color: rgb(0, 0, 0); background-color: rgb(255, 173, 71); border-color: rgb(255, 173, 71)" tabindex="0" role="button"><div class="p6" style="background-color: rgb(255, 173, 71)"><div class="p8">▼</div></div></div></div></div></div></div>';

        $.each(data, function(i, item) {
            menPM += left + i + '"><span class="nU n1 name">' + item.menu + rigth;
        });

        menPM += '<div class=" streak__savedViewsHolder" style="display: none;"></div></div><div class="streak__hiddenPipelinesWrapper"><div class="streak__hiddenPipelines" style="display: none;"><div class="n6"><span role="button" class="J-Ke n4 ah9 aiu" tabindex="0"><span class="CJ">Hidde Process Maker Options</span><span class="ait"><div class="G-asx T-I-J3 J-J5-Ji">&nbsp;</div></span></span></div><div class="TK hiddenLinkList" style="display:none;"></div></div></div></div>';

        return menPM;
    },
    windowGmail : function () {
        var p, w, e;
        var a,p,f,tree,lp,w,ti;
     
                //Form Panel*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
                p = new PMUI.form.FormPanel({
                    width: 604, 
                    height: 130,
                    fieldset: true,
                    legend: "my fieldset panel",
                    items: [
                        {
                            pmType: "text",
                            label: "Name",
                            id: "123",
                            value: "",
                            placeholder: "insert your name",
                            name: "name"
                        },{
                            pmType: "text",
                            label: "Last name",
                            value: "",
                            placeholder: "your lastname here asshole!",
                            name: "lastname"
                        }, {
                            pmType: "panel",
                            layout: 'hbox',
                            items: [
                                {
                                    pmType: "text",
                                    label: "E-mail",
                                    value: "",
                                    name: "email"
                                },{
                                    pmType: "text",
                                    label: "Phone",
                                    value: "555",
                                    name: "phone"
                                }
                            ]
                        }
                    ],
                    layout: "vbox"
                });
                //Form *-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
                f = new PMUI.form.Form({
                    onSubmit: function() {
                        console.log("submitting...");
                    },
                    onChange: function(field, newValue, previousValue) {
                        console.log("The field " + field.getName() + " has changed from \"" + previousValue + "\" to \"" + newValue + "\"");
                    },
                    items: [
                        {
                            pmType: "text",
                            label: "Name",
                            id: "123",
                            value: "",
                            placeholder: "insert your name",
                            name: "name",
                            helper: "Introduce your name",
                            required: true
                        }, 
                        {
                            pmType: "dropdown",
                            label: "age",
                            options: [
                                {
                                    label: "",
                                    value: ""
                                },
                                {
                                    label: "from 0 to 7 years old",
                                    value: "0-7"
                                },
                                {
                                    label: "from 8 to 13 years old",
                                    value: "8-13"
                                },
                                {
                                    label: "from 14 to 19 years old",
                                    value: "14-19"
                                },
                                {
                                    label: "from 20 to 30 years old",
                                    value: "20-30"
                                },
                                {
                                    label: "from 31 to 45 years old",
                                    value: "31-45"
                                },
                                {
                                    label: "older than 45",
                                    value: "46+"
                                }
                            ],
                            name: "age",
                            helper: "Select one of the options",
                            required: true
                        },
                        {
                            pmType: "radio",
                            label: "Gender",
                            value: "m",
                            name: "gender",
                            required: true,
                            options: [
                                {
                                    label: "Male",
                                    value: "m"
                                },
                                {
                                    label: "Female",
                                    value: "f"
                                }
                            ]
                        }, 
                        {
                            pmType: "text",
                            label: "E-mail",
                            value: "",
                            name: "email",
                            helper: "you email here",
                            required: true,
                            validators: [
                                {
                                    pmType: "regexp",
                                    criteria: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    errorMessage: "Please enter a valid email address"
                                }
                            ]
                        }, 
                        {
                            pmType: "checkbox",
                            label: "Things you like to do",
                            value: "[\"music\"]",
                            name: "hobbies",
                            helper: "Check up to 3 options",
                            options: [
                                {
                                    label: "Music",
                                    value: "music"
                                },
                                {
                                    label: "Programming",
                                    value: "programming"
                                },
                                {
                                    label: "Bike ridding",
                                    value: "bike"
                                },
                                {
                                    label: "Gastronomy",
                                    value: "gastronomy"
                                },
                                {
                                    label: "Movies",
                                    value: "movies"
                                }
                            ],
                            validators: [],
                            required: true
                        },
                        {   
                            pmType: "datetime",    
                            label:'Calendar',
                            helper: 'This is calendar Gregorian',
                            value: new Date(), 
                            datetime : true,
                            dateFormat: 'M dd yy',
                            minDate: -90,
                            maxDate: "+1y -1m -4d",
                            firstDay: 1,
                            months: {
                                "january": {
                                    name: "Enero",
                                    shortname: "Ene"
                                },
                                "february": {
                                    name: "Febrero",
                                    shortname: "Feb"
                                },
                                "march": {
                                    name: "Marzo",
                                    shortname: "Mar"
                                },
                                "april": {
                                    name: "Abril",
                                    shortname: "Abr"
                                },
                                "may": "May",
                                "june": "Junio",
                                "july": "July",
                                "august": "Agosto",
                                "september": "Septiembre",
                                "october": "Octubre",
                                "november": "Noviembre",
                                "december": "Diciembre"
                            },
                            days: {
                                "sunday": {
                                    name: "Domingo",
                                    shortname: "Do"
                                },
                                "monday": {
                                    name: "Lunes",
                                    shortname: "Lu"
                                },
                                "tuesday": {
                                    name: "Martes",
                                    shortname: "Ma"
                                },
                                "wednesday": {
                                    name: "MiÃ©rcoles",
                                    shortname: "Mi"
                                },
                                "thursday": {
                                    name: "Jueves",
                                    shortname: "Ju"
                                },
                                "friday": "Viernes",
                                "saturday": "SÃ¡bado"
                            }

                        },
                        {
                            pmType: "panel",
                            fieldset: true,
                            legend: "Another Info",
                            layout: "vbox",
                            items: [
                                {
                                    pmType: "panel",
                                    layout: 'hbox',
                                    items: [
                                        {
                                            pmType: "text",
                                            label: "Country",
                                            value: "Bolivia",
                                            name: "country"
                                        },
                                        {
                                            pmType: "text",
                                            label: "City",
                                            name: "city"
                                        }
                                    ]
                                },
                                {
                                    pmType: "panel",
                                    layout: 'hbox',
                                    items: [
                                        {
                                            pmType: "text",
                                            label: "Address",
                                            name: "address",
                                            placeholder: "Your address here"
                                        },
                                        {
                                            pmType: "text",
                                            label: "Zip Code",
                                            name: "zip"
                                        }
                                    ]
                                }, 
                                {
                                    pmType: "panel",
                                    layout: 'vbox',
                                    items: [
                                        {
                                            pmType: "textarea",
                                            label: "About you",
                                            name: "about"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    buttons: [
                        {
                            text: "Submit",
                            handler: function() {
                                f.submit();
                                console.log("submitting form...");
                            }
                        }
                    ]
                });
                //treePanel *-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

                tree = new PMUI.panel.TreePanel({
                    items: [
                        {
                            label: "America",
                            items: [
                                {
                                    label: "North America",
                                    items: [
                                        {
                                            label: "Canada"
                                        },
                                        {
                                            label: "USA"
                                        },
                                        {
                                            label: "Mexico"
                                        }
                                    ]
                                },
                                {
                                    label: "Central America and Caribbean",
                                    items: [
                                        {
                                            label: "Guatemala"
                                        },
                                        {
                                            label: "Cuba"
                                        },
                                        {
                                            label: "Costa Rica"
                                        }
                                    ]
                                },
                                {
                                    label: "South America",
                                    items: [
                                        {
                                            label: "Argentina"
                                        },
                                        {
                                            label: "Bolivia"
                                        },
                                        {
                                            label: "Brasil"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                });

                //Tab Item*--**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
                a = new PMUI.panel.TabPanel({
                    height : 600,
                    width : 700,
                    items:[
                        {   
                            style : {
                                cssClasses : ['icono-1']
                            },
                            title:'Tree Panel',
                            panel:tree
                        },
                        {   
                            style : {
                                cssClasses : ['icono-2']
                            },
                            title:'Form Panel',
                            panel:p
                        },
                        {   
                            style : {
                                cssClasses : ['icono-3']
                            },
                            title:'Form',
                            panel:f
                        }
                    ],
                itemsPosition : {
                    position:"left",
                    percentageWidth : 25
                }
                //,collapsible : false
            }); 


        w = new PMUI.ui.Window({
            title: "Window Example",
            width: 700,
            height: 600,
            modal: true,
            buttons: [
            {
                pmType: 'button',
                text: "Close",
                handler : function () {
                    w.close();
                },
                border: 'link'
            }
            ],
            closable: true,
            footerItems: [{
                text: "Close"
            }],
            buttonPanelPosition: 'top'
        });
        w.addItem(a);
        w.open();
        w.defineEvents();        
    },
    bodyGmail : function () {

        $("#kplianPMNewCase").on('click', function() {
            Forms.windowGmail();
        });
        $("#kplianSubMenu0").on('click', function() {
            var message_window = new PMUI.ui.InfoMessageWindow({
                 message: 'Inbox clicked.'
             });
             message_window.open();
        });
        $("#kplianSubMenu1").on('click', function() {
            var message_window = new PMUI.ui.InfoMessageWindow({
                 message: 'Draft clicked.'
             });
             message_window.open();
        });
        $("#kplianSubMenu2").on('click', function() {
            var message_window = new PMUI.ui.InfoMessageWindow({
                 message: 'Participated clicked.'
             });
             message_window.open();
        });
        $("#kplianSubMenu3").on('click', function() {
            var message_window = new PMUI.ui.InfoMessageWindow({
                 message: 'Unassigned clicked'
             });
             message_window.open();
        });
        $("#kplianSubMenu4").on('click', function() {
            f = new PMUI.form.Form({
            onSubmit: function() {
                console.log("submitting...");
            },
            onChange: function(field, newValue, previousValue) {
                console.log("The field " + field.getName() + " has changed from \"" + previousValue + "\" to \"" + newValue + "\"");
            },
            onLoad: function(f) {
            },
            items: [
                {
                    pmType: "text",
                    label: "Name",
                    id: "123",
                    value: "",
                    placeholder: "insert your name",
                    name: "name",
                    helper: "Introduce your name",
                    required : true,
                    controlsWidth: 200,
                    valueType: 'string'
                },
                {   
                    pmType: "text",
                    label: "test Number",
                    id: "1234",
                    value: 10,
                    placeholder: "insert your number",
                    name: "numberTest",
                    helper: "Introduce your number",
                    required : true,
                    controlsWidth: 200,
                    valueType: 'number'
                },
                {
                    pmType : "upload",
                    label : "Upload File",
                    multiple : true,
                    accept : 'application/pdf, application/msword, application/octet-stream',
                    helper : 'upload multiple files',
                    name : 'file'
                },
                {
                    pmType: "password",
                    label: "Password",
                    id: "125",
                    value: "",
                    //placeholder: "insert your name",
                    name: "pass",
                    helper: "Introduce your password",
                    required : true,
                    controlsWidth: 200,
                    valueType: 'string'
                },
                {
                    pmType: "datetime",
                    visible : true,
                    label: "birth date",
                    name: "birthdate",
                    valueType: 'date',
                    required: true
                },
                {
                    pmType: "dropdown",
                    label: "age",
                    options: [
                        {
                            label: "",
                            value: ""
                        },
                        {
                            label: "from 0 to 7 years old",
                            value: "0-7"
                        },
                        {
                            label: "from 8 to 13 years old",
                            value: "8-13"
                        },
                        {
                            label: "from 14 to 19 years old",
                            value: "14-19"
                        },
                        {
                            label: "from 20 to 30 years old",
                            value: "20-30"
                        },
                        {
                            label: "from 31 to 45 years old",
                            value: "31-45"
                        },
                        {
                            label: "older than 45",
                            value: "46+"
                        }
                    ],
                    name: "age",
                    helper: "Select one of the options",
                    required: true,
                    onChange: function() {
                        console.log("The value has been changed");
                    },
                    controlsWidth: 100
                },
                {
                    pmType: "radio",
                    label: "Gender",
                    value: "m",
                    name: "gender",
                    required: true,
                    options: [
                        {
                            label: "Male",
                            value: "m"
                        },
                        {
                            label: "Female",
                            value: "f"
                        }
                    ]
                }, 
                {
                    pmType: "text",
                    label: "E-mail",
                    value: "",
                    name: "email",
                    helper: "you email here",
                    required: true,
                    validators: [
                        {
                            pmType: "regexp",
                            criteria: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            errorMessage: "Please enter a valid email address"
                        }
                    ]
                }, 
                {
                    pmType: "checkbox",
                    label: "Things you like to do",
                    value: "[\"music\"]",
                    name: "hobbies",
                    helper: "Check up to 3 options",
                    options: [
                        {
                            label: "Music",
                            value: "music"
                        },
                        {
                            label: "Programming",
                            value: "programming"
                        },
                        {
                            label: "Bike ridding",
                            value: "bike"
                        },
                        {
                            label: "Movies",
                            value: "movies"
                        }
                    ],
                    validators: [],
                    required: true
                },
                {
                    pmType: "panel",
                    fieldset: true,
                    legend: "Another Info",
                    layout: "vbox",
                    items: [
                        {
                            pmType: "panel",
                            layout: 'hbox',
                            items: [
                                {
                                    pmType: "text",
                                    label: "Country",
                                    value: "Bolivia",
                                    name: "country"
                                },
                                {
                                    pmType: "text",
                                    label: "City",
                                    name: "city"
                                }
                            ]
                        },
                        {
                            pmType: "panel",
                            layout: 'hbox',
                            items: [
                                {
                                    pmType: "text",
                                    label: "Address",
                                    name: "address",
                                    placeholder: "Your address here"
                                },
                                {
                                    pmType: "text",
                                    label: "Zip Code",
                                    name: "zip"
                                }
                            ]
                        }, 
                        {
                            pmType: "panel",
                            layout: 'vbox',
                            items: [
                                {
                                    pmType: "textarea",
                                    label: "About you",
                                    name: "about"
                                }
                            ]
                        }
                    ]
                },
                {
                    pmType: "panel",
                    layout: 'hbox',
                    items: [
                        {
                            pmType: "buttonField",
                            value : "button1",
                            handler : function () {
                                alert("hi! I 'm Button 1")
                            },
                            name : 'button1'
                        },
                        {
                            pmType: "buttonField",
                            value : "button2",
                            handler : function () {
                                alert("hi! I 'm Button 2")
                            },
                            name : 'button2',
                            labelVisible : false,
                            style : {
                                cssClasses : ['customButton']
                            },
                            buttonAling : 'center'
                        },
                        {
                            pmType: "buttonField",
                            value : "button3",
                            handler : function () {
                                alert("hi! I 'm Button 3")
                            },
                            name : 'button3',
                            labelVisible : false,
                            buttonAling : 'center'
                        }
                    ]
                }
            ],
            footerItems: [
                {
                    pmType: 'button',
                    text: "Submit",
                    handler: function() {
                        f.submit();
                        console.log("submitting form...");
                    }
                }, {
                    pmType: 'button',
                    text: "Reset",
                    handler: function() {
                        f.reset();
                    }
                }
            ]
            });
            
            $('[id=":4"]').children().remove();
            $('[id=":4"]').append(f.getHTML());
            f.defineEvents();
            f.setFocus();

        });
    }
};  

jQuery(document).ready(function($) {
	var menu;
    setTimeout(function() {
        
        Forms.windowGmail();
        menu = Forms.menuGmail();
        
        recurs = function () {
            if ($('#loading').css("display") === "none") {
                $('[class=n3]').append(menu);
                Forms.bodyGmail();
            } else {
                setTimeout(function() {recurs();}, 100);
            }
        };
        recurs();
        
        
	}, 100);
});
