(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{f7cf:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("q-list",[s("q-item-label",{attrs:{header:""}},[t._v("DARK MODE")]),s("q-item",{staticClass:"row items-center",attrs:{clickable:""},on:{click:function(e){t.radio("Auto Dark Mode".toUpperCase(),t.autoDark,t.autoDarkItems,t.setAutoDark)}}},[s("q-icon",{attrs:{size:"sm",name:"r_brightness_auto"}}),s("q-item-section",{staticClass:"q-px-md"},[t._v("Auto Dark Mode")]),s("q-item-section",{attrs:{side:""}},[s("span",{staticClass:"q-px-sm"},[t._v(t._s(t.autoDarkItems.filter((function(e){return e.value===t.autoDark}))[0].label))])])],1),s("q-item",{staticClass:"row items-center",attrs:{clickable:""}},[s("q-icon",{attrs:{size:"sm",name:"r_nightlight"}}),s("q-item-section",{staticClass:"q-px-md"},[t._v("Dark Mode")]),s("q-item-section",{attrs:{side:""}},[s("q-toggle",{staticClass:"q-px-sm",attrs:{dense:"",size:"sm",disable:"off"!==t.autoDark,color:"secondary"},on:{input:function(e){return t.darkToggle()}},model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}})],1)],1),s("q-item",{staticClass:"row items-center",attrs:{clickable:""}},[s("q-icon",{attrs:{size:"sm",name:"r_light_mode"}}),s("q-item-section",{staticClass:"q-px-md"},[t._v("Light Theme")]),s("q-item-section",{attrs:{side:""}},[s("span",{staticClass:"q-px-sm"},[t._v("{{}}")])])],1),s("q-item",{staticClass:"row items-center",attrs:{clickable:""}},[s("q-icon",{attrs:{size:"sm",name:"r_nightlight"}}),s("q-item-section",{staticClass:"q-px-md"},[t._v("Dark Theme")]),s("q-item-section",{attrs:{side:""}},[s("span",{staticClass:"q-px-sm"},[t._v("{{}}")])])],1)],1)],1)},o=[],i=s("ded3"),n=s.n(i),r=s("2f62"),l={data(){return{darkMode:!1,autoDark:"off",autoDarkItems:[{label:"Off",value:"off",color:"secondary"},{label:"Folow OS setting",value:"auto",color:"secondary"},{label:"Sunrise/sunset",value:"sun",color:"secondary"}]}},computed:n()({},Object(r["c"])("settings",["settings"])),methods:n()(n()({},Object(r["b"])("settings",["getSettingIdb","saveSettings"])),{},{darkToggle(){this.saveSettings({setting:"darkMode",value:!this.settings.darkMode}),console.log(this.darkMode),this.$q.cordova&&(window.StatusBar.overlaysWebView("true"),this.settings.darkMode?window.StatusBar.styleBlackOpaque():window.StatusBar.styleDefault())},setAutoDark(t){this.autoDark=t},radio(t,e,s,a){this.$q.dialog({title:t,options:{type:"radio",model:e,items:[{label:"Off",value:"off",color:"secondary"},{label:"Folow OS setting",value:"auto",color:"secondary"},{label:"Sunrise / sunset",value:"sun",color:"secondary"}]},cancel:!0,position:"bottom"}).onOk((t=>{a&&"function"===typeof a&&a(t)})).onCancel((()=>{})).onDismiss((()=>{}))}}),beforeMount(){this.darkMode=this.settings.darkMode}},c=l,d=s("2877"),u=s("9989"),m=s("1c1c"),k=s("0170"),g=s("66e5"),q=s("0016"),p=s("4074"),f=s("9564"),b=s("eebe"),v=s.n(b),h=Object(d["a"])(c,a,o,!1,null,null,null);e["default"]=h.exports;v()(h,"components",{QPage:u["a"],QList:m["a"],QItemLabel:k["a"],QItem:g["a"],QIcon:q["a"],QItemSection:p["a"],QToggle:f["a"]})}}]);