"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[920],{2027:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var r=a(7294),n=a(2263),l=a(5924),s=a(5742),c=a(9960),o=a(5999);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function h(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),i}}),[e])}function p(){const e=h();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}var d=a(6010),g=a(6775),f=a(412);const y=function(){const e=(0,g.k6)(),t=(0,g.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),r=f.Z.canUseDOM?new URLSearchParams(t.search):null,l=(null==r?void 0:r.get("q"))||"",s=(null==r?void 0:r.get("ctx"))||"",c=(null==r?void 0:r.get("version"))||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set("q",e):a.delete("q"),a};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set("ctx",a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return a+"search?"+t.toString()}}};var E=a(22),S=a(8202),v=a(2539),w=a(726),x=a(1073),C=a(311),_=a(3926),I=a(1029);const P="searchContextInput_mXoe",b="searchQueryInput_CFBF",F="searchResultItem_U687",R="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr",Z="searchQueryColumn_q7nx",N="searchContextColumn_oWAF";function q(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=p(),{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:u,updateSearchContext:m}=y(),[i,h]=(0,r.useState)(a),[g,f]=(0,r.useState)(),[v,w]=(0,r.useState)(),x=""+e+c,_=(0,r.useMemo)((()=>i?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:i}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[i]);(0,r.useEffect)((()=>{u(i),g&&(i?g(i,(e=>{w(e)})):w(void 0))}),[i,g]);const F=(0,r.useCallback)((e=>{h(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==i&&h(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,E.w)(x,l);f((()=>(0,S.v)(e,t,100)))}()}),[l,x]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,_)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,_),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,d.Z)("col",{[Z]:Array.isArray(I.Kc),"col--9":Array.isArray(I.Kc),"col--12":!Array.isArray(I.Kc)})},r.createElement("input",{type:"search",name:"q",className:b,"aria-label":"Search",onChange:F,value:i,autoComplete:"off",autoFocus:!0})),Array.isArray(I.Kc)?r.createElement("div",{className:(0,d.Z)("col","col--3","padding-left--none",N)},r.createElement("select",{name:"search-context",className:P,id:"context-selector",value:l,onChange:e=>m(e.target.value)},r.createElement("option",{value:""},I.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),I.Kc.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!g&&i&&r.createElement("div",null,r.createElement(C.Z,null)),v&&(v.length>0?r.createElement("p",null,t(v.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:v.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,v&&v.map((e=>r.createElement(A,{key:e.document.i,searchResult:e}))))))}function A(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),i=u?t.s:t.t;o||m.push(n.t);let h="";if(I.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);h="?"+e.toString()}return r.createElement("article",{className:F},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+h+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,v.C)(i,l):(0,w.o)(i,(0,x.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:R},(0,_.e)(m)),u&&r.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,w.o)(t.t,(0,x.m)(s,"t"),l,100)}}))}const T=function(){return r.createElement(l.Z,null,r.createElement(q,null))}}}]);