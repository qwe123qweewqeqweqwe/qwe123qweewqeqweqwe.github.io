(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0910566c"],{"09dd":function(e,t,a){"use strict";a("402f")},"2f94":function(e,t,a){"use strict";a.d(t,"g",(function(){return n})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return d}));var r=a("b775"),n=function(e){return Object(r["a"])({url:"/vm-service/region/search",method:"GET",params:e})},o=function(e){return Object(r["a"])({url:"/vm-service/region",method:"post",data:e})},i=function(e){return Object(r["a"])({url:"/vm-service/region/".concat(e)})},s=function(e,t,a){return Object(r["a"])({url:"/vm-service/region/".concat(e),method:"PUT",data:{regionName:t,remark:a}})},c=function(e){return Object(r["a"])({url:"/vm-service/region/".concat(e),method:"DELETE"})},l=function(e,t,a){return Object(r["a"])({url:"/vm-service/node/search",params:{pageIndex:e,pageSize:t,regionId:a}})},d=function(e){return Object(r["a"])({url:"/vm-service/node/search",method:"GET",params:e})}},"402f":function(e,t,a){},"53bd":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("nodeSearch",{attrs:{regionlist:e.regionlist},on:{onSearch:e.searchList}}),a("nodeMain",{attrs:{nodeList:e.nodeData.currentPageRecords},on:{add:e.addDialog,remove:e.getNodeList,edit:e.editNode,check:e.checkNode},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}}),e.nodeData.totalCount?a("pagenation",{attrs:{listIsShow:this.lastDisabled&&this.rightDisabled,taskList:e.nodeData,lastDisabled:e.lastDisabled,rightDisabled:e.rightDisabled},on:{lastPage:e.getLastTaskService,nextPage:e.getNextTaskService}}):e._e(),a("addNode",{ref:"addnode",attrs:{visible:e.addShowDialog,regionlist:e.regionlist,businessType:e.businessType,ownerName:e.ownerName},on:{"update:visible":function(t){e.addShowDialog=t},addSuccess:e.getNodeList,editDilog:e.editDilog}}),a("checkNodeItem",{attrs:{visible:e.checkShowDialog,nodeItemList:e.nodeItemList},on:{"update:visible":function(t){e.checkShowDialog=t}}})],1)},n=[],o=a("f07e"),i=a("c964"),s=(a("b0c0"),a("b775")),c=function(e,t){return Object(s["a"])({url:"/vm-service/region/search",method:"GET",params:{pageIndex:e,pageSize:t}})},l=function(){return Object(s["a"])({url:"/vm-service/businessType",method:"GET"})},d=function(e,t){return Object(s["a"])({url:"/user-service/partner/search",method:"GET",params:{pageIndex:e,pageSize:t}})},u=function(e){return Object(s["a"])({url:"/vm-service/node",method:"post",data:e})},m=function(e){return Object(s["a"])({url:"/vm-service/node/".concat(e),method:"DELETE"})},f=function(e){return Object(s["a"])({url:"/vm-service/node/".concat(e.id),method:"PUT",data:e})},p=function(e){return Object(s["a"])({url:"/vm-service/node/vmList/".concat(e)})},b=a("2f94"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"search"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formData}},[a("el-form-item",{attrs:{label:"点位搜索:"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"区域搜索:"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.regionId,callback:function(t){e.$set(e.formData,"regionId",t)},expression:"formData.regionId"}},e._l(e.regionlist,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",[a("el-button",{staticClass:"btnInquire",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.onSearch}},[e._v("查询")])],1)],1)],1)])},g=[],v=(a("498a"),{data:function(){return{formData:{name:"",regionId:""}}},props:{regionlist:{type:Array}},created:function(){},methods:{onSearch:function(){this.formData.name=this.formData.name.trim(),this.formData.regionId=this.formData.regionId.trim(),this.$emit("onSearch",this.formData)}}}),w=v,D=(a("9a1a"),a("0c7c")),x=Object(D["a"])(w,h,g,!1,null,"00235112",null),y=x.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"result"},[a("el-row",{staticClass:"operation"},[a("el-button",{staticClass:"addBtn",attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},nativeOn:{click:function(t){return e.$emit("add")}}},[e._v("新建")])],1),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.nodeList,"highlight-current-row":"","empty-text":"暂无数据"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"点位名称",width:"200"}}),a("el-table-column",{attrs:{prop:"region.name",label:"所在区域",width:"200"}}),a("el-table-column",{attrs:{prop:"businessType.name",label:"商圈类型",width:"200"}}),a("el-table-column",{attrs:{prop:"ownerName",label:"合作商",width:"200"}}),a("el-table-column",{attrs:{prop:"addr",label:"详细地址",formatter:e.addrType,width:"195","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"el-button--text",attrs:{type:"primary"},nativeOn:{click:function(a){return e.$emit("check",t.row)}}},[e._v("查看详情")]),a("el-button",{staticClass:"el-button--text",attrs:{type:"primary"},nativeOn:{click:function(a){return e.$emit("edit",t.row)}}},[e._v("修改")]),a("el-button",{staticClass:"el-button--text",staticStyle:{color:"rgb(255, 90, 90)"},attrs:{type:"danger"},on:{click:function(a){return e.onRemove(t.row)}}},[e._v("删除")])]}}])})],1)]],2)])},I=[],O=(a("fb6a"),{data:function(){return{}},props:{nodeList:{type:Array}},created:function(){},methods:{onRemove:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$confirm("确定要删除吗","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});case 3:return a.next=5,m(e.id);case 5:t.$message.success("删除成功"),t.$emit("remove"),a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](0),t.$message.error("删除失败"),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()},addrType:function(e,t,a){return a.slice(12)}}}),j=O,S=(a("920a"),Object(D["a"])(j,k,I,!1,null,"254b1b3e",null)),C=S.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.listIsShow?e._e():a("div",{staticClass:"total"},[a("span",[e._v("共"+e._s(e.taskList.totalCount)+"条数据 第"+e._s(e.taskList.pageIndex)+"/ "+e._s(Math.ceil(e.taskList.totalCount/10))+"页")]),a("div",{staticClass:"page-button"},[a("MyButton",{attrs:{btnStyle:e.pageBtnStyle,disabled:e.lastDisabled},on:{click:e.lastPage}},[e._v("上一页 ")]),a("MyButton",{attrs:{btnStyle:e.pageBtnStyle,disabled:e.rightDisabled},on:{click:e.nextPage}},[e._v("下一页 ")])],1)])},$=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mybutton"},[a("el-button",{class:{disabled:e.disabled},style:e.btnStyle,attrs:{disabled:e.disabled,type:"primary",icon:e.icon},on:{click:e.clickFn}},[e._t("lastIcon"),e._t("default")],2)],1)},N=[],L={name:"MyButton",data:function(){return{}},props:{icon:{type:String},btnStyle:{type:Object},disabled:{type:Boolean,default:!1}},created:function(){},methods:{clickFn:function(){this.$emit("click")}},computed:{}},E=L,B=(a("d8fe"),Object(D["a"])(E,_,N,!1,null,"116b7a30",null)),P=B.exports,R={name:"FooterPage",data:function(){return{pageBtnStyle:{background:"#d5ddf8",width:"70px",height:"32px",color:"#000",fontWeight:"400",marginLeft:"25px"}}},props:{listIsShow:{type:Boolean},taskList:{type:Object},lastDisabled:{type:Boolean},rightDisabled:{type:Boolean}},created:function(){},methods:{lastPage:function(){this.$emit("lastPage")},nextPage:function(){this.$emit("nextPage")}},computed:{},components:{MyButton:P}},q=R,M=(a("09dd"),Object(D["a"])(q,T,$,!1,null,"ce12034a",null)),A=M.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.visible,width:"630px","before-close":e.onClose}},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.formDataRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"点位名称:",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"15","show-word-limit":""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"所在区域:",prop:"region"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.formData.regionId,callback:function(t){e.$set(e.formData,"regionId",t)},expression:"formData.regionId"}},e._l(e.regionlist,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"商圈类型:",prop:"businessType"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.formData.businessId,callback:function(t){e.$set(e.formData,"businessId",t)},expression:"formData.businessId"}},e._l(e.businessType,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"归属合作商:",prop:"ownerName"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.formData.ownerId,callback:function(t){e.$set(e.formData,"ownerId",t)},expression:"formData.ownerId"}},e._l(e.ownerName,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"详细地址:",prop:"addr"}},[a("el-cascader",{staticStyle:{"margin-bottom":"20px",width:"100%"},attrs:{options:e.addrList,placeholder:"请选择",clearable:""},model:{value:e.formData.areaCode,callback:function(t){e.$set(e.formData,"areaCode",t)},expression:"formData.areaCode"}}),a("el-input",{attrs:{type:"textarea",maxlength:"60",autosize:{minRows:3,maxRows:4},placeholder:"请输入详细地址","show-word-limit":""},model:{value:e.formData.addr,callback:function(t){e.$set(e.formData,"addr",t)},expression:"formData.addr"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"cancleBtn",on:{click:e.onClose}},[e._v("取 消")]),a("el-button",{staticClass:"confirmBtn",attrs:{type:"primary"},on:{click:e.onSave}},[e._v("确 定")])],1)],1)},G=[],F=(a("d3b7"),a("4de4"),a("99af"),a("ef6c")),U={data:function(){var e=this,t=function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(a,r,n){var i,s,c;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["f"])();case 2:i=t.sent,s=i.data.currentPageRecords,c=e.formData.id?s.filter((function(t){return t.id!==e.formData.id})).some((function(e){return e.name===r})):s.some((function(e){return e.name===r})),c?n(new Error("点位名称重复")):n();case 6:case"end":return t.stop()}}),t)})));return function(e,a,r){return t.apply(this,arguments)}}();return{dialogTitle:"新增点位",addrList:F["regionData"],formData:{name:"",regionId:"",businessId:"",ownerId:"",areaCode:"",addr:""},formDataRules:{name:[{required:!0,message:"点位名称不能为空",trigger:"blur"},{validator:t,trigger:"blur"}],regionId:[{required:!0,message:"所在区域不能为空",trigger:"blur"}],businessId:[{required:!0,message:"商圈类型不能为空",trigger:"blur"}],ownerId:[{required:!0,message:"合作商不能为空",trigger:"blur"}],areaCode:[{required:!0,message:"地址不能为空",trigger:"blur"}],addr:[{required:!0,message:"详细地址不能为空",trigger:"blur"}]}}},props:{visible:{type:Boolean,required:!0},regionlist:{type:Array},businessType:{type:Array},ownerName:{type:Array}},computed:{ownerNames:function(){var e=this,t=this.ownerName.filter((function(t){return t.id===e.formData.ownerId}));return t[0].name}},methods:{onClose:function(){this.$emit("update:visible",!1),this.$refs.form.resetFields(),this.dialogTitle="新增点位",this.formData={name:"",regionId:"",businessId:"",ownerId:"",areaCode:"",addr:""}},onSave:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,r,n,i;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.form.validate();case 2:if(!e.formData.id){t.next=21;break}return t.prev=3,a=e.formData.areaCode,r="".concat(F["CodeToText"][a[0]],"-").concat(F["CodeToText"][a[1]],"-").concat(F["CodeToText"][a[2]],"-").concat(e.formData.addr),e.formData.addr=r,e.formData.ownerName=e.ownerNames,e.formData.areaCode=e.formData.areaCode[2],t.next=11,f(e.formData);case 11:e.$message.success("修改成功"),e.onClose(),e.$emit("addSuccess"),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](3),e.$message.error("修改失败");case 19:t.next=38;break;case 21:return t.prev=21,n=e.formData.areaCode,i="".concat(F["CodeToText"][n[0]],"-").concat(F["CodeToText"][n[1]],"-").concat(F["CodeToText"][n[2]],"-").concat(e.formData.addr),e.formData.addr=i,e.formData.areaCode=e.formData.areaCode[2],e.formData.ownerName=e.ownerNames,e.formData.createUserId=e.$store.state.user.token.userId,t.next=30,u(e.formData);case 30:e.$message.success("添加成功"),e.onClose(),e.$emit("addSuccess"),t.next=38;break;case 35:t.prev=35,t.t1=t["catch"](21),e.$message.error("添加失败");case 38:case"end":return t.stop()}}),t,null,[[3,16],[21,35]])})))()},getNodeItem:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r,n,i;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.dialogTitle="修改点位",t.$emit("editDilog"),t.formData.id=e.id,t.formData.name=e.name,t.formData.regionId=e.region.id,t.formData.businessId=e.businessType.id,t.formData.ownerId=e.ownerId,r=e.areaCode.substr(0,2)+"0000",n=e.areaCode.substr(0,4)+"00",i=[],i.push(r,n,e.areaCode),t.formData.areaCode=i,t.formData.addr=e.addr,t.formData.createUserId=t.$store.state.user.token.userId;case 14:case"end":return a.stop()}}),a)})))()}}},J=U,W=(a("59ef"),Object(D["a"])(J,z,G,!1,null,"786003a4",null)),H=W.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"点位详情",visible:e.visible,width:"630px","before-close":e.onClose}},[a("el-form",{attrs:{model:e.formData}},[a("el-form-item",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.nodeItemList,"highlight-current-row":"","empty-text":"暂无数据",align:"center"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",algin:"center"}}),a("el-table-column",{attrs:{prop:"innerCode",label:"机器编号",width:"158",align:"center"}}),a("el-table-column",{attrs:{prop:"vmStatus",label:"设备状态",formatter:e.vmStatusType,width:"158",align:"center"}}),a("el-table-column",{attrs:{prop:"lastSupplyTime",label:"最后一次供货时间",formatter:e.timeType,width:"158",align:"center"}})],1)],1)],1)],1)},Q=[],V=(a("ac1f"),a("5319"),{data:function(){return{formData:{}}},created:function(){},props:{visible:{type:Boolean,required:!0},nodeItemList:{type:Array}},methods:{onClose:function(){this.$emit("update:visible",!1)},vmStatusType:function(e,t,a){return["未投放","运营","","撤机"][a]},timeType:function(e,t,a){return a.replace("T"," ")}}}),X=V,Y=(a("9809"),Object(D["a"])(X,K,Q,!1,null,"a6a053ee",null)),Z=Y.exports,ee={data:function(){return{nodeData:{},loading:!1,addShowDialog:!1,regionlist:[],businessType:[],ownerName:[],nodeItemList:[],checkShowDialog:!1,params:{pageIndex:1,pageSize:10}}},components:{nodeSearch:y,nodeMain:C,pagenation:A,addNode:H,checkNodeItem:Z},created:function(){this.getNodeList()},computed:{lastDisabled:function(){return this.nodeData.pageIndex<=1},rightDisabled:function(){return this.nodeData.pageIndex==Math.ceil(this.nodeData.totalCount/10)}},methods:{getNodeList:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(b["f"])(e.params);case 3:return a=t.sent,t.next=6,c(1,100);case 6:r=t.sent,e.regionlist=r.data.currentPageRecords,e.nodeData=a.data,e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()},getNextTaskService:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.params.pageIndex++,e.getNodeList();case 2:case"end":return t.stop()}}),t)})))()},getLastTaskService:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.params.pageIndex--,e.getNodeList();case 2:case"end":return t.stop()}}),t)})))()},addDialog:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,r,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.addShowDialog=!0,t.next=3,c(1,100);case 3:return a=t.sent,e.regionlist=a.data.currentPageRecords,t.next=7,l();case 7:return r=t.sent,e.businessType=r.data,t.next=11,d(1,100);case 11:n=t.sent,e.ownerName=n.data.currentPageRecords;case 13:case"end":return t.stop()}}),t)})))()},editNode:function(e){this.addShowDialog=!0,this.$refs.addnode.getNodeItem(e)},editDilog:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,r,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c(1,100);case 2:return a=t.sent,e.regionlist=a.data.currentPageRecords,t.next=6,l();case 6:return r=t.sent,e.businessType=r.data,t.next=10,d(1,100);case 10:n=t.sent,e.ownerName=n.data.currentPageRecords;case 12:case"end":return t.stop()}}),t)})))()},checkNode:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.checkShowDialog=!0,a.next=3,p(e.id);case 3:r=a.sent,t.nodeItemList=r.data;case 5:case"end":return a.stop()}}),a)})))()},searchList:function(e){this.params.name=e.name,this.params.regionId=e.regionId,this.getNodeList()}}},te=ee,ae=Object(D["a"])(te,r,n,!1,null,"5faf5702",null);t["default"]=ae.exports},"59ef":function(e,t,a){"use strict";a("f0b3")},"5eaa":function(e,t,a){},"920a":function(e,t,a){"use strict";a("5eaa")},9809:function(e,t,a){"use strict";a("9a52")},"9a1a":function(e,t,a){"use strict";a("a2e3")},"9a52":function(e,t,a){},a2e3:function(e,t,a){},d8fe:function(e,t,a){"use strict";a("f053")},f053:function(e,t,a){},f0b3:function(e,t,a){}}]);