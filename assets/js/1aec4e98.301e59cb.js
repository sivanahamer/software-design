"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5653:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={},o="Patr\xf3n Flyweight",i={unversionedId:"patterns/estructurales/Flyweight/Readme",id:"patterns/estructurales/Flyweight/Readme",title:"Patr\xf3n Flyweight",description:"* Luis Diego Barrantes B70994",source:"@site/docs/5.patterns/estructurales/Flyweight/Readme.md",sourceDirName:"5.patterns/estructurales/Flyweight",slug:"/patterns/estructurales/Flyweight/",permalink:"/software-design/docs/patterns/estructurales/Flyweight/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5.patterns/estructurales/Flyweight/Readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Facade",permalink:"/software-design/docs/patterns/estructurales/Facade/"},next:{title:"Patr\xf3n Proxy",permalink:"/software-design/docs/patterns/estructurales/Proxy/"}},s={},c=[{value:"Problema",id:"problema",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2},{value:"Estados",id:"estados",level:2},{value:"Flyweight",id:"flyweight",level:2},{value:"Estructura",id:"estructura",level:2},{value:"Estructura del ejemplo",id:"estructura-del-ejemplo",level:2},{value:"Implementaci\xf3n del ejemplo en Java",id:"implementaci\xf3n-del-ejemplo-en-java",level:2},{value:"Pasos de Implementaci\xf3n",id:"pasos-de-implementaci\xf3n",level:2},{value:"Flyweight en la UCR",id:"flyweight-en-la-ucr",level:2},{value:"Consecuencias",id:"consecuencias",level:2},{value:"Patrones relacionados",id:"patrones-relacionados",level:2},{value:"Referencias",id:"referencias",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"patr\xf3n-flyweight"},"Patr\xf3n Flyweight"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Luis Diego Barrantes B70994"),(0,n.kt)("li",{parentName:"ul"},"Francisco Mora D\xedaz C05118")),(0,n.kt)("p",null,"Presentaci\xf3n PDF: ",(0,n.kt)("a",{target:"_blank",href:a(5892).Z},"Flyweight Pattern")),(0,n.kt)("h2",{id:"problema"},"Problema"),(0,n.kt)("p",null,"En la creaci\xf3n de aplicaciones de software, el manejo eficiente de memoria es una de las principales metas, lograrla se vuelve un desaf\xedo cuando se lidia con un gran n\xfamero de objetos. Sin una estrategia efectiva que contemple los atributos contextuales de cada objeto, la creaci\xf3n y manipulaci\xf3n de estos puede conducir a saturaci\xf3n de memoria, un rendimiento lento y ca\xeddas de sistema."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Smooth",src:a(8994).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Laggy",src:a(6194).Z,width:"1920",height:"1080"})),(0,n.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,n.kt)("p",null,'El patr\xf3n Flyweight es un patr\xf3n de dise\xf1o que se utiliza para optimizar el uso de memoria en aplicaciones con un gran n\xfamero de objetos similares. Su objetivo principal es reducir la redundancia y minimizar el consumo de memoria almacenando datos compartidos entre m\xfaltiples objetos en un objeto compartido centralizado llamado "flyweight". El patr\xf3n flyweight es un patr\xf3n estructural, lo que significa que busca una forma de restructurar la informaci\xf3n que ya est\xe1 presente en vez de agregar nueva informaci\xf3n. Lo qu\xe9 se hace en Flyweight es buscar los atributos cada familia de objetos y organizarlos en 2 estados.'),(0,n.kt)("h2",{id:"estados"},"Estados"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"States_flyweight",src:a(8444).Z,width:"1920",height:"1080"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Estados en el patr\xf3n Flyweight")),(0,n.kt)("p",null,"El estado intr\xednseco son los atributos comunes qu\xe9 se comparten entre los objetos de una misma familia y el estado extr\xednseco son los atributos que son propios de cada instancia de un objeto ya que dependen de su contexto espec\xedfico."),(0,n.kt)("h2",{id:"flyweight"},"Flyweight"),(0,n.kt)("p",null,"La clase Flyweight es donde se almacena el estado intr\xednseco de una familia de objetos y este es independiente al contexto. Solo es necesario crear una instancia de la clase flyweight por cada familia de objetos qu\xe9 se utilicen los mismos datos intr\xednsecos."),(0,n.kt)("h2",{id:"estructura"},"Estructura"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Flyweight_structure",src:a(8853).Z,width:"2436",height:"1310"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Estructura del patr\xf3n flyweight (Diagrama de refactoring.guru: ",(0,n.kt)("a",{parentName:"strong",href:"https://refactoring.guru/images/patterns/diagrams/flyweight/structure.png?id=c1e7e1748f957a4792822f902bc1d420"},"https://refactoring.guru/images/patterns/diagrams/flyweight/structure.png?id=c1e7e1748f957a4792822f902bc1d420"),")")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Flyweight:")," Contiene estado intr\xednseco que puede ser compartido entre m\xfaltiples objetos. Puede ser utilizado en diferentes contextos.  Usualmente contempla el comportamiento del objeto original (no dividido en estados), este recibe en sus par\xe1metros el estado extr\xednseco.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Contexto:")," Representa el objeto completo al contener el estado intr\xednseco y el objeto flyweight.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"FlyweightFactory:")," Pensado para utilizar por el cliente. Este maneja y administra la reserva de flyweights. Crea nuevos flyweights \xfanicamente cuando no exista uno con los mismos atributos solicitados en reserva.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Client:")," Usa el FlyweightFactory, calcula o almacena los estados extr\xednsecos."))),(0,n.kt)("h2",{id:"estructura-del-ejemplo"},"Estructura del ejemplo"),(0,n.kt)("p",null,"En este ejemplo se descompone el objeto ",(0,n.kt)("strong",{parentName:"p"},"\u201c\xc1rbol\u201d")," en estados intr\xednseco y extr\xednseco."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Flyweight_example_structure",src:a(1867).Z,width:"2432",height:"1308"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Estructura del ejemplo de patr\xf3n Flyweight")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Flyweight (TreeType):")," El estado intr\xednseco est\xe1 compuesto por Nombre, Color y Textura. El m\xe9todo displayTree(X,Y) recibe coordenadas para dibujar el \xe1rbol en el mapa, estas coordenadas son el estado extr\xednseco.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Contexto(Tree):")," El objeto Tree contiene el estado extr\xednseco (coordenadas) y un flyweight; formando as\xed un objeto completo.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"FlyweightFactory(TreeFactory):")," Devuelve y administra objetos flyweight (TreeType).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Client(Forest):")," Almacena objetos completos (Tree). Hace uso del FlyweightFactory."))),(0,n.kt)("h2",{id:"implementaci\xf3n-del-ejemplo-en-java"},"Implementaci\xf3n del ejemplo en Java"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"example_flyweight",src:a(7454).Z,width:"1558",height:"482"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Flyweight")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"example_context",src:a(9858).Z,width:"1178",height:"497"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Context")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"example_factory",src:a(8646).Z,width:"1659",height:"530"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Factory")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"example_client",src:a(2550).Z,width:"1765",height:"681"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Client")),(0,n.kt)("h2",{id:"pasos-de-implementaci\xf3n"},"Pasos de Implementaci\xf3n"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Comprobar el rendimiento:")," Asegurarse que el programa satura la memoria RAM, de lo contrario la implementaci\xf3n del patr\xf3n se considera no adecuada.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Separar objeto en estados:")," Separar el objeto original en estados Intr\xednsecos (compartibles) y extr\xednsecos (\xfanicos y cambiantes).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Crear FlyweightFactory:")," Dise\xf1ar e implementar clase que almacene objetos flyweight \xfanicos.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Crear cliente:")," Dise\xf1ar e implementar clase cliente que utilice el FlyweightFactory. Adicionalmente el cliente se encarga de calcular o administrar los estados extr\xednsecos para uso con el patr\xf3n."))),(0,n.kt)("h2",{id:"flyweight-en-la-ucr"},"Flyweight en la UCR"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"UCR",src:a(34).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,"Flyweight se puede aplicar dentro de la arquitectura de la universidad para aliviar la carga de memoria qu\xe9 se utiliza en mediaci\xf3n virtual a la hora de trabajar con las instancias de los cursos disponibles en la plataforma. Es posible abstraer la informaci\xf3n com\xfan de entre cada curso en un objeto fl\xfdweight y utilizar este para referenciar las instancias reducidas de cada curso. Tambi\xe9n, se puede utilizar para reducir la carga computacional de proyectos de investigaci\xf3n dentro de la universidad."),(0,n.kt)("h2",{id:"consecuencias"},"Consecuencias"),(0,n.kt)("p",null,"Utilizar el patr\xf3n flyweight tiene ciertas ventajas asociadas: ahorro de memoria, mejoras en el rendimiento y la creaci\xf3n de menos objetos a la hora de ejecutar c\xf3digo. Por otro lado, aplicar este patr\xf3n puede traer ciertas desventajas: El c\xf3digo se complica debido a la separaci\xf3n de atributos y el manejo de punteros por las referencias y el intercambio de uso de CPU a cambio de la RAM."),(0,n.kt)("h2",{id:"patrones-relacionados"},"Patrones relacionados"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Factory method "),(0,n.kt)("li",{parentName:"ul"},"Facade "),(0,n.kt)("li",{parentName:"ul"},"Composite")),(0,n.kt)("h2",{id:"referencias"},"Referencias"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Refactoring.Guru. (2023). Flyweight. Refactoring.Guru. ",(0,n.kt)("a",{parentName:"li",href:"https://refactoring.guru/design-patterns/flyweight"},"https://refactoring.guru/design-patterns/flyweight")),(0,n.kt)("li",{parentName:"ul"},"Geekific. (2022, January 22). The Flyweight Pattern Explained and Implemented in Java | Structural Design Patterns | Geekific ","[Video]",". YouTube. ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=qscOsQV-K14"},"https://www.youtube.com/watch?v=qscOsQV-K14"))))}d.isMDXComponent=!0},5892:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/flyweight_pattern-8253ce66c8cb60e9387ebe7fb3fe8220.pdf"},34:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Flyweight_Ucr-eb1330c41f1bf32160f826973c5d8d9c.gif"},1867:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Flyweight_example_structure-bca9bfdaee290cba2ef6eda720e603b6.png"},8853:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Flyweight_structure-3a8539ff122535d0b4a63ff306fda4a8.png"},8444:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/States_flyweight-1576251b357f2c6ed1b2fac21a7249dc.png"},2550:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/example_client-d0b582187934fc708da56a2469398c47.png"},9858:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/example_context-903a7f9725234467934171a70ffaa065.png"},8646:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/example_factory-80d9a3ee49827459403b436f08188c14.png"},7454:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/example_flyweight-a8e3a18e2bab3487766668925c074ac2.png"},6194:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/laggy-87606b167f638eda85492854a004e4db.gif"},8994:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/smooth-e6357e61db49e6c1e4b297f710f5b54f.gif"}}]);