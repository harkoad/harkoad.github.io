"use strict";(self["webpackChunkariamin"]=self["webpackChunkariamin"]||[]).push([[564],{9564:(e,l,a)=>{a.r(l),a.d(l,{default:()=>W});var s=a(3673),n=a(8880),i=a(9832),o=a.n(i);const t=e=>((0,s.dD)("data-v-cae598b2"),e=e(),(0,s.Cn)(),e),r={id:"box",class:"column bckgrd q-pa-md"},u={class:"column q-pb-lg justify-start"},d=t((()=>(0,s._)("div",null,[(0,s._)("h4",null,"Sign in"),(0,s._)("span",null,[(0,s.Uk)("This is just a "),(0,s._)("strong",null,"proof of concept"),(0,s.Uk)(" for verification purposes. desing, layouts and functionality is prone to change.")])],-1))),m={class:"column q-py-lg"},c={class:"row items-center"},p=t((()=>(0,s._)("span",{class:"text-grey",style:{flex:"3"}},[(0,s.Uk)(" By signing in, you agree with our"),(0,s._)("a",{href:"#"},"Terms & conditions"),(0,s.Uk)("! ")],-1)));function f(e,l,a,i,t,f){const v=(0,s.up)("q-img"),g=(0,s.up)("q-input"),y=(0,s.up)("q-icon"),w=(0,s.up)("q-form"),b=(0,s.up)("q-btn"),h=(0,s.up)("q-page"),_=(0,s.up)("q-layout");return(0,s.wg)(),(0,s.j4)(_,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{class:"column justify-center items-center bg-primary"},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s._)("div",u,[(0,s.Wm)(v,{src:o(),width:"60px"})]),(0,s.Wm)(w,{greedy:"",class:"column justify-center",style:{flex:"1"},onSubmit:l[3]||(l[3]=(0,n.iM)((()=>{}),["prevent"]))},{default:(0,s.w5)((()=>[d,(0,s._)("div",m,[(0,s.Wm)(g,{"hide-bottom-space":"",clearable:"",modelValue:i.vmodel.email,"onUpdate:modelValue":l[0]||(l[0]=e=>i.vmodel.email=e),ref:"emailRef",label:"Email",type:"email",rules:[e=>null!==e&&""!==e||"enter valid email"],onKeyup:(0,n.D2)(i.authIn,["enter"])},null,8,["modelValue","rules","onKeyup"]),(0,s.Wm)(g,{"hide-bottom-space":"",clearable:"",modelValue:i.vmodel.password,"onUpdate:modelValue":l[2]||(l[2]=e=>i.vmodel.password=e),ref:"passRef",label:"Password",type:i.isPwd?"password":"text",rules:[e=>null!==e&&""!==e||"enter valid password"],onKeyup:(0,n.D2)(i.authIn,["enter"])},{append:(0,s.w5)((()=>[(0,s.Wm)(y,{name:i.isPwd?"visibility_off":"visibility",onClick:l[1]||(l[1]=e=>i.isPwd=!i.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules","onKeyup"])])])),_:1}),(0,s._)("div",c,[p,(0,s.Wm)(b,{"no-caps":"",label:"Sign in",unelevated:"",color:"primary",onClick:l[4]||(l[4]=e=>i.authIn()),style:{flex:"1"}})])])])),_:1})])),_:1})}a(2100);var v=a(1959),g=a(8825),y=a(9582);const w={props:["mainLoaded"],setup(){const e=(0,g.Z)(),l=(0,y.tv)();let a=(0,v.qj)({email:null,password:null}),s=(0,v.iH)(!0);const n=(0,v.iH)(null),i=(0,v.iH)(null),o=()=>{if(n.value.validate(),i.value.validate(),n.value.hasError||i.value.hasError);else if("rg0pa"===a.email&&"n7o4i"===a.password){e.notify({message:"log in sccessfull",color:"positive"});let a={username:"guest",email:"guest@ariamin.com",loggedIn:!0};localStorage.setItem("ariamin-cred",JSON.stringify(a)),l.push("/")}else e.notify({message:"Username or Password is incorrect.",color:"negative"})};return{vmodel:a,isPwd:s,emailRef:n,passRef:i,authIn:o}}};var b=a(4260),h=a(9214),_=a(4379),k=a(4027),q=a(5269),I=a(4689),Z=a(4554),P=a(8240),x=a(7518),Q=a.n(x);const U=(0,b.Z)(w,[["render",f],["__scopeId","data-v-cae598b2"]]),W=U;Q()(w,"components",{QLayout:h.Z,QPage:_.Z,QImg:k.Z,QForm:q.Z,QInput:I.Z,QIcon:Z.Z,QBtn:P.Z})}}]);