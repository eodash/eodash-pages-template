import{c as r,m as e,b as d,F as m,E as p,l,D as _,o as t,g as y,t as f}from"./chunks/framework.D70SpYoC.js";const a=JSON.parse('{"example1":{"title":"Story title first example","file":"/storyfiles/firststory.md"},"example2":{"title":"Story title second example","file":"/storyfiles/secondstory.md"}}'),h={key:1},u=l("h2",{style:{"font-size":"40px",height:"50px",margin:"20px"}}," Story gallery ",-1),x=["href"],P=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"stories/index.md","filePath":"stories/index.md"}'),g={name:"stories/index.md"},v=Object.assign(g,{setup(w){let s,o;return"URLSearchParams"in window&&(s=new URLSearchParams(window.location.search).get("storyid"),s&&s in a&&(o=a[s].file)),(n,S)=>{const c=_("eox-storytelling");return t(),r("div",null,[e(o)?(t(),d(c,{key:0,"markdown-url":e(y)(e(o))},null,8,["markdown-url"])):(t(),r("div",h,[u,(t(!0),r(m,null,p(Object.keys(e(a)),i=>(t(),r("div",null,[l("a",{style:{color:"blue",margin:"20px"},href:"./?storyid="+i},f(e(a)[i].title),9,x)]))),256))]))])}}});export{P as __pageData,v as default};