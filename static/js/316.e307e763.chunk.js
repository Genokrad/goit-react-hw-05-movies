"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[316],{316:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(565),u=n(87),i=n(689),s=n(710),o=n(184),p=function(t){var e=t.handleSubmit,n=t.inputValue,r=t.handleChange,a=t.moviesFromQuery,c=t.query,p=(0,i.TH)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{className:"form",action:"",onSubmit:e,children:[(0,o.jsx)("button",{className:"submitButton",type:"submit",children:"Search"}),(0,o.jsx)("input",{className:"input",type:"text",value:n,onChange:r})]}),c&&(0,o.jsx)("ul",{className:"filmList",children:a&&a.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsxs)("div",{className:"movie-wraper",children:[(0,o.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w300/".concat(t.poster_path):s,alt:t.name||t.original_name,height:"400",width:"300",className:"castImg"}),(0,o.jsx)("div",{className:"movie-name",children:(0,o.jsx)(u.rU,{to:"".concat(t.id),state:{from:p},children:(0,o.jsx)("span",{className:"movieNameText",children:t.title})})})]})},t.id)}))})]})},f=function(){var t=(0,a.useState)(""),e=(0,r.Z)(t,2),n=e[0],i=e[1],s=(0,a.useState)(null),f=(0,r.Z)(s,2),m=f[0],h=f[1],l=(0,u.lr)(),d=(0,r.Z)(l,2),v=d[0],g=d[1],x=v.get("query");return(0,a.useEffect)((function(){""!==x&&(0,c.Ch)(x).then((function(t){return h(t)}))}),[x]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p,{handleChange:function(t){return i(t.target.value.toLowerCase())},handleSubmit:function(t){t.preventDefault(),g(n?{query:n}:{}),i("")},moviesFromQuery:m,query:x})})}},565:function(t,e,n){n.d(e,{Bt:function(){return m},Ch:function(){return p},Ny:function(){return o},Tg:function(){return s},y:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(912),i="3cc1352acc3f9742a9cfb3f54e0b60a0",s=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},710:function(t,e,n){t.exports=n.p+"static/media/worker.634c743383b17a828f92.png"}}]);
//# sourceMappingURL=316.e307e763.chunk.js.map