
## Presentación

Aquí puedes escribir la presentación general de la asignatura, su propósito dentro de la Especialización en Big Data y la forma como se articula con el programa.

## Información del curso
<!-- 
| Elemento | Descripción |
|---|---|
| <b>Nombre de la asignatura</b> | Inteligencia Computacional |
| <b>Docente</b> | Ruben D. Fonnegra |
| <b>Créditos</b> | 4 |
| <b>Hrs de trabajo presencial</b> | 4 |
| <b>Hrs de trabajo independiente</b> | 8 |
| <b>Semestre</b> | 1 | 
-->

<div class="course-info">

  <div class="course-item">
    <span class="label">📘 Asignatura</span>
    <span class="value">Inteligencia Computacional (Optativa 1)</span>
  </div>

  <div class="course-item">
    <span class="label">👨‍🏫 Docente</span>
    <span class="value">Ruben D. Fonnegra</span>
  </div>

  <div class="course-item">
    <span class="label">🎓 Créditos</span>
    <span class="value">4</span>
  </div>

  <div class="course-item">
    <span class="label">🏫 Trabajo presencial</span>
    <span class="value">4 horas</span>
  </div>

  <div class="course-item">
    <span class="label">📚 Trabajo independiente</span>
    <span class="value">8 horas</span>
  </div>

  <div class="course-item">
    <span class="label">📅 Semestre</span>
    <span class="value">1</span>
  </div>

</div>


## Herramientas

- Python
- Google Colab
- Jupyter Lab
- GitHub
- Datasets abiertos



## 🗃️ Datasets útiles

| Título | Tarea | Data format | Link |
|---|---|---|---|
| Fruits dataset | Clasificación | ```.csv``` | [Link](https://drive.google.com/file/d/1M8tiAWDZclABJN1Meq9oEHCLJTNyHdpP/view)
| Malaria cells | Clasificación | ```.png``` | [Link](https://drive.google.com/file/d/1tCa6MHRUM34pv0wwDBsRkpFqMIZPk6iO/view?usp=drive_link)
| Noisy captchas | Clasificación | ```.png``` | [Link](https://drive.google.com/file/d/1EyZiqMovGI0lZ_uawxAOoGcKm9CBy0kM/view?usp=drive_link)
| Houses in Iowa | Regresión | ```.csv``` | [Link](https://drive.google.com/file/d/1BnTVOkFwRxT0wTKdfkbKF26R4iEKKshJ/view?usp=sharing)
| Natural images | Regresión | ```.png``` | [Link](https://drive.google.com/file/d/1hF7a-tBXWm9efkG8yi5T-Yh58V2F5icH/view?usp=drive_link)
| Heart stroke dataset | Regresión | ```.csv``` | [Link](https://drive.google.com/file/d/1JNtrwHJukzeK6l5ljvUgB8_8yESZ_qDK/view?usp=drive_link)
| Customer segmentation | Clasificación / Clustering  | ```.csv``` | [Link](https://drive.google.com/file/d/1omMtaPEQRilZzTRYqBM5VXU5oXl2BMG9/view?usp=sharing)
| Product recommendation| Clasificación / Clustering  | ```.csv``` | [Link](https://drive.google.com/file/d/14V61wky2xXsYwD62EdOfv0AJvH89MG0F/view?usp=sharing)


### Recursos de datasets libres

- [Kaggle Datasets](https://www.kaggle.com/datasets)
- [UCI machine learning](https://archive-ics-uci-edu.translate.goog/?_x_tr_sch=http&_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc)
- [Google dataset search](https://datasetsearch.research.google.com/)
- [Mendeley data](https://data.mendeley.com/)
- [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets)
- [Open data AWS](https://registry.opendata.aws/)
- [Datos abiertos Colombia](https://www.datos.gov.co/)




## 🗃️ Paquetes y librerías


### Docker environment
A preconfigured environment has been provided to ensure that all code runs with the correct dependencies. This helps maintain reproducibility and avoids issues related to package versions or system configuration. To use this environment, you must first install Docker. You can follow the official installation guide here: 

[https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

Once Docker is installed, download the container image by running the containers

List of containers: 


| Name | Description | Download | Run |
|---|---|---|---|
| ```jupyter-ml-docker```| Jupyter server running essential ML libraries and dependencies | ```docker pull rubenfonnegra/jupyter-ml-docker``` | ```docker run -p 8888:8888 rubenfonnegra/jupyter-ml-docker``` |
|```sem-db-docker```| Jupyter server running libraries for basic data analysis | ```docker pull rubenfonnegra/sem-db-docker``` | ```docker run -p 8888:8888 rubenfonnegra/sem-db-docker``` |
|```pytorch_docker_r```| Jupyter server running pytorch with GPU support | ```docker pull rubenfonnegra/pytorch_docker_r``` | ```docker run -it --rm rubenfonnegra/pytorch_docker_r /bin/bash``` |


NOTE: JupyterLab instances are accessible from your browser. From there, you can upload the notebook files and execute the code within the prepared environment. Once the container is running, open the URL shown in the terminal to open your browser and navigate through the files. 



## Bibliografía

- Burkov, A. (2019). The hundred-page machine learning book (Vol. 1, p. 32). Quebec City, QC, Canada: Andriy Burkov.
- González Duque, R. (2014). Python para todos.
- Kubat, M. (2017). An introduction to machine learning (2nd ed.). Cham: Springer. doi:10.1007/978-3-319-20010-1
- Maini, V., & Sabri, S. (2023). Machine Learning For Humans (6 X 9): Introduction to Machine Learning with Python. Alanna Maldonado. 
- Mueller, J. P., & Massaron, L. (2021). Machine learning for dummies. John Wiley & Sons.
- Ortega Candel, José Manuel. Big data, machine learning y data science en Python . Bogotá : Ediciones de la U Ra-ma, 2023 406 p.
- Pérez Castaño, Arnaldo. Python fácil . México : Alfaomega, 2017 271p.
- Raschka, S., & Mirjalili, V. (2019). Python machine learning: Machine learning and deep learning with Python, scikit-learn, and TensorFlow 2. Packt publishing ltd.
