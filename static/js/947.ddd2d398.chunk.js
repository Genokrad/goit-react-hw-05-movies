"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{514:function(e,t,n){n.d(t,{bg:function(){return o},kg:function(){return i},l8:function(){return u}});var r=n(439),a=n(791),s=n(689),c=n(565),i=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],i=t[1],u=(0,s.UO)().movieId;return(0,a.useEffect)((function(){(0,c.Ny)(u).then(i)}),[u]),n},u=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],i=t[1],u=(0,s.UO)().movieId;return(0,a.useEffect)((function(){(0,c.Bt)(u).then(i).catch((function(e){return console.log("Something went wrong Home Page")})).finally()}),[u]),n},o=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],i=t[1],u=(0,s.UO)().movieId;return(0,a.useEffect)((function(){(0,c.y)(u).then(i)}),[u]),n}},947:function(e,t,n){n.r(t);var r=n(514),a=n(689),s=n(87),c=n(791),i=n(521),u=n(184);t.default=function(){var e,t,n=(0,r.kg)(),o=(0,a.s0)(),l=(0,a.TH)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{onClick:function(){var e,t;o(null!==(e=null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},children:"Back"}),n&&(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"movieContainet",children:[(0,u.jsxs)("div",{className:"movie-wraper",children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(n.poster_path),alt:n.name}),(0,u.jsxs)("p",{className:"score",children:["User score: ",Math.round(10*n.vote_average),"%"]})]}),(0,u.jsxs)("div",{className:"descriptioPart",children:[(0,u.jsx)("h2",{className:"movieTitle",children:n.title||n.name}),(0,u.jsx)("p",{children:(0,u.jsx)("b",{className:"subTitle",children:"Overview"})}),(0,u.jsx)("p",{className:"description",children:n.overview}),(0,u.jsx)("p",{children:(0,u.jsx)("b",{className:"subTitle",children:"Genres"})}),(0,u.jsx)("p",{className:"description genres",children:Array.isArray(n.genres)&&n.genres.map((function(e){var t=e.id,n=e.name;return(0,u.jsx)("span",{className:"genre",children:n},t)}))||(0,u.jsx)("span",{className:"genres",children:n.genres},n.genres)})]})]})}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"linkWraper",children:[(0,u.jsx)(s.rU,{to:"cast",state:{from:null===l||void 0===l||null===(e=l.state)||void 0===e?void 0:e.from},children:"Cast"}),(0,u.jsx)(s.rU,{to:"reviews",state:{from:null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from},children:"Rewiews"})]}),(0,u.jsx)(c.Suspense,{fallback:(0,u.jsx)(i.a,{}),children:(0,u.jsx)(a.j3,{})})]})]})}},565:function(e,t,n){n.d(t,{Bt:function(){return d},Ch:function(){return l},Ny:function(){return o},Tg:function(){return u},y:function(){return p}});var r=n(861),a=n(757),s=n.n(a),c=n(912),i="3cc1352acc3f9742a9cfb3f54e0b60a0",u=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=947.ddd2d398.chunk.js.map