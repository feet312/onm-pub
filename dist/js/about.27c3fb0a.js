"use strict";(self["webpackChunksksignet"]=self["webpackChunksksignet"]||[]).push([[443],{1923:(t,e,i)=>{i.r(e),i.d(e,{default:()=>z});var o=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Test")]),t._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ut beatae, deserunt voluptates autem, et rem cum officia hic culpa impedit qui saepe, itaque iure iusto quo. Delectus fugiat alias libero nemo aliquam asperiores ipsum ullam aperiam minima nobis commodi ea nihil veniam sapiente odio deserunt quos, at dolorum distinctio facere laudantium sint. Eos est similique, non sit vitae inventore fuga laboriosam nam molestias, provident doloribus voluptatem quis optio nobis et dolore perferendis. Sequi voluptatum, id, maiores quia vel ipsa voluptatibus possimus dignissimos quos sapiente assumenda quo illum rem. Tenetur voluptatum aspernatur, facere et rem tempora culpa impedit voluptatem doloribus! "),e("button",{on:{click:t.clickBtn}},[t._v("시작")]),e("p",{ref:"pEl"},[t._v("dfdfdsf")]),e("check-box-test",{attrs:{checkbox:t.checkboxLists},on:{checkboxToggle:t.toggleCheckbox}}),e("radio-box",{attrs:{radiobox:t.radioboxLists}}),e("h2",[t._v("Basic DataGrid")]),e("div",[e("DataGrid",{staticStyle:{height:"250px"},attrs:{data:t.data}},[e("GridColumn",{attrs:{field:"itemid",title:"Item ID"}}),e("GridColumn",{attrs:{field:"name",title:"Name"}}),e("GridColumn",{attrs:{field:"listprice",title:"List Price",align:"right"}}),e("GridColumn",{attrs:{field:"unitcost",title:"Unit Cost",align:"right"}}),e("GridColumn",{attrs:{field:"attr",title:"Attribute",width:"30%"}}),e("GridColumn",{attrs:{field:"status",title:"Status",align:"center"}})],1)],1),t._v(" "+t._s(t.currentCheckbox)+" ")],1)},s=[],a=i(2482),n=(i(4553),i(3486)),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"checkbox-inline"},[t._l(t.checkbox,(function(i,o){return e("div",{key:{idx:o},staticClass:"checkbox-group"},[e(n.Z,{attrs:{label:i.label},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}})],1)})),e("p",[t._v("dfl;d;fkds;fk;ds:"+t._s(t.checkbox1))])],2)},l=[];const u={props:{checkbox:{type:Array,default:function(){return[]}}},methods:{checkboxToggle:function(t){this.$emit("toggle",{id:this.checkbox.id,checked:t.target.checked})}}},c=u;var d=i(1001),h=(0,d.Z)(c,r,l,!1,null,null,null);const p=h.exports;var m=i(2078),f=i(5082),b=(i(8309),i(4738)),v=i(2240),g=i(573),x=i(2500),k=i(6878),S=i(3037),C=i(7550),Z=i(6669),L=i(9022),_=i(5352),G=i(7678),I=i(1767),y=["title"],T=(0,G.Z)(x.Z,k.Z,C.Z,(0,S.d)("radioGroup"),Z.Z);const P=T.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return(0,f.Z)((0,f.Z)({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){if(!this.isDisabled)return L.Z.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return g.Z.options.computed.computedId.call(this)},hasLabel:g.Z.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return L.Z.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return L.Z.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(b.Z,{on:{click:L.X},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},(0,_.z9)(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,(0,m.Z)(t,y));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(v.Z,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput((0,f.Z)({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:(0,I.bp)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}});i(9653),i(7393);var D=i(3385),E=(0,G.Z)(D.y,g.Z);const $=E.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return(0,f.Z)((0,f.Z)({},g.Z.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},g.Z.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=g.Z.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=g.Z.options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs["for"],t.tag="legend",t):null},onClick:D.y.options.methods.onClick},render:function(t){var e=g.Z.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}});var A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"radioBox-inline"},[e($,t._l(t.radiobox,(function(t,i){return e("div",{key:{idx:i},staticClass:"radioBox-group"},[e(P,{attrs:{label:t.label,value:t.label,color:"orange"}})],1)})),0)],1)},B=[];const R={props:{radiobox:{type:Array,default:function(){return[]}}},data:function(){return{}}},F=R;var q=(0,d.Z)(F,A,B,!1,null,null,null);const w=q.exports;var N;const H=(N={components:{CheckBoxTest:p,RadioBox:w},data:function(){return{currentCheckbox:1,active:!0,checkboxLists:[{label:"checkbox-1"},{label:"checkbox-2"},{label:"checkbox-3"}],radioboxLists:[{label:"radiobox-1"},{label:"radiobox-2"},{label:"radiobox-3"}],data:[]}},methods:{toggleCheckbox:function(t){var e=t.id,i=t.checked,o=this.checkboxLists.findIndex((function(t){return t.id===e}));this.checkboxLists[o].checked=i}},created:function(){this.data=[{code:"FI-SW-01",name:"Koi",unitcost:10,status:"P",listprice:36.5,attr:"Large",itemid:"EST-1"},{code:"K9-DL-01",name:"Dalmation",unitcost:12,status:"P",listprice:18.5,attr:"Spotted Adult Female",itemid:"EST-10"},{code:"RP-SN-01",name:"Rattlesnake",unitcost:12,status:"P",listprice:38.5,attr:"Venomless",itemid:"EST-11"},{code:"RP-SN-01",name:"Rattlesnake",unitcost:12,status:"P",listprice:26.5,attr:"Rattleless",itemid:"EST-12"},{code:"RP-LI-02",name:"Iguana",unitcost:12,status:"P",listprice:35.5,attr:"Green Adult",itemid:"EST-13"},{code:"FL-DSH-01",name:"Manx",unitcost:12,status:"P",listprice:158.5,attr:"Tailless",itemid:"EST-14"},{code:"FL-DSH-01",name:"Manx",unitcost:12,status:"P",listprice:83.5,attr:"With tail",itemid:"EST-15"},{code:"FL-DLH-02",name:"Persian",unitcost:12,status:"P",listprice:23.5,attr:"Adult Female",itemid:"EST-16"},{code:"FL-DLH-02",name:"Persian",unitcost:12,status:"P",listprice:89.5,attr:"Adult Male",itemid:"EST-17"},{code:"AV-CB-01",name:"Amazon Parrot",unitcost:92,status:"P",listprice:63.5,attr:"Adult Male",itemid:"EST-18"}]}},(0,a.Z)(N,"methods",{clickBtn:function(){this.$refs.pEl.innerText="vue"}}),(0,a.Z)(N,"mounted",(function(){})),N),M=H;var K=(0,d.Z)(M,o,s,!1,null,null,null);const z=K.exports}}]);
//# sourceMappingURL=about.27c3fb0a.js.map