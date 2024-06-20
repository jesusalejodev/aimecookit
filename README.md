# Proyecto de React Native - Aplicación de Recetas

Este proyecto es una aplicación móvil desarrollada con React Native que permite a los usuarios buscar, explorar y ver detalles de diferentes recetas de comidas. La aplicación utiliza la API de [TheMealDB](https://www.themealdb.com/) para obtener datos de las recetas.

## Características

- **Pantalla de Inicio**: Muestra una imagen de bienvenida y un botón de búsqueda para explorar recetas por categorías.
- **Lista de Categorías**: Presenta una lista de categorías de comidas obtenidas de la API.
- **Detalles de la Comida**: Muestra detalles específicos de una receta, incluyendo ingredientes e instrucciones.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- Node.js
- npm o yarn
- Expo CLI

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. **Instala las dependencias**:
    ```bash
    npm install
    # o si usas yarn
    yarn install
    ```

3. **Inicia el servidor de desarrollo**:
    ```bash
    npm start
    # o si usas yarn
    yarn start
    ```

4. **Ejecuta la aplicación**:
    - Usa la aplicación Expo Go en tu dispositivo móvil para escanear el código QR mostrado en la terminal.
    - O utiliza un emulador de Android/iOS para ejecutar la aplicación.

## Descripción de los Componentes

### HomeScreen.js

La pantalla principal de la aplicación. Muestra una imagen de bienvenida, un mensaje de saludo, un botón de búsqueda y una lista de categorías de comidas. Utiliza la función `listMealCategories` del archivo `themealdbapi.js` para obtener las categorías desde la API.

### MealDetailScreen.js

Muestra los detalles de una receta específica. Incluye la imagen de la comida, el título, la categoría, el área, los ingredientes y las instrucciones. Utiliza la función `lookupMealById` del archivo `themealdbapi.js` para obtener los detalles de la receta desde la API.

### RowPlato.js

Un componente reutilizable que muestra una comida en forma de fila con una imagen y un título. Es usado en la pantalla principal para mostrar cada categoría de comida.

### themealdbapi.js

Contiene las funciones que interactúan con la API de TheMealDB:
- `searchMealByName`: Busca una comida por nombre.
- `lookupMealById`: Obtiene los detalles de una comida por su ID.
- `listMealCategories`: Lista todas las categorías de comidas.
- `filterMealByCategory`: Filtra las comidas por categoría.

## Estilos

Los estilos se definen utilizando `StyleSheet` de React Native para cada componente, permitiendo una personalización completa de la apariencia de la aplicación.

