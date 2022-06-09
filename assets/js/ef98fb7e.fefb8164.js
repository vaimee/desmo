"use strict";(self.webpackChunkdesmo_docusaurus=self.webpackChunkdesmo_docusaurus||[]).push([[718],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||A[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5072:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return A}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},p=void 0,s={unversionedId:"desmo-dapp/DApp",id:"desmo-dapp/DApp",title:"DApp",description:"DESMO-LD",source:"@site/docs/desmo-dapp/DApp.md",sourceDirName:"desmo-dapp",slug:"/desmo-dapp/DApp",permalink:"/docs/desmo-dapp/DApp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/desmo-dapp/DApp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Oracle DApp",permalink:"/docs/category/oracle-dapp"},next:{title:"WAM",permalink:"/docs/desmo-dapp/WAM"}},c={},A=[],d={toc:A};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DESMO-LD",src:n(1011).Z,width:"194",height:"56"})),(0,o.kt)("h1",{id:"desmo-ld-oracle-dapp"},"DESMO-LD Oracle DApp"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Overview")," "),(0,o.kt)("p",null,"Desmo-LD will leverage on iExec distributed cloud computing features to deploy its\noff-chain Oracle components. The Oracle DApp is an IExec decentralized application\nwritten in node-js (Typescript) which acts as the backend of Desmo-LD iExecDOracle. In\nparticular, it is in charge of parsing and translating the on-chain oracle requests,\ncollecting the results from the selected TDDs, reaching a consensus on the Web\nThing response, and returning the response. Thanks to iExec secure environment\nfacilities, enabled Web Things can be operated within a secure enclave where\ncredentials can be shared without any risk of information leaking."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"System Architecture")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:n(2778).Z,width:"2534",height:"1160"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"FlowChart",src:n(9045).Z,width:"2372",height:"2028"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://miro.com/app/board/uXjVODIdhHI=/?invite_link_id=916009864260"},"FlowChart link")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Github Repository"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vaimee/desmo-dapp"},"Desmo-DApp")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Contents")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/desmo-dapp/WAM"},"WAM for TDs example management")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/desmo-dapp/LinksmartDirectory"},"Linksmart Directory for Directories example")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/desmo-dapp/docs/IexecDAPP"},"DApp"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/desmo-dapp/docs/algorithm"},"Consensus algorithm for TDs result")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/desmo-dapp/docs/encoding"},"Econding result")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/desmo-dapp/docs/uml"},"UML"))))),(0,o.kt)("h1",{id:"local-test"},"LOCAL TEST"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SETUP")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"WAM",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ./example-tds")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm install")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm start")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ..")),(0,o.kt)("li",{parentName:"ol"},"Directory",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ./linksmart-directory")," "),(0,o.kt)("li",{parentName:"ol"},"Download and install GO ",(0,o.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"go.dev")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"./downloadRepo.sh")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ./directoryManager")," "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm start")," "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ../../")),(0,o.kt)("li",{parentName:"ol"},"DApp",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ./DApp")," "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm install -g ts-node typescript '@types/node'"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RUN TEST")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"WAM",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ./example-tds")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm start")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ..")),(0,o.kt)("li",{parentName:"ol"},"Directory",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ./linksmart-directory")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"./buildAndRunMultiple.sh")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"./setupMultiple.sh")," "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ../../")),(0,o.kt)("li",{parentName:"ol"},"DApp",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ./DApp")," "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ts-node tests/runTests.ts usecase"))))))}m.isMDXComponent=!0},9045:function(e,t,n){t.Z=n.p+"assets/images/dapp_FlowChart-6a22ab80e58bb81366b360c25e14662b.jpg"},2778:function(e,t,n){t.Z=n.p+"assets/images/dapp_schema-9483e5540a97fba38ddc7990463b3c9a.jpg"},1011:function(e,t){t.Z="data:image/png;base64,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"}}]);