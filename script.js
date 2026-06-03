/* ============================= */
/* BIG DATA HUB - CONFIGURACIÓN  */
/* ============================= */

const courses = {
  asignatura_01: {
    title: "Asignatura 01",
    folder: "Asignaturas/asignatura_01",
    mdFile: "Asignaturas/asignatura_01/README.md"
  },
  asignatura_02: {
    title: "Asignatura 02",
    folder: "Asignaturas/asignatura_02",
    mdFile: "Asignaturas/asignatura_02/README.md"
  },
  asignatura_03: {
    title: "Asignatura 03",
    folder: "Asignaturas/asignatura_03",
    mdFile: "Asignaturas/asignatura_03/README.md"
  },
  asignatura_04: {
    title: "Asignatura 04",
    folder: "Asignaturas/asignatura_04",
    mdFile: "Asignaturas/asignatura_04/README.md"
  },
  asignatura_05: {
    title: "Asignatura 05",
    folder: "Asignaturas/asignatura_05",
    mdFile: "Asignaturas/asignatura_05/README.md"
  },
  asignatura_06: {
    title: "Asignatura 06",
    folder: "Asignaturas/asignatura_06",
    mdFile: "Asignaturas/asignatura_06/README.md"
  },
  asignatura_07: {
    title: "Asignatura 07",
    folder: "Asignaturas/asignatura_07",
    mdFile: "Asignaturas/asignatura_07/README.md"
  },
  asignatura_08: {
    title: "Asignatura 08",
    folder: "Asignaturas/asignatura_08",
    mdFile: "Asignaturas/asignatura_08/README.md"
  },
  asignatura_09: {
    title: "Asignatura 09",
    folder: "Asignaturas/asignatura_09",
    mdFile: "Asignaturas/asignatura_09/README.md"
  },
  asignatura_10: {
    title: "Asignatura 10",
    folder: "Asignaturas/asignatura_10",
    mdFile: "Asignaturas/asignatura_10/README.md"
  }
};

const sections = {
  overview: {
    badge: "📌 Información general",
    title: "¿Qué es Big Data Hub?",
    subtitle: "Un sitio central para alojar información, materiales, herramientas y recursos de la Especialización en Big Data.",
    html: `
      <h2>Propósito del sitio</h2>
      <p><strong>Big Data Hub</strong> funciona como un repositorio general para acompañar los procesos académicos de la especialización. La idea es que estudiantes y docentes tengan un solo punto de acceso para consultar información del programa, recursos por asignatura, enlaces de trabajo y materiales complementarios.</p>

      <div class="callout">
        <strong>Organización principal:</strong> la información específica de cada curso se cargará desde archivos <code>.md</code>, ubicados en carpetas independientes por asignatura.
      </div>

      <h2>Estructura sugerida</h2>
      <pre><code>BigDataHub/
├── index.html
├── style.css
├── script.js
└── Asignaturas/
    ├── asignatura_01/
    │   └── README.md
    ├── asignatura_02/
    │   └── README.md
    └── ...
</code></pre>
    `
  },

  program: {
    badge: "🎓 Especialización en Big Data",
    title: "Sobre la Especialización en Big Data",
    subtitle: "Convirtiendo datos en soluciones transformadoras.",
    html: `
      <h2>Enfoque general</h2>
      <p>La industria del Big Data en Colombia está experimentando una revolución, impulsada por la creciente demanda de análisis de datos para la toma de decisiones.
      El sector generó $5.000 millones de dólares en 2022, lo que representa un crecimiento del 25% con respecto al año anterior. Actualmente, está compuesta por más
      de 1.000 empresas, que emplean a más de 50.000 personas. (Asociación Colombiana de Empresas de Tecnologías de la Información y las Comunicaciones -ACOIT-)</p>


      <h2>¿Qué aprenderás?</h2>
      <p>Sumérgete en el mundo del Big Data con nuestra Especialización, donde la malla curricular está diseñada para potenciar habilidades clave en el manejo de 
      grandes volúmenes de datos. Desde Arquitectura de Big hasta la Gestión de Datos Masivos que aborda técnicas avanzadas de procesamiento, y Gobernanza de 
      Datos que asegura la calidad y seguridad de la información, cada asignatura se suma a una experiencia formativa completa y actualizada.</p>

      <h2>Plan de estudios</h2>
      <div class="pdf-frame-wrapper">
        <iframe 
          class="pdf-viewer"
          src="Docs/especializacion-en-big-data-pascual-bravo-1.pdf">
        </iframe>
      </div>

      <div class="resource-buttons">
        <a class="btn secondary" href="Docs/especializacion-en-big-data-pascual-bravo-1.pdf" target="_blank">
          🔗 Abrir PDF
        </a>
      </div>

      <!--
      <h2>Información que puedes incluir aquí</h2>
      <ul>
        <li>Presentación general del programa.</li>
        <li>Perfil del estudiante y del egresado.</li>
        <li>Competencias generales.</li>
        <li>Orientaciones metodológicas.</li>
        <li>Lineamientos para proyectos, entregables y recursos institucionales.</li>
      </ul>
      -->
    `
  },

  // methodology: {
  //   badge: "🧭 Ruta de trabajo",
  //   title: "Ruta sugerida para usar el Hub",
  //   subtitle: "Una guía simple para consultar el sitio antes, durante y después de cada clase.",
  //   html: `
  //     <div class="table-wrapper">
  //       <table class="resource-table">
  //         <thead>
  //           <tr>
  //             <th>Momento</th>
  //             <th>Acción sugerida</th>
  //             <th>Recurso</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>Antes de clase</td>
  //             <td>Revisar el archivo <code>README.md</code> de la asignatura.</td>
  //             <td>Lecturas, conceptos, videos y preguntas guía.</td>
  //           </tr>
  //           <tr>
  //             <td>Durante la clase</td>
  //             <td>Acceder a notebooks, datasets, herramientas y presentaciones.</td>
  //             <td>Prácticas, casos y actividades aplicadas.</td>
  //           </tr>
  //           <tr>
  //             <td>Después de clase</td>
  //             <td>Consultar bibliografía, recursos complementarios y entregables.</td>
  //             <td>Evidencias, avances de proyecto y estudio autónomo.</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //   `
  // }
};

