# Symfony Contactos (Express)

Migración de la aplicación de gestión de contactos de Symfony (PHP) a
Node.js + Express, siguiendo la misma lógica de la aplicación original.

## Tecnologías

- Node.js + Express 5
- EJS (plantillas) y express-ejs-layouts
- Sequelize + MySQL (migraciones y seeders)
- express-validator (validación de formularios)
- express-session + bcrypt (autenticación y control de accesos)
- CSS propio (sin librerías externas)

## Requisitos

- Node.js 18 o superior
- MySQL en marcha

## Instalación

1. Clonar el repositorio e instalar las dependencias:

```bash
   git clone https://github.com/EnzoMR14/symfony-contactos-express.git
   cd symfony-contactos-express
   npm install
```

2. Crear la base de datos y un usuario en MySQL:

```sql
   CREATE DATABASE contactos_express CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'contactos_user'@'localhost' IDENTIFIED BY 'tu_contraseña';
   GRANT ALL PRIVILEGES ON contactos_express.* TO 'contactos_user'@'localhost';
   FLUSH PRIVILEGES;
```

3. Copiar `.env.example` a `.env` y rellenar los datos:

```
   PORT=3000
   DB_HOST=127.0.0.1
   DB_USER=contactos_user
   DB_PASS=tu_contraseña
   DB_NAME=contactos_express
   SESSION_SECRET=una_cadena_larga_y_aleatoria
```

   Para generar el `SESSION_SECRET`:

```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

4. Crear las tablas y cargar los datos de ejemplo:

```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
```

   Los seeders insertan datos cada vez que se ejecutan. Para repetirlos sin
   duplicar, primero: `npx sequelize-cli db:seed:undo:all`.

5. Arrancar la aplicación:

```bash
   npm run dev
```

   Abrir http://localhost:3000

## Funcionalidades

- Listado y ficha de contactos (público)
- Alta, modificación y borrado de contactos, con validación en el servidor
  (solo con sesión iniciada)
- Relación 1:N entre provincias y contactos
- Registro, login y logout con sesiones y contraseñas cifradas con bcrypt
- Middlewares para proteger las rutas privadas

## Rutas

| Método | Ruta | Acceso |
|---|---|---|
| GET | `/contactos` | Público |
| GET | `/contactos/:id` | Público |
| GET, POST | `/contactos/nuevo` | Privado |
| GET, POST | `/contactos/:id/editar` | Privado |
| POST | `/contactos/:id/eliminar` | Privado |
| GET, POST | `/registro` | Solo sin sesión |
| GET, POST | `/login` | Solo sin sesión |
| POST | `/logout` | Con sesión |

## Estructura del proyecto

```
src/
├── config/        configuración de la base de datos
├── controllers/   lógica de cada ruta
├── middlewares/   control de acceso
├── migrations/    creación de tablas
├── models/        modelos de Sequelize
├── routes/        definición de rutas
├── seeders/       datos de ejemplo
├── validators/    reglas de express-validator
└── views/         plantillas EJS
public/css/        estilos
```
