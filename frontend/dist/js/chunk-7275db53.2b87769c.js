(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7275db53"],{"20bc":function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var i=a("1d80"),s=a("5899"),r="["+s+"]",o=RegExp("^"+r+r+"*"),n=RegExp(r+r+"*$"),l=function(e){return function(t){var a=String(i(t));return 1&e&&(a=a.replace(o,"")),2&e&&(a=a.replace(n,"")),a}};e.exports={start:l(1),end:l(2),trim:l(3)}},"6ca7":function(e,t,a){},"7e12":function(e,t,a){var i=a("da84"),s=a("58a8").trim,r=a("5899"),o=i.parseFloat,n=1/o(r+"-0")!==-1/0;e.exports=n?function(e){var t=s(String(e)),a=o(t);return 0===a&&"-"==t.charAt(0)?-0:a}:o},"96fd":function(e,t,a){"use strict";var i=a("20bc"),s=a.n(i);s.a},"9b3c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("EditMortgageProgramComp")},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",{staticClass:"my-0"},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[e._v(" Программы ")]),a("v-col",{attrs:{cols:"12",sm:"9",md:"5"}},[a("v-text-field",{attrs:{label:"Отфильтровать","single-line":"",dense:"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("div",{staticClass:"float-right"},[a("v-dialog",{attrs:{persistent:"","max-width":"1000px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.editItem()}}},i),[e._v("Добавить программу")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[a("v-card",[a("v-card-title",{staticClass:"pb-0"},[a("v-container",{staticClass:"pb-0"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])])]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"float-right"},[a("v-checkbox",{attrs:{label:"Отображать",color:"primary"},model:{value:e.editedItem.is_visible,callback:function(t){e.$set(e.editedItem,"is_visible",t)},expression:"editedItem.is_visible"}})],1)])],1)],1)],1),a("v-card-text",[a("v-container",[a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"12",md:"5"}},[a("v-text-field",{attrs:{label:"Название программы",placeholder:" ","error-messages":e.nameErrors},on:{blur:function(t){return e.$v.editedItem.programs_name.$touch()}},model:{value:e.editedItem.programs_name,callback:function(t){e.$set(e.editedItem,"programs_name",t)},expression:"editedItem.programs_name"}}),a("v-select",{attrs:{label:"Банк",placeholder:" ",items:e.GET_BANKS_ALL_DATA,"item-text":"bank_name","item-value":"id"},model:{value:e.editedItem.programs_bank,callback:function(t){e.$set(e.editedItem,"programs_bank",t)},expression:"editedItem.programs_bank"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[a("v-text-field",{attrs:{label:"Ставка",placeholder:" ",suffix:"%",rules:[e.numberRule]},model:{value:e.editedItem.rate,callback:function(t){e.$set(e.editedItem,"rate",e._n(t))},expression:"editedItem.rate"}}),a("v-text-field",{attrs:{label:"Ставка зарплатникам",placeholder:" ",suffix:"%",rules:[e.numberRule]},model:{value:e.editedItem.rate_salary,callback:function(t){e.$set(e.editedItem,"rate_salary",e._n(t))},expression:"editedItem.rate_salary"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[a("v-text-field",{attrs:{label:"Первоначальный взнос",placeholder:" ",suffix:"%",rules:[e.numberRule]},model:{value:e.editedItem.first_payment,callback:function(t){e.$set(e.editedItem,"first_payment",e._n(t))},expression:"editedItem.first_payment"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[a("v-select",{attrs:{multiple:"",label:"Цель кредита",placeholder:" ",items:e.GET_TARGET_CREDITS_ALL_DATA,"item-text":"target_name","item-value":"id"},scopedSlots:e._u([{key:"selection",fn:function(t){t.item;var i=t.index;return[0===i?a("span",{staticClass:"ml-1 grey--text caption"},[e._v("Выбранно "+e._s(e.editedItem.programs_target.length)+" шт.")]):e._e()]}}]),model:{value:e.editedItem.programs_target,callback:function(t){e.$set(e.editedItem,"programs_target",t)},expression:"editedItem.programs_target"}})],1)],1),a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-text-field",{attrs:{label:"Мин. сумма кредита",placeholder:" ",suffix:"₽",rules:[e.numberRule]},model:{value:e.editedItem.min_sum_credit,callback:function(t){e.$set(e.editedItem,"min_sum_credit",e._n(t))},expression:"editedItem.min_sum_credit"}}),a("v-text-field",{attrs:{label:"Макс. сумма кредита",placeholder:" ",suffix:"₽",rules:[e.numberRule]},model:{value:e.editedItem.max_sum_credit,callback:function(t){e.$set(e.editedItem,"max_sum_credit",e._n(t))},expression:"editedItem.max_sum_credit"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-text-field",{attrs:{label:"Мин. срок кредита",placeholder:" ",suffix:"лет",rules:[e.numberRule]},model:{value:e.editedItem.min_time_credit,callback:function(t){e.$set(e.editedItem,"min_time_credit",e._n(t))},expression:"editedItem.min_time_credit"}}),a("v-text-field",{attrs:{label:"Макс. срок кредита",placeholder:" ",suffix:"лет",rules:[e.numberRule]},model:{value:e.editedItem.max_time_credit,callback:function(t){e.$set(e.editedItem,"max_time_credit",e._n(t))},expression:"editedItem.max_time_credit"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-text-field",{attrs:{label:"Мин. возраст заёмщика",placeholder:" ",suffix:"лет",rules:[e.numberRule]},model:{value:e.editedItem.min_borrower_age,callback:function(t){e.$set(e.editedItem,"min_borrower_age",e._n(t))},expression:"editedItem.min_borrower_age"}}),a("v-text-field",{attrs:{label:"Макс. возраст заёмщика",placeholder:" ",suffix:"лет",rules:[e.numberRule]},model:{value:e.editedItem.max_borrower_age,callback:function(t){e.$set(e.editedItem,"max_borrower_age",e._n(t))},expression:"editedItem.max_borrower_age"}})],1)],1),a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-text-field",{attrs:{label:"Стаж на последнем месте",placeholder:" ",suffix:"мес.",rules:[e.numberRule]},model:{value:e.editedItem.work_experience,callback:function(t){e.$set(e.editedItem,"work_experience",e._n(t))},expression:"editedItem.work_experience"}}),a("v-text-field",{attrs:{label:"Время на решение банка",placeholder:"от 2 до 5 дней"},model:{value:e.editedItem.time_for_bank_decision,callback:function(t){e.$set(e.editedItem,"time_for_bank_decision",t)},expression:"editedItem.time_for_bank_decision"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"5"}},[a("v-textarea",{attrs:{label:"Обязательные документы",placeholder:" ","auto-grow":"",rows:"1"},model:{value:e.editedItem.mandatory_documents,callback:function(t){e.$set(e.editedItem,"mandatory_documents",t)},expression:"editedItem.mandatory_documents"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-textarea",{attrs:{label:"Документ подтверждение дохода",placeholder:" ","auto-grow":"",rows:"1"},model:{value:e.editedItem.proof_of_income_document,callback:function(t){e.$set(e.editedItem,"proof_of_income_document",t)},expression:"editedItem.proof_of_income_document"}})],1)],1),a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-checkbox",{attrs:{label:"Занижение, Есть/нет",color:"primary"},model:{value:e.editedItem.understatement_is_active,callback:function(t){e.$set(e.editedItem,"understatement_is_active",t)},expression:"editedItem.understatement_is_active"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"8"}},[a("v-textarea",{attrs:{label:"Комментарий к занижению",placeholder:" ","auto-grow":"",rows:"1"},model:{value:e.editedItem.understatement_comment,callback:function(t){e.$set(e.editedItem,"understatement_comment",t)},expression:"editedItem.understatement_comment"}})],1)],1),a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-checkbox",{attrs:{label:"Залоговый объект",color:"primary"},model:{value:e.editedItem.collateral_object_is_active,callback:function(t){e.$set(e.editedItem,"collateral_object_is_active",t)},expression:"editedItem.collateral_object_is_active"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"8"}},[a("v-textarea",{attrs:{label:"Комментарий к залоговый объект",placeholder:" ","auto-grow":"",rows:"1"},model:{value:e.editedItem.collateral_object_comment,callback:function(t){e.$set(e.editedItem,"collateral_object_comment",t)},expression:"editedItem.collateral_object_comment"}})],1)],1),a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-textarea",{attrs:{label:"Созаемщики",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.co_borrowers,callback:function(t){e.$set(e.editedItem,"co_borrowers",t)},expression:"editedItem.co_borrowers"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-textarea",{attrs:{label:"Комиссия",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.commission,callback:function(t){e.$set(e.editedItem,"commission",t)},expression:"editedItem.commission"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-textarea",{attrs:{label:"Регистрация продавца",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.seller_registration,callback:function(t){e.$set(e.editedItem,"seller_registration",t)},expression:"editedItem.seller_registration"}})],1)],1),a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-select",{attrs:{items:e.itemsYesNo,"item-text":"text","item-value":"value",label:"Экспресс выдача",dense:""},model:{value:e.editedItem.express_issue,callback:function(t){e.$set(e.editedItem,"express_issue",t)},expression:"editedItem.express_issue"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"6"}},[a("v-select",{attrs:{items:e.itemsYesNo,"item-text":"text","item-value":"value",label:"Включение детей в число собственников",dense:""},model:{value:e.editedItem.inclusion_children,callback:function(t){e.$set(e.editedItem,"inclusion_children",t)},expression:"editedItem.inclusion_children"}})],1)],1),a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-select",{attrs:{items:e.itemsYesNo,"item-text":"text","item-value":"value",label:"Комната",dense:""},model:{value:e.editedItem.room,callback:function(t){e.$set(e.editedItem,"room",t)},expression:"editedItem.room"}}),a("v-textarea",{attrs:{label:"Комментарий к Комната",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.room_comment,callback:function(t){e.$set(e.editedItem,"room_comment",t)},expression:"editedItem.room_comment"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-select",{attrs:{items:e.itemsYesNo,"item-text":"text","item-value":"value",label:"Доля",dense:""},model:{value:e.editedItem.share,callback:function(t){e.$set(e.editedItem,"share",t)},expression:"editedItem.share"}}),a("v-textarea",{attrs:{label:"Комментарий к Доля",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.share_comment,callback:function(t){e.$set(e.editedItem,"share_comment",t)},expression:"editedItem.share_comment"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-select",{attrs:{items:e.itemsYesNo,"item-text":"text","item-value":"value",label:"Частный дом",dense:""},model:{value:e.editedItem.private_house,callback:function(t){e.$set(e.editedItem,"private_house",t)},expression:"editedItem.private_house"}}),a("v-textarea",{attrs:{label:"Комментарий к Частный дом",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.private_comment,callback:function(t){e.$set(e.editedItem,"private_comment",t)},expression:"editedItem.private_comment"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-select",{attrs:{items:e.itemsYesNo,"item-text":"text","item-value":"value",label:"Апартаменты",dense:""},model:{value:e.editedItem.apartments,callback:function(t){e.$set(e.editedItem,"apartments",t)},expression:"editedItem.apartments"}}),a("v-textarea",{attrs:{label:"Комментарий к Апартаменты",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.apartments_comment,callback:function(t){e.$set(e.editedItem,"apartments_comment",t)},expression:"editedItem.apartments_comment"}})],1)],1),a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[a("v-select",{attrs:{items:e.itemsYesNo,"item-text":"text","item-value":"value",label:"Перепланировка",dense:""},model:{value:e.editedItem.redevelopment,callback:function(t){e.$set(e.editedItem,"redevelopment",t)},expression:"editedItem.redevelopment"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"8"}},[a("v-textarea",{attrs:{label:"Комментарий к Перепланировка",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.redevelopment_comment,callback:function(t){e.$set(e.editedItem,"redevelopment_comment",t)},expression:"editedItem.redevelopment_comment"}})],1)],1),a("v-row",{staticClass:"mb-7"},[a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-textarea",{attrs:{label:"Перекрытия",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.overlap,callback:function(t){e.$set(e.editedItem,"overlap",t)},expression:"editedItem.overlap"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-textarea",{attrs:{label:"Этажность",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.storeys,callback:function(t){e.$set(e.editedItem,"storeys",t)},expression:"editedItem.storeys"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-textarea",{attrs:{label:"Износ жилья",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.housing_wear,callback:function(t){e.$set(e.editedItem,"housing_wear",t)},expression:"editedItem.housing_wear"}})],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[a("v-textarea",{attrs:{label:"Требования к тех. документам",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.req_tech_docs,callback:function(t){e.$set(e.editedItem,"req_tech_docs",t)},expression:"editedItem.req_tech_docs"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-textarea",{attrs:{label:"Дополнительная информация",placeholder:" ","auto-grow":"",rows:"1",dense:""},model:{value:e.editedItem.add_info,callback:function(t){e.$set(e.editedItem,"add_info",t)},expression:"editedItem.add_info"}})],1)],1),a("v-row",[a("v-col",[e.errMsgBank?a("div",[a("v-alert",{attrs:{width:"100%",type:"error"}},[e._v(" "+e._s(e.errMsgBank)+" ")])],1):e._e()])],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Отмена")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[e._v("Сохранить")])],1)],1)],1)]),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogCopyItem,callback:function(t){e.dialogCopyItem=t},expression:"dialogCopyItem"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Дублирование программы")])]),a("v-card-text",[a("v-container",[a("v-row",[e._v(" Вы действительно хотите дублировать эту программу? ")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Отмена")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.copyMortgage}},[e._v("Дублировать")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Удаление программы")])]),a("v-card-text",[a("v-container",[a("v-row",[e._v(" Будте внимательны! Вы действительно хотите удалить эту программу? ")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Отмена")]),a("v-btn",{attrs:{color:"red darken-1 white--text"},on:{click:e.deleteBank}},[e._v("Удалить")])],1)],1)],1)],1)])],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.listProgram,"sort-by":"calories",locale:"ru-Ru","items-per-page":-1,"hide-default-footer":"",sortBy:"bank.bank_name",search:e.search},scopedSlots:e._u([{key:"item.bank.bank_logo",fn:function(t){var i=t.item;return[null!==i.bank.bank_logo?a("v-img",{attrs:{src:i.bank.bank_logo,"max-width":"80","max-height":"50",contain:""}}):e._e()]}},{key:"item.rate",fn:function(t){var i=t.item;return[a("span",[e._v(" "+e._s(i.rate)+"% ")])]}},{key:"item.rate_salary",fn:function(t){var i=t.item;return[null!==i.rate_salary?a("span",[e._v(" "+e._s(i.rate_salary)+"% ")]):e._e()]}},{key:"item.first_payment",fn:function(t){var i=t.item;return[null!==i.first_payment?a("span",[e._v(" "+e._s(i.first_payment)+"% ")]):e._e()]}},{key:"item.is_visible",fn:function(t){var i=t.item;return[i.is_visible?a("v-icon",{attrs:{color:"green darken-2"}},[e._v("mdi-checkbox-marked-circle")]):e._e()]}},{key:"item.date_modified",fn:function(t){var i=t.item;return[a("span",[e._v(" "+e._s(e._f("normDate")(i.date_modified))+" ")])]}},{key:"item.action",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",on:{click:function(t){return e.copyItem(i)}}},[e._v(" mdi-content-copy ")]),a("v-icon",{staticClass:"mr-2",on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-square-edit-outline ")]),a("v-icon",{attrs:{color:"red darken-2"},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Обновить")])]},proxy:!0}])})],1)},o=[],n=(a("a4d3"),a("4de4"),a("4160"),a("c975"),a("e439"),a("dbb4"),a("b64b"),a("acd8"),a("159b"),a("ade3")),l=a("2f62"),d=a("1dce"),c=a("b5ae");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _={name:"EditMortgageProgramComp",mixins:[d["validationMixin"]],validations:{editedItem:{programs_name:{required:c["required"]}}},data:function(){return{numberRule:function(e){return void 0===e||null===e||(!isNaN(parseFloat(e))&&e>=0||""===e||"Введите число.")},dialog:!1,dialogCopyItem:!1,dialogDelete:!1,search:"",headers:[{width:"8%",align:"left",sortable:!1,value:"bank.bank_logo"},{text:"Банк",width:"15%",align:"left",value:"bank.bank_name"},{text:"Название программы",width:"20%",value:"programs_name"},{text:"Ставка",width:"8%",align:"center",value:"rate"},{text:"Ставка зарплатникам",width:"8%",align:"center",value:"rate_salary"},{text:"ПВ",width:"8%",align:"center",value:"first_payment"},{text:"Отображать",width:"5%",align:"center",value:"is_visible"},{text:"Дата изменения",width:"5%",align:"center",value:"date_modified"},{text:"Действия",align:"right",width:"15%",value:"action",sortable:!1}],listProgram:[],editedIndex:-1,editedItem:{},defaultItem:{},errMsgFieldBankName:null,errMsgBank:null,itemsYesNo:[{text:"-",value:""},{text:"Да",value:"yes"},{text:"Нет",value:"no"}]}},computed:u({},Object(l["e"])("mortgages",["BANKS_NAME_DATA","MORTGAGES_DATA"]),{},Object(l["c"])("mortgages",["GET_BANKS_ALL_DATA","GET_TARGET_CREDITS_ALL_DATA","GET_MORTGAGES_DATA"]),{},Object(l["c"])("user_info",["GET_USER_INFO_DATA"]),{formTitle:function(){return-1===this.editedIndex?"Новая программа":"Редактировать программу"},nameErrors:function(){var e=[];return this.$v.editedItem.programs_name.$dirty?(!this.$v.editedItem.programs_name.required&&e.push("Это поле обязательное."),e):e}}),watch:{dialog:function(e,t){e||this.close()}},created:function(){var e=this;this.FETCH_BANKS(),this.FETCH_TARGET_CREDITS(),this.FETCH_MORTGAGES_CRUD().then((function(t){e.listProgram=e.GET_MORTGAGES_DATA})).catch((function(){e.$store.dispatch("refreshToken").then((function(){e.FETCH_MORTGAGES_CRUD().then((function(){e.listProgram=e.GET_MORTGAGES_DATA}))}))}))},filters:{normDate:function(e){var t,a,i,s,r,o,n=new Date(e);t=n.getFullYear(),a=n.getMonth()+1,i=n.getDate(),s=n.getHours(),r=n.getMinutes(),o=n.getSeconds();var l=i+"."+a+"."+t+" "+s+":"+r+":"+o;return l}},methods:u({},Object(l["b"])("mortgages",["FETCH_BANKS","FETCH_TARGET_CREDITS","FETCH_MORTGAGES_CRUD","FETCH_EDIT_MORTGAGES","FETCH_DELETE_MORTGAGES","FETCH_CREATE_MORTGAGES"]),{initialize:function(){this.listProgram=this.GET_MORTGAGES_DATA},editItem:function(e){this.editedIndex=this.listProgram.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},copyItem:function(e){this.editedIndex=this.listProgram.indexOf(e),this.editedItem=Object.assign({},e),this.editedItem.programs_name=this.editedItem.programs_name+" (Копия)",this.dialogCopyItem=!0},copyMortgage:function(){var e="create";this.submitForm(e)},deleteItem:function(e){this.editedIndex=this.listProgram.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteBank:function(){var e=this,t=new Object;t["id_programs_name"]=this.editedItem.id,this.FETCH_DELETE_MORTGAGES(t).then((function(t){e.FETCH_MORTGAGES_CRUD().then((function(t){e.listProgram=e.GET_MORTGAGES_DATA}))})).catch((function(a){e.$store.dispatch("refreshToken").then((function(){e.FETCH_DELETE_MORTGAGES(t).then((function(t){e.FETCH_MORTGAGES_CRUD().then((function(t){e.listProgram=e.GET_MORTGAGES_DATA}))}))}))})),this.close()},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300),this.errMsgBank=null,this.dialogCopyItem=!1,this.dialogDelete=!1},save:function(){if(this.editedIndex>-1){var e="update";this.submitForm(e)}else{var t="create";this.submitForm(t)}},submitForm:function(e){var t=this;if(!this.editedItem.programs_name)return!0;var a=new Object;a["is_visible"]=this.editedItem.is_visible,a["programs_bank"]=this.editedItem.programs_bank,a["programs_name"]=this.editedItem.programs_name,a["rate"]=this.editedItem.rate,""===this.editedItem.rate_salary?a["rate_salary"]=null:a["rate_salary"]=this.editedItem.rate_salary,a["first_payment"]=this.editedItem.first_payment,a["programs_target"]=this.editedItem.programs_target,a["min_sum_credit"]=this.editedItem.min_sum_credit,a["max_sum_credit"]=this.editedItem.max_sum_credit,a["min_time_credit"]=this.editedItem.min_time_credit,a["max_time_credit"]=this.editedItem.max_time_credit,a["min_borrower_age"]=this.editedItem.min_borrower_age,a["max_borrower_age"]=this.editedItem.max_borrower_age,a["work_experience"]=this.editedItem.work_experience,a["time_for_bank_decision"]=this.editedItem.time_for_bank_decision,a["mandatory_documents"]=this.editedItem.mandatory_documents,a["proof_of_income_document"]=this.editedItem.proof_of_income_document,a["understatement_is_active"]=this.editedItem.understatement_is_active,a["understatement_comment"]=this.editedItem.understatement_comment,a["collateral_object_is_active"]=this.editedItem.collateral_object_is_active,a["collateral_object_comment"]=this.editedItem.collateral_object_comment,a["co_borrowers"]=this.editedItem.co_borrowers,a["commission"]=this.editedItem.commission,a["seller_registration"]=this.editedItem.seller_registration,a["express_issue"]=this.editedItem.express_issue,a["inclusion_children"]=this.editedItem.inclusion_children,a["room"]=this.editedItem.room,a["room_comment"]=this.editedItem.room_comment,a["share"]=this.editedItem.share,a["share_comment"]=this.editedItem.share_comment,a["private_house"]=this.editedItem.private_house,a["private_comment"]=this.editedItem.private_comment,a["apartments"]=this.editedItem.apartments,a["apartments_comment"]=this.editedItem.apartments_comment,a["redevelopment"]=this.editedItem.redevelopment,a["redevelopment_comment"]=this.editedItem.redevelopment_comment,a["overlap"]=this.editedItem.overlap,a["storeys"]=this.editedItem.storeys,a["housing_wear"]=this.editedItem.housing_wear,a["req_tech_docs"]=this.editedItem.req_tech_docs,a["add_info"]=this.editedItem.add_info;var i=new Object;i["id_programs_name"]=this.editedItem.id,i["formData"]=a,"update"===e?this.FETCH_EDIT_MORTGAGES(i).then((function(e){t.FETCH_MORTGAGES_CRUD().then((function(e){t.listProgram=t.GET_MORTGAGES_DATA,t.close()}))})).catch((function(e){t.$store.dispatch("refreshToken").then((function(){t.FETCH_EDIT_MORTGAGES(i).then((function(e){t.FETCH_MORTGAGES_CRUD().then((function(e){t.listProgram=t.GET_MORTGAGES_DATA,t.close()}))})).catch((function(e){t.errMsgBank=e.response.data}))}))})):this.FETCH_CREATE_MORTGAGES(i).then((function(e){t.FETCH_MORTGAGES_CRUD().then((function(e){t.listProgram=t.GET_MORTGAGES_DATA,t.close()}))})).catch((function(e){t.$store.dispatch("refreshToken").then((function(){t.FETCH_CREATE_MORTGAGES(i).then((function(e){t.FETCH_MORTGAGES_CRUD().then((function(e){t.listProgram=t.GET_MORTGAGES_DATA,t.close()}))})).catch((function(e){t.errMsgBank=e.response.data}))}))}))}})},v=_,h=(a("96fd"),a("2877")),p=a("6544"),f=a.n(p),b=a("0798"),I=a("8336"),g=a("b0af"),x=a("99d9"),k=a("ac7c"),T=a("62ad"),w=a("a523"),E=a("8fea"),C=a("169a"),A=a("132d"),y=a("adda"),G=a("0fd9"),O=a("b974"),R=a("2fa4"),$=a("8654"),D=a("a844"),S=Object(h["a"])(v,r,o,!1,null,"0b79ad80",null),M=S.exports;f()(S,{VAlert:b["a"],VBtn:I["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCheckbox:k["a"],VCol:T["a"],VContainer:w["a"],VDataTable:E["a"],VDialog:C["a"],VIcon:A["a"],VImg:y["a"],VRow:G["a"],VSelect:O["a"],VSpacer:R["a"],VTextField:$["a"],VTextarea:D["a"]});var V={name:"EditMortgageProgramPage",components:{EditMortgageProgramComp:M}},j=V,F=Object(h["a"])(j,i,s,!1,null,"59461242",null);t["default"]=F.exports},ac7c:function(e,t,a){"use strict";a("6ca7"),a("ec29");var i=a("9d26"),s=a("c37a"),r=a("5607"),o=a("2b0e"),n=o["a"].extend({name:"rippleable",directives:{ripple:r["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),e.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",e)):null},onChange(){}}}),l=a("8547"),d=a("58df"),c=Object(d["a"])(s["a"],n,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some(t=>this.valueComparator(t,e)):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=s["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:e=>{e.preventDefault(),this.onChange()}},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const a=t.length;t=t.filter(t=>!this.valueComparator(t,e)),t.length===a&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(){this.isFocused=!0},onKeydown(e){}}});t["a"]=c.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick(()=>this.inputIndeterminate=e)},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},acd8:function(e,t,a){var i=a("23e7"),s=a("7e12");i({global:!0,forced:parseFloat!=s},{parseFloat:s})},ec29:function(e,t,a){}}]);
//# sourceMappingURL=chunk-7275db53.2b87769c.js.map