import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-Bh2nhDkF.js";import{u as V}from"./context-bJvQG1WA.js";import{d as g,s as W,c as z,a4 as u,a2 as x,a7 as l,S as k,ah as M,u as c,ai as A,F as $,a5 as D,a6 as E,f as w,r as G,ab as I,ac as t,G as m,k as n,ag as S}from"./vue-BG1emjmP.js";import{_ as L}from"./index-CEeQ7zLs.js";import{_ as Y}from"./repository-form.vue_vue_type_script_setup_true_lang-DJtF2-hz.js";import{_ as j}from"./task-form.vue_vue_type_script_setup_true_lang-CEj-gE0c.js";import{a9 as q,aY as H,ap as J,I as K,S as O}from"./antd-DFqyiQ28.js";const P=d=>(D("data-v-3cfcab08"),d=d(),E(),d),Q={class:"footer-tool-bar__left"},U={class:"footer-tool-bar__center"},X={class:"footer-tool-bar__right"},Z=P(()=>l("div",{class:"h-56px"},null,-1)),ee=g({name:"FooterToolBar",__name:"index",setup(d){const i=W("ant-pro-footer-toolbar"),{siderWidth:_,collapsed:p,collapsedWidth:a,isMobile:f,layout:h}=V(),e=z(()=>{if(!(f.value||h.value==="top"))return`calc(100% - ${p.value?a.value:_.value}px)`});return(o,s)=>(u(),x($,null,[l("div",{class:M(c(i)),style:A({width:c(e),transition:"0.3s all"})},[l("div",Q,[k(o.$slots,"left",{},void 0,!0)]),l("div",U,[k(o.$slots,"default",{},void 0,!0)]),l("div",X,[k(o.$slots,"right",{},void 0,!0)])],6),Z],64))}}),te=L(ee,[["__scopeId","data-v-3cfcab08"]]),ae=l("a",null,"Delete",-1),_e=g({name:"AdvancedForm",__name:"index",setup(d){const i=w(),_=w();async function p(){var e,o;try{await((e=_.value)==null?void 0:e.handleSubmit()),await((o=i.value)==null?void 0:o.handleSubmit())}catch(s){console.log("Failed:",s)}}const a=G({columns:[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",scopedSlots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"action",scopedSlots:{customRender:"operation"}}],data:[{key:"1",name:"员工1",workId:"001",editable:!1,department:"行政部"},{key:"2",name:"员工2",workId:"002",editable:!1,department:"IT部"},{key:"3",name:"员工3",workId:"003",editable:!1,department:"财务部"}]});function f(){const e=a.data.length===0?"1":(Number.parseInt(a.data[a.data.length-1].key)+1).toString(),o={key:e,name:`员工${e}`,workId:Number.parseInt(e)<10?`00${e}`:Number.parseInt(e)<100?`0${e}`:e,editable:!0,department:["行政部","IT部","财务部"][Math.floor(Math.random()*3)]};a.data.push(o)}function h(e){a.data=a.data.filter(o=>o.key!==e)}return(e,o)=>{const s=q,C=H,F=J,y=K,R=O,B=te,N=T;return u(),I(N,null,{content:t(()=>[m(" 高级表单常见于一次性输入和提交大批量数据的场景。 ")]),default:t(()=>[n(R,{size:"large",direction:"vertical",style:{width:"100%"}},{default:t(()=>[n(s,{class:"card",title:"仓库管理",bordered:!1},{default:t(()=>[n(Y,{ref_key:"repositoryFormRef",ref:i,"show-submit":!1},null,512)]),_:1}),n(s,{class:"card",title:"任务管理",bordered:!1},{default:t(()=>[n(j,{ref_key:"taskFormRef",ref:_,"show-submit":!1},null,512)]),_:1}),n(s,null,{default:t(()=>[n(F,{columns:c(a).columns,"data-source":c(a).data,pagination:!1},{bodyCell:t(r=>{var b;return[((b=r==null?void 0:r.column)==null?void 0:b.key)==="action"?(u(),x($,{key:0},[c(a).data.length?(u(),I(C,{key:0,title:"Sure to delete?",onConfirm:oe=>{var v;return h((v=r==null?void 0:r.record)==null?void 0:v.key)}},{default:t(()=>[ae]),_:2},1032,["onConfirm"])):S("",!0)],64)):S("",!0)]}),_:1},8,["columns","data-source"]),n(y,{style:{width:"100%","margin-top":"16px","margin-bottom":"8px"},type:"dashed",onClick:f},{default:t(()=>[m(" 新增成员 ")]),_:1})]),_:1})]),_:1}),n(B,null,{left:t(()=>[m(" 测试 ")]),right:t(()=>[n(y,{type:"primary",onClick:p},{default:t(()=>[m(" 提交 ")]),_:1})]),_:1})]),_:1})}}});export{_e as default};