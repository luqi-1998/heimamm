(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8f68906"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("d3b7");function n(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,s,"next",e)}function s(e){n(i,o,a,c,s,"throw",e)}c(void 0)}))}}},"525a":function(e,t,r){},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),i=new U(n||[]);return a._invoke=$(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",m="completed",d={};function g(){}function v(){}function y(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(F([])));x&&x!==r&&n.call(x,a)&&(w=x);var k=y.prototype=g.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,a,i,c){var s=u(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var o;function a(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function $(e,t,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return R()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?m:p,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function U(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function F(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){while(++o<e.length)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:t,done:!0}}return v.prototype=k.constructor=y,y.constructor=v,v.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(_.prototype),_.prototype[i]=function(){return this},e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(k),s(k,c,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=F,U.prototype={constructor:U,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9d98":function(e,t,r){"use strict";r("ca1e")},"9ed6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("el-card",[r("h1",[e._v("黑马面面 | 用户登录")]),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"normal"}},[r("el-form-item",{attrs:{prop:"phone"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password","prefix-icon":"el-icon-unlock"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{attrs:{prop:"code"}},[r("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"验证码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),r("img",{attrs:{src:e.imageUrl,alt:""},on:{click:e.changeUrl}})],1),r("el-form-item",{attrs:{prop:"checked"}},[r("el-checkbox",{model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}}),e._v("我已阅读并同意"),r("el-link",{attrs:{type:"primary"}},[e._v("用户协议")]),e._v("和"),r("el-link",{attrs:{type:"primary"}},[e._v("隐藏条款")])],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")])],1)],1)],1),r("register",{ref:"regs"})],1)},o=[],a=(r("96cf"),r("1da1")),i=r("cc33"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"用户注册",visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.formRule}},[r("el-form-item",{attrs:{label:"头像",prop:"avatar","label-width":"70px"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,data:e.uploadObj,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?r("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"昵称",prop:"username","label-width":"70px"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email","label-width":"70px"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"phone","label-width":"70px"}},[r("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{label:"密码",type:"password",prop:"password","label-width":"70px"}},[r("el-input",{model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{attrs:{label:"图形码",prop:"code","label-width":"70px"}},[r("el-input",{staticStyle:{width:"65%"},attrs:{placeholder:"验证码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),r("img",{attrs:{src:e.imageCodeUrl,alt:""},on:{click:e.changeUrl}})],1),r("el-form-item",{attrs:{label:"验证码",prop:"rcode","label-width":"70px"}},[r("el-input",{staticStyle:{width:"65%"},model:{value:e.form.rcode,callback:function(t){e.$set(e.form,"rcode",t)},expression:"form.rcode"}}),r("el-button",{staticStyle:{display:"inlineBlock",width:"35%"},on:{click:e.getcode}},[e._v("获取验证码")])],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("确 定")])],1)],1)},s=[],l={name:"register",data:function(){return{dialogFormVisible:!1,form:{avatar:"",username:"",email:"",phone:"",password:"",code:"",rcode:""},formRule:{avatar:[{required:!0,message:"头像不能为空",trigger:"blur"}],username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],email:[{required:!0,trigger:"blur"},{validator:function(e,t,r){t||r(new Error("邮箱不能为空"));var n=/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;n.test(t)||r(new Error("邮箱不合法")),r()},trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:function(e,t,r){t||r(new Error("手机号不能为空"));var n=/^1(3|4|5|6|7|8|9)\d{9}$/;n.test(t)||r(new Error("手机号不合法")),r()},trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],code:[{required:!0,message:"图形码不能为空",trigger:"blur"}],rcode:[{required:!0,message:"验证码不能为空",trigger:"blur"}]},uploadUrl:"http://192.168.14.73/heimamm/public/uploads",imageUrl:"",uploadObj:{image:""},imageCodeUrl:"http://192.168.14.73/heimamm/public/captcha?type=sendsms"}},watch:{dialogFormVisible:function(e){e||this.$refs.formRef.resetFields()}},methods:{beforeAvatarUpload:function(e){var t="image/jpg"===e.type||"image/jpeg"===e.type||"image/gif"===e.type,r=e.size/1024/1024<5;return t?(r||this.$message.error("上传图片大小不能超过5M"),this.uploadObj.image=e,t&&r):this.$message.error("上传图片格式不正确")},handleAvatarSuccess:function(e,t){200===e.code&&(this.imageUrl="http://192.168.14.73/heimamm/public/"+e.data.file_path,this.form.avatar=e.data.file_path)},changeUrl:function(){this.imageCodeUrl="http://192.168.14.73/heimamm/public/captcha?type=sendsms&time="+(new Date-0)},getcode:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=0,e.$refs.formRef.validateField(["phone","code"],(function(e){e||e||r++})),2!==r){t.next=7;break}return t.next=5,e.$axios.post("/sendsms",{code:e.form.code,phone:e.form.phone});case 5:n=t.sent,console.log(n);case 7:case"end":return t.stop()}}),t)})))()},register:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.formRef.validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("输入有误"));case 2:return t.next=4,e.$axios.post("/register",e.form);case 4:n=t.sent,200===n.code&&(e.$message.success("注册成功"),e.dialogFormVisible=!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()}}},u=l,f=(r("cf19"),r("2877")),p=Object(f["a"])(u,c,s,!1,null,"39f46b46",null),h=p.exports,m={name:"login",data:function(){return{form:{phone:"",password:"",checked:!1,code:""},rules:{phone:[{validator:function(e,t,r){""===t&&r(new Error("用户名不能为空"));var n=/^1(3|4|5|6|7|8|9)\d{9}$/;n.test(t)||r(new Error("手机号不合法")),r()},trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:11,message:"长度在 3 到 11 个字符",trigger:"blur"}],code:[{validator:function(e,t,r){4!==t.length&&r(new Error("验证码长度不正确")),r()},trigger:"blur"}],checked:[{validator:function(e,t,r){t||r(new Error("请同意用户协议")),r()},trigger:"change"}]},imageUrl:"http://192.168.14.73/heimamm/public/captcha?type=login"}},components:{register:h},methods:{changeUrl:function(){this.imageUrl="http://192.168.14.73/heimamm/public/captcha?type=login&time="+(new Date-0)},login:function(){var e=this;this.$refs.form.validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("输入有误"));case 2:return t.next=4,e.$axios.post("/login",e.form);case 4:n=t.sent,200===n.code&&(e.$message.success("登录成功"),e.$refs.form.resetFields(),Object(i["c"])(n.data.token),e.$router.push("/layout"));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},register:function(){this.$refs.regs.dialogFormVisible=!0}}},d=m,g=(r("9d98"),Object(f["a"])(d,n,o,!1,null,"370fdf80",null));t["default"]=g.exports},ca1e:function(e,t,r){},cf19:function(e,t,r){"use strict";r("525a")}}]);
//# sourceMappingURL=chunk-d8f68906.da7bcb05.js.map