/* ============================= */
/* VISTAS PRINCIPALES            */
/* ============================= */

function loadHome() {
  document.getElementById("content").innerHTML = `
    <section class="hero">
      <p class="eyebrow">Bienvenido/a 👋</p>
      <h1>Big Data Hub</h1>
      <h2>Repositorio general de la Especialización en Big Data</h2>
      <p class="description">Este sitio reúne información general, enlaces rápidos y recursos por asignatura. Cada curso puede tener su propia carpeta con un archivo <code>README.md</code> para mostrar materiales, bibliografía, herramientas, datasets, actividades y orientaciones.</p>
      <div class="hero-actions">
        <a class="btn primary" href="https://classroom.google.com/" target="_blank">Classroom</a>
        <a class="btn secondary" href="https://colab.research.google.com/" target="_blank">Google Colab</a>
        <a class="btn secondary" href="https://www.kaggle.com/datasets" target="_blank">Datasets</a>
      </div>
    </section>

    <section class="overview">
      <h2>🧭 ¿Cómo está organizado?</h2>
      <div class="overview-grid">
        <div class="info-card">
          <h3>📌 Información general</h3>
          <p>Presentación del Hub, información del programa y ruta de trabajo.</p>
          <span>Hub Programa Ruta</span>
        </div>
        <div class="info-card">
          <h3>🎓 Asignaturas</h3>
          <p>Diez espacios para cargar la información específica de cada curso mediante archivos Markdown.</p>
          <span>README.md Cursos Recursos</span>
        </div>
        <div class="info-card">
          <h3>🔗 Enlaces rápidos</h3>
          <p>Accesos directos a plataformas de trabajo como Classroom, Colab, GitHub y Kaggle.</p>
          <span>Classroom Colab GitHub</span>
        </div>
      </div>
    </section>
  `;
}

function loadSection(key) {
  const section = sections[key];

  if (!section) {
    showError("No se encontró la sección solicitada.");
    return;
  }

  document.getElementById("content").innerHTML = `
    <section class="section-header">
      <span class="section-badge">${section.badge}</span>
      <h1>${section.title}</h1>
      <p>${section.subtitle}</p>
    </section>

    <section class="content-card">
      ${section.html}
    </section>
  `;

  window.scrollTo(0, 0);
}

function loadCourse(courseKey) {
  const course = courses[courseKey];

  if (!course) {
    showError("No se encontró la asignatura solicitada.");
    return;
  }

  fetch(course.mdFile)
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo Markdown");
      }
      return response.text();
    })
    .then(text => {
      document.getElementById("content").innerHTML = `
        <section class="section-header">
          <span class="section-badge">🎓 Asignatura</span>
          <h1>${course.title}</h1>
          <p>Contenido cargado desde <code>${course.mdFile}</code>.</p>
        </section>

        <section class="content-card markdown-card">
          ${marked.parse(text)}
        </section>
      `;
      window.scrollTo(0, 0);
    })
    .catch(() => {
      document.getElementById("content").innerHTML = `
        <section class="error-card">
          <h2>⚠️ Aún no se encontró el archivo de esta asignatura</h2>
          <p>Para activar esta sección, crea el siguiente archivo:</p>
          <code>${course.mdFile}</code>
          <p>Luego escribe allí la información, herramientas, bibliografía y recursos del curso.</p>

          <div class="callout">
            <strong>Plantilla sugerida para el README.md:</strong><br>
            Nombre de la asignatura, presentación, objetivos, herramientas, bibliografía, datasets, actividades y enlaces.
          </div>
        </section>
      `;
      window.scrollTo(0, 0);
    });
}

function loadContact() {
  document.getElementById("content").innerHTML = `
    <section class="contact-card">
      <h1>Contacto</h1>
      <h3><strong>Profesor:</strong> Ruben D. Fonnegra</h3>
      <p><strong>Email:</strong> <a href="mailto:ruben.fonnegra@pascualbravo.edu.co">ruben.fonnegra@pascualbravo.edu.co</a></p>
      <p><strong>Sitio web:</strong> <a href="https://rubenfonnegra.github.io/" target="_blank">https://rubenfonnegra.github.io/</a></p>
      <div class="resource-buttons">
        <a class="btn primary" href="mailto:ruben.fonnegra@pascualbravo.edu.co">Enviar email</a>
        <a class="btn secondary" href="https://github.com/rubenfonnegra" target="_blank">GitHub</a>
      </div>
    </section>
  `;
}

function openExternal(url) {
  window.open(url, "_blank");
}

function showError(message) {
  document.getElementById("content").innerHTML = `
    <section class="error-card">
      <h2>⚠️ Error</h2>
      <p>${message}</p>
    </section>
  `;
}

loadHome();
