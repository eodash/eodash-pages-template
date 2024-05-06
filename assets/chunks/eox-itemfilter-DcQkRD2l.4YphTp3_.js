/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xr=globalThis,Oi=xr.ShadowRoot&&(xr.ShadyCSS===void 0||xr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rs=Symbol(),_n=new WeakMap;let ra=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==rs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Oi&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=_n.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&_n.set(e,t))}return t}toString(){return this.cssText}};const ia=t=>new ra(typeof t=="string"?t:t+"",void 0,rs),na=(t,e)=>{if(Oi)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),n=xr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,t.appendChild(i)}},En=Oi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return ia(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sa,defineProperty:oa,getOwnPropertyDescriptor:aa,getOwnPropertyNames:la,getOwnPropertySymbols:ca,getPrototypeOf:ha}=Object,jt=globalThis,Sn=jt.trustedTypes,ua=Sn?Sn.emptyScript:"",ci=jt.reactiveElementPolyfillSupport,Wt=(t,e)=>t,$r={toAttribute(t,e){switch(e){case Boolean:t=t?ua:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Li=(t,e)=>!sa(t,e),kn={attribute:!0,type:String,converter:$r,reflect:!1,hasChanged:Li};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),jt.litPropertyMetadata??(jt.litPropertyMetadata=new WeakMap);class At extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=kn){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,r);n!==void 0&&oa(this.prototype,e,n)}}static getPropertyDescriptor(e,r,i){const{get:n,set:s}=aa(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const l=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??kn}static _$Ei(){if(this.hasOwnProperty(Wt("elementProperties")))return;const e=ha(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Wt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wt("properties"))){const r=this.properties,i=[...la(r),...ca(r)];for(const n of i)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)r.unshift(En(n))}else e!==void 0&&r.push(En(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return na(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var i;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:$r).toAttribute(r,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,r){var i;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:$r;this._$Em=s,this[s]=l.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Li)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(e=this._$EO)==null||e.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(i)):this._$EU()}catch(n){throw r=!1,this._$EU(),n}r&&this._$AE(i)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}At.elementStyles=[],At.shadowRootOptions={mode:"open"},At[Wt("elementProperties")]=new Map,At[Wt("finalized")]=new Map,ci==null||ci({ReactiveElement:At}),(jt.reactiveElementVersions??(jt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _r=globalThis,Er=_r.trustedTypes,Mn=Er?Er.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ri="$lit$",Qe=`lit$${(Math.random()+"").slice(9)}$`,Ci="?"+Qe,da=`<${Ci}>`,bt=document,Kt=()=>bt.createComment(""),Jt=t=>t===null||typeof t!="object"&&typeof t!="function",is=Array.isArray,ns=t=>is(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",hi=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,An=/-->/g,Pn=/>/g,gt=RegExp(`>|${hi}(?:([^\\s"'>=/]+)(${hi}*=${hi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),On=/'/g,Ln=/"/g,ss=/^(?:script|style|textarea|title)$/i,pa=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),U=pa(1),ot=Symbol.for("lit-noChange"),ae=Symbol.for("lit-nothing"),Rn=new WeakMap,vt=bt.createTreeWalker(bt,129);function os(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mn!==void 0?Mn.createHTML(e):e}const as=(t,e)=>{const r=t.length-1,i=[];let n,s=e===2?"<svg>":"",o=Yt;for(let l=0;l<r;l++){const a=t[l];let h,p,f=-1,b=0;for(;b<a.length&&(o.lastIndex=b,p=o.exec(a),p!==null);)b=o.lastIndex,o===Yt?p[1]==="!--"?o=An:p[1]!==void 0?o=Pn:p[2]!==void 0?(ss.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=gt):p[3]!==void 0&&(o=gt):o===gt?p[0]===">"?(o=n??Yt,f=-1):p[1]===void 0?f=-2:(f=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?gt:p[3]==='"'?Ln:On):o===Ln||o===On?o=gt:o===An||o===Pn?o=Yt:(o=gt,n=void 0);const y=o===gt&&t[l+1].startsWith("/>")?" ":"";s+=o===Yt?a+da:f>=0?(i.push(h),a.slice(0,f)+Ri+a.slice(f)+Qe+y):a+Qe+(f===-2?l:y)}return[os(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};class Gt{constructor({strings:e,_$litType$:r},i){let n;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[h,p]=as(e,r);if(this.el=Gt.createElement(h,i),vt.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(n=vt.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const f of n.getAttributeNames())if(f.endsWith(Ri)){const b=p[o++],y=n.getAttribute(f).split(Qe),_=/([.?@])?(.*)/.exec(b);a.push({type:1,index:s,name:_[2],strings:y,ctor:_[1]==="."?cs:_[1]==="?"?hs:_[1]==="@"?us:ir}),n.removeAttribute(f)}else f.startsWith(Qe)&&(a.push({type:6,index:s}),n.removeAttribute(f));if(ss.test(n.tagName)){const f=n.textContent.split(Qe),b=f.length-1;if(b>0){n.textContent=Er?Er.emptyScript:"";for(let y=0;y<b;y++)n.append(f[y],Kt()),vt.nextNode(),a.push({type:2,index:++s});n.append(f[b],Kt())}}}else if(n.nodeType===8)if(n.data===Ci)a.push({type:2,index:s});else{let f=-1;for(;(f=n.data.indexOf(Qe,f+1))!==-1;)a.push({type:7,index:s}),f+=Qe.length-1}s++}}static createElement(e,r){const i=bt.createElement("template");return i.innerHTML=e,i}}function xt(t,e,r=t,i){var n,s;if(e===ot)return e;let o=i!==void 0?(n=r._$Co)==null?void 0:n[i]:r._$Cl;const l=Jt(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==l&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),l===void 0?o=void 0:(o=new l(t),o._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=o:r._$Cl=o),o!==void 0&&(e=xt(t,o._$AS(t,e.values),o,i)),e}class ls{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??bt).importNode(r,!0);vt.currentNode=n;let s=vt.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new qt(s,s.nextSibling,this,e):a.type===1?h=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(h=new ds(s,this,e)),this._$AV.push(h),a=i[++l]}o!==(a==null?void 0:a.index)&&(s=vt.nextNode(),o++)}return vt.currentNode=bt,n}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class qt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,n){this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=xt(this,e,r),Jt(e)?e===ae||e==null||e===""?(this._$AH!==ae&&this._$AR(),this._$AH=ae):e!==this._$AH&&e!==ot&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ns(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ae&&Jt(this._$AH)?this._$AA.nextSibling.data=e:this.T(bt.createTextNode(e)),this._$AH=e}$(e){var r;const{values:i,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Gt.createElement(os(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(i);else{const o=new ls(s,this),l=o.u(this.options);o.p(i),this.T(l),this._$AH=o}}_$AC(e){let r=Rn.get(e.strings);return r===void 0&&Rn.set(e.strings,r=new Gt(e)),r}k(e){is(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of e)n===r.length?r.push(i=new qt(this.S(Kt()),this.S(Kt()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class ir{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,n,s){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ae}_$AI(e,r=this,i,n){const s=this.strings;let o=!1;if(s===void 0)e=xt(this,e,r,0),o=!Jt(e)||e!==this._$AH&&e!==ot,o&&(this._$AH=e);else{const l=e;let a,h;for(e=s[0],a=0;a<s.length-1;a++)h=xt(this,l[i+a],r,a),h===ot&&(h=this._$AH[a]),o||(o=!Jt(h)||h!==this._$AH[a]),h===ae?e=ae:e!==ae&&(e+=(h??"")+s[a+1]),this._$AH[a]=h}o&&!n&&this.j(e)}j(e){e===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class cs extends ir{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ae?void 0:e}}class hs extends ir{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ae)}}class us extends ir{constructor(e,r,i,n,s){super(e,r,i,n,s),this.type=5}_$AI(e,r=this){if((e=xt(this,e,r,0)??ae)===ot)return;const i=this._$AH,n=e===ae&&i!==ae||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==ae&&(i===ae||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class ds{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){xt(this,e)}}const fa={P:Ri,A:Qe,C:Ci,M:1,L:as,R:ls,D:ns,V:xt,I:qt,H:ir,N:hs,U:us,B:cs,F:ds},ui=_r.litHtmlPolyfillSupport;ui==null||ui(Gt,qt),(_r.litHtmlVersions??(_r.litHtmlVersions=[])).push("3.1.2");const ga=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(r==null?void 0:r.renderBefore)??null;i._$litPart$=n=new qt(e.insertBefore(Kt(),s),s,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _e=class extends At{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ga(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ot}};var Cn;_e._$litElement$=!0,_e.finalized=!0,(Cn=globalThis.litElementHydrateSupport)==null||Cn.call(globalThis,{LitElement:_e});const di=globalThis.litElementPolyfillSupport;di==null||di({LitElement:_e});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ma={attribute:!0,type:String,converter:$r,reflect:!1,hasChanged:Li},ya=(t=ma,e,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,t),i==="accessor"){const{name:o}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,t)},init(l){return l!==void 0&&this.P(o,void 0,t),l}}}if(i==="setter"){const{name:o}=r;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+i)};function Q(t){return(e,r)=>typeof r=="object"?ya(t,e,r):((i,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(t){return Q({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(t,e,r){return t?e(t):r==null?void 0:r(t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Vt(t,e){if(t!==void 0){let r=0;for(const i of t)yield e(i,r++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fs=t=>(...e)=>({_$litDirective$:t,values:e});let gs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:va}=fa,jn=()=>document.createComment(""),Xt=(t,e,r)=>{var i;const n=t._$AA.parentNode,s=e===void 0?t._$AB:e._$AA;if(r===void 0){const o=n.insertBefore(jn(),s),l=n.insertBefore(jn(),s);r=new va(o,l,t,t.options)}else{const o=r._$AB.nextSibling,l=r._$AM,a=l!==t;if(a){let h;(i=r._$AQ)==null||i.call(r,t),r._$AM=t,r._$AP!==void 0&&(h=t._$AU)!==l._$AU&&r._$AP(h)}if(o!==s||a){let h=r._$AA;for(;h!==o;){const p=h.nextSibling;n.insertBefore(h,s),h=p}}}return r},mt=(t,e,r=t)=>(t._$AI(e,r),t),ba={},xa=(t,e=ba)=>t._$AH=e,wa=t=>t._$AH,pi=t=>{var e;(e=t._$AP)==null||e.call(t,!1,!0);let r=t._$AA;const i=t._$AB.nextSibling;for(;r!==i;){const n=r.nextSibling;r.remove(),r=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn=(t,e,r)=>{const i=new Map;for(let n=e;n<=r;n++)i.set(t[n],n);return i},ms=fs(class extends gs{constructor(t){if(super(t),t.type!==ps.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let i;r===void 0?r=e:e!==void 0&&(i=e);const n=[],s=[];let o=0;for(const l of t)n[o]=i?i(l,o):o,s[o]=r(l,o),o++;return{values:s,keys:n}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,i]){const n=wa(t),{values:s,keys:o}=this.dt(e,r,i);if(!Array.isArray(n))return this.ut=o,s;const l=this.ut??(this.ut=[]),a=[];let h,p,f=0,b=n.length-1,y=0,_=s.length-1;for(;f<=b&&y<=_;)if(n[f]===null)f++;else if(n[b]===null)b--;else if(l[f]===o[y])a[y]=mt(n[f],s[y]),f++,y++;else if(l[b]===o[_])a[_]=mt(n[b],s[_]),b--,_--;else if(l[f]===o[_])a[_]=mt(n[f],s[_]),Xt(t,a[_+1],n[f]),f++,_--;else if(l[b]===o[y])a[y]=mt(n[b],s[y]),Xt(t,n[f],n[b]),b--,y++;else if(h===void 0&&(h=Dn(o,y,_),p=Dn(l,f,b)),h.has(l[f]))if(h.has(l[b])){const A=p.get(o[y]),z=A!==void 0?n[A]:null;if(z===null){const q=Xt(t,n[f]);mt(q,s[y]),a[y]=q}else a[y]=mt(z,s[y]),Xt(t,n[f],z),n[A]=null;y++}else pi(n[b]),b--;else pi(n[f]),f++;for(;y<=_;){const A=Xt(t,a[_+1]);mt(A,s[y]),a[y++]=A}for(;f<=b;){const A=n[f++];A!==null&&pi(A)}return this.ut=o,xa(t,a),ot}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mi=class extends gs{constructor(t){if(super(t),this.it=ae,t.type!==ps.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ae||t==null)return this._t=void 0,this.it=t;if(t===ot)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};mi.directiveName="unsafeHTML",mi.resultType=1;const Tn=fs(mi);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ys=Symbol.for(""),$a=t=>{if((t==null?void 0:t.r)===ys)return t==null?void 0:t._$litStatic$},Pt=t=>({_$litStatic$:t,r:ys}),In=new Map,_a=t=>(e,...r)=>{const i=r.length;let n,s;const o=[],l=[];let a,h=0,p=!1;for(;h<i;){for(a=e[h];h<i&&(s=r[h],(n=$a(s))!==void 0);)a+=n+e[++h],p=!0;h!==i&&l.push(s),o.push(a),h++}if(h===i&&o.push(e[i]),p){const f=o.join("$$lit$$");(e=In.get(f))===void 0&&(o.raw=o,In.set(f,e=o)),r=l}return t(e,...r)},wr=_a(U);(()=>{var t=Object.defineProperty,e=Math.pow,r=(c,u,x)=>u in c?t(c,u,{enumerable:!0,configurable:!0,writable:!0,value:x}):c[u]=x,i=(c,u,x)=>(r(c,typeof u!="symbol"?u+"":u,x),x),n=(c,u)=>` ${u&&u.length>0?u.map(x=>`<link rel="stylesheet" href="${x}" />`).join(""):""} <style> ${c} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,s=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",o="pointers-overlap",l="pointers-min-distance",a="pointers-max-distance",h="range-dragging",p="data",f="min",b="max",y="step",_="round",A="type",z="theme",q="rtl",g="btt",m="disabled",w="keyboard-disabled",E="mousewheel-disabled",S="slider-width",k="slider-height",L="slider-radius",H="slider-bg",F="slider-bg-hover",D="slider-bg-fill",re="pointer-width",G="pointer-height",C="pointer-radius",P="pointer-bg",M="pointer-bg-hover",I="pointer-bg-focus",O="pointer-shadow",K="pointer-shadow-hover",Y="pointer-shadow-focus",oe="pointer-border",ie="pointer-border-hover",ye="pointer-border-focus",ve="animate-onclick",ke="css-links",xe="vertical",Me="horizontal",Ge=(c,u,x,v,R)=>{let X=u-c;return X===0?x:(v-x)*(R-c)/X+x},$e=c=>!isNaN(parseFloat(c))&&isFinite(c),ne=(c,u)=>$e(c)?Number(c):u,qe=(c,u)=>u===0?0:Math.round(c/u)*u,dt=(c,u=1/0)=>{if(u===1/0)return c;let x=e(10,u);return Math.round(c*x)/x},pe=c=>c==null?!1:typeof c=="boolean"?c:c.trim().toLowerCase()==="true",no=(c,u)=>{c.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},so=(c,u)=>{c.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},oo=(c,u)=>{c.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},ao=(c,u)=>{c.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},lo=(c,u)=>{if(!u||u.length<=0)return;let x=u.map(R=>$e(R)?ne(R,R):R),v={values:x||[]};v.value=x[0],v.value0=x[0],v.value1=x[0];for(let R=1;R<x.length;R++)v[`value${R+1}`]=x[R];c.dispatchEvent(new CustomEvent("change",{detail:v}))},qr=(c,u,x)=>{let v=0,R,X,Z,j,T=!1,ee=(V,ue,we,be,fe,ge)=>{let Ae=v;we!==void 0&&V>we&&(V=we),ue!==void 0&&V<ue&&(V=ue),v=V;let Pe=v;return(be===xe&&ge||be===Me&&fe)&&(Pe=100-Pe),be===xe?u.style.top=`${Pe}%`:u.style.left=`${Pe}%`,Ae!==v},se=V=>V===u||u.contains(V),B=(V,ue,we,be)=>{R=V,X=ue,Z=we,j=be},ce=V=>{T=V,u.classList.toggle("disabled",T),T?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},je=(V,ue)=>{ue==null?u.removeAttribute(V):u.setAttribute(V,ue)},Ee=V=>u.getAttribute(V),W=V=>{if(!T){switch(V.key){case"ArrowLeft":{V.preventDefault(),typeof R=="function"&&R(x);break}case"ArrowRight":{V.preventDefault(),typeof X=="function"&&X(x);break}case"ArrowUp":{V.preventDefault(),typeof Z=="function"&&Z(x);break}case"ArrowDown":{V.preventDefault(),typeof j=="function"&&j(x);break}}ao(c,V)}},te=()=>{T||no(c,u)};return u.className=`pointer pointer-${x}`,u.addEventListener("keydown",W),u.addEventListener("click",te),{$pointer:u,get percent(){return v},get disabled(){return T},set disabled(V){ce(V)},updatePosition:ee,isClicked:se,setCallbacks:B,setAttr:je,getAttr:Ee,destroy:()=>{u.removeEventListener("keydown",W),u.removeEventListener("click",te),u.remove()}}},co=c=>{if(c==null)return;if(Array.isArray(c))return c;if(c.trim()==="")return;let u=c.split(","),x=[],v=!0;for(let R=0;R<u.length;R++){let X=u[R].trim();X!==""&&(x.push(X),$e(X)||(v=!1))}return v?x.map(R=>Number(R)):x},ho=(c,u)=>u?u.findIndex(x=>x===c||x.toString().trim()===c.toString().trim()):-1,uo=c=>({updatePosition:(u,x,v,R)=>{if(x.length<=0)return;let X=x.length===1,Z=x[0],j=x[x.length-1];u===xe?(c.style.removeProperty("width"),c.style.removeProperty("right"),c.style.removeProperty("left"),X?c.style.height=`${Z}%`:c.style.height=`${Math.abs(Z-j)}%`,R?(c.style.bottom="0%",X?c.style.top="auto":c.style.top=`${Math.min(100-j,100-Z)}%`):(c.style.bottom="auto",X?c.style.top="0%":c.style.top=`${Math.min(Z,j)}%`)):(c.style.removeProperty("height"),c.style.removeProperty("top"),c.style.removeProperty("bottom"),X?c.style.width=`${Z}%`:c.style.width=`${Math.abs(Z-j)}%`,v?(c.style.right="0%",X?c.style.left="auto":c.style.left=`${Math.min(100-j,100-Z)}%`):(c.style.right="auto",X?c.style.left="0%":c.style.left=`${Math.min(Z,j)}%`))}}),Qi="--animate-onclick",po="--width",fo="--height",go="--panel-bg-border-radius",mo="--panel-bg",yo="--panel-bg-hover",vo="--panel-bg-fill",bo="--pointer-width",xo="--pointer-height",wo="--pointer-border-radius",$o="--pointer-bg",_o="--pointer-bg-hover",Eo="--pointer-bg-focus",So="--pointer-shadow",ko="--pointer-shadow-hover",Mo="--pointer-shadow-focus",Ao="--pointer-border",Po="--pointer-border-hover",Oo="--pointer-border-focus",or=(c,u,x)=>{let v=new Map;for(let R of c.attributes){let X=R.nodeName.trim().toLowerCase();if(!u.test(X))continue;let Z=X.replace(/\D/g,"").trim(),j=Z===""||Z==="0"||Z==="1"?0:ne(Z,0)-1,T=x&&typeof x=="function"?x(R.value):R.value;v.set(j,T)}return v},Lo=c=>{if(!c)return null;let u=c.getAttribute(ke);if(!u)return null;let x=u.split(";"),v=[];for(let R of x)R.trim()!==""&&v.push(R.trim());return v},Zi=[[po,S,"sliderWidth",null],[fo,k,"sliderHeight",null],[go,L,"sliderRadius",null],[mo,H,"sliderBg",null],[yo,F,"sliderBgHover",null],[vo,D,"sliderBgFill",null],[bo,re,"pointer#Width",/^pointer([0-9]*)-width$/],[xo,G,"pointer#Height",/^pointer([0-9]*)-height$/],[wo,C,"pointer#Radius",/^pointer([0-9]*)-radius$/],[$o,P,"pointer#Bg",/^pointer([0-9]*)-bg$/],[_o,M,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Eo,I,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[So,O,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[ko,K,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Mo,Y,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Ao,oe,"pointer#Border",/^pointer([0-9]*)-border$/],[Po,ie,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Oo,ye,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Ro=(c,u,x)=>{let v=null,R=[],X=new Map,Z=(W,te=u)=>{let V=[...te.classList];for(let ue of V)ue.startsWith(W)&&u.classList.remove(ue)},j=()=>{Z("shape");let W=u.querySelectorAll(".pointer");for(let te of W)Z("shape",te)},T=W=>{v=W,Z("theme-"),typeof W=="string"&&u.classList.add(`theme-${W}`)},ee=()=>{if(j(),!(R.length<=0)){u.classList.add("shape",`shape-${R[0]}`);for(let W=1;W<R.length;W++){let te=R[W];if(!te)continue;let V=u.querySelector(`.pointer-${W}`);!V||V.classList.add("shape",`shape-${te}`)}}},se=(W,te)=>{R[W]=te,ee()},B=()=>{j();let W=or(c,/^pointer([0-9]*)-shape$/);if(!(W.size<=0)){for(let te of W){let V=te[0];R[V]=te[1]}ee()}},ce=(W,te)=>`${W}-${te}`,je=(W,te,V)=>{let ue=x[V];if(!ue)return;let we=V===0?u:ue.$pointer;if(te==null){X.has(ce(W,V))&&X.delete(ce(W,V)),we.style.removeProperty(W);return}X.set(ce(W,V),te),we.style.setProperty(W,te)},Ee=(W,te)=>X.get(ce(W,te));return(()=>{for(let W of Zi){let[te,V,ue,we]=W;if(we){let fe=or(c,we);for(let ge of fe){let Ae=ge[0],Pe=ge[1];je(te,Pe,Ae)}}else{let fe=c.getAttribute(V);je(te,fe,0)}let be=[];if(ue.indexOf("#")===-1)be.push([ue,0]);else{be.push([ue.replace("#",""),0]),be.push([ue.replace("#","0"),0]),be.push([ue.replace("#","1"),0]);for(let fe=1;fe<x.length;fe++)be.push([ue.replace("#",(fe+1).toString()),fe])}for(let fe of be)try{let ge=fe[0],Ae=fe[1];Object.prototype.hasOwnProperty.call(c,ge)||Object.defineProperty(c,ge,{get(){return Ee(te,Ae)},set:Pe=>{je(te,Pe,Ae)}})}catch(ge){console.error(ge)}}T(c.getAttribute(z)),B()})(),{setStyle:je,getStyle:Ee,get theme(){return v},set theme(W){T(W)},get pointerShapes(){return R},setPointerShape:se}},Et="animate-on-click",en="range-dragging",Co=(c,u,x,v)=>{let R=[],X=se=>{for(let B of R)B.update&&typeof B.update=="function"&&B.update(se)},Z=()=>{for(let se of R)se.destroy&&typeof se.destroy=="function"&&se.destroy()},j=(se,B)=>{for(let ce of R)ce.onAttrChange&&typeof ce.onAttrChange=="function"&&ce.onAttrChange(se,B)},T=se=>{if(se.gettersAndSetters){for(let B of se.gettersAndSetters)if(!(!B.name||!B.attributes))try{Object.prototype.hasOwnProperty.call(c,B.name)||Object.defineProperty(c,B.name,B.attributes)}catch(ce){console.error("defineSettersGetters error:",ce)}}},ee=se=>{var B;if(!se.css)return;let ce=(B=c.shadowRoot)==null?void 0:B.querySelector("style");!ce||(ce.innerHTML+=se.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let se of window.tcRangeSliderPlugins){let B=se();R.push(B),B.init&&typeof B.init=="function"&&(B.init(c,u,x,v),T(B),ee(B))}},update:X,onAttrChange:j,destroy:Z}},jo=10,tn=20,Do=(c,u)=>{let x=new Map,v=/^value([0-9]*)$/;for(let j of c.attributes){let T=j.nodeName.trim().toLowerCase();if(!v.test(T))continue;let ee=T.replace("value","").trim(),se=ee===""||ee==="0"||ee==="1"?0:ne(ee,0)-1,B=$e(j.value)?ne(j.value,0):j.value;x.set(se,B)}let R=Math.max(...Array.from(x.keys())),X=[];X.push([qr(c,u,0),x.get(0)]);let Z=u;for(let j=1;j<=R;j++){let T=u.cloneNode(!0);Z.after(T),Z=T,X.push([qr(c,T,j),x.get(j)])}return X},rn=(c,u,x,v,R,X,Z)=>{try{Object.defineProperty(c,v,{configurable:!0,get(){if(!u)return;let j=u.pointers[x];if(!j)return;let T=u.getTextValue(j.percent);return $e(T)?ne(T,T):T},set:j=>{u.pointers[x]?u==null||u.setValue(j,x):u==null||u.addPointer(j)}}),Object.defineProperty(c,R,{configurable:!0,get(){var j,T;return(T=(j=u==null?void 0:u.pointers[x])==null?void 0:j.getAttr("aria-label"))!=null?T:void 0},set:j=>{!u||u.setAriaLabel(x,j)}}),Object.defineProperty(c,X,{configurable:!0,get(){var j,T;return(T=(j=u==null?void 0:u.styles)==null?void 0:j.pointerShapes[x])!=null?T:null},set:j=>{!u||!u.styles||u.styles.setPointerShape(x,j)}}),Object.defineProperty(c,Z,{configurable:!0,get(){var j;return(j=u==null?void 0:u.pointers[x].disabled)!=null?j:!1},set:j=>{if(!u)return;let T=u==null?void 0:u.pointers[x];!T||(T.disabled=j)}})}catch(j){console.error(j)}},To=(c,u)=>{let x=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let v=2;v<jo;v++)x.push([`value${v}`,`ariaLabel${v}`,`pointer${v}Shape`,`pointer${v}Disabled`,v-1]);for(let v of x)rn(c,u,v[4],v[0],v[1],v[2],v[3])},nn=(c,u,x)=>{var v;let R=(v=x.shadowRoot)==null?void 0:v.querySelector(".container");if(R)for(let X of c)u?R.prepend(X.$pointer):R.append(X.$pointer)},Io=(c,u)=>{if(!(!u||c.length<=1)){for(let x of c)x.$pointer.style.zIndex=tn.toString();u.$pointer.style.zIndex=(tn*2).toString()}},Nr=0,Bt=100,St=2,sn="0.3s",qo=(c,u,x)=>{let v=x.map(d=>d[0]),R=null,X=null,Z=null,j=null,T=Nr,ee=Bt,se,B,ce=Me,je=St,Ee=!1,W=!1,te=!1,V=0,ue=1/0,we=!1,be,fe,ge=!1,Ae=!1,Pe=!1,st=sn,on=[],an=d=>{ge||(d.preventDefault&&d.preventDefault(),pt(d),window.addEventListener("mousemove",pt),window.addEventListener("mouseup",ar),so(c,d))},ar=d=>{ge||(be=void 0,fe=void 0,window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",ar),st&&u.classList.add(Et),oo(c,d))},Fo=(d,$)=>{if(v.length<=0)return;if(v.length===1)return v[0].isClicked(d)&&st&&u.classList.remove(Et),v[0];let N=Uo(d);if(we){let le=$,Ne=cr(le);Ne!==void 0&&(le=qe(le,Ne)),N?(be=le,fe=0,st&&u.classList.remove(Et)):be!==void 0&&(fe=le-be,be=le)}if(!Bo(d)&&!N){for(let le of v)if(!(!le.isClicked(d)||le.disabled))return st&&u.classList.remove(Et),le;for(let le of v)if(R===le)return le}let he=1/0,me=null;for(let le of v){if(le.disabled)continue;let Ne=Math.abs($-le.percent);Ne<he&&(he=Ne,me=le)}return me},ln=()=>v.findIndex(d=>R===d&&!d.disabled),pt=d=>{let $;if(ce===xe){let{height:he,top:me}=u.getBoundingClientRect(),le=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;$=Math.min(Math.max(0,le-me),he)*100/he}else{let{width:he,left:me}=u.getBoundingClientRect(),le=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;$=Math.min(Math.max(0,le-me),he)*100/he}if((Ee||W)&&($=100-$),R=Fo(d.target,$),R&&Io(v,R),we&&v.length>1&&fe!==void 0){let he=v[0],me=v[v.length-1],le=he.percent+fe<0,Ne=me.percent+fe>100;if(le||Ne)return;for(let yr=0;yr<v.length;yr++)Oe(yr,v[yr].percent+fe);return}let N=ln();N!==-1&&(Oe(N,$),R==null||R.$pointer.focus())},lr=d=>{if(ge||document.activeElement!==c||R!=null&&R.disabled)return;d.stopPropagation(),d.preventDefault();let $=d.deltaY<0,N=Ee||W,he=$?!N:N,me=ln();me!==-1&&(he?Ut(me,v[me].percent):zt(me,v[me].percent))},cn=d=>{ge||Ae||(ce===xe?W?Oe(d,100):Oe(d,0):Ee?zt(d,v[d].percent):Ut(d,v[d].percent))},hn=d=>{ge||Ae||(ce===xe?W?Oe(d,0):Oe(d,100):Ee?Ut(d,v[d].percent):zt(d,v[d].percent))},un=d=>{ge||Ae||(ce===xe?W?zt(d,v[d].percent):Ut(d,v[d].percent):Ee?Oe(d,100):Oe(d,0))},dn=d=>{ge||Ae||(ce===xe?W?Ut(d,v[d].percent):zt(d,v[d].percent):Ee?Oe(d,0):Oe(d,100))},Bo=d=>d.classList.contains("panel"),Uo=d=>d.classList.contains("panel-fill"),Ut=(d,$)=>{if($===void 0)return;let N=cr($);N==null&&(N=1),$-=N,$<0&&($=0),Oe(d,$)},zt=(d,$)=>{if($===void 0)return;let N=cr($);N==null&&(N=1),$+=N,$>100&&($=100),Oe(d,$)},ft=()=>{!j||j.update({percents:pn(),values:fn(),$pointers:gn(),min:mn(),max:yn(),data:Br(),step:Fr(),round:zr(),type:Ur(),textMin:hr(),textMax:ur(),rightToLeft:Wr(),bottomToTop:Vr(),pointersOverlap:Qr(),pointersMinDistance:Yr(),pointersMaxDistance:Xr(),rangeDragging:Zr(),disabled:Kr(),keyboardDisabled:Jr(),mousewheelDisabled:Gr()})},zo=()=>{ft()},Yo=d=>{if(!(te||v.length<=1||ee===T))if(d===0){let $=ue*100/(ee-T);return Math.max(0,v[d+1].percent-$)}else{let $=V*100/(ee-T);return Math.min(v[d-1].percent+$,100)}},Xo=d=>{if(!(te||v.length<=1||ee===T))if(d===v.length-1){let $=ue*100/(ee-T);return Math.min(v[d-1].percent+$,100)}else{let $=V*100/(ee-T);return Math.max(0,v[d+1].percent-$)}},cr=d=>{let $;if(typeof se=="function"){let N=Ge(0,100,T,ee,d);$=se(N,d)}else $=se;if($e($)){let N=ee-T;return $=N===0?0:$*100/N,$}},kt=d=>{if(d===void 0)return;let $=Ge(0,100,T,ee,d);return B!==void 0?B[Math.round($)]:dt($,je)},hr=()=>B!==void 0?B[T]:T,ur=()=>B!==void 0?B[ee]:ee,Fr=()=>se,Wo=d=>{var $;return d<=0||te?hr():($=kt(v[d-1].percent))!=null?$:""},Vo=d=>{var $;return v.length<=1||d>=v.length-1||te?ur():($=kt(v[d+1].percent))!=null?$:""},pn=()=>v.map(d=>d.percent),fn=()=>v.map(d=>kt(d.percent)),gn=()=>v.map(d=>d.$pointer),mn=()=>T,yn=()=>ee,Br=()=>B,Ur=()=>ce,zr=()=>je,Yr=()=>V,Xr=()=>ue,Ko=d=>on[d],Wr=()=>Ee,Vr=()=>W,Kr=()=>ge,Jr=()=>Ae,Gr=()=>Pe,Qr=()=>te,Zr=()=>we,Oe=(d,$)=>{if($===void 0)return;let N=cr($);N!==void 0&&($=qe($,N));let he=v[d];if(!he)return;let me=he.updatePosition($,Yo(d),Xo(d),ce,Ee,W);X==null||X.updatePosition(ce,v.map(le=>le.percent),Ee,W),ft();for(let le of v){let Ne=kt(le.percent);Ne!==void 0&&(le.setAttr("aria-valuenow",Ne.toString()),le.setAttr("aria-valuetext",Ne.toString()))}Go(),me&&lo(c,v.map(le=>kt(le.percent)))},Ue=()=>{for(let d=0;d<v.length;d++)Oe(d,v[d].percent)},Jo=(d,$)=>{T=B!==void 0?0:ne(d,Nr),ee=B!==void 0?B.length-1:ne($,Bt),dr(T),pr(ee)},Go=()=>{var d,$;for(let N=0;N<v.length;N++){let he=v[N];he.setAttr("aria-valuemin",((d=Wo(N))!=null?d:"").toString()),he.setAttr("aria-valuemax",(($=Vo(N))!=null?$:"").toString())}},dr=d=>{T=ne(d,Nr),T>ee&&(ee=T+Bt),Ue()},pr=d=>{ee=ne(d,Bt),ee<T&&(ee=T+Bt),Ue()},vn=d=>{te=!0;for(let $=0;$<d.length;$++)fr(d[$],$);te=!1;for(let $=0;$<d.length;$++)fr(d[$],$)},fr=(d,$)=>{let N;B!==void 0?(N=d==null?0:ho(d,B),N===-1&&(N=0)):(N=ne(d,T),N<T&&(N=T),N>ee&&(N=ee));let he=Ge(T,ee,0,100,N);Oe($,he)},gr=d=>{if(d==null){se=void 0;return}if(typeof d=="function"){se=d,Ue();return}if($e(d)){se=ne(d,1);let $=Math.abs(ee-T);se>$&&(se=void 0),Ue();return}se=void 0},ei=d=>{te=d,Ue()},ti=d=>{(!$e(d)||d<0)&&(d=0),V=d},ri=d=>{(!$e(d)||d<0)&&(d=1/0),ue=d},ii=d=>{ge=d,u.classList.toggle("disabled",ge),ge?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},bn=d=>{Ae=d},xn=d=>{Pe=d,Pe?document.removeEventListener("wheel",lr):document.addEventListener("wheel",lr,{passive:!1})},ni=d=>{if(d==null){B=void 0;return}if(B=co(d),B===void 0||B.length<=0){B=void 0;return}dr(0),pr(B.length-1),se===void 0&&gr(1)},si=d=>{var $;typeof d=="string"?ce=d.trim().toLowerCase()===xe?xe:Me:ce=Me;let N=($=c.shadowRoot)==null?void 0:$.querySelector(".range-slider-box");if(!N)return;N.className=`range-slider-box type-${ce}`,Ue();let he=ce===xe?"vertical":"horizontal";for(let me of v)me.setAttr("aria-orientation",he)},oi=d=>{Ee=d,v.length>1&&nn(v,Ee,c),Ue(),ft()},ai=d=>{W=d,v.length>1&&nn(v,W,c),Ue(),ft()},li=d=>{je=ne(d,St),je<0&&(je=St),ft()},wn=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(st=void 0,u.style.removeProperty(Qi),u.classList.remove(Et)):(st=d.toString(),u.style.setProperty(Qi,st),u.classList.add(Et))},$n=(d,$)=>{let N=v[d];!N||(N.setAttr("aria-label",$),on[d]=$)},mr=d=>{if(be=void 0,v.length<=1){we=!1,u.classList.remove(en);return}we=d,u.classList.toggle(en,we)},Qo=()=>{ii(pe(c.getAttribute(m))),Ae=pe(c.getAttribute(w)),Pe=pe(c.getAttribute(E));let d=or(c,/^pointer([0-9]*)-disabled$/,$=>pe($));for(let $ of d){let N=$[0];!v[N]||(v[N].disabled=$[1])}},Zo=()=>{let d=or(c,/^aria-label([0-9]*)$/);for(let $ of d){let N=$[0];$n(N,$[1])}},ea=d=>{let $=v.length,N=v[$-1].$pointer,he=N.cloneNode(!0);N.after(he);let me=qr(c,he,$);return me.setCallbacks(cn,hn,un,dn),v.push(me),fr(d,$),Ue(),ft(),$},ta=()=>{let d=v.length,$=v[d-1];return $?($.destroy(),v.pop(),v.length<=1&&mr(!1),Ue(),ft(),d-1):-1};return(()=>{var d,$;for(let he of v)he.setCallbacks(cn,hn,un,dn);let N=(d=c.shadowRoot)==null?void 0:d.querySelector(".panel-fill");N&&(X=uo(N)),si(c.getAttribute(A)),oi(pe(c.getAttribute(q))),ai(pe(c.getAttribute(g))),Jo(c.getAttribute(f),c.getAttribute(b)),gr(c.getAttribute(y)),ni(c.getAttribute(p)),vn(x.map(he=>he[1])),ei(pe(c.getAttribute(o))),ti(ne(c.getAttribute(l),0)),ri(ne(c.getAttribute(a),1/0)),mr(pe(c.getAttribute(h))),li(ne(c.getAttribute(_),St)),Qo(),Zo(),Z=Ro(c,u,v),wn(($=c.getAttribute(ve))!=null?$:sn),u.addEventListener("mousedown",an),u.addEventListener("mouseup",ar),u.addEventListener("touchmove",pt),u.addEventListener("touchstart",pt),Pe||document.addEventListener("wheel",lr,{passive:!1}),j=Co(c,zo,{setValues:vn,setMin:dr,setMax:pr,setStep:gr,setPointersOverlap:ei,setPointersMinDistance:ti,setPointersMaxDistance:ri,setDisabled:ii,setType:si,setRightToLeft:oi,setBottomToTop:ai,setRound:li,setKeyboardDisabled:bn,setMousewheelDisabled:xn,setRangeDragging:mr,setData:ni},{getPercents:pn,getValues:fn,getPointerElements:gn,getMin:mn,getMax:yn,getStep:Fr,getData:Br,getType:Ur,getRound:zr,getTextMin:hr,getTextMax:ur,isRightToLeft:Wr,isBottomToTop:Vr,isDisabled:Kr,isKeyboardDisabled:Jr,isMousewheelDisabled:Gr,isPointersOverlap:Qr,isRangeDraggingEnabled:Zr,getPointersMinDistance:Yr,getPointersMaxDistance:Xr}),j.init()})(),{get pointers(){return v},get styles(){return Z},get pluginsManager(){return j},get min(){return hr()},get max(){return ur()},get step(){return Fr()},get pointersOverlap(){return Qr()},set pointersOverlap(d){ei(d)},get pointersMinDistance(){return Yr()},set pointersMinDistance(d){ti(d)},get pointersMaxDistance(){return Xr()},set pointersMaxDistance(d){ri(d)},get disabled(){return Kr()},set disabled(d){ii(d)},get data(){return Br()},get type(){return Ur()},set type(d){si(d)},get rightToLeft(){return Wr()},set rightToLeft(d){oi(d)},get bottomToTop(){return Vr()},set bottomToTop(d){ai(d)},get round(){return zr()},set round(d){li(d)},get animateOnClick(){return st},set animateOnClick(d){wn(d)},get keyboardDisabled(){return Jr()},set keyboardDisabled(d){bn(d)},get mousewheelDisabled(){return Gr()},set mousewheelDisabled(d){xn(d)},get rangeDragging(){return Zr()},set rangeDragging(d){mr(d)},setMin:dr,setMax:pr,setValue:fr,setStep:gr,setData:ni,getTextValue:kt,setAriaLabel:$n,getAriaLabel:Ko,addPointer:ea,removePointer:ta,destroy:()=>{u.removeEventListener("mousedown",an),u.removeEventListener("mouseup",ar),u.removeEventListener("touchmove",pt),u.removeEventListener("touchstart",pt),document.removeEventListener("wheel",lr);for(let d of v)d.destroy();j==null||j.destroy()}}},No=(c,u,x)=>{let v=Zi.find(([j,T,ee,se])=>T.replace("#","")===u.replace(/\d+/g,""));if(v&&c.styles){let[j,T,ee,se]=v,B=u.replace(/\D/g,"").trim(),ce=B===""||B==="0"||B==="1"?0:ne(B,0)-1;c.styles.setStyle(j,x,ce);return}switch(c&&c.pluginsManager&&c.pluginsManager.onAttrChange(u,x),u){case f:{c.setMin(x);break}case b:{c.setMax(x);break}case y:{c.setStep(x);break}case o:{c.pointersOverlap=pe(x);break}case l:{c.pointersMinDistance=ne(x,0);break}case h:{c.rangeDragging=pe(x);break}case a:{c.pointersMaxDistance=ne(x,1/0);break}case m:{c.disabled=pe(x);break}case w:{c.keyboardDisabled=pe(x);break}case E:{c.mousewheelDisabled=pe(x);break}case p:{c.setData(x);break}case A:{c.type=x;break}case q:{c.rightToLeft=pe(x);break}case g:{c.bottomToTop=pe(x);break}case _:{c.round=ne(x,St);break}case z:{c.styles&&(c.styles.theme=x);break}case ve:{c.animateOnClick=x;break}}let R=null;if(/^value([0-9]*)$/.test(u)&&(R="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(R="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(R="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(R="pointer-shape"),!R)return;let X=u.replace(/\D/g,"").trim(),Z=X===""||X==="0"||X==="1"?0:ne(X,0)-1;switch(R){case"value":{c.setValue(x,Z);break}case"pointer-disabled":{let j=c==null?void 0:c.pointers[Z];if(!j)return;j.disabled=pe(x);break}case"aria-label":{c.setAriaLabel(Z,x);break}case"pointer-shape":{c.styles&&c.styles.setPointerShape(Z,x);break}}},Ho=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(c){this.slider&&this.slider.setStep(c)}get step(){var c;return(c=this.slider)==null?void 0:c.step}set disabled(c){this.slider&&(this.slider.disabled=c)}get disabled(){var c,u;return(u=(c=this.slider)==null?void 0:c.disabled)!=null?u:!1}set data(c){var u;(u=this.slider)==null||u.setData(c)}get data(){var c;return(c=this.slider)==null?void 0:c.data}set min(c){var u;(u=this.slider)==null||u.setMin(c)}get min(){var c;return(c=this.slider)==null?void 0:c.min}set max(c){var u;(u=this.slider)==null||u.setMax(c)}get max(){var c;return(c=this.slider)==null?void 0:c.max}set round(c){!this.slider||(this.slider.round=c)}get round(){var c,u;return(u=(c=this.slider)==null?void 0:c.round)!=null?u:St}set type(c){!this.slider||(this.slider.type=c??Me)}get type(){var c;return((c=this.slider)==null?void 0:c.type)||Me}set pointersOverlap(c){!this.slider||(this.slider.pointersOverlap=c)}get pointersOverlap(){var c,u;return(u=(c=this.slider)==null?void 0:c.pointersOverlap)!=null?u:!1}set pointersMinDistance(c){!this.slider||(this.slider.pointersMinDistance=c)}get pointersMinDistance(){var c,u;return(u=(c=this.slider)==null?void 0:c.pointersMinDistance)!=null?u:0}set pointersMaxDistance(c){!this.slider||(this.slider.pointersMaxDistance=c)}get pointersMaxDistance(){var c,u;return(u=(c=this.slider)==null?void 0:c.pointersMaxDistance)!=null?u:1/0}set theme(c){!this.slider||!this.slider.styles||(this.slider.styles.theme=c)}get theme(){var c,u,x;return(x=(u=(c=this.slider)==null?void 0:c.styles)==null?void 0:u.theme)!=null?x:null}set rtl(c){!this.slider||(this.slider.rightToLeft=c)}get rtl(){var c,u;return(u=(c=this.slider)==null?void 0:c.rightToLeft)!=null?u:!1}set btt(c){!this.slider||(this.slider.bottomToTop=c)}get btt(){var c,u;return(u=(c=this.slider)==null?void 0:c.bottomToTop)!=null?u:!1}set keyboardDisabled(c){!this.slider||(this.slider.keyboardDisabled=c)}get keyboardDisabled(){var c,u;return(u=(c=this.slider)==null?void 0:c.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(c){!this.slider||(this.slider.mousewheelDisabled=c)}get mousewheelDisabled(){var c,u;return(u=(c=this.slider)==null?void 0:c.mousewheelDisabled)!=null?u:!1}set animateOnClick(c){!this.slider||(this.slider.animateOnClick=c)}get animateOnClick(){var c;return(c=this.slider)==null?void 0:c.animateOnClick}get rangeDragging(){var c,u;return(u=(c=this.slider)==null?void 0:c.rangeDragging)!=null?u:!1}set rangeDragging(c){this.slider&&(this.slider.rangeDragging=pe(c))}get externalCSSList(){return this._externalCSSList}addPointer(c){var u,x;if(!this.slider)return;let v=(x=(u=this.slider)==null?void 0:u.addPointer(c))!=null?x:0;rn(this,this.slider,v,`value${v+1}`,`ariaLabel${v+1}`,`pointerShape${v+1}`,`pointer${v+1}Disabled`)}removePointer(){var c;!this.slider||(c=this.slider)==null||c.removePointer()}addCSS(c){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=c,this.shadowRoot.appendChild(u)}connectedCallback(){var c,u;if(!this.shadowRoot)return;this._externalCSSList=Lo(this),this.shadowRoot.innerHTML=n(s,this._externalCSSList);let x=(c=this.shadowRoot)==null?void 0:c.querySelector(".pointer");if(!x)return;let v=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!v)return;let R=Do(this,x);this.slider=qo(this,v,R),To(this,this.slider),this._observer=new MutationObserver(X=>{X.forEach(Z=>{var j;if(!this.slider||Z.type!=="attributes")return;let T=Z.attributeName;!T||No(this.slider,T,(j=this.getAttribute(T))!=null?j:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Hr=Ho;window.tcRangeSlider=Hr,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Hr),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Hr{})})();var Ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ji(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Di(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var n=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return t[i]}})}),r}var vs={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(Ot,function(){var r=1e3,i=6e4,n=36e5,s="millisecond",o="second",l="minute",a="hour",h="day",p="week",f="month",b="quarter",y="year",_="date",A="Invalid Date",z=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var P=["th","st","nd","rd"],M=C%100;return"["+C+(P[(M-20)%10]||P[M]||P[0])+"]"}},m=function(C,P,M){var I=String(C);return!I||I.length>=P?C:""+Array(P+1-I.length).join(M)+C},w={s:m,z:function(C){var P=-C.utcOffset(),M=Math.abs(P),I=Math.floor(M/60),O=M%60;return(P<=0?"+":"-")+m(I,2,"0")+":"+m(O,2,"0")},m:function C(P,M){if(P.date()<M.date())return-C(M,P);var I=12*(M.year()-P.year())+(M.month()-P.month()),O=P.clone().add(I,f),K=M-O<0,Y=P.clone().add(I+(K?-1:1),f);return+(-(I+(M-O)/(K?O-Y:Y-O))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:f,y,w:p,d:h,D:_,h:a,m:l,s:o,ms:s,Q:b}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},E="en",S={};S[E]=g;var k="$isDayjsObject",L=function(C){return C instanceof re||!(!C||!C[k])},H=function C(P,M,I){var O;if(!P)return E;if(typeof P=="string"){var K=P.toLowerCase();S[K]&&(O=K),M&&(S[K]=M,O=K);var Y=P.split("-");if(!O&&Y.length>1)return C(Y[0])}else{var oe=P.name;S[oe]=P,O=oe}return!I&&O&&(E=O),O||!I&&E},F=function(C,P){if(L(C))return C.clone();var M=typeof P=="object"?P:{};return M.date=C,M.args=arguments,new re(M)},D=w;D.l=H,D.i=L,D.w=function(C,P){return F(C,{locale:P.$L,utc:P.$u,x:P.$x,$offset:P.$offset})};var re=function(){function C(M){this.$L=H(M.locale,null,!0),this.parse(M),this.$x=this.$x||M.x||{},this[k]=!0}var P=C.prototype;return P.parse=function(M){this.$d=function(I){var O=I.date,K=I.utc;if(O===null)return new Date(NaN);if(D.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var Y=O.match(z);if(Y){var oe=Y[2]-1||0,ie=(Y[7]||"0").substring(0,3);return K?new Date(Date.UTC(Y[1],oe,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ie)):new Date(Y[1],oe,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ie)}}return new Date(O)}(M),this.init()},P.init=function(){var M=this.$d;this.$y=M.getFullYear(),this.$M=M.getMonth(),this.$D=M.getDate(),this.$W=M.getDay(),this.$H=M.getHours(),this.$m=M.getMinutes(),this.$s=M.getSeconds(),this.$ms=M.getMilliseconds()},P.$utils=function(){return D},P.isValid=function(){return this.$d.toString()!==A},P.isSame=function(M,I){var O=F(M);return this.startOf(I)<=O&&O<=this.endOf(I)},P.isAfter=function(M,I){return F(M)<this.startOf(I)},P.isBefore=function(M,I){return this.endOf(I)<F(M)},P.$g=function(M,I,O){return D.u(M)?this[I]:this.set(O,M)},P.unix=function(){return Math.floor(this.valueOf()/1e3)},P.valueOf=function(){return this.$d.getTime()},P.startOf=function(M,I){var O=this,K=!!D.u(I)||I,Y=D.p(M),oe=function($e,ne){var qe=D.w(O.$u?Date.UTC(O.$y,ne,$e):new Date(O.$y,ne,$e),O);return K?qe:qe.endOf(h)},ie=function($e,ne){return D.w(O.toDate()[$e].apply(O.toDate("s"),(K?[0,0,0,0]:[23,59,59,999]).slice(ne)),O)},ye=this.$W,ve=this.$M,ke=this.$D,xe="set"+(this.$u?"UTC":"");switch(Y){case y:return K?oe(1,0):oe(31,11);case f:return K?oe(1,ve):oe(0,ve+1);case p:var Me=this.$locale().weekStart||0,Ge=(ye<Me?ye+7:ye)-Me;return oe(K?ke-Ge:ke+(6-Ge),ve);case h:case _:return ie(xe+"Hours",0);case a:return ie(xe+"Minutes",1);case l:return ie(xe+"Seconds",2);case o:return ie(xe+"Milliseconds",3);default:return this.clone()}},P.endOf=function(M){return this.startOf(M,!1)},P.$set=function(M,I){var O,K=D.p(M),Y="set"+(this.$u?"UTC":""),oe=(O={},O[h]=Y+"Date",O[_]=Y+"Date",O[f]=Y+"Month",O[y]=Y+"FullYear",O[a]=Y+"Hours",O[l]=Y+"Minutes",O[o]=Y+"Seconds",O[s]=Y+"Milliseconds",O)[K],ie=K===h?this.$D+(I-this.$W):I;if(K===f||K===y){var ye=this.clone().set(_,1);ye.$d[oe](ie),ye.init(),this.$d=ye.set(_,Math.min(this.$D,ye.daysInMonth())).$d}else oe&&this.$d[oe](ie);return this.init(),this},P.set=function(M,I){return this.clone().$set(M,I)},P.get=function(M){return this[D.p(M)]()},P.add=function(M,I){var O,K=this;M=Number(M);var Y=D.p(I),oe=function(ve){var ke=F(K);return D.w(ke.date(ke.date()+Math.round(ve*M)),K)};if(Y===f)return this.set(f,this.$M+M);if(Y===y)return this.set(y,this.$y+M);if(Y===h)return oe(1);if(Y===p)return oe(7);var ie=(O={},O[l]=i,O[a]=n,O[o]=r,O)[Y]||1,ye=this.$d.getTime()+M*ie;return D.w(ye,this)},P.subtract=function(M,I){return this.add(-1*M,I)},P.format=function(M){var I=this,O=this.$locale();if(!this.isValid())return O.invalidDate||A;var K=M||"YYYY-MM-DDTHH:mm:ssZ",Y=D.z(this),oe=this.$H,ie=this.$m,ye=this.$M,ve=O.weekdays,ke=O.months,xe=O.meridiem,Me=function(ne,qe,dt,pe){return ne&&(ne[qe]||ne(I,K))||dt[qe].slice(0,pe)},Ge=function(ne){return D.s(oe%12||12,ne,"0")},$e=xe||function(ne,qe,dt){var pe=ne<12?"AM":"PM";return dt?pe.toLowerCase():pe};return K.replace(q,function(ne,qe){return qe||function(dt){switch(dt){case"YY":return String(I.$y).slice(-2);case"YYYY":return D.s(I.$y,4,"0");case"M":return ye+1;case"MM":return D.s(ye+1,2,"0");case"MMM":return Me(O.monthsShort,ye,ke,3);case"MMMM":return Me(ke,ye);case"D":return I.$D;case"DD":return D.s(I.$D,2,"0");case"d":return String(I.$W);case"dd":return Me(O.weekdaysMin,I.$W,ve,2);case"ddd":return Me(O.weekdaysShort,I.$W,ve,3);case"dddd":return ve[I.$W];case"H":return String(oe);case"HH":return D.s(oe,2,"0");case"h":return Ge(1);case"hh":return Ge(2);case"a":return $e(oe,ie,!0);case"A":return $e(oe,ie,!1);case"m":return String(ie);case"mm":return D.s(ie,2,"0");case"s":return String(I.$s);case"ss":return D.s(I.$s,2,"0");case"SSS":return D.s(I.$ms,3,"0");case"Z":return Y}return null}(ne)||Y.replace(":","")})},P.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},P.diff=function(M,I,O){var K,Y=this,oe=D.p(I),ie=F(M),ye=(ie.utcOffset()-this.utcOffset())*i,ve=this-ie,ke=function(){return D.m(Y,ie)};switch(oe){case y:K=ke()/12;break;case f:K=ke();break;case b:K=ke()/3;break;case p:K=(ve-ye)/6048e5;break;case h:K=(ve-ye)/864e5;break;case a:K=ve/n;break;case l:K=ve/i;break;case o:K=ve/r;break;default:K=ve}return O?K:D.a(K)},P.daysInMonth=function(){return this.endOf(f).$D},P.$locale=function(){return S[this.$L]},P.locale=function(M,I){if(!M)return this.$L;var O=this.clone(),K=H(M,I,!0);return K&&(O.$L=K),O},P.clone=function(){return D.w(this.$d,this)},P.toDate=function(){return new Date(this.valueOf())},P.toJSON=function(){return this.isValid()?this.toISOString():null},P.toISOString=function(){return this.$d.toISOString()},P.toString=function(){return this.$d.toUTCString()},C}(),G=re.prototype;return F.prototype=G,[["$ms",s],["$s",o],["$m",l],["$H",a],["$W",h],["$M",f],["$y",y],["$D",_]].forEach(function(C){G[C[1]]=function(P){return this.$g(P,C[0],C[1])}}),F.extend=function(C,P){return C.$i||(C(P,re,F),C.$i=!0),F},F.locale=H,F.isDayjs=L,F.unix=function(C){return F(1e3*C)},F.en=S[E],F.Ls=S,F.p={},F})})(vs);var Ea=vs.exports;const Lt=ji(Ea);class Sa extends _e{constructor(){super(...arguments),this.templates={},this._renderedTemplates={}}setBindingSyntax(e,r){this._startExpression=e,this._endExpression=r;const i=this.escapeRegex(this._startExpression),n=this.escapeRegex(this._endExpression);this._expression=new RegExp(`${i}\\s*([$\\w\\.,'"\\s()\\[\\]]+)\\s*${n}`,"g")}hasTemplate(e){return this.templates&&!!this.templates[e]}renderTemplate(e,r,i){if(!this.hasTemplate(e))return null;i=i||e;const n=U` <slot name=${i}></slot> `,s={[e]:{...r}};if(this._renderedTemplates.hasOwnProperty(i)){const{slot:l}=this._renderedTemplates[i];this.contains(l)&&this.removeChild(l)}const o=document.createElement("div");return o.slot=i,o.dataset.generated="template",this._renderTemplate(o,this.templates[e],s),this.appendChild(o),this._renderedTemplates[i]={context:s,slot:o},n}getTemplates(){const e={};for(let r=0;r<this.children.length;r++){const i=this.children[r];if(i.nodeName==="RENDER-TEMPLATE"){const n=i;n.dataset.type?e[n.dataset.type]=n:e.default=n,n.templateOrder=r}}return e}_renderTemplate(e,r,i){let n;if(r&&r.childNodes.length){const s=r.cloneNode(!0);n=this.renderNode(s,e,i)}n&&e.appendChild(n)}expandExpressionsAsString(e,r){return e.replace(this.expression,(i,n)=>{const s=this.evalInContext(n||this.trimExpression(i),r);return s?typeof s=="object"?JSON.stringify(s):s.toString():""})}get expression(){return this._expression||this.setBindingSyntax("{{","}}"),this._expression}escapeRegex(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}evalInContext(e,r){r={...r};const i=new Function("with(this) { return "+e+";}");let n;try{n=i.call(r)}catch{}return n}trimExpression(e){return e=e.trim(),e.startsWith(this._startExpression)&&e.endsWith(this._endExpression)&&(e=e.substr(this._startExpression.length,e.length-this._startExpression.length-this._endExpression.length),e=e.trim()),e}renderNode(e,r,i){if(e.nodeName==="#text")return e.textContent=this.expandExpressionsAsString(e.textContent,i),e;if(e.nodeName==="TEMPLATE")return e.$parentTemplateContext=i,e;for(let n=0;n<e.childNodes.length;n++){const s=e.childNodes[n];this.renderNode(s,r,i)}return e}firstUpdated(){this.templates=this.getTemplates()}}const Ti=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
details {
  width: 100%;
}
`,Ii=`
button,
.button {
  /* TODO: why does this only work here and not from :root? */
  --primary-color: #004170;
  --primary-color-hover: #004170CC;
  --error-color: #FF5252;

  display: inline-flex;
  position: relative;
  align-items: center;
  color: #fff;
  border-width: 0;
  outline: none;
  border-radius: 4px;
  padding: 16px;
  height: 36px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1.25px;                           
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition-property: box-shadow, transform, opacity, background;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover:not([disabled]):not(.icon),
.button:hover:not([disabled]):not(.icon) {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: var(--primary-color-hover);
}

button, button:active,
.button, .button:active {
  background: var(--primary-color);
}

button[disabled],
.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

button.outline,
.button.outline {
  background: transparent;
  box-shadow: none;
  color: var(--primary-color);
  outline: 1px solid var(--primary-color);
}

button.outline:hover,
.button.outline:hover {
  background: transparent;
}

button.icon,
.button.icon {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-indent: -9999px;
}

button.icon-text,
.button.icon-text {
  text-indent: 26px;
}

button.icon:before, button.icon-text:before,
.button.icon:before, .button.icon-text:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
}

button.icon:before,
.button.icon:before {
  width: 24px;
  height: 24px;
  margin-right: 0;
}

button.icon-text:before,
.button.icon-text:before {
  width: 18px;
  height: 18px;
}

button.small,
.button.small {
  height: 28px;
  padding: 12.4px;
  font-size: .75rem;
}

button.smallest.icon, 
button.smallest.icon::before {
  height: 16px;
  width: 16px;
  padding: 0px;
}
`,ka=`
input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 24px;
  height: 24px;
}
input[type=checkbox]:after {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
input[type=checkbox]:checked:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");

}
`,Ma=`
input[type=radio] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 24px;
  height: 24px;
}

label span {
  font-size: small;
}

input[type=radio]:after {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
input[type=radio]:checked:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");

}
`,Aa=`
input[type="range"] {
  -webkit-appearance: none;
  width: 90%;
  margin-left: 5%;
  height: 6px;
  border-radius: 5px;
  background: #d7dcdf;
  outline: none;
  padding: 0;
}
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
.range-slider {
  margin: 60px 0 0 0;
}
.range-slider {
  width: 100%;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background: #00416F;
}
input[type="range"]:active::-webkit-slider-thumb {
  background: #00416F;
}
input[type="range"]::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border: 0;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
input[type="range"]::-moz-range-thumb:hover {
  background: #00416F;
}
input[type="range"]:active::-moz-range-thumb {
  background: #00416F;
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px #fff0, 0 0 0 6px #00416F00;
}
.range-slider__value {
  display: inline-block;
  position: relative;
  width: 60px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: #2c3e50;
  padding: 5px 10px;
  margin-left: 8px;
}
.range-slider__value:after {
  position: absolute;
  top: 8px;
  left: -7px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid #2c3e50;
  border-bottom: 7px solid transparent;
  content: '';
}

input::-moz-focus-inner, input::-moz-focus-outer {
  border: 0;
}
`,qi=`
* {
  font-family: Roboto, sans-serif;
}

${Ii}
${ka}
${Ma}
${Aa}

ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem 0;
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: small;
  align-items: center;
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  position: absolute;
  right: 8px;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
}
[data-type=filter] .title,
details summary {
  text-transform: capitalize;
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid #0004;
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul li {
  padding: 5px 10px;
}
li.highlighted {
  background: #00417011;
}
section {
  position: relative;
}
button#filter-reset {
  position: absolute;
  top: 4px;
  right: 0;
}
.scroll {
  max-height: calc(100% - 30px);
  overflow-x: hidden;
  overflow-y: auto;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00417044;
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: #004170;
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range {
  display: flex;
  align-items: center;
  padding: .5rem 0;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before {
  margin-right: .5rem;
}
.range-after {
  margin-left: .5rem;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: 1px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 16px;
  width: 16px;
}
  `;var Pa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Ni=(t,e,r,i)=>{for(var n=i>1?void 0:i?Oa(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&Pa(e,r,n),n};let Sr=class extends _e{handleDetailsToggle(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}_resetFilter(){this.querySelector("[slot='filter']").reset()}render(){return U`
      <style>
        ${Ti}
        ${!this.unstyled&&qi}
      </style>
      <details
        @toggle="${this.handleDetailsToggle}"
        class="details-filter"
        part="details-filter"
        ?open=${this.filterObject.expanded||ae}
      >
        <summary>
          <span
            class="title"
            style="${!this.filterObject.title&&"text-transform: capitalize"}"
          >
            ${this.filterObject.title||this.filterObject.key||"Filter"}
            <slot name="reset-button"></slot>
          </span>
        </summary>
        <div class="scroll">
          <slot name="filter"></slot>
        </div>
      </details>
    `}};Ni([Q({attribute:!1})],Sr.prototype,"filterObject",2);Ni([Q()],Sr.prototype,"unstyled",2);Sr=Ni([Ce("eox-itemfilter-expandcontainer")],Sr);const Nt=t=>{if(!t.dirty)return null;switch(t.type){case"multiselect":for(const e in t.state)t.state[e]=!1;break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const e in t.state)t.state[e]=!1;break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(e=>{t.state[e]=void 0});break}return delete t.stringifiedState,delete t.dirty,t},yi=Math.min,Rt=Math.max,kr=Math.round,vr=Math.floor,at=t=>({x:t,y:t});function bs(t){return t.split("-")[0]}function La(t){return t.split("-")[1]}function Ra(t){return t==="x"?"y":"x"}function Ca(t){return t==="y"?"height":"width"}function xs(t){return["top","bottom"].includes(bs(t))?"y":"x"}function ja(t){return Ra(xs(t))}function ws(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function qn(t,e,r){let{reference:i,floating:n}=t;const s=xs(e),o=ja(e),l=Ca(o),a=bs(e),h=s==="y",p=i.x+i.width/2-n.width/2,f=i.y+i.height/2-n.height/2,b=i[l]/2-n[l]/2;let y;switch(a){case"top":y={x:p,y:i.y-n.height};break;case"bottom":y={x:p,y:i.y+i.height};break;case"right":y={x:i.x+i.width,y:f};break;case"left":y={x:i.x-n.width,y:f};break;default:y={x:i.x,y:i.y}}switch(La(e)){case"start":y[o]-=b*(r&&h?-1:1);break;case"end":y[o]+=b*(r&&h?-1:1);break}return y}const Da=async(t,e,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:s=[],platform:o}=r,l=s.filter(Boolean),a=await(o.isRTL==null?void 0:o.isRTL(e));let h=await o.getElementRects({reference:t,floating:e,strategy:n}),{x:p,y:f}=qn(h,i,a),b=i,y={},_=0;for(let A=0;A<l.length;A++){const{name:z,fn:q}=l[A],{x:g,y:m,data:w,reset:E}=await q({x:p,y:f,initialPlacement:i,placement:b,strategy:n,middlewareData:y,rects:h,platform:o,elements:{reference:t,floating:e}});p=g??p,f=m??f,y={...y,[z]:{...y[z],...w}},E&&_<=50&&(_++,typeof E=="object"&&(E.placement&&(b=E.placement),E.rects&&(h=E.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:n}):E.rects),{x:p,y:f}=qn(h,b,a)),A=-1)}return{x:p,y:f,placement:b,strategy:n,middlewareData:y}};function lt(t){return $s(t)?(t.nodeName||"").toLowerCase():"#document"}function Re(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function it(t){var e;return(e=($s(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $s(t){return t instanceof Node||t instanceof Re(t).Node}function Ze(t){return t instanceof Element||t instanceof Re(t).Element}function We(t){return t instanceof HTMLElement||t instanceof Re(t).HTMLElement}function Nn(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Re(t).ShadowRoot}function nr(t){const{overflow:e,overflowX:r,overflowY:i,display:n}=Te(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(n)}function Ta(t){return["table","td","th"].includes(lt(t))}function Hi(t){const e=Fi(),r=Te(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Ia(t){let e=Dt(t);for(;We(e)&&!Rr(e);){if(Hi(e))return e;e=Dt(e)}return null}function Fi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Rr(t){return["html","body","#document"].includes(lt(t))}function Te(t){return Re(t).getComputedStyle(t)}function Cr(t){return Ze(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Dt(t){if(lt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Nn(t)&&t.host||it(t);return Nn(e)?e.host:e}function _s(t){const e=Dt(t);return Rr(e)?t.ownerDocument?t.ownerDocument.body:t.body:We(e)&&nr(e)?e:_s(e)}function Qt(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=_s(t),s=n===((i=t.ownerDocument)==null?void 0:i.body),o=Re(n);return s?e.concat(o,o.visualViewport||[],nr(n)?n:[],o.frameElement&&r?Qt(o.frameElement):[]):e.concat(n,Qt(n,[],r))}function Es(t){const e=Te(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=We(t),s=n?t.offsetWidth:r,o=n?t.offsetHeight:i,l=kr(r)!==s||kr(i)!==o;return l&&(r=s,i=o),{width:r,height:i,$:l}}function Bi(t){return Ze(t)?t:t.contextElement}function Ct(t){const e=Bi(t);if(!We(e))return at(1);const r=e.getBoundingClientRect(),{width:i,height:n,$:s}=Es(e);let o=(s?kr(r.width):r.width)/i,l=(s?kr(r.height):r.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const qa=at(0);function Ss(t){const e=Re(t);return!Fi()||!e.visualViewport?qa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Na(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Re(t)?!1:e}function wt(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),s=Bi(t);let o=at(1);e&&(i?Ze(i)&&(o=Ct(i)):o=Ct(t));const l=Na(s,r,i)?Ss(s):at(0);let a=(n.left+l.x)/o.x,h=(n.top+l.y)/o.y,p=n.width/o.x,f=n.height/o.y;if(s){const b=Re(s),y=i&&Ze(i)?Re(i):i;let _=b,A=_.frameElement;for(;A&&i&&y!==_;){const z=Ct(A),q=A.getBoundingClientRect(),g=Te(A),m=q.left+(A.clientLeft+parseFloat(g.paddingLeft))*z.x,w=q.top+(A.clientTop+parseFloat(g.paddingTop))*z.y;a*=z.x,h*=z.y,p*=z.x,f*=z.y,a+=m,h+=w,_=Re(A),A=_.frameElement}}return ws({width:p,height:f,x:a,y:h})}const Ha=[":popover-open",":modal"];function ks(t){return Ha.some(e=>{try{return t.matches(e)}catch{return!1}})}function Fa(t){let{elements:e,rect:r,offsetParent:i,strategy:n}=t;const s=n==="fixed",o=it(i),l=e?ks(e.floating):!1;if(i===o||l&&s)return r;let a={scrollLeft:0,scrollTop:0},h=at(1);const p=at(0),f=We(i);if((f||!f&&!s)&&((lt(i)!=="body"||nr(o))&&(a=Cr(i)),We(i))){const b=wt(i);h=Ct(i),p.x=b.x+i.clientLeft,p.y=b.y+i.clientTop}return{width:r.width*h.x,height:r.height*h.y,x:r.x*h.x-a.scrollLeft*h.x+p.x,y:r.y*h.y-a.scrollTop*h.y+p.y}}function Ba(t){return Array.from(t.getClientRects())}function Ms(t){return wt(it(t)).left+Cr(t).scrollLeft}function Ua(t){const e=it(t),r=Cr(t),i=t.ownerDocument.body,n=Rt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Rt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+Ms(t);const l=-r.scrollTop;return Te(i).direction==="rtl"&&(o+=Rt(e.clientWidth,i.clientWidth)-n),{width:n,height:s,x:o,y:l}}function za(t,e){const r=Re(t),i=it(t),n=r.visualViewport;let s=i.clientWidth,o=i.clientHeight,l=0,a=0;if(n){s=n.width,o=n.height;const h=Fi();(!h||h&&e==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:s,height:o,x:l,y:a}}function Ya(t,e){const r=wt(t,!0,e==="fixed"),i=r.top+t.clientTop,n=r.left+t.clientLeft,s=We(t)?Ct(t):at(1),o=t.clientWidth*s.x,l=t.clientHeight*s.y,a=n*s.x,h=i*s.y;return{width:o,height:l,x:a,y:h}}function Hn(t,e,r){let i;if(e==="viewport")i=za(t,r);else if(e==="document")i=Ua(it(t));else if(Ze(e))i=Ya(e,r);else{const n=Ss(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return ws(i)}function As(t,e){const r=Dt(t);return r===e||!Ze(r)||Rr(r)?!1:Te(r).position==="fixed"||As(r,e)}function Xa(t,e){const r=e.get(t);if(r)return r;let i=Qt(t,[],!1).filter(l=>Ze(l)&&lt(l)!=="body"),n=null;const s=Te(t).position==="fixed";let o=s?Dt(t):t;for(;Ze(o)&&!Rr(o);){const l=Te(o),a=Hi(o);!a&&l.position==="fixed"&&(n=null),(s?!a&&!n:!a&&l.position==="static"&&n&&["absolute","fixed"].includes(n.position)||nr(o)&&!a&&As(t,o))?i=i.filter(h=>h!==o):n=l,o=Dt(o)}return e.set(t,i),i}function Wa(t){let{element:e,boundary:r,rootBoundary:i,strategy:n}=t;const s=[...r==="clippingAncestors"?Xa(e,this._c):[].concat(r),i],o=s[0],l=s.reduce((a,h)=>{const p=Hn(e,h,n);return a.top=Rt(p.top,a.top),a.right=yi(p.right,a.right),a.bottom=yi(p.bottom,a.bottom),a.left=Rt(p.left,a.left),a},Hn(e,o,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Va(t){const{width:e,height:r}=Es(t);return{width:e,height:r}}function Ka(t,e,r){const i=We(e),n=it(e),s=r==="fixed",o=wt(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const a=at(0);if(i||!i&&!s)if((lt(e)!=="body"||nr(n))&&(l=Cr(e)),i){const f=wt(e,!0,s,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else n&&(a.x=Ms(n));const h=o.left+l.scrollLeft-a.x,p=o.top+l.scrollTop-a.y;return{x:h,y:p,width:o.width,height:o.height}}function Fn(t,e){return!We(t)||Te(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ps(t,e){const r=Re(t);if(!We(t)||ks(t))return r;let i=Fn(t,e);for(;i&&Ta(i)&&Te(i).position==="static";)i=Fn(i,e);return i&&(lt(i)==="html"||lt(i)==="body"&&Te(i).position==="static"&&!Hi(i))?r:i||Ia(t)||r}const Ja=async function(t){const e=this.getOffsetParent||Ps,r=this.getDimensions;return{reference:Ka(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await r(t.floating)}}};function Ga(t){return Te(t).direction==="rtl"}const Qa={convertOffsetParentRelativeRectToViewportRelativeRect:Fa,getDocumentElement:it,getClippingRect:Wa,getOffsetParent:Ps,getElementRects:Ja,getClientRects:Ba,getDimensions:Va,getScale:Ct,isElement:Ze,isRTL:Ga};function Za(t,e){let r=null,i;const n=it(t);function s(){var l;clearTimeout(i),(l=r)==null||l.disconnect(),r=null}function o(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),s();const{left:h,top:p,width:f,height:b}=t.getBoundingClientRect();if(l||e(),!f||!b)return;const y=vr(p),_=vr(n.clientWidth-(h+f)),A=vr(n.clientHeight-(p+b)),z=vr(h),q={rootMargin:-y+"px "+-_+"px "+-A+"px "+-z+"px",threshold:Rt(0,yi(1,a))||1};let g=!0;function m(w){const E=w[0].intersectionRatio;if(E!==a){if(!g)return o();E?o(!1,E):i=setTimeout(()=>{o(!1,1e-7)},100)}g=!1}try{r=new IntersectionObserver(m,{...q,root:n.ownerDocument})}catch{r=new IntersectionObserver(m,q)}r.observe(t)}return o(!0),s}function el(t,e,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,h=Bi(t),p=n||s?[...h?Qt(h):[],...Qt(e)]:[];p.forEach(q=>{n&&q.addEventListener("scroll",r,{passive:!0}),s&&q.addEventListener("resize",r)});const f=h&&l?Za(h,r):null;let b=-1,y=null;o&&(y=new ResizeObserver(q=>{let[g]=q;g&&g.target===h&&y&&(y.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var m;(m=y)==null||m.observe(e)})),r()}),h&&!a&&y.observe(h),y.observe(e));let _,A=a?wt(t):null;a&&z();function z(){const q=wt(t);A&&(q.x!==A.x||q.y!==A.y||q.width!==A.width||q.height!==A.height)&&r(),A=q,_=requestAnimationFrame(z)}return r(),()=>{var q;p.forEach(g=>{n&&g.removeEventListener("scroll",r),s&&g.removeEventListener("resize",r)}),f==null||f(),(q=y)==null||q.disconnect(),y=null,a&&cancelAnimationFrame(_)}}const tl=(t,e,r)=>{const i=new Map,n={platform:Qa,...r},s={...n.platform,_c:i};return Da(t,e,{...n,platform:s})};var rl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,jr=(t,e,r,i)=>{for(var n=i>1?void 0:i?il(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&rl(e,r,n),n};let Zt=class extends _e{constructor(){super(...arguments),this.open=!1,this.parent=null,this.unstyled=!1,this._clickEventListener=()=>{this.open=!1},this._keyboardEventListener=t=>{const{code:e}=t;["Escape"].includes(e)&&this._handleKeyboard(e)}}_handleKeyboard(t){this.clientHeight}_overlayCleanup(){}connectedCallback(){super.connectedCallback(),this.unstyled||setTimeout(()=>{const t=this.parent||this.renderRoot.querySelector("[name=trigger]").assignedNodes()[0],e=this.renderRoot.querySelector("#dropdown"),r=()=>{e.classList.contains("open")&&tl(t,e,{strategy:"fixed"}).then(({x:i,y:n})=>{Object.assign(e.style,{left:`${i}px`,top:`${n}px`,width:`${t.getBoundingClientRect().width}px`})})};this._overlayCleanup=el(t,e,r)})}disconnectedCallback(){super.disconnectedCallback(),this._overlayCleanup(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener),window.removeEventListener("click",this._clickEventListener)}render(){return U`
      <style>
        #dropdown {
          display: none;
        }
        #dropdown.open {
          display: block;
        }
        ${this.unstyled?ae:U`
              eox-dropdown { height: 100%;} #dropdown { position: fixed; top:
              0px; left: 0; width: 100%; margin: 0; padding: 0; background:
              white; border-bottom-left-radius: 4px; border-bottom-right-radius:
              4px; box-shadow: 0 4px 4px #0007; cursor: default; max-height:
              200px; overflow-y: auto; z-index: 99;}
            `}
      </style>
      <slot name="trigger"></slot>
      <div id="dropdown">
        <slot name="content"></slot>
      </div>
    `}updated(t){if(t.has("open")){const e=this.renderRoot.querySelector("#dropdown");this.open?e.classList.add("open"):e.classList.remove("open"),this.requestUpdate()}}firstUpdated(){window.addEventListener("click",this._clickEventListener),this.getRootNode().addEventListener("keydown",this._keyboardEventListener),this.renderRoot.querySelector("[name=trigger]").assignedNodes()[0].addEventListener("focus",()=>{this.open=!0})}};jr([Q({type:Boolean})],Zt.prototype,"open",2);jr([Q()],Zt.prototype,"parent",2);jr([Q({type:Boolean})],Zt.prototype,"unstyled",2);Zt=jr([Ce("eox-dropdown")],Zt);var nl=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,Dr=(t,e,r,i)=>{for(var n=i>1?void 0:i?sl(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&nl(e,r,n),n};let er=class extends _e{constructor(){super(...arguments),this.items=[],this.titleProperty="title",this.unstyled=!1,this._keyboardEventListener=t=>{const{code:e}=t;this.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(e)||(e==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(e)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(e)&&this._handleKeyboard(e,t.target.value??""))}}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}_handleKeyboard(t,e){const r=this.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(this.items.length){r&&this.items.splice(Array.from(this.renderRoot.querySelectorAll(".chip")).indexOf(r),1);const i=this.renderRoot.querySelectorAll(".chip")[this.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),this.requestUpdate()}this._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(this.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const n=this.renderRoot.querySelector(".chip.highlighted");n&&(i=Array.from(this.renderRoot.querySelectorAll(".chip")).indexOf(n),n.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=this.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>this.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(this.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this._keyboardEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener)}render(){return U`
      <style>
        .chip.highlighted {
          background: lightgrey;
        }
        .chip-title {
          pointer-events: none;
        }
        ${this.unstyled?ae:U`
              .chip-container { display: flex; flex: 0; } .chip { display: flex;
              align-items: center; background: #00417022; border-radius: 4px;
              margin-right: 4px; padding: 5px 10px; font-size: small; cursor:
              default; white-space: nowrap; } .chip.highlighted { background:
              #004170; color: white; } .chip-close { cursor: pointer;
              margin-left: 4px; }
            `}
      </style>
      <span class="chip-container">
        ${Vt(this.items,t=>U`
            <span
              class="chip"
              @click=${e=>{this.renderRoot.querySelectorAll(".chip").forEach(r=>{r.classList.remove("highlighted")}),e.target.classList.add("highlighted"),this.requestUpdate()}}
            >
              <span class="chip-title"
                >${t[this.titleProperty]}</span
              >
              ${de(t._inProgress,()=>t.stringifiedState?"":U` ... `)}
              ${de(t.stringifiedState,()=>U`: ${t.stringifiedState}`)}
              <span
                class="chip-close"
                @click=${e=>{e.stopPropagation(),this.items.splice(this.items.indexOf(t),1),this._dispatchEvent(),this.requestUpdate()}}
                >✕</span
              >
            </span>
          `)}
      </span>
    `}};Dr([Q({type:Array})],er.prototype,"items",2);Dr([Q()],er.prototype,"titleProperty",2);Dr([Q({type:Boolean})],er.prototype,"unstyled",2);er=Dr([Ce("eox-itemfilter-chips")],er);var ol=Object.defineProperty,al=Object.getOwnPropertyDescriptor,Ke=(t,e,r,i)=>{for(var n=i>1?void 0:i?al(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&ol(e,r,n),n};let Fe=class extends _e{constructor(){super(...arguments),this.idProperty="id",this.items=[],this.titleProperty="title",this.itemTitleProperty=this.titleProperty,this.multiple=!1,this.unstyled=!1,this.multiStep=!1,this.inputText="",this.selectedItems=[],this._keyboardEventListener=t=>{const{code:e}=t;["ArrowUp","ArrowDown","Escape","Backspace"].includes(e)&&this._handleKeyboard(e)}}_handleKeyboard(t){var e,r,i,n;if(this.clientHeight!==0){if(t==="Escape"){if(this.selectedItems.length<1||this.multiple){this.renderRoot.querySelector("input").value!==""?this.renderRoot.querySelector("input").value="":this.renderRoot.querySelector("eox-dropdown").open=!1;return}this.multiple||(this.renderRoot.querySelector("input").value!==this.selectedItems[0][this.titleProperty]?this.renderRoot.querySelector("input").value=this.selectedItems[0][this.titleProperty]:this.renderRoot.querySelector("eox-dropdown").open=!1);return}(t==="ArrowDown"||t==="ArrowUp")&&(this.renderRoot.querySelector("eox-dropdown").open=!0,(e=this.parentElement)!=null&&e.inline&&this.renderRoot.querySelector("eox-selectionlist")._handleKeyboard(t)),this.renderRoot.querySelector("input").select(),(r=this.parentElement)!=null&&r.inline&&(["ArrowUp","ArrowDown"].includes(t)||((n=(i=this.parentElement.parentElement)==null?void 0:i.parentElement)==null?void 0:n.querySelector("#inline-input")).focus())}}_handleHighlight(t){t[0]._inProgress||(this.renderRoot.querySelector("input").value=t[0][this.titleProperty]||"",this.renderRoot.querySelector("input").select())}_handleSelect(t){var e;t.length>0&&this.multiStep&&t.forEach(r=>{this.selectedItems.includes(r)||(r._inProgress=!0)}),this.selectedItems=t,t.length>0?this.multiple?(this.renderRoot.querySelector("input").value="",this.renderRoot.querySelector("input").focus()):(this.renderRoot.querySelector("input").value=t[0][this.titleProperty],t[0]._inProgress||(this.renderRoot.querySelector("eox-dropdown").open=!1)):(this.renderRoot.querySelector("input").select(),this.renderRoot.querySelector("input").focus()),this._dispatchEvent(),this.requestUpdate(),(e=this.renderRoot.querySelector("eox-itemfilter-chips"))==null||e.requestUpdate()}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.selectedItems}))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener)}firstUpdated(){this.getRootNode().addEventListener("keydown",this._keyboardEventListener)}updated(t){t.has("selectedItems")&&this._handleSelect(this.selectedItems)}render(){return U`
      <style>
        :host,
        .container {
          display: flex;
        }
        #dropdown {
          display: none;
        }
        ${this.unstyled?ae:U`
              ${Ii} :host { position: relative; } .container { width: 100%;
              position: relative; border: 1px solid #00417066; border-radius:
              4px; height: 24px; padding: 5px; flex: 1; justify-content:
              space-between; cursor: text; overflow-x: auto; } .container:hover
              { border: 1px solid #004170; } .input-container { display: flex;
              flex: 1; align-items: center; } input, input:focus { height: 100%;
              border: none; outline: none; } .button-container { display: flex;
              align-items: center; justify-content: center; position: absolute;
              right: 1px; top: 5px; height: calc(100% - 10px); width: 34px;
              background: white; } button.icon { color: #004170; height: 24px;
              font-size: large; width: unset; } .container::-webkit-scrollbar {
              height: 2px; } .container::-webkit-scrollbar-thumb { background:
              lightgrey; border-radius: 2px;} .hidden {height: 1px; padding: 0;
              border: none;} .hidden:hover {border: none} .hidden input {
              opacity: 0% }
            `}
      </style>
      <div
        class="container"
        part="container"
        @click=${t=>{t.stopPropagation(),this.renderRoot.querySelector("input[type=text]").focus()}}
      >
        ${de(this.multiple,()=>U`
            <eox-itemfilter-chips
              .items=${this.selectedItems}
              .titleProperty=${this.titleProperty}
              .unstyled=${this.unstyled}
            ></eox-itemfilter-chips>
          `)}
        <div class="input-container">
          <eox-dropdown
            .parent=${this.parentNode.parentNode}
            .unstyled=${this.unstyled}
          >
            <input
              slot="trigger"
              type="text"
              @focus=${()=>{this.inputText="",this.requestUpdate()}}
              @input=${t=>{this.inputText=t.target.value.toLowerCase()}}
            />
            ${de(this.items.length>0,()=>U`
                <eox-selectionlist
                  slot="content"
                  .filter=${this.inputText}
                  .idProperty=${this.idProperty}
                  .titleProperty=${this.titleProperty}
                  .items=${this.items.filter(t=>this.multiStep?!t.stringifiedState:!0).filter(t=>this.inputText?t[this.titleProperty].toLowerCase().includes(this.inputText.toLowerCase()):!0)}
                  .multiple=${this.multiStep?!0:this.multiple}
                  .disableKeyboardEvents=${this.multiStep}
                  .selectedItems=${this.multiStep?this.selectedItems.filter(t=>t.stringifiedState):this.selectedItems}
                  .unstyled=${this.unstyled}
                  @items-highlighted=${t=>{this._handleHighlight(t.detail)}}
                  @items-selected=${t=>{this._handleSelect(t.detail)}}
                >
                </eox-selectionlist>
              `)}
          </eox-dropdown>
        </div>
      </div>
      ${de(this.selectedItems.length>0,()=>U`
          <div class="button-container">
            <button
              class="icon"
              @click=${()=>{this._handleSelect([])}}
            >
              ✕
            </button>
          </div>
        `)}
    `}};Ke([Q()],Fe.prototype,"idProperty",2);Ke([Q()],Fe.prototype,"items",2);Ke([Q()],Fe.prototype,"titleProperty",2);Ke([Q()],Fe.prototype,"itemTitleProperty",2);Ke([Q({type:Boolean})],Fe.prototype,"multiple",2);Ke([Q({type:Boolean})],Fe.prototype,"unstyled",2);Ke([Q({type:Boolean})],Fe.prototype,"multiStep",2);Ke([rt()],Fe.prototype,"inputText",2);Ke([rt()],Fe.prototype,"selectedItems",2);Fe=Ke([Ce("eox-autocomplete")],Fe);var ll=Object.defineProperty,cl=Object.getOwnPropertyDescriptor,Je=(t,e,r,i)=>{for(var n=i>1?void 0:i?cl(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&ll(e,r,n),n};let Be=class extends _e{constructor(){super(...arguments),this.filter="",this.idProperty="id",this.items=[],this.titleProperty="title",this.multiple=!1,this.selectedItems=[],this.unstyled=!1,this.noShadow=!1,this._currentHighlight=null,this._keyboardEventListener=t=>{["ArrowDown","ArrowUp","Enter","Escape"].includes(t.code)&&this._handleKeyboard(t.code)}}_handleKeyboard(t){if(this.clientHeight===0)return;const e=this.renderRoot.querySelector("li.highlighted");if(t==="Escape"){this._currentHighlight&&(this._currentHighlight=null);return}if(t==="Enter"){if(e){const s=this.items.find(o=>o[this.idProperty]===e.dataset.identifier);this._handleSelect(s),this.requestUpdate()}return}const r=this.renderRoot.querySelectorAll("li");let i=-1;e&&(delete e.dataset.highlighted,i=Array.from(r).indexOf(e)),t==="ArrowDown"&&(i++,i>r.length-1&&(i=0)),t==="ArrowUp"&&(i--,i<0&&(i=r.length-1));const n=Array.from(r)[i];n&&(this._currentHighlight=this.items.find(s=>s[this.idProperty]===n.dataset.identifier)),this.dispatchEvent(new CustomEvent("items-highlighted",{detail:[this._currentHighlight]}))}_handleSelect(t){if(t)if(this.multiple){const e=this.selectedItems.find(r=>r[this.idProperty]===t[this.idProperty]);e?this.selectedItems.splice(this.selectedItems.indexOf(e),1):this.selectedItems.push(t)}else this.selectedItems=[t];else this.selectedItems=[],this._currentHighlight=null;this._dispatchEvent()}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.selectedItems}))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener)}firstUpdated(){this.getRootNode().addEventListener("keydown",this._keyboardEventListener)}updated(t){t.has("filter")&&(this.filter.length>0?setTimeout(()=>{const e=this.renderRoot.querySelectorAll("li")[0];e&&(this._currentHighlight=this.items.find(r=>r[this.idProperty]===e.dataset.identifier))}):this._currentHighlight=null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return U`
      <style>
        ${Ti}
        :host {
          height: auto;
        }
        ul {
          width: 100%;
        }
        li.highlighted {
          background: lightgrey;
        }
        ${!this.unstyled&&qi}
      </style>
      <ul>
        ${ms(this.items.filter(t=>this.filter?t[this.titleProperty].toLowerCase().includes(this.filter.toLowerCase()):!0),t=>t[this.idProperty],t=>U`
            <li
              class=${this._currentHighlight===t?"highlighted":ae}
              data-identifier=${t[this.idProperty]}
              data-title=${t[this.titleProperty]}
              @mouseenter=${()=>{this._currentHighlight=t}}
              @mouseleave=${()=>{this._currentHighlight=null}}
            >
              <label>
                <input
                  type="${this.multiple?"checkbox":"radio"}"
                  .checked=${!!this.selectedItems.find(e=>e[this.idProperty]===t[this.idProperty])||ae}
                  @change=${()=>this._handleSelect(t)}
                />
                <span class="title"
                  >${t[this.titleProperty]}</span
                >
              </label>
            </li>
          `)}
      </ul>
    `}};Je([Q()],Be.prototype,"filter",2);Je([Q()],Be.prototype,"idProperty",2);Je([Q()],Be.prototype,"items",2);Je([Q()],Be.prototype,"titleProperty",2);Je([Q({type:Boolean})],Be.prototype,"multiple",2);Je([Q()],Be.prototype,"selectedItems",2);Je([Q({type:Boolean})],Be.prototype,"unstyled",2);Je([Q({type:Boolean})],Be.prototype,"noShadow",2);Je([rt()],Be.prototype,"_currentHighlight",2);Be=Je([Ce("eox-selectionlist")],Be);var hl=Object.defineProperty,ul=Object.getOwnPropertyDescriptor,Tr=(t,e,r,i)=>{for(var n=i>1?void 0:i?ul(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&hl(e,r,n),n};let tr=class extends _e{constructor(){super(...arguments),this.inline=!1,this.unstyled=!1}reset(){this.renderRoot.querySelectorAll("input[type='checkbox']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)}),Nt(this.filterObject),this.requestUpdate()}createRenderRoot(){return this}_getItems(){const t="sort"in this.filterObject?this.filterObject.sort:(e,r)=>e.localeCompare(r);return Object.keys(this.filterObject.state).sort(t).map(e=>({id:e,title:e.replace(/^./,e[0].toUpperCase())}))}_getSelectedItems(){return Object.keys(this.filterObject.state).filter(t=>this.filterObject.state[t]).map(t=>({id:t,title:t.replace(/^./,t[0].toUpperCase())}))}_handleSelected(t){var e;Object.keys(this.filterObject.state).forEach(r=>{this.filterObject.state[r]=t.map(i=>i.id).includes(r)}),this.filterObject.stringifiedState=Object.keys(this.filterObject.state).filter(r=>this.filterObject.state[r]).join(", "),((e=this.filterObject.stringifiedState)==null?void 0:e.length)>0&&(this.filterObject.dirty=!0),this.dispatchEvent(new CustomEvent("filter"))}render(){return de(this.filterObject,()=>U`
        ${de(this.inline||Object.keys(this.filterObject.state).length>10,()=>U`
            <eox-autocomplete
              multiple
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${t=>this._handleSelected(t.detail)}
            >
            </eox-autocomplete>
          `,()=>U`
            <eox-selectionlist
              .noShadow=${!this.inline}
              multiple
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${t=>this._handleSelected(t.detail)}
            ></eox-selectionlist>
          `)}
      `)}};Tr([Q()],tr.prototype,"filterObject",2);Tr([Q({type:Boolean})],tr.prototype,"inline",2);Tr([Q({type:Boolean})],tr.prototype,"unstyled",2);tr=Tr([Ce("eox-itemfilter-multiselect")],tr);var dl="Expected a function",Bn=NaN,pl="[object Symbol]",fl=/^\s+|\s+$/g,gl=/^[-+]0x[0-9a-f]+$/i,ml=/^0b[01]+$/i,yl=/^0o[0-7]+$/i,vl=parseInt,bl=typeof Ot=="object"&&Ot&&Ot.Object===Object&&Ot,xl=typeof self=="object"&&self&&self.Object===Object&&self,wl=bl||xl||Function("return this")(),$l=Object.prototype,_l=$l.toString,El=Math.max,Sl=Math.min,fi=function(){return wl.Date.now()};function kl(t,e,r){var i,n,s,o,l,a,h=0,p=!1,f=!1,b=!0;if(typeof t!="function")throw new TypeError(dl);e=Un(e)||0,vi(r)&&(p=!!r.leading,f="maxWait"in r,s=f?El(Un(r.maxWait)||0,e):s,b="trailing"in r?!!r.trailing:b);function y(S){var k=i,L=n;return i=n=void 0,h=S,o=t.apply(L,k),o}function _(S){return h=S,l=setTimeout(q,e),p?y(S):o}function A(S){var k=S-a,L=S-h,H=e-k;return f?Sl(H,s-L):H}function z(S){var k=S-a,L=S-h;return a===void 0||k>=e||k<0||f&&L>=s}function q(){var S=fi();if(z(S))return g(S);l=setTimeout(q,A(S))}function g(S){return l=void 0,b&&i?y(S):(i=n=void 0,o)}function m(){l!==void 0&&clearTimeout(l),h=0,i=a=n=l=void 0}function w(){return l===void 0?o:g(fi())}function E(){var S=fi(),k=z(S);if(i=arguments,n=this,a=S,k){if(l===void 0)return _(a);if(f)return l=setTimeout(q,e),y(a)}return l===void 0&&(l=setTimeout(q,e)),o}return E.cancel=m,E.flush=w,E}function vi(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ml(t){return!!t&&typeof t=="object"}function Al(t){return typeof t=="symbol"||Ml(t)&&_l.call(t)==pl}function Un(t){if(typeof t=="number")return t;if(Al(t))return Bn;if(vi(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=vi(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(fl,"");var r=ml.test(t);return r||yl.test(t)?vl(t.slice(2),r?2:8):gl.test(t)?Bn:+t}var Pl=kl;const Os=ji(Pl);var Ol=Object.defineProperty,Ll=Object.getOwnPropertyDescriptor,Ls=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ll(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&Ol(e,r,n),n};let bi=class extends _e{constructor(){super(...arguments),this.inputHandler=t=>{const[e,r]=t.detail.values;(e!==this.filterObject.state.min||r!=this.filterObject.state.max)&&([this.filterObject.state.min,this.filterObject.state.max]=[e,r],this.filterObject.dirty=!0),this.filterObject.dirty&&(this.filterObject.stringifiedState=`${Lt(e)} - ${Lt(r)}`),this.dispatchEvent(new CustomEvent("filter")),this.requestUpdate()},this.debouncedInputHandler=Os(this.inputHandler,0,{leading:!0})}reset(){Nt(this.filterObject),this.requestUpdate()}createRenderRoot(){return this}render(){return de(this.filterObject,()=>U`
        <div class="range-before">
          ${this.filterObject.format==="date"?Lt.unix(this.filterObject.state.min):this.filterObject.state.min}
        </div>
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min}"
          value2="${this.filterObject.state.max}"
          step="1"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        <div class="range-after">
          ${this.filterObject.format==="date"?Lt.unix(this.filterObject.state.max):this.filterObject.state.max}
        </div>
      `)}};Ls([Q()],bi.prototype,"filterObject",2);bi=Ls([Ce("eox-itemfilter-range")],bi);var Rl=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,Ir=(t,e,r,i)=>{for(var n=i>1?void 0:i?Cl(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&Rl(e,r,n),n};let rr=class extends _e{constructor(){super(...arguments),this.inline=!1,this.unstyled=!1}reset(){this.renderRoot.querySelectorAll("input[type='radio']").forEach(t=>{t instanceof HTMLInputElement&&(t.checked=!1)}),Nt(this.filterObject),this.requestUpdate()}createRenderRoot(){return this}_getItems(){const t="sort"in this.filterObject?this.filterObject.sort:(e,r)=>e.localeCompare(r);return Object.keys(this.filterObject.state).sort(t).map(e=>({id:e,title:e.replace(/^./,e[0].toUpperCase())}))}_getSelectedItems(){return Object.keys(this.filterObject.state).filter(t=>this.filterObject.state[t]).map(t=>({id:t,title:t.replace(/^./,t[0].toUpperCase())}))}_handleSelected(t){var e;Object.keys(this.filterObject.state).forEach(r=>{this.filterObject.state[r]=t.detail.map(i=>i.id).includes(r)}),this.filterObject.stringifiedState=Object.keys(this.filterObject.state).filter(r=>this.filterObject.state[r])[0],((e=this.filterObject.stringifiedState)==null?void 0:e.length)>0&&(this.filterObject.dirty=!0),this.dispatchEvent(new CustomEvent("filter"))}render(){return de(this.filterObject,()=>U`
        ${de(this.inline||Object.keys(this.filterObject.state).length>10,()=>U`
            <eox-autocomplete
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${t=>this._handleSelected(t)}
            >
            </eox-autocomplete>
          `,()=>U`
            <eox-selectionlist
              .noShadow=${!this.inline}
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${t=>this._handleSelected(t)}
            ></eox-selectionlist>
          `)}
      `)}};Ir([Q()],rr.prototype,"filterObject",2);Ir([Q({type:Boolean})],rr.prototype,"inline",2);Ir([Q({type:Boolean})],rr.prototype,"unstyled",2);rr=Ir([Ce("eox-itemfilter-select")],rr);var Se=63710088e-1,Ui={centimeters:Se*100,centimetres:Se*100,degrees:Se/111325,feet:Se*3.28084,inches:Se*39.37,kilometers:Se/1e3,kilometres:Se/1e3,meters:Se,metres:Se,miles:Se/1609.344,millimeters:Se*1e3,millimetres:Se*1e3,nauticalmiles:Se/1852,radians:1,yards:Se*1.0936},jl={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:1/1e3,kilometres:1/1e3,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/Se,yards:1.0936133},xi={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046};function Ie(t,e,r){r===void 0&&(r={});var i={type:"Feature"};return(r.id===0||r.id)&&(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=e||{},i.geometry=t,i}function Dl(t,e,r){switch(t){case"Point":return Ye(e).geometry;case"LineString":return He(e).geometry;case"Polygon":return zi(e).geometry;case"MultiPoint":return Rs(e).geometry;case"MultiLineString":return Yi(e).geometry;case"MultiPolygon":return Cs(e).geometry;default:throw new Error(t+" is invalid")}}function Ye(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Mr(t[0])||!Mr(t[1]))throw new Error("coordinates must contain numbers");var i={type:"Point",coordinates:t};return Ie(i,e,r)}function Tl(t,e,r){return r===void 0&&(r={}),ct(t.map(function(i){return Ye(i,e)}),r)}function zi(t,e,r){r===void 0&&(r={});for(var i=0,n=t;i<n.length;i++){var s=n[i];if(s.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var o=0;o<s[s.length-1].length;o++)if(s[s.length-1][o]!==s[0][o])throw new Error("First and last Position are not equivalent.")}var l={type:"Polygon",coordinates:t};return Ie(l,e,r)}function Il(t,e,r){return r===void 0&&(r={}),ct(t.map(function(i){return zi(i,e)}),r)}function He(t,e,r){if(r===void 0&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");var i={type:"LineString",coordinates:t};return Ie(i,e,r)}function ql(t,e,r){return r===void 0&&(r={}),ct(t.map(function(i){return He(i,e)}),r)}function ct(t,e){e===void 0&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function Yi(t,e,r){r===void 0&&(r={});var i={type:"MultiLineString",coordinates:t};return Ie(i,e,r)}function Rs(t,e,r){r===void 0&&(r={});var i={type:"MultiPoint",coordinates:t};return Ie(i,e,r)}function Cs(t,e,r){r===void 0&&(r={});var i={type:"MultiPolygon",coordinates:t};return Ie(i,e,r)}function Nl(t,e,r){r===void 0&&(r={});var i={type:"GeometryCollection",geometries:t};return Ie(i,e,r)}function Hl(t,e){if(e===void 0&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r}function js(t,e){e===void 0&&(e="kilometers");var r=Ui[e];if(!r)throw new Error(e+" units is invalid");return t*r}function Xi(t,e){e===void 0&&(e="kilometers");var r=Ui[e];if(!r)throw new Error(e+" units is invalid");return t/r}function Fl(t,e){return Ds(Xi(t,e))}function Bl(t){var e=t%360;return e<0&&(e+=360),e}function Ds(t){var e=t%(2*Math.PI);return e*180/Math.PI}function Ul(t){var e=t%360;return e*Math.PI/180}function zl(t,e,r){if(e===void 0&&(e="kilometers"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return js(Xi(t,e),r)}function Yl(t,e,r){if(e===void 0&&(e="meters"),r===void 0&&(r="kilometers"),!(t>=0))throw new Error("area must be a positive number");var i=xi[e];if(!i)throw new Error("invalid original units");var n=xi[r];if(!n)throw new Error("invalid final units");return t/i*n}function Mr(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function Wi(t){return!!t&&t.constructor===Object}function Xl(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(t.length!==4&&t.length!==6)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach(function(e){if(!Mr(e))throw new Error("bbox must only contain numbers")})}function Wl(t){if(!t)throw new Error("id is required");if(["string","number"].indexOf(typeof t)===-1)throw new Error("id must be a number or a string")}const Vl=Object.freeze(Object.defineProperty({__proto__:null,areaFactors:xi,bearingToAzimuth:Bl,convertArea:Yl,convertLength:zl,degreesToRadians:Ul,earthRadius:Se,factors:Ui,feature:Ie,featureCollection:ct,geometry:Dl,geometryCollection:Nl,isNumber:Mr,isObject:Wi,lengthToDegrees:Fl,lengthToRadians:Xi,lineString:He,lineStrings:ql,multiLineString:Yi,multiPoint:Rs,multiPolygon:Cs,point:Ye,points:Tl,polygon:zi,polygons:Il,radiansToDegrees:Ds,radiansToLength:js,round:Hl,unitsFactors:jl,validateBBox:Xl,validateId:Wl},Symbol.toStringTag,{value:"Module"}));function Ts(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return t.geometry.coordinates;if(t.type==="Point")return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Tt(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function It(t){return t.type==="Feature"?t.geometry:t}function De(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var i=Ts(t),n=It(e),s=n.type,o=e.bbox,l=n.coordinates;if(o&&Kl(i,o)===!1)return!1;s==="Polygon"&&(l=[l]);for(var a=!1,h=0;h<l.length&&!a;h++)if(zn(i,l[h][0],r.ignoreBoundary)){for(var p=!1,f=1;f<l[h].length&&!p;)zn(i,l[h][f],!r.ignoreBoundary)&&(p=!0),f++;p||(a=!0)}return a}function zn(t,e,r){var i=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var n=0,s=e.length-1;n<e.length;s=n++){var o=e[n][0],l=e[n][1],a=e[s][0],h=e[s][1],p=t[1]*(o-a)+l*(a-t[0])+h*(t[0]-o)===0&&(o-t[0])*(a-t[0])<=0&&(l-t[1])*(h-t[1])<=0;if(p)return!r;var f=l>t[1]!=h>t[1]&&t[0]<(a-o)*(t[1]-l)/(h-l)+o;f&&(i=!i)}return i}function Kl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}function Ht(t,e,r){if(t!==null)for(var i,n,s,o,l,a,h,p=0,f=0,b,y=t.type,_=y==="FeatureCollection",A=y==="Feature",z=_?t.features.length:1,q=0;q<z;q++){h=_?t.features[q].geometry:A?t.geometry:t,b=h?h.type==="GeometryCollection":!1,l=b?h.geometries.length:1;for(var g=0;g<l;g++){var m=0,w=0;if(o=b?h.geometries[g]:h,o!==null){a=o.coordinates;var E=o.type;switch(p=r&&(E==="Polygon"||E==="MultiPolygon")?1:0,E){case null:break;case"Point":if(e(a,f,q,m,w)===!1)return!1;f++,m++;break;case"LineString":case"MultiPoint":for(i=0;i<a.length;i++){if(e(a[i],f,q,m,w)===!1)return!1;f++,E==="MultiPoint"&&m++}E==="LineString"&&m++;break;case"Polygon":case"MultiLineString":for(i=0;i<a.length;i++){for(n=0;n<a[i].length-p;n++){if(e(a[i][n],f,q,m,w)===!1)return!1;f++}E==="MultiLineString"&&m++,E==="Polygon"&&w++}E==="Polygon"&&m++;break;case"MultiPolygon":for(i=0;i<a.length;i++){for(w=0,n=0;n<a[i].length;n++){for(s=0;s<a[i][n].length-p;s++){if(e(a[i][n][s],f,q,m,w)===!1)return!1;f++}w++}m++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(Ht(o.geometries[i],e,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Jl(t,e,r,i){var n=r;return Ht(t,function(s,o,l,a,h){o===0&&r===void 0?n=s:n=e(n,s,o,l,a,h)},i),n}function Is(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&e(t.features[r].properties,r)!==!1;r++);break;case"Feature":e(t.properties,0);break}}function Gl(t,e,r){var i=r;return Is(t,function(n,s){s===0&&r===void 0?i=n:i=e(i,n,s)}),i}function Ar(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var r=0;r<t.features.length&&e(t.features[r],r)!==!1;r++);}function Ql(t,e,r){var i=r;return Ar(t,function(n,s){s===0&&r===void 0?i=n:i=e(i,n,s)}),i}function Zl(t){var e=[];return Ht(t,function(r){e.push(r)}),e}function Vi(t,e){var r,i,n,s,o,l,a,h,p,f,b=0,y=t.type==="FeatureCollection",_=t.type==="Feature",A=y?t.features.length:1;for(r=0;r<A;r++){for(l=y?t.features[r].geometry:_?t.geometry:t,h=y?t.features[r].properties:_?t.properties:{},p=y?t.features[r].bbox:_?t.bbox:void 0,f=y?t.features[r].id:_?t.id:void 0,a=l?l.type==="GeometryCollection":!1,o=a?l.geometries.length:1,n=0;n<o;n++){if(s=a?l.geometries[n]:l,s===null){if(e(null,b,h,p,f)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,b,h,p,f)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<s.geometries.length;i++)if(e(s.geometries[i],b,h,p,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}b++}}function ec(t,e,r){var i=r;return Vi(t,function(n,s,o,l,a){s===0&&r===void 0?i=n:i=e(i,n,s,o,l,a)}),i}function et(t,e){Vi(t,function(r,i,n,s,o){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Ie(r,n,{bbox:s,id:o}),i,0)===!1?!1:void 0}var a;switch(l){case"MultiPoint":a="Point";break;case"MultiLineString":a="LineString";break;case"MultiPolygon":a="Polygon";break}for(var h=0;h<r.coordinates.length;h++){var p=r.coordinates[h],f={type:a,coordinates:p};if(e(Ie(f,n),i,h)===!1)return!1}})}function tc(t,e,r){var i=r;return et(t,function(n,s,o){s===0&&o===0&&r===void 0?i=n:i=e(i,n,s,o)}),i}function qs(t,e){et(t,function(r,i,n){var s=0;if(r.geometry){var o=r.geometry.type;if(!(o==="Point"||o==="MultiPoint")){var l,a=0,h=0,p=0;if(Ht(r,function(f,b,y,_,A){if(l===void 0||i>a||_>h||A>p){l=f,a=i,h=_,p=A,s=0;return}var z=He([l,f],r.properties);if(e(z,i,n,A,s)===!1)return!1;s++,l=f})===!1)return!1}}})}function rc(t,e,r){var i=r,n=!1;return qs(t,function(s,o,l,a,h){n===!1&&r===void 0?i=s:i=e(i,s,o,l,a,h),n=!0}),i}function Ns(t,e){if(!t)throw new Error("geojson is required");et(t,function(r,i,n){if(r.geometry!==null){var s=r.geometry.type,o=r.geometry.coordinates;switch(s){case"LineString":if(e(r,i,n,0,0)===!1)return!1;break;case"Polygon":for(var l=0;l<o.length;l++)if(e(He(o[l],r.properties),i,n,l)===!1)return!1;break}}})}function ic(t,e,r){var i=r;return Ns(t,function(n,s,o,l){s===0&&r===void 0?i=n:i=e(i,n,s,o,l)}),i}function nc(t,e){if(e=e||{},!Wi(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,s=e.segmentIndex||0,o=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),o=o||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":o=o||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var a=l.coordinates;switch(l.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=a.length+s-1),He([a[s],a[s+1]],o,e);case"Polygon":return n<0&&(n=a.length+n),s<0&&(s=a[n].length+s-1),He([a[n][s],a[n][s+1]],o,e);case"MultiLineString":return i<0&&(i=a.length+i),s<0&&(s=a[i].length+s-1),He([a[i][s],a[i][s+1]],o,e);case"MultiPolygon":return i<0&&(i=a.length+i),n<0&&(n=a[i].length+n),s<0&&(s=a[i][n].length-s-1),He([a[i][n][s],a[i][n][s+1]],o,e)}throw new Error("geojson is invalid")}function sc(t,e){if(e=e||{},!Wi(e))throw new Error("options is invalid");var r=e.featureIndex||0,i=e.multiFeatureIndex||0,n=e.geometryIndex||0,s=e.coordIndex||0,o=e.properties,l;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),o=o||t.features[r].properties,l=t.features[r].geometry;break;case"Feature":o=o||t.properties,l=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":l=t;break;default:throw new Error("geojson is invalid")}if(l===null)return null;var a=l.coordinates;switch(l.type){case"Point":return Ye(a,o,e);case"MultiPoint":return i<0&&(i=a.length+i),Ye(a[i],o,e);case"LineString":return s<0&&(s=a.length+s),Ye(a[s],o,e);case"Polygon":return n<0&&(n=a.length+n),s<0&&(s=a[n].length+s),Ye(a[n][s],o,e);case"MultiLineString":return i<0&&(i=a.length+i),s<0&&(s=a[i].length+s),Ye(a[i][s],o,e);case"MultiPolygon":return i<0&&(i=a.length+i),n<0&&(n=a[i].length+n),s<0&&(s=a[i][n].length-s),Ye(a[i][n][s],o,e)}throw new Error("geojson is invalid")}const oc=Object.freeze(Object.defineProperty({__proto__:null,coordAll:Zl,coordEach:Ht,coordReduce:Jl,featureEach:Ar,featureReduce:Ql,findPoint:sc,findSegment:nc,flattenEach:et,flattenReduce:tc,geomEach:Vi,geomReduce:ec,lineEach:Ns,lineReduce:ic,propEach:Is,propReduce:Gl,segmentEach:qs,segmentReduce:rc},Symbol.toStringTag,{value:"Module"}));function Yn(t){if(!t)throw new Error("geojson is required");var e=[];return et(t,function(r){ac(r,e)}),ct(e)}function ac(t,e){var r=[],i=t.geometry;if(i!==null){switch(i.type){case"Polygon":r=Tt(i);break;case"LineString":r=[Tt(i)]}r.forEach(function(n){var s=lc(n,t.properties);s.forEach(function(o){o.id=e.length,e.push(o)})})}}function lc(t,e){var r=[];return t.reduce(function(i,n){var s=He([i,n],e);return s.bbox=cc(i,n),r.push(s),n}),r}function cc(t,e){var r=t[0],i=t[1],n=e[0],s=e[1],o=r<n?r:n,l=i<s?i:s,a=r>n?r:n,h=i>s?i:s;return[o,l,a,h]}var Ki={exports:{}},Hs={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(Ot,function(){function r(g,m,w,E,S){(function k(L,H,F,D,re){for(;D>F;){if(D-F>600){var G=D-F+1,C=H-F+1,P=Math.log(G),M=.5*Math.exp(2*P/3),I=.5*Math.sqrt(P*M*(G-M)/G)*(C-G/2<0?-1:1),O=Math.max(F,Math.floor(H-C*M/G+I)),K=Math.min(D,Math.floor(H+(G-C)*M/G+I));k(L,H,O,K,re)}var Y=L[H],oe=F,ie=D;for(i(L,F,H),re(L[D],Y)>0&&i(L,F,D);oe<ie;){for(i(L,oe,ie),oe++,ie--;re(L[oe],Y)<0;)oe++;for(;re(L[ie],Y)>0;)ie--}re(L[F],Y)===0?i(L,F,ie):i(L,++ie,D),ie<=H&&(F=ie+1),H<=ie&&(D=ie-1)}})(g,m,w||0,E||g.length-1,S||n)}function i(g,m,w){var E=g[m];g[m]=g[w],g[w]=E}function n(g,m){return g<m?-1:g>m?1:0}var s=function(g){g===void 0&&(g=9),this._maxEntries=Math.max(4,g),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function o(g,m,w){if(!w)return m.indexOf(g);for(var E=0;E<m.length;E++)if(w(g,m[E]))return E;return-1}function l(g,m){a(g,0,g.children.length,m,g)}function a(g,m,w,E,S){S||(S=z(null)),S.minX=1/0,S.minY=1/0,S.maxX=-1/0,S.maxY=-1/0;for(var k=m;k<w;k++){var L=g.children[k];h(S,g.leaf?E(L):L)}return S}function h(g,m){return g.minX=Math.min(g.minX,m.minX),g.minY=Math.min(g.minY,m.minY),g.maxX=Math.max(g.maxX,m.maxX),g.maxY=Math.max(g.maxY,m.maxY),g}function p(g,m){return g.minX-m.minX}function f(g,m){return g.minY-m.minY}function b(g){return(g.maxX-g.minX)*(g.maxY-g.minY)}function y(g){return g.maxX-g.minX+(g.maxY-g.minY)}function _(g,m){return g.minX<=m.minX&&g.minY<=m.minY&&m.maxX<=g.maxX&&m.maxY<=g.maxY}function A(g,m){return m.minX<=g.maxX&&m.minY<=g.maxY&&m.maxX>=g.minX&&m.maxY>=g.minY}function z(g){return{children:g,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function q(g,m,w,E,S){for(var k=[m,w];k.length;)if(!((w=k.pop())-(m=k.pop())<=E)){var L=m+Math.ceil((w-m)/E/2)*E;r(g,L,m,w,S),k.push(m,L,L,w)}}return s.prototype.all=function(){return this._all(this.data,[])},s.prototype.search=function(g){var m=this.data,w=[];if(!A(g,m))return w;for(var E=this.toBBox,S=[];m;){for(var k=0;k<m.children.length;k++){var L=m.children[k],H=m.leaf?E(L):L;A(g,H)&&(m.leaf?w.push(L):_(g,H)?this._all(L,w):S.push(L))}m=S.pop()}return w},s.prototype.collides=function(g){var m=this.data;if(!A(g,m))return!1;for(var w=[];m;){for(var E=0;E<m.children.length;E++){var S=m.children[E],k=m.leaf?this.toBBox(S):S;if(A(g,k)){if(m.leaf||_(g,k))return!0;w.push(S)}}m=w.pop()}return!1},s.prototype.load=function(g){if(!g||!g.length)return this;if(g.length<this._minEntries){for(var m=0;m<g.length;m++)this.insert(g[m]);return this}var w=this._build(g.slice(),0,g.length-1,0);if(this.data.children.length)if(this.data.height===w.height)this._splitRoot(this.data,w);else{if(this.data.height<w.height){var E=this.data;this.data=w,w=E}this._insert(w,this.data.height-w.height-1,!0)}else this.data=w;return this},s.prototype.insert=function(g){return g&&this._insert(g,this.data.height-1),this},s.prototype.clear=function(){return this.data=z([]),this},s.prototype.remove=function(g,m){if(!g)return this;for(var w,E,S,k=this.data,L=this.toBBox(g),H=[],F=[];k||H.length;){if(k||(k=H.pop(),E=H[H.length-1],w=F.pop(),S=!0),k.leaf){var D=o(g,k.children,m);if(D!==-1)return k.children.splice(D,1),H.push(k),this._condense(H),this}S||k.leaf||!_(k,L)?E?(w++,k=E.children[w],S=!1):k=null:(H.push(k),F.push(w),w=0,E=k,k=k.children[0])}return this},s.prototype.toBBox=function(g){return g},s.prototype.compareMinX=function(g,m){return g.minX-m.minX},s.prototype.compareMinY=function(g,m){return g.minY-m.minY},s.prototype.toJSON=function(){return this.data},s.prototype.fromJSON=function(g){return this.data=g,this},s.prototype._all=function(g,m){for(var w=[];g;)g.leaf?m.push.apply(m,g.children):w.push.apply(w,g.children),g=w.pop();return m},s.prototype._build=function(g,m,w,E){var S,k=w-m+1,L=this._maxEntries;if(k<=L)return l(S=z(g.slice(m,w+1)),this.toBBox),S;E||(E=Math.ceil(Math.log(k)/Math.log(L)),L=Math.ceil(k/Math.pow(L,E-1))),(S=z([])).leaf=!1,S.height=E;var H=Math.ceil(k/L),F=H*Math.ceil(Math.sqrt(L));q(g,m,w,F,this.compareMinX);for(var D=m;D<=w;D+=F){var re=Math.min(D+F-1,w);q(g,D,re,H,this.compareMinY);for(var G=D;G<=re;G+=H){var C=Math.min(G+H-1,re);S.children.push(this._build(g,G,C,E-1))}}return l(S,this.toBBox),S},s.prototype._chooseSubtree=function(g,m,w,E){for(;E.push(m),!m.leaf&&E.length-1!==w;){for(var S=1/0,k=1/0,L=void 0,H=0;H<m.children.length;H++){var F=m.children[H],D=b(F),re=(G=g,C=F,(Math.max(C.maxX,G.maxX)-Math.min(C.minX,G.minX))*(Math.max(C.maxY,G.maxY)-Math.min(C.minY,G.minY))-D);re<k?(k=re,S=D<S?D:S,L=F):re===k&&D<S&&(S=D,L=F)}m=L||m.children[0]}var G,C;return m},s.prototype._insert=function(g,m,w){var E=w?g:this.toBBox(g),S=[],k=this._chooseSubtree(E,this.data,m,S);for(k.children.push(g),h(k,E);m>=0&&S[m].children.length>this._maxEntries;)this._split(S,m),m--;this._adjustParentBBoxes(E,S,m)},s.prototype._split=function(g,m){var w=g[m],E=w.children.length,S=this._minEntries;this._chooseSplitAxis(w,S,E);var k=this._chooseSplitIndex(w,S,E),L=z(w.children.splice(k,w.children.length-k));L.height=w.height,L.leaf=w.leaf,l(w,this.toBBox),l(L,this.toBBox),m?g[m-1].children.push(L):this._splitRoot(w,L)},s.prototype._splitRoot=function(g,m){this.data=z([g,m]),this.data.height=g.height+1,this.data.leaf=!1,l(this.data,this.toBBox)},s.prototype._chooseSplitIndex=function(g,m,w){for(var E,S,k,L,H,F,D,re=1/0,G=1/0,C=m;C<=w-m;C++){var P=a(g,0,C,this.toBBox),M=a(g,C,w,this.toBBox),I=(S=P,k=M,L=void 0,H=void 0,F=void 0,D=void 0,L=Math.max(S.minX,k.minX),H=Math.max(S.minY,k.minY),F=Math.min(S.maxX,k.maxX),D=Math.min(S.maxY,k.maxY),Math.max(0,F-L)*Math.max(0,D-H)),O=b(P)+b(M);I<re?(re=I,E=C,G=O<G?O:G):I===re&&O<G&&(G=O,E=C)}return E||w-m},s.prototype._chooseSplitAxis=function(g,m,w){var E=g.leaf?this.compareMinX:p,S=g.leaf?this.compareMinY:f;this._allDistMargin(g,m,w,E)<this._allDistMargin(g,m,w,S)&&g.children.sort(E)},s.prototype._allDistMargin=function(g,m,w,E){g.children.sort(E);for(var S=this.toBBox,k=a(g,0,m,S),L=a(g,w-m,w,S),H=y(k)+y(L),F=m;F<w-m;F++){var D=g.children[F];h(k,g.leaf?S(D):D),H+=y(k)}for(var re=w-m-1;re>=m;re--){var G=g.children[re];h(L,g.leaf?S(G):G),H+=y(L)}return H},s.prototype._adjustParentBBoxes=function(g,m,w){for(var E=w;E>=0;E--)h(m[E],g)},s.prototype._condense=function(g){for(var m=g.length-1,w=void 0;m>=0;m--)g[m].children.length===0?m>0?(w=g[m-1].children).splice(w.indexOf(g[m]),1):this.clear():l(g[m],this.toBBox)},s})})(Hs);var hc=Hs.exports;const uc=Di(Vl),dc=Di(oc);function $t(t){var e=[1/0,1/0,-1/0,-1/0];return Ht(t,function(r){e[0]>r[0]&&(e[0]=r[0]),e[1]>r[1]&&(e[1]=r[1]),e[2]<r[0]&&(e[2]=r[0]),e[3]<r[1]&&(e[3]=r[1])}),e}$t.default=$t;const pc=Object.freeze(Object.defineProperty({__proto__:null,default:$t},Symbol.toStringTag,{value:"Module"})),fc=Di(pc);var ze=hc,Fs=uc,Bs=dc,Mt=fc.default,gc=Bs.featureEach;Bs.coordEach;Fs.polygon;var Xn=Fs.featureCollection;function Us(t){var e=new ze(t);return e.insert=function(r){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:Mt(r),ze.prototype.insert.call(this,r)},e.load=function(r){var i=[];return Array.isArray(r)?r.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:Mt(n),i.push(n)}):gc(r,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:Mt(n),i.push(n)}),ze.prototype.load.call(this,i)},e.remove=function(r,i){if(r.type!=="Feature")throw new Error("invalid feature");return r.bbox=r.bbox?r.bbox:Mt(r),ze.prototype.remove.call(this,r,i)},e.clear=function(){return ze.prototype.clear.call(this)},e.search=function(r){var i=ze.prototype.search.call(this,this.toBBox(r));return Xn(i)},e.collides=function(r){return ze.prototype.collides.call(this,this.toBBox(r))},e.all=function(){var r=ze.prototype.all.call(this);return Xn(r)},e.toJSON=function(){return ze.prototype.toJSON.call(this)},e.fromJSON=function(r){return ze.prototype.fromJSON.call(this,r)},e.toBBox=function(r){var i;if(r.bbox)i=r.bbox;else if(Array.isArray(r)&&r.length===4)i=r;else if(Array.isArray(r)&&r.length===6)i=[r[0],r[1],r[3],r[4]];else if(r.type==="Feature")i=Mt(r);else if(r.type==="FeatureCollection")i=Mt(r);else throw new Error("invalid geojson");return{minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}},e}Ki.exports=Us;Ki.exports.default=Us;var mc=Ki.exports;const yc=ji(mc);function Ji(t,e){var r={},i=[];if(t.type==="LineString"&&(t=Ie(t)),e.type==="LineString"&&(e=Ie(e)),t.type==="Feature"&&e.type==="Feature"&&t.geometry!==null&&e.geometry!==null&&t.geometry.type==="LineString"&&e.geometry.type==="LineString"&&t.geometry.coordinates.length===2&&e.geometry.coordinates.length===2){var n=Wn(t,e);return n&&i.push(n),ct(i)}var s=yc();return s.load(Yn(e)),Ar(Yn(t),function(o){Ar(s.search(o),function(l){var a=Wn(o,l);if(a){var h=Tt(a).join(",");r[h]||(r[h]=!0,i.push(a))}})}),ct(i)}function Wn(t,e){var r=Tt(t),i=Tt(e);if(r.length!==2)throw new Error("<intersects> line1 must only contain 2 coordinates");if(i.length!==2)throw new Error("<intersects> line2 must only contain 2 coordinates");var n=r[0][0],s=r[0][1],o=r[1][0],l=r[1][1],a=i[0][0],h=i[0][1],p=i[1][0],f=i[1][1],b=(f-h)*(o-n)-(p-a)*(l-s),y=(p-a)*(s-h)-(f-h)*(n-a),_=(o-n)*(s-h)-(l-s)*(n-a);if(b===0)return null;var A=y/b,z=_/b;if(A>=0&&A<=1&&z>=0&&z<=1){var q=n+A*(o-n),g=s+A*(l-s);return Ye([q,g])}return null}function wi(t,e){e===void 0&&(e={});var r=It(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),r.type){case"Polygon":return vc(r,e);case"MultiPolygon":return bc(r,e);default:throw new Error("invalid poly")}}function vc(t,e){e===void 0&&(e={});var r=It(t),i=r.coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{};return zs(i,n)}function bc(t,e){e===void 0&&(e={});var r=It(t),i=r.coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return i.forEach(function(o){s.push(zs(o,n))}),ct(s)}function zs(t,e){return t.length>1?Yi(t,e):He(t[0],e)}function xc(t,e){var r=!0;return et(t,function(i){et(e,function(n){if(r===!1)return!1;r=wc(i.geometry,n.geometry)})}),r}function wc(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return!Sc(t.coordinates,e.coordinates);case"LineString":return!Vn(e,t);case"Polygon":return!De(t,e)}break;case"LineString":switch(e.type){case"Point":return!Vn(t,e);case"LineString":return!$c(t,e);case"Polygon":return!Kn(e,t)}break;case"Polygon":switch(e.type){case"Point":return!De(e,t);case"LineString":return!Kn(t,e);case"Polygon":return!_c(e,t)}}return!1}function Vn(t,e){for(var r=0;r<t.coordinates.length-1;r++)if(Ec(t.coordinates[r],t.coordinates[r+1],e.coordinates))return!0;return!1}function $c(t,e){var r=Ji(t,e);return r.features.length>0}function Kn(t,e){for(var r=0,i=e.coordinates;r<i.length;r++){var n=i[r];if(De(n,t))return!0}var s=Ji(e,wi(t));return s.features.length>0}function _c(t,e){for(var r=0,i=t.coordinates[0];r<i.length;r++){var n=i[r];if(De(n,e))return!0}for(var s=0,o=e.coordinates[0];s<o.length;s++){var l=o[s];if(De(l,t))return!0}var a=Ji(wi(t),wi(e));return a.features.length>0}function Ec(t,e,r){var i=r[0]-t[0],n=r[1]-t[1],s=e[0]-t[0],o=e[1]-t[1],l=i*o-n*s;return l!==0?!1:Math.abs(s)>=Math.abs(o)?s>0?t[0]<=r[0]&&r[0]<=e[0]:e[0]<=r[0]&&r[0]<=t[0]:o>0?t[1]<=r[1]&&r[1]<=e[1]:e[1]<=r[1]&&r[1]<=t[1]}function Sc(t,e){return t[0]===e[0]&&t[1]===e[1]}function kc(t,e){var r=!1;return et(t,function(i){et(e,function(n){if(r===!0)return!0;r=!xc(i.geometry,n.geometry)})}),r}function Pr(t,e,r){r===void 0&&(r={});for(var i=Ts(t),n=Tt(e),s=0;s<n.length-1;s++){var o=!1;if(r.ignoreEndVertices&&(s===0&&(o="start"),s===n.length-2&&(o="end"),s===0&&s+1===n.length-1&&(o="both")),Mc(n[s],n[s+1],i,o,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Mc(t,e,r,i,n){var s=r[0],o=r[1],l=t[0],a=t[1],h=e[0],p=e[1],f=r[0]-l,b=r[1]-a,y=h-l,_=p-a,A=f*_-b*y;if(n!==null){if(Math.abs(A)>n)return!1}else if(A!==0)return!1;if(i){if(i==="start")return Math.abs(y)>=Math.abs(_)?y>0?l<s&&s<=h:h<=s&&s<l:_>0?a<o&&o<=p:p<=o&&o<a;if(i==="end")return Math.abs(y)>=Math.abs(_)?y>0?l<=s&&s<h:h<s&&s<=l:_>0?a<=o&&o<p:p<o&&o<=a;if(i==="both")return Math.abs(y)>=Math.abs(_)?y>0?l<s&&s<h:h<s&&s<l:_>0?a<o&&o<p:p<o&&o<a}else return Math.abs(y)>=Math.abs(_)?y>0?l<=s&&s<=h:h<=s&&s<=l:_>0?a<=o&&o<=p:p<=o&&o<=a;return!1}function Ac(t,e){var r=It(t),i=It(e),n=r.type,s=i.type;switch(n){case"Point":switch(s){case"MultiPoint":return Pc(r,i);case"LineString":return Pr(r,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return De(r,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Oc(r,i);case"LineString":return Lc(r,i);case"Polygon":case"MultiPolygon":return Rc(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Cc(r,i);case"Polygon":case"MultiPolygon":return jc(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Dc(r,i);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+n+" geometry not supported")}}function Pc(t,e){var r,i=!1;for(r=0;r<e.coordinates.length;r++)if(Xs(e.coordinates[r],t.coordinates)){i=!0;break}return i}function Oc(t,e){for(var r=0;r<t.coordinates.length;r++){for(var i=!1,n=0;n<e.coordinates.length;n++)Xs(t.coordinates[r],e.coordinates[n])&&(i=!0);if(!i)return!1}return!0}function Lc(t,e){for(var r=!1,i=0;i<t.coordinates.length;i++){if(!Pr(t.coordinates[i],e))return!1;r||(r=Pr(t.coordinates[i],e,{ignoreEndVertices:!0}))}return r}function Rc(t,e){for(var r=!0,i=!1,n=0;n<t.coordinates.length;n++){if(i=De(t.coordinates[1],e),!i){r=!1;break}i=De(t.coordinates[1],e,{ignoreBoundary:!0})}return r&&i}function Cc(t,e){for(var r=0;r<t.coordinates.length;r++)if(!Pr(t.coordinates[r],e))return!1;return!0}function jc(t,e){var r=$t(e),i=$t(t);if(!Ys(r,i))return!1;for(var n=!1,s=0;s<t.coordinates.length-1;s++){if(!De(t.coordinates[s],e))return!1;if(n||(n=De(t.coordinates[s],e,{ignoreBoundary:!0})),!n){var o=Tc(t.coordinates[s],t.coordinates[s+1]);n=De(o,e,{ignoreBoundary:!0})}}return n}function Dc(t,e){var r=$t(t),i=$t(e);if(!Ys(i,r))return!1;for(var n=0;n<t.coordinates[0].length;n++)if(!De(t.coordinates[0][n],e))return!1;return!0}function Ys(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Xs(t,e){return t[0]===e[0]&&t[1]===e[1]}function Tc(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Ic=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,sr=(t,e,r,i)=>{for(var n=i>1?void 0:i?qc(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&Ic(e,r,n),n};const Nc=(t,e)=>e?kc(t,e):!0,Hc=(t,e)=>e?Ac(t,e):!0;let $i=class extends _e{reset(){Nt(this.filterObject),this.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),this.requestUpdate()}createRenderRoot(){return this}render(){return de(this.filterObject,()=>{var t;return U`
      <form style="display: inline">
      ${Vt(["intersects","within"],e=>U`
          <label>
            <input
              type="radio"
              name="mode"
              .checked="${this.filterObject.state.mode===e||ae}
              "
              value="${e}"
              @click="${()=>{this.filterObject.state.mode=e;const r=new CustomEvent("filter",{detail:{[this.filterObject.key]:{}}});this.dispatchEvent(r)}}"
            />
            <small>${e} filter geometry</small>
          </label>
        `)}
      </form>
      <eox-itemfilter-spatial-filter
        exportparts="map: spatial-filter-map"
        .geometry=${(t=this.filterObject.state)==null?void 0:t.geometry}
        @filter="${e=>{this.filterObject.state.geometry=e.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
      ></eox-itemfilter-spatial>
    `})}};sr([Q()],$i.prototype,"filterObject",2);$i=sr([Ce("eox-itemfilter-spatial")],$i);let Or=class extends _e{render(){return U`<eox-map part="map" style="height: 400px"></eox-map>`}firstUpdated(){this.setup()}setup(){const t=[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...this.geometry&&{format:"GeoJSON"},...this.geometry&&{url:this.createFeatureUrl(this.geometry)}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}];this.eoxMap=this.renderRoot.querySelector("eox-map"),setTimeout(()=>{this.eoxMap.layers=t;const e=r=>{const i=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:r.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});this.dispatchEvent(i)};this.eoxMap.interactions.drawInteraction.on("drawend",r=>{e(r.feature),this.eoxMap.removeInteraction("drawInteraction")}),this.eoxMap.interactions.drawInteraction_modify.on("modifyend",r=>{e(r.features.getArray()[0])})},1e3)}createFeatureUrl(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}reset(){var t;const e=this.eoxMap.getLayerById("draw").getSource();((t=e.getFeatures())==null?void 0:t.length)>0&&(e.clear(),this.eoxMap.removeInteraction("drawInteraction_modify"),this.setup())}};sr([Q()],Or.prototype,"geometry",2);sr([rt()],Or.prototype,"eoxMap",2);Or=sr([Ce("eox-itemfilter-spatial-filter")],Or);var Fc=Object.defineProperty,Bc=Object.getOwnPropertyDescriptor,Ws=(t,e,r,i)=>{for(var n=i>1?void 0:i?Bc(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&Fc(e,r,n),n};let _i=class extends _e{constructor(){super(...arguments),this.inputHandler=()=>{const t=this.renderRoot.querySelector("input[type='text']");this.filterObject.keys.forEach(e=>{this.filterObject.state[e]=t.value}),this.filterObject.dirty=!0,this.filterObject.stringifiedState=t.value,this.dispatchEvent(new CustomEvent("filter"))},this.debouncedInputHandler=Os(this.inputHandler,500,{leading:!0})}reset(){const t=this.renderRoot.querySelector("input[type='text']");t.value="",Nt(this.filterObject),this.filterObject.dirty=!1,this.requestUpdate()}createRenderRoot(){return this}render(){return de(this.filterObject,()=>U`
        <style>
          input {
            max-height: 100%;
          }
        </style>
        <input
          type="text"
          placeholder="Type something..."
          data-cy="search"
          part="input-search"
          value="${Object.values(this.filterObject.state)[0]}"
          @input="${this.debouncedInputHandler}"
          @click=${t=>{t.stopPropagation()}}
        />
      `)}};Ws([Q()],_i.prototype,"filterObject",2);_i=Ws([Ce("eox-itemfilter-text")],_i);var Uc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,_t=(t,e,r,i)=>{for(var n=i>1?void 0:i?zc(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&Uc(e,r,n),n};let ht=class extends _e{constructor(){super(...arguments),this.idProperty="id",this.items=[],this.titleProperty="title",this.unstyled=!1,this.inputText="",this.replaceInput=null,this._clickOutsideListener=()=>{this.items.forEach(t=>{delete t._inProgress}),this.requestUpdate()},this._keyboardEventListener=t=>{["Enter","Escape","Space"].includes(t.code)&&this._handleKeyboard(t.code)}}_handleKeyboard(t){var e,r,i,n,s,o;if(this.clientHeight===0)return;const l=this.items.find(f=>f._inProgress),a=(l==null?void 0:l.type)==="text"&&(l==null?void 0:l.dirty),h=this.renderRoot.querySelector("#inline-input"),p=(o=(s=(n=(i=(r=(e=this.renderRoot)==null?void 0:e.querySelector("[data-filter]"))==null?void 0:r.querySelector("eox-autocomplete"))==null?void 0:i.renderRoot)==null?void 0:n.querySelector("eox-selectionlist"))==null?void 0:s.renderRoot)==null?void 0:o.querySelector("li.highlighted");if(t=="Enter"&&p&&h.selectionStart&&(p.querySelector("input[type=checkbox]").dispatchEvent(new Event("change")),h.selectionStart=0,h.value="",h.focus()),["Escape","Space"].includes(t)||t=="Enter"&&a){l&&(delete l._inProgress,this.requestUpdate(),this.inputText="",this.renderRoot.querySelector("input").value="",this.renderRoot.querySelector("input").focus()),this.renderRoot.querySelector("[slot=content]").classList.remove("hidden");return}}_handleReset(t){t.forEach(e=>{Nt(e),delete e._inProgress,delete e.stringifiedState}),this.renderRoot.querySelector("[slot=content]").classList.remove("hidden"),this.requestUpdate(),this.dispatchEvent(new CustomEvent("filter"))}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this._keyboardEventListener),window.addEventListener("click",this._clickOutsideListener)}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this._keyboardEventListener),window.removeEventListener("click",this._clickOutsideListener)}render(){return U`
      <style>
        :host,
        .container {
          display: flex;
        }
        ${this.unstyled?ae:U`
              ${Ii} :host { position: relative; } .container { width: 100%;
              position: relative; border: 1px solid #00417066; border-radius:
              4px; height: 24px; padding: 5px; flex: 1; justify-content:
              space-between; cursor: text; transition: all 0.2s ease-in-out;
              overflow-x: auto; } .container:hover { border: 1px solid #004170;
              } .input-container { display: flex; flex: 1; align-items: center;
              } input, input:focus { height: 100%; border: none; outline: none;
              } .button-container { display: flex; align-items: center;
              justify-content: center; position: absolute; right: 1px; top: 5px;
              height: calc(100% - 10px); width: 34px; background: white; }
              button.icon { color: #004170; height: 24px; font-size: large;
              width: unset; } .container::-webkit-scrollbar { height: 2px; }
              .container::-webkit-scrollbar-thumb { background: lightgrey;
              border-radius: 2px; } .hidden {height: 0; padding: 0; border:
              none;} .hidden:hover {border: none}
            `}
      </style>
      <div
        class="container"
        part="container"
        @click=${t=>{var e;t.stopPropagation(),(e=this.renderRoot.querySelector("input[type=text]"))==null||e.focus()}}
      >
        <eox-itemfilter-chips
          .items=${this.items.filter(t=>t._inProgress||t.stringifiedState)}
          .titleProperty=${this.titleProperty}
          .unstyled=${this.unstyled}
          @items-selected=${t=>{this.items.forEach(e=>{t.detail.find(r=>r.id===e.id)||this._handleReset([e])})}}
          @click=${t=>{t.stopPropagation()}}
        ></eox-itemfilter-chips>
        <div class="input-container">
          <eox-dropdown .parent=${this} .unstyled=${this.unstyled}>
            <input
              id="inline-input"
              slot="trigger"
              type="text"
              placeholder="Type something..."
              @focus=${()=>{this.inputText="",this.requestUpdate()}}
              @input=${t=>{if(this.inputText=t.target.value.toLowerCase(),this.replaceInput){const e=this.renderRoot.querySelector("[data-filter]").renderRoot.querySelector("input")||this.renderRoot.querySelector("[data-filter]").renderRoot.querySelector("eox-autocomplete").renderRoot.querySelector("input");e&&(e.value=this.inputText,e.dispatchEvent(new Event("input")))}}}
            />
            <div slot="content">
              ${de(!this.items.find(t=>t._inProgress),()=>U`
                  <eox-selectionlist
                    .filter=${this.inputText}
                    .idProperty=${this.idProperty}
                    .titleProperty=${this.titleProperty}
                    .items=${this.items.filter(t=>!t.stringifiedState)}
                    .multiple=${!1}
                    .selectedItems=${this.items.filter(t=>t.stringifiedState)}
                    .unstyled=${this.unstyled}
                    @click=${t=>{t.stopPropagation()}}
                    @items-highlighted=${()=>{}}
                    @items-selected=${t=>{const e=t.detail;e.length>0&&(e[e.length-1]._inProgress=!0,this.renderRoot.querySelector("input[slot=trigger]").value="",this.inputText="",this.requestUpdate());const r=this.items.find(i=>i._inProgress);(r&&r.type==="text"||r.type==="multiselect"||r.type==="select")&&(this.replaceInput=!0),this.replaceInput&&(setTimeout(()=>{if(r.type==="text")this.renderRoot.querySelector("[slot=content]").classList.add("hidden");else if(r.type==="multiselect"||r.type==="select"){const i=this.renderRoot.querySelector("[data-filter]").renderRoot.querySelector("eox-autocomplete");i.renderRoot.querySelector("eox-dropdown").open=!0,i.renderRoot.querySelector(".container").classList.add("hidden")}}),this.renderRoot.querySelector("input").select(),this.renderRoot.querySelector("input").focus())}}
                  >
                  </eox-selectionlist>
                `)}
              ${de(this.items.find(t=>t._inProgress),()=>wr`
            <eox-itemfilter-${Pt(this.items.find(t=>t._inProgress).type)}
              data-filter=${this.items.find(t=>t._inProgress).id}
              slot="dropdown"
              .filterObject=${this.items.find(t=>t._inProgress)}
              .unstyled=${this.unstyled}
              .inline=${!0}
              @filter=${()=>{this.dispatchEvent(new CustomEvent("filter"))}}
              @click=${t=>{t.stopPropagation()}}
            ></eox-itemfilter-${Pt(this.items.find(t=>t._inProgress).type)}>
  `)}
            </div>
          </eox-dropdown>
        </div>
      </div>
      ${de(this.items.filter(t=>t.stringifiedState||t._inProgress).length>0,()=>U`
          <div class="button-container">
            <button
              class="icon"
              @click=${()=>{this._handleReset(this.items.filter(t=>t.stringifiedState||t._inProgress))}}
            >
              ✕
            </button>
          </div>
        `)}
    `}};_t([Q()],ht.prototype,"idProperty",2);_t([Q()],ht.prototype,"items",2);_t([Q()],ht.prototype,"titleProperty",2);_t([Q()],ht.prototype,"unstyled",2);_t([rt()],ht.prototype,"inputText",2);_t([rt()],ht.prototype,"replaceInput",2);ht=_t([Ce("eox-itemfilter-inline")],ht);function tt(t){return Array.isArray?Array.isArray(t):Js(t)==="[object Array]"}const Yc=1/0;function Xc(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Yc?"-0":e}function Wc(t){return t==null?"":Xc(t)}function Xe(t){return typeof t=="string"}function Vs(t){return typeof t=="number"}function Vc(t){return t===!0||t===!1||Kc(t)&&Js(t)=="[object Boolean]"}function Ks(t){return typeof t=="object"}function Kc(t){return Ks(t)&&t!==null}function Le(t){return t!=null}function gi(t){return!t.trim().length}function Js(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Jc="Incorrect 'index' type",Gc=t=>`Invalid value for key ${t}`,Qc=t=>`Pattern length exceeds max of ${t}.`,Zc=t=>`Missing ${t} property in key`,eh=t=>`Property 'weight' in key '${t}' must be a positive integer`,Jn=Object.prototype.hasOwnProperty;class th{constructor(e){this._keys=[],this._keyMap={};let r=0;e.forEach(i=>{let n=Gs(i);this._keys.push(n),this._keyMap[n.id]=n,r+=n.weight}),this._keys.forEach(i=>{i.weight/=r})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Gs(t){let e=null,r=null,i=null,n=1,s=null;if(Xe(t)||tt(t))i=t,e=Gn(t),r=Ei(t);else{if(!Jn.call(t,"name"))throw new Error(Zc("name"));const o=t.name;if(i=o,Jn.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(eh(o));e=Gn(o),r=Ei(o),s=t.getFn}return{path:e,id:r,weight:n,src:i,getFn:s}}function Gn(t){return tt(t)?t:t.split(".")}function Ei(t){return tt(t)?t.join("."):t}function rh(t,e){let r=[],i=!1;const n=(s,o,l)=>{if(Le(s))if(!o[l])r.push(s);else{let a=o[l];const h=s[a];if(!Le(h))return;if(l===o.length-1&&(Xe(h)||Vs(h)||Vc(h)))r.push(Wc(h));else if(tt(h)){i=!0;for(let p=0,f=h.length;p<f;p+=1)n(h[p],o,l+1)}else o.length&&n(h,o,l+1)}};return n(t,Xe(e)?e.split("."):e,0),i?r:r[0]}const ih={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},nh={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},sh={location:0,threshold:.6,distance:100},oh={useExtendedSearch:!1,getFn:rh,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var J={...nh,...ih,...sh,...oh};const ah=/[^ ]+/g;function lh(t=1,e=3){const r=new Map,i=Math.pow(10,e);return{get(n){const s=n.match(ah).length;if(r.has(s))return r.get(s);const o=1/Math.pow(s,.5*t),l=parseFloat(Math.round(o*i)/i);return r.set(s,l),l},clear(){r.clear()}}}class Gi{constructor({getFn:e=J.getFn,fieldNormWeight:r=J.fieldNormWeight}={}){this.norm=lh(r,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((r,i)=>{this._keysMap[r.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Xe(this.docs[0])?this.docs.forEach((e,r)=>{this._addString(e,r)}):this.docs.forEach((e,r)=>{this._addObject(e,r)}),this.norm.clear())}add(e){const r=this.size();Xe(e)?this._addString(e,r):this._addObject(e,r)}removeAt(e){this.records.splice(e,1);for(let r=e,i=this.size();r<i;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(e,r){return e[this._keysMap[r]]}size(){return this.records.length}_addString(e,r){if(!Le(e)||gi(e))return;let i={v:e,i:r,n:this.norm.get(e)};this.records.push(i)}_addObject(e,r){let i={i:r,$:{}};this.keys.forEach((n,s)=>{let o=n.getFn?n.getFn(e):this.getFn(e,n.path);if(Le(o)){if(tt(o)){let l=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:h,value:p}=a.pop();if(Le(p))if(Xe(p)&&!gi(p)){let f={v:p,i:h,n:this.norm.get(p)};l.push(f)}else tt(p)&&p.forEach((f,b)=>{a.push({nestedArrIndex:b,value:f})})}i.$[s]=l}else if(Xe(o)&&!gi(o)){let l={v:o,n:this.norm.get(o)};i.$[s]=l}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Qs(t,e,{getFn:r=J.getFn,fieldNormWeight:i=J.fieldNormWeight}={}){const n=new Gi({getFn:r,fieldNormWeight:i});return n.setKeys(t.map(Gs)),n.setSources(e),n.create(),n}function ch(t,{getFn:e=J.getFn,fieldNormWeight:r=J.fieldNormWeight}={}){const{keys:i,records:n}=t,s=new Gi({getFn:e,fieldNormWeight:r});return s.setKeys(i),s.setIndexRecords(n),s}function br(t,{errors:e=0,currentLocation:r=0,expectedLocation:i=0,distance:n=J.distance,ignoreLocation:s=J.ignoreLocation}={}){const o=e/t.length;if(s)return o;const l=Math.abs(i-r);return n?o+l/n:l?1:o}function hh(t=[],e=J.minMatchCharLength){let r=[],i=-1,n=-1,s=0;for(let o=t.length;s<o;s+=1){let l=t[s];l&&i===-1?i=s:!l&&i!==-1&&(n=s-1,n-i+1>=e&&r.push([i,n]),i=-1)}return t[s-1]&&s-i>=e&&r.push([i,s-1]),r}const yt=32;function uh(t,e,r,{location:i=J.location,distance:n=J.distance,threshold:s=J.threshold,findAllMatches:o=J.findAllMatches,minMatchCharLength:l=J.minMatchCharLength,includeMatches:a=J.includeMatches,ignoreLocation:h=J.ignoreLocation}={}){if(e.length>yt)throw new Error(Qc(yt));const p=e.length,f=t.length,b=Math.max(0,Math.min(i,f));let y=s,_=b;const A=l>1||a,z=A?Array(f):[];let q;for(;(q=t.indexOf(e,_))>-1;){let k=br(e,{currentLocation:q,expectedLocation:b,distance:n,ignoreLocation:h});if(y=Math.min(k,y),_=q+p,A){let L=0;for(;L<p;)z[q+L]=1,L+=1}}_=-1;let g=[],m=1,w=p+f;const E=1<<p-1;for(let k=0;k<p;k+=1){let L=0,H=w;for(;L<H;)br(e,{errors:k,currentLocation:b+H,expectedLocation:b,distance:n,ignoreLocation:h})<=y?L=H:w=H,H=Math.floor((w-L)/2+L);w=H;let F=Math.max(1,b-H+1),D=o?f:Math.min(b+H,f)+p,re=Array(D+2);re[D+1]=(1<<k)-1;for(let G=D;G>=F;G-=1){let C=G-1,P=r[t.charAt(C)];if(A&&(z[C]=+!!P),re[G]=(re[G+1]<<1|1)&P,k&&(re[G]|=(g[G+1]|g[G])<<1|1|g[G+1]),re[G]&E&&(m=br(e,{errors:k,currentLocation:C,expectedLocation:b,distance:n,ignoreLocation:h}),m<=y)){if(y=m,_=C,_<=b)break;F=Math.max(1,2*b-_)}}if(br(e,{errors:k+1,currentLocation:b,expectedLocation:b,distance:n,ignoreLocation:h})>y)break;g=re}const S={isMatch:_>=0,score:Math.max(.001,m)};if(A){const k=hh(z,l);k.length?a&&(S.indices=k):S.isMatch=!1}return S}function dh(t){let e={};for(let r=0,i=t.length;r<i;r+=1){const n=t.charAt(r);e[n]=(e[n]||0)|1<<i-r-1}return e}class Zs{constructor(e,{location:r=J.location,threshold:i=J.threshold,distance:n=J.distance,includeMatches:s=J.includeMatches,findAllMatches:o=J.findAllMatches,minMatchCharLength:l=J.minMatchCharLength,isCaseSensitive:a=J.isCaseSensitive,ignoreLocation:h=J.ignoreLocation}={}){if(this.options={location:r,threshold:i,distance:n,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(b,y)=>{this.chunks.push({pattern:b,alphabet:dh(b),startIndex:y})},f=this.pattern.length;if(f>yt){let b=0;const y=f%yt,_=f-y;for(;b<_;)p(this.pattern.substr(b,yt),b),b+=yt;if(y){const A=f-yt;p(this.pattern.substr(A),A)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:r,includeMatches:i}=this.options;if(r||(e=e.toLowerCase()),this.pattern===e){let _={isMatch:!0,score:0};return i&&(_.indices=[[0,e.length-1]]),_}const{location:n,distance:s,threshold:o,findAllMatches:l,minMatchCharLength:a,ignoreLocation:h}=this.options;let p=[],f=0,b=!1;this.chunks.forEach(({pattern:_,alphabet:A,startIndex:z})=>{const{isMatch:q,score:g,indices:m}=uh(e,_,A,{location:n+z,distance:s,threshold:o,findAllMatches:l,minMatchCharLength:a,includeMatches:i,ignoreLocation:h});q&&(b=!0),f+=g,q&&m&&(p=[...p,...m])});let y={isMatch:b,score:b?f/this.chunks.length:1};return b&&i&&(y.indices=p),y}}class ut{constructor(e){this.pattern=e}static isMultiMatch(e){return Qn(e,this.multiRegex)}static isSingleMatch(e){return Qn(e,this.singleRegex)}search(){}}function Qn(t,e){const r=t.match(e);return r?r[1]:null}class ph extends ut{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const r=e===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class fh extends ut{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class gh extends ut{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const r=e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class mh extends ut{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const r=!e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class yh extends ut{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const r=e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class vh extends ut{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const r=!e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class eo extends ut{constructor(e,{location:r=J.location,threshold:i=J.threshold,distance:n=J.distance,includeMatches:s=J.includeMatches,findAllMatches:o=J.findAllMatches,minMatchCharLength:l=J.minMatchCharLength,isCaseSensitive:a=J.isCaseSensitive,ignoreLocation:h=J.ignoreLocation}={}){super(e),this._bitapSearch=new Zs(e,{location:r,threshold:i,distance:n,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class to extends ut{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let r=0,i;const n=[],s=this.pattern.length;for(;(i=e.indexOf(this.pattern,r))>-1;)r=i+s,n.push([i,r-1]);const o=!!n.length;return{isMatch:o,score:o?0:1,indices:n}}}const Si=[ph,to,gh,mh,vh,yh,fh,eo],Zn=Si.length,bh=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,xh="|";function wh(t,e={}){return t.split(xh).map(r=>{let i=r.trim().split(bh).filter(s=>s&&!!s.trim()),n=[];for(let s=0,o=i.length;s<o;s+=1){const l=i[s];let a=!1,h=-1;for(;!a&&++h<Zn;){const p=Si[h];let f=p.isMultiMatch(l);f&&(n.push(new p(f,e)),a=!0)}if(!a)for(h=-1;++h<Zn;){const p=Si[h];let f=p.isSingleMatch(l);if(f){n.push(new p(f,e));break}}}return n})}const $h=new Set([eo.type,to.type]);class _h{constructor(e,{isCaseSensitive:r=J.isCaseSensitive,includeMatches:i=J.includeMatches,minMatchCharLength:n=J.minMatchCharLength,ignoreLocation:s=J.ignoreLocation,findAllMatches:o=J.findAllMatches,location:l=J.location,threshold:a=J.threshold,distance:h=J.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:i,minMatchCharLength:n,findAllMatches:o,ignoreLocation:s,location:l,threshold:a,distance:h},this.pattern=r?e:e.toLowerCase(),this.query=wh(this.pattern,this.options)}static condition(e,r){return r.useExtendedSearch}searchIn(e){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let s=0,o=[],l=0;for(let a=0,h=r.length;a<h;a+=1){const p=r[a];o.length=0,s=0;for(let f=0,b=p.length;f<b;f+=1){const y=p[f],{isMatch:_,indices:A,score:z}=y.search(e);if(_){if(s+=1,l+=z,i){const q=y.constructor.type;$h.has(q)?o=[...o,...A]:o.push(A)}}else{l=0,s=0,o.length=0;break}}if(s){let f={isMatch:!0,score:l/s};return i&&(f.indices=o),f}}return{isMatch:!1,score:1}}}const ki=[];function Eh(...t){ki.push(...t)}function Mi(t,e){for(let r=0,i=ki.length;r<i;r+=1){let n=ki[r];if(n.condition(t,e))return new n(t,e)}return new Zs(t,e)}const Lr={AND:"$and",OR:"$or"},Ai={PATH:"$path",PATTERN:"$val"},Pi=t=>!!(t[Lr.AND]||t[Lr.OR]),Sh=t=>!!t[Ai.PATH],kh=t=>!tt(t)&&Ks(t)&&!Pi(t),es=t=>({[Lr.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function ro(t,e,{auto:r=!0}={}){const i=n=>{let s=Object.keys(n);const o=Sh(n);if(!o&&s.length>1&&!Pi(n))return i(es(n));if(kh(n)){const a=o?n[Ai.PATH]:s[0],h=o?n[Ai.PATTERN]:n[a];if(!Xe(h))throw new Error(Gc(a));const p={keyId:Ei(a),pattern:h};return r&&(p.searcher=Mi(h,e)),p}let l={children:[],operator:s[0]};return s.forEach(a=>{const h=n[a];tt(h)&&h.forEach(p=>{l.children.push(i(p))})}),l};return Pi(t)||(t=es(t)),i(t)}function Mh(t,{ignoreFieldNorm:e=J.ignoreFieldNorm}){t.forEach(r=>{let i=1;r.matches.forEach(({key:n,norm:s,score:o})=>{const l=n?n.weight:null;i*=Math.pow(o===0&&l?Number.EPSILON:o,(l||1)*(e?1:s))}),r.score=i})}function Ah(t,e){const r=t.matches;e.matches=[],Le(r)&&r.forEach(i=>{if(!Le(i.indices)||!i.indices.length)return;const{indices:n,value:s}=i;let o={indices:n,value:s};i.key&&(o.key=i.key.src),i.idx>-1&&(o.refIndex=i.idx),e.matches.push(o)})}function Ph(t,e){e.score=t.score}function Oh(t,e,{includeMatches:r=J.includeMatches,includeScore:i=J.includeScore}={}){const n=[];return r&&n.push(Ah),i&&n.push(Ph),t.map(s=>{const{idx:o}=s,l={item:e[o],refIndex:o};return n.length&&n.forEach(a=>{a(s,l)}),l})}class Ft{constructor(e,r={},i){this.options={...J,...r},this.options.useExtendedSearch,this._keyStore=new th(this.options.keys),this.setCollection(e,i)}setCollection(e,r){if(this._docs=e,r&&!(r instanceof Gi))throw new Error(Jc);this._myIndex=r||Qs(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Le(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const r=[];for(let i=0,n=this._docs.length;i<n;i+=1){const s=this._docs[i];e(s,i)&&(this.removeAt(i),i-=1,n-=1,r.push(s))}return r}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:r=-1}={}){const{includeMatches:i,includeScore:n,shouldSort:s,sortFn:o,ignoreFieldNorm:l}=this.options;let a=Xe(e)?Xe(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Mh(a,{ignoreFieldNorm:l}),s&&a.sort(o),Vs(r)&&r>-1&&(a=a.slice(0,r)),Oh(a,this._docs,{includeMatches:i,includeScore:n})}_searchStringList(e){const r=Mi(e,this.options),{records:i}=this._myIndex,n=[];return i.forEach(({v:s,i:o,n:l})=>{if(!Le(s))return;const{isMatch:a,score:h,indices:p}=r.searchIn(s);a&&n.push({item:s,idx:o,matches:[{score:h,value:s,norm:l,indices:p}]})}),n}_searchLogical(e){const r=ro(e,this.options),i=(l,a,h)=>{if(!l.children){const{keyId:f,searcher:b}=l,y=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(a,f),searcher:b});return y&&y.length?[{idx:h,item:a,matches:y}]:[]}const p=[];for(let f=0,b=l.children.length;f<b;f+=1){const y=l.children[f],_=i(y,a,h);if(_.length)p.push(..._);else if(l.operator===Lr.AND)return[]}return p},n=this._myIndex.records,s={},o=[];return n.forEach(({$:l,i:a})=>{if(Le(l)){let h=i(r,l,a);h.length&&(s[a]||(s[a]={idx:a,item:l,matches:[]},o.push(s[a])),h.forEach(({matches:p})=>{s[a].matches.push(...p)}))}}),o}_searchObjectList(e){const r=Mi(e,this.options),{keys:i,records:n}=this._myIndex,s=[];return n.forEach(({$:o,i:l})=>{if(!Le(o))return;let a=[];i.forEach((h,p)=>{a.push(...this._findMatches({key:h,value:o[p],searcher:r}))}),a.length&&s.push({idx:l,item:o,matches:a})}),s}_findMatches({key:e,value:r,searcher:i}){if(!Le(r))return[];let n=[];if(tt(r))r.forEach(({v:s,i:o,n:l})=>{if(!Le(s))return;const{isMatch:a,score:h,indices:p}=i.searchIn(s);a&&n.push({score:h,key:e,value:s,idx:o,norm:l,indices:p})});else{const{v:s,n:o}=r,{isMatch:l,score:a,indices:h}=i.searchIn(s);l&&n.push({score:a,key:e,value:s,norm:o,indices:h})}return n}}Ft.version="7.0.0";Ft.createIndex=Qs;Ft.parseIndex=ch;Ft.config=J;Ft.parseQuery=ro;Eh(_h);const Lh=(t,e="highlight",r="title")=>{const i=(s,o,l)=>{const a=o.split(".");let h;for(h=0;h<a.length-1;h++)s=s[a[h]];s[a[h]]=l},n=(s,o=[])=>{let l="",a=0;return o.forEach(h=>{const p=h[1]+1;l+=[s.substring(a,h[0]),`<mark class="${e}">`,s.substring(h[0],p),"</mark>"].join(""),a=p}),l+=s.substring(a),l};return t.filter(({matches:s})=>s&&s.length).map(({item:s,matches:o})=>{const l={};for(const[a,h]of Object.entries(s))l[a]=h;return o.forEach(a=>{a.key===r&&i(l,a.key,n(a.value,a.indices))}),l})};let io;const Rh=(t,e)=>{io=new Ft(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Ch=async(t,e,r)=>{const i=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[a,h])=>{const p="$or",f=[],b=(y,_)=>{const A={};h.type==="text"?A[y]=`${_}`:A[a]=`="${y}"`,f.push(A)};return Object.entries(h.state).filter(([,y])=>y).forEach(([y,_])=>b(y,_)),f.length>0&&l.push({[p]:f}),l},[]);let n;if(!(i.length>0)&&r.matchAllWhenEmpty!==!1)n=t;else{const l={$and:[...i]},a=io.search(l);n=r.enableHighlighting?Lh(a,"highlight",r.titleProperty):a.map(h=>h.item)}const s=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[a,h])=>(l[a]={min:h.state.min,max:h.state.max,format:h.format},l),{});if(Object.keys(s).length>0){const l=[];for(let a=0;a<n.length;a++){const h={};for(const[p,f]of Object.entries(s)){const b=y=>f.format==="date"?Lt(y).unix():y;Object.prototype.hasOwnProperty.call(n[a],p)?Array.isArray(n[a][p])?h[p]=s[p].min<=b(n[a][p][1])&&b(n[a][p][0])<=s[p].max:b(n[a][p])>=s[p].min&&b(n[a][p])<=s[p].max?h[p]=!0:h[p]=!1:h[p]=!0}Object.values(h).every(p=>!!p)&&l.push(n[a])}n=[...l]}const o=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[a,h])=>(l[a]={geometry:h.state.geometry,mode:h.state.mode},l),{});if(Object.values(o).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let a=0;a<n.length;a++){const h={};for(const p of Object.keys(o)){const f=o[p].mode||"within";Object.prototype.hasOwnProperty.call(n[a],p)&&(f==="within"?Hc(n[a][p],o[p].geometry):Nc(n[a][p],o[p].geometry))?h[p]=!0:h[p]=!1}Object.values(h).every(p=>!!p)&&l.push(n[a])}n=[...l]}return n},jh=async(t,e,r)=>(await(await fetch(`${r.externalFilter(t,e)}`)).json()).features;var Dh=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,nt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Th(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(n=(i?o(e,r,n):o(n))||n);return i&&n&&Dh(e,r,n),n};class ts{constructor(){this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.filterProperties=[],this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.onFilter=()=>{},this.onSelect=()=>{},this.showResults=!0,this.titleProperty="title",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0}}let Ve=class extends Sa{constructor(){super(...arguments),this._resultAggregation=[],this._items=[],this.filters={},this._config=new ts,this.apply=t=>{this._items=t.map((r,i)=>({id:`item-${i}`,...r})),this._config.filterProperties.length&&this._config.filterProperties.forEach(r=>{const i={},n=s=>r.format==="date"?Lt(s).unix():parseInt(s);this._items.forEach(s=>{if(r.type==="range"){if(Array.isArray(s[r.key])){const o=[n(s[r.key][0]),n(s[r.key][1])];i.min=i.min!==void 0?Math.min(i.min,o[0]):o[0],i.max=i.max!==void 0?Math.max(i.max,o[1]):o[1]}else{const o=n(s[r.key]);i.min=i.min!==void 0?Math.min(i.min,o):o,i.max=i.max!==void 0?Math.max(i.max,o):o}return}Array.isArray(s[r.key])?s[r.key].forEach(o=>{i[o]=void 0}):r.type==="spatial"?(i.geometry=void 0,i.mode=r.mode||"intersects"):i[s[r.key]]=void 0}),this.filters[r.key||r.keys.join("|")]={...r,type:r.type||"multiselect",state:{...i,...r.state},...r.state&&{dirty:!1},...r.type==="range"&&{min:i.min,max:i.max,format:r.format}}}),this._config.matchAllWhenEmpty!==!1&&(this.results=this.sortResults(this._items),this.requestUpdate()),this._config.aggregateResults&&(this._resultAggregation=[...new Set(this._items.reduce((r,i)=>r.concat(i[this._config.aggregateResults]),[]))].sort((r,i)=>r.localeCompare(i)));const e=[];Object.values(this.filters).forEach(r=>{r.type==="text"?r.keys.forEach(i=>{e.includes(i)||e.push(i)}):(r.type==="select"||r.type==="multiselect")&&(e.includes(r.key)||e.push(r.key))}),Rh(this._items,{keys:e,...this._config.fuseConfig}),this.search()}}set items(t){this.apply(t)}get items(){return this._items}set config(t){const e=this._config;this._config={...new ts,...t},this.requestUpdate("config",e)}get config(){return this._config}async search(){let t;this.config.externalFilter?t=await jh(this._items,this.filters,this._config):t=await Ch(this._items,this.filters,this._config),this.results=this.sortResults(t),this._config.onFilter(this.results,this.filters)}aggregateResults(t,e){return t.filter(r=>{const i=r[this._config.aggregateResults];let n;return this.filters[this._config.aggregateResults]&&(n=Object.keys(this.filters[this._config.aggregateResults]).filter(s=>this.filters[this._config.aggregateResults].state[s])),(!(n!=null&&n.length)||n.includes(e))&&Array.isArray(i)?i.includes(e):i===e})}createItemList(t){return U`
      <ul>
        ${ms(this.aggregateResults(this.results,t),e=>e.id,e=>{var r,i;return U`
            <li
              class=${((r=this.selectedResult)==null?void 0:r[this._config.titleProperty])===e[this._config.titleProperty]?"highlighted":ae}
            >
              <label>
                <input
                  data-cy="result-radio"
                  type="radio"
                  class="result-radio"
                  name="result"
                  id="${e.id}"
                  ?checked=${((i=this.selectedResult)==null?void 0:i[this._config.titleProperty])===e[this._config.titleProperty]||ae}
                  @click=${()=>{this.selectedResult=e,this._config.onSelect(e)}}
                />
                ${de(this.hasTemplate("result"),()=>this.renderTemplate("result",e,`result-${e.id}`),()=>U`
                    <span class="title"
                      >${Tn(e[this._config.titleProperty])}</span
                    >
                  `)}
              </label>
            </li>
          `})}
      </ul>
    `}sortResults(t){return[...t].sort((e,r)=>e[this._config.titleProperty].localeCompare(r[this._config.titleProperty]))}resetFilters(){this.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{t.reset()}),this.search()}toggleAccordion(t){let e;if(t.detail?e=t.detail.target:e=t.target,e.classList.contains("details-filter")){if(!e.open||this.config.expandMultipleFilters)return;this.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const i=r.shadowRoot.querySelector(".details-filter");i&&i!==e&&i.removeAttribute("open")})}else{if(!e.open||this.config.expandMultipleResults)return;this.shadowRoot.querySelectorAll("details").forEach(r=>{r!==e&&r.removeAttribute("open")})}}render(){return U`
      <style>
        ${Ti}
        ${!this.unstyled&&qi}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        @submit="${t=>t.preventDefault()}"
      >
        ${de(this._config.inlineMode,()=>U`
            <eox-itemfilter-inline
              .items=${Object.values(this.filters)}
              .unstyled=${this.unstyled}
              @filter=${()=>this.search()}
            >
            </eox-itemfilter-inline>
          `,()=>U`
            ${de(this._config.filterProperties.length,()=>U`
                <section
                  class="${this.config.inlineMode?"inline":ae}"
                >
                  ${de(!this.config.inlineMode,()=>U`
                        <slot name="filterstitle"
                          ><h4 style="margin-top: 8px">Filters</h4></slot
                        >
                      `)}
                  <ul id="filters">
                    ${Vt(Object.values(this.filters),t=>wr`
                    <li>
                      ${t.featured?wr`
                            <eox-itemfilter-${Pt(t.type)}
                              slot="filter"
                              data-type="filter"
                              .filterObject=${t}
                              .unstyled=${this.unstyled}
                              @filter="${()=>this.search()}"
                            ></eox-itemfilter-${Pt(t.type)}>
                          `:wr`
                            <eox-itemfilter-expandcontainer
                              .filterObject=${t}
                              .unstyled=${this.unstyled}
                              @details-toggled=${this.toggleAccordion}
                            >
                            ${de(t.dirty,()=>U`
                                <button
                                  slot="reset-button"
                                  class="reset-icon icon"
                                  @click=${e=>{e.target.parentElement.querySelector("[slot=filter]").reset(),this.search(),this.requestUpdate()}}
                                >
                                  ${this.unstyled?"Reset":ae}
                                </button>
                              `)}
                              <eox-itemfilter-${Pt(t.type)}
                                slot="filter"
                                data-type="filter"
                                data-filter="${t.key}"
                                .filterObject=${t}
                                .unstyled=${this.unstyled}
                                @filter="${()=>this.search()}"
                              ></eox-itemfilter-${Pt(t.type)}>
                            </eox-itemfilter-expandcontainer>
                        `}
                    </li>
                  `)}
                  </ul>
                  ${de(this._config.filterProperties&&Object.values(this.filters).map(t=>t.dirty).filter(t=>t).length>0,()=>U`
                    <button
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
                </section>
              `)}
            ${de(this.config.showResults&&this.results,()=>U`
                <section id="section-results">
                  <div>
                    <slot name="resultstitle"
                      ><h4 style="margin-top: 8px">Results</h4></slot
                    >
                  </div>
                  <div id="container-results" class="scroll">
                    ${this.results.length<1?U`
                          <small class="no-results">No matching items</small>
                        `:ae}
                    <ul id="results" part="results">
                      ${this._config.aggregateResults?Vt(this._resultAggregation.filter(t=>this.aggregateResults(this.results,t).length),t=>U` ${de(this.aggregateResults(this.results,t).length===1&&this.config.autoSpreadSingle,()=>U` <div style="margin-left: -8px">
                                  ${this.createItemList(t)}
                                </div>`,()=>U`
                                  <details
                                    class="details-results"
                                    @toggle=${this.toggleAccordion}
                                    ?open=${this._config.expandResults||ae}
                                  >
                                    <summary>
                                      <span class="title">
                                        ${t}
                                        <span class="count"
                                          >${this.aggregateResults(this.results,t).length}</span
                                        >
                                      </span>
                                    </summary>
                                    <div>
                                      ${this.createItemList(t)}
                                    </div>
                                  </details>
                                `)}`):Vt(this.results,t=>U`<li part="result">
                                <label>
                                  <input
                                    type="radio"
                                    name="result"
                                    id="${t.id}"
                                    @click=${()=>{this.selectedResult=t,this._config.onSelect(t)}}
                                  />
                                  ${de(this.hasTemplate("result"),()=>this.renderTemplate("result",t,`result-${t.id}`),()=>U`
                                      <span class="title"
                                        >${Tn(t[this._config.titleProperty])}</span
                                      >
                                    `)}
                                </label>
                              </li>`)}
                    </ul>
                  </div>
                </section>
              `)}
          `)}
      </form>
    `}};nt([rt()],Ve.prototype,"filters",2);nt([rt()],Ve.prototype,"results",2);nt([rt()],Ve.prototype,"selectedResult",2);nt([Q({attribute:!1})],Ve.prototype,"items",1);nt([Q({attribute:!1})],Ve.prototype,"config",1);nt([Q()],Ve.prototype,"apply",2);nt([Q({attribute:!1})],Ve.prototype,"styleOverride",2);nt([Q({type:Boolean})],Ve.prototype,"unstyled",2);Ve=nt([Ce("eox-itemfilter")],Ve);export{Ve as EOxItemFilter,ts as ElementConfig};
