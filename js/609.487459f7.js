"use strict";(self["webpackChunkariamin"]=self["webpackChunkariamin"]||[]).push([[609],{8609:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var l=t(3673);function n(e,a,t,n,o,s){const p=(0,l.up)("Input"),u=(0,l.up)("q-btn"),d=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(d,{class:"column q-mx-md"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.seed,((e,a)=>((0,l.wg)(),(0,l.j4)(p,(0,l.dG)({key:a},e,{initVmodel:t.data?t.data[e.name]:"",onValueChange:a=>n.vmodel[e.name]=a}),null,16,["initVmodel","onValueChange"])))),128))]),((0,l.wg)(),(0,l.j4)(l.lR,{to:"#toolbarOpt"},[n.newVmodel.isDif?((0,l.wg)(),(0,l.j4)(u,{key:0,flat:"","no-caps":"",label:"Save",onClick:n.saveTask},null,8,["onClick"])):(0,l.kq)("",!0)]))])),_:1})}t(71);var o=t(1959),s=t(3617);const p=(0,l.RC)((()=>t.e(398).then(t.bind(t,9398)))),u={components:{Input:p},props:{seed:{type:Array},data:{type:Object}},setup(e){const a=(0,o.iH)({}),t=(0,s.oR)(),l=(0,o.Fl)((()=>{let t={...e.data},l=!1,n={},o=Object.keys(a.value);if(o.length>=1){if(e.data){for(let e of o)t[e]!==a.value[e]&&(l=!0),t[e]=a.value[e];return{isDif:l,model:t}}return console.log("data in not"),{isDif:!0,model:a.value}}return{isDif:l,model:n}})),n=()=>{let e=[...t.state.app.cal.tasks],a=t.state.app.app.itemsSelected;console.log(l.value.model),a>=0?e[a]=l.value.model:e.push(l.value.model),t.commit("app/update",{"cal.tasks":e,"page.step":t.state.app.page.prevStep})};return{vmodel:a,store:t,newVmodel:l,saveTask:n}}};var d=t(4260),i=t(4379),r=t(8240),m=t(7518),c=t.n(m);const v=(0,d.Z)(u,[["render",n]]),f=v;c()(u,"components",{QPage:i.Z,QBtn:r.Z})}}]);