import{w as oe}from"./basedecoder-Qm25PwVp-CHo5Pomv.CXiqZbVR.js";const R=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),B=4017,Q=799,W=3406,K=2276,N=1567,Z=3784,G=5793,_=2896;function ne(z,a){let r=0;const h=[];let E=16;for(;E>0&&!z[E-1];)--E;h.push({children:[],index:0});let T=h[0],x;for(let t=0;t<E;t++){for(let f=0;f<z[t];f++){for(T=h.pop(),T.children[T.index]=a[r];T.index>0;)T=h.pop();for(T.index++,h.push(T);h.length<=t;)h.push(x={children:[],index:0}),T.children[T.index]=x.children,T=x;r++}t+1<E&&(h.push(x={children:[],index:0}),T.children[T.index]=x.children,T=x)}return h[0].children}function ce(z,a,r,h,E,T,x,t,f){const{mcusPerLine:m,progressive:o}=r,i=a;let k=a,c=0,b=0;function d(){if(b>0)return b--,c>>b&1;if(c=z[k++],c===255){const l=z[k++];if(l)throw new Error(`unexpected marker: ${(c<<8|l).toString(16)}`)}return b=7,c>>>7}function p(l){let u=l,w;for(;(w=d())!==null;){if(u=u[w],typeof u=="number")return u;if(typeof u!="object")throw new Error("invalid huffman sequence")}return null}function y(l){let u=l,w=0;for(;u>0;){const D=d();if(D===null)return;w=w<<1|D,--u}return w}function P(l){const u=y(l);return u>=1<<l-1?u:u+(-1<<l)+1}function C(l,u){const w=p(l.huffmanTableDC),D=w===0?0:P(w);l.pred+=D,u[0]=l.pred;let A=1;for(;A<64;){const L=p(l.huffmanTableAC),I=L&15,q=L>>4;if(I===0){if(q<15)break;A+=16}else{A+=q;const O=R[A];u[O]=P(I),A++}}}function v(l,u){const w=p(l.huffmanTableDC),D=w===0?0:P(w)<<f;l.pred+=D,u[0]=l.pred}function s(l,u){u[0]|=d()<<f}let n=0;function g(l,u){if(n>0){n--;return}let w=T;const D=x;for(;w<=D;){const A=p(l.huffmanTableAC),L=A&15,I=A>>4;if(L===0){if(I<15){n=y(I)+(1<<I)-1;break}w+=16}else{w+=I;const q=R[w];u[q]=P(L)*(1<<f),w++}}}let e=0,F;function te(l,u){let w=T;const D=x;let A=0;for(;w<=D;){const L=R[w],I=u[L]<0?-1:1;switch(e){case 0:{const q=p(l.huffmanTableAC),O=q&15;if(A=q>>4,O===0)A<15?(n=y(A)+(1<<A),e=4):(A=16,e=1);else{if(O!==1)throw new Error("invalid ACn encoding");F=P(O),e=A?2:3}continue}case 1:case 2:u[L]?u[L]+=(d()<<f)*I:(A--,A===0&&(e=e===2?3:0));break;case 3:u[L]?u[L]+=(d()<<f)*I:(u[L]=F<<f,e=0);break;case 4:u[L]&&(u[L]+=(d()<<f)*I);break}w++}e===4&&(n--,n===0&&(e=0))}function se(l,u,w,D,A){const L=w/m|0,I=w%m,q=L*l.v+D,O=I*l.h+A;u(l,l.blocks[q][O])}function re(l,u,w){const D=w/l.blocksPerLine|0,A=w%l.blocksPerLine;u(l,l.blocks[D][A])}const V=h.length;let H,U,X,Y,M,J;o?T===0?J=t===0?v:s:J=t===0?g:te:J=C;let j=0,$,S;V===1?S=h[0].blocksPerLine*h[0].blocksPerColumn:S=m*r.mcusPerColumn;const ee=E||S;for(;j<S;){for(U=0;U<V;U++)h[U].pred=0;if(n=0,V===1)for(H=h[0],M=0;M<ee;M++)re(H,J,j),j++;else for(M=0;M<ee;M++){for(U=0;U<V;U++){H=h[U];const{h:l,v:u}=H;for(X=0;X<u;X++)for(Y=0;Y<l;Y++)se(H,J,j,X,Y)}if(j++,j===S)break}if(b=0,$=z[k]<<8|z[k+1],$<65280)throw new Error("marker was not found");if($>=65488&&$<=65495)k+=2;else break}return k-i}function ie(z,a){const r=[],{blocksPerLine:h,blocksPerColumn:E}=a,T=h<<3,x=new Int32Array(64),t=new Uint8Array(64);function f(m,o,i){const k=a.quantizationTable;let c,b,d,p,y,P,C,v,s;const n=i;let g;for(g=0;g<64;g++)n[g]=m[g]*k[g];for(g=0;g<8;++g){const e=8*g;if(n[1+e]===0&&n[2+e]===0&&n[3+e]===0&&n[4+e]===0&&n[5+e]===0&&n[6+e]===0&&n[7+e]===0){s=G*n[0+e]+512>>10,n[0+e]=s,n[1+e]=s,n[2+e]=s,n[3+e]=s,n[4+e]=s,n[5+e]=s,n[6+e]=s,n[7+e]=s;continue}c=G*n[0+e]+128>>8,b=G*n[4+e]+128>>8,d=n[2+e],p=n[6+e],y=_*(n[1+e]-n[7+e])+128>>8,v=_*(n[1+e]+n[7+e])+128>>8,P=n[3+e]<<4,C=n[5+e]<<4,s=c-b+1>>1,c=c+b+1>>1,b=s,s=d*Z+p*N+128>>8,d=d*N-p*Z+128>>8,p=s,s=y-C+1>>1,y=y+C+1>>1,C=s,s=v+P+1>>1,P=v-P+1>>1,v=s,s=c-p+1>>1,c=c+p+1>>1,p=s,s=b-d+1>>1,b=b+d+1>>1,d=s,s=y*K+v*W+2048>>12,y=y*W-v*K+2048>>12,v=s,s=P*Q+C*B+2048>>12,P=P*B-C*Q+2048>>12,C=s,n[0+e]=c+v,n[7+e]=c-v,n[1+e]=b+C,n[6+e]=b-C,n[2+e]=d+P,n[5+e]=d-P,n[3+e]=p+y,n[4+e]=p-y}for(g=0;g<8;++g){const e=g;if(n[1*8+e]===0&&n[2*8+e]===0&&n[3*8+e]===0&&n[4*8+e]===0&&n[5*8+e]===0&&n[6*8+e]===0&&n[7*8+e]===0){s=G*i[g+0]+8192>>14,n[0*8+e]=s,n[1*8+e]=s,n[2*8+e]=s,n[3*8+e]=s,n[4*8+e]=s,n[5*8+e]=s,n[6*8+e]=s,n[7*8+e]=s;continue}c=G*n[0*8+e]+2048>>12,b=G*n[4*8+e]+2048>>12,d=n[2*8+e],p=n[6*8+e],y=_*(n[1*8+e]-n[7*8+e])+2048>>12,v=_*(n[1*8+e]+n[7*8+e])+2048>>12,P=n[3*8+e],C=n[5*8+e],s=c-b+1>>1,c=c+b+1>>1,b=s,s=d*Z+p*N+2048>>12,d=d*N-p*Z+2048>>12,p=s,s=y-C+1>>1,y=y+C+1>>1,C=s,s=v+P+1>>1,P=v-P+1>>1,v=s,s=c-p+1>>1,c=c+p+1>>1,p=s,s=b-d+1>>1,b=b+d+1>>1,d=s,s=y*K+v*W+2048>>12,y=y*W-v*K+2048>>12,v=s,s=P*Q+C*B+2048>>12,P=P*B-C*Q+2048>>12,C=s,n[0*8+e]=c+v,n[7*8+e]=c-v,n[1*8+e]=b+C,n[6*8+e]=b-C,n[2*8+e]=d+P,n[5*8+e]=d-P,n[3*8+e]=p+y,n[4*8+e]=p-y}for(g=0;g<64;++g){const e=128+(n[g]+8>>4);e<0?o[g]=0:e>255?o[g]=255:o[g]=e}}for(let m=0;m<E;m++){const o=m<<3;for(let i=0;i<8;i++)r.push(new Uint8Array(T));for(let i=0;i<h;i++){f(a.blocks[m][i],t,x);let k=0;const c=i<<3;for(let b=0;b<8;b++){const d=r[o+b];for(let p=0;p<8;p++)d[c+p]=t[k++]}}}return r}class ae{constructor(){this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}resetFrames(){this.frames=[]}parse(a){let r=0;function h(){const t=a[r]<<8|a[r+1];return r+=2,t}function E(){const t=h(),f=a.subarray(r,r+t-2);return r+=f.length,f}function T(t){let f=0,m=0,o,i;for(i in t.components)t.components.hasOwnProperty(i)&&(o=t.components[i],f<o.h&&(f=o.h),m<o.v&&(m=o.v));const k=Math.ceil(t.samplesPerLine/8/f),c=Math.ceil(t.scanLines/8/m);for(i in t.components)if(t.components.hasOwnProperty(i)){o=t.components[i];const b=Math.ceil(Math.ceil(t.samplesPerLine/8)*o.h/f),d=Math.ceil(Math.ceil(t.scanLines/8)*o.v/m),p=k*o.h,y=c*o.v,P=[];for(let C=0;C<y;C++){const v=[];for(let s=0;s<p;s++)v.push(new Int32Array(64));P.push(v)}o.blocksPerLine=b,o.blocksPerColumn=d,o.blocks=P}t.maxH=f,t.maxV=m,t.mcusPerLine=k,t.mcusPerColumn=c}let x=h();if(x!==65496)throw new Error("SOI not found");for(x=h();x!==65497;){switch(x){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:{const t=E();x===65504&&t[0]===74&&t[1]===70&&t[2]===73&&t[3]===70&&t[4]===0&&(this.jfif={version:{major:t[5],minor:t[6]},densityUnits:t[7],xDensity:t[8]<<8|t[9],yDensity:t[10]<<8|t[11],thumbWidth:t[12],thumbHeight:t[13],thumbData:t.subarray(14,14+3*t[12]*t[13])}),x===65518&&t[0]===65&&t[1]===100&&t[2]===111&&t[3]===98&&t[4]===101&&t[5]===0&&(this.adobe={version:t[6],flags0:t[7]<<8|t[8],flags1:t[9]<<8|t[10],transformCode:t[11]});break}case 65499:{const t=h()+r-2;for(;r<t;){const f=a[r++],m=new Int32Array(64);if(f>>4)if(f>>4===1)for(let o=0;o<64;o++){const i=R[o];m[i]=h()}else throw new Error("DQT: invalid table spec");else for(let o=0;o<64;o++){const i=R[o];m[i]=a[r++]}this.quantizationTables[f&15]=m}break}case 65472:case 65473:case 65474:{h();const t={extended:x===65473,progressive:x===65474,precision:a[r++],scanLines:h(),samplesPerLine:h(),components:{},componentsOrder:[]},f=a[r++];let m;for(let o=0;o<f;o++){m=a[r];const i=a[r+1]>>4,k=a[r+1]&15,c=a[r+2];t.componentsOrder.push(m),t.components[m]={h:i,v:k,quantizationIdx:c},r+=3}T(t),this.frames.push(t);break}case 65476:{const t=h();for(let f=2;f<t;){const m=a[r++],o=new Uint8Array(16);let i=0;for(let c=0;c<16;c++,r++)o[c]=a[r],i+=o[c];const k=new Uint8Array(i);for(let c=0;c<i;c++,r++)k[c]=a[r];f+=17+i,m>>4?this.huffmanTablesAC[m&15]=ne(o,k):this.huffmanTablesDC[m&15]=ne(o,k)}break}case 65501:h(),this.resetInterval=h();break;case 65498:{h();const t=a[r++],f=[],m=this.frames[0];for(let b=0;b<t;b++){const d=m.components[a[r++]],p=a[r++];d.huffmanTableDC=this.huffmanTablesDC[p>>4],d.huffmanTableAC=this.huffmanTablesAC[p&15],f.push(d)}const o=a[r++],i=a[r++],k=a[r++],c=ce(a,r,m,f,this.resetInterval,o,i,k>>4,k&15);r+=c;break}case 65535:a[r]!==255&&r--;break;default:if(a[r-3]===255&&a[r-2]>=192&&a[r-2]<=254){r-=3;break}throw new Error(`unknown JPEG marker ${x.toString(16)}`)}x=h()}}getResult(){const{frames:a}=this;if(this.frames.length===0)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(let o=0;o<this.frames.length;o++){const i=this.frames[o].components;for(const k of Object.keys(i))i[k].quantizationTable=this.quantizationTables[i[k].quantizationIdx],delete i[k].quantizationIdx}const r=a[0],{components:h,componentsOrder:E}=r,T=[],x=r.samplesPerLine,t=r.scanLines;for(let o=0;o<E.length;o++){const i=h[E[o]];T.push({lines:ie(r,i),scaleX:i.h/r.maxH,scaleY:i.v/r.maxV})}const f=new Uint8Array(x*t*T.length);let m=0;for(let o=0;o<t;++o)for(let i=0;i<x;++i)for(let k=0;k<T.length;++k){const c=T[k];f[m]=c.lines[0|o*c.scaleY][0|i*c.scaleX],++m}return f}}class le extends oe{constructor(a){super(),this.reader=new ae,a.JPEGTables&&this.reader.parse(a.JPEGTables)}decodeBlock(a){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(a)),this.reader.getResult().buffer}}export{le as default};
