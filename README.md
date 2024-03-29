# Parcial 1

## Author: Maria Alejandra Estrada Garcia - 202021060

## Pasos para Ejecutar el Proyecto
A continuación, se detallan los pasos para ejecutar este proyecto en el entorno local.

### 1. Clonar el repositorio

```git clone <>```

```cd Parcial1-Web```

### 2. Instalar dependencias

Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Luego, ejecuta:

```npm install```

### 3. Iniciar la aplicación

Una vez que todas las dependencias estén instaladas y las configuraciones sean correctas, puedes iniciar la aplicación con el siguiente comando:

```npm start```

La aplicación se ejecutará en http://localhost:3000 en el navegador web predeterminado.

Tenga en cuenta que la aplicaicón dura un poco en cargar las imagenes del contenido central de la pagina. 

### Componentes y elementos utilizados 

- React: Una biblioteca de JavaScript para construir interfaces de usuario.
- React Bootstrap: Un conjunto de componentes de interfaz de usuario de Bootstrap para React.
- React Router DOM: Biblioteca para la navegación y el enrutamiento en aplicaciones React.
- React Intl: Librería para internacionalización y localización en aplicaciones React.

### Decisiones y proceso de desarrollo

## Home.js

El componente Home es la página principal de la aplicación, donde se muestran una serie de fotos y se proporciona acceso a diferentes funcionalidades. Se utilizó el hook ```useEffect``` para cargar las fotos mediante una solicitud a una API externa (https://picsum.photos) y actualizar el estado con las URL de las fotos. Además, el estado se gestiona para mostrar y ocultar los detalles de la publicación utilizando el hook ```useState```. 

## Header.js

El componente Header contiene la barra de navegación superior de la aplicación. Muestra el nombre de usuario y la imagen de perfil del usuario actual, así como enlaces para acceder al perfil, la página de inicio y otras funcionalidades. Se utilizó principalmente para manejar la navegación y la visualización de la información del usuario. La internacionalización se incorporó en este componente para traducir los textos y enlaces del encabezado a diferentes idiomas utilizando ```react-intl```.

## Perfil.js 

El componente Perfil muestra la información del usuario actual, como su nombre de usuario, nombre, descripción y URL. Permite al usuario editar esta información y guardar los cambios. Se utilizó el hook ```useState``` para gestionar el estado local de los datos del usuario y el estado de edición. Además, se utilizó el hook ```useEffect``` para cargar la información del usuario actual a partir de un archivo JSON o desde ```localStorage```. La internacionalización se implementó con la ayuda de react-intl para traducir las etiquetas y mensajes relacionados con la edición del perfil.

## PostDetail.js

El componente PostDetail muestra los detalles de una publicación específica, incluida la imagen de la publicación y cualquier otra información relevante. Se utiliza para mostrar una vista detallada de una publicación cuando el usuario hace clic en una foto en la página principal. En su desarrollo, se utilizó ```react-bootstrap``` para la creación de modales y se aplicó la internacionalización para traducir los mensajes y etiquetas relacionados con los detalles de la publicación a varios idiomas utilizando ```react-intl```.


