(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3368b7e0"],{"0e10":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"business-container"},[a("div",{staticClass:"business-search"},[a("span",[e._v("人员搜索:")]),a("InputField",{ref:"inputContent"}),a("span",[e._v("角色：")]),a("AutoComplete",{ref:"AutoComplete",attrs:{options:e.roleList}}),a("CustomButton",{staticClass:"btn",attrs:{iconType:"el-icon-search"},nativeOn:{click:function(t){return e.searchFn(t)}}},[e._v("查询")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",staticStyle:{width:"100%","padding-left":"17px","padding-right":"17px","padding-top":"20px"},attrs:{data:e.userWorkListData.currentPageRecords,"cell-style":{padding:"3px 0px ",border:0},"header-cell-style":{background:"rgb(243, 246, 251)"},"empty-text":"暂无数据"}},[a("el-table-column",{attrs:{label:"序号",width:"80",type:"index",index:e.table_index}}),a("el-table-column",{attrs:{prop:"userName",label:"人员名称",width:"250"}}),a("el-table-column",{attrs:{prop:"roleName",label:"角色",width:"250"}}),a("el-table-column",{attrs:{prop:"mobile",label:"联系电话",width:"250"}}),a("el-table-column",{attrs:{prop:"workCount",label:"完成工单（本月）",width:"250"}}),a("el-table-column",{attrs:{prop:"progressTotal",label:"进行中工单",width:"250"}}),a("el-table-column",{attrs:{prop:"total",label:"拒绝工单（本月）",width:"250"}}),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#5f84ff"},attrs:{type:"text",size:"medium"},on:{click:function(a){return e.viewDetails(t.$index,t.row)}}},[e._v("查看详情")])]}}])})],1),e.userWorkListData.totalPage>1?a("Pagination",{attrs:{page:e.userWorkListData,upDisabled:e.upDisabled,downDisabled:e.downDisabled},on:{pageDown:e.getUserWorkList,pageUp:e.getUserWorkList}}):e._e(),a("FormDialog",{ref:"dialog"})],1)},r=[],s=a("f3f3"),o=a("f07e"),i=a("c964"),l=a("4a46"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.roleId,attrs:{label:e.roleName,value:e.roleId}})})),1)},u=[],d={props:{options:{type:Array,required:!0}},data:function(){return{value:""}}},p=d,b=(a("8104"),a("0c7c")),f=Object(b["a"])(p,c,u,!1,null,"65b666bb",null),m=f.exports,h=a("755d"),g=a("333d"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"人员详情",visible:e.dialogTableVisible,"close-on-click-modal":!1,width:"630px"},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-row",[a("el-col",{attrs:{span:9}},[a("div",{staticClass:"grid-content bg-purple"},[e._v(" 人员名称："+e._s(e.detailInfo.userName)+" ")])]),a("el-col",{attrs:{span:7}},[a("div",{staticClass:"grid-content bg-purple-light"},[e._v(" 角色："+e._s(e.detailInfo.roleName)+" ")])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[e._v(" 联系电话："+e._s(e.detailInfo.mobile)+" ")])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-dark"},[e._v(" 负责区域："+e._s(e.detailInfo.regionName)+" ")])])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.workCount,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"",width:"117"}}),a("el-table-column",{attrs:{prop:"total",label:"总工单数",width:"117"}}),a("el-table-column",{attrs:{prop:"cancelCount",label:"拒绝工单",width:"117"}}),a("el-table-column",{attrs:{prop:"workCount",label:"完成工单",width:"117"}}),a("el-table-column",{attrs:{prop:"progressTotal",label:"进行中工单",width:"117"}})],1)],1)},w=[],k={data:function(){return{detailInfo:{},dialogTableVisible:!1,workCount:[]}},created:function(){},methods:{}},x=k,D=(a("c09e"),Object(b["a"])(x,v,w,!1,null,"29dce83d",null)),O=D.exports,_=a("bc95"),j=a("b775"),C=function(e){return Object(j["a"])({url:"/user-service/user/searchUserWork",params:e})},I=function(e){return Object(j["a"])({url:"/task-service/task/userWork",params:e})},y=a("5a0c"),Y=a.n(y),W={components:{InputField:l["a"],AutoComplete:m,CustomButton:h["a"],Pagination:g["a"],FormDialog:O},data:function(){return{loading:!0,roleList:[],params:{pageIndex:1,pageSize:10},userWorkListData:[],paramsWeek:{userId:"",start:"",end:""},paramsMonth:{userId:"",start:"",end:""},paramsYear:{userId:"",start:"",end:""},workCount:[]}},created:function(){this.getRoleList(),this.getUserWorkList()},methods:{getRoleList:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_["g"])();case 3:a=t.sent,e.roleList=a.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getUserWorkList:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var n,r,s;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,t.loading=!0,"down"!==e){a.next=10;break}return t.params.pageIndex=parseInt(t.params.pageIndex)+1,a.next=6,C(t.params);case 6:n=a.sent,t.userWorkListData=n.data,a.next=22;break;case 10:if("up"!==e){a.next=18;break}return t.params.pageIndex=parseInt(t.params.pageIndex)-1,a.next=14,C(t.params);case 14:r=a.sent,t.userWorkListData=r.data,a.next=22;break;case 18:return a.next=20,C(t.params);case 20:s=a.sent,t.userWorkListData=s.data;case 22:t.params.pageIndex===parseInt(t.userWorkListData.totalPage)?(t.downDisabled=!0,t.upDisabled=!1):1===t.params.pageIndex?(t.downDisabled=!1,t.upDisabled=!0):(t.downDisabled=!1,t.upDisabled=!1),a.next=28;break;case 25:a.prev=25,a.t0=a["catch"](0),console.log(a.t0);case 28:return a.prev=28,t.loading=!1,a.finish(28);case 31:case"end":return a.stop()}}),a,null,[[0,25,28,31]])})))()},table_index:function(e){return e+(this.params.pageIndex-1)*this.params.pageSize+1},searchFn:function(){this.params.userName=this.$refs.inputContent.input,this.params.roleId=this.$refs.AutoComplete.value,this.getUserWorkList(this.params)},viewDetails:function(e,t){var a=this;return Object(i["a"])(Object(o["a"])().mark((function e(){var n;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a.paramsWeek.userId=t.userId,a.paramsMonth.userId=t.userId,a.paramsYear.userId=t.userId,e.next=6,Object(_["d"])(t.userId);case 6:return n=e.sent,a.$refs.dialog.detailInfo=n.data,e.next=10,a.getUserWorkTime();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:return e.prev=15,a.$refs.dialog.dialogTableVisible=!0,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))()},getTime:function(){this.paramsWeek.start=Y()().startOf("week").add(1,"day").format("YYYY-MM-DD HH:mm:ss"),this.paramsWeek.end=Y()().endOf("week").add(1,"day").format("YYYY-MM-DD HH:mm:ss"),this.paramsMonth.start=Y()().startOf("month").format("YYYY-MM-DD HH:mm:ss"),this.paramsMonth.end=Y()().endOf("month").format("YYYY-MM-DD HH:mm:ss"),this.paramsYear.start=Y()().startOf("year").format("YYYY-MM-DD HH:mm:ss"),this.paramsYear.end=Y()().endOf("year").format("YYYY-MM-DD HH:mm:ss")},getUserWorkTime:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,n,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.workCount=[],t.next=4,e.getTime();case 4:return t.next=6,I(e.paramsWeek);case 6:return a=t.sent,e.workCount.push(Object(s["a"])(Object(s["a"])({},a.data),{},{date:"本周"})),t.next=10,I(e.paramsMonth);case 10:return n=t.sent,e.workCount.push(Object(s["a"])(Object(s["a"])({},n.data),{},{date:"本月"})),t.next=14,I(e.paramsYear);case 14:r=t.sent,e.workCount.push(Object(s["a"])(Object(s["a"])({},r.data),{},{date:"本年"})),e.$refs.dialog.workCount=e.workCount,t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](0),console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})))()}}},L=W,M=(a("d9bf"),Object(b["a"])(L,n,r,!1,null,"9d8c7faa",null));t["default"]=M.exports},"14d7":function(e,t,a){"use strict";a("6871")},"1a7e":function(e,t,a){},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container"},[a("div",{staticClass:"el-pagination is-background"},[a("span",{staticClass:"el-pagination__total"},[e._v("共"+e._s(e.page.totalCount)+"条记录 第 "+e._s(e.page.pageIndex)+"/"+e._s(e.page.totalPage)+" 页")]),a("button",{class:{btnDefault:!e.upDisabled,btnDisabled:e.upDisabled},attrs:{type:"button",disabled:e.upDisabled},on:{click:e.pageUp}},[a("span",[e._v("上一页")])]),a("button",{class:{btnDefault:!e.downDisabled,btnDisabled:e.downDisabled},attrs:{type:"button",disabled:e.downDisabled},on:{click:e.pageDown}},[a("span",[e._v("下一页")])])])])},r=[],s={props:{upDisabled:{type:Boolean,default:!1},downDisabled:{type:Boolean,default:!1},page:{type:Object}},data:function(){return{}},created:function(){},methods:{pageDown:function(){this.$emit("pageDown","down")},pageUp:function(){this.$emit("pageUp","up")}}},o=s,i=(a("14d7"),a("0c7c")),l=Object(i["a"])(o,n,r,!1,null,"229e4442",null);t["a"]=l.exports},"4a46":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)},r=[],s={data:function(){return{input:""}},created:function(){},methods:{}},o=s,i=(a("5b3d"),a("0c7c")),l=Object(i["a"])(o,n,r,!1,null,"72b2d66a",null);t["a"]=l.exports},"5b3d":function(e,t,a){"use strict";a("1a7e")},6842:function(e,t,a){},6871:function(e,t,a){},"755d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{staticClass:"search-btn",style:e.styles,attrs:{type:"primary",icon:e.iconType},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)],1)},r=[],s={props:{iconType:{type:String},styles:{type:Object}},data:function(){return{}},created:function(){},methods:{}},o=s,i=(a("d4da"),a("0c7c")),l=Object(i["a"])(o,n,r,!1,null,"52890a04",null);t["a"]=l.exports},8104:function(e,t,a){"use strict";a("e666")},"913b":function(e,t,a){},bc95:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return s})),a.d(t,"g",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a("b775"),r=function(e){return Object(n["a"])({url:"/user-service/user/search",params:e})},s=function(e){return Object(n["a"])({url:"/vm-service/region/search",params:e})},o=function(){return Object(n["a"])({url:"/user-service/role"})},i=function(e){return Object(n["a"])({method:"POST",url:"/user-service/user",data:e})},l=function(e){return Object(n["a"])({method:"GET",url:"/user-service/user/".concat(e)})},c=function(e,t){return Object(n["a"])({method:"PUT",url:"/user-service/user/".concat(e),data:t})},u=function(e){return Object(n["a"])({method:"DELETE",url:"/user-service/user/".concat(e),data:data})}},bebc:function(e,t,a){},c09e:function(e,t,a){"use strict";a("913b")},d4da:function(e,t,a){"use strict";a("6842")},d9bf:function(e,t,a){"use strict";a("bebc")},e666:function(e,t,a){}}]);