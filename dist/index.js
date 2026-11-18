"use strict";var g=function(s,a){return function(){try{return a||s((a={exports:{}}).exports,a),a.exports}catch(q){throw (a=0, q)}};};var R=g(function(N,O){
var B=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs2/dist'),F=require('@stdlib/math-base-special-abs/dist'),M=require('@stdlib/math-base-special-sqrt/dist'),x=11113793747425387e-178,o=44989137945431964e145,_=1997919072202235e131,E=14916681462400413e-170;function H(s,a,q,b,n,t,d,f){var y,l,v,i,G,j,u,I,e,r,L;if(r=n[t],e=d[f],!(B(r)||B(e))){if(e===0&&(r=1),r===0&&(r=1,e=0),s<=0){n[t]=r,d[f]=e;return}for(y=!0,v=0,i=0,l=0,I=b,L=0;L<s;L++)u=F(a[I]),u>_?(l+=p(u*x),y=!1):u<E?y&&(v+=p(u*o)):i+=p(u),I+=q;if(e>0&&(u=r*M(e),u>_?r>1?(r*=x,l+=r*(r*e)):l+=r*(r*(x*(x*e))):u<E?y&&(r<1?(r*=o,v+=r*(r*e)):v+=r*(r*(o*(o*e)))):i+=r*(r*e)),l>0){(i>0||B(i))&&(l+=i*x*x),n[t]=1/x,d[f]=l;return}if(v>0){i>0||B(i)?(i=M(i),v=M(v)/o,v>i?(G=i,j=v):(G=v,j=i),r=1,e=p(j)*(1+p(G/j))):(r=1/o,e=v),n[t]=r,d[f]=e;return}n[t]=1,d[f]=i}}O.exports=H
});var h=g(function(S,c){
var J=require('@stdlib/strided-base-stride2offset/dist'),K=R();function P(s,a,q,b,n){var t=J(s,q);K(s,a,q,t,b,0,n,0)}c.exports=P
});var w=g(function(rr,k){
var Q=R();function U(s,a,q,b,n,t,d,f){Q(s,a,q,b,n,t,d,f)}k.exports=U
});var C=g(function(er,A){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=h(),W=w();V(z,"ndarray",W);A.exports=z
});var Y=require("path").join,Z=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),m=C(),T,D=Z(Y(__dirname,"./native.js"));$(D)?T=m:T=D;module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
