import{d as u,a4 as e,a2 as o,a7 as a,af as s,S as c,G as m,ab as l,u as i,ag as d,ai as b}from"./vue-BG1emjmP.js";import{ak as f,al as y}from"./antd-B7NuRx5N.js";import{_ as g}from"./index-BGYLezH8.js";const S={class:"numberInfo"},T=["title"],k={class:"numberInfoSubTitle"},p={key:0,class:"subTotal"},N=u({__name:"number-info",props:{gap:{type:Number},subTotal:{type:Number},total:{type:[Number,String]},status:{type:String},title:{type:String}},setup(t){return(r,v)=>{var n;return e(),o("div",S,[a("div",{class:"numberInfoTitle",title:t.title},s(t.title),9,T),a("div",k,[c(r.$slots,"subTitle",{},void 0,!0)]),a("div",{class:"numberInfoValue",style:b(t.gap?{marginTop:t.gap}:{})},[a("span",null,s((n=t.total)==null?void 0:n.toLocaleString()),1),t.status||t.subTotal?(e(),o("span",p,[m(s(t.subTotal)+" ",1),t.status&&t.status==="up"?(e(),l(i(f),{key:0})):(e(),l(i(y),{key:1}))])):d("",!0)],4)])}}}),C=g(N,[["__scopeId","data-v-23fd1894"]]);export{C as default};
