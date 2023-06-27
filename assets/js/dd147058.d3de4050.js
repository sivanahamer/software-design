"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6518],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const r={},o="Patr\xf3n Visitor",i={unversionedId:"patterns/comportamiento/Visitor/Readme",id:"patterns/comportamiento/Visitor/Readme",title:"Patr\xf3n Visitor",description:"Presentaci\xf3n PDF: Visitor Pattern",source:"@site/docs/5.patterns/comportamiento/Visitor/Readme.md",sourceDirName:"5.patterns/comportamiento/Visitor",slug:"/patterns/comportamiento/Visitor/",permalink:"/software-design/docs/patterns/comportamiento/Visitor/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5.patterns/comportamiento/Visitor/Readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Strategy",permalink:"/software-design/docs/patterns/comportamiento/Strategy/"},next:{title:"Patr\xf3n Command",permalink:"/software-design/docs/patterns/comportamiento/command/"}},l={},c=[{value:"Problema",id:"problema",level:2},{value:"Soluci\xf3n: Patr\xf3n Visitor",id:"soluci\xf3n-patr\xf3n-visitor",level:2},{value:"Estructura",id:"estructura",level:2},{value:"Estructura del ejemplo",id:"estructura-del-ejemplo",level:2},{value:"Implementaci\xf3n del ejemplo en Java",id:"implementaci\xf3n-del-ejemplo-en-java",level:2},{value:"Importancia del Double Dispatch",id:"importancia-del-double-dispatch",level:2},{value:"Pasos de Implementaci\xf3n",id:"pasos-de-implementaci\xf3n",level:2},{value:"Consecuencias",id:"consecuencias",level:2},{value:"Patrones relacionados",id:"patrones-relacionados",level:2},{value:"Referencias",id:"referencias",level:2},{value:"Integrantes",id:"integrantes",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"patr\xf3n-visitor"},"Patr\xf3n Visitor"),(0,s.kt)("p",null,"Presentaci\xf3n PDF: ",(0,s.kt)("a",{target:"_blank",href:a(1139).Z},"Visitor Pattern")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Title_Card",src:a(8266).Z,width:"1920",height:"1080"})),(0,s.kt)("h2",{id:"problema"},"Problema"),(0,s.kt)("p",null,"Cuando se desea agregar una nueva funcionalidad a una clase ya implementada en un sistema, existe el riesgo de que la integraci\xf3n de los nuevos m\xe9todos comprometa el funcionamiento previo de la clase, debido a errores o fallas en la nueva funci\xf3n. En lugar de modificar directamente el c\xf3digo de la clase, se debe buscar una alternativa que no ponga en riesgo las funcionalidades existentes ni las entorpezca con tareas adicionales que no les corresponden."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Problema",src:a(9410).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Imagen de refactoring.guru (",(0,s.kt)("a",{parentName:"strong",href:"https://refactoring.guru/design-patterns/visitor"},"https://refactoring.guru/design-patterns/visitor"),")")),(0,s.kt)("h2",{id:"soluci\xf3n-patr\xf3n-visitor"},"Soluci\xf3n: Patr\xf3n Visitor"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Solucion",src:a(7936).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Imagen de refactoring.guru (",(0,s.kt)("a",{parentName:"strong",href:"https://refactoring.guru/design-patterns/visitor"},"https://refactoring.guru/design-patterns/visitor"),")")),(0,s.kt)("p",null,'Para resolver este problema, se puede crear una clase separada llamada "Visitor" (Visitante). En esta clase se agrega el m\xe9todo que se desea ejecutar de manera independiente. Adem\xe1s, se le pasa como par\xe1metro una referencia a la instancia de la clase con la que se va a interactuar en la funcionalidad.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Solucion",src:a(2981).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Imagen de refactoring.guru (",(0,s.kt)("a",{parentName:"strong",href:"https://refactoring.guru/design-patterns/visitor"},"https://refactoring.guru/design-patterns/visitor"),")")),(0,s.kt)("p",null,'Adicionalmente, existe la soluci\xf3n mediante la t\xe9cnica del "double dispatch" (doble despacho). Esta consiste en enviar una referencia de la clase "Visitor" a la clase en la que se desea aplicar el nuevo m\xe9todo, y es dentro de esta clase donde se realiza la llamada a la nueva funcionalidad.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Solucion",src:a(7436).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Imagen de refactoring.guru (",(0,s.kt)("a",{parentName:"strong",href:"https://refactoring.guru/design-patterns/visitor"},"https://refactoring.guru/design-patterns/visitor"),")")),(0,s.kt)("p",null,"En resumen, el patr\xf3n Visitor es un patr\xf3n de comportamiento que permite separar los algoritmos de los objetos que los aplican."),(0,s.kt)("h2",{id:"estructura"},"Estructura"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Estructura",src:a(908).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Estructura del patr\xf3n Visitor (Diagrama de refactoring.guru: ",(0,s.kt)("a",{parentName:"strong",href:"https://refactoring.guru/design-patterns/visitor"},"https://refactoring.guru/design-patterns/visitor"),")")),(0,s.kt)("p",null,"   El patr\xf3n Visitor sigue la siguiente estructura:"),(0,s.kt)("p",null,"1.",(0,s.kt)("strong",{parentName:"p"},'Interfaz "Visitor"'),': Es una clase abstracta que define los m\xe9todos que realizar\xe1 la familia de "Concrete Visitors" (Visitantes Concretos).\nDeclara un conjunto de m\xe9todos de visita que pueden tomar como argumento elementos concretos de una estructura de objetos.\nEstos m\xe9todos pueden tener los mismos nombres si el programa est\xe1 escrito en un lenguaje que admite sobrecarga, pero el tipo de sus par\xe1metros debe ser diferente.'),(0,s.kt)("p",null,"2.",(0,s.kt)("strong",{parentName:"p"},"Concrete Visitors"),': Son las clases concretas que implementan los m\xe9todos de la interfaz abstracta "Visitor".\nCada "Concrete Visitor" implementa varias versiones de los mismos comportamientos, adaptados para diferentes clases de elementos concretos.'),(0,s.kt)("p",null,"3.",(0,s.kt)("strong",{parentName:"p"},'Interfaz "Element"'),': Define la estructura de los "Concrete Elements" (Elementos Concretos).\nDeclara un m\xe9todo para "aceptar" visitantes.\nEste m\xe9todo debe tener un par\xe1metro declarado con el tipo de la interfaz "Visitor".'),(0,s.kt)("p",null,"4.",(0,s.kt)("strong",{parentName:"p"},"Concrete Elements"),': Son las clases concretas que implementan la funcionalidad de la interfaz "Element".\nImplementan su propio m\xe9todo de aceptaci\xf3n, redirigiendo la llamada al m\xe9todo adecuado del visitante correspondiente a la clase actual del elemento.\nIncluso si una clase base de elemento implementa el m\xe9todo de aceptaci\xf3n, todas las subclases deben anular este m\xe9todo en sus propias clases y llamar al m\xe9todo apropiado en el objeto visitante.'),(0,s.kt)("h2",{id:"estructura-del-ejemplo"},"Estructura del ejemplo"),(0,s.kt)("p",null,"Como ejemplo utilizamos el sistemas de becas de la Universidad de Costa Rica. Los ",(0,s.kt)("strong",{parentName:"p"},"Elementos")," de la estructura Visitor son conformados por los niveles de beca; mientras que los ",(0,s.kt)("strong",{parentName:"p"},"Visitantes")," son los diferentes beneficios que se pueden aplicar dependiendo del nivel de beca: alimentaci\xf3n, transporte, etc..."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Visitor_example_structure",src:a(7338).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Estructura del ejemplo de patr\xf3n Visitor")),(0,s.kt)("h2",{id:"implementaci\xf3n-del-ejemplo-en-java"},"Implementaci\xf3n del ejemplo en Java"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(719).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Interfaz Elements, se define un m\xe9todo accept que recibe un visitante.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(4149).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Concrete Elements, la instancia de la clase se pasa a s\xed misma como par\xe1metro en el llamado del m\xe9todo visit.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(7034).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Interfaz Visitor, se implementa el m\xe9todo visit por cada elemento existente.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(9531).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Concrete Visitors, el comportamiento depender\xe1 del tipo de beca (instancia) que se reciba como par\xe1metro.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(6350).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Cliente")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(7177).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Ejemplo de iteraci\xf3n, se trabaja con todas las posibles combinaciones de visitantes y elementos")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(9078).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Resultado")),(0,s.kt)("h2",{id:"importancia-del-double-dispatch"},"Importancia del Double Dispatch"),(0,s.kt)("p",null,"La t\xe9cnica del Double Dispatch (o Doble Despacho) permite determinar el m\xe9todo a utilizar dependiendo de los objetos involucrados, estos pueden ser dos o m\xe1s. Con el patr\xf3n visitor, el primer despacho es el llamado al m\xe9todo ",(0,s.kt)("strong",{parentName:"p"},"accept")," de los ",(0,s.kt)("strong",{parentName:"p"},"elementos")," y el segundo despacho corresponde el m\xe9todo ",(0,s.kt)("strong",{parentName:"p"},"visit")," de los ",(0,s.kt)("strong",{parentName:"p"},"visitantes"),". Si deseamos omitir la primer parte del despacho, la implementaci\xf3n del patr\xf3n fallar\xe1.  La implementaci\xf3n del m\xe9todo ",(0,s.kt)("strong",{parentName:"p"},"accept")," dentro de las instancias de los ",(0,s.kt)("strong",{parentName:"p"},"elementos")," le da esta certeza al compilador del tipo de instancia desde donde se est\xe1 llamando el m\xe9todo; esto a su vez permite el llamado del m\xe9todo ",(0,s.kt)("strong",{parentName:"p"},"visit")," correcto, puesto que la instancia del ",(0,s.kt)("strong",{parentName:"p"},"elementos")," se pasa a s\xed misma como par\xe1metro. Recordamos que el m\xe9todo ",(0,s.kt)("strong",{parentName:"p"},"visit")," dentro de ",(0,s.kt)("strong",{parentName:"p"},"visitantes"),", recibe instancias espec\xedficas de ",(0,s.kt)("strong",{parentName:"p"},"elementos"),", haciendo uso de overloading, el comportamiento de los m\xe9todos variar\xe1 dependiendo de la firma de este. Si nos brincamos el primer despacho, el compilador no sabr\xe1 exactamente con qu\xe9 tipo de instancia de los elementos se est\xe1 lidiando, haciendo imposible saber cu\xe1l implementaci\xf3n del m\xe9todo ",(0,s.kt)("strong",{parentName:"p"},"visit")," utilizar."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(353).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Ejemplo de omisi\xf3n del primer despacho")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(2017).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("img",{alt:"example",src:a(9782).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},'El compilador nos pedir\xe1 implementar un m\xe9todo "visit" que reciba una clase base como par\xe1metro')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example",src:a(9071).Z,width:"1920",height:"1080"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Resultado (err\xf3neo) de omitir el primer despacho, puesto que no se sabe con certeza la instancia del elemento, se utilizar\xe1 el m\xe9todo visit que recibe la clase base")),(0,s.kt)("h2",{id:"pasos-de-implementaci\xf3n"},"Pasos de Implementaci\xf3n"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Declarar la interfaz del visitante con un conjunto de m\xe9todos "visit" que reciba un elemento como par\xe1metro, esto por cada clase de elemento concreto existente.'),(0,s.kt)("li",{parentName:"ul"},'Declarar la interfaz del elemento. se define un m\xe9todo "accept" que reciba un objeto de tipo "visitante".'),(0,s.kt)("li",{parentName:"ul"},"Implementar los m\xe9todos de aceptaci\xf3n en todas las clases de elementos concretos. Estos m\xe9todos redirigen la llamada a un m\xe9todo de visita en el objeto visitante entrante que coincida con la clase del elemento actual. La instancia del elemento se pasa a si misma como par\xe1metro."),(0,s.kt)("li",{parentName:"ul"},'El cliente debe crea objetos visitantes, estos son utilizados en el llamado del m\xe9todo "accept" de cada elemento.')),(0,s.kt)("h2",{id:"consecuencias"},"Consecuencias"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"example_context",src:a(9711).Z,width:"1920",height:"1080"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Single Responsibility"),": El patr\xf3n visitor permite separar de clases modelo comportamientos que si bien es cierto las involucra, no deber\xedan estar implementados en ellas si se quiere seguir el principio de Single Responsibility."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Open/Close"),": Una vez que se estableci\xf3 en la interfaz de los elementos un m\xe9todo que recibe un visitante como par\xe1metro, se pueden implementar diferentes visitantes con diferentes comportamientos que podr\xe1n interactuar con los elementos; esto sin necesidad de hacer cambio en dichos elementos. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Mantenimiento de visitantes"),": El uso del patr\xf3n implica realizar una actualizaci\xf3n de todos los visitantes por cada nuevo elemento que se agregue a la soluci\xf3n; esto puede significar un trabajo considerable."),(0,s.kt)("h2",{id:"patrones-relacionados"},"Patrones relacionados"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Composite"),(0,s.kt)("li",{parentName:"ul"},"Command "),(0,s.kt)("li",{parentName:"ul"},"Iterator")),(0,s.kt)("h2",{id:"referencias"},"Referencias"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Geekific. (2021, October 23). The Visitor Pattern Explained and Implemented in Java | Behavioral Design Patterns | Geekific ","[Video]",". YouTube. ",(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=UQP5XqMqtqQ"},"https://www.youtube.com/watch?v=UQP5XqMqtqQ")),(0,s.kt)("li",{parentName:"ul"},"Ryan Schachte. (2019, January 20). Understanding The Visitor Design Pattern ","[Video]",". YouTube. ",(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=TeZqKnC2gvA"},"https://www.youtube.com/watch?v=TeZqKnC2gvA")),(0,s.kt)("li",{parentName:"ul"},"Refactoring.Guru. (2023b). Visitor. Refactoring.Guru. ",(0,s.kt)("a",{parentName:"li",href:"https://refactoring.guru/design-patterns/visitor"},"https://refactoring.guru/design-patterns/visitor"))),(0,s.kt)("h2",{id:"integrantes"},"Integrantes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Luis Diego Barrantes B70994"),(0,s.kt)("li",{parentName:"ul"},"Francisco Mora D\xedaz C05118")))}m.isMDXComponent=!0},1139:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Visitor-4b9a4748b08875669a66baffe7634a0b.pdf"},8266:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-f0e95ec4485b3f7efc82e98655e0bc17.png"},7338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-dd21771ee57f775cb53952199f608de4.png"},719:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/13-0504fdb79b57e17c11a2642208628282.png"},4149:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/14-fbafec5249802f7fddd695519d698948.png"},7034:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/16-d3766b63ff766a69dd0ad8268112b804.png"},9531:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/17-b02135c43783f699cfcd988a0dea2bcd.png"},6350:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/19-3deca0467fa8352094c250bc655c9978.png"},7177:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20-83be0572051e9661e1fcdc9fb33fca6e.png"},9078:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/21-aa795266a09c5232d22a243666b72cac.png"},353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/24-e88e9f8e48c7e88ec6b851f6c2e2a0a8.png"},2017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/25-d85b2bd3c9bbed9de5e8e24a28753ab1.png"},9782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/26-d1986d46f903c5aa529a19fb74731616.png"},9071:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/27-b2ce314c88af617bd20cb30c75c44775.png"},9711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/28-3a8e3f53a0ab68361662cb81647e7a84.png"},908:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/estructura-c5f8c7819adbbf3d561c523613ccc97f.png"},9410:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/problema-84c6a48bfcef92dd9fae21ed5c579292.png"},7936:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/solucion_1-58f380000b2e28ce22543c29fb5485d3.png"},2981:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/solucion_2-7c57957b4e8e945194772fba7ec766d1.png"},7436:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/solucion_3-76434a65dfd0bf76e31cf839ea5e40d5.png"}}]);