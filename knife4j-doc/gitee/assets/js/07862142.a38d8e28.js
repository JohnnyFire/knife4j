"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,k=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},61545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"contributing",title:"\u5982\u4f55\u8d21\u732e\u4ee3\u7801",description:"\u5982\u4f55\u8d21\u732e\u4ee3\u7801\u7ed9Knife4j"},u=void 0,p={unversionedId:"community/contributing",id:"community/contributing",title:"\u5982\u4f55\u8d21\u732e\u4ee3\u7801",description:"\u5982\u4f55\u8d21\u732e\u4ee3\u7801\u7ed9Knife4j",source:"@site/docs/community/contributing.mdx",sourceDirName:"community",slug:"/community/contributing",permalink:"/docs/community/contributing",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1677849789,formattedLastUpdatedAt:"2023\u5e743\u67083\u65e5",frontMatter:{id:"contributing",title:"\u5982\u4f55\u8d21\u732e\u4ee3\u7801",description:"\u5982\u4f55\u8d21\u732e\u4ee3\u7801\u7ed9Knife4j"},sidebar:"docs",previous:{title:"\u5982\u4f55\u8d21\u732e\u6587\u6863",permalink:"/docs/community/joinus"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/introduction/"}},c={},m=[{value:"\u793e\u533a\u8d21\u732e",id:"\u793e\u533a\u8d21\u732e",level:2},{value:"\u5f00\u6e90\u8d21\u732e",id:"\u5f00\u6e90\u8d21\u732e",level:2},{value:"Knife4j\u4ed3\u5e93\u7ed3\u6784\u8bf4\u660e",id:"knife4j\u4ed3\u5e93\u7ed3\u6784\u8bf4\u660e",level:3},{value:"\u6307\u5bfc\u65b9\u9488",id:"\u6307\u5bfc\u65b9\u9488",level:3}],s={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0cKnife4j \u7684\u6210\u957f\u79bb\u4e0d\u5f00\u793e\u533a\u8d21\u732e\u8005\u7684\u652f\u6301\u548c\u53c2\u4e0e\u3002\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u5e7f\u5927\u793e\u533a\u7528\u6237\u4e3a Knife4j \u8d21\u732e\u4ee3\u7801\u3001\u6587\u6863\u6216\u6539\u8fdb\u7f51\u7ad9\uff0c\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u613f\u610f\u4e3a\u60a8\u63d0\u4f9b\u5fc5\u8981\u7684\u652f\u6301\u3002"),(0,a.kt)("h2",{id:"\u793e\u533a\u8d21\u732e"},"\u793e\u533a\u8d21\u732e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u70b9\u4eaeStar\uff0c\u7167\u4eaeKnife4j\u5f00\u6e90\u4e4b\u8def!!",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j",target:"_blank",rel:"noopener"},"https://gitee.com/xiaoym/knife4j")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/xiaoymin/knife4j",target:"_blank",rel:"noopener"},"https://github.com/xiaoymin/knife4j")))),(0,a.kt)("li",{parentName:"ul"},"\u53d1\u8868\u4f60\u7684\u770b\u6cd5\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/xiaoymin/knife4j/discussions",target:"_blank",rel:"noopener"},"Knife4j\u8bba\u575b")),(0,a.kt)("li",{parentName:"ul"},"\u8ba4\u9886\u5f00\u53d1\u4efb\u52a1\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/issues",target:"_blank",rel:"noopener"},"Issues")),(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u5584",(0,a.kt)("a",{parentName:"li",href:"joinus",target:null,rel:null},"Knife4j\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f60\u81ea\u5df1\u7684\u535a\u5ba2\u3001\u5fae\u535a\u3001\u5fae\u4fe1\u516c\u4f17\u53f7\u3001vlog \u7b49\u81ea\u5a92\u4f53\u5206\u4eab\u6709\u5173 Knife4j \u7684\u4e00\u5207\u3002\u4e5f\u975e\u5e38\u6b22\u8fce\u5c06\u5b9e\u6218\u5185\u5bb9\u901a\u8fc7PR\u8fdb\u884c\u8d21\u732e\u5408\u5e76\u5728Knife4j\u7684\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u5c55\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u628aKnife4j\u5206\u4eab\u7ed9\u66f4\u591a\u7684\u4eba")),(0,a.kt)("h2",{id:"\u5f00\u6e90\u8d21\u732e"},"\u5f00\u6e90\u8d21\u732e"),(0,a.kt)("h3",{id:"knife4j\u4ed3\u5e93\u7ed3\u6784\u8bf4\u660e"},"Knife4j\u4ed3\u5e93\u7ed3\u6784\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/tree/dev/knife4j-desktop",target:"_blank",rel:"noopener"},"knife4j-desktop"),":Knife4j\u7684\u72ec\u7acb\u4e2d\u95f4\u4ef6\uff0c\u57fa\u4e8eJava\u7f16\u5199\uff0c\u53ef\u4ee5\u72ec\u7acb\u8fd0\u884c\u6e32\u67d3OpenAPI\u89c4\u8303\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/tree/dev/knife4j-doc",target:"_blank",rel:"noopener"},"knife4j-doc"),": \u5b98\u7f51\u6587\u6863\uff0c\u57fa\u4e8e",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/zh-CN/",target:"_blank",rel:"noopener"},"Docusaurus"),"\u8fdb\u884c\u7f16\u5199"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/tree/dev/knife4j-vue",target:"_blank",rel:"noopener"},"knife4j-vue"),": \u524d\u7aef\u6e90\u7801\uff0c\u57fa\u4e8eVue\u6846\u67b6\u7f16\u5199"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/tree/dev/knife4j",target:"_blank",rel:"noopener"},"knife4j"),": Java\u7aef\u4ee3\u7801\uff0c\u5305\u62ec\u6240\u6709\u516c\u5f00\u4f7f\u7528\u7684starter\u7ec4\u4ef6\u5c01\u88c5")),(0,a.kt)("h3",{id:"\u6307\u5bfc\u65b9\u9488"},"\u6307\u5bfc\u65b9\u9488"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u5f00\u59cb\u8fdb\u884c\u529f\u80fd\u6216\u8005\u4fee\u590dBug\u4e4b\u524d\uff0c\u4e8b\u5148\u8bf7\u5728Github\u3001Gitee\u5e73\u53f0\u4e0a\u641c\u7d22\u4e0e\u4e4b\u76f8\u5173\u7684\u529f\u80fd\u662f\u5426\u5df2\u7ecf\u5b9e\u73b0\uff0c\u6216\u7740\u4e5f\u53ef\u4ee5\u901a\u8fc7Github\u3001Gitee\u5e73\u53f0\u7684issue\u4e0e\u6211\u4eec\u53d6\u5f97",(0,a.kt)("a",{parentName:"li",href:"community-get-helps",target:null,rel:null},"\u8054\u7cfb"),"\u3002\u4ee5\u786e\u4fdd\u8be5\u4efb\u52a1\u6ca1\u6709\u5176\u4ed6\u4eba\u5728\u5904\u7406\uff0c\u907f\u514d\u91cd\u590d\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u529f\u80fd\u53ef\u901a\u8fc7Github\u6216\u8005Gitee\u7684",(0,a.kt)("a",{parentName:"li",href:"https://github.com/xiaoymin/swagger-bootstrap-ui/discussions",target:"_blank",rel:"noopener"},"issues"),"\u8fdb\u884c\u6c9f\u901a\u8ba8\u8bba\uff0c\u907f\u514d\u6d6a\u8d39\u5927\u5bb6\u7684\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u91cd\u5927\u529f\u80fd\u66f4\u65b0\uff0c\u5efa\u8bae\u4f60\u5728\u7f16\u7801\u5f00\u53d1\u7684\u540c\u65f6\uff0c\u5c06\u8be5\u529f\u80fd\u7684\u8bbe\u8ba1\u3001\u601d\u60f3\u3001\u5b9e\u73b0\u4ee5\u53ca\u4f7f\u7528\u8bf4\u660e\u901a\u8fc7\u6587\u6863\u8fdb\u884c\u8f93\u51fa\u3002\u6700\u597d\u662f\u5408\u5e76\u5728Knife4j\u7684\u5b98\u65b9\u6587\u6863\u4e0a"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4PR\u65f6\uff0c\u9700\u8981\u5c06PR\u8bf7\u6c42\u63d0\u4ea4\u5230",(0,a.kt)("strong",{parentName:"li"},"dev\u5206\u652f"),"\uff01\uff01\uff01")))}f.isMDXComponent=!0}}]);