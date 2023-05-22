"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Patr\xf3n Bridge",s={unversionedId:"patterns/estructurales/bridge/content/Definicion_Patron_Bridge",id:"patterns/estructurales/bridge/content/Definicion_Patron_Bridge",title:"Patr\xf3n Bridge",description:"Tambi\xe9n conocido como Handle/Body.",source:"@site/docs/5.patterns/estructurales/bridge/content/Definicion_Patron_Bridge.md",sourceDirName:"5.patterns/estructurales/bridge/content",slug:"/patterns/estructurales/bridge/content/Definicion_Patron_Bridge",permalink:"/software-design/docs/patterns/estructurales/bridge/content/Definicion_Patron_Bridge",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5.patterns/estructurales/bridge/content/Definicion_Patron_Bridge.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Consecuencias",permalink:"/software-design/docs/patterns/estructurales/bridge/content/Consecuencias"},next:{title:"Estructura B\xe1sica",permalink:"/software-design/docs/patterns/estructurales/bridge/content/Estructura"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"patr\xf3n-bridge"},"Patr\xf3n Bridge"),(0,a.kt)("p",null,"Tambi\xe9n conocido como ",(0,a.kt)("strong",{parentName:"p"},"Handle/Body"),"."),(0,a.kt)("p",null,"Formalmente se define como un patr\xf3n de dise\xf1o estructural que proporciona un desacoplamiento de una abstracci\xf3n de su implementaci\xf3n para permitir que ambas puedan desarrollarse y modificarse de forma independiente. "),(0,a.kt)("p",null,"(Gamma, E., 1994, p.151)."),(0,a.kt)("p",null,"Una abstracci\xf3n puede tener una de varias implementaciones posibles, por lo que normalmente se recurre a la herencia para este fin. Una clase abstracta define la interfaz de la abstracci\xf3n y las subclases concretas la implementan de diferentes maneras. Sin embargo, este enfoque no es lo suficientemente flexible, dado que la herencia relaciona una implementaci\xf3n a la abstracci\xf3n de forma permanente, lo cual provoca problemas al desear modificar, ampliar y reutilizar abstracciones e implementaciones de forma independiente, de modo que se genera un alto acoplamiento entre estos elementos. "),(0,a.kt)("p",null,"(Gamma, E., 1994, p.151)"),(0,a.kt)("p",null,"Por lo que, el patr\xf3n Bridge es implementado cuando dos elementos de software se encuentran inherentemente relacionados, no obstante, debido a los requerimientos del sistema es necesario que al menos uno de ellos sufra alg\xfan cambio a lo largo del ciclo de vida del sistema."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/software-design/docs/patterns/estructurales/bridge/"},"Regresar al Readme")))}p.isMDXComponent=!0}}]);