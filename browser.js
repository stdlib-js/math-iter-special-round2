// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var t,n,a;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,a=parseInt(n,10),!isFinite(a)){if(!e(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===r.specifier||10!==t)&&(a=4294967295+a+1),a<0?(n=(-a).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=a.toString(t),a||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===u.call(r.specifier)?u.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,_=/\.0$/,g=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,g,"e"),n=s.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,b,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var A=String.fromCharCode,E=isNaN,O=Array.isArray;function F(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,u,f,l,p,s;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(c(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(u)?String(n.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function V(r){return"string"==typeof r}function k(r){var t,e,n;if(!V(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return S.apply(null,e)}var N,U=Object.prototype,B=U.toString,G=U.__defineGetter__,I=U.__defineSetter__,C=U.__lookupGetter__,L=U.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=U,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),u&&I&&I.call(r,t,e.set),r};var M=N;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&Y.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",J=X()?function(r){var t,e,n;if(null==r)return Z.call(r);e=r[D],t=q(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return n=Z.call(r),t?r[D]=e:delete r[D],n}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return H(r)||tr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",H),R(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,ar=function(r){if(arguments.length){if(!H(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var pr,sr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",sr),pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=pr;function br(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(br);function dr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=sr.exec(n.toString()))return t[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(br,"isObjectLikeArray",vr);var _r="function"==typeof $||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function gr(r){return"function"===_r(r)}var wr,hr=/./,mr="function"==typeof Object.defineProperty?Object.defineProperty:null,jr=Object.defineProperty,Ar=Object.prototype,Er=Ar.toString,Or=Ar.__defineGetter__,Fr=Ar.__defineSetter__,Sr=Ar.__lookupGetter__,Tr=Ar.__lookupSetter__;wr=function(){try{return mr({},"x",{}),!0}catch(r){return!1}}()?jr:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===Er.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Er.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Sr.call(r,t)||Tr.call(r,t)?(n=r.__proto__,r.__proto__=Ar,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Or&&Or.call(r,t,e.get),u&&Fr&&Fr.call(r,t,e.set),r};var Pr=wr;function xr(r,t,e){Pr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Vr(r){return"boolean"==typeof r}var kr=Boolean.prototype.toString,Nr=X();function Ur(r){return"object"==typeof r&&(r instanceof K||(Nr?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Br(r){return Vr(r)||Ur(r)}function Gr(){return new Function("return this;")()}xr(Br,"isPrimitive",Vr),xr(Br,"isObject",Ur);var Ir="object"==typeof self?self:null,Cr="object"==typeof window?window:null,Lr="object"==typeof globalThis?globalThis:null,Mr=function(r){if(arguments.length){if(!Vr(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Gr()}if(Lr)return Lr;if(Ir)return Ir;if(Cr)return Cr;throw new Error("unexpected error. Unable to resolve global object.")}(),Rr=Mr.document&&Mr.document.childNodes,$r=Int8Array;function Hr(){return/^\s*function\s*([^(]*)/i}var Wr=/^\s*function\s*([^(]*)/i;function Xr(r){return null!==r&&"object"==typeof r}xr(Hr,"REGEXP",Wr);var Zr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Xr);function Yr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Wr.exec(n.toString()))return t[1]}return Xr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}xr(Xr,"isObjectLikeArray",Zr);var qr="function"==typeof hr||"object"==typeof $r||"function"==typeof Rr?function(r){return Yr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Yr(r).toLowerCase():t};function zr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===qr(r)}(r.next)}var Dr,Jr="function"==typeof Object.defineProperty?Object.defineProperty:null,Kr=Object.defineProperty,Qr=Object.prototype,rt=Qr.toString,tt=Qr.__defineGetter__,et=Qr.__defineSetter__,nt=Qr.__lookupGetter__,ot=Qr.__lookupSetter__;Dr=function(){try{return Jr({},"x",{}),!0}catch(r){return!1}}()?Kr:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===rt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===rt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(nt.call(r,t)||ot.call(r,t)?(n=r.__proto__,r.__proto__=Qr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&tt&&tt.call(r,t,e.get),u&&et&&et.call(r,t,e.set),r};var it=Dr;function ut(r,t,e){it(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function at(r){return"number"==typeof r}var ct=Number,ft=ct.prototype.toString,lt=X();function pt(r){return"object"==typeof r&&(r instanceof ct||(lt?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function st(r){return at(r)||pt(r)}ut(st,"isPrimitive",at),ut(st,"isObject",pt);var yt,bt="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null,vt=/./,dt="function"==typeof Object.defineProperty?Object.defineProperty:null,_t=Object.defineProperty,gt=Object.prototype,wt=gt.toString,ht=gt.__defineGetter__,mt=gt.__defineSetter__,jt=gt.__lookupGetter__,At=gt.__lookupSetter__;yt=function(){try{return dt({},"x",{}),!0}catch(r){return!1}}()?_t:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===wt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===wt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(jt.call(r,t)||At.call(r,t)?(n=r.__proto__,r.__proto__=gt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ht&&ht.call(r,t,e.get),u&&mt&&mt.call(r,t,e.set),r};var Et=yt;function Ot(r,t,e){Et(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ft(r){return"boolean"==typeof r}var St=Boolean.prototype.toString,Tt=X();function Pt(r){return"object"==typeof r&&(r instanceof K||(Tt?function(r){try{return St.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function xt(r){return Ft(r)||Pt(r)}function Vt(){return new Function("return this;")()}Ot(xt,"isPrimitive",Ft),Ot(xt,"isObject",Pt);var kt="object"==typeof self?self:null,Nt="object"==typeof window?window:null,Ut="object"==typeof globalThis?globalThis:null,Bt=function(r){if(arguments.length){if(!Ft(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Vt()}if(Ut)return Ut;if(kt)return kt;if(Nt)return Nt;throw new Error("unexpected error. Unable to resolve global object.")}(),Gt=Bt.document&&Bt.document.childNodes,It=Int8Array;function Ct(){return/^\s*function\s*([^(]*)/i}var Lt=/^\s*function\s*([^(]*)/i;function Mt(r){return null!==r&&"object"==typeof r}Ot(Ct,"REGEXP",Lt);var Rt=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Mt);function $t(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Lt.exec(n.toString()))return t[1]}return Mt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ot(Mt,"isObjectLikeArray",Rt);var Ht="function"==typeof vt||"object"==typeof It||"function"==typeof Gt?function(r){return $t(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?$t(r).toLowerCase():t};function Wt(r){return"function"===Ht(r)}var Xt,Zt=Object,Yt=/./,qt="function"==typeof Object.defineProperty?Object.defineProperty:null,zt=Object.defineProperty,Dt=Object.prototype,Jt=Dt.toString,Kt=Dt.__defineGetter__,Qt=Dt.__defineSetter__,re=Dt.__lookupGetter__,te=Dt.__lookupSetter__;Xt=function(){try{return qt({},"x",{}),!0}catch(r){return!1}}()?zt:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===Jt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Jt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(re.call(r,t)||te.call(r,t)?(n=r.__proto__,r.__proto__=Dt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Kt&&Kt.call(r,t,e.get),u&&Qt&&Qt.call(r,t,e.set),r};var ee=Xt;function ne(r,t,e){ee(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function oe(r){return"boolean"==typeof r}var ie=Boolean.prototype.toString,ue=X();function ae(r){return"object"==typeof r&&(r instanceof K||(ue?function(r){try{return ie.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function ce(r){return oe(r)||ae(r)}function fe(){return new Function("return this;")()}ne(ce,"isPrimitive",oe),ne(ce,"isObject",ae);var le="object"==typeof self?self:null,pe="object"==typeof window?window:null,se="object"==typeof globalThis?globalThis:null,ye=function(r){if(arguments.length){if(!oe(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return fe()}if(se)return se;if(le)return le;if(pe)return pe;throw new Error("unexpected error. Unable to resolve global object.")}(),be=ye.document&&ye.document.childNodes,ve=Int8Array;function de(){return/^\s*function\s*([^(]*)/i}var _e=/^\s*function\s*([^(]*)/i;function ge(r){return null!==r&&"object"==typeof r}ne(de,"REGEXP",_e);var we=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ge);function he(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=_e.exec(n.toString()))return t[1]}return ge(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}ne(ge,"isObjectLikeArray",we);var me,je,Ae="function"==typeof Yt||"object"==typeof ve||"function"==typeof be?function(r){return he(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?he(r).toLowerCase():t},Ee=Object.getPrototypeOf;je=Object.getPrototypeOf,me="function"===Ae(je)?Ee:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Oe=me,Fe=Object.prototype;function Se(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=Zt(r),Oe(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&Wt(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&Wt(t.isPrototypeOf)&&(t===Fe||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Te(r,t){return Se(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Pe(r,t,e){var n,o,i,u;if(!zr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!gr(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Te(n,e)))throw i;return R(o={},"next",a),R(o,"return",c),bt&&gr(r[bt])&&R(o,bt,f),o;function a(){var e;return u?{done:!0}:(e=r.next()).done?(u=!0,e):{value:at(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Pe(r[bt](),t,n)}}function xe(r){return r!=r}var Ve=Number.POSITIVE_INFINITY,ke=ct.NEGATIVE_INFINITY;function Ne(r){return r===Ve||r===ke}var Ue=Math.floor;function Be(r){return function(r){return Ue(r)===r}(r/2)}function Ge(r){return Be(r>0?r-1:r+1)}var Ie=Math.floor,Ce=Math.sqrt;function Le(r){return Math.abs(r)}var Me,Re="function"==typeof Object.defineProperty?Object.defineProperty:null,$e=Object.defineProperty,He=Object.prototype,We=He.toString,Xe=He.__defineGetter__,Ze=He.__defineSetter__,Ye=He.__lookupGetter__,qe=He.__lookupSetter__;Me=function(){try{return Re({},"x",{}),!0}catch(r){return!1}}()?$e:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===We.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===We.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ye.call(r,t)||qe.call(r,t)?(n=r.__proto__,r.__proto__=He,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Xe&&Xe.call(r,t,e.get),u&&Ze&&Ze.call(r,t,e.set),r};var ze,De=Me,Je="function"==typeof Uint32Array,Ke="function"==typeof Uint32Array?Uint32Array:null,Qe="function"==typeof Uint32Array?Uint32Array:void 0;ze=function(){var r,t;if("function"!=typeof Ke)return!1;try{r=function(r){return Je&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new Ke(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Qe:function(){throw new Error("not implemented")};var rn,tn=ze,en="function"==typeof Float64Array,nn="function"==typeof Float64Array?Float64Array:null,on="function"==typeof Float64Array?Float64Array:void 0;rn=function(){var r,t;if("function"!=typeof nn)return!1;try{r=function(r){return en&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new nn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var un,an=rn,cn="function"==typeof Uint8Array,fn="function"==typeof Uint8Array?Uint8Array:null,ln="function"==typeof Uint8Array?Uint8Array:void 0;un=function(){var r,t;if("function"!=typeof fn)return!1;try{r=function(r){return cn&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new fn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ln:function(){throw new Error("not implemented")};var pn,sn=un,yn="function"==typeof Uint16Array,bn="function"==typeof Uint16Array?Uint16Array:null,vn="function"==typeof Uint16Array?Uint16Array:void 0;pn=function(){var r,t;if("function"!=typeof bn)return!1;try{r=function(r){return yn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new bn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vn:function(){throw new Error("not implemented")};var dn,_n={uint16:pn,uint8:sn};(dn=new _n.uint16(1))[0]=4660;var gn,wn,hn=52===new _n.uint8(dn.buffer)[0];!0===hn?(gn=1,wn=0):(gn=0,wn=1);var mn={HIGH:gn,LOW:wn},jn=new an(1),An=new tn(jn.buffer),En=mn.HIGH,On=mn.LOW;function Fn(r,t,e,n){return jn[0]=r,t[n]=An[En],t[n+e]=An[On],t}function Sn(r){return Fn(r,[0,0],1,0)}!function(r,t,e){De(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Sn,"assign",Fn);var Tn,Pn="function"==typeof Float64Array,xn="function"==typeof Float64Array?Float64Array:null,Vn="function"==typeof Float64Array?Float64Array:void 0;Tn=function(){var r,t;if("function"!=typeof xn)return!1;try{r=function(r){return Pn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new xn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Vn:function(){throw new Error("not implemented")};var kn=!0===hn?0:1,Nn=new Tn(1),Un=new tn(Nn.buffer);function Bn(r,t){return Nn[0]=r,Un[kn]=t>>>0,Nn[0]}function Gn(r){return 0|r}var In,Cn=2147483647,Ln="function"==typeof Float64Array,Mn="function"==typeof Float64Array?Float64Array:null,Rn="function"==typeof Float64Array?Float64Array:void 0;In=function(){var r,t;if("function"!=typeof Mn)return!1;try{r=function(r){return Ln&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Mn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Rn:function(){throw new Error("not implemented")};var $n=!0===hn?1:0,Hn=new In(1),Wn=new tn(Hn.buffer);function Xn(r){return Hn[0]=r,Wn[$n]}var Zn,Yn,qn,zn="function"==typeof Float64Array,Dn="function"==typeof Float64Array?Float64Array:null,Jn="function"==typeof Float64Array?Float64Array:void 0;Zn=function(){var r,t;if("function"!=typeof Dn)return!1;try{r=function(r){return zn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Dn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Jn:function(){throw new Error("not implemented")},!0===hn?(Yn=1,qn=0):(Yn=0,qn=1);var Kn={HIGH:Yn,LOW:qn},Qn=new Zn(1),ro=new tn(Qn.buffer),to=Kn.HIGH,eo=Kn.LOW;function no(r,t){return ro[to]=r,ro[eo]=t,Qn[0]}var oo=[0,0];function io(r,t){var e,n;return Sn.assign(r,oo,1,0),e=oo[0],e&=Cn,n=Xn(t),no(e|=n&=2147483648,oo[1])}var uo,ao="function"==typeof Float64Array,co="function"==typeof Float64Array?Float64Array:null,fo="function"==typeof Float64Array?Float64Array:void 0;uo=function(){var r,t;if("function"!=typeof co)return!1;try{r=function(r){return ao&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new co([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fo:function(){throw new Error("not implemented")};var lo=!0===hn?1:0,po=new uo(1),so=new tn(po.buffer);function yo(r,t){return po[0]=r,so[lo]=t>>>0,po[0]}var bo,vo=1023,_o=1048576,go=[1,1.5],wo=[0,.5849624872207642],ho=[0,1.350039202129749e-8],mo=1023,jo="function"==typeof Object.defineProperty?Object.defineProperty:null,Ao=Object.defineProperty,Eo=Object.prototype,Oo=Eo.toString,Fo=Eo.__defineGetter__,So=Eo.__defineSetter__,To=Eo.__lookupGetter__,Po=Eo.__lookupSetter__;bo=function(){try{return jo({},"x",{}),!0}catch(r){return!1}}()?Ao:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===Oo.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Oo.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(To.call(r,t)||Po.call(r,t)?(n=r.__proto__,r.__proto__=Eo,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Fo&&Fo.call(r,t,e.get),u&&So&&So.call(r,t,e.set),r};var xo=bo;function Vo(r,t,e,n){return xe(r)||Ne(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Le(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}!function(r,t,e){xo(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return Vo(r,[0,0],1,0)}),"assign",Vo);var ko=[0,0],No=[0,0];function Uo(r,t){var e,n;return 0===t||0===r||xe(r)||Ne(r)?r:(Vo(r,ko,1,0),t+=ko[1],t+=function(r){var t=Xn(r);return(t=(2146435072&t)>>>20)-vo|0}(r=ko[0]),t<-1074?io(0,r):t>mo?r<0?ke:Ve:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Sn.assign(r,No,1,0),e=No[0],e&=2148532223,n*no(e|=t+vo<<20,No[1])))}var Bo=1048575,Go=1048576,Io=1083179008,Co=1e300,Lo=1e-300,Mo=[0,0],Ro=[0,0];function $o(r,t){var e,n,o,i,u,a,c,f,l,p,s,y,b,v;if(xe(r)||xe(t))return NaN;if(Sn.assign(t,Mo,1,0),u=Mo[0],0===Mo[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Ce(r);if(-.5===t)return 1/Ce(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Ne(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Le(r)<1==(t===Ve)?0:Ve}(r,t)}if(Sn.assign(r,Mo,1,0),i=Mo[0],0===Mo[1]){if(0===i)return function(r,t){return t===ke?Ve:t===Ve?0:t>0?Ge(t)?r:0:Ge(t)?io(Ve,r):Ve}(r,t);if(1===r)return 1;if(-1===r&&Ge(t))return-1;if(Ne(r))return r===ke?$o(-0,-t):t<0?0:Ve}if(r<0&&!1===function(r){return Ie(r)===r}(t))return(r-r)/(r-r);if(o=Le(r),e=i&Cn|0,n=u&Cn|0,c=u>>>31|0,a=(a=i>>>31|0)&&Ge(t)?-1:1,n>1105199104){if(n>1139802112)return function(r,t){return(Xn(r)&Cn)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(e<1072693247)return 1===c?a*Co*Co:a*Lo*Lo;if(e>1072693248)return 0===c?a*Co*Co:a*Lo*Lo;s=function(r,t){var e,n,o,i,u,a;return e=(u=1.9259629911266175e-8*(o=t-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((n=Bn(n=(i=1.4426950216293335*o)+u,0))-i),r[0]=n,r[1]=e,r}(Ro,o)}else s=function(r,t,e){var n,o,i,u,a,c,f,l,p,s,y,b,v,d,_,g,w,h,m,j,A;return h=0,e<_o&&(h-=53,e=Xn(t*=9007199254740992)),h+=(e>>20)-vo|0,e=1072693248|(m=1048575&e|0),m<=235662?j=0:m<767610?j=1:(j=0,h+=1,e-=_o),u=Bn(o=(g=(t=yo(t,e))-(f=go[j]))*(w=1/(t+f)),0),n=524288+(e>>1|536870912),c=yo(0,n+=j<<18),_=(i=o*o)*i*(0===(A=i)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),c=Bn(c=3+(i=u*u)+(_+=(a=w*(g-u*c-u*(t-(c-f))))*(u+o)),0),v=(y=-7.028461650952758e-9*(p=Bn(p=(g=u*c)+(w=a*c+(_-(c-3-i))*o),0))+.9617966939259756*(w-(p-g))+ho[j])-((b=Bn(b=(s=.9617967009544373*p)+y+(l=wo[j])+(d=h),0))-d-l-s),r[0]=b,r[1]=v,r}(Ro,o,e);if(y=(p=(t-(f=Bn(t,0)))*s[0]+t*s[1])+(l=f*s[0]),Sn.assign(y,Mo,1,0),b=Gn(Mo[0]),v=Gn(Mo[1]),b>=Io){if(0!=(b-Io|v))return a*Co*Co;if(p+8008566259537294e-32>y-l)return a*Co*Co}else if((b&Cn)>=1083231232){if(0!=(b-3230714880|v))return a*Lo*Lo;if(p<=y-l)return a*Lo*Lo}return y=function(r,t,e){var n,o,i,u,a,c,f,l,p,s;return p=((l=r&Cn|0)>>20)-vo|0,f=0,l>1071644672&&(o=yo(0,((f=r+(Go>>p+1)>>>0)&~(Bo>>(p=((f&Cn)>>20)-vo|0)))>>>0),f=(f&Bo|Go)>>20-p>>>0,r<0&&(f=-f),t-=o),r=Gn(r=Xn(c=1-((c=(i=.6931471824645996*(o=Bn(o=e+t,0)))+(u=.6931471805599453*(e-(o-t))+-1.904654299957768e-9*o))*(n=c-(o=c*c)*(0===(s=o)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((a=u-(c-i))+c*a)-c))),(r+=f<<20>>>0)>>20<=0?Uo(c,f):yo(c,r)}(b,l,p),a*y}var Ho=Math.floor,Wo=Math.ceil,Xo=1048575,Zo=1.4426950407214463,Yo=[0,0];function qo(r){var t,e,n,o,i;if(xe(r)||r<0)return NaN;if(Sn.assign(r,Yo,1,0),i=0,(e=Yo[0])<1048576){if(0==(e&Cn|Yo[1]))return ke;i-=54,e=Xn(r*=0x40000000000000)}return e>=2146435072?r+r:(i+=(e>>20)-vo|0,i+=(o=614244+(e&=Bo)&1048576|0)>>20|0,n=function(r){var t,e,n,o,i,u,a,c,f,l,p;return o=Xn(r),i=r-1,(Xo&2+o)<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(o&=Xo)-398458|0,p=440401-o|0,e=(f=(a=(u=i/(2+i))*u)*a)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),n=a*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=n+e,(l|=p)>0?u*((t=.5*i*i)+c)-t:u*(c-i))}(r=yo(r,e|1072693248^o)),1.6751713164886512e-10*((r-=1)+n)+(r-(t=Bn(r,0))+n)*Zo+t*Zo+i)}var zo=$o(2,mo),Do=zo/2;function Jo(r){var t,e,n,o,i,u;return xe(r)||Ne(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,-1074===(u=qo(r))?r:(e=Ho(u),n=Wo(u),e===mo?r-zo>=Do?t*Ve:t*zo:(o=$o(2,e))+((i=$o(2,n))-o)/2>r?t*o:t*i))}return function(r){return Pe(r,Jo)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterRound2=t();
//# sourceMappingURL=browser.js.map
