(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-26fbc5f7":"c3588b2e","chunk-2d0ac1e8":"f305606f","chunk-2d0ddddc":"182692e4"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-26fbc5f7":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-26fbc5f7":"4860b165","chunk-2d0ac1e8":"31d6cfe0","chunk-2d0ddddc":"31d6cfe0"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2d50":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"home_area"},[n("router-link",{staticClass:"home",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"menu",attrs:{to:"/play_specify"}},[t._v("播放頁 ")]),n("router-link",{staticClass:"menu",attrs:{to:"/storage"}},[t._v("收藏頁")])],1),t._m(0)]),n("router-view")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("input",{attrs:{type:"text"}}),n("button",[t._v("登入")])])}],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"playlists"},t._l(t.pagePlaylist,(function(e){return n("div",{key:e.id,staticClass:"playlist"},[n("div",{staticClass:"thumbnail_and_howlong_area"},[n("a",{on:{click:function(n){return t.gotoPlay(e.id)}}},[n("img",{staticClass:"thumbnail",attrs:{src:e.img,alt:"無法顯示"}}),n("span",{staticClass:"howlong"},[t._v(t._s(e.formatDuration))])])]),n("router-link",{staticClass:"title",attrs:{to:"/play",title:e.title}},[t._v(" "+t._s(e.cut_title)+" ")]),n("p",{staticClass:"description"},[t._v(t._s(e.description))])],1)})),0),n("div",{staticClass:"pagination"},[n("a",{staticClass:"page_btn firstPage",on:{click:function(e){return t.gotoPage(1)}}},[t._v(" First ")]),n("a",{staticClass:"page_btn previous_page"},[t._v("<<")]),t._l(t.temp_total_page,(function(e){return n("a",{key:e,staticClass:"page_btn gotopage",on:{click:function(n){return t.gotoPage(e)}}},[t._v(" "+t._s(e)+" ")])})),n("a",{staticClass:"page_btn nextPage",class:{disabled:9==this.temp_total_page},on:{click:function(e){return t.gotoNextpage(t.nextPageToken)}}},[t._v(" >> ")]),n("a",{staticClass:"page_btn lastPage",on:{click:function(e){return t.gotoPage(t.temp_total_page)}}},[t._v(" Last ")])],2)])},d=[],f=(n("a4d3"),n("e01a"),n("99af"),n("4160"),n("c975"),n("fb6a"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("1157")),g=n.n(f),h={data:function(){return{videos:[],pagePlaylist:[],playStartIndex:0,currentPage:1,nextPageToken:"",perPage_num:12,total_page:0,temp_total_page:1}},computed:{},methods:{gotoPlay:function(t){this.$router.push("/play/".concat(t))},gotoPage:function(t){this.currentPage=t,console.log("currentPage: "+this.currentPage),this.pagePlaylist=this.videos.slice(this.perPage_num*(this.currentPage-1),this.perPage_num*this.currentPage)},gotoNextpage:function(t){var e=this;if(9!=this.temp_total_page){this.currentPage++,console.log(this.currentPage),this.playStartIndex+=12;var n="https://www.googleapis.com/youtube/v3/videos?part=contentDetails&part=snippet&chart=mostPopular&maxResults=12&pageToken=".concat(t,"&regionCode=TW&key=AIzaSyAEHw6lAxMOQ4YcogbbAkeWza_hxARrk4k");this.$http.get(n).then((function(t){e.temp_total_page=e.currentPage,console.log(e.temp_total_page);var n=t.data.items;n.forEach((function(n,a,r){var o=n.id,i=n.snippet.thumbnails.high.url,s=n.snippet.title,c=n.snippet.description,l=n.contentDetails.duration,u=e.durationHandler(l),p={id:o,img:i,title:s,cut_title:s.substr(1,10)+"...",description:c.substr(1,20)+"...",formatDuration:u};e.videos.push(p),e.pagePlaylist=e.videos.slice(e.playStartIndex,e.playStartIndex+12),e.nextPageToken=t.data.nextPageToken})),console.log(e.pagePlaylist)}))}else document.querySelector(".nextPage")},getVideos:function(){var t=this,e="https://www.googleapis.com/youtube/v3/videos?part=contentDetails&part=snippet&chart=mostPopular&maxResults=12&regionCode=TW&key=AIzaSyAEHw6lAxMOQ4YcogbbAkeWza_hxARrk4k";this.$http.get(e).then((function(e){console.log(e);var n=e.data.items,a=e.data.pageInfo;t.nextPageToken=e.data.nextPageToken,t.total_page=Math.ceil(a.totalResults/a.resultsPerPage),t.currentPage=1,n.forEach((function(e,n,a){var r=e.id,o=e.snippet.thumbnails.high.url,i=e.snippet.title,s=e.snippet.description,c=e.contentDetails.duration,l=t.durationHandler(c),u={id:r,img:o,title:i,cut_title:i.substr(1,10)+"...",description:s.substr(1,20)+"...",formatDuration:l};t.videos.push(u),t.pagePlaylist=t.videos.slice(t.playStartIndex,t.playStartIndex+12)})),g()(".pagination").css("display","flex")}))},setResponseCountry:function(t){var e=this;t.forEach((function(t,n,a){var r=t.id,o=t.snippet.thumbnails.high.url,i=t.snippet.title,s=t.snippet.description,c=t.contentDetails.duration,l=e.durationHandler(c);e.videos.push({id:r,img:o,title:i,cut_title:i.substr(1,20)+"...",description:s.substr(1,30)+"...",formatDuration:l})}))},durationHandler:function(t){var e=0,n=0,a=0;if(t=t.replace("PT",""),t.indexOf("H")>-1){var r=t.split("H");e=r[0],t=r[1]}else e=0;if(t.indexOf("M")>-1){var o=t.split("M");n=o[0],t=o[1]}if(t.indexOf("S")>-1){var i=t.split("S");a=i[0]}return t="".concat(e,":").concat(n,":").concat(a),t}},created:function(){console.log("created"),this.getVideos()},mounted:function(){if(2!=this.temp_total_page);else{var t=document.querySelector(".nextPage");t.classList.add("disabled")}}},m=h,v=(n("8fe8"),Object(i["a"])(m,p,d,!1,null,"1ef70664",null)),_=v.exports;a["a"].use(u["a"]);var y=[{path:"/",name:"Home",component:_},{path:"/storage",name:"Storage",component:function(){return n.e("chunk-2d0ddddc").then(n.bind(null,"82e1"))}},{path:"/play/:video_id",name:"Play",component:function(){return n.e("chunk-26fbc5f7").then(n.bind(null,"1cd7"))}},{path:"/play_specify",name:"Play_specify",component:function(){return n.e("chunk-2d0ac1e8").then(n.bind(null,"17d0"))}}],b=new u["a"]({routes:y}),P=b,k=n("2f62");a["a"].use(k["a"]);var x=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=n("bc3a"),C=n.n(w),S=n("a7fe"),O=n.n(S);a["a"].config.productionTip=!1,a["a"].use(O.a,C.a),new a["a"]({router:P,store:x,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"8fe8":function(t,e,n){"use strict";var a=n("2d50"),r=n.n(a);r.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.d4547644.js.map