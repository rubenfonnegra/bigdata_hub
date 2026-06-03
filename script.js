/* ============================= */
/* BIG DATA HUB - CONFIGURACIÓN  */
/* ============================= */

const courses = {
  asignatura_01: {
    title: "Arquitectura de big data",
    folder: "Asignaturas/S1_Arquitectura_big_data",
    mdFile: "Asignaturas/S1_Arquitectura_big_data/README.md"
  },
  asignatura_02: {
    title: " Estadística para Analítica",
    folder: "Asignaturas/S1_Estadística_analitica",
    mdFile: "Asignaturas/S1_Estadística_analitica/README.md"
  },
  asignatura_03: {
    title: "Ética y regulación",
    folder: "Asignaturas/S1_Etica_regulacion_datos",
    mdFile: "Asignaturas/S1_Etica_regulacion_datos/README.md"
  },
  asignatura_04: {
    title: "Gestión de Datos Masivos",
    folder: "Asignaturas/S1_Gestion_datos_masivos",
    mdFile: "Asignaturas/S1_Gestion_datos_masivos/README.md"
  },
  asignatura_05: {
    title: "Inteligencia de Negocios",
    folder: "Asignaturas/S1_Inteligencia_negocios",
    mdFile: "Asignaturas/S1_Inteligencia_negocios/README.md"
  },
  asignatura_06: {
    title: "Analítica de datos",
    folder: "Asignaturas/S2_Analitica_datos",
    mdFile: "Asignaturas/S2_Analitica_datos/README.md"
  },
  asignatura_07: {
    title:  "Gobernanza de datos",
    folder: "Asignaturas/S2_Gobernanza_datos",
    mdFile: "Asignaturas/S2_Gobernanza_datos/README.md"
  },
  asignatura_08: {
    title:  "Optativa 1",
    folder: "Asignaturas/S2_Opt1",
    mdFile: "Asignaturas/S2_Opt1/README.md"
  },
  asignatura_09: {
    title:  "Optativa 2",
    folder: "Asignaturas/S2_Opt2",
    mdFile: "Asignaturas/S2_Opt2/README.md"
  },
  asignatura_10: {
    title:  "Trabajo de grado",
    folder: "Asignaturas/S2_Trabajo_grado",
    mdFile: "Asignaturas/S2_Trabajo_grado/README.md"
  }
};

