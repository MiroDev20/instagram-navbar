# 📱 Instagram Navbar

<div align="center">

  <img src="assets/navbar-icons/icon.png" width="88" alt="Instagram Navbar icon">

  ### Una navbar responsive inspirada en Instagram

  Interfaz frontend construida desde cero para practicar HTML semántico, Flexbox y diseño responsive.

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/Responsive-111111?style=for-the-badge&logo=responsive&logoColor=white" alt="Responsive design">
  </p>

  <a href="#-preview">Ver preview</a> ·
  <a href="#-ejecución-local">Ejecutar localmente</a> ·
  <a href="#-estructura">Explorar el código</a>

</div>

---

## ✨ Preview

<div align="center">
  <img src="assets/previews/white-preview.png" alt="Preview de Instagram Navbar en tema claro" width="80%">
</div>

La interfaz adapta automáticamente su distribución al tamaño de la pantalla:

| Dispositivo | Comportamiento |
| --- | --- |
| 📱 Móvil | Navbar fija en la parte inferior con iconos |
| 💻 Tablet | Navbar vertical lateral con más opciones |
| 🖥️ Escritorio | Navbar lateral completa con logo, iconos y etiquetas |

<div align="center">

  <img src="assets/previews/mobile-white.png" alt="Vista móvil" width="30%">
  <img src="assets/previews/tablet-white.png" alt="Vista tablet" width="30%">
  <img src="assets/previews/desktop-white.png" alt="Vista escritorio" width="30%">

</div>

## 🎯 Objetivos

- Practicar una estructura HTML semántica.
- Organizar estilos CSS por responsabilidad.
- Dominar layouts con Flexbox.
- Crear una experiencia responsive con breakpoints claros.
- Incorporar estados hover y focus.
- Experimentar con soporte para dark mode.
- Mejorar el flujo de trabajo con Git.

## 🧰 Tecnologías

- HTML5
- CSS3
- Git

## 💡 Buenas Prácticas

- Flexbox
- Media queries
- `prefers-color-scheme`
- CSS modularizado
- Reglas CSS agrupadas en conjuntos
- Clases con convención BEM

No utiliza JavaScript, frameworks ni dependencias de instalación.

## 📁 Estructura

```text
instagram-navbar/
├── assets/
│   ├── navbar-icons/       # Logos, iconos y foto de perfil
│   ├── previews/           # Capturas de la interfaz
│   └── responsive-images/  # Imágenes para móvil, tablet y escritorio
├── css/
│   ├── main.css            # Layout, responsive, estados y dark mode
│   ├── reset.css           # Reset base
│   └── variables.css       # Variables de diseño y tipografía
├── .gitignore
├── index.html              # Punto de entrada
└── README.md
```

## 🚀 Ejecución local

Como es un proyecto estático, puedes abrir `index.html` directamente en el navegador.

Para una mejor experiencia de desarrollo, inicia un servidor local desde la raíz del proyecto:

```bash
npx serve .
```

También puedes utilizar la extensión **Live Server** de Visual Studio Code.

## ♿ Detalles de accesibilidad

- La navegación está agrupada dentro de un elemento `<nav>`.
- Las imágenes incluyen texto alternativo descriptivo.
- Los enlaces tienen estados visibles de `focus`.
- La interfaz respeta la preferencia de tema del sistema operativo.

## 🛣️ Próximos pasos

- Convertir el botón de menú en un menú funcional.
- Incorporar etiquetas `aria-label` a los controles de solo icono.
- Optimizar la carga de imágenes mediante `<picture>`.

## 📄 Licencia MIT

Este proyecto es de carácter educativo y está creado para practicar fundamentos de desarrollo frontend.

