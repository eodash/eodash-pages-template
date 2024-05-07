import{_ as k,a0 as v,a2 as c,f as _,an as A,t as r,O as l,aj as m,a5 as b,J as e,a9 as y,T as x,k as f,$,a4 as T,aa as C,b as E,ao as M}from"./eo-dash.DEvp2YjU.js";import{e as H,W as L}from"./VBtn-Bz7ruRUg.CNwjD2N6.js";import{V as z}from"./VMain-BHfWJU2j.P1I_70df.js";import"./framework.D70SpYoC.js";import"./color-DpYEub1f.DzSX2YKJ.js";import"./dimensions-CJaGeSrj.Cw0mCobm.js";import"./ssrBoot-D-b4-M19.DCZgb625.js";class I extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(s,o,a){o!==a&&(this[s]=a),this.render()}}class O extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(s,o,a){o!==a&&(this[s]=a),this.render()}}customElements.define("eox-layout",I);customElements.define("eox-layout-item",O);const S=["gap"],D={style:{"z-index":"0"},x:"0",y:"0",h:"12",w:"12"},R=["x","y","h","w"],G={__name:"DashboardLayout",setup(u){var h,g;const s=k(v),[o]=c([(h=s.template)==null?void 0:h.background]),a=(g=s.template)==null?void 0:g.widgets,d=c(a),p=_([]),{slideBtns:i,slideInOut:w}=A(p,a);return(V,j)=>(r(),l(z,null,{default:m(()=>[b("eox-layout",{gap:e(s).template.gap??2},[b("eox-layout-item",D,[(r(),l(y(e(o).component),x({id:"bg-widget"},e(o).props),null,16))]),(r(!0),f($,null,T(e(a),(n,t)=>(r(),f("eox-layout-item",{ref_for:!0,ref_key:"itemEls",ref:p,key:t,style:{position:"relative",overflow:"visible","z-index":"1","border-radius":"0px",background:"rgb(var(--v-theme-surface))"},x:n.layout.x,y:n.layout.y,h:n.layout.h,w:n.layout.w},[e(i)[t].enabled?(r(),l(H,{key:0,position:"absolute",variant:"tonal",style:C(e(i)[t].style),class:"slide-btn",onClick:B=>e(w)(t)},{default:m(()=>[E(L,{icon:e(i)[t].active?e(i)[t].icon.in:e(i)[t].icon.out},null,8,["icon"])]),_:2},1032,["style","onClick"])):M("v-if",!0),(r(),l(y(e(d)[t].value.component),x({key:e(d)[t].value.id},e(d)[t].value.props),null,16))],8,R))),128))],8,S)]),_:1}))}};export{G as default};
