"use strict";(self["webpackChunkariamin"]=self["webpackChunkariamin"]||[]).push([[312],{6312:(e,t,l)=>{l.r(t),l.d(t,{default:()=>S});var s=l(3673),a=l(2323),o=l(8880),i=l(9832),p=l.n(i);const d={id:"box",class:"column bckgrd q-pa-md"},n={class:"column q-pb-lg justify-start"},u={class:"column q-mb-md"},m={class:"column q-gutter-y-sm"};function r(e,t,l,i,r,c){const y=(0,s.up)("q-img"),v=(0,s.up)("q-input"),w=(0,s.up)("q-icon"),b=(0,s.up)("q-btn"),f=(0,s.up)("q-form"),g=(0,s.up)("q-page"),h=(0,s.up)("q-layout");return(0,s.wg)(),(0,s.j4)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"flex flex-center bg-primary"},{default:(0,s.w5)((()=>[(0,s._)("div",d,[(0,s._)("div",n,[(0,s.Wm)(y,{src:p(),width:"60px"})]),(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.text.filter((e=>e.step.includes(i.step))),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("span",{class:(0,a.C_)(i.fontStyle(e.style))},(0,a.zw)(e.text),3)])))),128))]),(0,s.Wm)(f,{greedy:"",class:"column justify-center",onSubmit:t[8]||(t[8]=e=>i.auth(e))},{default:(0,s.w5)((()=>[(0,s._)("div",u,[[1,2].some((e=>e===i.step))?((0,s.wg)(),(0,s.j4)(v,{key:0,"hide-bottom-space":"",modelValue:i.vmodel.email,"onUpdate:modelValue":t[0]||(t[0]=e=>i.vmodel.email=e),label:"Email",type:"email",rules:[e=>null!==e&&""!==e&&i.isValidEmail||"enter valid email"]},null,8,["modelValue","rules"])):(0,s.kq)("",!0),[1,2].some((e=>e===i.step))?((0,s.wg)(),(0,s.j4)(v,{key:1,"hide-bottom-space":"",modelValue:i.vmodel.password,"onUpdate:modelValue":t[2]||(t[2]=e=>i.vmodel.password=e),label:"Password",type:i.isPwd?"password":"text",rules:[e=>null!==e&&""!==e||"enter valid password"]},{append:(0,s.w5)((()=>[(0,s.Wm)(w,{name:i.isPwd?"visibility_off":"visibility",onClick:t[1]||(t[1]=e=>i.isPwd=!i.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])):(0,s.kq)("",!0),2===i.step?((0,s.wg)(),(0,s.j4)(v,{key:2,"hide-bottom-space":"",modelValue:i.vmodel.repass,"onUpdate:modelValue":t[4]||(t[4]=e=>i.vmodel.repass=e),label:"Repeat Password",type:i.isPwd?"password":"text",rules:[e=>e===i.vmodel.password&&null!==e&&""!==e||"passwords dont match"]},{append:(0,s.w5)((()=>[(0,s.Wm)(w,{name:i.isPwd?"visibility_off":"visibility",onClick:t[3]||(t[3]=e=>i.isPwd=!i.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])):(0,s.kq)("",!0),3===i.step?((0,s.wg)(),(0,s.j4)(v,{key:3,"hide-bottom-space":"",modelValue:i.vmodel.vcode,"onUpdate:modelValue":t[5]||(t[5]=e=>i.vmodel.vcode=e),label:"Verification code",rules:[e=>null!==e&&""!==e||"enter valid Verification code"],onInput:t[6]||(t[6]=e=>6===i.vmodel.vcode.toString().length?i.auth:"")},null,8,["modelValue","rules"])):(0,s.kq)("",!0)]),(0,s._)("div",m,[(0,s.Wm)(b,{label:[0,1].some((e=>e===i.step))?"log in":2===i.step?"sign up":"Verify",unelevated:"",color:"primary",type:"submit"},null,8,["label"]),(0,s.wy)((0,s.Wm)(b,{label:[0,1].some((e=>e===i.step))?"sign up":"log in",outline:"",color:"primary",onClick:t[7]||(t[7]=e=>[0,1].some((e=>e===i.step))?i.setStep(2):i.setStep(1))},null,8,["label"]),[[o.F8,[0,1,2].some((e=>e===i.step))]])])])),_:1})])])),_:1})])),_:1})}var c=l(1959),y=l(3617);const v=[{step:[0],style:"t1",text:"welcome to ariamin"},{step:[0],style:"",text:"description place holder"},{step:[1],style:"t2",text:"welcome back"},{step:[1],style:"",text:""},{step:[2],style:"t2",text:"create account"},{step:[2],style:"",text:"become a member of ariamin family."},{step:[3],style:"t2",text:"verify your email address"},{step:[3],style:"",text:"To keep your account secure, please enter the verifiction code we sent to your email address."}],w={props:["mainLoaded"],setup(){const e=(0,y.oR)();let t=(0,c.qj)({email:null,password:null,repass:"",vcode:null}),l=(0,c.iH)(!0);const s=(0,c.Fl)((()=>e.state.app.page.step)),a=t=>{e.dispatch("app/setStep",{step:t}),e.dispatch("app/notify")},o=e=>"t1"===e?["text-h4","text-bold","q-pb-md","text-uppercase"]:"t2"===e?["text-h5","text-bold","q-mb-lg","text-uppercase"]:"c1"===e?["text-caption"]:"",i=()=>{0===s.value?a(1):1===s.value?e.dispatch("auth/loginUser",t):2===s.value?e.dispatch("auth/registerUser",t):3===s.value&&e.dispatch("auth/verifyEmail",{token:localStorage.getItem("email-token"),vcode:t.vcode.toUpperCase()})},p=e=>{const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)};return{store:e,vmodel:t,isPwd:l,step:s,text:v,setStep:a,fontStyle:o,auth:i,isValidEmail:p}}};var b=l(4260),f=l(9214),g=l(4379),h=l(4027),x=l(5269),k=l(4689),q=l(4554),_=l(8240),V=l(7518),P=l.n(V);const Z=(0,b.Z)(w,[["render",r],["__scopeId","data-v-66514f80"]]),S=Z;P()(w,"components",{QLayout:f.Z,QPage:g.Z,QImg:h.Z,QForm:x.Z,QInput:k.Z,QIcon:q.Z,QBtn:_.Z})}}]);