/* ============================= */
/* BIG DATA HUB - DATA */
/* ============================= */

const sections = {
  overview: {
    badge: "📌 Información general",
    title: "¿Qué es Big Data Hub?",
    subtitle: "Un sitio de consulta para centralizar información, bibliografía, herramientas y recursos de la especialización en Big Data.",
    html: `
      <h2>Propósito del sitio</h2>
      <p>
        <strong>Big Data Hub</strong> funciona como un repositorio académico y práctico para estudiantes y docentes de la especialización. Aquí se pueden reunir enlaces, lecturas, datasets, guías, notebooks, herramientas digitales y materiales de apoyo.
      </p>

      <div class="callout">
        <strong>Idea central:</strong> que el estudiante tenga un solo punto de acceso para explorar el ecosistema de Big Data, preparar clases, consultar bibliografía y desarrollar prácticas aplicadas.
      </div>

      <h2>Secciones principales</h2>
      <ul>
        <li><strong>Información general:</strong> presentación del programa, ruta de trabajo y orientaciones.</li>
        <li><strong>Bibliografía:</strong> libros, artículos, papers y repositorios académicos.</li>
        <li><strong>Herramientas:</strong> Python, notebooks, bases de datos, visualización, cloud y frameworks.</li>
        <li><strong>Recursos:</strong> datasets, plantillas, glosario y enlaces útiles.</li>
      </ul>
    `
  },

  program: {
    badge: "🎓 Especialización",
    title: "Sobre la especialización en Big Data",
    subtitle: "Una ruta de formación orientada al análisis, procesamiento, visualización y aprovechamiento estratégico de grandes volúmenes de datos.",
    html: `
      <h2>Enfoque formativo</h2>
      <p>
        La especialización en Big Data busca fortalecer competencias para comprender, gestionar y analizar datos en contextos organizacionales, científicos, tecnológicos e industriales.
      </p>

      <h2>Competencias que puede apoyar este Hub</h2>
      <ul>
        <li>Comprensión de conceptos fundamentales de Big Data y analítica.</li>
        <li>Uso de herramientas de programación, procesamiento y visualización de datos.</li>
        <li>Consulta crítica de literatura académica y documentación técnica.</li>
        <li>Desarrollo de prácticas con notebooks, datasets y casos aplicados.</li>
        <li>Reconocimiento de implicaciones éticas, sociales y organizacionales del uso de datos.</li>
      </ul>
    `
  },

  methodology: {
    badge: "🧭 Ruta de trabajo",
    title: "Ruta sugerida para usar el Hub",
    subtitle: "Una secuencia simple para estudiar, practicar y aplicar los recursos disponibles.",
    html: `
      <h2>Ruta recomendada</h2>
      <div class="table-wrapper">
        <table class="resource-table">
          <thead>
            <tr>
              <th>Momento</th>
              <th>Acción sugerida</th>
              <th>Producto esperado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antes de clase</td>
              <td>Revisar lecturas, conceptos clave y videos introductorios.</td>
              <td>Preguntas, notas y vocabulario técnico.</td>
            </tr>
            <tr>
              <td>Durante la clase</td>
              <td>Trabajar notebooks, ejercicios guiados y discusión de casos.</td>
              <td>Prácticas desarrolladas y participación activa.</td>
            </tr>
            <tr>
              <td>Después de clase</td>
              <td>Consultar bibliografía, datasets y recursos complementarios.</td>
              <td>Evidencias, análisis y avances de proyecto.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  books: {
    badge: "📚 Bibliografía",
    title: "Libros base",
    subtitle: "Textos recomendados para fortalecer bases conceptuales, técnicas y aplicadas.",
    html: `
      <h2>Bibliografía inicial sugerida</h2>
      <ul>
        <li><strong>Designing Data-Intensive Applications</strong> — Martin Kleppmann.</li>
        <li><strong>Big Data: Principles and Best Practices</strong> — Nathan Marz & James Warren.</li>
        <li><strong>Python for Data Analysis</strong> — Wes McKinney.</li>
        <li><strong>Data Science from Scratch</strong> — Joel Grus.</li>
        <li><strong>Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow</strong> — Aurélien Géron.</li>
      </ul>

      <div class="callout">
        Puedes convertir esta sección en una lista con enlaces a la biblioteca institucional, bases de datos académicas o recursos abiertos.
      </div>
    `
  },

  papers: {
    badge: "🧾 Papers",
    title: "Artículos y papers recomendados",
    subtitle: "Una sección para reunir literatura científica y técnica relacionada con Big Data, analítica, IA y transformación digital.",
    html: `
      <h2>Categorías sugeridas</h2>
      <ul>
        <li><strong>Big Data architectures:</strong> arquitecturas Lambda, Kappa, data lakes y lakehouses.</li>
        <li><strong>Data analytics:</strong> analítica descriptiva, predictiva y prescriptiva.</li>
        <li><strong>Machine learning:</strong> modelos supervisados, no supervisados y aprendizaje profundo.</li>
        <li><strong>Data governance:</strong> calidad, seguridad, privacidad y gobierno del dato.</li>
        <li><strong>Ethics and AI:</strong> sesgos, explicabilidad, transparencia y responsabilidad algorítmica.</li>
      </ul>
    `
  },

  repositories: {
    badge: "🔎 Repositorios",
    title: "Repositorios académicos y documentación",
    subtitle: "Fuentes para consultar literatura, documentación técnica y recursos abiertos.",
    html: `
      <div class="card-grid">
        <div class="resource-card">
          <h3>Google Scholar</h3>
          <p>Búsqueda académica de artículos, libros, capítulos y citaciones.</p>
          <a class="btn secondary" href="https://scholar.google.com/" target="_blank">Abrir</a>
        </div>
        <div class="resource-card">
          <h3>IEEE Xplore</h3>
          <p>Artículos técnicos en ingeniería, computación, datos e inteligencia artificial.</p>
          <a class="btn secondary" href="https://ieeexplore.ieee.org/" target="_blank">Abrir</a>
        </div>
        <div class="resource-card">
          <h3>ACM Digital Library</h3>
          <p>Investigación en ciencias de la computación, sistemas y tecnología.</p>
          <a class="btn secondary" href="https://dl.acm.org/" target="_blank">Abrir</a>
        </div>
      </div>
    `
  },

  tools: {
    badge: "🧰 Herramientas",
    title: "Ecosistema Big Data",
    subtitle: "Herramientas frecuentes para almacenamiento, procesamiento, análisis y visualización de datos.",
    html: `
      <div class="table-wrapper">
        <table class="resource-table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Herramientas</th>
              <th>Uso principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Programación</td>
              <td>Python, R, SQL</td>
              <td>Análisis, consulta, automatización y modelado.</td>
            </tr>
            <tr>
              <td>Procesamiento distribuido</td>
              <td>Apache Spark, Hadoop</td>
              <td>Procesamiento de grandes volúmenes de datos.</td>
            </tr>
            <tr>
              <td>Visualización</td>
              <td>Power BI, Tableau, Looker Studio, Matplotlib, Plotly</td>
              <td>Exploración visual, dashboards e informes.</td>
            </tr>
            <tr>
              <td>Bases de datos</td>
              <td>PostgreSQL, MongoDB, BigQuery, Cassandra</td>
              <td>Almacenamiento, consulta y gestión de datos.</td>
            </tr>
            <tr>
              <td>Cloud</td>
              <td>AWS, Azure, Google Cloud</td>
              <td>Infraestructura, almacenamiento y servicios escalables.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  python: {
    badge: "🐍 Python",
    title: "Python y notebooks",
    subtitle: "Recursos para trabajar análisis de datos, visualización, machine learning y experimentación reproducible.",
    html: `
      <h2>Herramientas recomendadas</h2>
      <ul>
        <li><strong>Google Colab:</strong> notebooks en la nube sin instalación local.</li>
        <li><strong>Jupyter Notebook:</strong> entorno interactivo para análisis y documentación.</li>
        <li><strong>Pandas:</strong> manipulación y limpieza de datos tabulares.</li>
        <li><strong>NumPy:</strong> operaciones numéricas y arreglos multidimensionales.</li>
        <li><strong>Scikit-learn:</strong> modelos clásicos de machine learning.</li>
        <li><strong>Matplotlib / Plotly:</strong> visualización de datos.</li>
      </ul>

      <div class="resource-buttons">
        <a class="btn primary" href="https://colab.research.google.com/" target="_blank">Abrir Colab</a>
        <a class="btn secondary" href="https://jupyter.org/" target="_blank">Jupyter</a>
        <a class="btn secondary" href="https://pandas.pydata.org/" target="_blank">Pandas</a>
      </div>
    `
  },

  cloud: {
    badge: "☁️ Cloud",
    title: "Cloud y plataformas",
    subtitle: "Servicios útiles para almacenamiento, procesamiento, analítica y despliegue de soluciones de datos.",
    html: `
      <div class="card-grid">
        <div class="resource-card">
          <h3>Google Cloud</h3>
          <p>BigQuery, Cloud Storage, Vertex AI y servicios de analítica.</p>
          <a class="btn secondary" href="https://cloud.google.com/" target="_blank">Abrir</a>
        </div>
        <div class="resource-card">
          <h3>Microsoft Azure</h3>
          <p>Azure Data Factory, Synapse Analytics, Machine Learning y Power BI.</p>
          <a class="btn secondary" href="https://azure.microsoft.com/" target="_blank">Abrir</a>
        </div>
        <div class="resource-card">
          <h3>AWS</h3>
          <p>S3, Glue, EMR, Redshift, SageMaker y servicios de datos.</p>
          <a class="btn secondary" href="https://aws.amazon.com/" target="_blank">Abrir</a>
        </div>
      </div>
    `
  },

  datasets: {
    badge: "📊 Datasets",
    title: "Datasets para prácticas",
    subtitle: "Fuentes abiertas para desarrollar ejercicios, proyectos y análisis exploratorios.",
    html: `
      <div class="card-grid">
        <div class="resource-card">
          <h3>Kaggle Datasets</h3>
          <p>Datasets públicos para ciencia de datos, visualización y machine learning.</p>
          <a class="btn secondary" href="https://www.kaggle.com/datasets" target="_blank">Abrir</a>
        </div>
        <div class="resource-card">
          <h3>Google Dataset Search</h3>
          <p>Buscador especializado para encontrar conjuntos de datos abiertos.</p>
          <a class="btn secondary" href="https://datasetsearch.research.google.com/" target="_blank">Abrir</a>
        </div>
        <div class="resource-card">
          <h3>Datos Abiertos Colombia</h3>
          <p>Portal de datos públicos para análisis de contexto nacional.</p>
          <a class="btn secondary" href="https://www.datos.gov.co/" target="_blank">Abrir</a>
        </div>
      </div>
    `
  },

  templates: {
    badge: "📄 Plantillas",
    title: "Plantillas y guías de trabajo",
    subtitle: "Materiales reutilizables para reportes, análisis, proyectos y presentaciones.",
    html: `
      <h2>Plantillas sugeridas</h2>
      <ul>
        <li><strong>Plantilla de reporte de análisis exploratorio:</strong> problema, datos, limpieza, visualizaciones y hallazgos.</li>
        <li><strong>Plantilla de proyecto Big Data:</strong> contexto, arquitectura, herramientas, resultados y limitaciones.</li>
        <li><strong>Checklist de calidad de datos:</strong> completitud, consistencia, duplicados, valores atípicos y trazabilidad.</li>
        <li><strong>Guía de presentación ejecutiva:</strong> problema, insight principal, evidencia visual y recomendación.</li>
      </ul>

      <div class="callout">
        Puedes enlazar aquí documentos de Google Docs, presentaciones, hojas de cálculo o archivos descargables.
      </div>
    `
  },

  glossary: {
    badge: "🔤 Glosario",
    title: "Glosario básico de Big Data",
    subtitle: "Conceptos clave para estudiantes que se están familiarizando con el ecosistema de datos.",
    html: `
      <div class="table-wrapper">
        <table class="resource-table">
          <thead>
            <tr>
              <th>Término</th>
              <th>Definición breve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Big Data</strong></td>
              <td>Conjunto de datos de gran volumen, variedad y velocidad que requiere herramientas especializadas para su gestión y análisis.</td>
            </tr>
            <tr>
              <td><strong>Data Lake</strong></td>
              <td>Repositorio que almacena datos estructurados, semiestructurados y no estructurados en su formato original.</td>
            </tr>
            <tr>
              <td><strong>ETL</strong></td>
              <td>Proceso de extracción, transformación y carga de datos.</td>
            </tr>
            <tr>
              <td><strong>Pipeline</strong></td>
              <td>Secuencia automatizada de pasos para mover, limpiar, transformar o analizar datos.</td>
            </tr>
            <tr>
              <td><strong>Dashboard</strong></td>
              <td>Visualización interactiva de indicadores, métricas y resultados clave.</td>
            </tr>
            <tr>
              <td><strong>Machine Learning</strong></td>
              <td>Área de la inteligencia artificial que permite construir modelos capaces de aprender patrones desde los datos.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
};

/* ============================= */
/* LOADERS */
/* ============================= */

function loadHome() {
  document.getElementById("content").innerHTML = `
    <section class="hero">
      <p class="eyebrow">Bienvenido/a 👋</p>

      <h1>Big Data Hub</h1>
      <h2>Repositorio general de la Especialización en Big Data</h2>

      <p class="description">
        Este sitio reúne información general, bibliografía, herramientas, datasets, plantillas y recursos de apoyo para acompañar los procesos académicos de la especialización.
      </p>

      <div class="hero-actions">
        <a class="btn primary" href="https://classroom.google.com/" target="_blank">Classroom</a>
        <a class="btn secondary" href="https://colab.research.google.com/" target="_blank">Google Colab</a>
        <a class="btn secondary" href="https://www.kaggle.com/datasets" target="_blank">Datasets</a>
      </div>
    </section>

    <section class="overview">
      <h2>🧭 ¿Qué encontrarás aquí?</h2>

      <div class="overview-grid">
        <div class="info-card">
          <h3>📚 Bibliografía</h3>
          <p>Libros, artículos, papers y repositorios para profundizar en Big Data, analítica, IA y gobierno del dato.</p>
          <div class="tag-row">
            <span class="tag">Books</span>
            <span class="tag">Papers</span>
            <span class="tag">Research</span>
          </div>
        </div>

        <div class="info-card">
          <h3>🧰 Herramientas</h3>
          <p>Accesos y orientaciones sobre Python, notebooks, bases de datos, visualización, cloud y procesamiento distribuido.</p>
          <div class="tag-row">
            <span class="tag">Python</span>
            <span class="tag">Spark</span>
            <span class="tag">Cloud</span>
          </div>
        </div>

        <div class="info-card">
          <h3>📦 Recursos</h3>
          <p>Datasets, glosarios, plantillas y guías para apoyar prácticas, proyectos y presentaciones académicas.</p>
          <div class="tag-row">
            <span class="tag">Datasets</span>
            <span class="tag">Templates</span>
            <span class="tag">Guides</span>
          </div>
        </div>
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
}

function loadSection(sectionKey) {
  const section = sections[sectionKey];

  if (!section) {
    document.getElementById("content").innerHTML = `
      <section class="error-card">
        <h2>⚠️ Sección no encontrada</h2>
        <p>Revisa el nombre de la sección en el archivo <code>script.js</code>.</p>
      </section>
    `;
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

function loadMarkdown({ title, mdFile }) {
  fetch(mdFile)
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el Markdown");
      }
      return response.text();
    })
    .then(text => {
      document.getElementById("content").innerHTML = `
        <section class="section-header">
          <span class="section-badge">📄 Markdown</span>
          <h1>${title}</h1>
          <p>Contenido cargado desde archivo Markdown.</p>
        </section>

        <section class="content-card">
          ${marked.parse(text)}
        </section>
      `;
      window.scrollTo(0, 0);
    })
    .catch(() => {
      document.getElementById("content").innerHTML = `
        <section class="error-card">
          <h2>⚠️ Error al cargar el contenido</h2>
          <p>Revisa que el archivo exista en la ruta:</p>
          <code>${mdFile}</code>
        </section>
      `;
    });
}

function loadViewer({ title, subtitle, url, buttonLabel = "Abrir recurso" }) {
  document.getElementById("content").innerHTML = `
    <section class="section-header">
      <span class="section-badge">🔗 Recurso externo</span>
      <h1>${title}</h1>
      <p>${subtitle}</p>
    </section>

    <section class="viewer-section">
      <div class="section-title">
        <h2>Vista integrada</h2>
        <p>Si el recurso no carga dentro de la página, puedes abrirlo en una nueva pestaña.</p>
      </div>

      <div class="frame-wrapper">
        <iframe class="site-viewer" src="${url}"></iframe>
      </div>

      <div class="resource-buttons">
        <a class="btn primary" href="${url}" target="_blank">${buttonLabel}</a>
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
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

loadHome();
