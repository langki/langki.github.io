import{v}from"./index-CEeQ7zLs.js";import{I as L,S as T,a9 as w,am as B}from"./antd-DFqyiQ28.js";import{d as z,f as i,n as D,a4 as r,a2 as f,k as a,ac as t,m as S,u as d,G as u,F as $,al as F,ab as N,af as V,H as E}from"./vue-BG1emjmP.js";const G={class:"loading-wrapper"},H=["loading-full"],A=z({__name:"loading",setup(I){const p=i(!1),m=i(!1),s=i(1e3),k=i(["pulse","rect","plane","cube","preloader","chase","dot"]);function g(o){m.value=o===2,p.value=!0,setTimeout(()=>{p.value=!1},2e3)}function y(o){const{open:e,close:n}=v({spin:o});e(),setTimeout(()=>{n()},2e3)}function b(){const{open:o,close:e}=v({minTime:s.value});o(),e()}return(o,e)=>{const n=L,c=T,_=w,C=B,x=D("loading");return r(),f("div",G,[a(_,{title:"指令方式加载loading",hoverable:!0,bordered:!1},{default:t(()=>[S((r(),f("div",{class:"relative w-full h-[150px]","loading-text":"自定义指令loading","loading-spin":"pulse","loading-full":d(m)},[a(c,{size:15},{default:t(()=>[a(n,{type:"primary",onClick:e[0]||(e[0]=l=>g(1))},{default:t(()=>[u(" v-loading指令全屏 ")]),_:1}),a(n,{type:"primary",onClick:e[1]||(e[1]=l=>g(2))},{default:t(()=>[u(" v-loading指令非全屏 ")]),_:1})]),_:1})],8,H)),[[x,d(p)]])]),_:1}),a(_,{title:"hook加载loading",hoverable:"",bordered:!1,style:{"margin-top":"15px"}},{default:t(()=>[a(c,{size:15},{default:t(()=>[(r(!0),f($,null,F(d(k),(l,h)=>(r(),N(n,{key:l,type:"primary",onClick:R=>y(l)},{default:t(()=>[u(" loading"+V(h+1),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),a(_,{title:"hooloading最小时长",hoverable:"",bordered:!1},{default:t(()=>[a(c,{size:15},{default:t(()=>[a(C,{value:d(s),"onUpdate:value":e[2]||(e[2]=l=>E(s)?s.value=l:null)},null,8,["value"]),a(n,{type:"primary",onClick:b},{default:t(()=>[u(" 点击触发loading ")]),_:1})]),_:1})]),_:1})])}}});export{A as default};
