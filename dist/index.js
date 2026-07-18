"use strict";var q=function(n,a){return function(){try{return a||n((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}}};var h=q(function(M,d){"use strict";var m=require("@stdlib/utils-define-nonenumerable-read-only-property"),p=require("@stdlib/assert-is-function"),x=require("@stdlib/assert-is-iterator-like"),f=require("@stdlib/symbol-iterator"),g=require("@stdlib/string-format");function c(){var n,a,r,o,s,i,l,e;if(r=arguments.length,p(arguments[r-1])||(r-=1,a=arguments[r]),r-=1,o=arguments[r],!p(o))throw new TypeError(g("invalid argument. Callback argument must be a function. Value: `%s`.",o));if(r<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(n=[],e=0;e<r;e++){if(!x(arguments[e]))throw new TypeError(g("invalid argument. Must provide an iterator protocol-compliant object. Argument: `%u`. Value: `%s`.",e,arguments[e]));n.push(arguments[e])}if(s={},m(s,"next",w),m(s,"return",y),f){for(e=0;e<r;e++)if(!p(n[e][f])){i=!0;break}i||m(s,f,b)}return i=!1,l=-1,e=0,s;function w(){var t,u,v;if(i)return{done:!0};for(t=[],l+=1,v=0;v<r;v++){if(u=n[v].next(),u.done)return i=!0,u;t.push(u.value)}return t.push(l),{value:o.apply(a,t),done:!1}}function y(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function b(){var t,u;for(t=[],u=0;u<r;u++)t.push(n[u][f]());return t.push(o),t.push(a),c.apply(null,t)}}d.exports=c});var k=h();module.exports=k;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
