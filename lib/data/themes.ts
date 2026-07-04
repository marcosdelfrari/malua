export type ThemeId = "relacionamento" | "trabalho" | "familia";

export type SubthemeId =
  | "namoro"
  | "ficante"
  | "casamento"
  | "traição"
  | "brigas-rel"
  | "futuro-empresa"
  | "estabilidade"
  | "brigas-fam"
  | "traições-fam";

export interface Subtheme {
  id: SubthemeId;
  label: string;
}

export interface Theme {
  id: ThemeId;
  label: string;
  description: string;
  subthemes: Subtheme[];
  questions: string[];
}

export const themes: Theme[] = [
  {
    id: "relacionamento",
    label: "Relacionamento",
    description: "Amor, conexão e vínculos afetivos",
    subthemes: [
      { id: "namoro", label: "Namoro" },
      { id: "ficante", label: "Ficante" },
      { id: "casamento", label: "Casamento" },
      { id: "traição", label: "Traição" },
      { id: "brigas-rel", label: "Brigas" },
    ],
    questions: [
      "O que esta pessoa está trazendo para minha vida?",
      "O que eu preciso mudar em mim dentro desse relacionamento?",
      "O que está impedindo esse relacionamento de evoluir?",
      "O que preciso saber para investir mais nessa relação?",
      "Pra onde essa relação tende a caminhar se continuar como está?",
      "Ele fica com outras pessoas?",
      "Está me traindo?",
    ],
  },
  {
    id: "trabalho",
    label: "Trabalho",
    description: "Carreira, propósito e crescimento profissional",
    subthemes: [
      { id: "futuro-empresa", label: "Futuro na empresa" },
      { id: "estabilidade", label: "Estabilidade" },
    ],
    questions: [
      "O que posso fazer para evoluir no meu trabalho?",
      "O que está bloqueando meu crescimento profissional?",
      "Quais oportunidades estão ao meu redor e como conseguir?",
      "O que preciso desenvolver em mim para ter sucesso profissional?",
      "O que devo saber antes de mudar de emprego?",
      "O que esperar se eu seguir no emprego atual?",
    ],
  },
  {
    id: "familia",
    label: "Família",
    description: "Laços familiares, cura e harmonia",
    subthemes: [
      { id: "brigas-fam", label: "Brigas" },
      { id: "traições-fam", label: "Traições" },
    ],
    questions: [
      "O que preciso entender sobre minha família nesse momento?",
      "O que estou deixando de enxergar nessa situação familiar?",
      "Como melhorar a comunicação?",
      "O que preciso curar?",
      "Como lidar melhor com os conflitos?",
      "O que pode trazer mais equilíbrio?",
    ],
  },
];

export function getTheme(id: ThemeId): Theme | undefined {
  return themes.find((t) => t.id === id);
}

export function getSubthemeLabel(
  themeId: ThemeId,
  subthemeId: SubthemeId
): string {
  const theme = getTheme(themeId);
  return theme?.subthemes.find((s) => s.id === subthemeId)?.label ?? subthemeId;
}
