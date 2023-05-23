"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={},i="Implementaci\xf3n",o={unversionedId:"patterns/estructurales/bridge/content/Implementacion",id:"patterns/estructurales/bridge/content/Implementacion",title:"Implementaci\xf3n",description:"Para implementar el patr\xf3n Bridge debemos tener en cuenta las siguientes sugerencias y t\xe9cnicas.",source:"@site/docs/5.patterns/estructurales/bridge/content/Implementacion.md",sourceDirName:"5.patterns/estructurales/bridge/content",slug:"/patterns/estructurales/bridge/content/Implementacion",permalink:"/software-design/docs/patterns/estructurales/bridge/content/Implementacion",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5.patterns/estructurales/bridge/content/Implementacion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Estructura B\xe1sica",permalink:"/software-design/docs/patterns/estructurales/bridge/content/Estructura"},next:{title:"Patrones Relacionados",permalink:"/software-design/docs/patterns/estructurales/bridge/content/Patrones_Relacionados"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"implementaci\xf3n"},"Implementaci\xf3n"),(0,a.kt)("p",null,"Para implementar el patr\xf3n Bridge debemos tener en cuenta las siguientes sugerencias y t\xe9cnicas."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identificar las diferentes dimensiones independientes en nuestra clase por anticipado, esto nos permite desarrollar partes de una aplicaci\xf3n de forma independientes entre s\xed. "),(0,a.kt)("li",{parentName:"ul"},"Determinar las operaciones que va a necesitar el cliente y definirlas en la interfaz Abstraction."),(0,a.kt)("li",{parentName:"ul"},"Establecer las operaciones que estar\xe1n disponibles para todas las plataformas y declarar las que necesitan la abstracci\xf3n en la interfaz Implementor."),(0,a.kt)("li",{parentName:"ul"},"Crear las clases ConcreteImplementor asegur\xe1ndonos de seguir la interfaz del Implementor."),(0,a.kt)("li",{parentName:"ul"},"Dentro de la clase Abstraction agregar un campo que referencia al Implementor, esto va a generar que la clase Abstraction delegue la mayor parte del trabajo al Implementor."),(0,a.kt)("li",{parentName:"ul"},"En el caso de que se tengan muchas variantes de l\xf3gica de alto nivel, se deben crear las clases RefinedAbstraction para cada variante extendiendo la clase base Abstraction.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/software-design/docs/patterns/estructurales/bridge/"},"Regresar al Readme")))}m.isMDXComponent=!0}}]);