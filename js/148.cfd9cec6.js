"use strict";(self["webpackChunkariamin"]=self["webpackChunkariamin"]||[]).push([[148],{2148:(e,a,l)=>{l.r(a),l.d(a,{default:()=>$});var t=l(3673),o=l(2323),n=l(8880);const s={style:{width:"70%"}},i={class:"q-mt-none text-primary"},p={key:0,class:"column items-center"},r={class:"row justify-center"},m={class:"row items-end q-mt-lg text-primary"},d=(0,t._)("h2",{class:"text-bold q-my-none"},"30",-1),u=(0,t._)("h6",{class:"q-my-none"},"Days",-1),c=[d,u],w={class:"q-mb-md"},y=(0,t._)("strong",{class:"text-primary"},"TRIAL",-1),h=(0,t.Uk)(" period is now active. Your account would be erased, 10 days after this tiral period, To keep your data intact, Try to subscribe to a "),b=(0,t._)("strong",{class:"text-primary"},"PREMIUM",-1),v=(0,t.Uk)(" tier account before trial period is expired"),g=[y,h,b,v],f={class:"column"},V={class:"column"},_={class:"column q-my-md items-end q-gutter-y-sm"},W={class:"column"};function x(e,a,l,d,u,y){const h=(0,t.up)("VueQrcode"),b=(0,t.up)("q-btn"),v=(0,t.up)("q-input"),x=(0,t.up)("q-select"),F=(0,t.up)("q-file"),S=(0,t.up)("q-form"),k=(0,t.up)("q-avatar"),U=(0,t.up)("q-item-section"),q=(0,t.up)("q-item-label"),Q=(0,t.up)("q-item"),H=(0,t.up)("q-list"),C=(0,t.up)("QrScan"),M=(0,t.up)("q-dialog"),R=(0,t.up)("Map"),I=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(I,{class:"column q-px-md"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t._)("div",s,[(0,t.wy)((0,t._)("h2",{class:"q-my-none text-weight-bold text-primary"},(0,o.zw)("0"+d.step),513),[[n.F8,d.step&&d.step!==d.title.length-1]]),(0,t._)("h4",i,(0,o.zw)(d.title[d.step].title),1)]),d.IfMobile?((0,t.wg)(),(0,t.iD)("div",p,[(0,t.Wm)(h,{value:"https://www.ariamin.ir",scale:6}),(0,t._)("div",r,[(0,t.Wm)(b,{flat:"","no-caps":"",label:"skip",color:"grey-8",onClick:a[0]||(a[0]=e=>d.hideQR=!0)}),(0,t.Wm)(b,{unelevated:"","no-caps":"",label:"Scan QR code",color:"primary",onClick:a[1]||(a[1]=e=>d.showQrScanner=!0)})])])):(0,t.kq)("",!0),(0,t.wy)((0,t._)("div",m,c,512),[[n.F8,d.step===d.title.length-1]]),(0,t.wy)((0,t._)("p",w,g,512),[[n.F8,d.step===d.title.length-1]])]),(0,t._)("div",f,[(0,t._)("div",V,[(0,t.Wm)(S,{onSubmit:a[19]||(a[19]=e=>d.phRegi(d.step))},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(v,{clearable:"",modelValue:d.hix,"onUpdate:modelValue":a[3]||(a[3]=e=>d.hix=e),modelModifiers:{number:!0},type:"tel",label:"HIX"},{append:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(b,{flat:"",dense:"",round:"",icon:"qr_code_scanner",color:"primary",onClick:a[2]||(a[2]=e=>{d.hideQR=!1,d.showQrScanner=!0})},null,512),[[n.F8,!d.hix]])])),_:1},8,["modelValue"]),[[n.F8,0===d.step&&!d.IfMobile]]),(0,t.wy)((0,t.Wm)(v,{clearable:"",modelValue:d.licence,"onUpdate:modelValue":a[4]||(a[4]=e=>d.licence=e),type:"tel",label:"Licence Number"},null,8,["modelValue"]),[[n.F8,0===d.step&&!d.IfMobile]]),(0,t.wy)((0,t.Wm)(v,{clearable:"",modelValue:d.name,"onUpdate:modelValue":a[5]||(a[5]=e=>d.name=e),label:"Pharmacy Name",placeholder:"example: Ariamin's Borading Pharmacy"},null,8,["modelValue"]),[[n.F8,1===d.step]]),(0,t.wy)((0,t.Wm)(v,{clearable:"",modelValue:d.address,"onUpdate:modelValue":a[7]||(a[7]=e=>d.address=e),label:"Address",onClick:a[8]||(a[8]=e=>d.showMap=!0)},{append:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(b,{flat:"",round:"",dense:"",color:"primary",icon:"search",onClick:a[6]||(a[6]=e=>d.showMap=!0)},null,512),[[n.F8,!d.address]])])),_:1},8,["modelValue"]),[[n.F8,1===d.step]]),(0,t.wy)((0,t.Wm)(v,{modelValue:d.tel,"onUpdate:modelValue":a[9]||(a[9]=e=>d.tel=e),label:"Telephone"},null,8,["modelValue"]),[[n.F8,1===d.step]]),(0,t.wy)((0,t.Wm)(x,{"hide-dropdown-icon":"",modelValue:d.person,"onUpdate:modelValue":a[10]||(a[10]=e=>d.person=e),label:"Employee",options:d.employee},null,8,["modelValue","options"]),[[n.F8,2===d.step]]),(0,t.wy)((0,t.Wm)(x,{"hide-dropdown-icon":"",disable:!d.person,multiple:"","use-chips":"",modelValue:d.role,"onUpdate:modelValue":a[12]||(a[12]=e=>d.role=e),label:"Role",options:d.tempRole},{append:(0,t.w5)((()=>[(0,t.Wm)(b,{flat:"",dense:"",round:"",disable:!d.person||!d.role.length,icon:"add",color:"primary",onClick:a[11]||(a[11]=(0,n.iM)((e=>d.addEmployee(d.person,d.role)),["stop"]))},null,8,["disable"])])),_:1},8,["disable","modelValue","options"]),[[n.F8,2===d.step]]),(0,t.wy)((0,t.Wm)(F,{modelValue:d.inventory,"onUpdate:modelValue":a[13]||(a[13]=e=>d.inventory=e),hint:"Supported Formats (CSV, Excel, JSON)",accept:".csv, .xlsx, xls",label:"Inventory File"},{append:(0,t.w5)((()=>[(0,t.Wm)(b,{flat:"",round:"",dense:"",color:"primary",icon:"attach_file"})])),_:1},8,["modelValue"]),[[n.F8,3===d.step]]),(0,t.wy)((0,t.Wm)(v,{for:"tamin_user",modelValue:d.userTamin,"onUpdate:modelValue":a[14]||(a[14]=e=>d.userTamin=e),type:"text",label:"Tamin Username"},null,8,["modelValue"]),[[n.F8,4===d.step]]),(0,t.wy)((0,t.Wm)(v,{for:"tamin_pass",modelValue:d.passTamin,"onUpdate:modelValue":a[15]||(a[15]=e=>d.passTamin=e),type:"text",label:"Tamin Password"},null,8,["modelValue"]),[[n.F8,4===d.step]]),(0,t.wy)((0,t.Wm)(v,{for:"salamat_user",modelValue:d.userSalamat,"onUpdate:modelValue":a[16]||(a[16]=e=>d.userSalamat=e),type:"text",label:"Salamt Username"},null,8,["modelValue"]),[[n.F8,5===d.step]]),(0,t.wy)((0,t.Wm)(v,{for:"salamat_pass",modelValue:d.passSalamat,"onUpdate:modelValue":a[17]||(a[17]=e=>d.passSalamat=e),type:"text",label:"Salamt Password"},null,8,["modelValue"]),[[n.F8,5===d.step]]),(0,t.wy)((0,t._)("div",_,[(0,t.Wm)(b,{flat:"",dense:"","no-caps":"",disable:!d.disableBtn,align:"right",label:d.btnLabel,color:"primary",type:"submit"},null,8,["disable","label"]),(0,t.wy)((0,t.Wm)(b,{unelevated:"","no-caps":"",align:"right",label:"Get Premium",color:"primary",onClick:a[18]||(a[18]=e=>d.phRegi(d.step))},null,512),[[n.F8,d.step===d.title.length-1]])],512),[[n.F8,d.btnLabel&&!d.IfMobile]])])),_:1})])]),(0,t.wy)((0,t._)("div",W,[(0,t.Wm)(H,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(d.team,((e,a)=>((0,t.wg)(),(0,t.j4)(Q,{class:"q-px-xs",key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{class:"text-white",color:"primary"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.name[0].toUpperCase()),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.name),1)])),_:2},1024),(0,t.Wm)(q,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.role.join(", ")),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(U,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{flat:"",dense:"",round:"",color:"negative",icon:"delete",onClick:e=>d.removeEmployee(a)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})],512),[[n.F8,2===d.step]]),(0,t.Wm)(M,{maximized:"",persistent:"",modelValue:d.showQrScanner,"onUpdate:modelValue":a[21]||(a[21]=e=>d.showQrScanner=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{barcodeData:d.barcodeData,"onUpdate:barcodeData":a[20]||(a[20]=e=>d.barcodeData=e),onDialogClose:d.processBarcode},null,8,["barcodeData","onDialogClose"])])),_:1},8,["modelValue"]),(0,t.Wm)(M,{maximized:"",persistent:"",modelValue:d.showMap,"onUpdate:modelValue":a[24]||(a[24]=e=>d.showMap=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{center:d.center,"onUpdate:center":a[23]||(a[23]=e=>d.center=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{round:"",class:"q-ma-sm absolute-top-right z-max bg-white",icon:"close",onClick:a[22]||(a[22]=e=>d.showMap=!1)})])),_:1},8,["center"])])),_:1},8,["modelValue"])])),_:1})}l(71),l(6801),l(2100);var F=l(1959),S=l(3617),k=l(8825),U=l(5688),q=l(52),Q=l.n(q);const H=[{title:"Welcome to Ariamin's Pharmacy Management System"},{title:"Tell us about your Business"},{title:"Assemble your team"},{title:"Setup Inventory"},{title:"Tamin Login"},{title:"Salamat Login"},{title:"Registeration Successfull"}],C=["Asgar","Antar","mantar","kamtar","ganbar","armin"],M=["pharmacist","pharmacy aid","manager","cashier","cosmetic representative"],R=(0,t.RC)((()=>Promise.all([l.e(736),l.e(531)]).then(l.bind(l,1531)))),I=(0,t.RC)((()=>Promise.all([l.e(736),l.e(621)]).then(l.bind(l,621)))),T={props:["mainLoaded"],components:{VueQrcode:U.ZP,QrScan:R,Map:I},setup(){const e=(0,S.oR)(),a=(0,k.Z)(),l=(0,F.iH)(!1),t=(0,F.iH)(null),o=(0,F.iH)(null),n=(0,F.iH)(null),s=(0,F.iH)(null),i=(0,F.iH)(null),p=(0,F.iH)(null),r=(0,F.iH)(null),m=(0,F.iH)([]),d=(0,F.iH)([]),u=(0,F.iH)(null),c=(0,F.iH)(null),w=(0,F.iH)(null),y=(0,F.iH)(null),h=(0,F.iH)(null),b=(0,F.iH)(!1),v=(0,F.iH)(!1),g=(0,F.iH)(null),f=(0,F.iH)(null),V=(0,F.Fl)((()=>e.state.app.page.step)),_=(0,F.Fl)((()=>0===V.value?o.value&&n.value:1===V.value?s.value&&i.value&&p.value:2!==V.value||!!d.value.length)),W=(0,F.Fl)((()=>["Validate","Next","Done","Next","Login","Login","Continue with Trial"][V.value])),x=(0,F.Fl)((()=>C.filter((e=>!d.value.map((e=>e.name)).includes(e))))),U=(0,F.Fl)((()=>!a.platform.is.desktop&&!l.value)),q=a=>{0===a?e.dispatch("app/update",{"page.step":1}):1===a?e.dispatch("app/update",{"page.step":2}):2===a?e.dispatch("app/update",{"page.step":3}):3===a?e.dispatch("app/update",{"page.step":4}):4===a?e.dispatch("app/update",{"page.step":5}):5===a&&e.dispatch("app/update",{"page.step":6})},R=(e,a)=>{d.value.push({name:e,role:a}),r.value=null,m.value=[]},I=e=>{d.value.splice(e,1)},T=()=>{b.value=!1;let e=g.value.split(/\r?\n/);e[0].includes("HIX")&&(l.value=!0,o.value=e[0].split(": ")[1],n.value=e[1].split(": ")[1],P(),q(0))},P=()=>{new Promise(((e,a)=>{let l=g.value.match(/estelamResult\/(.*)/)[1].trim();alert(l),Q()({baseURL:"",url:"https://pharmacy.fda.gov.ir/app/api/Parvaneh/EstelamParvanehByCode?encCode="+l,method:"GET"}).then((function(e){alert(JSON.stringify(e.data))})).catch((function(e){console.log(e)}))}))};return{desc:t,hix:o,licence:n,name:s,address:i,tel:p,person:r,role:m,team:d,inventory:u,step:V,userTamin:c,passTamin:w,userSalamat:y,passSalamat:h,disableBtn:_,btnLabel:W,employee:x,IfMobile:U,hideQR:l,showQrScanner:b,showMap:v,barcodeData:g,center:f,title:H,tempPerson:C,tempRole:M,phRegi:q,addEmployee:R,removeEmployee:I,processBarcode:T,getHIXdata:P}}};var P=l(4260),Z=l(4379),D=l(8240),L=l(5269),E=l(4689),z=l(3314),A=l(1052),B=l(7011),N=l(3414),j=l(2035),X=l(5096),G=l(2350),J=l(6778),O=l(7518),Y=l.n(O);const K=(0,P.Z)(T,[["render",x]]),$=K;Y()(T,"components",{QPage:Z.Z,QBtn:D.Z,QForm:L.Z,QInput:E.Z,QSelect:z.Z,QFile:A.Z,QList:B.Z,QItem:N.Z,QItemSection:j.Z,QAvatar:X.Z,QItemLabel:G.Z,QDialog:J.Z})}}]);