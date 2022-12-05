<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Una cordial bienvenida a este momento de aprendizaje dedicado al análisis de los parámetros metodológicos para la realización de un informe de investigación analítica y pericial de accidentes de tránsito, comúnmente conocido como reconstrucción de accidentes de tránsito.  Iniciemos revisando el siguiente video introductorio a la temática:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yeioz-h-WIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
