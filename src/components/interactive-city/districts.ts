import type { District } from "./district-types";

export const districts: District[] = [
  {
    id: "movi",
    name: "MOVI",
    subtitle: "Mobilidade urbana",
    color: "#22B8FF",
    status: "active",
    icon: "bus",
    description:
      "Plataforma p\u00fablica com dados reais de transporte coletivo.",
    highlights: [
      { value: "377", label: "Paradas" },
      { value: "26", label: "Linhas" },
      { value: "3.417", label: "Paths" },
    ],
    cardPosition: {
      compact: { x: 555, y: 390 },
      expanded: { x: 615, y: 315 },
    },
    outerPoints:
      "330,500 345,430 400,365 475,325 575,305 675,330 760,385 810,455 825,535 800,610 740,675 650,715 540,725 440,700 365,650 325,585",
    innerPoints:
      "390,510 410,435 475,375 565,345 655,355 735,405 780,475 785,550 745,615 675,655 580,675 490,660 420,620 385,565",
  },
  {
    id: "atlas",
    name: "Atlas",
    subtitle: "Auditoria e conformidade",
    color: "#8B5CF6",
    status: "active",
    icon: "shield",
    description:
      "Gest\u00e3o de auditorias, checklists, n\u00e3o conformidades, planos de a\u00e7\u00e3o e evid\u00eancias.",
    highlights: [
      { value: "Empresas", label: "Dossi\u00eas" },
      { value: "Auditorias", label: "Opera\u00e7\u00e3o" },
      { value: "Planos", label: "Acompanhamento" },
    ],
    cardPosition: {
      compact: { x: 745, y: 135 },
      expanded: { x: 640, y: 150 },
    },
    outerPoints:
      "616,241 622,160 690,78 790,25 900,5 1010,15 1105,55 1170,125 1190,220 1170,315 1115,380 1010,415 890,412 770,380 680,325",
    innerPoints:
      "731,228 761,304 880,347 1042,339 1135,246 1080,155 995,105 901,46 820,85 770,155",
  },
  {
    id: "essenza",
    name: "Essenza",
    subtitle: "Microfrontends",
    color: "#F044D1",
    status: "active",
    icon: "layers",
    description:
      "Experi\u00eancia modular com jornadas separadas para usu\u00e1rios e gest\u00e3o.",
    highlights: [
      { value: "2", label: "Experi\u00eancias" },
      { value: "UI", label: "Modular" },
      { value: "Fluxos", label: "Integrados" },
    ],
    cardPosition: {
      compact: { x: 1330, y: 205 },
      expanded: { x: 1260, y: 185 },
    },
    outerPoints:
      "1168,302 1185,215 1245,150 1340,110 1445,99 1545,120 1625,170 1672,245 1672,365 1625,430 1535,470 1420,475 1315,440 1230,390",
    innerPoints:
      "1256,313 1279,356 1400,400 1478,412 1570,385 1612,349 1631,287 1524,207 1352,203 1280,245",
  },
  {
    id: "farol",
    name: "Farol",
    subtitle: "Gest\u00e3o para neg\u00f3cios",
    color: "#20E0C0",
    status: "active",
    icon: "beacon",
    description:
      "Solu\u00e7\u00e3o para organizar vendas, estoque e indicadores de pequenos neg\u00f3cios.",
    highlights: [
      { value: "Vendas", label: "Controle" },
      { value: "Estoque", label: "Alertas" },
      { value: "Dados", label: "Indicadores" },
    ],
    cardPosition: {
      compact: { x: 1200, y: 450 },
      expanded: { x: 1080, y: 400 },
    },
    outerPoints:
      "1125,505 1160,445 1240,410 1340,405 1435,430 1515,485 1555,555 1540,620 1480,660 1370,670 1260,650 1180,610",
    innerPoints:
      "1176,545 1210,485 1300,438 1390,430 1475,475 1538,545 1490,610 1400,648 1280,625 1205,590",
  },
  {
    id: "extensions",
    name: "Extens\u00f5es Chrome",
    subtitle: "Guard \u00b7 Palavri-metro",
    color: "#FF9F1C",
    status: "active",
    icon: "puzzle",
    description:
      "Extens\u00f5es desenvolvidas para seguran\u00e7a, an\u00e1lise e produtividade no navegador.",
    highlights: [
      { value: "2", label: "Extens\u00f5es" },
      { value: "Chrome", label: "Publica\u00e7\u00e3o" },
      { value: "Uso real", label: "Produto" },
    ],
    cardPosition: {
      compact: { x: 910, y: 520 },
      expanded: { x: 770, y: 455 },
    },
    outerPoints:
      "760,555 790,480 860,425 960,405 1060,420 1135,470 1175,545 1160,625 1100,690 1010,735 905,720 820,665",
    innerPoints:
      "848,572 889,645 1012,687 1100,650 1172,573 1140,500 1079,458 952,450 885,495",
  },
  {
    id: "future-island",
    name: "Distrito futuro",
    subtitle: "Em constru\u00e7\u00e3o",
    color: "#FACC15",
    status: "future",
    icon: "sparkles",
    description: "Uma nova solu\u00e7\u00e3o ser\u00e1 inaugurada em breve.",
    highlights: [],
    cardPosition: {
      compact: { x: 700, y: 720 },
      expanded: { x: 560, y: 650 },
    },
    outerPoints:
      "455,755 470,700 530,665 620,645 730,650 845,680 970,735 1085,805 1135,875 1120,941 455,941",
    innerPoints:
      "615,748 650,700 740,665 835,680 930,735 985,802 920,850 825,885 730,895 650,850",
  },
  {
    id: "future-cathedral",
    name: "Distrito futuro",
    subtitle: "Em constru\u00e7\u00e3o",
    color: "#93C5FD",
    status: "future",
    icon: "sparkles",
    description: "Uma nova solu\u00e7\u00e3o ser\u00e1 inaugurada em breve.",
    highlights: [],
    cardPosition: {
      compact: { x: 1235, y: 710 },
      expanded: { x: 1120, y: 645 },
    },
    outerPoints:
      "1038,790 1055,705 1120,645 1210,615 1325,625 1435,675 1525,745 1585,825 1585,941 1040,941",
    innerPoints:
      "1078,795 1099,721 1209,644 1320,655 1410,700 1473,737 1435,820 1301,889 1198,875",
  },
];
