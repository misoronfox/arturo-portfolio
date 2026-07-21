# Mi Portafolio Web

Portafolio personal desarrollado como una aplicación web moderna para presentar mi perfil como desarrollador de software, mis proyectos, habilidades técnicas y experiencia.

El proyecto está construido con React + TypeScript y preparado para ejecutarse mediante Docker, utilizando un entorno de desarrollo con Vite y un entorno de producción optimizado con Nginx.

---

## 🚀 Tecnologías utilizadas

### Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS
* Framer Motion
* React Router
* Lucide React

### Herramientas

* Git
* Docker
* Docker Compose
* Nginx

---

## 📁 Estructura del proyecto

```text
mi-portafolio/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── data/
│   ├── styles/
│   └── theme/
│
├── public/
│
├── Dockerfile              # Imagen de producción
├── Dockerfile.dev          # Entorno de desarrollo
├── docker-compose.yml      # Desarrollo
├── docker-compose.prod.yml # Producción
├── nginx.conf              # Configuración de Nginx
│
├── package.json
└── README.md
```

---

# 💻 Instalación local sin Docker

Requisitos:

* Node.js 22+
* npm

Instalar dependencias:

```bash
npm install
```

Ejecutar entorno de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

# 🐳 Ejecutar con Docker (Desarrollo)

Construir y levantar el contenedor:

```bash
docker compose up --build
```

La aplicación estará disponible en:

```
http://localhost:5173
```

El entorno de desarrollo incluye:

* Hot Reload
* Sincronización del código fuente
* Vite Development Server

Para detener el contenedor:

```bash
docker compose down
```

---

# 🏭 Ejecutar versión de producción

Construir la imagen:

```bash
docker build -t mi-portafolio .
```

Ejecutar:

```bash
docker run -p 8080:80 mi-portafolio
```

La aplicación estará disponible en:

```
http://localhost:8080
```

La imagen de producción utiliza un proceso multi-stage:

```text
Node.js
   |
   | npm run build
   ↓
Archivos estáticos dist/
   |
   ↓
Nginx
```

Esto permite una imagen final más pequeña y optimizada.

---

# 🌐 Despliegue con Docker Compose

Para producción:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

El contenedor se ejecutará en segundo plano y se reiniciará automáticamente gracias a la política:

```yaml
restart: unless-stopped
```

---

# 🎨 Características

* Diseño responsive.
* Animaciones con Framer Motion.
* Arquitectura basada en componentes reutilizables.
* Separación de datos, estilos y componentes.
* Navegación mediante React Router.
* Preparado para despliegue en servidores Linux.

---

# 📌 Próximas mejoras

* Implementación de CI/CD con GitHub Actions.
* Configuración HTTPS con dominio propio.
* Integración de estadísticas del sitio.
* Mejoras de accesibilidad.
* Optimización SEO.

---

# 👨‍💻 Autor

**Arturo Palomera**

Software Developer | Full Stack Developer

Tecnologías principales:

React · TypeScript · Python · Flask · Docker

GitHub:
https://github.com/misoronfox

LinkedIn:
https://www.linkedin.com/in/arturopalomera/
