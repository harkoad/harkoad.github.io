(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"1f96":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row bg-white rounded-borders q-mb-xs"},[e.custBreakWidth?i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"touch-hold",rawName:"v-touch-hold.mouse",value:e.showFooterListEdit,expression:"showFooterListEdit",modifiers:{mouse:!0}}],staticStyle:{flex:"1"}},[i("q-item-section",{directives:[{name:"show",rawName:"v-show",value:e.appState.mobileListEdit||!e.custBreakWidth,expression:"appState.mobileListEdit || !custBreakWidth"}],attrs:{side:"",top:""}},[i("q-checkbox",{staticClass:"q-ml-none",attrs:{size:"sm"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e.avatar?i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{color:"secondary","text-color":"white"}},[e.icon?i("q-icon",{attrs:{icon:e.icon?"r_"+e.icon:""}}):i("span",[e._v(e._s(e.title.split("")[0].toUpperCase()))])],1)],1):e._e(),i("q-item-section",[i("div",[i("q-item-label",{staticClass:"row items-center"},[e.indicator?i("div",{class:"bg-"+e.indicator,staticStyle:{width:"10px",height:"10px","border-radius":"50%"}},[e._v(" ")]):e._e(),i("span",{staticClass:"text-capitalize"},[e._v(e._s(e.title))])]),e.caption?i("q-item-label",{attrs:{caption:"",lines:e.captionLines?e.captionLines:1}},[e._v(e._s(e.caption)+"\n        ")]):e._e()],1)]),i("q-item-section",{attrs:{side:"",top:""}},[i("div",[e.sideCaptionTop?i("q-item-label",[e._v(e._s(e.sideCaptionTop))]):e._e(),e.sideCaption?i("q-item-label",[e._v(e._s(e.sideCaption))]):e._e()],1)]),e.itemSideBtn?i("q-item-section",{attrs:{side:""}},[e._t("sideBtn")],2):e._e()],1):i("div",{staticClass:"row q-pa-sm",staticStyle:{flex:"1"}},[i("q-checkbox",{staticClass:"q-pr-sm",attrs:{size:"sm"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e.custBreakWidth?e._e():i("div",{staticClass:"row items-center justify-between",staticStyle:{flex:"1"}},e._l(e.headers,(function(t,a){return i("div",{key:t+a,staticClass:"column",staticStyle:{padding:"auto"},style:0===a?{flex:3}:{flex:1,alignItems:"center"}},["amount"!==t.label?i("div",[i("span",{staticClass:"text-capitalize"},[e._v("\n            "+e._s(e.list[t.name])+"\n          ")])]):e._e(),e.item.amount?i("div",[e._v("\n          "+e._s(e.item.amount)+"\n        ")]):e._e()])})),0)],1)],1)},s=[],o=i("ded3"),n=i.n(o),c=i("2f62"),l=i("184b"),r={props:["item","list","avatar","icon","indicator","title","caption","captionLines","sideCaptionTop","sideCaption","itemSideBtn","headers","medicineList"],data(){return{selected:!1,inicatorColor:["green","warning","orange"]}},mixins:[l["a"]],methods:n()({},Object(c["b"])("appState",["showFooterListEdit"])),computed:n()({},Object(c["c"])("appState",["appState"]))},d=r,p=i("2877"),m=i("8f8e"),u=i("66e5"),v=i("4074"),b=i("cb32"),_=i("0016"),h=i("0170"),w=i("714f"),f=i("f449"),x=i("eebe"),q=i.n(x),C=Object(p["a"])(d,a,s,!1,null,"2f5eb9b2",null);t["default"]=C.exports;q()(C,"components",{QCheckbox:m["a"],QItem:u["a"],QItemSection:v["a"],QAvatar:b["a"],QIcon:_["a"],QItemLabel:h["a"]}),q()(C,"directives",{Ripple:w["a"],TouchHold:f["a"]})}}]);