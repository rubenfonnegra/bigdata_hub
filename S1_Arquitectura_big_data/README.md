# Semana 1: Introducción y repositorio

## 🎯 Objetivos

- Reconocer la estructura general del curso.
- Explorar el repositorio de trabajo.
- Comprender conceptos iniciales de aprendizaje de máquinas.

## 📌 Temas

- Introducción al curso.
- Repositorio de GitHub.
- Notebooks de Jupyter.
- Conceptos básicos de aprendizaje de máquinas.

## 🧠 Actividad

Revisa el notebook de la semana y ejecuta las primeras celdas.


Title: Aprendizaje de máquinas - Presencial - AEAE 1: Preparándome para aprender

URL Source: http://sites.google.com/pascualbravo.edu.co/aprendizaje-de-mquinas-presenc/inicio/aeae-1-prepar%C3%A1ndome-para-aprender?authuser=0

##  Markdown Content:
![Image 1](https://lh3.googleusercontent.com/sitesv/AA5AbUCMjrEPb_g8YS5j3of-PKEbmPxhE5TwOtTLYRU09eXLemHpEUVRlrUoIvNnzb_HZroXf_WhLZBHGctTp3NLbPy5HGI1mXT43-2_nPfN2GyA2K_Zh7_x_1tjhm0j6K5FYxMfn01aJa-b4sxWorLCqwaczIbDdEAIcWHtw7gcpc5t3eV5GEPGfWU9Dy1BO1kRwdOmc49Dyx-q6sRtzXv9pBSVq_n0an7caXtv=w1280)

Propósito

Esta Actividad de EAE le permitirá prepararse para aprender las competencias establecidas para este Módulo Académico de Aprendizaje – MAA.

### Contenidos

## Sección 1 - Introducción a Python

### Antes de....

Algunos conceptos sobre el lenguaje de programación de Python....

![Image 2](https://www.google.com/images/icons/product/drive-32.png)Python_para_todos.pdf

### Y como comenzar con el IDE?

Recuerden que para programar en cualquier lenguaje de programación requerimos al menos el compilador y un editor de texto. Muchos desarrolladores publican versiones de software para desarrollar en las que integran el compilador deseado y algunas herramientas adicionales, útiles a la hora de realizar nuestros códigos. A continuación, veamos algunas de las opciones más fáciles y rápidas con las que podemos contar para programar en Python.

OPCIÓN 1 - ¿MACHINE LEARNING EN LA NUBE? GOOGLE COLABORATORY CON GPU

Por increíble que parezca, ahora mismo tenemos disponible una cuenta gratuita para programar nuestros modelos de Machine Learning en la nube con Python y Jupyter Notebooks, de manera remota, desde nuestro navegador, sólo con una cuenta de Google y hasta con GPU para poder aumentar nuestro poder de procesamiento.

¿Qué es Colaboratory?

Colab te permite ejecutar y programar en Python en tu navegador, con

- No requiere configuración

- Acceso gratuito a GPUs

- Compartir fácilmente

Colab puede facilitar tu trabajo, ya seas un alumno, un científico de datos o un investigador de IA. Para conocer más detalles sobre el uso de Google Colab puedes comenzar viendo el video de introducción. También puedes acceder al [tutorial en Jupyter Notebook de Colab](https://colab.research.google.com/notebooks/intro.ipynb#scrollTo=5fCEDCU_qrC0)

OPCIÓN 2 - VISUAL STUDIO CODE o VISUAL STUDIO

Python está disponible también para algunos reconocidos IDEs de programación que algunos de ustedes conocerán y que corren de manera fluída en Windows, Linux o MAC. Entre ellos, se encuentran Visual Studio y Visual Studio Code. Pueden hacer provecho de estos IDEs para programar en Python, instalando varios complementos. A continuación, algunos recursos para configurar sus IDEs para trabajar sobre Python.

Visual studio + Python

Visual studio Code + Python

ENTORNOS VIRTUALES

Un entorno de desarrollo virtual python o simplemente entorno virtual python es un mecanismo que me permite gestionar programas y paquetes python sin tener permisos de administración, es decir, cualquier usuario sin privilegios puede tener uno o más "espacios aislados" (ya veremos más adelante que los entornos virtuales se guardan en directorios) donde poder instalar distintas versiones de programas y paquetes python.

¿Para qué se usan los entornos virtuales?

Puede haber varios motivos en que su uso es conveniente e incluso necesario:

*   Podemos tener necesidad de utilizar versiones de paquetes python que no son las que vienen empaquetadas oficialmente en nuestra distribución linux. En este caso sería necesario la utilización de un entorno virtual.

*   En el caso del desarrollo y despliegue de aplicaciones web, cada vez es más importante acercar los entornos de desarrollo, prueba y producción, es decir, que estos tres entornos sean los más parecidos posible, para no tener "sorpresas" a la hora de desplegar la aplicación en producción. Utilizando entornos virtuales conseguimos que las dependencias entre paquetes que necesita nuestra aplicación estén satisfechas en todos los entornos, además es muy sencillo distribuir la configuración del entorno virtual, así como automatizar su creación, entre los distintos miembros del equipo de trabajo, consiguiendo que todos trabajen bajo el mismo escenario.

*   Los ciclos de desarrollo de aplicaciones modernos en lenguajes como python son cada vez más rápidos, esto puede suponer que en una misma máquina podamos tener aplicaciones que utilicen diferentes dependencias y versiones de un mismo paquete. Por ejemplo, podemos tener dos aplicaciones web en producción, una que esté desarrollada con django 1.8 y otra con django 1.10. En este caso es imprescindible la utilización de entornos virtuales diferenciados, que sean la base de cada aplicación.

Para crear los entornos virtuales vamos a usar el programa virtualenv o el módulo venv y para instalar paquetes python vamos a usar el programa pip. En el [siguiente enlace](https://docs.python.org/es/3/tutorial/venv.html)encontrarán más información sobre virtualenv.

![Image 3](https://lh3.googleusercontent.com/sitesv/AA5AbUDjyuHdKQl1VIIWVUTlP4blqUWmOB9tsgFv7-xDDF85DDs9qbuaSnaHFAUtIBHys9ukM2m0RjMEpbANGVtnpxBd2FNro-haiVnB6tXLqpEUaWUl1Qj2if-2yG53A1kY0THOZtqYFLfZxGjQMrbIlFo-5Bp4Id79jrL-mUNTWhKFgAoTU-2PwB_mvxzPR_jYBpV_n8_be7MJWoUqBcaASF00lyQu0fVYTNd8cnI=w1280)

### Iniciación en Python

Una vez listo nuestro entorno de trabajo, estarémos listos para trabajar en el lenguaje de programación, así que repasaremos algunas estructuras básicas.

Contrario a otros lenguajes existen algunas diferencias significativas de Python con respecto a otros lenguajes de programación. El uso de punto y coma ( ; ), llaves ( { } ), parentesis, punteros, el clásico main, corchetes ( [ ] ), entre otros. Para conocer más detalles sobre esto, analice el código presentado a continuación, y revise también la clase 1 de la asignatura, en la cual el docente explicará y brindará ejemplos sobre cómo operar estas estructuras en Python.

![Image 4](https://lh3.googleusercontent.com/sitesv/AA5AbUBOzo_i4N9bjtKiFh9dE72BmqEvyFTKoBwuFJ8KPB-7EpjgNVj6VTRoyBYyjNOmqWPdZ5YNCR2DNUt8yJPeJMQ9aio4WqZKEs17M39EZXLMvE1Gj3yw3PAL7KAKV7f889dj86YzgKxaQl1qiRYLCTrcM9pa4hE-JPvMO56h_9Qr3Rn3hvhOU1SmDuzCEPXfAvbsQf26TRcQT-sgLuKfQnuqsLtpssxF039N=w1280)

### Github - Controlando tus versiones

El control de versiones es un sistema que ayuda a rastrear y gestionar los cambios realizados en un archivo o conjunto de archivos. Utilizado principalmente por ingenieros de software para hacer un seguimiento de las modificaciones realizadas en el código fuente, el sistema de control de versiones les permite analizar todos los cambios y revertirlos sin repercusiones si se comete un error.

En otras palabras, el control de versiones permite a los desarrolladores trabajar en proyectos simultáneamente. Les permite hacer tantos cambios como necesiten sin infringir o retrasar el trabajo de sus colegas. Si esos cambios en el código fuente arruinan el proyecto cuando se implementan, GitHub hace que sea fácil revertirlos con unos pocos clics, y se recuperará la versión anterior del proyecto.

En la actualidad, GitHub es la plataforma de gestión y organización de proyectos basada en la nube más popular en el mundo que incorpora las funciones de control de versiones de Git. Es decir que todos los usuarios de GitHub pueden rastrear y gestionar los cambios que se realizan en el código fuente en tiempo real, a la vez que tienen acceso a todas las demás funciones de Git disponibles en el mismo lugar.

Además, la interfaz de usuario de GitHub es más fácil de usar que la de Git, lo que la hace accesible para personas con pocos o ningún conocimiento técnico. Esto significa que se puede incluir a más miembros del equipo en el progreso y la gestión de un proyecto, haciendo que el proceso de desarrollo sea más fluido.

Para comenzar a usar Github necesitarás realizar y completar algunos procedimientos. Aquí hay algunos enlaces que sean de tu utilidad

*   [Registrarse / Crear cuenta](https://docs.github.com/es/get-started/signing-up-for-github/signing-up-for-a-new-github-account)

*   [Configuración de usuarios](https://docs.github.com/es/get-started/getting-started-with-git/setting-your-username-in-git) y creación de [tokens de seguridad](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

*   Configurar [repositorios remotos](https://docs.github.com/es/get-started/getting-started-with-git/about-remote-repositories)

*   Lenguaje de [markdown](https://github.com/skills/communicate-using-markdown)

*   Trabajando con [bifurcaciones (forks)](https://docs.github.com/es/get-started/quickstart/contributing-to-projects)

### ¡Muy bien! Ha terminado todo lo relacionado con el inicio del módulo. Ahora siga avanzando con el estudio de la [[unidad didáctica 1](https://sites.google.com/pascualbravo.edu.co/plantilla-modulos/unidad-did%C3%A1ctica-1)]


<!-- r.jina.ai/ -->