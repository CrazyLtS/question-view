(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24d68682"],{"159b":function(t,r,e){var n=e("da84"),i=e("fdbc"),o=e("17c2"),a=e("9112");for(var c in i){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,r,e){"use strict";var n=e("b727").forEach,i=e("a640"),o=e("ae40"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"2ecd":function(t,r,e){"use strict";var n=e("a320"),i=e.n(n);i.a},4160:function(t,r,e){"use strict";var n=e("23e7"),i=e("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"65f0":function(t,r,e){var n=e("861d"),i=e("e8b5"),o=e("b622"),a=o("species");t.exports=function(t,r){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?n(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},"883f":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"scores"},[t._v("共答对了："+t._s(t.trueRate)+"题")])},i=[],o=(e("4160"),e("159b"),{name:"Scores",computed:{trueRate:function(){var t=0;return this.$store.state.answerList.forEach((function(r){r&&(t+=1)})),t}}}),a=o,c=(e("2ecd"),e("2877")),s=Object(c["a"])(a,n,i,!1,null,"6621068a",null);r["default"]=s.exports},a320:function(t,r,e){},a640:function(t,r,e){"use strict";var n=e("d039");t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},ae40:function(t,r,e){var n=e("83ab"),i=e("d039"),o=e("5135"),a=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,r){if(o(c,t))return c[t];r||(r={});var e=[][t],u=!!o(r,"ACCESSORS")&&r.ACCESSORS,f=o(r,0)?r[0]:s,l=o(r,1)?r[1]:void 0;return c[t]=!!e&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:s}):t[1]=1,e.call(t,f,l)}))}},b727:function(t,r,e){var n=e("0366"),i=e("44ad"),o=e("7b0b"),a=e("50c4"),c=e("65f0"),s=[].push,u=function(t){var r=1==t,e=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(v,h,L,S){for(var p,b,y=o(v),E=i(y),m=n(h,L,3),T=a(E.length),C=0,g=S||c,w=r?g(v,T):e?g(v,0):void 0;T>C;C++)if((d||C in E)&&(p=E[C],b=m(p,C,y),t))if(r)w[C]=b;else if(b)switch(t){case 3:return!0;case 5:return p;case 6:return C;case 2:s.call(w,p)}else if(f)return!1;return l?-1:u||f?f:w}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e8b5:function(t,r,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-24d68682.640b9378.js.map