"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,b=p["".concat(d,".").concat(u)]||p[u]||s[u]||i;return n?r.createElement(b,o(o({ref:t},f),{},{components:n})):r.createElement(b,o({ref:t},f))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Embedding gif",sidebar_position:5,slug:"/cf6b6a4b-4759-4354-950a-4ef2bcc7a038"},o=void 0,c={unversionedId:"Examples/Embedding-gif",id:"Examples/Embedding-gif",title:"Embedding gif",description:"If you embed a gif in notion, it should be embedded in Docusaurus",source:"@site/docs/Examples/Embedding-gif.md",sourceDirName:"Examples",slug:"/cf6b6a4b-4759-4354-950a-4ef2bcc7a038",permalink:"/docu-notion-sample-site/fr/cf6b6a4b-4759-4354-950a-4ef2bcc7a038",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Embedding gif",sidebar_position:5,slug:"/cf6b6a4b-4759-4354-950a-4ef2bcc7a038"},sidebar:"defaultSidebar",previous:{title:"Embedding Video",permalink:"/docu-notion-sample-site/fr/6daffeb2-ece8-4d44-976f-351e6b5757bb"},next:{title:"Lists",permalink:"/docu-notion-sample-site/fr/d0335eaa-f3eb-494b-906e-1e85c6e9db2c"}},d={},l=[{value:"Imgur",id:"5c03824defd24c47bcef913e976885d8",level:2},{value:"Giffy,",id:"d9a2e99070374afe95cba3681c8c82e3",level:2}],f={toc:l};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you embed a gif in notion, it should be embedded in Docusaurus"),(0,a.kt)("h2",{id:"5c03824defd24c47bcef913e976885d8"},"Imgur"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3489).Z,width:"413",height:"331"})),(0,a.kt)("h2",{id:"d9a2e99070374afe95cba3681c8c82e3"},"Giffy,"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8505).Z,width:"384",height:"480"})),(0,a.kt)("p",null,"When it detects an embedded gif, docu-notion does the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adds a ",(0,a.kt)("inlineCode",{parentName:"li"},'import GifPlayer from "react-gif-player";')," to the markdown."),(0,a.kt)("li",{parentName:"ul"},"Inserts html like ",(0,a.kt)("inlineCode",{parentName:"li"},'<GifPlayer gif="https://media.giphy.com/media/VhiAuDYHkNPydiNnOs/giphy.gif" />'))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If your site is not based on ",(0,a.kt)("inlineCode",{parentName:"p"},"docu-notion-sample-site"),", you may need to add react-gif-player to your Docusaurus project:\n",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add react-gif-player")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i react-gif-player"))))}s.isMDXComponent=!0},8505:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cf6b6a4b-4759-4354-950a-4ef2bcc7a038.bd015230-7668-43d6-81ea-f9bedb9bf7ed-e83c2bcc8724743c0a1dda066efd30da.gif"},3489:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cf6b6a4b-4759-4354-950a-4ef2bcc7a038.cb7baaf8-5925-4035-ab3f-b79a3ecb62af-ccb843d869c0093acb6913b175b65b40.gif"}}]);