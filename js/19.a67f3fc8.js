(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{bcb4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column relative",staticStyle:{flex:"1"}},[n("q-scroll-area",{staticClass:"column",staticStyle:{flex:"1"}},[n("form",{staticClass:"q-pb-xl q-ma-sm"},[n("div",{staticClass:"column"},[n("q-input",{attrs:{outlined:"",dense:e.ifdense,type:"text",debounce:"500",loading:"loading"===e.status&&!!e.medEcode,label:e.$t("medEcode"),hint:e.medEcode?e.serverMsg:""},scopedSlots:e._u([{key:"append",fn:function(){return[""!=e.medEcode&&e.medEcode?n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"r_close"},on:{click:function(t){e.medEcode=""}}}):e._e(),"success"===e.status&&e.medEcode?n("q-icon",{attrs:{name:"r_check_circle",color:"secondary"}}):e._e(),"error"===e.status&&e.medEcode?n("q-icon",{attrs:{name:"r_error",color:"warning"}}):e._e(),n("div",{staticStyle:{width:"10px"}}),e.medEcode?e._e():n("q-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{name:"qr_code"},on:{click:function(t){return e.medEcodeQrScan()}}})]},proxy:!0}]),model:{value:e.medEcode,callback:function(t){e.medEcode=t},expression:"medEcode"}})],1),n("div",{staticClass:"text-uppercase text-caption q-mb-md"},[e._v(e._s(e.$t("patientInfo")))]),n("div",{staticClass:"column q-gutter-y-sm"},[n("q-input",{attrs:{outlined:"",clearable:"",dense:e.ifdense,name:"patient_ssn",type:"tel",maxlength:"10",label:e.$t("ssn")},model:{value:e.patient.ssn,callback:function(t){e.$set(e.patient,"ssn",t)},expression:"patient.ssn"}}),n("q-select",{staticStyle:{flex:"1"},attrs:{outlined:"",clearable:"",dense:e.ifdense,"bg-color":"transparent",label:e.$t("insType"),options:e.insureTypes,behavior:"menu"},model:{value:e.patient.insurance_type,callback:function(t){e.$set(e.patient,"insurance_type",t)},expression:"patient.insurance_type"}}),n("q-input",{attrs:{outlined:"",clearable:"",dense:e.ifdense,name:"patient_firstname",type:"text",maxlength:"25",label:e.$t("firstname")},model:{value:e.patient.firstname,callback:function(t){e.$set(e.patient,"firstname",t)},expression:"patient.firstname"}}),n("q-input",{attrs:{outlined:"",clearable:"",dense:e.ifdense,name:"patient_lastname",type:"text",maxlength:"25",label:e.$t("lastname")},model:{value:e.patient.lastname,callback:function(t){e.$set(e.patient,"lastname",t)},expression:"patient.lastname"}}),n("q-input",{attrs:{outlined:"",clearable:"",dense:e.ifdense,name:"patient_dob",type:"text",label:e.$t("dob")},on:{focus:function(e){return e.target.type="date"},blur:function(e){return e.target.type="text"}},model:{value:e.patient.dob,callback:function(t){e.$set(e.patient,"dob",t)},expression:"patient.dob"}}),n("q-input",{attrs:{outlined:"",clearable:"",dense:e.ifdense,name:"patient_cell_number",type:"tel",maxlength:"11",label:e.$t("cell")},model:{value:e.patient.cell,callback:function(t){e.$set(e.patient,"cell",t)},expression:"patient.cell"}})],1),n("div",{staticClass:"text-uppercase text-caption q-my-md"},[e._v(e._s(e.$t("docInfo")))]),n("div",{staticClass:"column q-gutter-y-sm"},[n("q-select",{attrs:{outlined:"",clearable:"",dense:e.ifdense,"bg-color":"transparent",label:e.$t("speciality"),options:e.insureTypes,behavior:"menu"},model:{value:e.patient.insurance_type,callback:function(t){e.$set(e.patient,"insurance_type",t)},expression:"patient.insurance_type"}}),n("q-input",{attrs:{outlined:"",clearable:"",dense:e.ifdense,name:"doctor_licence",type:"tel",label:e.$t("licenceNum")},model:{value:e.doctor.licence,callback:function(t){e.$set(e.doctor,"licence",e._n(t))},expression:"doctor.licence"}}),n("q-input",{attrs:{outlined:"",clearable:"",dense:e.ifdense,type:"text",label:e.$t("firstname")},model:{value:e.doctor.firstname,callback:function(t){e.$set(e.doctor,"firstname",t)},expression:"doctor.firstname"}}),n("q-input",{attrs:{outlined:"",clearable:"",dense:e.ifdense,type:"text",label:e.$t("lastname")},model:{value:e.doctor.lastname,callback:function(t){e.$set(e.doctor,"lastname",t)},expression:"doctor.lastname"}}),n("q-input",{attrs:{outlined:"",clearable:"",dense:e.ifdense,type:"tel",label:e.$t("cell")},model:{value:e.doctor.cell,callback:function(t){e.$set(e.doctor,"cell",e._n(t))},expression:"doctor.cell"}})],1)])]),n("div",{staticClass:"row absolute-bottom"},[e.ifMobileScreen?n("q-btn",{staticClass:"q-ma-sm",staticStyle:{flex:"1"},attrs:{unelevated:"","no-caps":"",color:"secondary",label:e.$t("save")},on:{click:function(t){return e.save()}}}):e._e()],1)],1)},s=[],l=n("ded3"),i=n.n(l),o=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-dialog",{ref:"dialog",attrs:{maximized:e.$q.platform.is.mobile,"transition-show":"slide-up","transition-hide":"slide-down"}},[n("q-card",{staticClass:"column relative-position"},[n("video",{staticStyle:{width:"100%"},attrs:{id:"video"}}),n("q-btn",{staticClass:"absolute-top-right q-ma-sm",attrs:{id:"resetButton",unelevated:"",round:"",color:"secondary",icon:"close"}})],1)],1)},r=[],d=n("224f"),u={props:["code"],mounted(){window.addEventListener("load",this.getBarcode())},methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(e){this.$emit("ok",e),this.hide()},onCancelClick(){this.$emit("Cancel"),this.hide()},async getBarcode(){if(this.$q.cordova)cordova.plugins.barcodeScanner.scan((function(e){this.onOKClick(e.text)}),(function(e){alert("Scanning failed: "+e)}),{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,saveHistory:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,orientation:'landscape"',disableAnimations:!0,disableSuccessBeep:!0});else{const t=new d["BrowserMultiFormatReader"];var e;await t.listVideoInputDevices().then((t=>{e=t[t.length].deviceId})).catch((e=>{console.log(e)})),t.decodeFromVideoDevice(e,"video",((e,n)=>{e&&(t.reset(),this.onOKClick(e.text)),!n||n instanceof d["NotFoundException"]||alert(n)})),document.getElementById("resetButton").addEventListener("click",(()=>{t.reset(),this.onCancelClick()}))}}}},p=u,m=n("2877"),b=n("24e8"),f=n("f09f"),h=n("9c40"),v=n("eebe"),g=n.n(v),y=Object(m["a"])(p,c,r,!1,null,null,null),x=y.exports;g()(y,"components",{QDialog:b["a"],QCard:f["a"],QBtn:h["a"]});const _=["green","good","Facebook","Twitter","Apple","Oracle"];var $={data(){return{ifdense:!1,medEcode:null,insureTypes:_,patient:{ssn:null,firstname:null,lastname:null,dob:null,insurance_type:null,insurance_serial:null,insurance_page:null,cell:null},doctor:{firstname:null,lastname:null,licence:null,specialty:null,cell:null}}},props:["prescInfo","ifMobileScreen"],mounted(){Object.assign(this.patient,this.prescInfo.patient),Object.assign(this.doctor,this.prescInfo.doctor)},computed:i()(i()({},Object(o["c"])("drugOrder",["status","serverMsg"])),Object(o["d"])("appState",["step"])),methods:i()(i()(i()(i()({},Object(o["b"])("drugOrder",["getOrder"])),Object(o["b"])("appState",["setStep"])),Object(o["b"])("phmgt",["saveOrderInfo"])),{},{getDrugOrder(){this.getOrder({medEcode:this.medEcode})},medEcodeQrScan(){this.$q.dialog({component:x,parent:this,code:this.medEcode}).onOk((e=>{this.medEcode=e})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{}))},save(){this.ifMobileScreen&&this.setStep({step:this.step+1}),this.saveOrderInfo({patient:this.patient,doctor:this.doctor})}}),watch:{medEcode:{handler:function(){this.getDrugOrder()}}}},q=$,k=n("4983"),C=n("27f9"),E=n("0016"),w=n("ddd8"),O=n("714f"),S=Object(m["a"])(q,a,s,!1,null,null,null);t["default"]=S.exports;g()(S,"components",{QScrollArea:k["a"],QInput:C["a"],QIcon:E["a"],QSelect:w["a"],QBtn:h["a"]}),g()(S,"directives",{Ripple:O["a"]})}}]);