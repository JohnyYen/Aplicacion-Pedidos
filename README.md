Para facilidad de uso se distribuye con las variables de entorno para la conexión con la BD
Para la autentificación con jwt no se utilizó variables de entorno por la misma razón

En las variables de entorno para la conexión con la BD sustituir password=contraseña del SGBD y database=BD a utilizar
# Ejemplo
DATABASE_URL="postgresql://postgres:1234@localhost:5432/Pedidos?schema=public"

# Tecnologías necesarias
- PostgreSQL
- NodeJS
- NPM

# Instalación de dependencias
- npm i

# Ejecutar Migraciones
- npx prisma migrate dev
- npx prisma studio para interactuar con la BD sin SGBD como pgAdmin

# Ejecutar proyecto
- npm run dev

# Documentación de Swagger
- Abrir en el navegador http://localhost:3000/api/docs#/