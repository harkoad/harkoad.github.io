(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh lpr lFf"}},[a("q-header",{staticClass:"q-mr-none bg-transparent",class:t.$q.dark.isActive?"text-white":"text-black",staticStyle:{height:"auto"}},[a("div",{staticClass:"cordova-only",staticStyle:{height:"24px"}}),a("q-toolbar",{staticClass:"row"},[1===t.appState.step&&!t.footerEditMode&&t.$q.screen.width<=940?a("q-btn",{staticClass:"lt-md",attrs:{flat:"",round:"",dense:"",icon:"r_notes"},on:{click:function(e){t.drawer=!t.drawer,t.miniState=!1}}}):t._e(),1!=t.appState.step||t.footerEditMode?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:t.footerEditMode?"r_close":"r_arrow_"+(t.$q.lang.rtl?"forward":"back")+"_ios"},on:{click:function(e){t.goBackARoute(),t.toolbarSearchTerm=""}}}):t._e(),a("q-toolbar-title",{staticClass:"text-h6 text-capitalize"},["Calendar"===t.$route.meta.title||t.footerEditMode?t._e():a("span",[t._v("\n          "+t._s(t.$route.meta.title)+"\n        ")]),t.footerEditMode?a("span",[t._v("\n          "+t._s(t.listItemSelected.length+" Selected")+"\n        ")]):t._e(),"Calendar"!==t.$route.meta.title||t.footerEditMode?t._e():a("span",[t._v("\n          "+t._s(null===t.calendar.year?t.todayDate:t.selDateComputed)+"\n          "),a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",color:"secondary","text-color":"black"},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}},[a("div",{staticClass:"row items-center justify-end q-gutter-sm"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cancel",color:"grey",flat:""}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"OK",color:"secondary",flat:""},on:{click:function(e){return t.save()}}})],1)])],1)],1)]),"normal"===t.appState.toolbarState?a("q-space"):t._e(),t.toolbarParts.length>0&&"normal"===t.appState.toolbarState?a("div",{staticClass:"row lt-sm"},[t.toolbarParts[0].toolbar.tools?a("div",t._l(t.toolbarParts[0].toolbar.tools,(function(e,o){return a("div",{key:e+o},[e.step===t.appState.step?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"r_"+e.icon},on:{click:function(a){return t.toolbarOptions(e.method)}}}):t._e()],1)})),0):t._e(),t.toolbarParts[0].toolbar.menu?a("div",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"r_more_vert"}},[a("q-menu",{attrs:{anchor:"top left"}},t._l(t.toolbarParts[0].toolbar.menu,(function(e,o){return a("q-list",{key:e+o,staticStyle:{width:"150px"}},[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(a){return t.toolbarOptions(e.method,e)}}},[a("q-item-section",[t._v(t._s(e.label))])],1)],1)})),1)],1)],1):t._e()]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:"search"===t.appState.toolbarState,expression:"appState.toolbarState === 'search'"}],staticClass:"row q-mx-sm",staticStyle:{flex:"1"}},[a("q-input",{ref:"toolbarSearch",staticClass:"q-px-sm bg-transparent",staticStyle:{width:"100%","font-size":"16px"},attrs:{dense:"",flat:"",borderless:"",clearable:"",placeholder:"Search ..."},on:{input:function(e){return t.changeSearchTerm()}},model:{value:t.toolbarSearchTerm,callback:function(e){t.toolbarSearchTerm=e},expression:"toolbarSearchTerm"}})],1)],1),a("q-separator",{staticClass:"gt-sm",attrs:{inset:""}})],1),t.$q.screen.width>=940?a("q-footer",{staticClass:"bg-white row justify-center",staticStyle:{"z-index":"100"},attrs:{bordered:""}},[a("div",{staticClass:"row",staticStyle:{flex:"1"}},[a("div",{staticClass:"q-pa-xs",staticStyle:{height:"30px","padding-left":"10px",color:"black"}},[t._v("\n        "+t._s((new Date).toLocaleString("en-US"))+"\n      ")]),a("q-space"),a("div",{staticClass:"q-pa-xs",staticStyle:{"padding-right":"10px",color:"black"}},[t._v("\n        v0.0.1 alpha\n      ")]),a("div",[a("q-icon",{staticClass:"text-blue-grey-10",staticStyle:{"font-size":"1.5em",padding:"4px 10px 3px 3px"},attrs:{name:t.netConnected?"signal_wifi_4_bar":"signal_wifi_off"}}),a("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle","content-style":"font-size: 13px",offset:[10,10]},model:{value:t.netShowing,callback:function(e){t.netShowing=e},expression:"netShowing"}},[a("strong",[t._v(t._s(t.netTooltip))])])],1)],1)]):t._e(),a("q-drawer",{attrs:{id:"mainDrawer","show-if-above":"","mini-to-overlay":"","no-swipe-open":"",mini:!!t.$q.platform.has.touch||t.miniState,width:250,breakpoint:940,"content-class":"column"},on:{mouseover:function(e){t.miniState=!1},mouseout:function(e){t.miniState=!0}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"bg-secondary",staticStyle:{color:"$secondary",transition:"0.1s ease-in-out"}}),a("q-scroll-area",{staticClass:"row",staticStyle:{flex:"1"},attrs:{"bar-style":{background:"transparent"},"thumb-style":{background:"transparent"}}},t._l(t.navLinks,(function(e,o){return a("q-list",{key:e+o},[t.showDrawerSeparator(t.navLinks,o)?a("q-separator",{attrs:{inset:"",spaced:"5px"}}):t._e(),a("sidebarLinks",{attrs:{title:e.name,icon:e.icon,link:e.link}})],1)})),1),a("div",{staticClass:"row justify-evenly"},[a("q-btn",{staticClass:"q-py-sm",attrs:{flat:"",icon:"o_add"},on:{click:function(e){t.addGroup(),t.drawer=!1}}}),a("q-btn",{staticClass:"q-py-sm",attrs:{flat:"",icon:"o_tune"}}),a("q-btn",{staticClass:"q-py-sm",attrs:{flat:"",icon:"o_logout"},on:{click:function(e){return t.logout()}}})],1)],1),a("q-page-container",[a("router-view")],1),a("div",{staticClass:"absolute",staticStyle:{top:"0",bottom:"0",left:"0",right:"0","z-index":"-1"},style:t.$q.dark.isActive?"background: rgba(0, 0, 0, 0.7)":"background: rgba(250, 250, 250, 0.7)"})],1)},s=[],n=a("ded3"),r=a.n(n),i=(a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{ref:"dialog",attrs:{position:"bottom"}},[a("q-card",{staticClass:"full-width",attrs:{flat:""}},[a("q-card-section",{staticClass:"q-pb-none"},[a("div",{staticClass:"row items-center",staticStyle:{flex:"1"}},[a("div",{staticClass:"text-h6 text-bold"},[t._v("Groups")]),a("q-space"),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"r_close"},on:{click:function(e){return t.onCancelClick()}}})],1)]),a("q-card-section",{staticClass:"q-px-md q-pt-sm"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column flex-center q-pa-sm",staticStyle:{width:"calc(100% / 4)"},on:{click:function(e){t.onRegisterPharmacyDialog(),t.onCancelClick()}}},[a("q-icon",{staticClass:"q-pa-sm",staticStyle:{flex:"1","font-size":"40px"},attrs:{name:"r_local_pharmacy"}}),a("span",{staticClass:"text-center",staticStyle:{"line-height":"90%","font-size":"12px"}},[t._v("pharmacy management")])],1)])])],1)],1)}),l=[],c=a("da6d"),d={data(){return{}},methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$emit("ok"),this.hide()},onCancelClick(){this.hide()},onRegisterPharmacyDialog(){this.hide(),this.$q.dialog({component:c["default"],parent:this}).onOk((()=>{console.log("OK")})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Called on OK or Cancel")}))}}},p=d,u=a("2877"),h=a("24e8"),m=a("f09f"),b=a("a370"),f=a("2c91"),g=a("9c40"),S=a("0016"),w=a("eebe"),v=a.n(w),y=Object(u["a"])(p,i,l,!1,null,null,null),q=y.exports;v()(y,"components",{QDialog:h["a"],QCard:m["a"],QCardSection:b["a"],QSpace:f["a"],QBtn:g["a"],QIcon:S["a"]});var k=a("7464"),C=a("2f62"),_={components:{sidebarLinks:()=>a.e(11).then(a.bind(null,"58fb"))},data(){return{toolbarTitle:"Dashboard",toolbarShow:!0,toolbarSearchTerm:null,leftDrawerOpen:!0,drawer:!1,miniState:!0,standardLinks:[{category:"user",name:"dashboard",icon:"dashboard",link:"/dashboard"},{category:"user",name:"wallet",icon:"account_balance_wallet",link:"/finance"},{category:"user",name:"calendar",icon:"event",link:"/calendar"},{category:"user",name:"mail",icon:"email",link:"/mail"},{category:"user",name:"health",icon:"favorite_border",link:"/health"},{category:"user",name:"jobHunt",icon:"work_outline",link:"/job"}],netConnected:!1,netTooltip:"",serverConc:!1,netShowing:null,tab:this.$t("dashboard"),selectedDate:null}},created(){this.getSetting()},updated(){this.$q.dark.set(this.settings.darkMode)},mixins:[k["a"]],computed:r()(r()(r()(r()(r()({},Object(C["d"])("appState",["subGroups","footerEditMode","listItemSelected"])),Object(C["c"])("appState",["appState"])),Object(C["c"])("calendar",["calendar"])),Object(C["c"])("settings",["settings"])),{},{ministate(){return this.drawer},headerTitle(){return this.appState.group[this.appState.group.length-1]},toolbarParts(){return void 0!==this.$route.meta.title?this.appState.page.filter((t=>t.name===this.$route.meta.title.toLowerCase())):""},todayDate(){return(new Date).toLocaleDateString("en-us",{year:"numeric",month:"short"})},selDateComputed(){var t=this.calendar;return new Date(t.year,t.month-1,t.date).toLocaleString("default",{month:"short"})+" "+t.year},navLinks(){return this.standardLinks.concat(this.subGroups)}}),methods:r()(r()(r()(r()(r()({},Object(C["b"])("calendar",["calDateSelect","calToday"])),Object(C["b"])("settings",["getSetting"])),Object(C["b"])("appState",["setStep","showFooterListEdit"])),Object(C["b"])("auth",["logoutUser"])),{},{toolbarOptions(t,e){"addDrug"===t?this.addDrug():"nextGroup"===t?this.nextGroup(e):"search"===t?(this.changeToolbarState("search"),this.$nextTick((()=>this.$refs.toolbarSearch.focus()))):"calToday"===t&&this.calToday()},changeSearchTerm(){this.searchFor(this.toolbarSearchTerm)},addGroup(){this.$q.dialog({component:q,parent:this}).onOk((()=>{console.log("OK")})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Called on OK or Cancel")}))},save(){this.calDateSelect(this.selectedDate)},goBackARoute(){this.footerEditMode?this.showFooterListEdit():1!==this.appState.step?this.setStep({step:this.appState.step-1}):window.history.length>1?this.$router.go(-1):this.$router.push("/")},logout(){this.logoutUser()},showDrawerSeparator(t,e){return 0!==e&&(t.length!==e&&t[e].category!==t[e-1].category)}}),watch:{}},x=_,D=(a("a399"),a("4d5a")),Q=a("e359"),$=a("8380"),O=a("65c6"),T=a("6ac5"),L=a("7cbe"),j=a("52ee"),E=a("4e73"),M=a("1c1c"),P=a("66e5"),z=a("4074"),I=a("27f9"),G=a("eb85"),K=a("7ff0"),A=a("05c0"),F=a("9404"),B=a("4983"),H=a("0170"),N=a("09e3"),R=a("7f67"),Y=Object(u["a"])(x,o,s,!1,null,"7627911c",null);e["default"]=Y.exports;v()(Y,"components",{QLayout:D["a"],QHeader:Q["a"],QSpinnerDots:$["a"],QToolbar:O["a"],QBtn:g["a"],QToolbarTitle:T["a"],QPopupProxy:L["a"],QDate:j["a"],QSpace:f["a"],QMenu:E["a"],QList:M["a"],QItem:P["a"],QItemSection:z["a"],QInput:I["a"],QSeparator:G["a"],QFooter:K["a"],QIcon:S["a"],QTooltip:A["a"],QDrawer:F["a"],QScrollArea:B["a"],QItemLabel:H["a"],QPageContainer:N["a"]}),v()(Y,"directives",{ClosePopup:R["a"]})},"93f6":function(t,e,a){},a399:function(t,e,a){"use strict";a("93f6")}}]);