import type { ProjectsSectionData } from "./interfaces";

export const projectsSectionData = {
  title: "Parcelas y Campos",
  subtitle: "Crédito directo a 11, 24 y 36 meses.",
  projects: [
    {
      id: "avellano",
      title: "El Avellano",
      price: "Desde $14.900.000",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLvLmNv4sthDauo4-BOM_gO63JiaSnAX_4hxzr6fdn-R1lgy3WW7eNUXpYoVLQzg3_VEZeYbGdTc5A4ZZJoSDePZoeXPqxbN_sy13DJRY0nkQazIQosCOWF6VOfJHlPP003tlrI3TYwUc5vUBNw4ZQeQ-QYcGk5zswywOxw6qcIc2IO9TlyXoRT3L_ix-4huppQ3CtHUU4LuxzIOHRF2pCyp6h41KukuqVA3ozcXIAJ4OmDuT5U-q_o0Cfg",
      imageAlt: "El Avellano",
      badge: "Lanzamiento",
      caracteristicas: [],
      imagenesPopup: []
    },
    {
      id: "muermos",
      title: "Fundo los Muermos",
      price: "Desde $15.900.000",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLtCMKXoI4mbJt4frhdpech5UKST9ivpHUXm7L_U1OUCgGVglvfWkkPLQ4CqRLX06M41FMPkjywtoJw3tLZIb36rsHBGnPvHnllo-THpBj3ehMhtwfbfWzGBIPhCBZGXNRIiZpvAej7UN78EHHYc_W4FSqziQFEr5QAZMDx0AV-9AY8Zj9P2_3ZbOQjDBfzUM6GyV0P5PhDItr1bhQBX3QQg-9poJveM9qwd9VBss9UGnvTGrXDLxZwAYBDV",
      imageAlt: "Fundo los Muermos",
      transitionDelayMs: 100,
      caracteristicas: [],
      imagenesPopup: []
    },
    {
      id: "maullin",
      title: "Eco Maullín",
      price: "Desde $5.900.000",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLs6VWaTX6u-4jy_37tsSYtzBtJYQnibWmFZJ-v-1vmAwKrcja2YrrKsJhDF-Rd9UsxWWHvIoJteSY1-y9DuaGHemcrl_f_FnRLSUZ8qDL5ig1EViAXFz5WrRFI-V0kzmP06k3RdQGpdGt5Jq1Orn1BwthDLjQDYIwciZpfaSfAi3W64C9csV_0aJqbeXy2MBt5GecUWHur_tgTJvNZS9TOBF59AAWZDaAfvtfsnXmoaecLx2vR4fXZm0Czk",
      imageAlt: "Eco Maullín",
      transitionDelayMs: 200,
      caracteristicas: [],
      imagenesPopup: []
    },
    {
      id: "riofrio",
      title: "Hacienda Río Frío",
      price: "Desde $12.900.000",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLvPsvkV4pekg-KgzRidJVsMiTnBm25CZ4qgPApjixI0ZgUeDp0oEU3CFjuIyAJ6TsWf8LO5LSw8Ajm5SvSar8plcB743GcPR3jbJHK3ObLN291rgKofxmOHK1s-sKKxSpCKARArk_0-6GybWI7zD7zQIkePfjUJw7svXnZk6JDMk3Qafec4uSkovNRAhN792gNXebdi7ZDHvhAX03LVGNR1Fgm2mUJy31mdNlaw5Wm1NZD5nELaoUTax5ga",
      imageAlt: "Hacienda Río Frío",
      caracteristicas: [],
      imagenesPopup: []
    },
    {
      id: "praderas",
      title: "Praderas del Sur",
      price: "Desde $17.900.000",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLvKwrkLj_B1Tazsu2b_aN_bwdRFmEQYdYDmxS-dg9MtIHBdaT7b5R5HjsBQxOYNk7fXFASNa5LWy39zAMG7zxDYujuIoZYy1umv2B-kSIu6-EIoeDBF2rGInMSL9ZLggOeP7UN2yB8GRdqGLnrDvE5NhZgM8gBSZ__a4jCg3H-83wQWEKemXih_U5_3Hx76VTXDfOKJ0r3kh4o9I91W8YtxdZt_g8zIQo5esaFzi5X9amRDpLVTe84oDx-p",
      imageAlt: "Praderas del Sur",
      transitionDelayMs: 100,
      caracteristicas: [],
      imagenesPopup: []
    },
  ],
  // Contenido compartido que se muestra dentro del modal de cada proyecto
  modalContent: {
    secondaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-FcdgZAD-La9jBYUGTGQCl8nebz1pm99mjC2XUDEwPPiU-BaDzBlR1FSCRq2Zizjrn7K_dlEvN3_nQprUCX3ARWb5TMJS5D-sHawlw_g1mzyk9eX_wIzlOtg9mTxqlmWk7UHA38vrzMyzdtpEFu8S1_o4tOPlpc8fun2st2DwAGlhFNauaxE4pMcjwkXvcZcCC6mMfezcNkjiJ9Nyzz7IABBBXo5q7gV9ZVwAJwHQRUKt1pJCpRaDiA",
    secondaryImageAlt:
      "Detalle de la topografía natural, con colinas verdes y árboles nativos en el Sur de Chile bajo luz de día brillante y clara.",
    features: [
      "Parcelas de 5.000 m2",
      "Rol propio",
      "Factibilidad de luz",
      "Factibilidad de agua",
      "Caminos estabilizados",
      "Topografía plana y lomaje",
      "Alta plusvalía",
      "Asesoría legal incluida",
    ],
    mapLocation: "Puerto Montt, Chile",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBunyOL_tfBpImShA-juimzqS7pmP27qJPVRIYqieoQsTLlxsJfc8y8F6j1XhNEVSd_YuszNXxi1fw9yjosnrHDlp4C6L2UzKtic0DNSOrqksdej9gchag7Qfr2vPI4d95Avmy4eY1PERIjOn8jkQWeuLj3eI_lMiqBTO5NWkTF1J4a6YA8argEhV5ygEsWdb0n6dzfYPL4aiBznc7B-j2mqT1P1ycaIccJEsE2KmWJ3-Gv4i7a2eFW9g",
    mapImageAlt:
      "Mapa minimalista de Puerto Montt y sus alrededores rurales en el Sur de Chile, con un pin rojo indicando la ubicación de la propiedad.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Puerto+Montt+Chile",
  },
};
