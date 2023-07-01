"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8770],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>f});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?n.createElement(f,s(s({ref:a},d),{},{components:t})):n.createElement(f,s({ref:a},d))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3967:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const r={},s="Patr\xf3n State",i={unversionedId:"patterns/comportamiento/state/README",id:"patterns/comportamiento/state/README",title:"Patr\xf3n State",description:"Nombres",source:"@site/docs/5.patterns/comportamiento/state/README.md",sourceDirName:"5.patterns/comportamiento/state",slug:"/patterns/comportamiento/state/",permalink:"/software-design/docs/patterns/comportamiento/state/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5.patterns/comportamiento/state/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mediator Pattern",permalink:"/software-design/docs/patterns/comportamiento/mediator/"},next:{title:"Template Method",permalink:"/software-design/docs/patterns/comportamiento/template-method/"}},l={},c=[{value:"Nombres",id:"nombres",level:2},{value:"Problema",id:"problema",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2},{value:"Interfaz estado",id:"interfaz-estado",level:3},{value:"Estados concretos",id:"estados-concretos",level:3},{value:"Contexto",id:"contexto",level:3},{value:"Implementaci\xf3n/contexto",id:"implementaci\xf3ncontexto",level:3},{value:"Ejemplo en c\xf3digo",id:"ejemplo-en-c\xf3digo",level:2},{value:"Soluci\xf3n UML de los estados de los cursos en MV",id:"soluci\xf3n-uml-de-los-estados-de-los-cursos-en-mv",level:3},{value:"Soluci\xf3n en python",id:"soluci\xf3n-en-python",level:3},{value:"Consecuencias",id:"consecuencias",level:2},{value:"Positivas",id:"positivas",level:3},{value:"Negativas",id:"negativas",level:3},{value:"Implementaci\xf3n",id:"implementaci\xf3n",level:2},{value:"Relaci\xf3n con otros patrones",id:"relaci\xf3n-con-otros-patrones",level:2}],d={toc:c},u="wrapper";function p(e){let{components:a,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"patr\xf3n-state"},"Patr\xf3n State"),(0,o.kt)("h2",{id:"nombres"},"Nombres"),(0,o.kt)("p",null,"El patr\xf3n de software conocido como ",(0,o.kt)("strong",{parentName:"p"},"State")," tambi\xe9n se conoce como ",(0,o.kt)("strong",{parentName:"p"},"Objeto de Estado")," o ",(0,o.kt)("strong",{parentName:"p"},"M\xe1quina de Estados"),"."),(0,o.kt)("h2",{id:"problema"},"Problema"),(0,o.kt)("p",null,"El patr\xf3n State es \xfatil en escenarios donde un objeto debe cambiar su comportamiento seg\xfan su estado interno. Este patr\xf3n es especialmente \xfatil cuando existen m\xfaltiples estados complejos en los que puede estar un objeto y cuando las transiciones entre estados deben ser gestionadas de manera flexible y extensible."),(0,o.kt)("p",null,"Un ejemplo de uso del patr\xf3n State es en mediaci\xf3n virtual, donde los cursos pueden tener diferentes estados (no matriculado, en curso, terminado) y transiciones (matricular, reprobar, aprobar, retirar matricula, convalidar) como se puede observar en el siguiente diagrama de estados:\n",(0,o.kt)("img",{alt:"Diagrama de estados",src:t(217).Z,width:"1240",height:"984"})),(0,o.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,o.kt)("p",null,'La soluci\xf3n propuesta por el patr\xf3n State consiste en tener una interfaz o clase abstracta llamada "Estado" que define los m\xe9todos que representan las operaciones asociadas a cada estado posible. Cada estado concreto implementa esta interfaz o hereda de la clase abstracta y define su propio comportamiento en respuesta a las operaciones llamadas por el contexto.'),(0,o.kt)("p",null,"El contexto es la clase que contiene el estado actual y mantiene una referencia a un objeto de estado concreto. El contexto delega las operaciones relacionadas con el estado al objeto de estado actual. Esto permite que el comportamiento del objeto var\xede seg\xfan su estado interno."),(0,o.kt)("p",null,"A continuaci\xf3n una plantilla del patr\xf3n State con sus componentes definidos:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Plantilla State Pattern",src:t(4813).Z,width:"540",height:"410"})),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:t(8961).Z},"Plantilla en c\xf3digo")),(0,o.kt)("h3",{id:"interfaz-estado"},"Interfaz estado"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from abc import ABC, abstractmethod\n\n# Clase abstracta para definir la interfaz de los estados\nclass Estado(ABC):\n\n    # init method or constructor\n    def __init__(self, contexto):\n        self._contexto = contexto\n\n    @abstractmethod\n    def accion_x(self):\n        pass\n\n    @abstractmethod\n    def accion_y(self):\n        pass\n")),(0,o.kt)("h3",{id:"estados-concretos"},"Estados concretos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Estado concreto\nclass estado_concreto1(Estado):\n    def accion_x(self):\n        print("Estado concreto 1")\n        self._contexto.cambiar_estado(estado_concreto2(self._contexto))\n\n    def accion_y(self):\n        print("Transici\xf3n incorrecta")\n\n# Estado concreto\nclass estado_concreto2(Estado):\n    def accion_y(self):\n        print("Estado concreto 2")\n        self._contexto.cambiar_estado(estado_concreto1(self._contexto))\n\n    def accion_x(self):\n        print("Transici\xf3n incorrecta")\n')),(0,o.kt)("h3",{id:"contexto"},"Contexto"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Contexto\nclass Contexto:\n    def __init__(self):\n        # Estado inicial\n        self.estado_actual = estado_concreto1(self)\n\n    def cambiar_estado(self,estado):\n        self.estado_actual = estado\n\n    def accion_x(self):\n        self.estado_actual.accion_x()\n\n    def accion_y(self):\n       self.estado_actual.accion_y()\n")),(0,o.kt)("h3",{id:"implementaci\xf3ncontexto"},"Implementaci\xf3n/contexto"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n            \n    contexto = Contexto()\n    contexto.accion_x()\n    contexto.accion_y()\n\n\n    contexto.cambiar_estado(estado_concreto2(contexto))\n')),(0,o.kt)("h2",{id:"ejemplo-en-c\xf3digo"},"Ejemplo en c\xf3digo"),(0,o.kt)("h3",{id:"soluci\xf3n-uml-de-los-estados-de-los-cursos-en-mv"},"Soluci\xf3n UML de los estados de los cursos en MV"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Soluci\xf3n UML de MV",src:t(4193).Z,width:"3339",height:"1145"})),(0,o.kt)("h3",{id:"soluci\xf3n-en-python"},(0,o.kt)("a",{target:"_blank",href:t(132).Z},"Soluci\xf3n en python")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from abc import ABC, abstractmethod\n\n# Clase abstracta para definir la interfaz de los estados\nclass Estado(ABC):\n\n    @property\n    def curso(self):\n        return self._curso\n    @curso.setter\n    def curso(self, curso) -> None:\n        self._curso = curso\n\n    # init method or constructor\n    def __init__(self, curso):\n        self._curso = curso\n\n    @abstractmethod\n    def matricular(self):\n        print("No se puede matricular")\n\n    @abstractmethod\n    def retirar_matricula(self):\n        print("No se puede retirar el curso")\n\n    @abstractmethod\n    def terminar_ciclo(self):\n        print("No se puede terminar el curso")\n\n    @abstractmethod\n    def convalidar(self):\n        print("No se puede convalidar el curso")\n\n    @abstractmethod\n    def reprobar(self):\n        print("No se puede reprobar este curso")\n    \n# Estado no matriculado\nclass no_matriculado(Estado):\n    def matricular(self):\n        self.curso.cambiar_estado(en_curso(self.curso))\n        print(f"Curso matriculado exitosamente. \\nEstado: {self.curso.estado_actual.__class__}")\n        \n    def retirar_matricula(self):\n        super().retirar_matricula()\n\n    def convalidar(self):\n        self.curso.cambiar_estado(terminado(self.curso))\n        print(f"Curso convalidado exitosamente. \\nEstado: {self.curso.estado_actual.__class__}")\n        \n    def reprobar(self):\n        super().reprobar()\n\n    def terminar_ciclo(self):\n        super().terminar_ciclo()\n\n# Estado en curso\nclass en_curso(Estado):\n    def matricular(self):\n        super().matricular()\n\n    def retirar_matricula(self):\n        self.curso.cambiar_estado(no_matriculado(self.curso))\n        print(f"Curso retirado exitosamente. \\nEstado: {self.curso.estado_actual.__class__}")\n\n    def convalidar(self):\n        super().convalidar()\n\n    def reprobar(self):\n        super().reprobar()\n    \n    def terminar_ciclo(self):\n        self.curso.cambiar_estado(terminado(self.curso))\n        print(f"Curso terminado. \\nEstado: {self.curso.estado_actual.__class__}")\n\n# Estado terminado\nclass terminado(Estado):\n    def matricular(self):\n        super().matricular()\n\n    def retirar_matricula(self):\n        super().retirar_matricula()\n\n    def convalidar(self):\n        super().convalidar()\n\n    def reprobar(self):\n        self.curso.cambiar_estado(no_matriculado(self.curso))\n        print(f"Curso reprobado. \\nEstado: {self.curso.estado_actual.__class__}")\n\n    def terminar_ciclo(self):\n        super().terminar_ciclo()\n\n# Contexto\nclass Curso:\n    def __init__(self):\n        # Estado inicial\n        self.estado_actual = no_matriculado(self)\n\n    def cambiar_estado(self,estado):\n        self.estado_actual = estado\n\n    def matricular(self):\n        self.estado_actual.matricular()\n\n    def retirar_matricula(self):\n        self.estado_actual.retirar_matricula()\n\n    def convalidar(self):\n        self.estado_actual.convalidar()\n\n    def reprobar(self):\n        self.estado_actual.reprobar()\n\n    def terminar_ciclo(self):\n        self.estado_actual.terminar_ciclo()\n\ndise\xf1o_de_software = Curso()\nHCI = Curso()\nPI = Curso()\n\ndef inicio_de_lecciones():        \n    print("Matriculo Dise\xf1o de Software:")\n    dise\xf1o_de_software.matricular()\n    print("Matriculo HCI:")\n    HCI.convalidar()\n    print("Matriculo PI:")\n    PI.matricular()\n\ndef fin_de_lecciones():        \n    print("\\nFin de ciclo lectivo")\n    print("Termino Dise\xf1o de Software:")\n    dise\xf1o_de_software.terminar_ciclo()\n    print("Termino HCI:")\n    HCI.terminar_ciclo()\n    print("Termino PI:")\n    PI.terminar_ciclo()\n\nif __name__ == "__main__":\n            \n    inicio_de_lecciones()\n    fin_de_lecciones()\n\n    print("\\nReprob\xe9 Dise\xf1o de Software:")\n    dise\xf1o_de_software.reprobar()\n')),(0,o.kt)("h2",{id:"consecuencias"},"Consecuencias"),(0,o.kt)("p",null,"El patr\xf3n State ayuda a lograr una mayor cohesi\xf3n y flexibilidad en un sistema. Permite que un objeto altere su comportamiento din\xe1micamente seg\xfan su estado interno, sin la necesidad de utilizar condicionales extensos. Esto facilita la adici\xf3n de nuevos estados sin modificar el c\xf3digo existente y mejora la legibilidad y mantenibilidad del c\xf3digo."),(0,o.kt)("p",null,"Sin embargo, aplicar el patr\xf3n State puede aumentar la complejidad al agregar una mayor cantidad de clases al sistema. Adem\xe1s, si existen transiciones complejas entre los estados, puede requerir l\xf3gica adicional para controlar la secuencia de cambio de estado."),(0,o.kt)("h3",{id:"positivas"},"Positivas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single Resposibility Principle"),(0,o.kt)("li",{parentName:"ul"},"Open/Closed Principle (escalabilidad)"),(0,o.kt)("li",{parentName:"ul"},"Chao condiciones")),(0,o.kt)("h3",{id:"negativas"},"Negativas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Overkill")),(0,o.kt)("h2",{id:"implementaci\xf3n"},"Implementaci\xf3n"),(0,o.kt)("p",null,"Al implementar el patr\xf3n State, es importante considerar las siguientes sugerencias:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Definir una interfaz o clase abstracta para representar el estado y definir los m\xe9todos comunes que se utilizar\xe1n en todos los estados."),(0,o.kt)("li",{parentName:"ol"},"Implementar una clase concreta para cada estado posible, que implemente los m\xe9todos de la interfaz o herede de la clase abstracta Estado."),(0,o.kt)("li",{parentName:"ol"},"En el contexto, mantener una referencia al estado actual y delegar las operaciones relacionadas con el estado al objeto de estado correspondiente."),(0,o.kt)("li",{parentName:"ol"},"Permitir cambios de estado en el contexto mediante m\xe9todos espec\xedficos, o bien, definir un mecanismo para cambiar de estado autom\xe1ticamente.")),(0,o.kt)("h2",{id:"relaci\xf3n-con-otros-patrones"},"Relaci\xf3n con otros patrones"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Strategy/Bridge: Estos patrones permiten cambiar el comportamiento de un objeto, pero mientras que el patr\xf3n State se enfoca en cambiar el comportamiento seg\xfan el estado interno, el patr\xf3n Strategy y Bridge se centran en cambiar el comportamiento utilizando diferentes estrategias."),(0,o.kt)("li",{parentName:"ul"},"Singleton: State puede combinarse con Singleton para garantizar que solo exista una instancia de")))}p.isMDXComponent=!0},132:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/mediacion_virtual_ejemplo-c93301ca9aea818a27db243dd861c98b.py"},8961:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/plantilla_state-264b7b4659be417bf21668a82f404692.py"},217:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/diagrama_de_estados_MV-b2053151658881f720f82aad6b213cdf.png"},4813:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/plantilla_state_uml-9309138ff2121b91fa1d421e4ed3ac2b.png"},4193:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/problema_mv_uml-dbbcad5e7611e0ac217a4f7fa2a66749.png"}}]);