import{q as N,s as c}from"./index-PN1Wd5oG.js";import{d as D,u as e,S as g,ag as m,n as k,a4 as n,a2 as v,a7 as A,G as t,af as x,k as a,ac as s,ab as l,m as y}from"./vue-BG1emjmP.js";import{F as I,H as M,S as B}from"./antd-D0j5ONzc.js";const E=D({__name:"index",props:{access:{}},setup(h){const{hasAccess:_}=N();return(r,S)=>e(_)(r.access)?g(r.$slots,"default",{key:0}):m("",!0)}}),V={class:"flex flex-col gap-2"},C={class:"c-primary"},$=D({__name:"common",setup(h){const{hasAccess:_,roles:r}=N();return(S,R)=>{var f;const u=I,o=M,i=E,p=B,d=k("access");return n(),v("div",V,[A("div",null,[t(" 当前用户拥有权限列表 "),A("a",C,x((f=e(r))==null?void 0:f.join(",")),1)]),t(" 所有用户均可查看 细粒度控制到按钮级别 "),a(u,{message:"使用Access组件"}),a(p,null,{default:s(()=>[a(i,{access:[e(c).USER,e(c).ADMIN]},{default:s(()=>[a(o,null,{default:s(()=>[t("普通用户")]),_:1})]),_:1},8,["access"]),a(i,{access:e(c).ADMIN},{default:s(()=>[a(o,{type:"primary"},{default:s(()=>[t(" 管理员 ")]),_:1})]),_:1},8,["access"])]),_:1}),a(u,{message:"使用useAccess组合式Api"}),a(p,null,{default:s(()=>[e(_)([e(c).USER,e(c).ADMIN])?(n(),l(o,{key:0},{default:s(()=>[t(" 普通用户 ")]),_:1})):m("",!0),e(_)(e(c).ADMIN)?(n(),l(o,{key:1,type:"primary"},{default:s(()=>[t(" 管理员 ")]),_:1})):m("",!0)]),_:1}),a(u,{message:"使用v-access指令"}),a(p,null,{default:s(()=>[y((n(),l(o,null,{default:s(()=>[t(" 普通用户 ")]),_:1})),[[d,[e(c).USER,e(c).ADMIN]]]),y((n(),l(o,{type:"primary"},{default:s(()=>[t(" 管理员 ")]),_:1})),[[d,e(c).ADMIN]])]),_:1})])}}});export{$ as default};
