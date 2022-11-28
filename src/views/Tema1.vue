<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Investigación analítica del accidente de tránsito
    p.mb-5(data-aos='fade-right') La investigación analítica del accidente de tránsito busca que un experto con idoneidad y experiencia, evalué bajo qué condiciones ocurrió un accidente de tránsito, dando su concepto respecto a los factores determinantes y contribuyentes del hecho, utilizando la física forense como herramienta para calcular velocidades y trayectorias de los participantes, proponiendo una posible dinámica y teoría del caso de lo ocurrido a partir de su análisis.
      br
      br
      |La investigación analítica implica la realización del informe pericial de reconstrucción del accidente de tránsito, cumpliendo con los principios de la criminalística que se destacan a continuación:
    img(src='@/assets/curso/temas/tema1/1.svg', alt='').mb-5
    .d-flex.justify-content-center.d-lg-none.mb-5
      a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
          span Ampliar imagen 
          i.fas.fa-search
    ModalA(:abrir-modal.sync="modal1")
      img(src='@/assets/curso/temas/tema1/1.svg', alt='').mb-5
    .tarjeta.p-5(style="background-color: #FFF6E9")
      p.mb-0 Importante: las autoridades de tránsito asignadas a una jurisdicción para atender hechos delictivos que dejan personas lesionadas o fallecidas, tienen obligaciones de policía judicial, lo que los convierte en criminalistas de campo con el deber de procesar técnicamente una escena del crimen, siguiendo los protocolos judiciales correspondientes.  
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Metodología para la investigación pericial de accidentes
    .row.justify-content-center.mb-5
      .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/2.png', alt='')
      .col-lg-9(data-aos="fade-left")
        p La investigación de accidentes de tránsito, concuerda con un proceso sistemático, ajustado a la lógica y con estricta coherencia, apoyado en la ciencia y la técnica, con el fin de presentar conocimientos objetivos tendientes a esclarecer hechos, fenómenos e indirectamente responsabilidades que se derivan de los siniestros. 
          br
          br
          |Dadas las especificidades de los siniestros viales, fue necesario encontrar una metodología particular que se ajustara también de manera global sin interrumpir la legislación interna de los países.  
          br
          br
          |El enfoque de la metodología de la investigación de accidentes de tránsito es cuantitativo, por cuanto sus resultados se enmarcan en un proceso secuencial, deductivo y probatorio, que analiza la realidad objetiva (Hernández et al, 2014).  Observe en la siguiente figura las principales características del enfoque cuantitativo: 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1. 
      span Enfoque cuantitativo de la investigación. 
    .row.justify-content-center.mb-5
      .col-lg-8: img(src='@/assets/curso/temas/tema1/3.svg', alt='')
    .titulo-senal.d-inline-block.p-2.mb-5
      img(src='@/assets/curso/temas/tema1/senal.svg', alt='' style='width: 34px')
      h5.text-white.mb-0  Proceso investigativo
    .cajon-b.color-acento-contenido.p-3.mb-5
      .row.justify-content-center.mb-5
        .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/4.svg', alt='' style="width: 85px").m-auto
        .col-lg-10(data-aos="fade-left")
          p.mb-0 Es importante señalar que toda investigación parte de un problema, a partir del cual nace la pregunta de investigación, que debe ser resuelta a través de procedimientos de indagación, reuniendo la mayor cantidad de información posible que debe ser analizada e interpretada para luego emitir resultados de esos análisis.  Aplicado a la investigación de accidentes de tránsito, el proceso implicaría los siguientes pasos: 
    .row.justify-content-center.mb-5
      .col-lg-8
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row(titulo="").justify-content-center
            .col-md-6.mb-4.mb-md-0
              h4.fw-normal Identificar - definir un problema
              p Accidente de tránsito.
            .col-md-2.col-5: img(src='@/assets/curso/temas/tema1/5.svg', alt='')
          .row(titulo="").justify-content-center
            .col-md-2.col-5: img(src='@/assets/curso/temas/tema1/6.svg', alt='')
            .col-md-6.mb-4.mb-md-0
              h4.fw-normal Plantearse una pregunta
              p ¿Cuáles fueron las causas?
          .row(titulo="").justify-content-center
            .col-md-6.mb-4.mb-md-0
              h4.fw-normal Pensar en la manera de responder
              p Programa metodológico.
            .col-md-2.col-5: img(src='@/assets/curso/temas/tema1/7.svg', alt='')
          .row(titulo="").justify-content-center
            .col-md-2.col-5: img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            .col-md-6.mb-4.mb-md-0
              h4.fw-normal Reunir información necesaria para ello
              p Búsqueda de elementos materiales probatorios (EMP) y evidencia física (EF).
          .row(titulo="").justify-content-center
            .col-md-6.mb-4.mb-md-0
              h4.fw-normal Analizarla e interpretarla
              p Aplicación de modelos físicos, interpretación de los fundamentos  normativos.
            .col-md-2.col-5: img(src='@/assets/curso/temas/tema1/9.svg', alt='')
          .row(titulo="").justify-content-center
            .col-md-2.col-5: img(src='@/assets/curso/temas/tema1/10.svg', alt='')
            .col-md-6.mb-4.mb-md-0
              h4.fw-normal Emitir un resultado
              p Factor que determina la ocurrencia del hecho.
    p.mb-5(data-aos='fade-right') Partiendo de la descripción general del proceso, se puede establecer una secuencia lógica a considerar en la investigación de accidentes de tránsito dentro de un marco metodológico lineal, que adopta las etapas y aspectos destacados en la siguiente figura: 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2.
      span Marco metodológico para la investigación de accidentes de tránsito. 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in") 
        img(src='@/assets/curso/temas/tema1/11.svg', alt='').mb-2
        figcaption Nota. Adaptada de Ramos, H. F. y Quiroga, L. A. (2017).
    .cajon-b.color-primario.arriba-derecha.p-3.mb-5
      .row.justify-content-center
        .col-lg-10(data-aos="fade-left")
          p.mb-0 Siguiendo este esquema metodológico, el investigador puede desarrollar su indagación, sustentado en la formalidad científica, además de contemplar la posibilidad de evaluar en cualquier parte del proceso, las actividades desarrolladas, con el fin de poder objetar sus resultados y examinar nuevos procesos para esclarecer a plenitud las causas que conllevaron a la materialización del hecho. 
        .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/4.svg', alt='' style="width: 85px").m-auto
    p.mb-5(data-aos='fade-right') #[b Veamos a continuación el detalle de las actividades asociadas a cada una de las etapas, empezando por la etapa inicial: ]
    .tarjeta.bg-slyder.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-4.mb-4.mb-md-0
            h5 Planteamiento de la investigación 
            p Se establecen los procedimientos a desarrollar en el tratamiento al lugar de los hechos, asignación de funciones y tareas del proceso investigativo para obtener información precisa y confiable.  También se tienen en cuenta los procesos de control de las actividades de criminalística de campo y de investigación criminal, la proyección de capacidades y recursos, se alista la documentación necesaria y se dan instrucciones. 
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/12.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h5 Formulación de la investigación 
            p Planteamiento de preguntas que deban resolverse en el análisis de la información obtenida de los elementos materiales de prueba o las evidencias físicas. Los interrogantes deben formularse libres de ambigüedades y apuntar al esclarecimiento de los hechos.   
              br
              br
              |En esta fase también se establecen los objetivos que orientarán el desarrollo de cada capítulo de la investigación en el Informe policial de accidentes de tránsito (IPAT). 
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/13.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h5 Recolección de la información
            p Comprende diligencias dentro y fuera del lugar de los hechos: recolección de evidencias físicas, exámenes especializados para los elementos materiales probatorios (EMP) y búsqueda de información en bases de datos o fuentes externas.  
              br
              |Entre mayor sean los datos obtenidos, recolectados y tratados, más fiable será la investigación y se contará con más alternativas para enfocar los análisis (inspección al lugar de los hechos, labores de vecindario, entrevistas a los testigos, verificación de pruebas documentales, entre otros). 
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/14.png', alt='Texto que describa la imagen')
    .tarjeta.p-5(style="background-color: #FFF6E9").mb-5
      p.mb-0 #[b Actos urgentes.]  De acuerdo a la Ley 906 de 2004, son considerados actos  urgentes:  la   inspección al  lugar de  los  hechos, inspección a cadáver, entrevistas,  identificar, recoger y  embalar técnicamente los elementos materiales probatorios (EMP) y  evidencia física (EF) documentándolos a través de la fijación fotográfica, topográfica y documental  del lugar de los hechos, una vez que los servidores públicos en ejercicio de sus funciones de policía judicial reciban la información de la ocurrencia de un delito. 
    p.mb-5(data-aos='fade-right') La siguiente etapa, la etapa de análisis, es la columna vertebral de la investigación, en donde cada uno de los elementos materiales de prueba, las evidencias físicas, las pruebas documentales, testimoniales y demás información recolectada, pasan a un proceso de escrutinio, evaluación y correlación con los hechos.  Para el desarrollo adecuado de esta etapa, se precisa analizar las evidencias ordenadamente de acuerdo con los factores que intervienen, como se describe a continuación: 
    .tarjeta.bg-slyder.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-4.mb-4.mb-md-0
            h5 Evidencias relacionadas con el factor humano 
            p Develar información a través de fuentes directas (entrevistas, interrogatorios, versiones no formales de espectadores y víctimas) y bases de datos sobre historial de conductores (RUT, comparendos, otros accidentes de tránsito, capacitaciones de conducción y seguridad vial). 
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Indagaciones previas: tiempo de conducción, estado anímico, objeto del desplazamiento, actividades previas, posibles distractores.  

              li
                i.fas.fa-check
                | Análisis de las lesiones: relación patrones - causas, dinámicas, secuencias y vectores de proyección que puedan reforzar hipótesis sobre el origen de las lesiones. 
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/15.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h5 Evidencias relacionadas con el factor vehículo
            p Características físicas, de fábrica, adaptaciones, ficha técnica, estado mecánico, documentación formal, historial de mantenimiento, modificaciones registradas en el registro único de tránsito (RUT), accidentes donde se haya involucrado y modalidades del servicio. También se debe solicitar la inspección técnica que se ha practicado después del accidente, donde se verifica la inspección y evaluación de daños, valoración de los mismos y la inspección mecánica.

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/16.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h5 Evidencias relacionadas con el factor vía
            p Destacar las características del accidente desde su escena temporo-espacial preliminar hasta la escena de posiciones finales de las evidencias para destacar tipología geométrica, posibles averías, velocidad de diseño, seguridad activa y pasiva, señalización horizontal y vertical, dispositivos para el control y operación del tránsito, material de construcción y consulta en bases de datos sobre adecuaciones, modificaciones y/o mantenimiento realizado y proyectado. 
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/17.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h5 Evidencias relacionadas con el factor condiciones de modo tiempo y lugar
            p Circunstancias del lugar en el momento de ocurrencia del accidente como las condiciones meteorológicas (clima, viento, lluvia).  Importante considerar que, de acuerdo a la posición de los afectados, estas condiciones intervendrán de manera distinta: el destello del sol en un horario específico aplica de acuerdo a la dirección y sentido del participante, así como el viento afecta o no a los vehículos dependiendo de su posición, dirección y sentido.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/18.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h5 Apreciación situacional del lugar y zonas de incidencia en este
            p De gran ayuda para plantear hipótesis ya que teniendo en cuenta la referencia a datos estadísticos de otros accidentes en el mismo lugar y sus causantes se pueden conjeturar o descartar relaciones con el caso investigado, así como considerar la existencia de patrones de accidentalidad, dato relevante para presentar una prospectiva del accidente.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/19.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h5 Presentación de hipótesis 
            p Las hipótesis planteadas por los investigadores deben ser todas aquellas que por coherencia se ajustan a una explicación lógica de cómo ocurrió el siniestro.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/20.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') En Colombia, el Manual de diligenciamiento del informe policial de accidente de tránsito codificó las posibles hipótesis, separadas por factores atribuibles a conductores, a la vía y al vehículo, como se señala en la siguiente figura:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 3.
      span Codificación hipótesis accidentes de tránsito. 
    .row.justify-content-center.mb-5
      .col-lg-10: img(src='@/assets/curso/temas/tema1/21.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/22.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para ampliar información, consulte el Manual de diligenciamiento del informe policial de accidente de tránsito:
                    br
                    br
                    | #[b [Min Transporte] Resolución 11268 de 2012]
                    br
                    br
                    | Por la cual se adopta el nuevo informe Policial de Accidentes de Transito (IPAT), su manual de diligenciamiento y se dictan otras disposiciones. urgencias  
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('downloads/resolucion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    p.mb-5(data-aos='fade-right') Avancemos ahora con la etapa de medición, donde se establecen las variables y se ejecutan los modelos físicos y las ciencias aplicadas, para descartar o reforzar las hipótesis: 
    .tarjeta.bg-slyder.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Descripción de variables
            p En coherencia con los objetivos definidos en la formulación de la investigación, ya que las variables pueden ser múltiples y sin objetivos claros, se puede incurrir en errores investigativos como razonamientos sobre eventos insignificantes.  
              br
              br
              |Posibles variables:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Huellas de frenado, derrape, trayectoria, arrastre. 
              li
                i.fas.fa-check
                | Velocidad de circulación de los rodantes. 
              li
                i.fas.fa-check
                | Distancias de frenado, parada, reacción y total. 

              li
                i.fas.fa-check
                | Campos de visibilidad y campos de visión.

              li
                i.fas.fa-check
                | Tiempos de reacción. 
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/23.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Medición de variables 
            p Interpretación de modelos físicos y matemáticos para medir los fenómenos presentados.  Los datos que se miden deben concordar con las variables establecidas en la formulación de la investigación, que se estimaron en la descripción de variables.  Los investigadores deben sustentar las técnicas, teorías y postulados aplicados a las variables sometidas a medición e indicar los procedimientos y modelos aplicables, con su estimación bibliográfica.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/25.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Contraste de hipótesis    
            p Consecuente con la medición de las variables, la exposición de datos fiables y análisis practicados a los elementos materiales probatorios (EMP) y evidencia física (EF), se entrar a controvertir las hipótesis depurando las que guiarán la teoría del caso.

          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/24.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Y finalmente, la etapa de conclusión y propuestas, de relevancia para la presentación de la teoría que concluye el caso: 
    .tarjeta.bg-slyder.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Dinámica del accidente
            p Descripción de los hechos que puede acompañarse de la retrospectiva del accidente de tránsito. 
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/26.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Retrospectiva del accidente
            p A partir de las evidencias, encontrar las escenas previas al accidente de tránsito desde la posición final con la materialización del hecho, evidenciando la forma de impacto y el lugar de la colisión, retrocediendo a la escena de reacciones múltiples y seguidamente hasta la escena preliminar donde se establecerán los puntos de percepción del accidente.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/27.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Construcción de la teoría del caso
            p El método científico exige plantearse una teoría del accidente de tránsito con base en el análisis robusto y detallado de todo el caso donde las hipótesis fueron confirmadas enunciando el factor contribuyente y determinante del hecho, siendo la teoría del caso la que reúne todas las conclusiones que el perito ha desarrollado durante el proceso investigativo.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/28.png', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Prospectiva del accidente
            p Cada investigación genera un nuevo conocimiento y todo conocimiento debe ser aprovechado para solucionar problemas por lo cual esta etapa es en la que el investigador propone una solución para que estos hechos no vuelvan a presentarse.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/29.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Refuerce su apropiación de la metodología para la investigación de accidentes de tránsito, a través del siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Herramientas digitales para la reconstrucción de accidentes 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p El campo de la investigación de accidentes de tránsito, cuenta actualmente con herramientas de gran precisión que permiten agilizar los procesos de registro de datos, maximizar la información proporcionada y obtener resultados que aportan una representación cada vez más fiel a la criminalística. Sin embargo, no toda la tecnología de avanzada para diferentes áreas, es apropiada para llevar a cabo procedimientos de policía judicial en accidentes viales.  Es necesario analizar su pertinencia en consideración a las condiciones a las que se enfrentan las autoridades a la hora de atender un accidente de tránsito y el costo beneficio que las herramientas tecnológicas ofrecen.  
          br
          br
          |El desarrollo vertiginoso de la investigación de accidentes de tránsito, impulsado por las técnicas de última generación que en Colombia adopta la Escuela de Seguridad vial, toma un rumbo diferente cuando su reconstrucción hace uso de herramientas como la estación total, los equipos de GPS y el escáner topográfico, recientemente incorporado en la labor investigativa. 
      .col-lg-4.col-4(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/30.png', alt='')
    .titulo-senal.d-inline-block.p-2.mb-5
      img(src='@/assets/curso/temas/tema1/senal.svg', alt='' style='width: 34px')
      h5.text-white.mb-0 Escáner topográfico
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p El escáner topográfico es un dispositivo con la capacidad de adquirir datos masivos en un lugar determinado desde un punto fijo, generando una nube de puntos de manera tridimensional, a partir de la medición de distancias y ángulos, mediante un rayo de luz.
          br
          br
          |El escáner topográfico tiene la capacidad de realizar observaciones masivas sobre áreas preseleccionadas, y cuenta con cámaras fotográficas para el registro de información dentro de su rango de visibilidad, lo que se traduce en una información basta del objeto, que lleva a un #[em software] específico donde se representa mediante un modelo tridimensional.  
      .col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/31.png', alt='')
    .titulo-senal.d-inline-block.p-2.mb-5
      img(src='@/assets/curso/temas/tema1/senal.svg', alt='' style='width: 34px')
      h5.text-white.mb-0 Estación total
    .row.justify-content-center.mb-5
      .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/32.png', alt='')
      .col-lg-7
        .tarjeta.p-4(style="background-color: #FFF6E9 ")
          p.mb-0 La estación total es un instrumento electro-óptico utilizado en topografía, cuyo funcionamiento apoyado en tecnología electrónica, consiste en la incorporación de un distanciómetro y un microprocesador a un teodolito electrónico, para obtener ángulos verticales y, en el mayor de los casos, horizontales. 
            br
            br
            |Algunas de las características que incorpora, y con las cuales no cuentan los teodolitos, son una pantalla alfanumérica de cristal líquido (LCD), leds de avisos, iluminación independiente de la luz solar, calculadora, distanciómetro, trackeador (seguidor de trayectoria) y la posibilidad de guardar información en formato electrónico, lo cual permite utilizarla posteriormente en ordenadores personales.  También vienen provistos de diversos programas sencillos que permiten, entre otras capacidades, el cálculo de coordenadas en campo, replanteo de puntos de manera sencilla y eficaz y cálculo de acimutes y distancias. (Emilio, 2009)
    p.mb-5(data-aos='fade-right') Para la realización del informe pericial de accidente de tránsito, se recomienda el uso de herramientas tecnológicas y digitales que faciliten la realización del dictamen y su respectiva ilustración.  A continuación, se destacan algunas de ellas: 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta.p-4.mb-5(style="background-color: #F3F9FF ")
          ul.lista-ul--color
            li
              i.fas.fa-check
              | La pericia debe realizarse en un computador utilizando herramientas digitales de Microsoft como Word planteando allí la estructura metodológica con títulos de 1er 2do y 3er nivel que sean necesarios.  Una vez definida la metodología del dictamen, deberá revisarse la información recolectada que deberá someterse a análisis considerando las variables del accidente: la vía, los vehículos y las personas involucradas en el siniestro vial.
            li
              i.fas.fa-check
              | Para recolectar y analizar información de la vía, resultan útiles plataformas como Google Maps o Google Earth para la georeferenciación del lugar del accidente de tránsito.  Importante también la revisión de cifras de siniestralidad que se pueden consultar en el observatorio nacional de seguridad vial verificando en el geo-portal los puntos críticos según la jurisdicción.
            li
              i.fas.fa-check
              | Para la búsqueda de información de los vehículos se recomienda la consulta de páginas web como el registro único nacional de tránsito RUNT y las fichas técnicas de los vehículos en la página oficial de cada marca. 

            li
              i.fas.fa-check
              | La búsqueda de información de las personas se puede realizar en el RUNT verificando su historial y autorización vigente para conducir vehículos en Colombia, además de otras bases de datos a las que el investigador tenga acceso.
    p.mb-5(data-aos='fade-right') Ahora bien, el análisis del croquis o bosquejo topográfico requiere la utilización de herramientas digitales o #[em software] específicos para la reconstrucción de accidentes de tránsito que permitan pasar a escala el bosquejo y convertirlo en un plano topográfico que pueda ser utilizado para encontrar las escenas del accidente de tránsito (preliminar, reacciones múltiples, materialización del hecho y escena de posiciones finales).  A continuación, se presentan algunos de los programas consultados con mayor frecuencia para el desarrollo del análisis topográfico: 
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/33.png' alt='AvatarTop')
        p.text-center #[em Software] MVD.  Sistema Simulador Universal de Accidentes de Tránsito SSUAT 
        a.text-center(href="https://ssuat.com/" target='_blank') https://ssuat.com/
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/34.png' alt='AvatarTop')
        p.text-center #[em Software] AutoCAD 2D y 3D 
        a.text-center(href="https://latinoamerica.autodesk.com/" target='_blank') https://latinoamerica.autodesk.com/
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/35.png' alt='AvatarTop')
        p.text-center #[em Software] Trimble Forensics Reveal
        a.text-center(href="https://forensics.trimble.com/" target='_blank') https://forensics.trimble.com/
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/36.png' alt='AvatarTop')
        p.text-center FARO® Zone 3D 
        a.text-center(href="https://www.faro.com/" target='_blank') https://www.faro.com/
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/37.png' alt='AvatarTop')
        p.text-center #[em Software] ARAS 360 para la Reconstrucción Virtual de Accidentes de Tránsito y Escena de Crimen 
        a.text-center(href="https://software.com.co/" target='_blank') https://docplayer.es/
    p.mb-5(data-aos='fade-right') En cuanto al análisis de variables físicas aplicadas al hecho, componente importante del informe pericial, existen también herramientas tecnológicas que apoyan al investigador de accidentes de tránsito en dicha tarea, veamos algunas de ellas: 
    .row.justify-content-center.mb-5
      .col-lg-4
        div(style="background-color: #F3F9FF").p-4.h-100
          h4.text-center GeoGebra 
          img(src='@/assets/curso/temas/tema1/38.jpg', alt='').mb-3
          p #[em Software] de matemáticas dinámicas, presentado como una calculadora gráfica en línea, que a partir del plano cartesiano permite la realización de planos de manera gratuita e interactiva.  GeoGebra: grafica funciones, representa datos, arrastra deslizadores.
          a(href="https://www.geogebra.org/graphing?lang=es ", target="_blank", rel="noopener noreferrer") https://www.geogebra.org/graphing?lang=es  
      .col-lg-4
        div(style="background-color: #FFF5C5").p-4.h-100
          h4.text-center RACTT
          img(src='@/assets/curso/temas/tema1/39.jpg', alt='').mb-3
          p Reconstructor Analítico de Colisiones de Tránsito Terrestre 5.0
            br
            br
            |Herramienta utilizada para realizar cálculos físico matemáticos relacionados con accidentes de tránsito.
          a(href="https://ractt.com/  ", target="_blank", rel="noopener noreferrer") https://ractt.com/  
    .tarjeta.p-5(style="background-color: #FFF6E9").mb-5
      p.mb-0 Hasta aquí, se han revisado algunas herramientas para mejorar el trabajo para la realización y sustentación del informe pericial de accidentes de tránsito, pero, además de las herramientas, es necesario considerar las técnicas necesarias para la reconstrucción de los hechos, dentro de la que se encuentra el análisis forense al registro fotográfico y topográfico de las distintas huellas encontradas en la vía (frenado, arrastre derrape o trayectoria) que el perito puede utilizar para soportar trayectorias antes y después de la colisión de los vehículos comparando sus hallazgos respecto de la señalización horizontal y vertical del sector encontrando así las escenas del accidente que le permitirá reconstruir los hechos.
        br
        br
        | Por ejemplo, una huella de frenado correctamente fijada topográfica y fotográficamente, permitirá determinar la trayectoria y velocidad del automotor previa al accidente utilizando la ecuación de física forense para calcular la velocidad de deceleración hasta la detención (ver figura a continuación)
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 4.
      span Registro huella de frenado. 
    .row.justify-content-center.mb-5
      .col-lg-8
        img(src='@/assets/curso/temas/tema1/40.jpg', alt='').mb-2
        figcaption Nota. Imágenes tomadas de Ramos, H. F. y Quiroga, L. A., p. 67, 70 (2017).
    p.mb-5(data-aos='fade-right') Para realizar el cálculo de la velocidad a partir del análisis de una huella de frenado, se requiere utilizar el concepto de movimiento acelerado, aplicando los modelos de la mecánica clásica y el coeficiente de rozamiento de referencia, entre 0.68 y 0.88 para el caso del asfalto (ver tabla a continuación)  
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1. 
      span Valores de referencia para el coeficiente de fricción. 
    //TODO! Pendiente tabla 
    .tabla-a.color-secundario.mb-5
      table
        caption Leyenda de la tabla
        thead(style="background-color: #fff5c5")
          tr.text-center
            th Superficie
            th Liviano
            th Mediano
            th Pesado
        tbody
          tr
            td Asfalto
            td 0.68 - 0.88
            td 0.59 - 0.86
            td 0.55 - 0.81
          tr
            td Concreto
            td 0.52 - 0.66
            td 0.62 - 0.75
            td 0.56 - 0.70
          tr
            td Adoquín 
            td 0.58 - 0.60
            td 0.67 - 0.75
            td 0.64 - 0.70
          tr
            td Tierra
            td 0.50 - 0.58
            td 0.58 - 0.75
            td 0.43 - 0.75
          tr
            td Césped
            td 0.36 - 0.42
            td 0.43 - 0.75
            td 0.42 - 0.61

    .tarjeta(style="background-color: #FFF6E9").p-4
      .row.justify-content-center.mb-5
        .col-lg-3
          .tarjeta.color-secundario.p-4
            p.text-white Valor mínimo Coeficiente 0.68
              br
              | = 14.13 m/s = 50.9 km/h
        .col-lg-3
          .tarjeta.color-secundario.p-4
            p.text-white Valor máximo Coeficiente 0.88
              br
              | = 16.06 m/s = 57.9 km/h
      p Donde:

        br
        |Vi = velocidad inicial
        br
        |g = valor de la gravedad
        br
        |d = distancia de detención usando la huella de frenado como referente
        br
        |μ = coeficiente de fricción
        br
        br
        |#[b En consecuencia, se puede determinar que, el vehículo transitaba por su carril y al inicio de su huella de frenado se desplazaba a una velocidad que oscila entre 50.9 km/h y 57.9km/h.]
    

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-slyder
  background-image: url('../assets/curso/temas/tema1/bg-slyder.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
