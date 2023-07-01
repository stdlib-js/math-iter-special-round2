// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterRound2=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,n){return null!=r&&d.call(r,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var n,t,e;if(null==r)return b.call(r);t=r[w],n=m(r,w);try{r[w]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[w]=t:delete r[w],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var A=s();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var T=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=x.exec(e.toString()))return n[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!V(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof I||"function"==typeof F?function(r){return H(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?H(r).toLowerCase():n};function L(r){return"function"===B(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function W(r){return"number"==typeof r}var k=Number,C=k.prototype.toString;var R=s();function Y(r){return"object"==typeof r&&(r instanceof k||(R?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function q(r){return W(r)||Y(r)}l(q,"isPrimitive",W),l(q,"isObject",Y);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!m(r,"constructor")&&m(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&m(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!m(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(m(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,t)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var t;return i?{done:!0}:(t=r.next()).done?(i=!0,t):{value:W(t.value)?n(t.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),n,e)}}function rr(r){return r!=r}var nr=Number.POSITIVE_INFINITY,tr=k.NEGATIVE_INFINITY;function er(r){return r===nr||r===tr}var or=Math.floor;function ur(r){return or(r)===r}function ir(r){return ur(r/2)}function fr(r){return ir(r>0?r-1:r+1)}var ar=Math.sqrt;function cr(r){return Math.abs(r)}var lr="function"==typeof Uint32Array;var yr="function"==typeof Uint32Array?Uint32Array:null;var vr,pr="function"==typeof Uint32Array?Uint32Array:void 0;vr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(lr&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=vr,br="function"==typeof Float64Array;var dr="function"==typeof Float64Array?Float64Array:null;var mr,wr="function"==typeof Float64Array?Float64Array:void 0;mr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr([1,3.14,-3.14,NaN]),t=n,r=(br&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var jr=mr,gr="function"==typeof Uint8Array;var Ar="function"==typeof Uint8Array?Uint8Array:null;var hr,_r="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,n,t;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,256,257]),t=n,r=(gr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Or=hr,Ur="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Er,Nr="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,n,t;if("function"!=typeof Sr)return!1;try{n=new Sr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ur&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Tr,Fr={uint16:Er,uint8:Or};(Tr=new Fr.uint16(1))[0]=4660;var Ir,Pr,xr=52===new Fr.uint8(Tr.buffer)[0];!0===xr?(Ir=1,Pr=0):(Ir=0,Pr=1);var Vr={HIGH:Ir,LOW:Pr},Gr=new jr(1),Hr=new sr(Gr.buffer),Br=Vr.HIGH,Lr=Vr.LOW;function Mr(r,n,t,e){return Gr[0]=r,n[e]=Hr[Br],n[e+t]=Hr[Lr],n}function Wr(r){return Mr(r,[0,0],1,0)}l(Wr,"assign",Mr);var kr=!0===xr?0:1,Cr=new jr(1),Rr=new sr(Cr.buffer);function Yr(r,n){return Cr[0]=r,Rr[kr]=n>>>0,Cr[0]}function qr(r){return 0|r}var Xr,zr,Dr=2147483647,Jr=!0===xr?1:0,Kr=new jr(1),Qr=new sr(Kr.buffer);function Zr(r){return Kr[0]=r,Qr[Jr]}!0===xr?(Xr=1,zr=0):(Xr=0,zr=1);var $r={HIGH:Xr,LOW:zr},rn=new jr(1),nn=new sr(rn.buffer),tn=$r.HIGH,en=$r.LOW;function on(r,n){return nn[tn]=r,nn[en]=n,rn[0]}var un=[0,0];function fn(r,n){var t,e;return Wr.assign(r,un,1,0),t=un[0],t&=Dr,e=Zr(n),on(t|=e&=2147483648,un[1])}var an=!0===xr?1:0,cn=new jr(1),ln=new sr(cn.buffer);function yn(r,n){return cn[0]=r,ln[an]=n>>>0,cn[0]}var vn=1023;var pn=1048576,sn=[1,1.5],bn=[0,.5849624872207642],dn=[0,1.350039202129749e-8];var mn=1023;function wn(r,n,t,e){return rr(r)||er(r)?(n[e]=r,n[e+t]=0,n):0!==r&&cr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return wn(r,[0,0],1,0)}),"assign",wn);var jn=[0,0],gn=[0,0];function An(r,n){var t,e;return 0===n||0===r||rr(r)||er(r)?r:(wn(r,jn,1,0),n+=jn[1],n+=function(r){var n=Zr(r);return(n=(2146435072&n)>>>20)-vn|0}(r=jn[0]),n<-1074?fn(0,r):n>mn?r<0?tr:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Wr.assign(r,gn,1,0),t=gn[0],t&=2148532223,e*on(t|=n+vn<<20,gn[1])))}var hn=1048575;var _n=1048576;var On=1083179008,Un=1e300,Sn=1e-300,En=[0,0],Nn=[0,0];function Tn(r,n){var t,e,o,u,i,f,a,c,l,y,v,p,s,b;if(rr(r)||rr(n))return NaN;if(Wr.assign(n,En,1,0),i=En[0],0===En[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ar(r);if(-.5===n)return 1/ar(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(er(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:cr(r)<1==(n===nr)?0:nr}(r,n)}if(Wr.assign(r,En,1,0),u=En[0],0===En[1]){if(0===u)return function(r,n){return n===tr?nr:n===nr?0:n>0?fr(n)?r:0:fr(n)?fn(nr,r):nr}(r,n);if(1===r)return 1;if(-1===r&&fr(n))return-1;if(er(r))return r===tr?Tn(-0,-n):n<0?0:nr}if(r<0&&!1===ur(n))return(r-r)/(r-r);if(o=cr(r),t=u&Dr|0,e=i&Dr|0,a=i>>>31|0,f=(f=u>>>31|0)&&fr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Zr(r)&Dr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Un*Un:f*Sn*Sn;if(t>1072693248)return 0===a?f*Un*Un:f*Sn*Sn;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Yr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Nn,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,s,b,d,m,w,j,g,A,h,_;return g=0,t<pn&&(g-=53,t=Zr(n*=9007199254740992)),g+=(t>>20)-vn|0,t=1072693248|(A=1048575&t|0),A<=235662?h=0:A<767610?h=1:(h=0,g+=1,t-=pn),i=Yr(o=(w=(n=yn(n,t))-(c=sn[h]))*(j=1/(n+c)),0),e=524288+(t>>1|536870912),a=yn(0,e+=h<<18),m=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Yr(a=3+(u=i*i)+(m+=(f=j*(w-i*a-i*(n-(a-c))))*(i+o)),0),b=(p=-7.028461650952758e-9*(y=Yr(y=(w=i*a)+(j=f*a+(m-(a-3-u))*o),0))+.9617966939259756*(j-(y-w))+dn[h])-((s=Yr(s=(v=.9617967009544373*y)+p+(l=bn[h])+(d=g),0))-d-l-v),r[0]=s,r[1]=b,r}(Nn,o,t);if(p=(y=(n-(c=Yr(n,0)))*v[0]+n*v[1])+(l=c*v[0]),Wr.assign(p,En,1,0),s=qr(En[0]),b=qr(En[1]),s>=On){if(0!=(s-On|b))return f*Un*Un;if(y+8008566259537294e-32>p-l)return f*Un*Un}else if((s&Dr)>=1083231232){if(0!=(s-3230714880|b))return f*Sn*Sn;if(y<=p-l)return f*Sn*Sn}return p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v;return y=((l=r&Dr|0)>>20)-vn|0,c=0,l>1071644672&&(o=yn(0,((c=r+(_n>>y+1)>>>0)&~(hn>>(y=((c&Dr)>>20)-vn|0)))>>>0),c=(c&hn|_n)>>20-y>>>0,r<0&&(c=-c),n-=o),r=qr(r=Zr(a=1-((a=(u=.6931471824645996*(o=Yr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?An(a,c):yn(a,r)}(s,l,y),f*p}var Fn=Math.ceil;var In=1048575;var Pn=1.4426950407214463,xn=[0,0];function Vn(r){var n,t,e,o,u;if(rr(r)||r<0)return NaN;if(Wr.assign(r,xn,1,0),u=0,(t=xn[0])<1048576){if(0==(t&Dr|xn[1]))return tr;u-=54,t=Zr(r*=0x40000000000000)}return t>=2146435072?r+r:(u+=(t>>20)-vn|0,u+=(o=(t&=hn)+614244&1048576|0)>>20|0,e=function(r){var n,t,e,o,u,i,f,a,c,l,y;return o=Zr(r),u=r-1,(In&2+o)<3?0===u?0:u*u*(.3333333333333333*u-.5):(l=(o&=In)-398458|0,y=440401-o|0,t=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(l|=y)>0?i*((n=.5*u*u)+a)-n:i*(a-u))}(r=yn(r,t|1072693248^o)),1.6751713164886512e-10*((r-=1)+e)+(r-(n=Yr(r,0))+e)*Pn+n*Pn+u)}var Gn=Tn(2,mn),Hn=Gn/2;function Bn(r){var n,t,e,o,u,i;return rr(r)||er(r)||0===r?r:(r<0?(r=-r,n=-1):n=1,-1074===(i=Vn(r))?r:(t=or(i),e=Fn(i),t===mn?r-Gn>=Hn?n*nr:n*Gn:(o=Tn(2,t))+((u=Tn(2,e))-o)/2>r?n*o:n*u))}return function(r){return $(r,Bn)}}));
//# sourceMappingURL=browser.js.map
