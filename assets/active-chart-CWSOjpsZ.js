import{T as C}from"./index-IcC14pkv.js";import{at as M}from"./antd-DFqyiQ28.js";import{d as D,f as l,o as A,j as S,a4 as T,a2 as k,k as w,a7 as t,af as r,u as s,a5 as B,a6 as I}from"./vue-BG1emjmP.js";import{_ as F}from"./index-CEeQ7zLs.js";import"./vec2-Jxxlclqr.js";const d=n=>(B("data-v-9ef42747"),n=n(),I(),n),L={class:"activeChart"},q={style:{marginTop:"32px"}},N={class:"activeChartGrid"},V=d(()=>t("div",{class:"dashedLine"},[t("div",{class:"line"})],-1)),$=d(()=>t("div",{class:"dashedLine"},[t("div",{class:"line"})],-1)),j={class:"activeChartLegend"},E=d(()=>t("span",null,"00:00",-1)),G=D({__name:"active-chart",setup(n){const e=l([]),i=l([]);let o,c,u;function x(a){return a<10?`0${a}`:a}function h(){e.value=[],i.value=[];for(let a=0;a<24;a+=1)e.value.push({x:`${x(a)}:00`,y:Math.floor(Math.random()*200)+a*50}),i.value.push(Math.floor(Math.random()*200)+a*50);o==null||o.changeData(i.value)}function _(){c=requestAnimationFrame(()=>{u=window.setTimeout(()=>{h(),_()},1e3)})}const p=l();return A(()=>{o=new C(p.value,{height:84,data:i.value,smooth:!0,autoFit:!0}),o.render(),_(),h()}),S(()=>{clearTimeout(u),c&&cancelAnimationFrame(c),o==null||o.destroy(),o=void 0}),(a,R)=>{var f,m,v,g;const y=M;return T(),k("div",L,[w(y,{title:"目标评估",value:"有望达到预期"}),t("div",q,[t("div",{ref_key:"tinyAreaContainer",ref:p},null,512)]),t("div",null,[t("div",N,[t("p",null,r(((f=[...s(e)].sort()[s(e).length-1])==null?void 0:f.y)+200)+" 亿元",1),t("p",null,r((m=[...s(e)].sort()[Math.floor(s(e).length/2)])==null?void 0:m.y)+" 亿元",1)]),V,$]),t("div",j,[E,t("span",null,r((v=s(e)[Math.floor(s(e).length/2)])==null?void 0:v.x),1),t("span",null,r((g=s(e)[s(e).length-1])==null?void 0:g.x),1)])])}}}),J=F(G,[["__scopeId","data-v-9ef42747"]]);export{J as default};