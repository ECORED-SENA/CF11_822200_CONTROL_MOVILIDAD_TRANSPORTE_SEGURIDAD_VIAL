export default {
  global: {
    componenteFormativo:
      'Investigación y reconstrucción del accidente de tránsito',
    descripcionCurso:
      'Este componente formativo contiene los conocimientos necesarios para la caracterización del accidente de tránsito cumpliendo los parámetros de policía judicial, a través del desarrollo del análisis de laboratorio y sustentación del informe pericial de accidente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/space.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Investigación analítica del accidente de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Metodología para la investigación pericial de accidentes',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Herramientas digitales para la reconstrucción de accidentes',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sustentación del Informe Pericial',
        desarrolloContenidos: true,
      },
      // {
      //   nombreRuta: 'tema3',
      //   icono: 'far fa-file-alt',
      //   numero: '3',
      //   titulo: '',
      //   desarrolloContenidos: true,
      // },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Investigación analítica del accidente de tránsito',
      referencia:
        'Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.  6 de julio de 2002.  D.O. No. 44932.',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      tema: 'Investigación analítica del accidente de tránsito',
      referencia:
        'Resolución 1885 de 2015 [Ministerio de Transporte].  Por la cual se adopta el manual de señalización vial – Dispositivos uniformes para la regulación del tránsito en calles, carreteras y ciclorutas de Colombia.  17 de junio de 2015.',
      tipo: 'Resolución',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/7086-resolucion-1885-del-17-de-junio-de-2015 ',
    },
    {
      tema: 'Investigación analítica del accidente de tránsito',
      referencia:
        'Suárez, O. (s.f.).  Protocolos FGR.  Curso básico de policía judicial.',
      tipo: 'Página web',
      link: 'https://oscarbasico.wixsite.com/polijudicial/protocolos-fgn ',
    },
    {
      tema: 'Investigación analítica del accidente de tránsito',
      referencia:
        'Ley 599 de 2000. Por el cual se expide el Código Penal.  24 de julio de 2000.  D.O. No. 44097.',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000.html',
    },
  ],
  glosario: [
    {
      termino: 'CPP',
      significado: 'Código de procedimiento penal.      ',
    },
    {
      termino: 'EMP Y EF',
      significado: 'Elementos materiales probatorios y evidencia física. ',
    },
    {
      termino: 'FPJ',
      significado: 'Formato de policía judicial.',
    },
    {
      termino: 'FGN',
      significado: 'Fiscalía general de la nación. ',
    },
    {
      termino: 'Indiciado',
      significado:
        'Persona objeto de un despliegue de diligencias de averiguación, que no ha asistido a una audiencia de formulación de la imputación.',
    },
    {
      termino: 'Inspección',
      significado:
        'Es la observación objetiva, detallada y metódica del lugar de los hechos o lugar distinto al del hecho que permite descubrir, identificar, fijar, recolectar y embalar técnicamente los EMP y EF bajo los protocolos de cadena de custodia, para demostrar la comisión de una conducta punible (Ley 960 de 2004, Artículo 213) ',
    },
    {
      termino: 'Imputado',
      significado:
        'Persona quien se responsabiliza de una conducta que es reconocida como delito y contra quien se direcciona una acusación por esa acción.',
    },
    {
      termino: 'IPAT',
      significado: 'Informe policial de accidente de tránsito.',
    },
    {
      termino: 'RNAT',
      significado: 'Registro nacional de accidentes de tránsito.',
    },
    {
      termino: 'SPOA',
      significado: 'Sistema penal oral acusatorio.',
    },
    {
      termino: 'SSUAT',
      significado: 'Sistema simulador universal de accidentes de tránsito. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Hernández Sampieri, R., Fernández Collado, C. y Baptista Lucio, M. del P. (2014).  Metodología de la Investigación.   Mc Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Ley 906 de 2004. Por la cual se expide el Código de Procedimiento Penal. 31 de agosto de 2004.  ',
      link: '',
    },
    {
      referencia:
        'Pérez Gándara, R. (2018).  La técnica del discurso de la oralidad: una lectura de acercamiento.  ',
      link:
        'https://revistas.juridicas.unam.mx/index.php/hechos-y-derechos/article/view/12309/13939',
    },
    {
      referencia:
        'Ramírez Juidías, E.  (2009). Prácticas de topografía. Santillana.',
      link: '',
    },
    {
      referencia:
        'Ramos Enríquez, H. F., & Quiroga Amaya, L. A. (2017). Investigación de accidentes de tránsito en Colombia. Imprenta nacional.',
      link: '',
    },
    {
      referencia:
        'Resolución 11268 de 2012 [Ministerio de Transporte]. Por la cual se adopta el nuevo Informe Policial de Accidentes de Tránsito (IPAT), su manual de diligenciamiento y se dictan otras disposiciones.  6 de diciembre de 2012.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lino Andrés Quiroga Amaya ',
        cargo: 'Experto temático',
        centro: 'Centro de Tecnologías del Transporte',
      },
      {
        nombre: 'Maribel Avellaneda Nieves',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda        ',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Ramirez ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
