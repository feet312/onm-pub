"use strict";(self["webpackChunksksignet"]=self["webpackChunksksignet"]||[]).push([[335],{5335:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"side-wrap"},[t("div",{staticClass:"sideMenu"},[e._m(0),t("div",{staticClass:"menu"},[t("ul",e._l(e.allMenuLists,(function(l,i){return t("li",{key:l.idx,class:{selected:e.isActive===i}},[t("dl",[t("dt",[t("a",{attrs:{href:"#",title:"depth1"},on:{click:e.sideMenuEvent}},[t("span",{class:["menuIcon-"+i]}),e._v(" "+e._s(l.menuTitle)+" "),t("i",{staticClass:"icon icon-default icon-arrowDown-white"})])]),t("dd",[l.children?[0!==i?t("div",{staticClass:"depth2"},[t("ul",e._l(l.children,(function(l){return t("li",{key:l.idx},[t("a",{attrs:{href:"#",title:"depth2"},on:{click:e.sideMenuEvent}},[e._v(e._s(l.menuTitle))]),l.child?[t("div",{staticClass:"depth3"},[t("ul",e._l(l.child,(function(l){return t("li",{key:l.idx},[t("a",{attrs:{href:"#",title:"depth3"},on:{click:e.sideMenuEvent}},[e._v(e._s(l))])])})),0)])]:e._e()],2)})),0)]):e._e()]:e._e()],2)])])})),0)])]),t("button",{staticClass:"btn-sideToggle blind",attrs:{type:"button"},on:{click:e.sidebarToggle}},[e._v("sideToggle")])])},s=[function(){var e=this,t=e._self._c;return t("h1",{staticClass:"skSignet-logo"},[t("img",{attrs:{src:l(980),alt:"skSignet"}})])}],n=l(4730);const c={data:function(){return{isActive:0,allMenuLists:n.Z}},mounted:function(){},methods:{sidebarToggle:function(){this.$store.commit("SIDEMENU_TOGGLE")},sideMenuEvent:function(e){var t=document.querySelectorAll(".menu > ul > li > dl > dt > a "),l=document.querySelectorAll(".depth2 > ul > li > a "),i=document.querySelectorAll(".depth3 > ul > li > a ");if("depth1"===e.target.title)for(var s=0;s<t.length;s++)t[s].parentNode.closest("li").classList.remove("selected"),e.target.parentNode.closest("li").classList.add("selected");else if("depth2"===e.target.title)for(var n=0;n<l.length;n++)l[n].parentNode.classList.remove("selected"),e.target.parentNode.classList.add("selected");else for(var c=0;c<i.length;c++)i[c].parentNode.classList.remove("selected"),e.target.parentNode.classList.add("selected")}}},a=c;var d=l(1001),r=(0,d.Z)(a,i,s,!1,null,"27ccff95",null);const o=r.exports},4730:(e,t,l)=>{l.d(t,{Z:()=>i});const i=[{menuTitle:"대시보드",children:[{menuTitle:"대시보드"}]},{menuTitle:"회원관리",children:[{menuTitle:"고객그룹관리",child:["고객그룹관리-1","고객그룹관리-2","고객그룹관리-3"]},{menuTitle:"회원정보관리",child:["회원정보관리-1","회원정보관리-2","회원정보관리-3"]},{menuTitle:"인증정보(회원카드)관리"},{menuTitle:"고객상담관리"},{menuTitle:"민원접수관리"},{menuTitle:"충전기상태 및 제어"}]},{menuTitle:"충전인프라관리",children:[{menuTitle:"인프라관리",child:["충전기 제조사 관리","충전기 모델 관리","충전소 관리","충전기 관리"]}]},{menuTitle:"요금 및 프로모션관리"},{menuTitle:"결제정보관리"},{menuTitle:"로밍관리"},{menuTitle:"통계관리"},{menuTitle:"시스템관리"}]},980:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAABHCAMAAADmxI9GAAAAS1BMVEVHcEzTLxvAACDAACDpXBTrXBTjRhTpXBTpXRTVMhnAACDAACC/ACDAACDqXRLAACDpXBXpXBXpXBPAACDpXBPoWxLpXBTAACDpXRUtCLEzAAAAF3RSTlMAMIbw60AfgbwQu0Rr0GCg0aBQ4JA4cHa4UU4AAASKSURBVGjezZnXwqo6EIVJTKULSHj/Jz2kMoHg7/ZImSsFI5/JzJpilr0zQcTIstuYmGZrR3knnNme99giPnl7ylvhTIRfj9NNwFp0NQ6FOKK7GoeBw6qzoskv9qAFB8lGKVVde2DE0/BM0yj1QHcQnkmWSl3P43FEVqkb8HjheWZK3YCHh91ZcFR1WXx5HSTLYc2WX66DrAQ4qrxaB7l8QJ6iuMaBgig73bHWaLY+x8XZXhR0sGbAl5eTqzC6Qngi5ZE5PLiqlOfjTBn2z0dSxfbAZ1WLQ8BhOIRVqTaG5ak6OE3U4TRZpEFhh04J/np9WLMEMpXCOWV/6MqV+/mheAvTl1LyuUI72lA4qyKkz37Fks/Bzjg5pd9wNIM0m1NoQnc4hTHNx2ofgK08BWc0panC+oo5qwfLKDc2CALbDXm48JC5CS3wbDZ4TPIqZTsl7WAeyml8obBSOE47dnJutak0e6ZhTu/mbZiD7AEb5/NHC7LfwSH8kqJVO0+/wTlBA3cs16mCRDDi1zBMa9pnR880TgRDf8zSOOF/5K6Wyo0F97VvcQgujEAwoUOCJepa7Gt339U3vXdVpIr6uMhu1LZpgTho033mzpOPCKa4XqiyNY7st82VaXjIESPV0EBV+fzKD5QAjqvT8TqTHRPZzjGa+JcuOGWqER4Skzk5/mJc10Reu8FBH48JdBbrfiFq2k93cJzjfDJEsYOXb6WGMoizngJ4HHe3+LAlG7/vEHgcWHEn4HDKf5hYyKf4ehROAk6RbE1cvxlaq+P7FR45zwrIXYBStHvs6RaEbtxtdQXFUy2Pw8Dk5lFEOG5C8KbveerMToT2mbEl7cu5gi2kieD6mUMrUEa1a5HBf5d9axohMNo3UoZg49RscN7EePjPonX9s8FBoKoXTjOHuLL3pS1BEY7daNlseNSWcGf6Q3RjQwEOgqWQiPp83bCFzt80RIQBnDZUeGBiUyw41fvA8h7IZAZwWlMbMns74IgOdeaOy3h6mwavVBz4zhqoWnC8WxV/B0TA0QdIpL/tcYTxUmIbn8Gfi3YgmcSZgfychC26U7z1ZpPXBxbjPL1LRjg8KCU1+9eGJd0OTqgkCqDKWL2LdQFrU4fjf3EKh1ucqMzmezhegyGOHy2l3VmKlX++rHtn/wNnmcY6HARxvPvsuDMVgQfszt84RHirYxz58JNG9FiS+6be2c3pTDjFADjdexxiAywe+cEUWmGMKygzoAhqVoV7stChAacOArKL4xakcOLhfogiS2A/Ue39McLqBI7UziPYOxzq9DjYaD/J1m1EOBRYHiOVqJYtBxk4F05ovAzazNEK0e7h2IgUeqmlonYF2cwde7TkrJCsSpVUQ0mi3BdyVp1IEjEOmFW1QR/th2W5jIn7UGHExXyedGfJHQ/pYJKYt1P8gbMsdV1j7fKX/V4zasMleBr+rF9nHeejWyYZC2tkp6eGDodR6iph/SqUGJzXFLgh7+R5Nd4NjP+k0/nZhHyjdtdYNxeltDb13w02ZxX/l+P4IP71UOz7adqL0tc3c6j/AGRrxOPdQXw5AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=335.b6a31f20.js.map