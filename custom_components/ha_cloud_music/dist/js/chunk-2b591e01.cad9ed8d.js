(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b591e01"],{"650b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),n("div",{staticClass:"search-head"},[t._l(t.Artists.slice(0,5),(function(e,r){return n("span",{key:r,on:{click:function(n){return t.clickHot(e.first)}}},[t._v(t._s(e.first))])})),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchValue,expression:"searchValue",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",placeholder:"音乐/歌手"},domProps:{value:t.searchValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)},input:function(e){e.target.composing||(t.searchValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})],2),n("music-list",{ref:"musicList",attrs:{list:t.list,"list-type":2},on:{select:t.selectItem,pullUp:t.pullUpLoad}})],1)},c=[],i=(n("5ab2"),n("6d57"),n("e10e"),n("63ff"),n("e5af")),s=n("fd4b"),a=(n("f548"),n("9d37")),o=n("08c1"),u=n("365c"),l=n("eb4d"),d=n("f904"),f=n("5362"),h=n("ac0d");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={name:"Search",components:{MmLoading:d["a"],MusicList:f["a"]},mixins:[h["a"]],data:function(){return{searchValue:"",Artists:[],list:[],page:0,lockUp:!0}},computed:b({},Object(o["c"])(["playing","currentMusic"])),watch:{list:function(t,e){t.length!==e.length?this.lockUp=!1:t[t.length-1].id!==e[e.length-1].id&&(this.lockUp=!1)}},created:function(){var t=this;Object(u["q"])().then((function(e){200===e.data.code&&(t.Artists=e.data.result.hots,t.mmLoadShow=!1)}))},methods:b({clickHot:function(t){this.searchValue=t,this.onEnter()},onEnter:function(){var t=this;""!==this.searchValue.replace(/(^\s+)|(\s+$)/g,"")?(this.mmLoadShow=!0,this.page=0,this.list.length>0&&this.$refs.musicList.scrollTo(),Object(u["p"])(this.searchValue).then((function(e){200===e.data.code&&(t.list=Object(l["b"])(e.data.result.songs),t._hideLoad())}))):this.$mmToast("搜索内容不能为空！")},pullUpLoad:function(){var t=this;this.page+=1,Object(u["p"])(this.searchValue,this.page).then((function(e){if(200===e.data.code){if(!e.data.result.songs)return void t.$mmToast("没有更多歌曲啦！");t.list=[].concat(Object(s["a"])(t.list),Object(s["a"])(Object(l["b"])(e.data.result.songs)))}}))},selectItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this._getMusicDetail(e.id);case 2:n=t.sent,e.image=n,this.selectAddPlay(e);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),_getMusicDetail:function(t){return Object(u["g"])(t).then((function(t){if(200===t.data.code)return t.data.songs[0].al.picUrl}))}},Object(o["d"])({setPlaying:"SET_PLAYING"}),{},Object(o["b"])(["selectAddPlay"]))},O=m,g=(n("f84f"),n("5511")),y=Object(g["a"])(O,r,c,!1,null,"18c77283",null);e["default"]=y.exports},ac0d:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("5ab2"),n("6d57"),n("e10e");var r=n("9d37"),c=n("08c1");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}s({},Object(c["c"])(["playing","currentMusic"])),s({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},Object(c["d"])({setPlaying:"SET_PLAYING"}),{},Object(c["b"])(["selectPlay"]));var a={data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout((function(){e.mmLoadShow=!1}),200)}}}},b4ce:function(t,e,n){},f84f:function(t,e,n){"use strict";var r=n("b4ce"),c=n.n(r);c.a}}]);
//# sourceMappingURL=chunk-2b591e01.cad9ed8d.js.map