import{d as h,f as n,s as C,o as g,b,a4 as w,ab as D,ac as k,a7 as o,m as i,A as c,u as d}from"./vue-BG1emjmP.js";import{b as B}from"./index-Cm9s7bHt.js";import{a8 as P}from"./antd-D0j5ONzc.js";import{_ as T}from"./index-PN1Wd5oG.js";import"./vec2-Jxxlclqr.js";const S={style:{width:"100%"}},F=h({__name:"proportion-sales",props:{loading:{type:Boolean,default:!1}},setup(u){const s=n("all"),y=n(),f=n(),p=n(),l=C([]);function r(e,t){const a=new B(e,{appendPadding:10,data:t,angleField:"y",colorField:"x",radius:1,innerRadius:.6,label:{type:"spider",formatter:x=>`${x.x}: ${x.y.toLocaleString()}`},legend:!1,interactions:[{type:"element-selected"},{type:"element-active"}],statistic:{title:{content:"总数量"}}});a.render(),l.value.push(a)}const m=[{x:"广东",y:4544},{x:"河南",y:3321},{x:"北京",y:3113},{x:"上海",y:2341},{x:"陕西",y:1231},{x:"浙江",y:1231}],_=[{x:"家用电器",y:244},{x:"食用酒水",y:321},{x:"个护健康",y:311},{x:"服饰箱包",y:41},{x:"母婴产品",y:121},{x:"其他",y:111}],v=[{x:"家用电器",y:99},{x:"食用酒水",y:188},{x:"个护健康",y:344},{x:"服饰箱包",y:255},{x:"其他",y:65}];return g(()=>{r(y.value,m),r(f.value,_),r(p.value,v)}),b(()=>{l.value.forEach(e=>{var t;(t=e==null?void 0:e.destroy)==null||t.call(e)}),l.value=[]}),(e,t)=>{const a=P;return w(),D(a,{loading:u.loading,class:"salesCard",bordered:!1,title:"比例分析图",style:{height:"100%",display:"flex",flexDirection:"column"},"body-style":{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},{default:k(()=>[o("div",S,[i(o("div",{ref_key:"pieContainer1",ref:y},null,512),[[c,d(s)==="all"]]),i(o("div",{ref_key:"pieContainer2",ref:f},null,512),[[c,d(s)==="online"]]),i(o("div",{ref_key:"pieContainer3",ref:p},null,512),[[c,d(s)==="stores"]])])]),_:1},8,["loading"])}}}),A=T(F,[["__scopeId","data-v-4fcef2f3"]]);export{A as default};
