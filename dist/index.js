"use strict";var q=function(n,u){return function(){return u||n((u={exports:{}}).exports,u),u.exports}};var h=q(function(M,d){"use strict";var m=require("@stdlib/utils-define-nonenumerable-read-only-property"),p=require("@stdlib/assert-is-function"),x=require("@stdlib/assert-is-iterator-like"),f=require("@stdlib/symbol-iterator"),g=require("@stdlib/string-format");function c(){var n,u,t,o,s,i,l,r;if(t=arguments.length,p(arguments[t-1])||(t-=1,u=arguments[t]),t-=1,o=arguments[t],!p(o))throw new TypeError(g("invalid argument. Callback argument must be a function. Value: `%s`.",o));if(t<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(n=[],r=0;r<t;r++){if(!x(arguments[r]))throw new TypeError(g("invalid argument. Must provide an iterator protocol-compliant object. Argument: `%u`. Value: `%s`.",r,arguments[r]));n.push(arguments[r])}if(s={},m(s,"next",w),m(s,"return",y),f){for(r=0;r<t;r++)if(!p(n[r][f])){i=!0;break}i||m(s,f,b)}return i=!1,l=-1,r=0,s;function w(){var e,a,v;if(i)return{done:!0};for(e=[],l+=1,v=0;v<t;v++){if(a=n[v].next(),a.done)return i=!0,a;e.push(a.value)}return e.push(l),{value:o.apply(u,e),done:!1}}function y(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function b(){var e,a;for(e=[],a=0;a<t;a++)e.push(n[a][f]());return e.push(o),e.push(u),c.apply(null,e)}}d.exports=c});var k=h();module.exports=k;
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
