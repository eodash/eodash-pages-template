import{e as x,U as O,y as M,H as A,Y as E,z as P,ai as Fe,c as B,L as V,i as U,f as ee,ap as Ye,X as c,ag as We,R as Ke,j as _e,q as Ce,m as j,b as v,aq as te,W as Ue,ar as ke,_ as De,n as ae,g as le,as as Qe,v as Je,at as we,T as Ze,au as et,av as tt,aw as at,M as w,w as lt,ax as st,ay as nt,a9 as it,F as ot,I as rt,$ as ut,J as D,az as ct,aA as dt,aB as Q,aC as ve,s as vt,x as pt,am as mt,aD as pe}from"./eo-dash.CJQlP1zQ.js";import{k as xe,y as Se,S as se,x as $e,h as Be,B as ne,$ as X,N as me,i as gt}from"./color-DpYEub1f.B6BIu_Db.js";import{S as ft,v as ht,b as W}from"./dimensions-CJaGeSrj.BBo83LG3.js";const yt=["top","bottom"],bt=["start","end","left","right"];function _t(e,t){let[a,l]=e.split(" ");return l||(l=Q(yt,a)?"start":Q(bt,a)?"top":"center"),{side:ge(a,t),align:ge(l,t)}}function ge(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const Ct=[null,"default","comfortable","compact"],Le=x({density:{type:String,default:"default",validator:e=>Ct.includes(e)}},"density");function Te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const kt=["elevated","flat","tonal","outlined","text","plain"];function wt(e,t){return v(ut,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ie=x({color:String,variant:{type:String,default:"elevated",validator:e=>kt.includes(e)}},"variant");function xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();const a=c(()=>{const{variant:n}=D(e);return`${t}--variant-${n}`}),{colorClasses:l,colorStyles:s}=gt(c(()=>{const{variant:n,color:o}=D(e);return{[["elevated","flat"].includes(n)?"background":"text"]:o}}));return{colorClasses:l,colorStyles:s,variantClasses:a}}const Ee=x({divided:Boolean,...xe(),...O(),...Le(),...Se(),...se(),...M(),...A(),...Ie()},"VBtnGroup"),fe=E()({name:"VBtnGroup",props:Ee(),setup(e,t){let{slots:a}=t;const{themeClasses:l}=P(e),{densityClasses:s}=Te(e),{borderClasses:n}=$e(e),{elevationClasses:o}=Be(e),{roundedClasses:r}=ne(e);Fe({VBtn:{height:"auto",color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),V(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},l.value,n.value,s.value,o.value,r.value,e.class],style:e.style},a))}}),St=x({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),$t=x({value:null,disabled:Boolean,selectedClass:String},"group-item");function Bt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const l=te("useGroupItem");if(!l)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Ue();ke(Symbol.for(`${t.description}:id`),s);const n=De(t,null);if(!n){if(!a)return n;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const o=B(e,"value"),r=c(()=>!!(n.disabled.value||e.disabled));n.register({id:s,value:o,disabled:r},l),ae(()=>{n.unregister(s)});const p=c(()=>n.isSelected(s)),y=c(()=>p.value&&[n.selectedClass.value,e.selectedClass]);return le(p,h=>{l.emit("group:selected",{value:h})},{flush:"sync"}),{id:s,isSelected:p,toggle:()=>n.select(s,!p.value),select:h=>n.select(s,h),selectedClass:y,value:o,disabled:r,group:n}}function Lt(e,t){let a=!1;const l=Qe([]),s=_e(e,"modelValue",[],i=>i==null?[]:Ve(l,pt(i)),i=>{const u=It(l,i);return e.multiple?u:u[0]}),n=te("useGroup");function o(i,u){const f=i,m=Symbol.for(`${t.description}:id`),b=ct(m,n==null?void 0:n.vnode).indexOf(u);D(f.value)==null&&(f.value=b),b>-1?l.splice(b,0,f):l.push(f)}function r(i){if(a)return;p();const u=l.findIndex(f=>f.id===i);l.splice(u,1)}function p(){const i=l.find(u=>!u.disabled);i&&e.mandatory==="force"&&!s.value.length&&(s.value=[i.id])}Je(()=>{p()}),ae(()=>{a=!0});function y(i,u){const f=l.find(m=>m.id===i);if(!(u&&(f!=null&&f.disabled)))if(e.multiple){const m=s.value.slice(),b=m.findIndex(d=>d===i),k=~b;if(u=u??!k,k&&e.mandatory&&m.length<=1||!k&&e.max!=null&&m.length+1>e.max)return;b<0&&u?m.push(i):b>=0&&!u&&m.splice(b,1),s.value=m}else{const m=s.value.includes(i);if(e.mandatory&&m)return;s.value=u??!m?[i]:[]}}function h(i){if(e.multiple&&dt('This method is not supported when using "multiple" prop'),s.value.length){const u=s.value[0],f=l.findIndex(k=>k.id===u);let m=(f+i)%l.length,b=l[m];for(;b.disabled&&m!==f;)m=(m+i)%l.length,b=l[m];if(b.disabled)return;s.value=[l[m].id]}else{const u=l.find(f=>!f.disabled);u&&(s.value=[u.id])}}const g={register:o,unregister:r,selected:s,select:y,disabled:B(e,"disabled"),prev:()=>h(l.length-1),next:()=>h(1),isSelected:i=>s.value.includes(i),selectedClass:c(()=>e.selectedClass),items:c(()=>l),getItemIndex:i=>Tt(l,i)};return ke(t,g),g}function Tt(e,t){const a=Ve(e,[t]);return a.length?e.findIndex(l=>l.id===a[0]):-1}function Ve(e,t){const a=[];return t.forEach(l=>{const s=e.find(o=>we(l,o.value)),n=e[l];(s==null?void 0:s.value)!=null?a.push(s.id):n!=null&&a.push(n.id)}),a}function It(e,t){const a=[];return t.forEach(l=>{const s=e.findIndex(n=>n.id===l);if(~s){const n=e[s];a.push(n.value!=null?n.value:s)}}),a}const ze=Symbol.for("vuetify:v-btn-toggle"),Et=x({...Ee(),...St()},"VBtnToggle");E()({name:"VBtnToggle",props:Et(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:l,next:s,prev:n,select:o,selected:r}=Lt(e,ze);return V(()=>{const p=fe.filterProps(e);return v(fe,Ze({class:["v-btn-toggle",e.class]},p,{style:e.style}),{default:()=>{var y;return[(y=a.default)==null?void 0:y.call(a,{isSelected:l,next:s,prev:n,select:o,selected:r})]}})}),{next:s,prev:n,select:o}}});const Vt=["x-small","small","default","large","x-large"],ie=x({size:{type:[String,Number],default:"default"}},"size");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();return et(()=>{let a,l;return Q(Vt,e.size)?a=`${t}--size-${e.size}`:e.size&&(l={width:w(e.size),height:w(e.size)}),{sizeClasses:a,sizeStyles:l}})}const zt=x({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:U,...O(),...ie(),...M({tag:"i"}),...A()},"VIcon"),K=E()({name:"VIcon",props:zt(),setup(e,t){let{attrs:a,slots:l}=t;const s=ee(),{themeClasses:n}=P(e),{iconData:o}=Ye(c(()=>s.value||e.icon)),{sizeClasses:r}=oe(e),{textColorClasses:p,textColorStyles:y}=X(B(e,"color"));return V(()=>{var i,u;const h=(i=l.default)==null?void 0:i.call(l);h&&(s.value=(u=tt(h).filter(f=>f.type===at&&f.children&&typeof f.children=="string")[0])==null?void 0:u.children);const g=!!(a.onClick||a.onClickOnce);return v(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",n.value,r.value,p.value,{"v-icon--clickable":g,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:w(e.size),height:w(e.size),width:w(e.size)},y.value,e.style],role:g?"button":void 0,"aria-hidden":!g,tabindex:g?e.disabled?-1:0:void 0},{default:()=>[h]})}),{}}});function Ne(e,t){const a=ee(),l=lt(!1);if(st){const s=new IntersectionObserver(n=>{e==null||e(n,s),l.value=!!n.find(o=>o.isIntersecting)},t);ae(()=>{s.disconnect()}),le(a,(n,o)=>{o&&(s.unobserve(o),l.value=!1),n&&s.observe(n)},{flush:"post"})}return{intersectionRef:a,isIntersecting:l}}const Nt=x({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...O(),...ie(),...M({tag:"div"}),...A()},"VProgressCircular"),Rt=E()({name:"VProgressCircular",props:Nt(),setup(e,t){let{slots:a}=t;const l=20,s=2*Math.PI*l,n=ee(),{themeClasses:o}=P(e),{sizeClasses:r,sizeStyles:p}=oe(e),{textColorClasses:y,textColorStyles:h}=X(B(e,"color")),{textColorClasses:g,textColorStyles:i}=X(B(e,"bgColor")),{intersectionRef:u,isIntersecting:f}=Ne(),{resizeRef:m,contentRect:b}=We(),k=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),d=c(()=>Number(e.width)),_=c(()=>p.value?Number(e.size):b.value?b.value.width:Math.max(d.value,32)),L=c(()=>l/(1-d.value/_.value)*2),$=c(()=>d.value/_.value*L.value),z=c(()=>w((100-k.value)/100*s));return Ke(()=>{u.value=n.value,m.value=n.value}),V(()=>v(e.tag,{ref:n,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":f.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,r.value,y.value,e.class],style:[p.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:k.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${L.value} ${L.value}`},[v("circle",{class:["v-progress-circular__underlay",g.value],style:i.value,fill:"transparent",cx:"50%",cy:"50%",r:l,"stroke-width":$.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:l,"stroke-width":$.value,"stroke-dasharray":s,"stroke-dashoffset":z.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:k.value})])]})),{}}}),he={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Re=x({location:String},"location");function Oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:l}=Ce();return{locationStyles:c(()=>{if(!e.location)return{};const{side:s,align:n}=_t(e.location.split(" ").length>1?e.location:`${e.location} center`,l.value);function o(p){return a?a(p):0}const r={};return s!=="center"&&(t?r[he[s]]=`calc(100% - ${o(s)}px)`:r[s]=0),n!=="center"?t?r[he[n]]=`calc(100% - ${o(n)}px)`:r[n]=0:(s==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),r})}}const Ot=x({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...O(),...Re({location:"top"}),...se(),...M(),...A()},"VProgressLinear"),Mt=E()({name:"VProgressLinear",props:Ot(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const l=_e(e,"modelValue"),{isRtl:s,rtlClasses:n}=Ce(),{themeClasses:o}=P(e),{locationStyles:r}=Oe(e),{textColorClasses:p,textColorStyles:y}=X(e,"color"),{backgroundColorClasses:h,backgroundColorStyles:g}=me(c(()=>e.bgColor||e.color)),{backgroundColorClasses:i,backgroundColorStyles:u}=me(e,"color"),{roundedClasses:f}=ne(e),{intersectionRef:m,isIntersecting:b}=Ne(),k=c(()=>parseInt(e.max,10)),d=c(()=>parseInt(e.height,10)),_=c(()=>parseFloat(e.bufferValue)/k.value*100),L=c(()=>parseFloat(l.value)/k.value*100),$=c(()=>s.value!==e.reverse),z=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),q=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function F(C){if(!m.value)return;const{left:T,right:Y,width:I}=m.value.getBoundingClientRect(),H=$.value?I-C.clientX+(Y-I):C.clientX-T;l.value=Math.round(H/I*k.value)}return V(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&b.value,"v-progress-linear--reverse":$.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},f.value,o.value,n.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?w(d.value):0,"--v-progress-linear-height":w(d.value),...r.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:L.value,onClick:e.clickable&&F},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",p.value],style:{...y.value,[$.value?"left":"right"]:w(-d.value),borderTop:`${w(d.value/2)} dotted`,opacity:q.value,top:`calc(50% - ${w(d.value/4)})`,width:w(100-_.value,"%"),"--v-progress-linear-stream-to":w(d.value*($.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",h.value],style:[g.value,{opacity:q.value,width:w(e.stream?_.value:100,"%")}]},null),v(nt,{name:z.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(C=>v("div",{key:C,class:["v-progress-linear__indeterminate",C,i.value],style:u.value},null))]):v("div",{class:["v-progress-linear__determinate",i.value],style:[u.value,{width:w(L.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:L.value,buffer:_.value})])]})),{}}}),At=x({loading:[Boolean,String]},"loader");function Pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function la(e,t){var l;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((l=a.default)==null?void 0:l.call(a,{color:e.color,isActive:e.active}))||v(Mt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const jt=["static","relative","fixed","absolute","sticky"],qt=x({position:{type:String,validator:e=>jt.includes(e)}},"position");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function Xt(){const e=te("useRoute");return c(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Gt(e,t){var y,h;const a=it("RouterLink"),l=c(()=>!!(e.href||e.to)),s=c(()=>(l==null?void 0:l.value)||ve(t,"click")||ve(e,"click"));if(typeof a=="string"||!("useLink"in a))return{isLink:l,isClickable:s,href:B(e,"href")};const n=c(()=>({...e,to:B(()=>e.to||{})})),o=a.useLink(n.value),r=c(()=>e.to?o:void 0),p=Xt();return{isLink:l,isClickable:s,route:(y=r.value)==null?void 0:y.route,navigate:(h=r.value)==null?void 0:h.navigate,isActive:c(()=>{var g,i,u;return r.value?e.exact?p.value?((g=r.value.isExactActive)==null?void 0:g.value)&&we(r.value.route.value.query,p.value.query):((i=r.value.isExactActive)==null?void 0:i.value)??!1:((u=r.value.isActive)==null?void 0:u.value)??!1:!1}),href:c(()=>{var g;return e.to?(g=r.value)==null?void 0:g.route.value.href:e.href})}}const Ft=x({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Yt(e,t){le(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&vt(()=>{t(!0)})},{immediate:!0})}const J=Symbol("rippleStop"),Wt=80;function ye(e,t){e.style.transform=t,e.style.webkitTransform=t}function Z(e){return e.constructor.name==="TouchEvent"}function Me(e){return e.constructor.name==="KeyboardEvent"}const Kt=function(e,t){var g;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=0,s=0;if(!Me(e)){const i=t.getBoundingClientRect(),u=Z(e)?e.touches[e.touches.length-1]:e;l=u.clientX-i.left,s=u.clientY-i.top}let n=0,o=.3;(g=t._ripple)!=null&&g.circle?(o=.15,n=t.clientWidth/2,n=a.center?n:n+Math.sqrt((l-n)**2+(s-n)**2)/4):n=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-n*2)/2}px`,p=`${(t.clientHeight-n*2)/2}px`,y=a.center?r:`${l-n}px`,h=a.center?p:`${s-n}px`;return{radius:n,scale:o,x:y,y:h,centerX:r,centerY:p}},G={show(e,t){var u;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=t==null?void 0:t._ripple)!=null&&u.enabled))return;const l=document.createElement("span"),s=document.createElement("span");l.appendChild(s),l.className="v-ripple__container",a.class&&(l.className+=` ${a.class}`);const{radius:n,scale:o,x:r,y:p,centerX:y,centerY:h}=Kt(e,t,a),g=`${n*2}px`;s.className="v-ripple__animation",s.style.width=g,s.style.height=g,t.appendChild(l);const i=window.getComputedStyle(t);i&&i.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ye(s,`translate(${r}, ${p}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ye(s,`translate(${y}, ${h}) scale3d(1,1,1)`)},0)},hide(e){var n;if(!((n=e==null?void 0:e._ripple)!=null&&n.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const l=performance.now()-Number(a.dataset.activated),s=Math.max(250-l,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=a.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function Ae(e){return typeof e>"u"||!!e}function N(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[J])){if(e[J]=!0,Z(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Me(e),a._ripple.class&&(t.class=a._ripple.class),Z(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{G.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var l;(l=a==null?void 0:a._ripple)!=null&&l.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Wt)}else G.show(e,a,t)}}function be(e){e[J]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),G.hide(t)}}function Pe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let R=!1;function je(e){!R&&(e.keyCode===pe.enter||e.keyCode===pe.space)&&(R=!0,N(e))}function qe(e){R=!1,S(e)}function He(e){R&&(R=!1,S(e))}function Xe(e,t,a){const{value:l,modifiers:s}=t,n=Ae(l);if(n||G.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=n,e._ripple.centered=s.center,e._ripple.circle=s.circle,mt(l)&&l.class&&(e._ripple.class=l.class),n&&!a){if(s.stop){e.addEventListener("touchstart",be,{passive:!0}),e.addEventListener("mousedown",be);return}e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",Pe,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",N),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",je),e.addEventListener("keyup",qe),e.addEventListener("blur",He),e.addEventListener("dragstart",S,{passive:!0})}else!n&&a&&Ge(e)}function Ge(e){e.removeEventListener("mousedown",N),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",Pe),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",je),e.removeEventListener("keyup",qe),e.removeEventListener("dragstart",S),e.removeEventListener("blur",He)}function Ut(e,t){Xe(e,t,!1)}function Dt(e){delete e._ripple,Ge(e)}function Qt(e,t){if(t.value===t.oldValue)return;const a=Ae(t.oldValue);Xe(e,t,a)}const Jt={mounted:Ut,unmounted:Dt,updated:Qt},Zt=x({active:{type:Boolean,default:void 0},symbol:{type:null,default:ze},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:U,appendIcon:U,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...xe(),...O(),...Le(),...ft(),...Se(),...$t(),...At(),...Re(),...qt(),...se(),...Ft(),...ie(),...M({tag:"button"}),...A(),...Ie({variant:"elevated"})},"VBtn"),sa=E()({name:"VBtn",directives:{Ripple:Jt},props:Zt(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:l}=t;const{themeClasses:s}=P(e),{borderClasses:n}=$e(e),{colorClasses:o,colorStyles:r,variantClasses:p}=xt(e),{densityClasses:y}=Te(e),{dimensionStyles:h}=ht(e),{elevationClasses:g}=Be(e),{loaderClasses:i}=Pt(e),{locationStyles:u}=Oe(e),{positionClasses:f}=Ht(e),{roundedClasses:m}=ne(e),{sizeClasses:b,sizeStyles:k}=oe(e),d=Bt(e,e.symbol,!1),_=Gt(e,a),L=c(()=>{var C;return e.active!==void 0?e.active:_.isLink.value?(C=_.isActive)==null?void 0:C.value:d==null?void 0:d.isSelected.value}),$=c(()=>(d==null?void 0:d.disabled.value)||e.disabled),z=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),q=c(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function F(C){var T;$.value||_.isLink.value&&(C.metaKey||C.ctrlKey||C.shiftKey||C.button!==0||a.target==="_blank")||((T=_.navigate)==null||T.call(_,C),d==null||d.toggle())}return Yt(_,d==null?void 0:d.select),V(()=>{var re,ue;const C=_.isLink.value?"a":e.tag,T=!!(e.prependIcon||l.prepend),Y=!!(e.appendIcon||l.append),I=!!(e.icon&&e.icon!==!0),H=(d==null?void 0:d.isSelected.value)&&(!_.isLink.value||((re=_.isActive)==null?void 0:re.value))||!d||((ue=_.isActive)==null?void 0:ue.value);return ot(v(C,{type:C==="a"?void 0:"button",class:["v-btn",d==null?void 0:d.selectedClass.value,{"v-btn--active":L.value,"v-btn--block":e.block,"v-btn--disabled":$.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,n.value,H?o.value:void 0,y.value,g.value,i.value,f.value,m.value,b.value,p.value,e.class],style:[H?r.value:void 0,h.value,u.value,k.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:$.value||void 0,href:_.href.value,tabindex:e.loading?-1:void 0,onClick:F,value:q.value},{default:()=>{var ce;return[wt(!0,"v-btn"),!e.icon&&T&&v("span",{key:"prepend",class:"v-btn__prepend"},[l.prepend?v(W,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},l.prepend):v(K,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!l.default&&I?v(K,{key:"content-icon",icon:e.icon},null):v(W,{key:"content-defaults",disabled:!I,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var de;return[((de=l.default)==null?void 0:de.call(l))??e.text]}})]),!e.icon&&Y&&v("span",{key:"append",class:"v-btn__append"},[l.append?v(W,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},l.append):v(K,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((ce=l.loader)==null?void 0:ce.call(l))??v(Rt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[rt("ripple"),!$.value&&e.ripple,null]])}),{group:d}}});export{Ht as A,qt as O,Re as P,la as Q,At as R,Le as S,Oe as T,K as W,Lt as a,sa as e,Zt as j,St as k,Te as x,Pt as z};