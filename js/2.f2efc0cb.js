(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"6ca0":function(t,e,a){"use strict";a("8298")},"713b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh lpr lFf"}},[a("q-header",{staticClass:"q-mr-none bg-transparent",class:t.$q.dark.isActive?"text-white":"text-black",staticStyle:{height:"auto"}},[a("div",{staticClass:"cordova-only",staticStyle:{height:"24px"}}),a("q-toolbar",{staticClass:"row"},[1===t.appState.step&&"normal"===t.appState.toolbarState?a("q-btn",{staticClass:"lt-sm",attrs:{flat:"",round:"",dense:"",icon:"r_notes"},on:{click:function(e){t.drawer=!t.drawer,t.miniState=!1}}}):t._e(),1!=t.appState.step||"normal"!=t.appState.toolbarState?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"r_arrow_back_ios"},on:{click:function(e){t.prevStep(),t.toolbarSearchTerm=""}}}):t._e(),"Calendar"!==t.$route.meta.title?a("q-toolbar-title",{staticClass:"text-h6 text-capitalize"},[t._v("\n        "+t._s(t.$route.meta.title)+"\n      ")]):a("q-toolbar-title",{staticClass:"text-h6 text-capitalize"},[t._v("\n        "+t._s(null===t.calendar.year?t.todayDate:t.selDateComputed)+"\n        "),a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY",color:"secondary","text-color":"black"},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}},[a("div",{staticClass:"row items-center justify-end q-gutter-sm"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cancel",color:"grey",flat:""}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"OK",color:"secondary",flat:""},on:{click:function(e){return t.save()}}})],1)])],1)],1),"normal"===t.appState.toolbarState?a("q-space"):t._e(),t.toolbarParts.length>0&&"normal"===t.appState.toolbarState?a("div",{staticClass:"row lt-sm"},[t.toolbarParts[0].toolbar.tools?a("div",t._l(t.toolbarParts[0].toolbar.tools,(function(e,s){return a("div",{key:e+s},[e.step===t.appState.step?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"r_"+e.icon},on:{click:function(a){return t.toolbarOptions(e.method)}}}):t._e()],1)})),0):t._e(),t.toolbarParts[0].toolbar.menu?a("div",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"r_more_vert"}},[a("q-menu",{attrs:{anchor:"top left"}},t._l(t.toolbarParts[0].toolbar.menu,(function(e,s){return a("q-list",{key:e+s,staticStyle:{width:"150px"}},[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(a){return t.toolbarOptions(e.method,e)}}},[a("q-item-section",[t._v(t._s(e.label))])],1)],1)})),1)],1)],1):t._e()]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:"search"===t.appState.toolbarState,expression:"appState.toolbarState === 'search'"}],staticClass:"row q-mx-sm",staticStyle:{flex:"1"}},[a("q-input",{ref:"toolbarSearch",staticClass:"q-px-sm bg-transparent",staticStyle:{width:"100%","font-size":"16px"},attrs:{dense:"",flat:"",borderless:"",clearable:"",placeholder:"Search ..."},on:{input:function(e){return t.changeSearchTerm()}},model:{value:t.toolbarSearchTerm,callback:function(e){t.toolbarSearchTerm=e},expression:"toolbarSearchTerm"}})],1)],1)],1),a("q-footer",{staticClass:"bg-white row justify-center gt-xs",staticStyle:{"z-index":"100"},attrs:{bordered:""}},[a("div",{staticClass:"row",staticStyle:{flex:"1"}},[a("div",{staticClass:"q-pa-xs",staticStyle:{height:"30px","padding-left":"10px",color:"black"}},[t._v("\n        "+t._s((new Date).toLocaleString("en-US"))+"\n      ")]),a("q-space"),a("div",{staticClass:"q-pa-xs",staticStyle:{"padding-right":"10px",color:"black"}},[t._v("\n        v0.0.1 alpha\n      ")]),a("div",[a("q-icon",{staticClass:"text-blue-grey-10",staticStyle:{"font-size":"1.5em",padding:"4px 10px 3px 3px"},attrs:{name:t.netConnected?"signal_wifi_4_bar":"signal_wifi_off"}}),a("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle","content-style":"font-size: 13px",offset:[10,10]},model:{value:t.netShowing,callback:function(e){t.netShowing=e},expression:"netShowing"}},[a("strong",[t._v(t._s(t.netTooltip))])])],1)],1)]),a("q-drawer",{attrs:{"show-if-above":"","mini-to-overlay":"",bordered:"","no-swipe-open":"","no-swipe-close":"",mini:t.miniState,width:250,breakpoint:600,"content-class":"column"},on:{mouseover:function(e){t.miniState=!1},mouseout:function(e){t.miniState=!0}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"cordova-only",staticStyle:{height:"24px"}}),a("div",{staticClass:"bg-secondary",staticStyle:{color:"$secondary",transition:"0.1s ease-in-out"}}),a("q-scroll-area",{staticClass:"row",staticStyle:{flex:"1"},attrs:{"bar-style":{background:"transparent"},"thumb-style":{background:"transparent"}}},t._l(t.essentialLinks,(function(e,s){return a("q-list",{key:e+s},[t._l(e.parts,(function(t,e){return a("div",{key:t+e},[a("sidebarLinks",{attrs:{title:t.title,icon:t.icon,link:t.link}})],1)})),a("q-separator",{staticClass:"bg-grey",attrs:{inset:"",spaced:""}})],2)})),1),a("q-list",[a("q-item",{staticClass:"row",attrs:{clickable:"",exact:"",tag:"a","active-class":"active"},on:{click:function(e){return t.addGroup()}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"r_add"}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-capitalize"},[t._v("Add group")])],1)],1),a("sidebarLinks",{attrs:{title:"Settings",icon:"r_tune",link:"/generalSettings"}})],1)],1),a("q-page-container",[a("router-view")],1),a("div",{staticClass:"absolute",staticStyle:{top:"0",bottom:"0",left:"0",right:"0","z-index":"-1"},style:t.$q.dark.isActive?"background: rgba(0, 0, 0, 0.7)":"background: rgba(250, 250, 250, 0.7)"})],1)},n=[],o=(a("e6cf"),a("ded3")),i=a.n(o),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{ref:"dialog",staticClass:"font-nunito"},[a("q-card",{staticClass:"full-width",staticStyle:{"border-radius":"25px"},attrs:{flat:""}},[a("q-card-section",{staticClass:"q-pb-none"},[a("div",{staticClass:"row items-center",staticStyle:{flex:"1"}},[a("div",{staticClass:"text-h6 text-bold"},[t._v("Groups")]),a("q-space"),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"r_close"},on:{click:function(e){return t.onCancelClick()}}})],1)]),a("q-card-section",{staticClass:"q-px-md q-pt-sm"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column flex-center q-pa-sm",staticStyle:{width:"calc(100% / 4)"},on:{click:function(e){t.$router.push("/pharmRegi"),t.onCancelClick()}}},[a("q-icon",{staticClass:"q-pa-sm",staticStyle:{flex:"1","font-size":"40px"},attrs:{name:"r_local_pharmacy"}}),a("span",{staticClass:"text-center",staticStyle:{"line-height":"90%","font-size":"12px"}},[t._v("pharmacy management")])],1)])])],1)],1)},r=[],c={data(){return{}},methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$emit("ok"),this.hide()},onCancelClick(){this.hide()}}},d=c,m=a("2877"),u=a("24e8"),p=a("f09f"),h=a("a370"),b=a("2c91"),f=a("9c40"),g=a("0016"),y=a("eebe"),S=a.n(y),v=Object(m["a"])(d,l,r,!1,null,null,null),k=v.exports;S()(v,"components",{QDialog:u["a"],QCard:p["a"],QCardSection:h["a"],QSpace:b["a"],QBtn:f["a"],QIcon:g["a"]});var C=a("7464"),w=a("2f62"),x={name:"MainLayout",data(){return{toolbarTitle:"Dashboard",toolbarShow:!0,toolbarSearchTerm:"",leftDrawerOpen:!0,drawer:!1,miniState:!0,essentialLinks:[{name:"login",parts:[{title:"signin",icon:"r_login",link:"/logOrSign"}]},{name:"User",icon:"r_person",parts:[{title:this.$t("linkHeader.dashboard"),icon:"r_dashboard",link:"/dashboard"},{title:this.$t("linkHeader.wallet"),icon:"r_account_balance_wallet",link:"/finance"},{title:this.$t("linkHeader.calendar"),icon:"r_event",link:"/calendar"},{title:this.$t("linkHeader.messenger"),icon:"r_email",link:"/mail"},{title:this.$t("linkHeader.health"),icon:"r_favorite",link:"/health"},{title:this.$t("linkHeader.jobHunt"),icon:"r_work",link:"/job"}]},{name:"pharmacy management",icon:"o_local_pharmacy",parts:[{title:"Sell manager",icon:"r_shopping_cart",link:"/pht/sell"},{title:"Sell Record",icon:"r_history",link:"/pht/sellhist"},{title:"Inventory",icon:"r_inventory_2",link:"/pht/inventory"}]}],netConnected:!1,netTooltip:"",serverConc:!1,netShowing:null,tab:this.$t("linkHeader.dashboard"),selectedDate:null}},mixins:[C["a"]],components:{sidebarLinks:()=>a.e(13).then(a.bind(null,"58fb"))},watch:{$route:{immediate:!0,handler(t,e){this.toolbarTitle=t.meta.title||this.$t("linkHeader.dashboard"),this.toolbarShow=t.meta.toolbarShow,navigator.onLine?(this.netConnected=!0,this.netTooltip="Connected"):(this.netConnected=!1,this.netTooltip="Disonnected")}},netConnected:function(){setTimeout((()=>{this.netShowing=!0}),500),setTimeout((()=>{this.netShowing=null}),4e3)}},computed:i()(i()(i()(i()({},Object(w["c"])("appState",["appState"])),Object(w["c"])("calendar",["calendar"])),Object(w["c"])("settings",["settings"])),{},{ministate:function(){return this.drawer},headerTitle(){return this.appState.group[this.appState.group.length-1]},toolbarParts(){return void 0!==this.$route.meta.title?this.appState.page.filter((t=>t.name===this.$route.meta.title.toLowerCase())):""},todayDate(){return(new Date).toLocaleDateString("en-us",{year:"numeric",month:"short"})},selDateComputed(){var t=this.calendar;return new Date(t.year,t.month-1,t.date).toLocaleString("default",{month:"short"})+" "+t.year}}),methods:i()(i()(i()({},Object(w["b"])("calendar",["calDateSelect","calToday"])),Object(w["b"])("settings",["getSettingIdb"])),{},{toolbarOptions(t,e){"addDrug"===t?this.addDrug():"nextGroup"===t?this.nextGroup(e):"search"===t?(this.changeToolbarState("search"),this.$nextTick((()=>this.$refs.toolbarSearch.focus()))):"calToday"===t&&this.calToday()},changeSearchTerm(){this.searchFor(this.toolbarSearchTerm)},addGroup(){this.$q.dialog({component:k,parent:this}).onOk((()=>{console.log("OK")})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Called on OK or Cancel")}))},save(){this.calDateSelect(this.selectedDate)}}),mounted(){this.getSettingIdb()},updated(){this.$q.dark.set(this.settings.darkMode)}},O=x,q=(a("6ca0"),a("4d5a")),_=a("e359"),j=a("8380"),$=a("65c6"),D=a("6ac5"),Q=a("7cbe"),T=a("52ee"),I=a("4e73"),B=a("1c1c"),L=a("66e5"),K=a("4074"),H=a("27f9"),P=a("7ff0"),z=a("05c0"),F=a("9404"),A=a("4983"),N=a("eb85"),M=a("0170"),G=a("09e3"),E=a("7f67"),V=Object(m["a"])(O,s,n,!1,null,"3309bb2f",null);e["default"]=V.exports;S()(V,"components",{QLayout:q["a"],QHeader:_["a"],QSpinnerDots:j["a"],QToolbar:$["a"],QBtn:f["a"],QToolbarTitle:D["a"],QPopupProxy:Q["a"],QDate:T["a"],QSpace:b["a"],QMenu:I["a"],QList:B["a"],QItem:L["a"],QItemSection:K["a"],QInput:H["a"],QFooter:P["a"],QIcon:g["a"],QTooltip:z["a"],QDrawer:F["a"],QScrollArea:A["a"],QSeparator:N["a"],QItemLabel:M["a"],QPageContainer:G["a"]}),S()(V,"directives",{ClosePopup:E["a"]})},7464:function(t,e,a){"use strict";a.d(e,"a",(function(){return q}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{ref:"dialog",staticClass:"font-nunito"},[a("div",{staticClass:"column no-wrap",class:t.$q.dark.isActive?"bg-grey-10":"bg-grey-2",staticStyle:{width:"100%"}},[a("q-card-section",{staticClass:"row"},[a("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(t.$t("general.search")))]),a("q-space"),a("q-btn",{attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:t.onCancelClick}})],1),a("q-card-section",{staticClass:"column q-gutter-y-sm no-wrap q-py-none",staticStyle:{flex:"1",overflow:"auto"}},[a("div",{staticClass:"row",staticStyle:{height:"30px"}},[a("q-scroll-area",{staticClass:"column no-wrap flex-center",staticStyle:{flex:"1"},attrs:{"bar-style":{background:"transparent"},"thumb-style":{background:"transparent"},horizontal:""}},[a("div",{staticClass:"row no-wrap q-gutter-x-sm"},t._l(t.searchByOpt,(function(e,s){return a("q-btn",{key:e+s,staticClass:"text-bold",attrs:{size:"sm",padding:"6px 10px",unelevated:e===t.searchBy,outline:e!=t.searchBy,color:e===t.searchBy?"secondary":"grey",label:e},on:{click:function(a){t.searchBy=e}}})})),1)])],1),a("q-select",{attrs:{"use-input":"","hide-selected":"","fill-input":"",standout:"bg-secondary text-white",behavior:"menu","input-debounce":"0",label:t.$t("phmgtSell.drugName"),options:t.options},on:{filter:t.filterFn,"filter-abort":t.abortFilterFn,input:function(e){t.selectInputEmit(),t.clearDosage(),t.autoComplete(t.dosageOpt)}},scopedSlots:t._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[t._v("\n              No results\n            ")])],1)]},proxy:!0},t.models.name?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){return e.stopPropagation(),t.clearName()}}})]},proxy:!0}:null],null,!0),model:{value:t.models.name,callback:function(e){t.$set(t.models,"name",e)},expression:"models.name"}}),a("q-select",{attrs:{standout:"bg-secondary text-white",behavior:"menu",disable:!t.models.name,options:t.dosageOpt,label:t.$t("phmgtSell.dosage")},on:{input:function(e){t.tempObj.dosage=t.filterBySearch(t.models.dosage,t.tempObj.name,"dosage"),t.clearDose()}},scopedSlots:t._u([t.models.dosage?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){return e.stopPropagation(),t.clearDosage()}}})]},proxy:!0}:null],null,!0),model:{value:t.models.dosage,callback:function(e){t.$set(t.models,"dosage",e)},expression:"models.dosage"}}),a("q-select",{attrs:{standout:"bg-secondary text-white",behavior:"menu",disable:!t.models.dosage,options:t.doseOpt,label:t.$t("phmgtSell.dose")},on:{input:function(e){t.tempObj.dose=t.filterBySearch(t.models.dose,t.tempObj.dosage,"dose"),t.clearManuf()}},scopedSlots:t._u([t.models.dose?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){return e.stopPropagation(),t.clearDose()}}})]},proxy:!0}:null],null,!0),model:{value:t.models.dose,callback:function(e){t.$set(t.models,"dose",e)},expression:"models.dose"}}),a("q-select",{attrs:{standout:"bg-secondary text-white",behavior:"menu",disable:!t.models.dose,options:t.manufOpt,label:t.$t("general.company")},on:{input:function(e){t.tempObj.manuf=t.filterBySearch(t.models.manuf,t.tempObj.dose,"company"),t.models.amount=null}},scopedSlots:t._u([t.models.manuf?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){return e.stopPropagation(),t.clearManuf()}}})]},proxy:!0}:null],null,!0),model:{value:t.models.manuf,callback:function(e){t.$set(t.models,"manuf",e)},expression:"models.manuf"}}),a("q-input",{staticStyle:{flex:"1"},attrs:{standout:"bg-secondary text-white",disable:!t.models.manuf,type:"tel",placeholder:t.$t("general.amount"),rules:[function(e){return e<=t.outOfStock||"OUT OF STOCK"}]},model:{value:t.models.amount,callback:function(e){t.$set(t.models,"amount",e)},expression:"models.amount"}})],1),a("q-card-section",{staticClass:"row"},[a("q-btn",{staticStyle:{flex:"1"},attrs:{outline:t.addBtnState.state,disable:t.addBtnState.state,color:t.addBtnState.color,label:t.addBtnState.label},on:{click:function(e){t.submitItem(),t.onCancelClick()}}})],1)],1)])},n=[],o=(a("c975"),a("ddb0"),a("ded3")),i=a.n(o),l=a("2f62"),r={data(){return{models:{name:null,dosage:null,dose:null,manuf:null,amount:null},searchDrugName:"",searchBy:"Generic",searchByOpt:["Generic","Brand","Harasi","Aria","IRC"],options:"",searchKey:"generic",tempObj:{name:[],dosage:[],dose:[],manuf:[{}]}}},created(){this.options=this.stringOptions},methods:i()(i()({show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$emit("ok"),this.hide()},onCancelClick(){this.hide()}},Object(l["b"])("drugOrder",["addDrugItem"])),{},{filterFn(t,e,a){var s;this.searchDrugName=t,"b-"===t.substring(0,2)?(s=t.substring(2),this.searchKey="brand"):(s=t,this.searchKey="generic"),setTimeout((()=>{e((()=>{if(""===s)this.options=this.stringOptions;else{const t=s.toLowerCase();this.options=this.stringOptions.filter((e=>e.toLowerCase().indexOf(t)>-1))}}),(t=>{""!==s&&t.options.length>0&&(t.setOptionIndex(-1),t.moveOptionSelection(1,!0))}))}),300)},abortFilterFn(){},filterBySearch(t,e,a){const s=t.toLowerCase();return e.filter((t=>t[a].toLowerCase().indexOf(s)>-1))},arrKeyVals(t,e){return t.map((t=>t[e]))},uniq(t){return Array.from(new Set(t))},submitItem(){this.addDrugItem({medId:this.tempObj.manuf[0].medId,amount:parseInt(this.models.amount)})},selectInputEmit(t){""===t?console.log(typeof t):this.tempObj.name=this.filterBySearch(this.models.name,this.medicineList,this.searchKey)},clearName(){this.models.name=null,this.models.dosage=null,this.models.dose=null,this.models.manuf=null,this.models.amount=null,this.tempObj.name=[],this.tempObj.dosage=[],this.tempObj.dose=[],this.tempObj.manuf=[{}]},clearDosage(){this.models.dosage=null,this.models.dose=null,this.models.manuf=null,this.models.amount=null,this.tempObj.dosage=[],this.tempObj.dose=[],this.tempObj.manuf=[{}]},clearDose(){this.models.dose=null,this.models.manuf=null,this.models.amount=null,this.tempObj.dose=[],this.tempObj.manuf=[{}]},clearManuf(){this.models.manuf=null,this.models.amount=null,this.tempObj.manuf=[{}]},autoComplete(t,e){1===t.length&&(this.models.dosage=this.tempObj.name[0].dosage,this.models.dose=this.tempObj.name[0].dose,this.models.manuf=this.tempObj.name[0].company,this.tempObj.dosage=this.tempObj.name,this.tempObj.dose=this.tempObj.name,this.tempObj.manuf=this.tempObj.name)}}),computed:i()(i()(i()(i()({},Object(l["c"])("inventory",["inventory"])),Object(l["c"])("medList",["medicineList"])),Object(l["c"])("drugOrder",["drugOrder"])),{},{dosageOpt(){return this.uniq(this.arrKeyVals(this.tempObj.name,"dosage"))},doseOpt(){return this.uniq(this.arrKeyVals(this.tempObj.dosage,"dose"))},manufOpt(){return this.uniq(this.arrKeyVals(this.tempObj.dose,"company"))},outOfStock(){const t=this.inventory[this.tempObj.manuf[0].medId];return void 0!==t&&t.inventory},addBtnState(){var t=this.drugOrder.med.map((t=>t.medId));return this.models.name&&this.models.dosage&&this.models.dose&&this.models.manuf?t.indexOf(this.tempObj.manuf[0].medId)>-1?{state:!0,color:"warning",label:this.$t("phmgtSell.itemAlreadyExist")}:this.models.amount&&"0"!==this.models.amount?{state:!1,color:"secondary",label:this.$t("general.add")}:{state:!0,color:"grey",label:this.$t("general.add")}:{state:!0,color:"grey",label:this.$t("general.add")}},stringOptions(){return"b-"===this.searchDrugName.substring(0,2)?Array.from(new Set(this.medicineList.map((t=>t.brand)))):Array.from(new Set(this.medicineList.map((t=>t.generic))))}})},c=r,d=(a("c54a"),a("2877")),m=a("24e8"),u=a("a370"),p=a("2c91"),h=a("9c40"),b=a("4983"),f=a("ddd8"),g=a("66e5"),y=a("4074"),S=a("0016"),v=a("27f9"),k=a("8572"),C=a("eebe"),w=a.n(C),x=Object(d["a"])(c,s,n,!1,null,null,null),O=x.exports;w()(x,"components",{QDialog:m["a"],QCardSection:u["a"],QSpace:p["a"],QBtn:h["a"],QScrollArea:b["a"],QSelect:f["a"],QItem:g["a"],QItemSection:y["a"],QIcon:S["a"],QInput:v["a"],QField:k["a"]});const q={data(){return{qrScanOption:{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,saveHistory:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,orientation:'landscape"',disableAnimations:!0,disableSuccessBeep:!0}}},methods:{addDrug(){this.$q.dialog({component:O,parent:this,persistent:!0}).onOk((()=>{console.log("OK")})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Called on OK or Cancel")}))}}}},8298:function(t,e,a){},c54a:function(t,e,a){"use strict";a("d4ee")},d4ee:function(t,e,a){}}]);