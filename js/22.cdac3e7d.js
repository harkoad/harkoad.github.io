(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"4c69":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row q-gutter-y-xs"},t._l(t.tempDrugListStore,(function(e,s){return i("div",{key:e+s,staticClass:"row q-pa-sm bg-white rounded-borders",staticStyle:{flex:"1"}},[i("q-checkbox",{staticClass:"q-pr-sm",attrs:{size:"sm"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t.custBreakpoint?i("div",{staticClass:"row",staticStyle:{flex:"1"}},[i("q-item-section",[i("q-item-label",{staticClass:"text-capitalize"},[t._v("\n          "+t._s(t.medicineList.filter((function(t){return t.medId===e.medId}))[0].generic)+"\n        ")]),i("q-item-label",{attrs:{caption:""}},[t._v("\n          "+t._s(t.medicineList.filter((function(t){return t.medId===e.medId}))[0].dose)+"\n          "+t._s(t.medicineList.filter((function(t){return t.medId===e.medId}))[0].dosage)+"\n          "+t._s(t.medicineList.filter((function(t){return t.medId===e.medId}))[0].company)+"\n        ")])],1),i("q-item-section",{attrs:{side:""}},[i("q-item-label",[t._v("\n          "+t._s(e.amount)+"\n        ")])],1)],1):i("div",{staticClass:"row items-center justify-between",staticStyle:{flex:"1"}},t._l(t.headers,(function(s,n){return i("div",{key:s+n,staticClass:"column",staticStyle:{padding:"auto"},style:0===n?{flex:3}:{flex:1,alignItems:"center"}},["amount"!==s.label?i("div",[i("span",{staticClass:"text-capitalize"},[t._v("\n            "+t._s(t.medicineList.filter((function(t){return t.medId===e.medId}))[0][s.name])+"\n          ")])]):i("div",[t._v("\n          "+t._s(e.amount)+"\n        ")])])})),0)],1)})),0)},n=[],r=i("ded3"),a=i.n(r),o=i("2f62"),l={data(){return{removeDrugFromList:!1,tempDrugListStore:[],selected:!1}},props:["listItems","headers","showAddDrugDialog","custBreakpoint"],methods:a()(a()({},Object(o["b"])("drugOrder",["removeFromList"])),{},{emitDialogBox(){this.$emit("openPopup")},removeDrug(t,e){this.$q.dialog({title:this.$t("general.warning"),message:this.$t("phmgtSell.removeDrugFromList"),ok:{label:"Ok",color:"warning"},cancel:{label:"Cancel",flat:!0}}).onOk((()=>{this.removeFromList(e)}))},priorityAvailCheck(t){this.tempDrugListStore=[];for(var e=0;e<t.length;e++){var i={medId:null,amount:null,avail:null};if(t[e].IfPriority)for(var s=0;s<t[e].items.length;s++){var n=t[e].items[s]["priority_"+(s+1)];i.medId=n,i.amount=t[e].amount,Object.prototype.hasOwnProperty.call(this.inventory,n)?t[e].amount>this.inventory[n].inventory?(i.avail=!1,this.tempDrugListStore.push(i)):(i.avail=!0,this.tempDrugListStore.push(i)):(i.avail=!1,this.tempDrugListStore.push(i))}else i.medId=t[e].medId,i.amount=t[e].amount,Object.prototype.hasOwnProperty.call(this.inventory,t[e].medId)?t[e].amount>this.inventory[t[e].medId].inventory?(i.avail=!1,this.tempDrugListStore.push(i)):(i.avail=!0,this.tempDrugListStore.push(i)):(i.avail=!1,this.tempDrugListStore.push(i))}},qrScan(){var t=this;cordova.plugins.barcodeScanner.scan((function(e){t.medEcode=e.text,t.medEcode=e.text}),(function(t){alert("Scanning failed: "+t)}),this.qrScanOption)}}),mounted(){this.priorityAvailCheck(this.listItems)},computed:a()(a()({},Object(o["c"])("inventory",["inventory"])),Object(o["c"])("medList",["medicineList"])),watch:{listItems:{handler(){this.priorityAvailCheck(this.listItems),this.$emit("availStatus",this.tempDrugListStore.map((t=>t.avail))),this.$emit("drugListUpdate",this.tempDrugListStore)},immediate:!0,deep:!0}}},m=l,c=i("2877"),d=i("8f8e"),u=i("4074"),p=i("0170"),h=i("eebe"),v=i.n(h),g=Object(c["a"])(m,s,n,!1,null,null,null);e["default"]=g.exports;v()(g,"components",{QCheckbox:d["a"],QItemSection:u["a"],QItemLabel:p["a"]})}}]);