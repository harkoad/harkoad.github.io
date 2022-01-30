"use strict";(self["webpackChunkariamin"]=self["webpackChunkariamin"]||[]).push([[304],{8304:(e,a,t)=>{t.r(a),t.d(a,{default:()=>j});var o=t(3673),l=t(2323);const n={key:0,class:"column",style:{flex:"1"}},s={key:1,class:"column",style:{flex:"1"}},d={class:"column",style:{flex:"1"}},m={class:"row items-center bg-secondary q-py-sm q-px-md q-ma-sm rounded-borders"},p=(0,o._)("div",{class:"column",style:{flex:"1",color:"#1B263B"}},[(0,o._)("span",{class:"text-overline text-uppercase"},"amount payable"),(0,o._)("span",null,[(0,o._)("span",{class:"text-h6 text-weight-bold"},"12,323,500"),(0,o.Uk)("﷼")])],-1);function i(e,a,t,i,c,u){const r=(0,o.up)("PatientInfo"),g=(0,o.up)("q-btn"),b=(0,o.up)("q-item-label"),y=(0,o.up)("q-badge"),f=(0,o.up)("q-item-section"),w=(0,o.up)("Item"),k=(0,o.up)("List"),h=(0,o.up)("AddMed"),_=(0,o.up)("q-dialog"),v=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(v,{class:"column"},{default:(0,o.w5)((()=>[0===i.app.page.step?((0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(r,{onPrescSelected:i.getMedList},null,8,["onPrescSelected"]),((0,o.wg)(),(0,o.j4)(o.lR,{to:"#toolbarOpt"},[(0,o.Wm)(g,{flat:"","no-caps":"",color:"primary",label:"Save",onClick:a[0]||(a[0]=e=>i.store.dispatch("app/setStep",{step:1}))})]))])):(0,o.kq)("",!0),1===i.app.page.step?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(b,{header:"",class:"q-py-sm"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(Object.keys(i.medOrder).length+" Items"),1)])),_:1}),(0,o._)("div",d,[(0,o.Wm)(k,(0,l.vs)((0,o.F4)({array:i.medOrder})),{default:(0,o.w5)((e=>[(0,o.Wm)(w,null,{main:(0,o.w5)((()=>[(0,o.Wm)(f,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"text-uppercase"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.item.dosage),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"font-md text-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(`${e.item.name} ${e.item.dose} (${e.item.company})`)+"  ",1)])),_:2},1024),(0,o.Wm)(b,{caption:"",class:"font-md"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.item.amount+" "+e.item.dosage)+"  ",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},16)]),((0,o.wg)(),(0,o.j4)(o.lR,{to:"#toolbarOpt"},[(0,o.Wm)(g,{flat:"","no-caps":"",color:"primary",label:"Add",onClick:a[1]||(a[1]=e=>(i.dialog.open=!0,i.dialog.type="add"))})])),((0,o.wg)(),(0,o.j4)(o.lR,{to:"#footer"},[(0,o._)("div",m,[p,(0,o._)("div",null,[(0,o.Wm)(g,{unelevated:"",class:"text-black",label:"Check Out",style:{background:"#EAC435"}})])])]))])):(0,o.kq)("",!0),(0,o.Wm)(_,{position:"bottom",modelValue:i.dialog.open,"onUpdate:modelValue":a[2]||(a[2]=e=>i.dialog.open=e)},{default:(0,o.w5)((()=>["add"===i.dialog.type?((0,o.wg)(),(0,o.j4)(h,{key:0})):(0,o.kq)("",!0)])),_:1},8,["modelValue"])])),_:1})}t(71);var c=t(1959),u=t(3617),r=t(9582);const g=(0,o.RC)((()=>Promise.all([t.e(736),t.e(219)]).then(t.bind(t,4219)))),b=(0,o.RC)((()=>Promise.all([t.e(736),t.e(282)]).then(t.bind(t,8395)))),y=(0,o.RC)((()=>Promise.all([t.e(736),t.e(30)]).then(t.bind(t,1030)))),f=(0,o.RC)((()=>Promise.all([t.e(736),t.e(564)]).then(t.bind(t,3564)))),w={1:{name:"Acetaminophen",dose:"325mg",amount:100,company:"Abidi",dosage:"Tab"},2:{name:"Cetirizine",dose:"10mg",amount:10,company:"Razak",dosage:"Tab"},3:{name:"Adult cold",dose:"325/50/50mg",amount:30,company:"Abidi",dosage:"Tab"},4:{name:"Cephalexin",dose:"500mg",amount:100,company:"Shafa",dosage:"Cap"},5:{name:"Naproxen",dose:"500mg",amount:10,company:"Tehran Daru",dosage:"Tab"},6:{name:"Amoxicillin",dose:"125mg",amount:1,company:"Tehran Daru",dosage:"Syr"}},k={components:{PatientInfo:g,Item:b,List:y,AddMed:f},setup(){const e=(0,u.oR)(),a=(0,r.tv)(),t=(0,c.qj)({open:!1,type:null}),o=(0,c.Fl)({get:()=>e.state.app}),l=()=>{e.dispatch("app/update",{"page.step":1})};return{store:e,router:a,dialog:t,app:o,medOrder:w,getMedList:l}}};var h=t(4260),_=t(4379),v=t(8240),x=t(2350),q=t(2035),C=t(9721),W=t(6778),A=t(7518),P=t.n(A);const R=(0,h.Z)(k,[["render",i]]),j=R;P()(k,"components",{QPage:_.Z,QBtn:v.Z,QItemLabel:x.Z,QItemSection:q.Z,QBadge:C.Z,QDialog:W.Z})}}]);