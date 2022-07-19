# 🌟BURGER QUEEN 🍔

## Índice

[1. Definición del proyecto 📝](#1-definición-del-proyecto-)
[2. Principales usuarios del producto](#2-principales-usuarios-del-producto)
[3. Historias de usuarios 👩 👨](#3-historias-de-usuarios--)
      - [Usuario: Mesero.](#usuario-mesero)
      - [Usuario: Jefe de cocina.](#usuario-jefe-de-cocina)
[4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
        - [HTML y CSS](#html-y-css)
        - [JavaScript](#javascript)
        - [Estructura del código y guía de estilo](#estructura-del-código-y-guía-de-estilo)
        - [Git y GitHub](#git-y-github)
        - [Firebase](#firebase)
        - [React](#react)
        - [UX](#ux)
[4. Prototipo](#4-prototipo)
[5. Vista Proyecto Final](#4-vista-proyecto-final)


## 1. Definición del proyecto 📝
BURGER QUEEN, Es una aplicación web para tablets, para la toma de pedidos personalizados y coordinación ágil con la cocina. Es una web intuitiva que optimiza la toma de pedidos, donde los mismos llegan a cocina según se van tomando se van enviando para su preparación, los chefs pueden marcar las órdenes como terminadas, para que el mesero las entregue y puedan ser marcadas como entregadas.

En la vista del mesero se muestra dos menús (desayuno, almuerzo y adicinales), cada uno con todos sus productos. El mesero debe poder ir eligiendo qué productos agregar y estos se reflejan en el resumen del pedido con el costo total.
Los pedidos se trasladan a la vista del cocinero quien indica con tan solo un botón cuando este ya ha sido preperado y asi el mesero pueda pasar a retirarlo y entregarlo de forma rápida a los clientes.
Este proyecto fue realizado usando la librería React Js y con Firebase para el manejo de la base de datos.

## 2. Principales usuarios del producto
Meseros y cocineros que trabajen en el restaurante que cuenten con un usuario válido para poder ingresar correctamente a la interfaz.
## 3. Historias de usuarios 👩 👨
 #### Usuario: Mesero.

|  | **HISTORIA DE USUARIO 01**|
| ---------- |----------- |
|NOMBRE:  |  Creación de cuenta. |
|DESCRIPCIÓN: |Yo como mesero quiero registrarme en la app usando con mi correo y contraseña para poder iniciar sesión.|  
|CRITERIOS DE ACEPTACIÓN: | El mesero logra crear su cuenta con usuario y contraseña con éxito.|
|DEFINICIÓN DE TERMINADO: | Cuando el mesero logre crear su cuenta con éxito la información queda almacenada en firebase y se le envía una alerta de información. |

|  | **HISTORIA DE USUARIO 02**|
| ---------- |----------- |
|NOMBRE:  |  Inicio de sesión. |
|DESCRIPCIÓN: |Yo como mesero registrado quiero ingresar a la app mediante mi correo electrónico registrado.|  
|CRITERIOS DE ACEPTACIÓN: | Validar las credenciales ingresadas por el mesero, si en caso el usuario ya ha sido registrado, pueda iniciar sesión.|
|DEFINICIÓN DE TERMINADO: | El mesero logra iniciar sesión y puede visualizar la interfaz de la aplicación. |

|  | **HISTORIA DE USUARIO 03**|
| ---------- |----------- |
|NOMBRE:  |  Toma de pedidos. |
|DESCRIPCIÓN: |Yo como mesero quiero poder tomar los pedidos para poder listarlos y posteriormente enviarlos a cocina.|  
|CRITERIOS DE ACEPTACIÓN: | Se logra visualizar la lista cada producto y se puede ir agregando al pedido para poder generar la orden que enviaremos a cocina.|
|DEFINICIÓN DE TERMINADO: | Notificar al mesero que el pedido se ha enviado a la cocina de manera exitosa. |

|  | **HISTORIA DE USUARIO 04**|
| ---------- |----------- |
|NOMBRE:  |  Toma de pedidos. |
|DESCRIPCIÓN: |Yo como mesero quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron y poder cambiar el estado a ‘entregado’.|  
|CRITERIOS DE ACEPTACIÓN: | El mesero puede: <br>1- Anotar nombre de cliente.<br> 2- Agregar productos al pedido. <br>3- Eliminar productos.<br>4- Ver resumen y el total de la compra. <br>5- Enviar pedido a cocina (guardar en alguna base de datos). <br>6- Se ve y funciona bien en una Tablet.|
|DEFINICIÓN DE TERMINADO: | El mesero logra visualizar los items de los productos y puede tomar el pedido.|


|  | **HISTORIA DE USUARIO 05**|
| ---------- |----------- |
|NOMBRE:  |  Cerrar sesión. |
|DESCRIPCIÓN: |Yo como mesero registrado quiero cerrar sesión de la app cuando finalice mi turno para relevar al siguiente.|  
|CRITERIOS DE ACEPTACIÓN: | Mostrar un botón para salir y al hacer click el mesero debe salir de su cuenta exitosamente.|
|DEFINICIÓN DE TERMINADO: | El mesero logra salir de su cuenta exitosamente y es redirigido a la página de inicio.|


 #### Usuario: Jefe de cocina.

 |  | **HISTORIA DE USUARIO 06**|
| ---------- |----------- |
|NOMBRE:  | Jefe de cocina registra su cuenta de usuario|
|DESCRIPCIÓN: |Yo como jefe de cocina quiero registrarme en la app: con mi correo y contraseña.|  
|CRITERIOS DE ACEPTACIÓN: | Notificar al jefe de cocina mediante alertas en caso de cometer un error al registrarse, fallas de internet, correo registrado y/o registro exitoso y almacenar los datos en firestore.|
|DEFINICIÓN DE TERMINADO: | Cuando el jefe de cocina logre crear su cuenta con éxito la información queda almacenada en firebase.|


 |  | **HISTORIA DE USUARIO 07**|
| ---------- |----------- |
|NOMBRE:  | Jefe de cocina inicia sesión con su cuenta previamente registrada|
|DESCRIPCIÓN: |Yo como jefe de cocina registrado quiero ingresar a la app mediante usuario y contraseña previamente registrado.|  
|CRITERIOS DE ACEPTACIÓN: | Validar las credenciales ingresadas por el Jefe de cocina para el inicio de sesión. En caso de un registro exitoso la página le enviará una alerta con un mensaje de bienvenida.|
|DEFINICIÓN DE TERMINADO: | El Jefe de cocina logra acceder a la interfaz de la app con un usuario y contraseña previamente registrado.|

 |  | **HISTORIA DE USUARIO 08**|
| ---------- |----------- |
|NOMBRE:  | Jefe de cocina puede visualizar la lista de pedidos.|
|DESCRIPCIÓN: |Yo como jefe de cocina quiero ver los nuevos pedidos para saber cuales son los pedidos pendientes y poder prepararlos.|  
|CRITERIOS DE ACEPTACIÓN: | El jefe de cocina puede:<br>1- Ver los pedidos ordenados según se van haciendo.<br> 2- Marcar los pedidos que se han preparado y están listos para servirse.|
|DEFINICIÓN DE TERMINADO: | Solo el Jefe de cocina puede cambiar el estado de los pedidos de ‘pendiente’ a ‘terminado’.|

 |  | **HISTORIA DE USUARIO 09**|
| ---------- |----------- |
|NOMBRE:  | Jefe de cocina puede cerrar sesión.|
|DESCRIPCIÓN: |Yo como Jefe de cocina registrado quiero cerrar sesión de la app: cuando finalice mi turno para relevar al siguiente.|  
|CRITERIOS DE ACEPTACIÓN: | Mostrar un botón para salir en la barra de navegación y al hacer click el Jefe de cocina debe lograr cerrar sesión.|
|DEFINICIÓN DE TERMINADO: | El Jefe de cocina logra salir de su cuenta exitosamente y es redirigido a la página de inicio.|


#### 4. Objetivos de aprendizaje
A continuación puedes ver los objetivos de aprendizaje de este proyecto:
##### HTML y CSS
  - [✔️]Uso de HTML semántico.  
  - [✔️]Uso de selectores de CSS.  
  - [✔️]Construir tu aplicación respetando el diseño realizado (maquetación). 
  - [✔️]Uso de Media Queries.

##### JavaScript
  - [✔️]Uso de condicionales (if-else | switch | operador ternario).  
  - [✔️]Uso de funciones (parámetros | argumentos | valor de retorno).  
  - [✔️]Manipular arrays (filter | map | sort | reduce).  
  - [✔️]Manipular objects (key | value)
  - [✔️]Uso de condicionales (if-else | switch | operador ternario).  
  - [✔️]Uso ES modules (import | export).  
  - [✔️]Diferenciar entre expression y statements.  
  - [✔️]Diferenciar entre tipos de datos atómicos y estructurados.
  - [✔️] Uso de callbacks.  
  - [✔️]Consumo de Promesas.
  - 
##### Estructura del código y guía de estilo

  - [✔️]Organizar y dividir el código en módulos (Modularización).  
  - [✔️]Uso de identificadores descriptivos (Nomenclatura | Semántica).  
  - [✔️]Uso de linter (ESLINT).  
##### Git y GitHub
  - [✔️]Uso de comandos de git (add | commit | pull | status | push)
  - [✔️]Uso de condicionales (if-else | switch | operador ternario).  
  - [✔️]Manejo de repositorios de GitHub (clone | fork | gh-pages) 
  - [✔️]Colaboración en Github (branches | pull requests | |tags) 

##### Firebase

  - [✔️] Firestore.
  - [✔️] Firebase Auth.  
  - [✔️] Observadores. (onAuthStateChanged | onSnapshot)

##### React

  - [✔️] JSX.
  - [✔️] Componentes function.  
  - [✔️] Eventos en React.
  - [✔️] Listas y keys.
  - [✔️] Renderizado condicional. 
  - [✔️] Elevación de estados.
  - [✔️] hooks. 
  - [✔️] React Router.

##### UX
  - [✔️] Diseñar la aplicación pensando y entendiendo al usuario.
  - [✔️] Crear prototipos para obtener feedback e iterar.
  - [✔️] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
  - [✔️] Planear y ejecutar tests de usabilidad.
  
#### 4. Prototipo

* Prototipo de alta fidelidad.
  

#### 5. Vista Proyecto Final