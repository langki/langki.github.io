import"./index-PN1Wd5oG.js";import{aC as J,s as b,c as t,r as x,w as m}from"./vue-BG1emjmP.js";function Z(e){return{type:String,default:e}}function _(e){return{type:Number,default:e}}function $(e){return{type:Boolean,default:e}}function p(e){return{type:Array,default:e}}function ee(){return{type:[Function,Array]}}function K(e,...u){if(typeof e=="function")return e(...u);if(Array.isArray(e))return e.map(f=>f(...u))}function Q(e,u={}){const f=b(!1),C=t(()=>e.logo),H=t(()=>e.title),v=t(()=>e.layout),W=t(()=>e.collapsedWidth),T=t(()=>e.siderWidth),o=t(()=>e.menuData),i=t(()=>e.splitMenus),w=t(()=>e.fixedHeader),A=t(()=>e.fixedSider),D=t(()=>e.collapsed),L=t(()=>e.theme),j=t(()=>e.headerHeight),k=t(()=>e.contentWidth),E=t(()=>e.copyright),S=t(()=>e.isMobile),y=b(!1),F=()=>{y.value=!y.value},P=t(()=>e.header),U=t(()=>e.menu),B=t(()=>e.footer),I=t(()=>e.menuHeader),N=t(()=>e.leftCollapsed),d=x(new Map),l=x({selectedKeys:[]});m(o,()=>{var n;d.clear(),(n=o.value)==null||n.forEach(a=>{d.set(a.path,a)})},{immediate:!0});const O=t(()=>{var a,s;if(S.value||v.value!=="mix"||!i.value)return o.value;const n=(a=l.selectedKeys)==null?void 0:a[0];return n?((s=d.get(n))==null?void 0:s.children)??[]:[]}),R=n=>{l.selectedKeys=n},g=t(()=>e.openKeys),r=t(()=>e.selectedKeys),q=n=>{K(e["onUpdate:openKeys"],n)},z=n=>{K(e["onUpdate:selectedKeys"],n)},G=n=>{K(e.onMenuSelect,n)},h=(n,a,s)=>{for(const c of a??[]){if(c.path===n)return s??c;if(c.children&&c.children.length){const M=h(n,c.children,s??c);if(M)return M}}};return m(r,()=>{var n;if(i.value){const a=(n=r.value)==null?void 0:n[0];if(a){const s=h(a,o.value??[]);s&&(l.selectedKeys=[s.path])}}},{immediate:!0}),m(i,()=>{var n,a;if(!i.value)l.selectedKeys=[];else{const s=((n=r.value)==null?void 0:n[0])??((a=g.value)==null?void 0:a[0])??"",c=h(s,o.value??[]);c?l.selectedKeys=[c==null?void 0:c.path]:l.selectedKeys=[]}}),{logo:C,title:H,layout:v,collapsed:D,leftCollapsed:N,collapsedWidth:W,menuData:o,siderWidth:T,fixedHeader:w,fixedSider:A,headerHeight:j,theme:L,isMobile:S,mobileCollapsed:y,contentWidth:k,copyright:E,hasPageContainer:f,splitMenus:i,splitState:l,menuDataMap:d,selectedMenus:O,handleMobileCollapsed:F,header:P,menu:U,footer:B,openKeys:g,handleOpenKeys:q,selectedKeys:r,handleSelectedKeys:z,handleMenuSelect:G,handleSplitSelectedKeys:R,menuHeader:I,...u}}const[te,V]=J(Q),ne=()=>V();export{p as a,$ as b,te as c,ee as e,_ as n,Z as s,ne as u};
