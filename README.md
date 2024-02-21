# Chat en Tiempo Real con Socket.io

> [!NOTE]
>
> Este proyecto es un chat en tiempo real que permite a los usuarios entrar en salas de chat y comunicarse entre ellos.
>
> Utiliza Socket.io para la comunicación bidireccional en tiempo real entre clientes y servidores web.
> El proyecto está dividido en dos partes principales:
>
> ⚡️ El servidor (server) construido con Node.js
> ⚡️ Y el cliente (client) desarrollado con React.
> <br>
> Emplearemos Clean Architecture, asegurando un desarrollo escalable y organizado, facilitando la separación de preocupaciones así como adaptaciones y expansiones eficientes en el futuro.

#

> [!TIP]
>
> 📂 **Características Clave del Proyecto**
>
> ⚡️ Uso de TypeScript para el desarrollo del proyecto.<br>
> ⚡️ Login de usuario para acceder a salas de chat.<br>
> ⚡️ Autenticación de usuarios mediante Google Token utilizando google-auth-library.<br>
> ⚡️ Chat en tiempo real entre usuarios mediante Socket.io.<br>
> ⚡️ Autenticación de usuarios mediante JWT.<br>
> ⚡️ Uso de Express para el servidor.<br>
> ⚡️ CI con GitHub Actions para automatizar pruebas y cambios.

#

> [!IMPORTANT]
> Nivel ⭐️
>
> ✅ Login de usuario para acceder a salas de chat.
> ✅ Persistencia de datos usando MongoDB con Mongoose.

#

> [!IMPORTANT]
> Nivel ⭐️⭐️
>
> ✅ Autenticación de usuarios mediante Google Token utilizando google-auth-library.<br>

#

> [!IMPORTANT]
> Nivel ⭐️⭐️⭐️
>
> ✅ Funcionalidades adicionales:
>
> ⚡️ SingUp de usuarios para poder crear un usuario y acceder a salas de chat.
> ⚡️ Logout de usuarios para cerrar sesión en salas de chat.
> ⚡️ Campo de búsqueda para filtrar los usuarios en salas de chat.
> ⚡️ Lista de usuarios en sala de chat.
> ⚡️ Indicador de usuarios conectados en sala de chat.
> ⚡️ Notificación de mensaje mediante sonido.
> ⚡️ Los mensajes enviados se muestran mediante animación de movimiento.
> ⚡️ Skeleton para los mensajes enviados.
> ⚡️ Se utiliza Zod para validar los datos de entrada.
> ⚡️ Se utiliza React-Toastify para mostrar notificaciones.
>
> ✅ Uso de TypeScript para el desarrollo del proyecto.
> ✅ Uso de React para el desarrollo del cliente.

#

# 💡 Pasos para Utilizar el Proyecto

**Preparación del Entorno**<br>

Antes de iniciar, asegúrate de tener instalado en tu sistema Node.js (versión recomendada:20)<br>

> [!IMPORTANT]
>
> [![Node.js](https://img.shields.io/badge/-Nodejs-black?style=flat&logo=Node.js)](https://nodejs.org/)
>
> [![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

Estos son esenciales para ejecutar y gestionar las dependencias del proyecto.

#

**Clonación del Repositorio**<br>

Clona el repositorio a tu máquina local usando:

```
git clone https://github.com/LucianMihalca/Sprint-07.git
```

> [!IMPORTANT]
> Tras clonar, prepara el proyecto para tu uso personal:
>
> **Elimina el Directorio Git Existente:**<br>
>
> Esto remueve la historia previa y te permite empezar con un historial limpio.
>
> ```bash
>  rm -rf .git
> ```
>
> **Inicializa tu Propio Repositorio Git:**<br>
>
> En la raíz del proyecto clonado, inicia un nuevo repositorio Git:
>
> ```bash
> git init
> ```
>
> Esto te permite comenzar tu propio control de versiones.

#

**1.1 Configurar el Servidor**<br>

Para instalar todas las dependencias necesarias navega al directorio del servidor:
>
Navega al directorio del servidor:
```
cd server
```
>
Instala las dependencias:
```
npm install
```

#

**1.2 Para transpilar el proyecto**<br>

Transpila el código TypeScript en JavaScript en la carpeta ./dist..

```
npm run build
```

#

**1.3 Para ejecuta el servido**<br>

Ejecuta el servidor en el puerto 3000

```
npm run server
```

#

**2.1 Configurar el Cliente**<br>

Para instalar todas las dependencias necesarias navega al directorio del cliente:

Instala las dependencias:
```
cd client
```

Ejecuta la aplicación cliente en modo desarrollo:
```
npm install
```



#

**Documentación de los Métodos TodoController**

> [!NOTE]
>
> 1.  ⚡️ signUp (Post)
>
> - **Obtener Todos (Tareas)**
> - **Endpoint:** /signup (GET)
> - **Descripción:** Crea un nuevo usuario: 
> - **inputs** fullName, userName, password, confirmPassword, gender.
> - **Respuestas:**
>   - **Éxito (200):** Devuelve un arreglo de objetos de los inputs.
>   - **Error (500):** Internal server error.
>   - **Error (500):** User already exists.

#

> [!NOTE]
>
> 2.  ⚡️ login (Post)
>
> - **Obtener Todos (Tareas)**
> - **Endpoint:** /login (GET)
> - **Descripción:** Crea un nuevo instancia: 
> - **inputs** userName, password.
> - **Respuestas:**
>   - **Éxito (200):** Devuelve un arreglo de objetos de los inputs.
>   - **Error (500):** Internal server error.
>   - **Error (500):** User already exists.

#

> [!NOTE]
>
> 3.  ⚡️ logOut (Post)
>
> - **Obtener Todos (Tareas)**
> - **Endpoint:** /logout (GET)
> - **Descripción:** Crea una nueva instancia de logOut 
> - **Respuestas:**
>   - **Éxito (200):** Logged out successfully.
>   - **Error (500):** Error in logout controller.

#

> [!NOTE]
>
> 4.  ⚡️ sendMessage (Post)
>
> - **Obtener Todos (Tareas)**
> - **Endpoint:** /send/id (POST)
> - **Descripción:** Crea una nueva instancia de message
> - **Respuestas:**
>   - **Éxito (200):** message sent successfully.
>   - **Error (500):** Error in sendMessage controller.

#

> [!NOTE]
>
> 4.  ⚡️ getMessage (Get)
>
> - **Obtener Todos (Tareas)**
> - **Endpoint:** /:id (GET)
> - **Descripción:** Devuelve un nuevo mensaje
> - **Respuestas:**
>   - **Éxito (200):** message sent successfully.
>   - **Error (500):** Error in getMessage controller.

#

> [!NOTE]
>
> 4.  ⚡️ getUserForSidebar (Get)
>
> - **Obtener Todos (Tareas)**
> - **Endpoint:** / (GET)
> - **Descripción:** Devuelve un listado de los usuarios
> - **Respuestas:**
>   - **Éxito (200):** Devuelve los usuarios
>   - **Error (500):** Error in getUserForSidebar controller.

#


