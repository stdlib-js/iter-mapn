// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).iterMapN=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var a,c,p,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(f.call(e,t)||l.call(e,t)?(a=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=a):e[t]=r.value),p="get"in r,y="set"in r,c&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,t,r.get),y&&i&&i.call(e,t,r.set),e};var a=t;function c(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var p=/./;function y(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function m(e,t){return null!=e&&v.call(e,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(e){var t,r,n;if(null==e)return d.call(e);r=e[w],t=m(e,w);try{e[w]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[w]=r:delete e[w],n}:function(e){return d.call(e)},g=Boolean.prototype.toString;var _=b();function j(e){return"object"==typeof e&&(e instanceof Boolean||(_?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===h(e)))}function S(e){return y(e)||j(e)}function E(){return new Function("return this;")()}c(S,"isPrimitive",y),c(S,"isObject",j);var A="object"==typeof self?self:null,O="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof T?T:null;var B=function(e){if(arguments.length){if(!y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return E()}if(A)return A;if(O)return O;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,C=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var M=/^\s*function\s*([^(]*)/i;c(k,"REGEXP",M);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===h(e)};function G(e){return null!==e&&"object"==typeof e}function L(e){var t,r,n,o;if(("Object"===(r=h(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=M.exec(n.toString()))return t[1]}return G(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}c(G,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!V(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(G));var F="function"==typeof p||"object"==typeof C||"function"==typeof P?function(e){return L(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?L(e).toLowerCase():t};function I(e){return"function"===F(e)}function N(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)&&I(e.next)}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function U(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function e(){var t,r,n,o,u,i,f,l;if(I(arguments[(n=arguments.length)-1])||(r=arguments[n-=1]),!I(o=arguments[n-=1]))throw new TypeError(U("0Cb2n",o));if(n<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(t=[],l=0;l<n;l++){if(!N(arguments[l]))throw new TypeError(U("0Cb4A",l,arguments[l]));t.push(arguments[l])}if(c(u={},"next",a),c(u,"return",p),R){for(l=0;l<n;l++)if(!I(t[l][R])){i=!0;break}i||c(u,R,y)}return i=!1,f=-1,l=0,u;function a(){var e,u,l;if(i)return{done:!0};for(e=[],f+=1,l=0;l<n;l++){if((u=t[l].next()).done)return i=!0,u;e.push(u.value)}return e.push(f),{value:o.apply(r,e),done:!1}}function p(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function y(){var u,i;for(u=[],i=0;i<n;i++)u.push(t[i][R]());return u.push(o),u.push(r),e.apply(null,u)}}}));
//# sourceMappingURL=browser.js.map