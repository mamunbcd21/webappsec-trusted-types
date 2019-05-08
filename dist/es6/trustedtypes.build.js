(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';function ca(a){const c=/\s+/;return a.trim().split(/\s*;\s*/).map(b=>b.split(c)).reduce(function(b,f){f[0]&&(b[f[0]]=f.slice(1).map(e=>e).sort());return b},{})}function da(a){const c=ca(a),b="trusted-types"in c;let f=["*"];b&&(f=c["trusted-types"].filter(e=>"'"!==e.charAt(0)));return new d(!0,b,"default",f,a)}class d{constructor(a,c,b,f,e=null){this.b=a;this.a=c;this.g=b;this.c=f;this.f=e}};const ea=()=>{throw new TypeError("undefined conversion");};function q(){throw new TypeError("Illegal constructor");}function r(){throw new TypeError("Illegal constructor");}
const {TrustedTypes:u,m:fa}=function(){function a(g){let h=K.get(g);void 0===h&&(h=k(null),K.set(g,h));return h}function c(g){const h=A(g);if(null==h||A(h)!==B)throw Error();for(let x of p(h))n(g,x,{value:g[x]});return g}function b(g,h){m(g.prototype);delete g.name;n(g,"name",{value:h})}function f(g){return h=>h instanceof g&&K.has(h)}function e(g,h){function x(t,L){const na=h[L]||ea,oa=m(new t(X,g));return m({[L](w){w=na(""+w);if(void 0===w||null===w)w="";w=""+w;const Y=m(k(oa));a(Y).v=w;return Y}}[L])}
let y=k(q.prototype);for(const t of p(D))y[t]=x(D[t],t);n(y,"name",{value:g,writable:!1,configurable:!1,enumerable:!0});return m(y)}const {assign:l,create:k,defineProperty:n,freeze:m,getOwnPropertyNames:p,getPrototypeOf:A,prototype:B}=Object,{forEach:Z,push:pa}=Array.prototype,X=Symbol(),K=c(new WeakMap),M=c([]),aa=c(new Map),N=c([]);let O=!1;class C{constructor(g,h){if(g!==X)throw Error("cannot call the constructor");n(this,"policyName",{value:h,enumerable:!0})}toString(){return a(this).v}valueOf(){return a(this).v}}
class E extends C{}b(E,"TrustedURL");class F extends C{}b(F,"TrustedScriptURL");class G extends C{}b(G,"TrustedHTML");class H extends C{}b(H,"TrustedScript");b(C,"TrustedType");const D={createHTML:G,createScriptURL:F,createURL:E,createScript:H},qa=D.hasOwnProperty,ba=k(r.prototype);l(ba,{createPolicy:function(g,h,x=!1){if("default"==g&&!x){if(DOMException)throw new window.DOMException("The default policy must be exposed","InvalidStateError");throw new TypeError("The default policy must be exposed");
}if(O&&-1===N.indexOf(g))throw new TypeError("Policy "+g+" disallowed.");if(-1!==M.indexOf(g))throw new TypeError("Policy "+g+" exists.");M.push(g);const y=k(null);if(h&&"object"===typeof h)for(const t of p(h))qa.call(D,t)&&(y[t]=h[t]);else console.warn("TrustedTypes.createPolicy "+g+" was given an empty policy");m(y);h=e(g,y);x&&aa.set(g,h);return h},getExposedPolicy:function(g){return aa.get(g)||null},getPolicyNames:function(){return M.slice()},h:f(G),l:f(E),j:f(F),i:f(H),TrustedHTML:G,TrustedURL:E,
TrustedScriptURL:F,TrustedScript:H});return{TrustedTypes:m(ba),m:function(g){-1!==g.indexOf("*")?O=!1:(O=!0,N.length=0,Z.call(g,h=>{pa.call(N,""+h)}))}}}();const {defineProperty:v}=Object;function ha(a,c,b){v(a,c,{value:b})};const {apply:z}=Reflect,{getOwnPropertyNames:I,getOwnPropertyDescriptor:J,hasOwnProperty:P,getPrototypeOf:ia,isPrototypeOf:ja}=Object,{slice:ka}=String.prototype,la="function"==typeof window.URL?URL.prototype.constructor:null,ma=function(a){return 0==a.createRange().createContextualFragment({toString:()=>"<div></div>"}).childNodes.length}(document),Q=document.createElement("div").constructor.name?a=>a.name:a=>(""+a).match(/^\[object (\S+)\]$/)[1],ra=J(window,"open")?window:window.constructor.prototype,
sa=z(P,Element.prototype,["innerHTML"])?Element.prototype:HTMLElement.prototype,ta=z(P,Element.prototype,["insertAdjacentHTML"])?Element.prototype:HTMLElement.prototype,ua=window.SecurityPolicyViolationEvent||null;
let R={HTMLAnchorElement:{href:u.TrustedURL},HTMLAreaElement:{href:u.TrustedURL},HTMLBaseElement:{href:u.TrustedURL},HTMLButtonElement:{formaction:u.TrustedURL},HTMLSourceElement:{src:u.TrustedURL},HTMLImageElement:{src:u.TrustedURL},HTMLTrackElement:{src:u.TrustedURL},HTMLMediaElement:{src:u.TrustedURL},HTMLInputElement:{src:u.TrustedURL,formaction:u.TrustedURL},HTMLFormElement:{action:u.TrustedURL},HTMLFrameElement:{src:u.TrustedURL},HTMLIFrameElement:{src:u.TrustedURL,srcdoc:u.TrustedHTML},HTMLLinkElement:{href:u.TrustedURL},
HTMLObjectElement:{data:u.TrustedScriptURL,codebase:u.TrustedScriptURL},HTMLEmbedElement:{src:u.TrustedScriptURL},HTMLScriptElement:{src:u.TrustedScriptURL,text:u.TrustedScript},HTMLElement:{}};"srcdoc"in HTMLIFrameElement.prototype||delete R.HTMLIFrameElement.srcdoc;for(let a of I(HTMLElement.prototype))"on"===a.slice(0,2)&&(R.HTMLElement[a]=u.TrustedScript);
const S={TrustedHTML:u.h,TrustedURL:u.l,TrustedScriptURL:u.j,TrustedScript:u.i},va={TrustedHTML:"createHTML",TrustedURL:"createURL",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"},wa=u.getExposedPolicy,xa={codebase:"codeBase",formaction:"formAction"};
function T(a,c,b,f,e=void 0){function l(p){a.b.call(a,this,b,f,n,0,[p])}if(e&&!ja.call(e,c))throw Error("Invalid prototype chain");e=e||c;let k=J(e,b),n=k?k.set:null;if(!(n instanceof Function))throw new TypeError("No setter for property "+b+" on object"+c);let m=""+(c.constructor.name?c.constructor.name:c.constructor)+"-"+b;if(a.c[m])throw Error(`TrustedTypesEnforcer: Double installation detected: ${m} ${b}`);e===c?v(c,b,{set:l}):v(c,b,{set:l,get:k.get,configurable:!0});a.c[m]=n}
function U(a,c,b,f){var e=V;W(e,a,c,function(l,...k){return e.b.call(e,this,c,b,l,f,k)})}function ya(){var a=V;W(a,Element.prototype,"setAttribute",function(c,...b){return a.g.bind(a,this,c).apply(a,b)});W(a,Element.prototype,"setAttributeNS",function(c,...b){return a.f.bind(a,this,c).apply(a,b)})}
function W(a,c,b,f){var e=J(c,b);let l=e?e.value:null;if(!(l instanceof Function))throw new TypeError("Property "+b+" on object"+c+" is not a function");e=""+(c.constructor.name?c.constructor.name:c.constructor)+"-"+b;if(a.c[e])throw Error(`TrustedTypesEnforcer: Double installation detected: ${e} ${b}`);ha(c,b,function(...k){return f.bind(this,l).apply(this,k)});a.c[e]=l}
class za{constructor(a){this.a=a;this.c={}}g(a,c,...b){if(null!==a.constructor){a:{var f=(b[0]=String(b[0])).toLowerCase();let e=a.constructor;do{let l,k=e&&(l=Q(e))&&R[l]&&R[l][f];if(k||e==HTMLElement){f=k;break a}}while(e&&(e=ia(e.prototype).constructor));f=null}if(f instanceof Function)return this.b(a,"setAttribute",f,c,1,b)}return c.apply(a,b)}f(a,c,...b){if(null!==a.constructor){b[0]=String(b[0]);var f=(b[1]=String(b[1])).toLowerCase();{let e;f=a.constructor&&(e=Q(a.constructor))&&R[e]&&R[e][f];
if(f instanceof Function)return this.b(a,"setAttributeNS",f,c,2,b)}}return c.apply(a,b)}b(a,c,b,f,e,l){let k=l[e];var n=b.name;if(S.hasOwnProperty(n)&&S[n](k))return ma&&"createContextualFragment"==c&&(l[e]=l[e].toString()),z(f,a,l);if(b===u.TrustedScript){var m="setAttribute"==c||"setAttributeNS"===c||"on"===z(ka,c,[0,2]);if(("setInterval"===c||"setTimeout"===c||m)&&"function"===typeof k||m&&null===k)return z(f,a,l)}if((m=this.a.g)&&(m=wa.call(u,m))&&S.hasOwnProperty(n)){let B;try{var p=m[va[n]](k)}catch(Z){B=
!0}if(!B)return l[e]=p,z(f,a,l)}e=Q(a.constructor)||""+a;n=`Failed to set ${c} on ${e}: `+`This property requires ${n}.`;this.a.b&&console.warn(n,c,a,b,k);if("function"==typeof ua){p="";if(b===u.TrustedURL||b===u.TrustedScriptURL){try{var A=new la(k,document.baseURI||void 0)}catch(B){A=null}if(p=A||"")p=p.href}b=z(ka,""+k,[0,40]);c=new ua("securitypolicyviolation",{bubbles:!0,blockedURI:p,disposition:this.a.a?"enforce":"report",documentURI:document.location.href,effectiveDirective:"trusted-types",
originalPolicy:this.a.f,statusCode:0,violatedDirective:"trusted-types",sample:`${e}.${c} ${b}`});a.isConnected?a.dispatchEvent(c):document.dispatchEvent(c)}if(this.a.a)throw new TypeError(n);return z(f,a,l)}};if("undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes){var Aa=Object.create(r.prototype);Object.assign(Aa,{isHTML:u.h,isURL:u.l,isScriptURL:u.j,isScript:u.i,createPolicy:u.createPolicy,getExposedPolicy:u.getExposedPolicy,getPolicyNames:u.getPolicyNames,_isPolyfill_:!0});window.TrustedTypes=Object.freeze(Aa);window.TrustedHTML=u.TrustedHTML;window.TrustedURL=u.TrustedURL;window.TrustedScriptURL=u.TrustedScriptURL;window.TrustedScript=u.TrustedScript;window.TrustedTypePolicy=q;window.TrustedTypePolicyFactory=
r};function Ba(){try{var a;if(!(a=document.currentScript)){{let b=document.getElementsByTagName("script");a=b[b.length-1]}}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;const c=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(c)return c.content.trim()}catch(c){}return null}
if(!window.TrustedTypes||window.TrustedTypes._isPolyfill_){{const a=Ba(),c=a?da(a):new d(!1,!1,"default",["*"]);var V=new za(c);fa(V.a.c);if(V.a.a||V.a.b){T(V,sa,"innerHTML",u.TrustedHTML);T(V,sa,"outerHTML",u.TrustedHTML);"ShadowRoot"in window&&T(V,ShadowRoot.prototype,"innerHTML",u.TrustedHTML);U(Range.prototype,"createContextualFragment",u.TrustedHTML,0);U(ta,"insertAdjacentHTML",u.TrustedHTML,1);J(Document.prototype,"write")?(U(Document.prototype,"write",u.TrustedHTML,0),U(Document.prototype,
"open",u.TrustedURL,0)):(U(HTMLDocument.prototype,"write",u.TrustedHTML,0),U(HTMLDocument.prototype,"open",u.TrustedURL,0));U(ra,"open",u.TrustedURL,0);"DOMParser"in window&&U(DOMParser.prototype,"parseFromString",u.TrustedHTML,0);U(window,"setInterval",u.TrustedScript,0);U(window,"setTimeout",u.TrustedScript,0);ya();var Ca=V;T(Ca,HTMLScriptElement.prototype,"innerText",u.TrustedScript,HTMLElement.prototype);T(Ca,HTMLScriptElement.prototype,"textContent",u.TrustedScript,Node.prototype);var Da=V;for(let b of I(R))for(let f of I(R[b])){const e=
z(P,xa,[f])?xa[f]:f;T(Da,window[b].prototype,e,R[b][f])}}}};}).call(this);

//# sourceMappingURL=trustedtypes.build.js.map
