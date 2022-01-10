"use strict";(self["webpackChunkariamin"]=self["webpackChunkariamin"]||[]).push([[141],{7141:(e,o,a)=>{a.r(o),a.d(o,{default:()=>F});var l=a(3673),t=a(2323),n=a(8880);const d=(0,l.Uk)(" No results "),s={class:"row items-center",style:{flex:"1"}},i={class:"row bg-grey-4 rounded-borders",style:{flex:"1"}},r=["onClick"];function m(e,o,a,m,u,c){const p=(0,l.up)("q-btn-toggle"),b=(0,l.up)("q-item-section"),g=(0,l.up)("q-item"),C=(0,l.up)("q-select"),f=(0,l.up)("q-input"),V=(0,l.up)("q-btn"),w=(0,l.up)("q-form"),h=(0,l.up)("q-card-section"),k=(0,l.up)("q-card-actions"),q=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{modelValue:m.mode,"onUpdate:modelValue":o[0]||(o[0]=e=>m.mode=e),flat:"",spread:"","no-caps":"","toggle-color":"primary",options:[{label:"Medicine",value:1},{label:"Cosmetics",value:2},{label:"Supplies",value:3}]},null,8,["modelValue"]),(0,l.Wm)(h,{class:"column q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{class:"row"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{"use-input":"","hide-selected":"","fill-input":"",clearable:"",autofocus:"",class:"fit",modelValue:m.model.name,"onUpdate:modelValue":[o[1]||(o[1]=e=>m.model.name=e),m.autoComplete],label:"name",options:m.options,onFilter:m.filterFn,onClear:o[2]||(o[2]=e=>m.onSelectClear("name"))},{"no-optionMaker":(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"text-grey"},{default:(0,l.w5)((()=>[d])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue"]),(0,l.Wm)(C,{clearable:"",class:"fit",modelValue:m.model.dosage,"onUpdate:modelValue":[o[3]||(o[3]=e=>m.model.dosage=e),m.autoComplete],label:"Dosage",disable:!m.model.name,options:m.optionMaker("dosage"),onClear:o[4]||(o[4]=e=>m.onSelectClear("dosage"))},null,8,["modelValue","disable","options","onUpdate:modelValue"]),(0,l.Wm)(C,{clearable:"",class:"fit",modelValue:m.model.dose,"onUpdate:modelValue":[o[5]||(o[5]=e=>m.model.dose=e),m.autoComplete],label:"Dose",disable:!m.model.name,options:m.optionMaker("dose"),onClear:o[6]||(o[6]=e=>m.onSelectClear("dose"))},null,8,["modelValue","disable","options","onUpdate:modelValue"]),(0,l.Wm)(C,{clearable:"",class:"fit",modelValue:m.model.direction,"onUpdate:modelValue":[o[7]||(o[7]=e=>m.model.direction=e),m.autoComplete],label:"Direction",disable:!m.model.name,options:m.optionMaker("direction"),onClear:o[8]||(o[8]=e=>m.onSelectClear("direction"))},null,8,["modelValue","disable","options","onUpdate:modelValue"]),(0,l._)("div",s,[(0,l.Wm)(f,{ref:"count",modelValue:m.model.count,"onUpdate:modelValue":o[9]||(o[9]=e=>m.model.count=e),modelModifiers:{number:!0},disable:1!==m.itemSelected.length,mask:"#####",type:"tel",label:"Count",class:"q-pr-md",style:{flex:"1"},onFocus:o[10]||(o[10]=e=>m.isCountInFocus=!0)},null,8,["modelValue","disable"]),(0,l.Wm)(V,{unelevated:"",disable:!m.model.count,label:"Add",color:"primary",onClick:m.addToMedCart},null,8,["disable","onClick"])])])),_:1})])),_:1}),(0,l.wy)((0,l.Wm)(k,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)([10,15,20,30,60,90,100],((e,o)=>(0,l._)("span",{key:o,class:"row q-pa-sm justify-center",style:{flex:"1"},onClick:o=>m.model.count=e},(0,t.zw)(e),9,r))),64))])])),_:1},512),[[n.F8,m.isCountInFocus]])])),_:1})}a(71);var u=a(1959),c=a(3617);const p=["name","dosage","dose","direction"],b=[{id:1,dosage:["tablet","capsule"],name:"take 1 every 6 hour",abbr:"q8hr"},{id:2,dosage:["tablet","capsule"],name:"take 1 every 8 hour",abbr:"q6hr"},{id:3,dosage:["tablet","capsule"],name:"take 1 every 12 hour",abbr:"q12hr"},{id:4,dosage:["tablet","capsule"],name:"take 1 every 4 hour",abbr:"q4hr"}],g={props:{name:String,dosage:String,dose:String,direction:String,count:Number,addmedDialog:Boolean},emits:["update:addmedDialog"],setup(e,{emit:o}){const a=(0,c.oR)();let t=(0,u.iH)(1),n=(0,u.qj)({name:"",dosage:"",dose:"",direction:"",count:null}),d=(0,u.iH)(null),s=(0,u.iH)(!1),i=(0,u.qj)([...a.state.hCare.mainMedList]);(0,l.bv)((()=>{e.name&&(n=e)}));const r=e=>{let o;o=e?e.toLowerCase():n.name;const l=i.filter((e=>e.name.indexOf(o)>=0&&e.dosage.indexOf(n.dosage)>=0&&e.dose.indexOf(n.dose)>=0&&e.direction.indexOf(n.direction)>=0&&!a.state.hCare.medCart.some((o=>o.name===e.name&&o.dosage===e.dosage&&o.dose===e.dose)))).sort(((e,o)=>e.recent?o.recent-e.recent:o.name<e.name));return n.name=o,l},m=(e,o)=>{f(),o(""!==e?()=>{d.value=g("name",e.toLowerCase()),C()}:()=>{d.value=g("name")})},g=(e,o)=>[...new Set(r(o).map((o=>o[e])))],C=()=>{for(let e of p)"name"!==e&&(r.length>=1?1===g(g("recent")).length&&1===g(e).length&&(n[e]=g(e)[0]):n[e]||(n[e]=r()[0][e]))},f=e=>{for(const[o,a]of p.entries())p.indexOf(e)<=o&&(n[a]="")},V=()=>{s.value=!1;let l={code:r()[0].code,name:n.name,dosage:n.dosage,dose:n.dose,direction:n.direction,amount:n.count};a.commit("hCare/update",{medCart:a.state.hCare.medCart.concat(l)}),o("update:addmedDialog",!e.addmedDialog)};return{options:d,mode:t,model:n,itemSelected:r,isCountInFocus:s,inputs:p,medList:i,directions:b,autoComplete:C,filterFn:m,onSelectClear:f,optionMaker:g,addToMedCart:V}}};var C=a(4260),f=a(151),V=a(8761),w=a(5589),h=a(5269),k=a(7757),q=a(3414),v=a(2035),y=a(4689),S=a(8240),W=a(9367),U=a(7518),Z=a.n(U);const x=(0,C.Z)(g,[["render",m]]),F=x;Z()(g,"components",{QCard:f.Z,QBtnToggle:V.Z,QCardSection:w.Z,QForm:h.Z,QSelect:k.Z,QItem:q.Z,QItemSection:v.Z,QInput:y.Z,QBtn:S.Z,QCardActions:W.Z})}}]);