(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f729988"],{"02f4":function(t,n,e){var i=e("4588"),r=e("be13");t.exports=function(t){return function(n,e){var s,l,c=String(r(n)),a=i(e),o=c.length;return a<0||a>=o?t?"":void 0:(s=c.charCodeAt(a),s<55296||s>56319||a+1===o||(l=c.charCodeAt(a+1))<56320||l>57343?t?c.charAt(a):s:t?c.slice(a,a+2):l-56320+(s-55296<<10)+65536)}}},"0390":function(t,n,e){"use strict";var i=e("02f4")(!0);t.exports=function(t,n,e){return n+(e?i(t,n).length:1)}},"0c99":function(t,n,e){},2368:function(t,n,e){},"28a5":function(t,n,e){"use strict";var i=e("aae3"),r=e("cb7c"),s=e("ebd6"),l=e("0390"),c=e("9def"),a=e("5f1b"),o=e("520a"),u=e("79e5"),f=Math.min,d=[].push,p="split",v="length",h="lastIndex",g=4294967295,m=!u((function(){RegExp(g,"y")}));e("214f")("split",2,(function(t,n,e,u){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[v]||2!="ab"[p](/(?:ab)*/)[v]||4!="."[p](/(.?)(.?)/)[v]||"."[p](/()()/)[v]>1||""[p](/.?/)[v]?function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return e.call(r,t,n);var s,l,c,a=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,p=void 0===n?g:n>>>0,m=new RegExp(t.source,u+"g");while(s=o.call(m,r)){if(l=m[h],l>f&&(a.push(r.slice(f,s.index)),s[v]>1&&s.index<r[v]&&d.apply(a,s.slice(1)),c=s[0][v],f=l,a[v]>=p))break;m[h]===s.index&&m[h]++}return f===r[v]?!c&&m.test("")||a.push(""):a.push(r.slice(f)),a[v]>p?a.slice(0,p):a}:"0"[p](void 0,0)[v]?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,i){var r=t(this),s=void 0==e?void 0:e[n];return void 0!==s?s.call(e,r,i):b.call(String(r),e,i)},function(t,n){var i=u(b,t,this,n,b!==e);if(i.done)return i.value;var o=r(t),d=String(this),p=s(o,RegExp),v=o.unicode,h=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(m?"y":"g"),y=new p(m?o:"^(?:"+o.source+")",h),C=void 0===n?g:n>>>0;if(0===C)return[];if(0===d.length)return null===a(y,d)?[d]:[];var x=0,_=0,S=[];while(_<d.length){y.lastIndex=m?_:0;var w,O=a(y,m?d:d.slice(_));if(null===O||(w=f(c(y.lastIndex+(m?0:_)),d.length))===x)_=l(d,_,v);else{if(S.push(d.slice(x,_)),S.length===C)return S;for(var k=1;k<=O.length-1;k++)if(S.push(O[k]),S.length===C)return S;_=x=w}}return S.push(d.slice(x)),S}]}))},"2c7c":function(t,n,e){"use strict";var i=e("2368"),r=e.n(i);r.a},4917:function(t,n,e){"use strict";var i=e("cb7c"),r=e("9def"),s=e("0390"),l=e("5f1b");e("214f")("match",1,(function(t,n,e,c){return[function(e){var i=t(this),r=void 0==e?void 0:e[n];return void 0!==r?r.call(e,i):new RegExp(e)[n](String(i))},function(t){var n=c(e,t,this);if(n.done)return n.value;var a=i(t),o=String(this);if(!a.global)return l(a,o);var u=a.unicode;a.lastIndex=0;var f,d=[],p=0;while(null!==(f=l(a,o))){var v=String(f[0]);d[p]=v,""===v&&(a.lastIndex=s(o,r(a.lastIndex),u)),p++}return 0===p?null:d}]}))},5362:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"musicList"},[t.list.length>0?[e("div",{staticClass:"list-item list-header"},[e("span",{staticClass:"list-name"},[t._v("歌曲")]),e("span",{staticClass:"list-artist"},[t._v("歌手")]),1===t.listType?e("span",{staticClass:"list-time"},[t._v("时长")]):e("span",{staticClass:"list-album"},[t._v("专辑")])]),e("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(n){return t.listScroll(n)}}},[t._l(t.list,(function(n,i){return e("div",{key:n.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===n.id},on:{dblclick:function(e){return t.selectItem(n,i,e)}}},[e("span",{staticClass:"list-num",domProps:{textContent:t._s(i+1)}}),e("div",{staticClass:"list-name"},[e("span",[t._v(t._s(n.name))]),e("div",{staticClass:"list-menu"},[e("span",{staticClass:"list-menu-icon-play",class:{on:t.playing&&t.currentMusic.id===n.id},on:{click:function(e){return e.stopPropagation(),t.selectItem(n,i)}}})])]),e("span",{staticClass:"list-artist"},[t._v(t._s(n.singer))]),1===t.listType?e("span",{staticClass:"list-time"},[t._v("\n          "+t._s(t._f("format")(n.duration%3600))+"\n          "),e("i",{staticClass:"list-menu-icon-del",on:{click:function(n){return n.stopPropagation(),t.deleteItem(i)}}})]):e("span",{staticClass:"list-album"},[t._v(t._s(n.album))])])})),t._t("listBtn")],2)]:e("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},r=[],s=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),l=(e("c5f6"),e("2f62")),c=e("bbd5"),a=e("5af1");function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(e,!0).forEach((function(n){Object(s["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var f={name:"music-list",components:{MmNoResult:a["a"]},props:{list:{type:Array,default:function(){return[]}},listType:{type:Number,default:0}},data:function(){return{lockUp:!0}},computed:u({},Object(l["c"])(["playing","currentMusic"])),watch:{list:function(t,n){2===this.listType&&(t.length!==n.length?this.lockUp=!1:t[t.length-1].id!==n[n.length-1].id&&(this.lockUp=!1))}},activated:function(){this.scrollTop&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:u({listScroll:function(t){var n=t.target.scrollTop;if(this.scrollTop=n,2===this.listType&&!this.lockUp){var e=t.target,i=e.scrollHeight,r=e.offsetHeight;n+r>=i-50&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,n,e){e&&/list-menu-icon-del/.test(e.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,n))},deleteItem:function(t){this.$emit("del",t)}},Object(l["d"])({setPlaying:"SET_PLAYING"})),filters:{format:c["b"]}},d=f,p=(e("2c7c"),e("2877")),v=Object(p["a"])(d,i,r,!1,null,"f6755d2e",null);n["a"]=v.exports},"5af1":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mm-no-result"},[e("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},r=[],s={name:"mm-no-result",props:{title:{type:String,default:""}}},l=s,c=(e("9673"),e("2877")),a=Object(c["a"])(l,i,r,!1,null,null,null);n["a"]=a.exports},9673:function(t,n,e){"use strict";var i=e("0c99"),r=e.n(i);r.a},a481:function(t,n,e){"use strict";var i=e("cb7c"),r=e("4bf8"),s=e("9def"),l=e("4588"),c=e("0390"),a=e("5f1b"),o=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};e("214f")("replace",2,(function(t,n,e,h){return[function(i,r){var s=t(this),l=void 0==i?void 0:i[n];return void 0!==l?l.call(i,s,r):e.call(String(s),i,r)},function(t,n){var r=h(e,t,this,n);if(r.done)return r.value;var f=i(t),d=String(this),p="function"===typeof n;p||(n=String(n));var m=f.global;if(m){var b=f.unicode;f.lastIndex=0}var y=[];while(1){var C=a(f,d);if(null===C)break;if(y.push(C),!m)break;var x=String(C[0]);""===x&&(f.lastIndex=c(d,s(f.lastIndex),b))}for(var _="",S=0,w=0;w<y.length;w++){C=y[w];for(var O=String(C[0]),k=o(u(l(C.index),d.length),0),I=[],j=1;j<C.length;j++)I.push(v(C[j]));var P=C.groups;if(p){var T=[O].concat(I,k,d);void 0!==P&&T.push(P);var $=String(n.apply(void 0,T))}else $=g(O,d,k,I,P,n);k>=S&&(_+=d.slice(S,k)+$,S=k+O.length)}return _+d.slice(S)}];function g(t,n,i,s,l,c){var a=i+t.length,o=s.length,u=p;return void 0!==l&&(l=r(l),u=d),e.call(c,u,(function(e,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(a);case"<":c=l[r.slice(1,-1)];break;default:var u=+r;if(0===u)return e;if(u>o){var d=f(u/10);return 0===d?e:d<=o?void 0===s[d-1]?r.charAt(1):s[d-1]+r.charAt(1):e}c=s[u-1]}return void 0===c?"":c}))}}))},bbd5:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return s}));e("c5f6"),e("a481"),e("4917"),e("28a5");function i(t){return t<10?"0"+t:t}function r(t){for(var n=t.split("\n"),e=[],i=0;i<n.length;i++){var r=decodeURIComponent(n[i]),s=/\[\d*:\d*((\.|:)\d*)*\]/g,l=r.match(s);if(l)for(var c=r.replace(s,""),a=0,o=l.length;a<o;a++){var u=l[a],f=Number(String(u.match(/\[\d*/i)).slice(1)),d=Number(String(u.match(/:\d*/i)).slice(1)),p=60*f+d;""!==c&&e.push({time:p,text:c})}}return e}function s(t){var n=Math.floor(t/60),e=Math.floor(t%60);return"".concat(i(n),":").concat(i(e))}}}]);