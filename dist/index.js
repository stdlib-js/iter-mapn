"use strict";var q=function(n,u){return function(){return u||n((u={exports:{}}).exports,u),u.exports}};var h=q(function(M,d){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),f=require('@stdlib/symbol-iterator/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function c(){var n,u,t,o,s,i,l,r;if(t=arguments.length,p(arguments[t-1])||(t-=1,u=arguments[t]),t-=1,o=arguments[t],!p(o))throw new TypeError(g('0PN2b',o));if(t<2)throw new Error(format('0PN0I'));for(n=[],r=0;r<t;r++){if(!x(arguments[r]))throw new TypeError(g('0PN3x',r,arguments[r]));n.push(arguments[r])}if(s={},m(s,"next",w),m(s,"return",y),f){for(r=0;r<t;r++)if(!p(n[r][f])){i=!0;break}i||m(s,f,b)}return i=!1,l=-1,r=0,s;function w(){var e,a,v;if(i)return{done:!0};for(e=[],l+=1,v=0;v<t;v++){if(a=n[v].next(),a.done)return i=!0,a;e.push(a.value)}return e.push(l),{value:o.apply(u,e),done:!1}}function y(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function b(){var e,a;for(e=[],a=0;a<t;a++)e.push(n[a][f]());return e.push(o),e.push(u),c.apply(null,e)}}d.exports=c
});var k=h();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
