var re=Object.defineProperty;var ie=(n,i,c)=>i in n?re(n,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[i]=c;var w=(n,i,c)=>ie(n,typeof i!="symbol"?i+"":i,c);import{_ as U,j as le,u as ce,k as de,f as pe,m as ue,g as me,A as ge}from"./index-88P_9uxT.js";import{a4 as p,a2 as _,a7 as l,d as he,V as _e,r as fe,s as M,f as O,ao as ve,o as we,u as e,j as xe,af as h,ab as L,k as o,ac as d,a8 as be,ae as ye,ag as E,F as x,G as k,a5 as ke,a6 as $e}from"./vue-BG1emjmP.js";import{_ as ze}from"./logo-Ft4BtHHg.js";import{_ as Ce}from"./index.vue_vue_type_style_index_0_lang-D7oiCiIi.js";import{O as Me,Q as Le,U as Ee,V as A,W as qe,E as Se,J as Ie,T as Pe,F as Te,X as Ae,Y as Re,Z as Ue,H as Ve}from"./antd-D0j5ONzc.js";var Be=async(n=0)=>new Promise(i=>{const c=setTimeout(()=>{i(!0),clearTimeout(c)},n)});const Ne={name:"CarbonSun"},Fe={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32"},He=l("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Ke=[He];function Oe(n,i,c,f,g,q){return p(),_("svg",Fe,Ke)}const Ze=U(Ne,[["render",Oe]]),Qe={name:"CarbonMoon"},We={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32"},De=l("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Ge=[De];function Ye(n,i,c,f,g,q){return p(),_("svg",We,Ge)}const je=U(Qe,[["render",Ye]]),Je="/assets/bg4-DKEYr-Z2.png";function Xe(n,i=""){var g;const c=((g=le.currentRoute.value)==null?void 0:g.query)??{},f=Me(c,n)??i;return decodeURIComponent(f)}const t={width:0,height:0,canvas:null,ctx:null,circles:[],animate:!0,requestId:null},et=function(n){if(!t||!n)throw new Error("no canvasInstance");t.width=window.innerWidth,t.height=window.innerHeight,t.canvas=n,t.canvas.width=t.width,t.canvas.height=t.height,t.ctx=t.canvas.getContext("2d"),t.circles=[];for(let i=0;i<t.width*.5;i++){const c=new tt;t.circles.push(c)}D(),at()};function Q(){t.animate=!(document.body.scrollTop>t.height)}function W(){t.width=window.innerWidth,t.height=window.innerHeight,t.canvas.width=t.width,t.canvas.height=t.height}function D(){if(t.animate){t.ctx.clearRect(0,0,t.width,t.height);for(const n in t.circles)t.circles[n].draw()}t.requestId=requestAnimationFrame(D)}class tt{constructor(){w(this,"pos");w(this,"alpha");w(this,"scale");w(this,"velocity");w(this,"draw");this.pos={x:Math.random()*t.width,y:t.height+Math.random()*100},this.alpha=.1+Math.random()*.3,this.scale=.1+Math.random()*.3,this.velocity=Math.random();const i=Math.random()*255,c=Math.random()*255,f=Math.random()*255;this.draw=function(){this.pos.y-=this.velocity,this.alpha-=5e-4,t.ctx.beginPath(),t.ctx.arc(this.pos.x,this.pos.y,this.scale*10,0,2*Math.PI,!1),t.ctx.fillStyle=`rgba(${i},${c},${f},${this.alpha})`,t.ctx.fill()}}}function at(){window.addEventListener("scroll",Q),window.addEventListener("resize",W)}function ot(){window.removeEventListener("scroll",Q),window.removeEventListener("resize",W),cancelAnimationFrame(t.requestId)}const Z={init:et,removeListeners:ot},G=n=>(ke("data-v-f58adca8"),n=n(),$e(),n),st={class:"login-container"},nt={"h-screen":"","w-screen":"",absolute:"","z-10":""},rt={class:"login-content flex-center"},it={class:"ant-pro-form-login-main rounded"},lt={class:"flex-between h-15 px-4 mb-[2px]"},ct={class:"flex-end"},dt=G(()=>l("span",{class:"ant-pro-form-login-logo"},[l("img",{"w-full":"","h-full":"","object-cover":"",src:ze})],-1)),pt=G(()=>l("span",{class:"ant-pro-form-login-title"}," 车联网管理系统 ",-1)),ut={class:"ant-pro-form-login-desc"},mt={class:"login-lang flex-center relative z-11"},gt={class:"box-border flex min-h-[520px]"},ht=be('<div class="ant-pro-form-login-main-left min-h-[520px] flex-center bg-[var(--bg-color-container)]" data-v-f58adca8><img src="'+Je+'" class="h-20/24 w-88/100" data-v-f58adca8><div class="aver2 min-h-[520px] max-w-[190px] flex-center" data-v-f58adca8><a id="li9" class="w-1/1 flex-center" data-v-f58adca8><img class="w-3/4" src="http://www.18gps.net/Skins/paobudiu/app/mobiledownload/images/QRcode.png" data-v-f58adca8><h2 class="qRcodeTitle c-text" data-v-f58adca8>云车管家</h2><p class="c-textSecondary" style="font-size:12px;" data-v-f58adca8>一款操作简单方便的基础版APP，具备实时查车、回放轨迹、下发指令、实时接收设备故障与异常报警推送等基础功能。</p></a></div></div>',1),_t={class:"ant-pro-form-login-main-right px-5 w-[335px] flex-center flex-col relative z-11"},ft={class:"text-center py-6 text-2xl"},vt={flex:"","items-center":""},wt={flex:"","items-center":""},xt=["data-theme"],R=60,bt=he({__name:"login",setup(n){const i=ce(),c=de(),f=pe(),{layoutSetting:g}=_e(f),q=ye(),Y=ue(),a=fe({username:void 0,password:void 0,mobile:void 0,code:void 0,type:"account",remember:!0}),{t:r}=me(),$=M(),b=M(!1),S=M(!1),I=M(!1),V=O(),{counter:B,pause:j,reset:J,resume:X,isActive:z}=ve(1e3,{controls:!0,immediate:!1,callback(m){m&&m===R&&j()}}),N=O(!1),ee=[{type:"number",asyncValidator:()=>new Promise((m,s)=>{!a.username||!a.password?s(new Error("获取验证码前需先输入账号密码！")):a.code?m(!0):N.value?s(new Error(r("pages.login.captcha.required"))):s(new Error("请获取验证码！"))})}];async function F(){try{!a.username||!a.password?await $.value.validate(["code"]):(console.log("校验通过"),$.value.validate(["code"]),b.value=!0,setTimeout(()=>{J(),X(),b.value=!1,N.value=!0,i.success("验证码是：123456")},3e3))}catch(m){console.log(m),b.value=!1}}async function v(){var m;S.value=!0;try{await((m=$.value)==null?void 0:m.validate());let s;a.type==="account"?s={username:a.username,password:a.password,code:a.code}:s={mobile:a.mobile,code:a.code,type:"mobile"},console.log("1"),Y.value="test",console.log("测试环境登录成功"),c.success({message:"登录成功",description:"欢迎回来！",duration:3});const P=Xe("redirect","/");q.push({path:P,replace:!0})}catch(s){s instanceof ge&&(I.value=!0),S.value=!1}}return we(async()=>{await Be(300),Z.init(e(V))}),xe(()=>{Z.removeListeners()}),(m,s)=>{const P=je,te=Ze,H=Se,ae=Ie,oe=Pe,K=Te,C=Ae,y=Re,se=Ue,T=Ve,ne=Le;return p(),_("div",st,[l("div",nt,[l("canvas",{ref_key:"bubbleCanvas",ref:V},null,512)]),l("div",rt,[l("div",it,[l("div",lt,[l("div",ct,[dt,pt,l("span",ut,h(e(r)("pages.layouts.userLayout.title")),1)]),l("div",mt,[l("span",{class:"flex-center cursor-pointer text-16px",onClick:s[0]||(s[0]=u=>e(f).toggleTheme(e(g).theme==="dark"?"light":"dark"))},[e(g).theme==="light"?(p(),L(P,{key:0})):(p(),L(te,{key:1}))])])]),o(H,{"m-0":""}),l("div",gt,[ht,o(H,{"m-0":"",type:"vertical",class:"ant-pro-login-divider min-h-[520px]"}),l("div",_t,[l("div",ft,h(e(r)("pages.login.tips")),1),o(ne,{ref_key:"formRef",ref:$,model:e(a)},{default:d(()=>[o(oe,{activeKey:e(a).type,"onUpdate:activeKey":s[1]||(s[1]=u=>e(a).type=u),centered:""},{default:d(()=>[o(ae,{key:"account",tab:e(r)("pages.login.accountLogin.tab")},null,8,["tab"])]),_:1},8,["activeKey"]),e(I)&&e(a).type==="account"?(p(),L(K,{key:0,"mb-24px":"",message:e(r)("pages.login.accountLogin.errorMessage"),type:"error","show-icon":""},null,8,["message"])):E("",!0),e(I)&&e(a).type==="mobile"?(p(),L(K,{key:1,"mb-24px":"",message:e(r)("pages.login.phoneLogin.errorMessage"),type:"error","show-icon":""},null,8,["message"])):E("",!0),e(a).type==="account"?(p(),_(x,{key:2},[o(y,{name:"username",rules:[{required:!0,message:e(r)("pages.login.username.required")}]},{default:d(()=>[o(C,{value:e(a).username,"onUpdate:value":s[2]||(s[2]=u=>e(a).username=u),"allow-clear":"",autocomplete:"off",placeholder:e(r)("pages.login.username.placeholder"),size:"large",onPressEnter:v},{prefix:d(()=>[o(e(Ee))]),_:1},8,["value","placeholder"])]),_:1},8,["rules"]),o(y,{name:"password",rules:[{required:!0,message:e(r)("pages.login.password.required")}]},{default:d(()=>[o(se,{value:e(a).password,"onUpdate:value":s[3]||(s[3]=u=>e(a).password=u),"allow-clear":"",placeholder:e(r)("pages.login.password.placeholder"),size:"large",onPressEnter:v},{prefix:d(()=>[o(e(A))]),_:1},8,["value","placeholder"])]),_:1},8,["rules"]),o(y,{name:"code",rules:ee},{default:d(()=>[l("div",vt,[o(C,{value:e(a).code,"onUpdate:value":s[4]||(s[4]=u=>e(a).code=u),style:{flex:"1 1 0%",transition:"width 0.3s ease 0s","margin-right":"8px"},"allow-clear":"",placeholder:e(r)("pages.login.captcha.placeholder"),size:"large",onPressEnter:v},{prefix:d(()=>[o(e(A))]),_:1},8,["value","placeholder"]),o(T,{loading:e(b),disabled:e(z),size:"large",onClick:F},{default:d(()=>[e(z)?(p(),_(x,{key:1},[k(h(R-e(B))+" "+h(e(r)("pages.getCaptchaSecondText")),1)],64)):(p(),_(x,{key:0},[k(h(e(r)("pages.login.phoneLogin.getVerificationCode")),1)],64))]),_:1},8,["loading","disabled"])])]),_:1})],64)):E("",!0),e(a).type==="mobile"?(p(),_(x,{key:3},[o(y,{name:"mobile",rules:[{required:!0,message:e(r)("pages.login.phoneNumber.required")},{pattern:/^(86)?1([38][0-9]|4[579]|5[0-35-9]|6[6]|7[0135678]|9[89])[0-9]{8}$/,message:e(r)("pages.login.phoneNumber.invalid")}]},{default:d(()=>[o(C,{value:e(a).mobile,"onUpdate:value":s[5]||(s[5]=u=>e(a).mobile=u),"allow-clear":"",placeholder:e(r)("pages.login.phoneNumber.placeholder"),size:"large",onPressEnter:v},{prefix:d(()=>[o(e(qe))]),_:1},8,["value","placeholder"])]),_:1},8,["rules"]),o(y,{name:"code",rules:[{required:!0,message:e(r)("pages.login.captcha.required")}]},{default:d(()=>[l("div",wt,[o(C,{value:e(a).code,"onUpdate:value":s[6]||(s[6]=u=>e(a).code=u),style:{flex:"1 1 0%",transition:"width 0.3s ease 0s","margin-right":"8px"},"allow-clear":"",placeholder:e(r)("pages.login.captcha.placeholder"),size:"large",onPressEnter:v},{prefix:d(()=>[o(e(A))]),_:1},8,["value","placeholder"]),o(T,{loading:e(b),disabled:e(z),size:"large",onClick:F},{default:d(()=>[e(z)?(p(),_(x,{key:1},[k(h(R-e(B))+" "+h(e(r)("pages.getCaptchaSecondText")),1)],64)):(p(),_(x,{key:0},[k(h(e(r)("pages.login.phoneLogin.getVerificationCode")),1)],64))]),_:1},8,["loading","disabled"])])]),_:1},8,["rules"])],64)):E("",!0),o(T,{type:"primary","mt-4":"",block:"",loading:e(S),size:"large",onClick:v},{default:d(()=>[k(h(e(r)("pages.login.submit")),1)]),_:1},8,["loading"])]),_:1},8,["model"])])])])]),l("div",{"py-24px":"","px-50px":"",fixed:"","bottom-0":"","z-11":"","w-screen":"","data-theme":e(g).theme,"text-14px":""},[o(Ce,{copyright:e(g).copyright,icp:"鲁ICP备2024071414号-1"},null,8,["copyright"])],8,xt)])}}}),Et=U(bt,[["__scopeId","data-v-f58adca8"]]);export{Et as default};