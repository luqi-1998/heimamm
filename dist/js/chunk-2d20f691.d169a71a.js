(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f691"],{b409:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("el-card",[a("el-form",{ref:"formRef",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{label:"用户名称",prop:"username"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"用户邮箱",prop:"email"}},[a("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"角色",prop:"role_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.role_id,callback:function(t){e.$set(e.form,"role_id",t)},expression:"form.role_id"}},e._l(e.options,(function(e){return a("el-option",{key:e.lable,attrs:{label:e.value,value:e.label}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.sreach}},[e._v("搜索")]),a("el-button",{on:{click:e.close}},[e._v("清除")]),a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("+新增用户")])],1)],1)],1),a("el-card",{staticStyle:{marginTop:"20px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),a("el-table-column",{attrs:{prop:"username",label:"用户名",width:"120"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"150"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"150"}}),a("el-table-column",{attrs:{prop:"role_id",label:"角色",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(1===t.row.role_id?"超级管理员":2===t.row.role_id?"管理员":3===t.row.role_id?"老师":"学生"))])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"150"}}),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{style:"1"==t.row.status?"color:#000":"color:red"},[e._v(e._s("1"==t.row.status?"启用":"禁用"))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.updata(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"small",type:"1"==t.row.status?"info":"success"},on:{click:function(a){return e.changeRole(t.row.id)}}},[e._v(e._s("1"==t.row.status?"禁用":"启用"))]),a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.del(t.row.id)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[2,5,8,10],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("add-updata",{ref:"addupdata"})],1)},l=[],n=a("5530"),o=(a("96cf"),a("1da1")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.formRules}},[a("el-form-item",{attrs:{label:"用户名","label-width":"70px",prop:"username"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"邮箱","label-width":"70px",prop:"email"}},[a("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"电话","label-width":"70px",prop:"phone"}},[a("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),a("el-form-item",{attrs:{label:"角色","label-width":"70px",prop:"role_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.role_id,callback:function(t){e.$set(e.form,"role_id",t)},expression:"form.role_id"}},e._l(e.options,(function(e){return a("el-option",{key:e.lable,attrs:{label:e.value,value:e.label}})})),1)],1),a("el-form-item",{attrs:{label:"状态","label-width":"70px",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{attrs:{value:0,label:"禁用"}}),a("el-option",{attrs:{value:1,label:"启用"}})],1)],1),a("el-form-item",{attrs:{label:"用户备注","label-width":"70px",prop:"remark"}},[a("el-input",{model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addedit}},[e._v("确 定")])],1)],1)},i=[],u={name:"userupdata",data:function(){return{title:"新增用户",dialogFormVisible:!1,form:{username:"",email:"",phone:"",role_id:"",remark:"",status:""},formRules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],email:[{required:!0,trigger:"blur"},{validator:function(e,t,a){t||a(new Error("邮箱不能为空"));var r=/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;r.test(t)||a(new Error("邮箱不合法")),a()},trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:function(e,t,a){t||a(new Error("手机号不能为空"));var r=/^1(3|4|5|6|7|8|9)\d{9}$/;r.test(t)||a(new Error("手机号不合法")),a()},trigger:"blur"}],role_id:[{required:!0,message:"角色不能为空",trigger:"blur"}]},options:[{label:1,value:"超级管理员"},{label:2,value:"管理员"},{label:3,value:"老师"},{label:4,value:"学生"}]}},watch:{dialogFormVisible:function(e){e||this.$refs.formRef.resetFields()}},methods:{addedit:function(){var e=this;"新增用户"===this.title?this.$refs.formRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",e.$message.error("验证不通过"));case 2:return delete e.form.id,t.next=5,e.$axios.post("/user/add",e.form);case 5:r=t.sent,200===r.code&&(e.$message.success("新增成功"),e.$parent.pageIndex=1,e.$parent.getData(),e.dialogFormVisible=!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$refs.formRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",e.$message.error("验证不通过"));case 2:return t.next=4,e.$axios.post("/user/edit",e.form);case 4:r=t.sent,200===r.code&&(e.$message.success("修改成功"),e.$parent.pageIndex=1,e.$parent.getData(),e.dialogFormVisible=!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},c=u,m=a("2877"),d=Object(m["a"])(c,s,i,!1,null,null,null),p=d.exports,f={name:"user",components:{addUpdata:p},data:function(){return{options:[{label:1,value:"超级管理员"},{label:2,value:"管理员"},{label:3,value:"老师"},{label:4,value:"学生"}],form:{username:"",email:"",role_id:""},tableData:[],total:10,pageSize:2,pageIndex:1}},methods:{handleCurrentChange:function(e){this.pageIndex=e,this.getData()},handleSizeChange:function(e){this.pageSize=e,this.getData()},changeRole:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$axios.post("/user/status",{id:e});case 2:r=a.sent,200===r.code&&(t.$message.success("状态更新成功"),t.getData());case 4:case"end":return a.stop()}}),a)})))()},del:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$axios.post("/user/remove",{id:e});case 2:r=a.sent,200===r.code&&(t.$message.success("删除成功"),t.pageIndex=1,t.getData());case 4:case"end":return a.stop()}}),a)})))()},sreach:function(){this.pageIndex=1,this.getData()},close:function(){this.$refs.formRef.resetFields(),this.pageIndex=1,this.getData()},add:function(){this.$refs.addupdata.dialogFormVisible=!0},updata:function(e){var t=this;this.$refs.addupdata.dialogFormVisible=!0,this.$nextTick((function(){t.$refs.addupdata.title="修改用户",t.$refs.addupdata.form=JSON.parse(JSON.stringify(e))}))},getData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/user/list",{params:Object(n["a"])(Object(n["a"])({},e.form),{},{page:e.pageIndex,limit:e.pageSize})});case 2:a=t.sent,e.tableData=a.data.items,e.total=a.data.pagination.total;case 5:case"end":return t.stop()}}),t)})))()}},created:function(){this.getData()}},b=f,g=Object(m["a"])(b,r,l,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d20f691.d169a71a.js.map