"use strict";var G=function(q,n){return function(){return n||q((n={exports:{}}).exports,n),n.exports}};var _=G(function(s,F){"use strict";var I=require("@stdlib/math-base-assert-is-nan"),t=require("@stdlib/math-base-special-abs2"),P=require("@stdlib/math-base-special-abs"),T=require("@stdlib/math-base-special-sqrt"),y=11113793747425387e-178,S=44989137945431964e145,A=1997919072202235e131,E=14916681462400413e-170;function Q(q,n,b,j,r,i,e,p,f){var g,d,v,a,L,B,x,M,R;if(I(r)||I(i))return e;if(i===0&&(r=1),r===0&&(r=1,i=0),q<=0)return e[f]=r,e[f+p]=i,e;for(g=!0,v=0,a=0,d=0,M=j,R=0;R<q;R++)x=P(n[M]),x>A?(d+=t(x*y),g=!1):x<E?g&&(v+=t(x*S)):a+=t(x),M+=b;return i>0&&(x=r*T(i),x>A?r>1?(r*=y,d+=r*(r*i)):d+=r*(r*(y*(y*i))):x<E?g&&(r<1?(r*=S,v+=r*(r*i)):v+=r*(r*(S*(S*i)))):a+=r*(r*i)),d>0?((a>0||I(a))&&(d+=a*y*y),e[f]=1/y,e[f+p]=d,e):v>0?(a>0||I(a)?(a=T(a),v=T(v)/S,v>a?(L=a,B=v):(L=v,B=a),r=1,i=t(B)*(1+t(L/B))):(r=1/S,i=v),e[f]=r,e[f+p]=i,e):(e[f]=1,e[f+p]=a,e)}F.exports=Q});var k=G(function(c,h){"use strict";var U=require("@stdlib/array-float64"),V=require("@stdlib/strided-base-stride2offset"),W=_();function Y(q,n,b,j,r){var i,e;return e=V(q,b),i=new U(2),W(q,n,b,e,j,r,i,1,0)}h.exports=Y});var C=G(function(rr,z){"use strict";var Z=_();function $(q,n,b,j,r,i,e,p,f){return Z(q,n,b,j,r,i,e,p,f)}z.exports=$});var J=G(function(ir,H){"use strict";var o=require("@stdlib/utils-define-nonenumerable-read-only-property"),D=k(),X=C();o(D,"ndarray",X);H.exports=D});var u=require("path").join,N=require("@stdlib/utils-try-require"),l=require("@stdlib/assert-is-error"),m=J(),w,K=N(u(__dirname,"./native.js"));l(K)?w=m:w=K;module.exports=w;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
