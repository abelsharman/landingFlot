(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Admin"],{1681:function(t,e,a){},3530:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[a("Header",{staticStyle:{"z-index":"1000000 !important",position:"absolute"},attrs:{isMain:t.isMain}}),t.loading?t._e():a("div",{staticStyle:{"padding-top":"20vh","padding-left":"4vw"}},[a("div",{staticClass:"vac_list"},t._l(t.vacancies,(function(e,i){return a("div",{key:i,staticClass:"vac_list_item"},[a("div",{staticClass:"vac_list_item_main"},[a("h1",[t._v(t._s(e.nameVac))]),a("h2",[t._v(t._s(e.count)+" позиция")]),a("p",[t._v(t._s(e.text))]),a("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(a){return t.deleteSpec(e.id)}}},[t._v(" Удалить ")])],1),a("div",{staticClass:"vac_list_item_dop"},[a("p",{staticClass:"vac_list_item_dop_1"},[t._v("Судно")]),a("p",{staticClass:"vac_list_item_dop_2"},[t._v(t._s(e.sudno))]),a("v-divider"),a("p",{staticClass:"vac_list_item_dop_1"},[t._v("Продолжительность контракта")]),a("p",{staticClass:"vac_list_item_dop_2"},[t._v(t._s(e.date))]),a("v-divider"),a("p",{staticClass:"vac_list_item_dop_1"},[t._v("Заработная плата")]),a("p",{staticClass:"vac_list_item_dop_2"},[t._v(t._s(e.price))])],1)])})),0),a("div",{staticClass:"vac_form"},[a("div",{staticClass:"vac_list_item"},[a("div",{staticClass:"vac_list_item_main"},[a("h1",{staticStyle:{margin:"0",width:"100%",position:"absolute"}},[t._v("Форма для заполнения новой должности")]),a("v-text-field",{staticStyle:{"margin-top":"30px"},attrs:{label:"Название должности","hide-details":""},model:{value:t.nameVac,callback:function(e){t.nameVac=e},expression:"nameVac"}}),a("h2",[a("v-text-field",{staticStyle:{width:"40%",display:"inline-block"},attrs:{label:"Количество","hide-details":"",type:"number"},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}),t._v(" позиция")],1),a("v-textarea",{staticStyle:{"margin-top":"20px"},attrs:{label:"Текст","hide-details":"","auto-grow":"",filled:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:t.addSpec}},[t._v(" Добавить должность ")])],1),a("div",{staticClass:"vac_list_item_dop"},[a("p",{staticClass:"vac_list_item_dop_1"},[t._v("Судно")]),a("p",{staticClass:"vac_list_item_dop_2"},[a("v-text-field",{staticStyle:{margin:"0",padding:"0"},attrs:{label:"Название судна","hide-details":""},model:{value:t.sudno,callback:function(e){t.sudno=e},expression:"sudno"}})],1),a("p",{staticClass:"vac_list_item_dop_1"},[t._v("Продолжительность контракта")]),a("p",{staticClass:"vac_list_item_dop_2"},[a("v-text-field",{staticStyle:{margin:"0",padding:"0"},attrs:{label:"Продолжительность","hide-details":""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("p",{staticClass:"vac_list_item_dop_1"},[t._v("Заработная плата")]),a("p",{staticClass:"vac_list_item_dop_2"},[a("v-text-field",{staticStyle:{margin:"0",padding:"0"},attrs:{label:"Заработная плата","hide-details":""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)])])])]),a("v-overlay",{attrs:{value:t.loading,opacity:1}},[a("div",{staticStyle:{width:"100vw",height:"100vh","padding-top":"40vh"}},[a("div",{staticClass:"my-loading d-flex flex-column justify-center align-center"},[a("h1",[t._v("Подтвердите свои данные")]),a("v-text-field",{staticStyle:{background:"rgba(255, 255, 255, 0.3) !important",border:"0.292639px solid #7C7C7C !important","box-sizing":"border-box","backdrop-filter":"blur(5.85278px) !important","margin-top":"30px","padding-left":"10px"},attrs:{label:"Имя","hide-details":""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{staticStyle:{background:"rgba(255, 255, 255, 0.3) !important",border:"0.292639px solid #7C7C7C !important","box-sizing":"border-box","backdrop-filter":"blur(5.85278px) !important","margin-top":"30px","padding-left":"10px"},attrs:{label:"Пароль","hide-details":"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{staticStyle:{"margin-top":"5vh"},attrs:{color:"success"},on:{click:t.submitAcc}},[t._v("Подтвердите")])],1)])])],1)},s=[],o=(a("b0c0"),a("0418")),n={name:"Admin",data:function(){return{isMain:!1,loading:!0,name:"",password:"",vacancies:[{name:"Капитан",count:1,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут",time:"4+1 месяца",cost:"2000 USD"},{name:"Старший помощник капитана",count:2,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут, Буксир Талас",time:"4+1 месяца",cost:"1200 USD"},{name:"Второй помощник капитана",count:1,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут, Буксир Талас",time:"4+1 месяца",cost:"1200 USD"},{name:"Третий помощник капитана",count:1,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут, Буксир Талас",time:"4+1 месяца",cost:"1200 USD"},{name:"Старший механик",count:3,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут, Буксир Талас",time:"4+1 месяца",cost:"1200 USD"},{name:"Второй механик",count:1,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут, Буксир Талас",time:"4+1 месяца",cost:"1200 USD"},{name:"Электромеханик",count:1,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут, Буксир Талас",time:"4+1 месяца",cost:"1200 USD"},{name:"Боцман",count:1,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут, Буксир Талас",time:"4+1 месяца",cost:"1200 USD"},{name:"Матрос",count:1,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут, Буксир Талас",time:"4+1 месяца",cost:"1200 USD"},{name:"Моторист",count:1,text:"Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.",sudno:"MCV Беркут, Буксир Талас",time:"4+1 месяца",cost:"1200 USD"}],nameVac:"",count:"",text:"",sudno:"",date:"",price:""}},created:function(){this.getVac()},methods:{getVac:function(){var t=this;this.$axios.get("http://localhost:9000/crewings").then((function(e){t.vacancies=e.data}))},addSpec:function(){var t=this,e={headers:{"Access-Control-Allow-Origin":"*"}};this.nameVac.length>0&&this.count.length>0&&this.text.length>0&&this.sudno.length>0&&this.date.length>0&&this.price.length>0?this.$axios.post("http://localhost:9000/addCrewing",{nameVac:this.nameVac,count:this.count,text:this.text,sudno:this.sudno,date:this.date,price:this.price},e).then((function(e){t.nameVac="",t.count="",t.text="",t.sudno="",t.date="",t.price="",console.log(e),t.getVac(),alert("Добавлена новая вакансия")})):alert("Введите все данные формы")},deleteSpec:function(t){var e=this,a={headers:{"Access-Control-Allow-Origin":"*"}};this.$axios.delete("http://localhost:9000/crewingsDelete/".concat(t),a).then((function(t){console.log(t),e.getVac(),alert("Удалена вакансия")}))},submitAcc:function(){"admin"==this.name&&"something"==this.password?(this.loading=!1,alert("Вы успешно подтвердили свою личность")):alert("Неправильно введены данные")}},components:{Header:o["a"]}},r=n,l=(a("4a9a"),a("2877")),c=a("6544"),u=a.n(c),p=a("8336"),d=a("ce7e"),m=a("a797"),v=a("8654"),h=a("5530"),_=(a("a9e3"),a("1681"),a("58df")),C=Object(_["a"])(v["a"]),b=C.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(h["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},v["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=v["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){v["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),g=Object(l["a"])(r,i,s,!1,null,null,null);e["default"]=g.exports;u()(g,{VBtn:p["a"],VDivider:d["a"],VOverlay:m["a"],VTextField:v["a"],VTextarea:b})},"4a9a":function(t,e,a){"use strict";a("dea9")},dea9:function(t,e,a){}}]);
//# sourceMappingURL=Admin.js.map