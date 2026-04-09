# MovieApp - Aplicación de Búsqueda de Series

## 📌 Descripción

**MovieApp** es una aplicación web desarrollada con **React y JavaScript** que permite a los usuarios buscar series de televisión mediante una API externa.

La aplicación cuenta con autenticación básica, una interfaz moderna y un diseño responsive adaptable a dispositivos móviles y de escritorio.

---

## 🚀 Funcionalidades

* 🔐 Login de usuario
* 🔎 Búsqueda de series en tiempo real
* 🎬 Visualización de resultados en tarjetas
* 📄 Vista detallada de cada serie
* 📱 Diseño responsive (3 columnas en móvil / 5 en PC)
* 🎨 Interfaz moderna tipo streaming

---

## 🧠 Tecnologías utilizadas

* ⚛️ React
* 🟨 JavaScript (ES6)
* 🎨 CSS (Flexbox y Grid)
* 🌐 API externa: TVMaze

---

## 🌐 API utilizada

Se utiliza la API pública de TVMaze para obtener información de series:

https://api.tvmaze.com/search/shows?q=nombre

Esta API permite:

* Obtener nombre de la serie
* Imagen
* Descripción (summary)

---

## 🧱 Estructura del proyecto

```
API-Busqueda/
 ├── frontend/
 │    ├── public/
 │    ├── src/
 │    │    ├── componentes/
 │    │    │     ├── Login.jsx
 │    │    │     └── Card.jsx
 │    │    ├── pantallas/
 │    │    │     ├── Search.jsx
 │    │    │     └── Details.jsx
 │    │    ├── App.js
 │    │    ├── index.js
 │    │    └── index.css
 │    ├── package.json
```

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/vnheredia/API-Busqueda.git
cd API-Busqueda/frontend
```

---

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

### 3️⃣ Ejecutar la aplicación

```bash
npm start
```

---

## 🔄 Flujo de la aplicación

1. Usuario ingresa credenciales
2. Accede a la pantalla de búsqueda
3. Realiza una búsqueda de series
4. Visualiza resultados en tarjetas
5. Selecciona una serie
6. Accede a la vista detallada

---

## 🛠️ Mejoras futuras

* ❤️ Sistema de favoritos
* ⭐ Mostrar rating de series
* ⏳ Animaciones de carga
* 🌍 Deploy en internet

---

## 👩‍💻 Autor

**Vanessa Nayeli Heredia Nicolalde**
Estudiante de Sistemas de Información

---

## 🎓 Académico

Este proyecto fue desarrollado como parte del aprendizaje de desarrollo web utilizando React, aplicando conceptos de consumo de APIs, diseño responsive y componentes reutilizables.

---
