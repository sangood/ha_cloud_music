(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8062ffe8"],{"1a25":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"historyList"},[s("music-list",{attrs:{list:t.historyList,"list-type":1},on:{select:t.selectItem,del:t.deleteItem}},[s("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[s("span",{on:{click:function(e){return t.$refs.dialog.show()}}},[t._v("清空列表")])])]),s("mm-dialog",{ref:"dialog",attrs:{"body-text":"是否清空播放历史列表","confirm-btn-text":"清空"},on:{confirm:t.clearList}})],1)},r=[],c=(s("5ab2"),s("6d57"),s("e10e"),s("fd4b")),n=s("9d37"),o=s("08c1"),a=s("5362"),l=s("093b");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function b(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var f={name:"HistoryList",components:{MusicList:a["a"],MmDialog:l["a"]},computed:b({},Object(o["c"])(["historyList","playing","currentMusic"])),methods:b({clearList:function(){this.clearHistory(),this.$mmToast("列表清空成功")},selectItem:function(t,e){this.selectPlay({list:this.historyList,index:e})},deleteItem:function(t){var e=Object(c["a"])(this.historyList);e.splice(t,1),this.removeHistory(e),this.$mmToast("删除成功")}},Object(o["d"])({setPlaying:"SET_PLAYING"}),{},Object(o["b"])(["selectPlay","clearHistory","removeHistory"]))},p=f,y=(s("b635"),s("5511")),m=Object(y["a"])(p,i,r,!1,null,"74627c03",null);e["default"]=m.exports},"5aaa":function(t,e,s){},b635:function(t,e,s){"use strict";var i=s("5aaa"),r=s.n(i);r.a}}]);
//# sourceMappingURL=chunk-8062ffe8.cb70ede2.js.map