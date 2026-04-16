var st=Object.defineProperty;var R=e=>{throw TypeError(e)};var it=(e,t,r)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var w=(e,t,r)=>it(e,typeof t!="symbol"?t+"":t,r),B=(e,t,r)=>t.has(e)||R("Cannot "+r);var h=(e,t,r)=>(B(e,t,"read from private field"),r?r.call(e):t.get(e)),m=(e,t,r)=>t.has(e)?R("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),f=(e,t,r,s)=>(B(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r);import{E as I,a as O,x as l}from"./lit-element.CIht5NN8.js";import{e as nt,i as at}from"./directive.CvdRHFdJ.js";import{m as ot}from"./directive-helpers.BMu_cjfm.js";import{n as G}from"./when.BR7zwNJC.js";import{e as lt,a as ct}from"./addCommonStyleSheet.CgFpeYkZ.js";import{g as ut}from"./getElement.CdRlZPdn.js";import{F as dt,a as E,t as U,G as $,M as ht,b as pt,c as yt,P as ft,L as mt,d as gt,e as wt,f as vt}from"./GeoJSON.BohBfcL0.js";import{d as L}from"./math.DW_M1_h7.js";class Lt extends dt{constructor(){super()}getType(){return"text"}readFeature(t,r){return this.readFeatureFromText(P(t),this.adaptOptions(r))}readFeatureFromText(t,r){return L()}readFeatures(t,r){return this.readFeaturesFromText(P(t),this.adaptOptions(r))}readFeaturesFromText(t,r){return L()}readGeometry(t,r){return this.readGeometryFromText(P(t),this.adaptOptions(r))}readGeometryFromText(t,r){return L()}readProjection(t){return this.readProjectionFromText(P(t))}readProjectionFromText(t){return this.dataProjection}writeFeature(t,r){return this.writeFeatureText(t,this.adaptOptions(r))}writeFeatureText(t,r){return L()}writeFeatures(t,r){return this.writeFeaturesText(t,this.adaptOptions(r))}writeFeaturesText(t,r){return L()}writeGeometry(t,r){return this.writeGeometryText(t,this.adaptOptions(r))}writeGeometryText(t,r){return L()}}function P(e){return typeof e=="string"?e:""}const Ft={POINT:gt,LINESTRING:mt,POLYGON:ft,MULTIPOINT:yt,MULTILINESTRING:pt,MULTIPOLYGON:ht},Z="EMPTY",q="Z",X="M",Mt="ZM",a={START:0,TEXT:1,LEFT_PAREN:2,RIGHT_PAREN:3,NUMBER:4,COMMA:5,EOF:6},St={Point:"POINT",LineString:"LINESTRING",Polygon:"POLYGON",MultiPoint:"MULTIPOINT",MultiLineString:"MULTILINESTRING",MultiPolygon:"MULTIPOLYGON",GeometryCollection:"GEOMETRYCOLLECTION",Circle:"CIRCLE"};class Ht{constructor(t){this.wkt=t,this.index_=-1}isAlpha_(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"}isNumeric_(t,r){return r=r!==void 0?r:!1,t>="0"&&t<="9"||t=="."&&!r}isWhiteSpace_(t){return t==" "||t=="	"||t=="\r"||t==`
`}nextChar_(){return this.wkt.charAt(++this.index_)}nextToken(){const t=this.nextChar_(),r=this.index_;let s=t,i;if(t=="(")i=a.LEFT_PAREN;else if(t==",")i=a.COMMA;else if(t==")")i=a.RIGHT_PAREN;else if(this.isNumeric_(t)||t=="-")i=a.NUMBER,s=this.readNumber_();else if(this.isAlpha_(t))i=a.TEXT,s=this.readText_();else{if(this.isWhiteSpace_(t))return this.nextToken();if(t==="")i=a.EOF;else throw new Error("Unexpected character: "+t)}return{position:r,value:s,type:i}}readNumber_(){let t;const r=this.index_;let s=!1,i=!1;do t=="."?s=!0:(t=="e"||t=="E")&&(i=!0),t=this.nextChar_();while(this.isNumeric_(t,s)||!i&&(t=="e"||t=="E")||i&&(t=="-"||t=="+"));return parseFloat(this.wkt.substring(r,this.index_--))}readText_(){let t;const r=this.index_;do t=this.nextChar_();while(this.isAlpha_(t));return this.wkt.substring(r,this.index_--).toUpperCase()}}class _t{constructor(t){this.lexer_=t,this.token_={position:0,type:a.START},this.layout_="XY"}consume_(){this.token_=this.lexer_.nextToken()}isTokenType(t){return this.token_.type==t}match(t){const r=this.isTokenType(t);return r&&this.consume_(),r}parse(){return this.consume_(),this.parseGeometry_()}parseGeometryLayout_(){let t="XY";const r=this.token_;if(this.isTokenType(a.TEXT)){const s=r.value;s===q?t="XYZ":s===X?t="XYM":s===Mt&&(t="XYZM"),t!=="XY"&&this.consume_()}return t}parseGeometryCollectionText_(){if(this.match(a.LEFT_PAREN)){const t=[];do t.push(this.parseGeometry_());while(this.match(a.COMMA));if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parsePointText_(){if(this.match(a.LEFT_PAREN)){const t=this.parsePoint_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parseLineStringText_(){if(this.match(a.LEFT_PAREN)){const t=this.parsePointList_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parsePolygonText_(){if(this.match(a.LEFT_PAREN)){const t=this.parseLineStringTextList_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parseMultiPointText_(){if(this.match(a.LEFT_PAREN)){let t;if(this.token_.type==a.LEFT_PAREN?t=this.parsePointTextList_():t=this.parsePointList_(),this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parseMultiLineStringText_(){if(this.match(a.LEFT_PAREN)){const t=this.parseLineStringTextList_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parseMultiPolygonText_(){if(this.match(a.LEFT_PAREN)){const t=this.parsePolygonTextList_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parsePoint_(){const t=[],r=this.layout_.length;for(let s=0;s<r;++s){const i=this.token_;if(this.match(a.NUMBER))t.push(i.value);else break}if(t.length==r)return t;throw new Error(this.formatErrorMessage_())}parsePointList_(){const t=[this.parsePoint_()];for(;this.match(a.COMMA);)t.push(this.parsePoint_());return t}parsePointTextList_(){const t=[this.parsePointText_()];for(;this.match(a.COMMA);)t.push(this.parsePointText_());return t}parseLineStringTextList_(){const t=[this.parseLineStringText_()];for(;this.match(a.COMMA);)t.push(this.parseLineStringText_());return t}parsePolygonTextList_(){const t=[this.parsePolygonText_()];for(;this.match(a.COMMA);)t.push(this.parsePolygonText_());return t}isEmptyGeometry_(){const t=this.isTokenType(a.TEXT)&&this.token_.value==Z;return t&&this.consume_(),t}formatErrorMessage_(){return"Unexpected `"+this.token_.value+"` at position "+this.token_.position+" in `"+this.lexer_.wkt+"`"}parseGeometry_(){const t=this.token_;if(this.match(a.TEXT)){const r=t.value;this.layout_=this.parseGeometryLayout_();const s=this.isEmptyGeometry_();if(r=="GEOMETRYCOLLECTION"){if(s)return new $([]);const o=this.parseGeometryCollectionText_();return new $(o)}const i=Ft[r];if(!i)throw new Error("Invalid geometry type: "+r);let n;if(s)r=="POINT"?n=[NaN,NaN]:n=[];else switch(r){case"POINT":{n=this.parsePointText_();break}case"LINESTRING":{n=this.parseLineStringText_();break}case"POLYGON":{n=this.parsePolygonText_();break}case"MULTIPOINT":{n=this.parseMultiPointText_();break}case"MULTILINESTRING":{n=this.parseMultiLineStringText_();break}case"MULTIPOLYGON":{n=this.parseMultiPolygonText_();break}}return new i(n,this.layout_)}throw new Error(this.formatErrorMessage_())}}class It extends Lt{constructor(t){super(),t=t||{},this.splitCollection_=t.splitCollection!==void 0?t.splitCollection:!1}parse_(t){const r=new Ht(t);return new _t(r).parse()}readFeatureFromText(t,r){const s=this.readGeometryFromText(t,r),i=new E;return i.setGeometry(s),i}readFeaturesFromText(t,r){let s=[];const i=this.readGeometryFromText(t,r);this.splitCollection_&&i.getType()=="GeometryCollection"?s=i.getGeometriesArray():s=[i];const n=[];for(let o=0,c=s.length;o<c;++o){const u=new E;u.setGeometry(s[o]),n.push(u)}return n}readGeometryFromText(t,r){const s=this.parse_(t);return U(s,!1,r)}writeFeatureText(t,r){const s=t.getGeometry();return s?this.writeGeometryText(s,r):""}writeFeaturesText(t,r){if(t.length==1)return this.writeFeatureText(t[0],r);const s=[];for(let n=0,o=t.length;n<o;++n)s.push(t[n].getGeometry());const i=new $(s);return this.writeGeometryText(i,r)}writeGeometryText(t,r){return z(U(t,!0,r))}}function K(e){const t=e.getCoordinates();return t.length===0?"":t.join(" ")}function Vt(e){const t=[],r=e.getPoints();for(let s=0,i=r.length;s<i;++s)t.push("("+K(r[s])+")");return t.join(",")}function bt(e){const t=[],r=e.getGeometries();for(let s=0,i=r.length;s<i;++s)t.push(z(r[s]));return t.join(",")}function T(e){const t=e.getCoordinates(),r=[];for(let s=0,i=t.length;s<i;++s)r.push(t[s].join(" "));return r.join(",")}function kt(e){const t=[],r=e.getLineStrings();for(let s=0,i=r.length;s<i;++s)t.push("("+T(r[s])+")");return t.join(",")}function W(e){const t=[],r=e.getLinearRings();for(let s=0,i=r.length;s<i;++s)t.push("("+T(r[s])+")");return t.join(",")}function Nt(e){const t=[],r=e.getPolygons();for(let s=0,i=r.length;s<i;++s)t.push("("+W(r[s])+")");return t.join(",")}function Pt(e){const t=e.getLayout();let r="";return(t==="XYZ"||t==="XYZM")&&(r+=q),(t==="XYM"||t==="XYZM")&&(r+=X),r}const Ct={Point:K,LineString:T,Polygon:W,MultiPoint:Vt,MultiLineString:kt,MultiPolygon:Nt,GeometryCollection:bt};function z(e){const t=e.getType(),r=Ct[t],s=r(e);let i=St[t];if(typeof e.getFlatCoordinates=="function"){const n=Pt(e);n.length>0&&(i+=" "+n)}return s.length===0?i+" "+Z:i+"("+s+")"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=nt(class extends at{constructor(){super(...arguments),this.key=I}render(e,t){return this.key=e,t}update(e,[t,r]){return t!==this.key&&(ot(e),this.key=t),r}}),xt=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const t=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",t),e.clickInteraction.selectStyleLayer.on("change",t)},$t=(e,t,r)=>{if(e.clickId===t)return;const s=r?[]:[t];e.hoverInteraction.highlightById(s)},At=(e,t,r)=>{e.stopPropagation();const s=Number(e.target.getAttribute("index")),i=t.drawLayer.getSource().getFeatures()[s];t.drawLayer.getSource().removeFeature(i),t.drawnFeatures.splice(s,1),r.emitDrawnFeatures(),t.requestUpdate()},J={duration:750,padding:[20,20,20,20]},Y={type:"FeatureCollection",features:[]},Ot=(e,t)=>{const{clickId:r,drawLayer:s,olMap:i,clickInteraction:n}=t,o=n.getId(e);if(r===o){const u=s.getSource().getExtent();i.getView().fit(u,J),n.highlightById([])}else{const u=t.eoxMap.projection||"EPSG:3857",p=t.eoxDrawTools.projection,y=e.clone().getGeometry().transform(p,u).getExtent();n.highlightById([o]),i.getView().fit(y,J)}t.requestUpdate()};class Q extends O{constructor(){super();w(this,"hoverInteraction");w(this,"clickInteraction");w(this,"hoverId");w(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(r){At(r,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(r){Ot(r,this)}_handleHoverFeature(r,s=!1){$t(this,r,s)}firstUpdated(){xt(this)}createRenderRoot(){return this}render(){var s,i;this.hoverId=(s=this.hoverInteraction)==null?void 0:s.selectedFids[0],this.clickId=(i=this.clickInteraction)==null?void 0:i.selectedFids[0];const r=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return l`
      <ul class="list no-space">
        ${this.drawnFeatures.map((n,o)=>{var _;const c=o+1,u=Object.values(this.eoxMap.selectInteractions)[0].getId(n),p=this.hoverId===u,y=this.clickId===u,g=p?"surface-container-low":y?"fill":I,v=(_=this.featureNameKey)==null?void 0:_.split("."),H=n.get(this.featureNameKey)||(v==null?void 0:v.reduce((C,rt)=>C==null?void 0:C[rt],{...n.getProperties()})),d=H||`${this.featureName} ${c}`;return Gt(c,l`
              <li
                class="${g} no-round"
                @mouseover=${()=>this._handleHoverFeature(u)}
                @mouseout=${()=>this._handleHoverFeature(u,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(n)}"
              >
                <div class="max">
                  <span class="title">${d}</span>
                </div>
                <button
                  index=${o}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":l`<i class="small">${r}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}w(Q,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",Q);const Tt=e=>{const{multipleFeatures:t,drawnFeatures:r,currentlyDrawing:s}=e,i=!t&&(r==null?void 0:r.length)>0||s,n=!(r!=null&&r.length)&&!s;return{drawDisabled:i,discardDisabled:n}};function Rt(e){navigator.clipboard.writeText(e).then(function(){},function(t){console.error("Could not copy text: ",t)})}const Bt=(e,t)=>new wt().writeFeaturesObject(e,t),Et=(e,t)=>new It().writeFeatures(e,t);var V,b;class D extends O{constructor(){super();m(this,V,!0);m(this,b,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:r,discardDisabled:s}=Tt(this);f(this,V,r),f(this,b,s)}createRenderRoot(){return this}render(){this.updateButtonStates();const r=this.currentlyDrawing?"drawing":"draw",s={Polygon:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},i=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,n=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,o=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,c=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,u=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return l`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?"Select":"Draw":""}"
            ?disabled="${h(this,V)||I}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?r:l`
                  <i class="small"
                    >${this.select?i:s[this.type]}</i
                  >
                  <div class="tooltip bottom">
                    ${this.select?"Select":"Draw"}
                  </div>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?"Discard":""}"
            ?disabled="${h(this,b)||I}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":l`
                  <i class="small">${n}</i>
                  <div class="tooltip bottom">Discard</div>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${G(this.showEditor,()=>l`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":l`
                    <i class="small">${o}</i>
                    <div class="tooltip bottom">Edit features</div>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${G(this.importFeatures,()=>l`
            <!-- Import Input Field : Hidden -->
            <input
              type="file"
              id="import-file"
              style="display: none;"
              @change=${this.drawFunc.import}
            />

            <!-- Main Import Button -->
            <button
              data-cy="importBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Import features":""}"
              @click=${()=>this.querySelector("#import-file").click()}
            >
              ${this.unstyled?"import":l`
                    <i class="small">${c}</i>
                    <div class="tooltip bottom">Import features</div>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${G(this.showEditor,()=>l`
          <div id="editor" class="field textarea border extra hidden">
            <!-- Geo JSON Editor -->
            <textarea
              style="font-family: monospace; font-size: small; line-height: 1.4; padding: 0.4rem;"
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="circle absolute bottom right medium-margin aloha"
              style="z-index: 1"
              @click=${()=>Rt(this.geoJSON)}
            >
              ${this.unstyled?"copy":l`
                    <i class="tiny">${u}</i>
                    <div class="tooltip top">Copy</div>
                  `}
            </button>
          </div>
        `)}
    `}}V=new WeakMap,b=new WeakMap,w(D,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",D);ct();const Ut=`
  ${lt}
  :host {
    --padding: 0.5rem;
  }
  .drawtitle {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .hidden {
    display: none;
  }
`,Jt=e=>{(()=>{var r;if(e.emitDrawnFeatures(),!e.multipleFeatures)(r=e.draw)==null||r.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const i=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!i)return;e.drawLayer.getSource().addFeature(i),e.drawnFeatures=[i]}})(),e.requestUpdate()},Yt=e=>{const t=()=>{var s;e.drawLayer.set("isDrawingEnabled",!0),(s=e.draw)==null||s.setActive(!0),e.selectionEvents.addSelectionEvent()},r=()=>{e.currentlyDrawing=!0,e.requestUpdate()};t(),r(),document.addEventListener("keydown",({key:s})=>{var i;s==="Escape"&&e.currentlyDrawing&&((i=e.draw)==null||i.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())})},x=(e,t)=>{var p,y,g,v,H;const s=ut(e.for),i=s.map,n="0, 65, 112";e.drawLayer=s.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:t},source:{type:"Vector"},style:((p=e.featureStyles)==null?void 0:p.layer)||{"fill-color":`rgba(${n}, 0.1)`,"stroke-color":`rgba(${n}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${n}, 1)`},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:((y=e.featureStyles)==null?void 0:y.layer)||{"fill-color":`rgba(${n}, 0.1)`,"stroke-color":`rgba(${n}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${n}, 1)`}}},{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((g=e.featureStyles)==null?void 0:g.hover)||{"fill-color":`rgba(${n}, 0.2)`,"stroke-color":`rgba(${n}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((v=e.featureStyles)==null?void 0:v.click)||{"fill-color":`rgba(${n}, 0.2)`,"stroke-color":`rgba(${n}, 1)`,"stroke-width":2}}}]}),e.draw=s.interactions.drawInteraction,e.modify=s.interactions.drawInteractionmodify,A(e,s,e.layerId);const o=()=>e.onModifyEnd(),c=()=>Jt(e);return(H=e.modify)==null||H.on("modifyend",o),s.addEventListener("addfeatures",c),e.drawnFeatures&&e.drawLayer.getSource().addFeatures(e.drawnFeatures),{EoxMap:s,OlMap:i,reset:d=>{var _;!d.eoxMap||!d.drawLayer||(d.drawLayer.getSource().clear(),d.eoxMap.map.removeLayer(d.drawLayer),(_=d.modify)==null||_.un("modifyend",o),d.eoxMap.removeEventListener("addfeatures",c),d.layerId||(d.draw=null),d.modify=null)}}},jt=e=>{const t=()=>{var i;e.drawnFeatures=[],(i=e.draw)==null||i.setActive(!1),!!e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},r=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};t(),r()},Zt=(e,t)=>{setTimeout(()=>{const s=e.drawLayer.getSource().getFeatures(),i=e.eoxMap.projection||"EPSG:3857",n=e.projection;e.drawnFeatures=n?s.map(c=>{c=c.clone();const u=c.getGeometry().transform(i,n);return c.setGeometry(u),c}):s;let o;switch(e.format){case"geojson":o=Bt(e.drawnFeatures);break;case"wkt":o=Et(e.drawnFeatures);break;case"feature":o=e.drawnFeatures;break;default:o=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),t(o)},0)},qt=e=>{const t=i=>{(i==null?void 0:i.detail.id)!=="SelectLayerClickInteraction"||!i.detail.feature||(typeof i.detail.feature.getGeometry().getCoordinates!="function"&&(i.detail.feature=vt(i.detail.feature)),e.drawLayer.getSource().addFeature(i.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:i.detail})))};return{addSelectionEvent:()=>{if(e.layerId){const i=e.eoxMap.selectInteractions.SelectLayerHoverInteraction;i==null||i.setActive(!0),e.eoxMap.addEventListener("select",t)}},removeSelectionEvent:()=>{var n;const i=(n=e.eoxMap.selectInteractions)==null?void 0:n.SelectLayerHoverInteraction;i&&(i.selectedFids=[],i==null||i.setActive(!1)),e.eoxMap.removeEventListener("select",t)}}},A=(e,t,r)=>{var u,p,y,g;if(!r||!t)return;const s=t.getLayerById(r),i=s?JSON.parse(JSON.stringify(s.get("_jsonDefinition"))):null;if(!i){console.error(`Layer with id ${r} not found`);return}const n={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((u=e.featureStyles)==null?void 0:u.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},o={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:((p=e.featureStyles)==null?void 0:p.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};i.interactions=[n,o],t.addOrUpdateLayer(i),tt(t.layers,r,[i]);const c=e.draw;e.draw=t.selectInteractions.SelectLayerClickInteraction,c==null||c.setActive(!1),(y=t.selectInteractions.SelectLayerClickInteraction)==null||y.setActive(!1),(g=t.selectInteractions.SelectLayerHoverInteraction)==null||g.setActive(!1)};function tt(e,t,r){const s=e.findIndex(i=>i.properties.id===t);if(s!==-1)return e.splice(s,1,...r),e;for(const i of e)if(i.type==="Group"){const n=tt(i.layers,t,r);n!=null&&n.length&&(i.layers=n)}return e}const Xt=(e,t,r,s)=>{if(t){if(r){s&&r!==s&&j(e,t),A(e,t,r);return}if(!r&&s){j(e,t);return}}};function j(e,t){t&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=t.interactions.drawInteraction,t.selectInteractions.SelectLayerClickInteraction.remove(),t.selectInteractions.SelectLayerHoverInteraction.remove())}function Kt(e,t){function r(n){n.preventDefault(),n.stopPropagation()}function s(n){n.srcElement.style.opacity="0.4"}function i(n){n.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(n=>{t.addEventListener(n,r,!1),["dragenter","dragover"].includes(n)?t.addEventListener(n,s,!1):t.addEventListener(n,i,!1)}),t.addEventListener("drop",n=>et(n,e),!1)}function Wt(e){e.preventDefault(),e.stopPropagation()}function et(e,t){Wt(e);let r;"dataTransfer"in e&&e.dataTransfer?r=e.dataTransfer.files:e.target&&"files"in e.target?r=e.target.files:r=[],Array.from(r).forEach(s=>zt(s,t)),e.target&&"value"in e.target&&(e.target.value="")}function zt(e,t){const r=new FileReader;r.readAsText(e),r.onloadend=function(){typeof r.result=="string"&&t.handleFeatureChange(r.result)}}var F,M,k,S,N;class Qt extends O{constructor(){super();m(this,F);m(this,M);m(this,k);m(this,S);m(this,N);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{attribute:!1},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(r){f(this,N,r),r&&(this.multipleFeatures=!0)}get continuous(){return h(this,N)}set layerId(r){Xt(this,this.eoxMap,r,h(this,S)),f(this,S,r)}get layerId(){return h(this,S)}startDrawing(){Yt(this)}discardDrawing(){jt(this)}handleFeatureChange(r,s=!1,i=!0){this.eoxMap.parseTextToFeature(r||JSON.stringify(Y),this.drawLayer,this.eoxMap,s,i)}handleFilesChange(r){et(r,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){f(this,k,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||Y,void 0,2))}emitDrawnFeatures(){Zt(this,s=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:s}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:r,OlMap:s,reset:i}=x(this,this.multipleFeatures);this.resetLayer=i,this.eoxMap=r,f(this,M,s),this.selectionEvents=qt(this),this.importFeatures&&Kt(this,this.eoxMap),this.updateGeoJSON(),this.requestUpdate()}updated(r){if(r.has("for")){const{EoxMap:s,OlMap:i}=x(this,this.multipleFeatures);this.eoxMap=s,f(this,M,i)}r.get("type")&&r.get("type")!==this.type&&(this.resetLayer(this),this.firstUpdated(),this.currentlyDrawing=!1)}get eoxMap(){return h(this,F)}set eoxMap(r){const s=h(this,F);f(this,F,r),this.requestUpdate("eoxMap",s)}connectedCallback(){if(super.connectedCallback(),this.drawLayer&&this.eoxMap){const{reset:r}=x(this,this.multipleFeatures);this.resetLayer=r}}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resetLayer)==null||r.call(this,this)}render(){var r;return l`
      <style>
        :host { display: block; }
        ${!this.unstyled&&Ut}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.startDrawing(),discard:()=>this.discardDrawing(),editor:s=>this.handleFeatureChange(s.target.value,!0),import:s=>this.handleFilesChange(s)}}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${h(this,k)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((r=this.drawnFeatures)!=null&&r.length)?l`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${h(this,M)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:I}
    `}}F=new WeakMap,M=new WeakMap,k=new WeakMap,S=new WeakMap,N=new WeakMap;customElements.define("eox-drawtools",Qt);export{Qt as EOxDrawTools};
