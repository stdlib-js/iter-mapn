// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var a,c,p,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(r,t)||l.call(r,t)?(a=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=a):r[t]=e.value),p="get"in e,y="set"in e,c&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(r,t,e.get),y&&i&&i.call(r,t,e.set),r};var a=t;function c(r,t,e){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function y(r){return"boolean"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(r){var t,e,n;if(null==r)return v.call(r);e=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[w]=e:delete r[w],n}:function(r){return v.call(r)},g=Boolean.prototype.toString;var h=b();function j(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_(r)))}function S(r){return y(r)||j(r)}function E(){return new Function("return this;")()}c(S,"isPrimitive",y),c(S,"isObject",j);var A="object"==typeof self?self:null,O="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof T?T:null;var B=function(r){if(arguments.length){if(!y(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return E()}if(A)return A;if(O)return O;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,C=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;c(k,"REGEXP",V);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===_(r)};function L(r){return null!==r&&"object"==typeof r}function M(r){var t,e,n,o;if(("Object"===(e=_(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return L(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}c(L,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!G(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(L));var F="function"==typeof p||"object"==typeof C||"function"==typeof P?function(r){return M(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?M(r).toLowerCase():t};function I(r){return"function"===F(r)}function R(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&I(r.next)}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function N(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function X(){var r,t,e,n,o,u,i,f;if(I(arguments[(e=arguments.length)-1])||(t=arguments[e-=1]),!I(n=arguments[e-=1]))throw new TypeError(N("0Cb2n",n));if(e<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(r=[],f=0;f<e;f++){if(!R(arguments[f]))throw new TypeError(N("0Cb4A",f,arguments[f]));r.push(arguments[f])}if(c(o={},"next",l),c(o,"return",a),U){for(f=0;f<e;f++)if(!I(r[f][U])){u=!0;break}u||c(o,U,p)}return u=!1,i=-1,f=0,o;function l(){var o,f,l;if(u)return{done:!0};for(o=[],i+=1,l=0;l<e;l++){if((f=r[l].next()).done)return u=!0,f;o.push(f.value)}return o.push(i),{value:n.apply(t,o),done:!1}}function a(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function p(){var o,u;for(o=[],u=0;u<e;u++)o.push(r[u][U]());return o.push(n),o.push(t),X.apply(null,o)}}export{X as default};
//# sourceMappingURL=mod.js.map