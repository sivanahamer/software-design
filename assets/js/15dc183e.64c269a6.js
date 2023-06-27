"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6113],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>y});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),p=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=t,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(y,l(l({ref:a},d),{},{components:n})):r.createElement(y,l({ref:a},d))}));function y(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:t,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9346:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),t=(n(7294),n(3905));const o={},l="Patr\xf3n Proxy",i={unversionedId:"patterns/estructurales/Proxy/Readme",id:"patterns/estructurales/Proxy/Readme",title:"Patr\xf3n Proxy",description:"Daniel Lizano Morales C04285",source:"@site/docs/5.patterns/estructurales/Proxy/Readme.md",sourceDirName:"5.patterns/estructurales/Proxy",slug:"/patterns/estructurales/Proxy/",permalink:"/software-design/docs/patterns/estructurales/Proxy/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5.patterns/estructurales/Proxy/Readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Patr\xf3n Flyweight",permalink:"/software-design/docs/patterns/estructurales/Flyweight/"},next:{title:"Bridge",permalink:"/software-design/docs/patterns/estructurales/bridge/"}},s={},p=[{value:"\xbfCu\xe1ndo usar el patr\xf3n Proxy?",id:"cu\xe1ndo-usar-el-patr\xf3n-proxy",level:2},{value:"Analog\xeda de la vida cotidiana",id:"analog\xeda-de-la-vida-cotidiana",level:2},{value:"Estructura de clases del patr\xf3n Proxy",id:"estructura-de-clases-del-patr\xf3n-proxy",level:2},{value:"Ejemplo de implementaci\xf3n del patr\xf3n Proxy en Java",id:"ejemplo-de-implementaci\xf3n-del-patr\xf3n-proxy-en-java",level:2},{value:"Ventajas del patr\xf3n Proxy",id:"ventajas-del-patr\xf3n-proxy",level:3},{value:"Desventajas del patr\xf3n Proxy",id:"desventajas-del-patr\xf3n-proxy",level:3},{value:"Casos de uso del patr\xf3n Proxy",id:"casos-de-uso-del-patr\xf3n-proxy",level:3},{value:"Patrones de dise\xf1o relacionados",id:"patrones-de-dise\xf1o-relacionados",level:2},{value:"El patr\xf3n Decorator",id:"el-patr\xf3n-decorator",level:3},{value:"El patr\xf3n Adapter",id:"el-patr\xf3n-adapter",level:3},{value:"El patr\xf3n Facade",id:"el-patr\xf3n-facade",level:3},{value:"Conclusi\xf3n",id:"conclusi\xf3n",level:2},{value:"Referencias",id:"referencias",level:2}],d={toc:p},c="wrapper";function u(e){let{components:a,...o}=e;return(0,t.kt)(c,(0,r.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"patr\xf3n-proxy"},"Patr\xf3n Proxy"),(0,t.kt)("p",null,"Daniel Lizano Morales C04285"),(0,t.kt)("p",null,"Esteban Casta\xf1eda Blanco C01795"),(0,t.kt)("h1",{id:"qu\xe9-es-el-patr\xf3n-proxy"},"\xbfQu\xe9 es el patr\xf3n proxy?"),(0,t.kt)("p",null,"El patr\xf3n Proxy es un patr\xf3n de dise\xf1o estructural que permite proporcionar un sustituto o placeholder para otro objeto. Este objeto sustituto act\xfaa como intermediario entre el cliente y el objeto real, permitiendo al cliente interactuar con el objeto real a trav\xe9s del proxy."),(0,t.kt)("h2",{id:"cu\xe1ndo-usar-el-patr\xf3n-proxy"},"\xbfCu\xe1ndo usar el patr\xf3n Proxy?"),(0,t.kt)("p",null,"El patr\xf3n Proxy se utiliza en situaciones en las que se necesita un objeto m\xe1s flexible o sofisticado que el objeto original. Este patr\xf3n se utiliza com\xfanmente en aplicaciones web para acelerar la carga de p\xe1ginas web al utilizar un servidor proxy para almacenar en cach\xe9 el contenido."),(0,t.kt)("h2",{id:"analog\xeda-de-la-vida-cotidiana"},"Analog\xeda de la vida cotidiana"),(0,t.kt)("p",null,"Un ejemplo de la vida cotidiana que se asemeja al patr\xf3n Proxy es el uso de un asistente personal. Al igual que un proxy act\xfaa como intermediario entre el cliente y el objeto real, un asistente personal act\xfaa como intermediario entre una persona y sus tareas diarias. Al delegar ciertas tareas a su asistente personal, la persona puede enfocarse en tareas m\xe1s importantes y complejas, de la misma manera en que el cliente puede interactuar con el objeto real a trav\xe9s del proxy sin preocuparse por los detalles de implementaci\xf3n. Adem\xe1s, al igual que un proxy puede proporcionar una capa adicional de seguridad al ocultar el objeto real del cliente, un asistente personal puede proporcionar una capa adicional de privacidad al manejar tareas delicadas y personales en nombre de su cliente."),(0,t.kt)("h2",{id:"estructura-de-clases-del-patr\xf3n-proxy"},"Estructura de clases del patr\xf3n Proxy"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Clases UML, dise\xf1o basado en UML de refactoring guru",src:n(8965).Z,width:"1174",height:"726"})),(0,t.kt)("h2",{id:"ejemplo-de-implementaci\xf3n-del-patr\xf3n-proxy-en-java"},"Ejemplo de implementaci\xf3n del patr\xf3n Proxy en Java"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'public interface Image {\n    void display();\n}\n\npublic class RealImage implements Image {\n    private String fileName;\n\n    public RealImage(String fileName){\n        this.fileName = fileName;\n        loadFromDisk(fileName);\n    }\n\n    @Override\n    public void display() {\n        System.out.println("Displaying " + fileName);\n    }\n\n    private void loadFromDisk(String fileName){\n        System.out.println("Loading " + fileName);\n    }\n}\n\npublic class ProxyImage implements Image{\n    private RealImage realImage;\n    private String fileName;\n\n    public ProxyImage(String fileName){\n        this.fileName = fileName;\n    }\n\n    @Override\n    public void display() {\n        if(realImage == null){\n            realImage = new RealImage(fileName);\n        }\n        realImage.display();\n    }\n}\n\npublic class ProxyPatternDemo {\n    public static void main(String[] args) {\n        Image image = new ProxyImage("test.jpg");\n\n        // La imagen se cargar\xe1 desde el disco\n        image.display();\n        System.out.println("");\n\n        // La imagen no se cargar\xe1 desde el disco\n        image.display();\n    }\n}\n\n')),(0,t.kt)("p",null,"En este ejemplo, la interfaz ",(0,t.kt)("inlineCode",{parentName:"p"},"Image")," y la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"RealImage")," son la implementaci\xf3n real del objeto. La clase ",(0,t.kt)("inlineCode",{parentName:"p"},"ProxyImage")," act\xfaa como intermediario entre el cliente y el objeto real. Cuando se llama al m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"display()")," en ",(0,t.kt)("inlineCode",{parentName:"p"},"ProxyImage"),", comprueba si el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"realImage")," ya ha sido creado. Si no es as\xed, crea un nuevo objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"RealImage")," y llama al m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"display()")," en el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"realImage"),". Si el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"realImage")," ya ha sido creado, llama directamente al m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"display()")," en el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"realImage"),"."),(0,t.kt)("p",null,"Aqu\xed hay un ejemplo de implementaci\xf3n del patr\xf3n Proxy en Python:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'from abc import ABC, abstractmethod\n\nclass Image(ABC):\n    @abstractmethod\n    def display(self):\n        pass\n\nclass RealImage(Image):\n    def __init__(self, filename):\n        self.filename = filename\n        self.load_from_disk()\n\n    def load_from_disk(self):\n        print(f"Loading {self.filename}")\n\n    def display(self):\n        print(f"Displaying {self.filename}")\n\nclass ProxyImage(Image):\n    def __init__(self, filename):\n        self.filename = filename\n        self.real_image = None\n\n    def display(self):\n        if self.real_image == None:\n            self.real_image = RealImage(self.filename)\n        self.real_image.display()\n\nimage = ProxyImage("test.jpg")\n\n# La imagen se cargar\xe1 desde el disco\nimage.display()\nprint("")\n\n# La imagen no se cargar\xe1 desde el disco\nimage.display()\n\n')),(0,t.kt)("p",null,"En este ejemplo, la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"Image")," y la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"RealImage")," son la implementaci\xf3n real del objeto. La clase ",(0,t.kt)("inlineCode",{parentName:"p"},"ProxyImage")," act\xfaa como intermediario entre el cliente y el objeto real. Cuando se llama al m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"display()")," en ",(0,t.kt)("inlineCode",{parentName:"p"},"ProxyImage"),", comprueba si el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"real_image")," ya ha sido creado. Si no es as\xed, crea un nuevo objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"RealImage")," y llama al m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"display()")," en el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"real_image"),". Si el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"real_image")," ya ha sido creado, llama directamente al m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"display()")," en el objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"real_image"),"."),(0,t.kt)("h3",{id:"ventajas-del-patr\xf3n-proxy"},"Ventajas del patr\xf3n Proxy"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Mejora el rendimiento de la aplicaci\xf3n al reducir la cantidad de objetos que se crean."),(0,t.kt)("li",{parentName:"ul"},"Proporciona una capa adicional de seguridad al permitir que el objeto real permanezca oculto del cliente."),(0,t.kt)("li",{parentName:"ul"},"Permite una mayor flexibilidad en la implementaci\xf3n de objetos."),(0,t.kt)("li",{parentName:"ul"},"Puede mejorar la escalabilidad de la aplicaci\xf3n al permitir que los objetos se creen bajo demanda.")),(0,t.kt)("h3",{id:"desventajas-del-patr\xf3n-proxy"},"Desventajas del patr\xf3n Proxy"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Puede aumentar la complejidad del c\xf3digo al requerir la creaci\xf3n de m\xfaltiples clases."),(0,t.kt)("li",{parentName:"ul"},"Puede introducir una sobrecarga innecesaria en la aplicaci\xf3n al requerir que se creen objetos adicionales."),(0,t.kt)("li",{parentName:"ul"},"Puede reducir la legibilidad del c\xf3digo al introducir una capa adicional de abstracci\xf3n.")),(0,t.kt)("h3",{id:"casos-de-uso-del-patr\xf3n-proxy"},"Casos de uso del patr\xf3n Proxy"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Cach\xe9 de objetos"),": como se mencion\xf3 anteriormente, uno de los casos de uso m\xe1s comunes del patr\xf3n Proxy es para cachear objetos en una aplicaci\xf3n web. El proxy act\xfaa como intermediario entre el cliente y el objeto real, lo que permite que los objetos se almacenen en cach\xe9 y se sirvan m\xe1s r\xe1pido en el futuro."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Acceso remoto"),": el patr\xf3n Proxy tambi\xe9n se puede utilizar para permitir el acceso remoto a objetos. Por ejemplo, si necesita acceder a un objeto en una red remota, puede utilizar un proxy para actuar como intermediario entre el cliente y el objeto remoto."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Control de acceso"),": el patr\xf3n Proxy tambi\xe9n se puede utilizar para controlar el acceso a objetos. Por ejemplo, si tiene un objeto que solo debe ser accesible por ciertos usuarios, puede utilizar un proxy para controlar el acceso al objeto."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Sincronizaci\xf3n de objetos"),": el patr\xf3n Proxy tambi\xe9n se puede utilizar para sincronizar objetos. Por ejemplo, si tiene un objeto que debe ser sincronizado en varias instancias de una aplicaci\xf3n, puede utilizar un proxy para garantizar que todas las instancias tengan acceso al objeto actualizado."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Lazy loading"),": el patr\xf3n Proxy tambi\xe9n se puede utilizar para implementar lazy loading. Por ejemplo, si tiene un objeto que es costoso de crear y no se necesita inmediatamente, puede utilizar un proxy para retrasar la creaci\xf3n del objeto hasta que sea necesario.")),(0,t.kt)("h2",{id:"patrones-de-dise\xf1o-relacionados"},"Patrones de dise\xf1o relacionados"),(0,t.kt)("p",null,"El patr\xf3n Proxy guarda similitudes con otros patrones de dise\xf1o estructurales, como los siguientes:"),(0,t.kt)("h3",{id:"el-patr\xf3n-decorator"},"El patr\xf3n Decorator"),(0,t.kt)("p",null,"El patr\xf3n Decorator tambi\xe9n se utiliza para proporcionar una capa adicional de funcionalidad a un objeto existente. Sin embargo, a diferencia del patr\xf3n Proxy, el patr\xf3n Decorator se utiliza para agregar funcionalidad a un objeto sin cambiar su interfaz. El patr\xf3n Decorator se utiliza com\xfanmente en situaciones en las que se necesita agregar funcionalidad a un objeto existente, pero no se desea modificar el objeto original."),(0,t.kt)("h3",{id:"el-patr\xf3n-adapter"},"El patr\xf3n Adapter"),(0,t.kt)("p",null,"El patr\xf3n Adaptater se utiliza para permitir que dos objetos con interfaces incompatibles trabajen juntos. Al igual que el patr\xf3n Proxy, el patr\xf3n Adapter act\xfaa como intermediario entre el cliente y el objeto real. Sin embargo, a diferencia del patr\xf3n Proxy, el patr\xf3n Adapter se utiliza para permitir que dos objetos incompatibles trabajen juntos, en lugar de proporcionar una capa adicional de funcionalidad a un objeto existente."),(0,t.kt)("h3",{id:"el-patr\xf3n-facade"},"El patr\xf3n Facade"),(0,t.kt)("p",null,"El patr\xf3n Facade se utiliza para proporcionar una interfaz simple y unificada a un conjunto complejo de clases. Al igual que el patr\xf3n Proxy, el patr\xf3n Facade act\xfaa como intermediario entre el cliente y el objeto real. Sin embargo, a diferencia del patr\xf3n Proxy, el patr\xf3n Facade se utiliza para proporcionar una interfaz simple y unificada a un conjunto complejo de clases, en lugar de proporcionar una capa adicional de funcionalidad a un objeto existente."),(0,t.kt)("p",null,"Al igual que el patr\xf3n Proxy, estos patrones de dise\xf1o estructurales se utilizan para agregar funcionalidad a un objeto existente o para permitir que dos objetos incompatibles trabajen juntos. Sin embargo, cada patr\xf3n se utiliza en situaciones ligeramente diferentes y tiene sus propias ventajas y desventajas."),(0,t.kt)("h2",{id:"conclusi\xf3n"},"Conclusi\xf3n"),(0,t.kt)("p",null,"El patr\xf3n Proxy es una herramienta poderosa para mejorar el rendimiento y la flexibilidad de las aplicaciones. Al utilizar el patr\xf3n Proxy, se pueden crear objetos m\xe1s sofisticados y flexibles que los objetos originales, lo que permite a los desarrolladores crear aplicaciones m\xe1s eficientes y escalables."),(0,t.kt)("h2",{id:"referencias"},"Referencias"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/proxy#:~:text=Proxy%20is%20a%20structural%20design,through%20to%20the%20original%20object"},"https://refactoring.guru/design-patterns/proxy#:~:text=Proxy%20is%20a%20structural%20design,through%20to%20the%20original%20object"),"."),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://reactiveprogramming.io/blog/es/patrones-de-diseno/proxy"},"https://reactiveprogramming.io/blog/es/patrones-de-diseno/proxy")))}u.isMDXComponent=!0},8965:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/UML-5b80408d63def6d8f65203570e0665b1.png"}}]);