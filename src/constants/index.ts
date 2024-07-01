import { subtle } from "crypto";

export const headerInnerHtml = 
  {
    title: "SOS Vending",
    subtitle: "Quiénes Somos:",
    text: "Una empresa dedicada a satisfacer sus necesidades de",
    hltext: "vending"
  }
;

export const footerInnerHtml = 
  {
    year: "2024",
    links:[
      {tittle:"Política & Privacidad", url:"/"},
      {tittle:"Terminos & condiciónes", url:"/"}
    ]
  }
;
  
  export const footerSocialLinks = [
    {
        title: "Encuentranos",
        links: [
          {type:"social", title: "Whatsap", url: "https://wa.me/50640100203" , image:"/svgs/whatsap.svg"},
          {type:"social", title: "Instagram", url: "https://www.facebook.com/sosdigital.io", image:"/svgs/instagram.svg"},
          {type:"social", title: "Facebook", url: "https://www.instagram.com/sosvending/", image:"/svgs/facebook.svg"},
        ],
    }
  ];

  export const footerinfo = [
    {
      title: "Contacto",
      info: [
        { key:"1",title: "Correo", text1: "contactenos@sosvending.io" , text2:""},
        { key:"2",title: "", text1: "" , text2:"+506 40100203"},
      ],
    },
    {
        title: "Legal",
        info: [
          { key:"1",title: "", text1: "" , text2:"Política de privacidad"},
          { key:"2",title: "", text1: "" , text2:"y protección de datos"},
        ],
      },

  ];

  export const ServiceSection = {
  title:"Servicios",
  legend:"Tu solución integral para máquinas expendedoras de snacks y bebidas.",
  services : [
  {
    title: "Snacks y Bebidas",
    description:"Ofrecemos una amplia gama de máquinas expendedoras de snacks y bebidas para satisfacer las necesidades de cualquier negocio.",
    image:"/images/card-vending.png",
    characteristic: {
      title:"Nuestras máquinas son:",
      items: [
        {
          title:"Confiable:",
          info:"Construidas con materiales duraderos y componentes de alta calidad."
        },
        {
          title:"Eficientes:",
          info:"Diseñadas para minimizar el consumo de energía y los costos operativos."
        },
        {
          title:"Versátiles:",
          info:"Ofrecen una amplia gama de opciones de productos para satisfacer las preferencias de cualquier cliente."
        }
      ]
    }
  },
  {
    title: "Bebidas Calientes",
    description:"Nuestras máquinas están equipadas con tecnología de última generación para garantizar una preparación perfecta de bebidas cada vez.",
    image:"/images/card-cofee.png",
    characteristic: {
      title:"Nuestras máquinas ofrecen:",
      items: [
        {
          title:"Confiable:",
          info:"Construidas con materiales duraderos y componentes de alta calidad para garantizar un funcionamiento sin problemas durante años."
        },
        {
          title:"Variedad de bebidas:",
          info:"Amplia gama de bebidas calientes, que incluyen espresso, cappuccino, latte macchiato, chocolate caliente y té."
        },
        {
          title:"Diseño elegante: :",
          info:"Nuestras máquinas expendedoras tienen un diseño elegante y moderno que mejorará cualquier entorno."
        }
      ]
    }
  },
  {
    title: "Telemetría",
    description:"Contamos con nuestro propio sistema telemétrico para un mejor control y transparencia.",
    image:"/images/card-telemetry.png",
    characteristic: {
      title:"telemetría para vending:",
      items: [
        {
          title:"Gran alcance:",
          info:"Llegue a una audiencia amplia y diversa de consumidores potenciales"
        },
        {
          title:"	Alta visibilidad::",
          info:"Los anuncios colocados en máquinas expendedoras son difíciles de pasar por alto, lo que garantiza una alta visibilidad para su marca."
        },
        {
          title:"Costo-efectividad:",
          info:"La publicidad en máquinas expendedoras es una forma rentable de llegar a una gran audiencia."
        }
      ]
    }
  },  {
    title: "Publicidad \n",
    description:"Contamos con nuestro propio sistema telemétrico para un mejor control y transparencia.",
    image:"/images/card-publicidad.png",
    characteristic: {
      title:"telemetría para vending:",
      items: [
        {
          title:"Gran alcance:",
          info:"Llegue a una audiencia amplia y diversa de consumidores potenciales"
        },
        {
          title:"	Alta visibilidad::",
          info:"Los anuncios colocados en máquinas expendedoras son difíciles de pasar por alto, lo que garantiza una alta visibilidad para su marca."
        },
        {
          title:"Costo-efectividad:",
          info:"La publicidad en máquinas expendedoras es una forma rentable de llegar a una gran audiencia."
        }
      ]
    }
  }
]
}
;