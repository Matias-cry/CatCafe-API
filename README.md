 <div align="center">

# ☕🐱 CatCafe API

### Servicio REST para la aplicación móvil **Tostaditos CatCafe**

![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-5.1.6-003B57?logo=sqlite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-FFCA28?logo=firebase&logoColor=black)
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?logo=render&logoColor=white)

**Una API diseñada para gestionar la información de los usuarios de Tostaditos CatCafe.**

</div>

---

## 📑 Tabla de contenidos

- [Descripción](#-descripción)
- [Objetivos](#-objetivos)
- [Características principales](#-características-principales)
- [Tecnologías](#-tecnologías)
- [Arquitectura del proyecto](#-arquitectura-del-proyecto)
- [Estructura de directorios](#-estructura-de-directorios)
- [Modelo de datos](#-modelo-de-datos)
- [URL base](#-url-base)
- [Documentación de endpoints](#-documentación-de-endpoints)
- [Instalación y ejecución local](#-instalación-y-ejecución-local)
- [Despliegue](#-despliegue)
- [Seguridad y consideraciones técnicas](#-seguridad-y-consideraciones-técnicas)
- [Posibles mejoras](#-posibles-mejoras)
- [Autoría](#-autoría)

---

## 📌 Descripción

**CatCafe API** es un servicio web desarrollado para dar soporte a la aplicación móvil **Tostaditos CatCafe**. Su responsabilidad principal es gestionar y proporcionar los datos de perfil de los usuarios mediante solicitudes HTTP.

La aplicación móvil utiliza **Firebase Authentication** para gestionar la autenticación de las personas que pueden acceder al sistema mediante sus credenciales. Por su parte, **CatCafe-API**, construida con **Node.js** y **Express**, utiliza **SQLite** para almacenar y consultar información complementaria del perfil, como DNI, correo electrónico, nombres, apellidos y rol.

De esta manera, se establece una separación de responsabilidades: Firebase se encarga de la autenticación de los usuarios, mientras que SQLite almacena su información personal y complementaria.

El proyecto sigue una organización modular que separa las rutas, los controladores, los modelos y la configuración de la base de datos.

## 🎯 Objetivos

- Proporcionar una interfaz REST para las operaciones de usuarios de la aplicación móvil.
- Centralizar el almacenamiento de la información personal de los usuarios.
- Permitir el registro y consulta de perfiles mediante endpoints HTTP.
- Complementar el sistema de autenticación de Firebase con una base de datos propia.
- Mantener una arquitectura modular, organizada y escalable.

## ✨ Características principales

| Funcionalidad | Descripción |
|---|---|
| Gestión de usuarios | Registro y consulta de información personal. |
| Firebase Authentication | Autenticación de usuarios desde la aplicación móvil. |
| Base de datos SQLite | Almacenamiento persistente de perfiles de usuario. |
| Consulta de usuarios | Obtención de los usuarios registrados. |
| API REST | Comunicación mediante solicitudes HTTP y respuestas JSON. |
| Despliegue en Render | Configuración para publicar el servicio web. |

## 🧰 Tecnologías

| Tecnología | Utilización |
|---|---|
| [Node.js](https://nodejs.org/) | Entorno de ejecución de JavaScript en el servidor. |
| [Express](https://expressjs.com/) | Framework para la construcción de la API REST. |
| [SQLite](https://www.sqlite.org/) | Sistema de gestión de base de datos relacional. |
| [sqlite3](https://www.npmjs.com/package/sqlite3) | Biblioteca para conectar Node.js con SQLite. |
| [Firebase Authentication](https://firebase.google.com/docs/auth) | Servicio de autenticación utilizado por la aplicación móvil. |
| [Render](https://render.com/) | Plataforma de despliegue del servicio web. |

**Dependencias del backend:**
- `express`: ^4.18.2
- `sqlite3`: ^5.1.6

> Firebase Authentication se utiliza en la aplicación móvil. No forma parte de las dependencias ni de la implementación directa de este repositorio de backend.

## 🏗️ Arquitectura del proyecto

CatCafe utiliza una arquitectura modular basada en la separación de responsabilidades.

La solución está compuesta por tres elementos principales:

1. **Aplicación móvil:** interfaz desde la que los usuarios interactúan con el sistema.
2. **Firebase Authentication:** administra la autenticación de los usuarios mediante sus credenciales.
3. **CatCafe API + SQLite:** proporciona los servicios de gestión de perfiles y almacena la información personal.

### Diagrama de arquitectura

```text
              ┌──────────────────────────┐
              │                          │
              │  TOSTADITOS CATCAFE      │
              │     Aplicación móvil     │
              │                          │
              └────────────┬─────────────┘
                           │
              ┌────────────┴─────────────┐
              │                          │
              ▼                          ▼
    ┌──────────────────┐       ┌──────────────────┐
    │                  │       │                  │
    │    FIREBASE      │       │   CATCAFE API    │
    │  AUTHENTICATION  │       │                  │
    │                  │       │   Node.js        │
    │ Autenticación de │       │   Express        │
    │    usuarios      │       │                  │
    │                  │       └────────┬─────────┘
    └──────────────────┘                │
                                        │
                                        ▼
                              ┌──────────────────┐
                              │                  │
                              │      SQLITE      │
                              │                  │
                              │  Datos personales│
                              │  y perfiles      │
                              │                  │
                              └──────────────────┘
```

### Flujo de funcionamiento

1. El usuario ingresa sus credenciales desde la aplicación móvil.
2. Firebase Authentication verifica las credenciales y gestiona la autenticación.
3. La aplicación móvil se comunica con CatCafe API mediante solicitudes HTTP.
4. Express recibe las solicitudes y las deriva a las rutas correspondientes.
5. Los controladores procesan las operaciones solicitadas.
6. Los modelos ejecutan las consultas correspondientes sobre SQLite.
7. La API devuelve la información solicitada en formato JSON.

**Nota técnica:** el código actual de este repositorio no implementa la verificación de tokens de Firebase en el backend. Por tanto, la autenticación de la aplicación y la autorización de acceso a los endpoints de la API son responsabilidades separadas.

## 📂 Estructura de directorios

```text
CatCafe-API/
│
├── controllers/
│   └── userController.js
│
├── database/
│   └── db.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── userRoutes.js
│
├── app.js
├── package.json
├── render.yaml
└── README.md
```

| Directorio / Archivo | Descripción |
|---|---|
| `controllers/` | Contiene la lógica de procesamiento de las solicitudes. |
| `database/` | Configuración y conexión con SQLite. |
| `models/` | Operaciones y consultas sobre los datos de los usuarios. |
| `routes/` | Definición de las rutas HTTP de la API. |
| `app