const sections = {
  overview: {
    badge: "📌 Información general",
    title: "¿Qué es Big Data Hub?",
    subtitle: "Un sitio central para alojar información, materiales, herramientas y recursos de la Especialización en Big Data.",
    html: `
      <h2>Propósito del sitio</h2>
      <p>
        <strong>Big Data Hub</strong> es el espacio central de consulta de la Especialización en Big Data de la Institución Universitaria Pascual Bravo. Su propósito 
        es facilitar el acceso a la información académica, recursos de aprendizaje, materiales de apoyo y contenidos de las asignaturas que conforman el programa. 
        A través de este portal, estudiantes y docentes pueden encontrar de manera organizada documentos institucionales, recursos bibliográficos, herramientas 
        tecnológicas, orientaciones académicas y materiales complementarios que apoyan el desarrollo de las actividades formativas.
      </p>

      <div class="callout">
      <h2>¿Qué encontrarás aquí?</h2>
      <ul>
        <li>Información general de la especialización.</li>
        <li>Acceso a material de las asignaturas del programa.</li>
        <li>Bibliografía y recursos de consulta.</li>
        <li>Herramientas para análisis y procesamiento de datos.</li>
        <li>Materiales de apoyo para proyectos y actividades académicas.</li>
        <li>Enlaces institucionales de interés.</li>
      </ul>
      </div>

      <h2>🗺️ Ruta de trabajo</h2>
        <h3>¿Cómo aprovechar este espacio?</h3>

        <p>
          Para obtener el máximo beneficio de <strong>Big Data Hub</strong>, se recomienda seguir la siguiente ruta de trabajo:
        </p>

        <div class="info-card">
          <h3>1️⃣ Consulta la información general</h3>
          <p>
            Conoce la estructura del programa, sus objetivos, recursos institucionales y orientaciones académicas.
          </p>
        </div>

        <div class="info-card">
          <h3>2️⃣ Accede a tu asignatura</h3>
          <p>
            Ingresa a la sección correspondiente a cada curso para encontrar materiales de estudio, recursos complementarios y orientaciones específicas.
          </p>
        </div>

        <div class="info-card">
          <h3>3️⃣ Revisa los recursos de apoyo</h3>
          <p>
            Explora herramientas, bibliografía recomendada, datasets y materiales adicionales que fortalezcan tu proceso de aprendizaje.
          </p>
        </div>

        <div class="info-card">
          <h3>4️⃣ Desarrolla tus actividades académicas</h3>
          <p>
            Utiliza los recursos disponibles para apoyar el desarrollo de proyectos, análisis de datos, investigaciones y demás actividades del programa.
          </p>
        </div>

        <div class="info-card">
          <h3>5️⃣ Mantente actualizado</h3>
          <p>
            Consulta periódicamente el sitio para acceder a nuevos materiales, recursos y actualizaciones realizadas por los docentes y coordinadores académicos.
          </p>
        </div>

        <h2>📚 Asignaturas</h2>
        <h3>Espacios académicos del programa</h3>

        <p>
          En esta sección encontrarás las asignaturas que conforman el plan de estudios de la
          <strong>Especialización en Big Data</strong>.
        </p>

        <p>
          Cada curso dispone de un espacio propio donde podrás consultar:
        </p>

        <ul>
          <li>Información de la asignatura.</li>
          <li>Contenidos temáticos.</li>
          <li>Bibliografía recomendada.</li>
          <li>Herramientas y software utilizados.</li>
          <li>Materiales académicos.</li>
          <li>Recursos complementarios.</li>
        </ul>

        <p>
          Selecciona una asignatura para acceder a sus contenidos específicos.
        </p>

        <h2>🔗 Enlaces rápidos</h2>
        <h3>Accesos de interés para estudiantes</h3>

        <p>
          Esta sección reúne enlaces institucionales y herramientas de uso frecuente que apoyan el desarrollo de las actividades académicas de la especialización.
        </p>

        <p>
          Aquí podrás encontrar accesos a:
        </p>

        <ul>
          <li>Plataformas académicas institucionales.</li>
          <!-- <li>Correo institucional.</li> -->
          <!-- <li>Biblioteca digital.</li> -->
          <!-- <li>Repositorios académicos.</li> --> 
          <li>Herramientas colaborativas.</li>
          <li>Recursos tecnológicos y servicios de apoyo.</li>
        </ul>


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
      <img src="Images/iupb_logo.png" alt="Logo" class="profile-img" width="700">
      <p class="eyebrow">Bienvenido/a 👋</p>
      <h1>Big Data Hub</h1>
      <h2>Repositorio general de la Especialización en Big Data</h2>
      <p class="description">
        Este sitio reúne en un solo lugar los recursos académicos de la Especialización en Big Data. Aquí podrás consultar información general del programa, 
        documentos institucionales, herramientas de apoyo y contenidos específicos de cada asignatura. A través de este portal tendrás acceso organizado a 
        materiales de estudio, bibliografía recomendada, actividades, datasets, guías y otros recursos que fortalecerán tu formación en analítica de datos,
        inteligencia artificial y tecnologías asociadas al ecosistema Big Data.
      </p>
      <div class="hero-actions">
        <a class="btn primary" onclick="loadContact()" target="_blank">Contacto</a>
        <!--
        <a class="btn primary" href="https://classroom.google.com/" target="_blank">Classroom</a>
        <a class="btn secondary" href="https://colab.research.google.com/" target="_blank">Google Colab</a>
        <a class="btn secondary" href="https://www.kaggle.com/datasets" target="_blank">Datasets</a>
         -->
      </div>
    </section>

    <section class="overview">
      <h2>🧭 ¿Cómo está organizado?</h2>
      <div class="overview-grid">
        <div class="info-card">
          <h3>📌 Información general</h3>
          <p>Presentación del Hub e información del programa.</p>
          <!-- <span>Hub Programa Ruta</span> -->
        </div>
        <div class="info-card">
          <h3>🎓 Asignaturas</h3>
          <p>Espacios con información específica de cada curso, recursos bibliográficos, herramientas de programación entre otros</p>
          <!-- <span>README.md Cursos Recursos</span> -->
        </div>
        <div class="info-card">
          <h3>🔗 Enlaces rápidos</h3>
          <p>Accesos directos a plataformas de trabajo como Classroom, SICAU y microsito posgrados</p>
          <!-- <span>Classroom Colab GitHub</span> -->
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
          <p> </p>
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
    <!-- 
    <section class="contact-card">
      <h1>📬 Información de contacto</h1>
      <h3><strong>Coordinador de programa:</strong> Ruben D. Fonnegra</h3>
      <p><strong>Email:</strong> <a href="mailto:ruben.fonnegra@pascualbravo.edu.co">ruben.fonnegra@pascualbravo.edu.co</a></p>
      <p><strong>Sitio web:</strong> <a href="https://rubenfonnegra.github.io/" target="_blank">https://rubenfonnegra.github.io/</a></p>
      <div class="resource-buttons">
        <a class="btn primary" href="mailto:ruben.fonnegra@pascualbravo.edu.co">Enviar email</a>
        <a class="btn secondary" href="https://github.com/rubenfonnegra" target="_blank">GitHub</a>
      </div>
    </section>
    -->

    <section class="contact-section">
      <h1>📬 Información de contacto</h1>
        <div class="contact-grid">

          <div class="contact-card">
            <h2><strong>Coordinador de programa:</strong> Ruben D. Fonnegra</h2>
            <p>Información académica del programa.</p>
            <p><strong>Email:</strong> <a href="mailto:ruben.fonnegra@pascualbravo.edu.co">ruben.fonnegra@pascualbravo.edu.co</a></p>
            <div class="resource-buttons">
              <a class="btn primary" href="mailto:ruben.fonnegra@pascualbravo.edu.co">Enviar email</a>
              <a class="btn secondary" href="https://github.com/rubenfonnegra" target="_blank">GitHub</a>
              <a class="btn secondary" href="https://rubenfonnegra.github.io/" target="_blank">Sitio web</a>
            </div>
          </div>

          <div class="contact-card">
            <h3>🎓 Departamento de Posgrados</h3>
            <p>Información general de los programas de posgrado.</p>

            <a href="mailto:posgrados@pascualbravo.edu.co">
              posgrados@pascualbravo.edu.co
            </a>
            <div class="resource-buttons">
              <a class="btn primary" href="mailto:posgrados@pascualbravo.edu.co">Enviar email</a>
            </div>
          </div>

          <div class="contact-card">
            <h3>📝 Trabajo de Grado Posgrados</h3>
            <p>Consultas relacionadas con modalidades, procedimientos y seguimiento de trabajos de grado.</p>

            <a href="mailto:trabajodegradoposgrados@pascualbravo.edu.co">
              trabajodegradoposgrados@pascualbravo.edu.co
            </a>
            <div class="resource-buttons">
              <a class="btn primary" href="mailto:trabajodegradoposgrados@pascualbravo.edu.co">Enviar email</a>
            </div>
          </div>

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
