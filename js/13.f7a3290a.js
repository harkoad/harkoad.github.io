(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{2742:function(e,t,s){},"61eb":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row items-center q-gutter-sm",attrs:{id:"searchCont"}},[this.$q.screen.width<=940?s("div",{staticClass:"row lt-md",staticStyle:{height:"30px"}},e._l(e.searchByOpt,(function(t,n){return s("q-btn",{key:t+n,staticClass:"text-bold",attrs:{size:"sm",padding:"6px 10px",unelevated:t===e.searchBy,outline:t!=e.searchBy,color:t===e.searchBy?"secondary":"grey",label:t},on:{click:function(s){e.searchBy=t}}})})),1):e._e(),s("q-select",{staticStyle:{flex:"2","min-width":"250px"},attrs:{id:"drugNameSearch",dense:"",outlined:"","use-input":"","hide-selected":"","fill-input":"",tabindex:"0",behavior:"menu","input-debounce":"0",label:e.$t("phmgtSell.drugName"),options:e.options},on:{filter:e.filterFn,"filter-abort":e.abortFilterFn,input:function(t){e.selectInputEmit(),e.clearDosage(),e.autoComplete(e.dosageOpt),e.$refs.drugDosageSearch.$el.focus()}},scopedSlots:e._u([{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",{staticClass:"text-grey"},[e._v("\n          No results\n        ")])],1)]},proxy:!0},e.models.name?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){return t.stopPropagation(),e.clearName()}}})]},proxy:!0}:null],null,!0),model:{value:e.models.name,callback:function(t){e.$set(e.models,"name",t)},expression:"models.name"}}),s("q-select",{ref:"drugDosageSearch",staticStyle:{flex:"1","min-width":"100px"},attrs:{tabindex:"1",dense:"",outlined:"",behavior:"menu",disable:!e.models.name,options:e.dosageOpt,label:e.$t("phmgtSell.dosage")},on:{input:function(t){e.tempObj.dosage=e.filterBySearch(e.models.dosage,e.tempObj.name,"dosage"),e.clearDose()}},scopedSlots:e._u([e.models.dosage?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){return t.stopPropagation(),e.clearDosage()}}})]},proxy:!0}:null],null,!0),model:{value:e.models.dosage,callback:function(t){e.$set(e.models,"dosage",t)},expression:"models.dosage"}}),s("q-select",{staticStyle:{flex:"1","min-width":"100px"},attrs:{id:"drugDoseSearch",tabindex:"2",dense:"",outlined:"",behavior:"menu",disable:!e.models.dosage,options:e.doseOpt,label:e.$t("phmgtSell.dose")},on:{input:function(t){e.tempObj.dose=e.filterBySearch(e.models.dose,e.tempObj.dosage,"dose"),e.clearManuf()}},scopedSlots:e._u([e.models.dose?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){return t.stopPropagation(),e.clearDose()}}})]},proxy:!0}:null],null,!0),model:{value:e.models.dose,callback:function(t){e.$set(e.models,"dose",t)},expression:"models.dose"}}),s("q-select",{staticStyle:{flex:"1","min-width":"100px"},attrs:{id:"drugManufSearch",tabindex:"3",dense:"",outlined:"",behavior:"menu",disable:!e.models.dose,options:e.manufOpt,label:e.$t("general.company")},on:{input:function(t){e.tempObj.manuf=e.filterBySearch(e.models.manuf,e.tempObj.dose,"company"),e.models.amount=null}},scopedSlots:e._u([e.models.manuf?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){return t.stopPropagation(),e.clearManuf()}}})]},proxy:!0}:null],null,!0),model:{value:e.models.manuf,callback:function(t){e.$set(e.models,"manuf",t)},expression:"models.manuf"}}),e.models.manuf?s("div",["tablet"===e.models.dosage||"capsule"===e.models.dosage?s("div",{staticClass:"row no-wrap items-center q-gutter-x-sm"},[s("span",{ref:"every"},[e._v("every")]),s("q-input",{ref:"adminHour",staticStyle:{"max-width":"50px"},attrs:{dense:"",outlined:"",type:"tel"},model:{value:e.models.adminHour,callback:function(t){e.$set(e.models,"adminHour",t)},expression:"models.adminHour"}}),s("span",[e._v("hour")]),s("q-input",{staticStyle:{"max-width":"50px"},attrs:{dense:"",outlined:"",id:"adminCount",type:"tel"},model:{value:e.models.adminCount,callback:function(t){e.$set(e.models,"adminCount",t)},expression:"models.adminCount"}}),s("span",[e._v(e._s(e.models.dosage+"s"))])],1):e._e(),"solution"===e.models.dosage||"suspention"===e.models.dosage||"syrup"===e.models.dosage?s("div",{staticClass:"row no-wrap items-center q-gutter-x-sm"},[s("span",[e._v("every")]),s("q-input",{staticStyle:{"max-width":"50px"},attrs:{dense:"",outlined:"",id:"adminHour",type:"tel"},model:{value:e.models.adminHour,callback:function(t){e.$set(e.models,"adminHour",e._n(t))},expression:"models.adminHour"}}),s("span",[e._v("hour")]),s("q-input",{staticStyle:{"max-width":"50px"},attrs:{dense:"",outlined:"",id:"adminCount",type:"tel"},model:{value:e.models.adminCount,callback:function(t){e.$set(e.models,"adminCount",e._n(t))},expression:"models.adminCount"}}),s("q-select",{staticStyle:{flex:"1","min-width":"70px"},attrs:{dense:"",behavior:"menu",disable:!e.models.dose,options:["cc","drops"],label:e.$t("general.company")},on:{input:function(t){e.tempObj.manuf=e.filterBySearch(e.models.manuf,e.tempObj.dose,"company"),e.models.amount=null}},model:{value:e.models.manuf,callback:function(t){e.$set(e.models,"manuf",t)},expression:"models.manuf"}})],1):e._e()]):e._e(),s("q-input",{staticClass:"q-pr-sm",staticStyle:{flex:"1","min-width":"70px"},attrs:{dense:"",outlined:"",disable:!e.models.manuf,type:"tel",placeholder:e.$t("general.amount")},model:{value:e.models.amount,callback:function(t){e.$set(e.models,"amount",t)},expression:"models.amount"}}),s("q-btn",{staticStyle:{flex:"1","max-width":"200px"},attrs:{outline:e.addBtnState.state,disable:e.addBtnState.state,color:e.addBtnState.color,label:e.addBtnState.label},on:{click:function(t){e.submitItem(),e.clearName(),e.onCancelClick()}}})],1)},o=[],a=(s("c975"),s("ddb0"),s("ded3")),l=s.n(a),i=s("2f62"),d={data(){return{models:{name:null,dosage:null,dose:null,manuf:null,adminHour:null,adminCount:null,amount:null},searchDrugName:"",searchBy:"Generic",searchByOpt:["Generic","Brand","Harasi","Aria","IRC"],options:"",searchKey:"generic",tempObj:{name:[],dosage:[],dose:[],manuf:[{}]}}},created(){this.options=this.stringOptions},methods:l()(l()({},Object(i["b"])("drugOrder",["addDrugItem"])),{},{filterFn(e,t,s){var n;this.searchDrugName=e,"b-"===e.substring(0,2)?(n=e.substring(2),this.searchKey="brand"):(n=e,this.searchKey="generic"),setTimeout((()=>{t((()=>{if(""===n)this.options=this.stringOptions;else{const e=n.toLowerCase();this.options=this.stringOptions.filter((t=>t.toLowerCase().indexOf(e)>-1))}}),(e=>{""!==n&&e.options.length>0&&(e.setOptionIndex(-1),e.moveOptionSelection(1,!0))}))}),300)},abortFilterFn(){},filterBySearch(e,t,s){const n=e.toLowerCase();return t.filter((e=>e[s].toLowerCase().indexOf(n)>-1))},arrKeyVals(e,t){return e.map((e=>e[t]))},uniq(e){return Array.from(new Set(e))},submitItem(){this.addDrugItem({medId:this.tempObj.manuf[0].medId,amount:parseInt(this.models.amount)}),console.log(this.$refs.every.innerHTML)},selectInputEmit(e){""===e?console.log(typeof e):this.tempObj.name=this.filterBySearch(this.models.name,this.medicineList,this.searchKey)},clearName(){this.models.name=null,this.models.dosage=null,this.models.dose=null,this.models.manuf=null,this.models.amount=null,this.tempObj.name=[],this.tempObj.dosage=[],this.tempObj.dose=[],this.tempObj.manuf=[{}]},clearDosage(){this.models.dosage=null,this.models.dose=null,this.models.manuf=null,this.models.amount=null,this.tempObj.dosage=[],this.tempObj.dose=[],this.tempObj.manuf=[{}]},clearDose(){this.models.dose=null,this.models.manuf=null,this.models.amount=null,this.tempObj.dose=[],this.tempObj.manuf=[{}]},clearManuf(){this.models.manuf=null,this.models.amount=null,this.tempObj.manuf=[{}]},autoComplete(e,t){1===e.length&&(this.models.dosage=this.tempObj.name[0].dosage,this.models.dose=this.tempObj.name[0].dose,this.models.manuf=this.tempObj.name[0].company,this.tempObj.dosage=this.tempObj.name,this.tempObj.dose=this.tempObj.name,this.tempObj.manuf=this.tempObj.name)}}),computed:l()(l()(l()(l()({},Object(i["c"])("inventory",["inventory"])),Object(i["c"])("medList",["medicineList"])),Object(i["c"])("drugOrder",["drugOrder"])),{},{dosageOpt(){return this.uniq(this.arrKeyVals(this.tempObj.name,"dosage"))},doseOpt(){return this.uniq(this.arrKeyVals(this.tempObj.dosage,"dose"))},manufOpt(){return this.uniq(this.arrKeyVals(this.tempObj.dose,"company"))},outOfStock(){const e=this.inventory[this.tempObj.manuf[0].medId];return void 0!==e&&e.inventory},addBtnState(){var e=this.drugOrder.med.map((e=>e.medId));return this.models.name&&this.models.dosage&&this.models.dose&&this.models.manuf?e.indexOf(this.tempObj.manuf[0].medId)>-1?{state:!0,color:"warning",label:this.$t("phmgtSell.itemAlreadyExist")}:this.models.amount&&"0"!==this.models.amount?{state:!1,color:"secondary",label:this.$t("general.add")}:{state:!0,color:"grey",label:this.$t("general.add")}:{state:!0,color:"grey",label:this.$t("general.add")}},stringOptions(){return"b-"===this.searchDrugName.substring(0,2)?Array.from(new Set(this.medicineList.map((e=>e.brand)))):Array.from(new Set(this.medicineList.map((e=>e.generic))))}})},m=d,r=(s("c8b9"),s("2877")),u=s("9c40"),c=s("ddd8"),p=s("66e5"),h=s("4074"),f=s("0016"),b=s("27f9"),g=s("8572"),y=s("eebe"),O=s.n(y),x=Object(r["a"])(m,n,o,!1,null,null,null);t["default"]=x.exports;O()(x,"components",{QBtn:u["a"],QSelect:c["a"],QItem:p["a"],QItemSection:h["a"],QIcon:f["a"],QInput:b["a"],QField:g["a"]})},c8b9:function(e,t,s){"use strict";s("2742")}}]);