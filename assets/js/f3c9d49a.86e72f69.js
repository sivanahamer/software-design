"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5366],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(b,s(s({ref:a},p),{},{components:t})):r.createElement(b,s({ref:a},p))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5333:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const o={},s="Investigaci\xf3n de Dise\xf1o Abstract Factory",i={unversionedId:"patterns/creacionales/AbstractFactory/README",id:"patterns/creacionales/AbstractFactory/README",title:"Investigaci\xf3n de Dise\xf1o Abstract Factory",description:"Estudiantes:",source:"@site/docs/5.patterns/creacionales/AbstractFactory/README.md",sourceDirName:"5.patterns/creacionales/AbstractFactory",slug:"/patterns/creacionales/AbstractFactory/",permalink:"/software-design/docs/patterns/creacionales/AbstractFactory/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5.patterns/creacionales/AbstractFactory/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/software-design/docs/patterns/creacionales/"},next:{title:"Patr\xf3n Builder",permalink:"/software-design/docs/patterns/creacionales/builder/"}},l={},c=[{value:"Estudiantes:",id:"estudiantes",level:2},{value:"<strong>Concepto</strong>",id:"concepto",level:2},{value:"<strong>Nombres</strong>",id:"nombres",level:2},{value:"<strong>Problema</strong>",id:"problema",level:2},{value:"<strong>Ejemplo</strong>",id:"ejemplo",level:2},{value:"<strong>Relaci\xf3n con otros patrones</strong>",id:"relaci\xf3n-con-otros-patrones",level:2},{value:"<strong>Soluci\xf3n</strong>",id:"soluci\xf3n",level:2},{value:"<strong>Consecuencias</strong>",id:"consecuencias",level:2},{value:"<strong>Objetivos</strong>:",id:"objetivos",level:3},{value:"<strong>Trade-off</strong>:",id:"trade-off",level:3},{value:"<strong>Implementaci\xf3n</strong>",id:"implementaci\xf3n",level:2},{value:"<strong>Trampas, sugerencias o t\xe9cnicas:</strong>",id:"trampas-sugerencias-o-t\xe9cnicas",level:3},{value:"<strong>Ejemplo en c\xf3digo</strong>",id:"ejemplo-en-c\xf3digo",level:2},{value:"<strong>Presentaci\xf3n</strong>",id:"presentaci\xf3n",level:2},{value:"Bibliograf\xeda",id:"bibliograf\xeda",level:2}],p={toc:c},d="wrapper";function u(e){let{components:a,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"investigaci\xf3n-de-dise\xf1o-abstract-factory"},"Investigaci\xf3n de Dise\xf1o Abstract Factory"),(0,n.kt)("h2",{id:"estudiantes"},"Estudiantes:"),(0,n.kt)("p",null,"Fabio Andr\xe9s Sanabria Valer\xedn C07194"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Correo:")," ",(0,n.kt)("a",{parentName:"p",href:"mailto:fasav12@gmail.com"},"fasav12@gmail.com")),(0,n.kt)("p",null,"Esteban Iglesias Vargas C03913"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Correo:")," ",(0,n.kt)("a",{parentName:"p",href:"mailto:Esteban.iglesias@ucr.ac.cr"},"Esteban.iglesias@ucr.ac.cr")),(0,n.kt)("h2",{id:"concepto"},(0,n.kt)("strong",{parentName:"h2"},"Concepto")),(0,n.kt)("p",null,"Abstract Factory es un patr\xf3n de dise\xf1o creacional que proporciona una manera de crear familias de objetos relacionados o dependientes sin especificar las clases concretas, es decir, este patr\xf3n proporciona una forma de encapsular un conjunto de objetos relacionados sin especificar la clase concreta de objetos que se crear\xe1n. ","[1]"),(0,n.kt)("p",null,"Para entender mejor este patr\xf3n puede observar el siguiente diagrama creado por el ingeniero en software y creador de contenido Martin de Betta Tech en donde parece que se bas\xf3 en el diagrama de GOF de Abstract Factory."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Imagen Explicativa del Abstract Factory",src:t(3956).Z,width:"847",height:"432"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Diagrama 1. Diagrama explicativo de Abstract factory creado por BettaTech ","[2]")))),(0,n.kt)("h2",{id:"nombres"},(0,n.kt)("strong",{parentName:"h2"},"Nombres")),(0,n.kt)("p",null,"Abstract Factory, Kit, Kit de objetos, Kit de herramientas o Kit Pattern, este nombre se le atribuye debido a que se utilizan diversas herramientas abstractas para poder crear objetos concretos.","[1]"),(0,n.kt)("h2",{id:"problema"},(0,n.kt)("strong",{parentName:"h2"},"Problema")),(0,n.kt)("p",null,"Existen diversos escenarios y contextos en donde se debe de utilizar este patr\xf3n para conseguir eficiencia, eficacia y mejor\xeda en el dise\xf1o de un sistema, es por eso que es indispensable conocer este patr\xf3n y usarlo cuando:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se necesita crear diferentes tipos de objetos, pero no se conoce con exactitud el tipo del objeto que se desea utilizar hasta llegar al tiempo de ejecuci\xf3n. Esto se puede lograr ya que el patr\xf3n Abstract Factory permite definir una f\xe1brica/interfaz para crear objetos, pero delega la creaci\xf3n de los objetos concretos a las subclases. ","[1]")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se quiere asegurar que los objetos creados sean compatibles entre s\xed, ya que el patr\xf3n permite crear objetos pertenecientes de diferentes familias pero que est\xe1n dise\xf1ados para lograr trabajar juntos y que sean coherentes entre ellos. ","[1]")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se necesita proporcionar una biblioteca de objetos para su uso por otros programas o sistemas y solo desea revelar las interfaces y no sus implementaciones. Esto se debe a que el patr\xf3n Abstract Factory es especialmente \xfatil en la creaci\xf3n de bibliotecas de objetos reutilizables, ya que permite encapsular la l\xf3gica de creaci\xf3n de objetos y proporcionar una interfaz com\xfan para acceder a ellos. ","[1]")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se quiere tener una estructura flexible y extensible para la creaci\xf3n de objetos. El patr\xf3n de Abstract Factory permite agregar f\xe1cilmente nuevas familias de objetos al sistema sin tener que cambiar la estructura existente."))),(0,n.kt)("p",null,"Para poder entender todo lo anterior de manera correcta se proceder\xe1 a dar un ejemplo de cu\xe1ndo y c\xf3mo se puede utilizar este patr\xf3n."),(0,n.kt)("h2",{id:"ejemplo"},(0,n.kt)("strong",{parentName:"h2"},"Ejemplo")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Se requiere crear un nuevo sistema para el manejo de las plataformas universitarias de la UCR (correo institucional y mediaci\xf3n virtual). Cada plataforma tendr\xe1 diferentes tipos de componentes como usuarios, mensajes e iconos representativos, pero se desea que cada uno de esos componentes tengan una estructura similar y coherente entre cada plataforma, adem\xe1s permitir que el programa este modularizado y que permita modificaciones a futuro como agregar una nueva plataforma institucional (como por ejemplo ematricula). Para poder lograr lo anterior, se puede hacer uso del patr\xf3n Abstract Factory para crear familias de objetos relacionados para que estas puedan manejar de manera sencilla y eficaz los distintos componentes mencionados anteriormente.")),(0,n.kt)("p",null,"Para que el ejemplo anterior se pueda entender de una mejor manera, se cre\xf3 un dibujo basado en el diagrama hecho por GOF en el libro Design Patterns sobre Abstract Factory:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagrama del ejemplo",src:t(7147).Z,width:"857",height:"606"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Diagrama 2. Diagrama macro del ejemplo anterior basado en diagrama de GOF")))),(0,n.kt)("h2",{id:"relaci\xf3n-con-otros-patrones"},(0,n.kt)("strong",{parentName:"h2"},"Relaci\xf3n con otros patrones")),(0,n.kt)("p",null,"El patr\xf3n Abstract Factory es una extensi\xf3n del patr\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Factory"),", ambos son muy parecidos y normalmente las personas los tienden a confundir ya que hacen funciones similares. La diferencia principal entre estos 2 es que el patr\xf3n Factory se centra en la encapsulaci\xf3n y creaci\xf3n de un objeto en espec\xedfico, mientras que el patr\xf3n Abstract Factory se encarga de crear y encapsular familias de objetos relacionados o dependientes. Otros patrones que est\xe1n relacionados con el patr\xf3n Abstract Factory son ",(0,n.kt)("strong",{parentName:"p"},"el Singleton")," y ",(0,n.kt)("strong",{parentName:"p"},"el Prototype"),".","[1]"),(0,n.kt)("h2",{id:"soluci\xf3n"},(0,n.kt)("strong",{parentName:"h2"},"Soluci\xf3n")),(0,n.kt)("p",null,"El cliente utiliza las f\xe1bricas abstractas para crear los objetos concretos, aunque no conoce las clases concretas que se utilizan, tambi\xe9n la f\xe1brica abstracta utiliza las clases concretas para crear objetos concretos, aunque no conoce c\xf3mo se crean:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Abstract Factory")," : Declara una interfaz en donde se crean los objetos abstractos relacionados, no tienen clase concreta."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Relaci\xf3n: Es usado e implementado por la Concrete Factory y define los m\xe9todos de los productos abstractos.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Concrete Factory")," : Implementa la interfaz (Abstract Factory) en donde se crean los objetos concretos relacionados basados en los objetos abstractos del Abstract Factory. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Relaci\xf3n: Implementa o especifica los objetos y m\xe9todos abstractos creados por ",(0,n.kt)("strong",{parentName:"li"},"Abstract Factory"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Producto Abstracto")," : Declara una interfaz para un tipo de objeto abstracto que son creados por la Abstract Factory."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Relaci\xf3n: Es usado por el Producto Concreto y define los m\xe9todos que tiene que implementar.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Producto Concreto")," : Implementa la interfaz (Producto Abstracto) en donde se crean los objetos concretos para que sea creado por la f\xe1brica (de objetos relacionados) correspondiente."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Relaci\xf3n: Crea objetos concretos y es usado por la f\xe1brica correspondiente al objeto relacionado.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cliente")," : Usuario que usa solo las interfaces declaradas por las clases F\xe1brica Abstracta y Producto Abstracto."),(0,n.kt)("h2",{id:"consecuencias"},(0,n.kt)("strong",{parentName:"h2"},"Consecuencias")),(0,n.kt)("p",null,"Mediante la implementaci\xf3n de este patr\xf3n tenemos diferentes ventajas que logramos obtener y desventajas que tenemos que \u201cpagar\u201d por hacer uso del mismo, entre las que tendremos los objetivos logrados al realizar una implementaci\xf3n y los ",(0,n.kt)("strong",{parentName:"p"},"trade-off"),":"),(0,n.kt)("h3",{id:"objetivos"},(0,n.kt)("strong",{parentName:"h3"},"Objetivos"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Crear familias para modularizar su creaci\xf3n y as\xed separar objetos relacionados en una f\xe1brica y los dem\xe1s en otra respectivamente, permitiendo crear diferentes versiones de los objetos.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Permite escalabilidad y reutilizaci\xf3n mediante la creaci\xf3n de nuevas f\xe1bricas sin modificar las existentes."))),(0,n.kt)("h3",{id:"trade-off"},(0,n.kt)("strong",{parentName:"h3"},"Trade-off"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Aumento de la complejidad al aumentar el nivel de abstracci\xf3n, aumenta la complejidad de c\xf3digo y de modificaci\xf3n.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Lograr crear interfaces bien definidas."))),(0,n.kt)("h2",{id:"implementaci\xf3n"},(0,n.kt)("strong",{parentName:"h2"},"Implementaci\xf3n")),(0,n.kt)("p",null,"La idea de la l\xf3gica de la implementaci\xf3n de este patr\xf3n es crear f\xe1bricas (f\xe1brica de familias) de f\xe1bricas (f\xe1brica de objetos), entonces tendremos que tener ciertas notas a tener en cuenta para poder lograr una implementaci\xf3n exitosa."),(0,n.kt)("h3",{id:"trampas-sugerencias-o-t\xe9cnicas"},(0,n.kt)("strong",{parentName:"h3"},"Trampas, sugerencias o t\xe9cnicas:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Mantener modularidad entre familias: no mezclar distintas familias de productos en una misma abstract factory, al mezclarlas perdemos la esencia del patr\xf3n, lo que queremos es dividir la relaci\xf3n entre los productos para que los iguales se encuentren en un mismo lugar. Por lo tanto, la f\xe1brica solo debe crear productos que sean de una misma familia de objetos.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Equilibrio entre las abstracci\xf3n y la simplicidad: no mantener un equilibrio entre la abstracci\xf3n puede llevarnos a problemas de complejidad y entendimiento del c\xf3digo y su funcionamiento, sobre todo si se realizan muchos niveles de abstracci\xf3n, por lo que, har\xeda dif\xedcil su mantenimiento, depuraci\xf3n e implementaci\xf3n de nuevas funcionalidades.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tener bien definidas las interfaces para los productos y las f\xe1bricas: hay que tener en cuenta que las interfaces van a trabajar con productos, por lo que necesitan ser lo suficientemente gen\xe9ricas para poder intercambiarlos entre diferentes de la misma familia. Igualmente pasa con las interfaces de f\xe1brica, pero en un nivel superior, las interfaces tienen que ser capaces de poder intercambiar entre familias y poder mantener su capacidad de crear productos.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Siguiendo los principios ",(0,n.kt)("strong",{parentName:"p"},"SOLID"),", seguir el principio sobre ",(0,n.kt)("em",{parentName:"p"},"\u201csingle responsability\u201d"),": respetar las clases de la f\xe1brica para que solo lleven a cabo una tarea, en caso de ser necesario crear otra clase en la f\xe1brica que la cumpla.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Este patr\xf3n est\xe1 bastante ligado a la herencia, usarla para crear f\xe1bricas y productos concretos y nuevamente, no mezclarlos."))),(0,n.kt)("h2",{id:"ejemplo-en-c\xf3digo"},(0,n.kt)("strong",{parentName:"h2"},"Ejemplo en c\xf3digo")),(0,n.kt)("p",null,"Recuerda el ejemplo sobre mediaci\xf3n virtual que se plante\xf3 anteriormente?, pues se logr\xf3 implementar en C++ utilizando el patr\xf3n de Abstract Factory. "),(0,n.kt)("p",null,"Para poder ver el c\xf3digo en C++ vaya a la carpeta Code y all\xed siga las siguientes indicaciones para compilarlo y ejecutarlo"),(0,n.kt)("p",null,"Si desea ver el c\xf3digo y probarlo tenga en cuenta las siguientes indicaciones:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Utilizar Linux")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Instalar C++ utilizando el comando ",(0,n.kt)("strong",{parentName:"p"},"sudo apt install g++"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Luego poner el comando ",(0,n.kt)("strong",{parentName:"p"},"sudo apt update"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Luego irese a la carpeta con el src y el makefile y hacer poner ",(0,n.kt)("strong",{parentName:"p"},"make")," en la terminal para compilar")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Luego ejecute el c\xf3digo con ./bin/nombre_archivo.exe"))),(0,n.kt)("h2",{id:"presentaci\xf3n"},(0,n.kt)("strong",{parentName:"h2"},"Presentaci\xf3n")),(0,n.kt)("p",null,'Si desea ver la presentacion dir\xedjase a la carpeta "Presentaci\xf3n" y all\xed encontrar\xe1 la presentaci\xf3n utilizada para exponer este tema'),(0,n.kt)("h2",{id:"bibliograf\xeda"},"Bibliograf\xeda"),(0,n.kt)("p",null,"[1]"," Helm, R., Gamma, E., Vlissides, J., & Johnson, R. (2005). Design Patterns. Addison Wesley."),(0,n.kt)("p",null,"[2]"," BettaTech. (2020, 11 de marzo). ABSTRACT FACTORY | PATRONES de DISE\xd1O ","[Video]",". YouTube. ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=CVlpjFJN17U"},"https://www.youtube.com/watch?v=CVlpjFJN17U")))}u.isMDXComponent=!0},7147:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/DiagramaAbstractEjemplo-b391652db6d00ae40d1d6483aa86a4ab.png"},3956:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/DiagramaAbstractYoutube-89de1c383d44aa59a8dd4cb7e2940d32.png"}}]);