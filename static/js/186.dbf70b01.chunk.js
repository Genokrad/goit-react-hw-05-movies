"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{514:function(t,e,n){n.d(e,{k:function(){return o},l:function(){return i}});var r=n(439),a=n(791),c=n(689),u=n(565),o=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],o=e[1],i=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.Ny)(i).then(o)}),[i]),n},i=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],o=e[1],i=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.Bt)(i).then(o).catch((function(t){return console.log("Something went wrong Home Page")})).finally()}),[i]),n}},186:function(t,e,n){n.r(e);var r=n(514),a=n(184);e.default=function(){var t=(0,r.l)();return console.log(t),(0,a.jsx)("ul",{className:"reviewsList",children:Array.isArray(t)&&t.length>0&&t.map((function(t){var e=t.author,n=t.content,r=t.id;return(0,a.jsxs)("li",{children:[(0,a.jsx)("p",{className:"reviewsAuthor",children:e}),(0,a.jsx)("p",{className:"reviewsText",children:n})]},r)}))||(0,a.jsx)("p",{className:"reviewsText",children:"We don't have any reviews for this movie"})})}},565:function(t,e,n){n.d(e,{Bt:function(){return v},Ch:function(){return f},Ny:function(){return s},Tg:function(){return i},y:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(912),o="3cc1352acc3f9742a9cfb3f54e0b60a0",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.dbf70b01.chunk.js.map