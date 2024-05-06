import{_ as A,a0 as C,a2 as b,f as L,an as $,ao as E,v as s,O as i,aj as l,a5 as x,P as e,ap as f,a as p,a9 as k,A as w,k as v,R as M,a4 as I,aa as R,aq as T}from"./eo-dash.Cm0CqHOb.js";import{e as H,W as z}from"./VBtn-CFPhsIX8.DvuIByEU.js";import{V as O}from"./VMain-deI9jyIf.aTrVZfNZ.js";import"./framework.D70SpYoC.js";import"./color-D72nEBIR.BED735IS.js";import"./dimensions-BZkmIizV.kbyuNzCI.js";import"./ssrBoot-Cm5pWM14.B5KHkoYg.js";class D extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(o,r,a){r!==a&&(this[o]=a),this.render()}}class S extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          background: lightgrey;
          border: 1px solid darkgrey;
          border-radius: 4px;
          padding: 4px 8px;
          overflow: hidden;


          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(o,r,a){r!==a&&(this[o]=a),this.render()}}customElements.define("eox-layout",D);customElements.define("eox-layout-item",S);const W=["gap"],j={style:{"z-index":"0"},x:"0",y:"0",h:"12",w:"12"},q=["x","y","h","w"],U={__name:"DashboardLayout",setup(h){var c,m;const o=A(C),[r]=b([(c=o.template)==null?void 0:c.background]),a=(m=o.template)==null?void 0:m.widgets,d=b(a),g=L([]),{slideBtns:n,slideInOut:_}=$(g,a);return(B,F)=>{const y=E("Loading");return s(),i(O,null,{default:l(()=>[x("eox-layout",{gap:e(o).template.gap??2},[x("eox-layout-item",j,[(s(),i(f,null,{fallback:l(()=>[p(y)]),default:l(()=>[(s(),i(k(e(r).component),w({id:"bg-widget"},e(r).props),null,16))]),_:1}))]),(s(!0),v(M,null,I(e(a),(u,t)=>(s(),v("eox-layout-item",{ref_for:!0,ref_key:"itemEls",ref:g,key:t,style:{position:"relative",overflow:"visible","z-index":"1","border-radius":"0px",background:"rgb(var(--v-theme-surface))"},x:u.layout.x,y:u.layout.y,h:u.layout.h,w:u.layout.w},[e(n)[t].enabled?(s(),i(H,{key:0,position:"absolute",variant:"tonal",style:R(e(n)[t].style),class:"slide-btn",onClick:G=>e(_)(t)},{default:l(()=>[p(z,{icon:e(n)[t].active?e(n)[t].icon.in:e(n)[t].icon.out},null,8,["icon"])]),_:2},1032,["style","onClick"])):T("v-if",!0),(s(),i(f,null,{fallback:l(()=>[p(y)]),default:l(()=>[(s(),i(k(e(d)[t].value.component),w({key:e(d)[t].value.id},e(d)[t].value.props),null,16))]),_:2},1024))],8,q))),128))],8,W)]),_:1})}}};export{U as default};
