(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"4c69":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column"},[t.listItems.length>=1?i("div",{staticClass:"column"},t._l(t.tempDrugListStore,(function(e,r){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e+r,staticClass:"row",attrs:{bordered:"",clickable:""}},[i("q-item-section",{staticClass:"row"},[i("q-item-label",{staticClass:"text-capitalize text-bold"},[t._v(t._s(t.medicineList.filter((function(t){return t.medId===e.medId}))[0].generic))]),i("q-item-label",{attrs:{caption:""}},[t._v("\n          "+t._s(t.medicineList.filter((function(t){return t.medId===e.medId}))[0].company)+" - "+t._s(t.medicineList.filter((function(t){return t.medId===e.medId}))[0].dose)+"\n        ")])],1),i("q-item-section",{attrs:{side:""}},[i("q-item-label",[t._v(t._s(e.amount)+" "+t._s(t.medicineList.filter((function(t){return t.medId===e.medId}))[0].dosage))]),i("q-item-label",[i("q-badge",{attrs:{outline:"",color:e.avail?"secondary":"warning"}},[t._v("\n            "+t._s(e.avail?"IN STOCK":t.inventory[e.medId].inventory+" ONLY")+"\n          ")])],1)],1),i("q-item-section",{attrs:{top:"",side:""}},[i("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"r_more_vert"}},[i("q-menu",{attrs:{anchor:"top left"}},[i("q-list",{staticStyle:{width:"150px"}},[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(i){return i.stopPropagation(),t.removeDrug(e,r)}}},[i("q-item-section",[t._v("Delete")])],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){return t.qrScan()}}},[i("q-item-section",[t._v("Barcode")])],1)],1)],1)],1)],1)],1)})),1):i("div",[i("div",{staticClass:"column flex-center",staticStyle:{flex:"1",height:"500px"}},[i("q-icon",{staticClass:"q-pa-md",staticStyle:{border:"4px solid grey","border-radius":"50%"},attrs:{name:"r_fact_check",color:"grey",size:"xl"}}),i("span",{staticClass:"q-mt-md"},[t._v("\n        NO ITEM IN LIST\n      ")])],1)])])},s=[],a=i("ded3"),n=i.n(a),o=i("2f62"),l={data(){return{removeDrugFromList:!1,tempDrugListStore:[]}},props:["listItems","showAddDrugDialog"],methods:n()(n()({},Object(o["b"])("drugOrder",["removeFromList"])),{},{emitDialogBox(){this.$emit("openPopup")},removeDrug(t,e){this.$q.dialog({title:this.$t("general.warning"),message:this.$t("phmgtSell.removeDrugFromList"),ok:{label:"Ok",color:"warning"},cancel:{label:"Cancel",flat:!0}}).onOk((()=>{this.removeFromList(e)}))},priorityAvailCheck(t){this.tempDrugListStore=[];for(var e=0;e<t.length;e++){var i={medId:null,amount:null,avail:null};if(t[e].IfPriority)for(var r=0;r<t[e].items.length;r++){var s=t[e].items[r]["priority_"+(r+1)];i.medId=s,i.amount=t[e].amount,Object.prototype.hasOwnProperty.call(this.inventory,s)?t[e].amount>this.inventory[s].inventory?(i.avail=!1,this.tempDrugListStore.push(i)):(i.avail=!0,this.tempDrugListStore.push(i)):(i.avail=!1,this.tempDrugListStore.push(i))}else i.medId=t[e].medId,i.amount=t[e].amount,Object.prototype.hasOwnProperty.call(this.inventory,t[e].medId)?t[e].amount>this.inventory[t[e].medId].inventory?(i.avail=!1,this.tempDrugListStore.push(i)):(i.avail=!0,this.tempDrugListStore.push(i)):(i.avail=!1,this.tempDrugListStore.push(i))}},qrScan(){var t=this;cordova.plugins.barcodeScanner.scan((function(e){t.medEcode=e.text,t.medEcode=e.text}),(function(t){alert("Scanning failed: "+t)}),this.qrScanOption)}}),mounted(){this.priorityAvailCheck(this.listItems)},computed:n()(n()({},Object(o["c"])("inventory",["inventory"])),Object(o["c"])("medList",["medicineList"])),watch:{listItems:{handler(){this.priorityAvailCheck(this.listItems),this.$emit("availStatus",this.tempDrugListStore.map((t=>t.avail))),this.$emit("drugListUpdate",this.tempDrugListStore)},immediate:!0,deep:!0}}},c=l,m=i("2877"),d=i("66e5"),u=i("4074"),p=i("0170"),v=i("58a81"),h=i("9c40"),g=i("4e73"),f=i("1c1c"),I=i("0016"),b=i("714f"),y=i("7f67"),L=i("eebe"),S=i.n(L),q=Object(m["a"])(c,r,s,!1,null,null,null);e["default"]=q.exports;S()(q,"components",{QItem:d["a"],QItemSection:u["a"],QItemLabel:p["a"],QBadge:v["a"],QBtn:h["a"],QMenu:g["a"],QList:f["a"],QIcon:I["a"]}),S()(q,"directives",{Ripple:b["a"],ClosePopup:y["a"]})}}]);