Este projecto consiste en una pagina centralizada para que los usuarios compartan sus prompts para ChatGPT.

## Tecnologías Utilizadas

Este proyecto se construyó utilizando las siguientes tecnologías:

- [Next.js](https://nextjs.org/) 14.0.4
- [NextAuth.js](https://next-auth.js.org/) 4.24.5
- [React](https://es.reactjs.org/) 18
- [Tailwind CSS](https://tailwindcss.com/) 3.3.6
- [MongoDB](https://www.mongodb.com/) 6.3.0
- [Mongoose](https://mongoosejs.com/) 8.0.3


## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
  ```
  git clone https://github.com/ianhein/creative-chats
  ```
2. Navega al directorio del proyecto:
 ```
  cd creative-chats
 ```
3. Instala las dependencias:
 ```
  npm install 
 ```
4. Inicia el servidor
```
npm run dev
```
5. Abre `http://localhost:3000` en tu navegador para ver el proyecto.


## Bugs Conocidos

A continuación, se enumeran algunos problemas conocidos que estoy trabajando para resolver. Si encuentras un error que no está en esta lista, por favor, no dudes en abrir un issue en GitHub.

- **Problema con el Inicio de Sesión en Dispositivos Móviles**: El ícono para iniciar sesión puede no aparecer en dispositivos móviles. Un workaround es poner en vertical la visualización del teléfono y refrescar la página. Estoy trabajando en investigar porqué sucede esto.
- **Problema con el Inicio de Sesión**: El ícono para iniciar sesión puede no aparecer incluso en navegadores. Un workaround clickear en el ícono para que aparezca. Estoy trabajando en investigar porqué sucede esto.
- **Errores de Formato en la Visualización de Prompts**: En ciertos casos, el formato del texto en los prompts no se muestra correctamente. Estoy trabajando en una actualización para abordar este problema.
- **Incompatibilidad con Navegadores Antiguos**: Actualmente, nuestra aplicación puede no funcionar correctamente en versiones antiguas de algunos navegadores. Recomendamos utilizar la versión más reciente de tu navegador para la mejor experiencia.


## Estado del Proyecto

**Estado Actual: En Desarrollo Activo**


**Próximas Características:**
- **Internacionalización (i18n)**: Estoy planificando agregar soporte multilingüe para hacer la aplicación accesible a una audiencia global. Este es uno de los objetivos principales en el futuro cercano.


