import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Wand2,
  Moon,
  Crown,
  Shield,
  BookOpen,
  Heart,
  Car,
  Dumbbell,
  Mountain,
  CircleDot,
  Scale,
  RotateCcw,
  Skull,
  Droplets,
  Flame,
  Building2,
  Star,
  Sun,
  Bell,
  Globe,
  Zap,
  Flower2,
  Sword,
  Coins,
  Gem,
  Feather,
  Eye,
  Key,
  Anchor,
  Compass,
  Hourglass,
  Leaf,
  Waves,
  Wind,
  Cloud,
  Snowflake,
  TreePine,
  FlameKindling,
  Hand,
  HandHeart,
  HandMetal,
  Users,
  User,
  UserCheck,
  UserPlus,
  Baby,
  Dog,
  Cat,
  Bird,
  Fish,
  Bug,
  Rabbit,
  Turtle,
  Snail,
  Shell,
  Clover,
  Cherry,
  Apple,
  Grape,
  Wheat,
  Coffee,
  Wine,
  Beer,
  Cake,
  Cookie,
  Candy,
  Gift,
  Trophy,
  Medal,
  Flag,
  Map,
  MapPin,
  Home,
  Castle,
  Church,
  Tent,
  Ship,
  Plane,
  Rocket,
  Bike,
  Footprints,
} from "lucide-react";
import type { ThemeId } from "./themes";

export interface TarotCard {
  id: number;
  name: string;
  arcana: "major" | "minor";
  suit?: "paus" | "copas" | "espadas" | "ouros";
  icon: LucideIcon;
  keywords: string[];
  meaning: {
    upright: string;
    contextual: Record<ThemeId, string>;
  };
}

const contextual = (
  rel: string,
  work: string,
  fam: string
): Record<ThemeId, string> => ({
  relacionamento: rel,
  trabalho: work,
  familia: fam,
});

export const tarotDeck: TarotCard[] = [
  {
    id: 0,
    name: "O Louco",
    arcana: "major",
    icon: Sparkles,
    keywords: ["início", "liberdade", "espontaneidade"],
    meaning: {
      upright: "Novos começos, fé no desconhecido e coragem para dar o primeiro passo.",
      contextual: contextual(
        "Uma fase nova no amor se aproxima — permita-se sentir sem medo de se expor.",
        "Oportunidade inesperada no trabalho; ouse propor ideias diferentes.",
        "Renovação nos laços familiares quando houver abertura e leveza."
      ),
    },
  },
  {
    id: 1,
    name: "O Mago",
    arcana: "major",
    icon: Wand2,
    keywords: ["manifestação", "habilidade", "ação"],
    meaning: {
      upright: "Você possui os recursos necessários; é hora de agir com intenção.",
      contextual: contextual(
        "Você tem poder de transformar a dinâmica do relacionamento com comunicação clara.",
        "Suas habilidades estão prontas para serem reconhecidas — tome a iniciativa.",
        "Você pode ser o catalisador de mudanças positivas na família."
      ),
    },
  },
  {
    id: 2,
    name: "A Sacerdotisa",
    arcana: "major",
    icon: Moon,
    keywords: ["intuição", "mistério", "silêncio"],
    meaning: {
      upright: "Confie na sua intuição; nem tudo precisa ser dito em voz alta.",
      contextual: contextual(
        "Há sentimentos não verbalizados — observe os gestos e o silêncio.",
        "Informações importantes podem estar ocultas; investigue com discrição.",
        "Segredos familiares pedem para ser compreendidos, não julgados."
      ),
    },
  },
  {
    id: 3,
    name: "A Imperatriz",
    arcana: "major",
    icon: Crown,
    keywords: ["abundância", "nutrição", "criatividade"],
    meaning: {
      upright: "Fertilidade emocional, cuidado e crescimento abundante.",
      contextual: contextual(
        "O relacionamento floresce com carinho, presença e afeto genuíno.",
        "Ambiente profissional favorável ao crescimento e à criatividade.",
        "A família precisa de acolhimento e gestos de cuidado mútuo."
      ),
    },
  },
  {
    id: 4,
    name: "O Imperador",
    arcana: "major",
    icon: Shield,
    keywords: ["estrutura", "autoridade", "estabilidade"],
    meaning: {
      upright: "Ordem, limites claros e liderança firme trazem segurança.",
      contextual: contextual(
        "Defina limites saudáveis e assuma responsabilidade pelo vínculo.",
        "Estruture seus planos de carreira com metas concretas.",
        "A família precisa de regras claras e liderança equilibrada."
      ),
    },
  },
  {
    id: 5,
    name: "O Hierofante",
    arcana: "major",
    icon: BookOpen,
    keywords: ["tradição", "ensinamento", "valores"],
    meaning: {
      upright: "Busque orientação em tradições, mentores ou valores compartilhados.",
      contextual: contextual(
        "Valores e compromissos definem o rumo desta relação.",
        "Mentoria ou formação podem acelerar sua evolução profissional.",
        "Tradições familiares influenciam — decida o que manter ou transformar."
      ),
    },
  },
  {
    id: 6,
    name: "Os Enamorados",
    arcana: "major",
    icon: Heart,
    keywords: ["escolha", "união", "alinhamento"],
    meaning: {
      upright: "Decisões do coração e alinhamento entre desejo e valores.",
      contextual: contextual(
        "Momento de escolher com o coração, mas também com consciência.",
        "Alinhe paixão profissional com propósito para resultados duradouros.",
        "Escolhas familiares exigem equilibrar amor e responsabilidade."
      ),
    },
  },
  {
    id: 7,
    name: "O Carro",
    arcana: "major",
    icon: Car,
    keywords: ["determinação", "vitória", "movimento"],
    meaning: {
      upright: "Avance com foco e determinação — a vitória está ao alcance.",
      contextual: contextual(
        "Impulso forte na relação; avance com clareza sobre o destino.",
        "Progresso acelerado na carreira com disciplina e foco.",
        "Superação de obstáculos familiares com determinação conjunta."
      ),
    },
  },
  {
    id: 8,
    name: "A Força",
    arcana: "major",
    icon: Dumbbell,
    keywords: ["coragem", "paciência", "domínio interior"],
    meaning: {
      upright: "Força gentil vence a agressividade; domine suas emoções.",
      contextual: contextual(
        "Paciência e compaixão são mais poderosas que confrontos.",
        "Persistência silenciosa trará reconhecimento profissional.",
        "Enfrente conflitos familiares com calma e firmeza interior."
      ),
    },
  },
  {
    id: 9,
    name: "O Eremita",
    arcana: "major",
    icon: Mountain,
    keywords: ["introspecção", "solidão", "sabedoria"],
    meaning: {
      upright: "Retire-se para refletir; respostas vêm no silêncio interior.",
      contextual: contextual(
        "Tempo a sós pode clarificar o que você realmente sente.",
        "Reavalie sua trajetória antes de tomar decisões importantes.",
        "Distancie-se momentaneamente para enxergar a dinâmica familiar."
      ),
    },
  },
  {
    id: 10,
    name: "A Roda da Fortuna",
    arcana: "major",
    icon: CircleDot,
    keywords: ["ciclos", "destino", "mudança"],
    meaning: {
      upright: "Ciclos se completam; aceite as mudanças como parte natural.",
      contextual: contextual(
        "A relação entra em nova fase — ciclos se fecham e recomeçam.",
        "Mudanças inesperadas no trabalho podem ser oportunidades.",
        "A família passa por transformações kármicas e renovação."
      ),
    },
  },
  {
    id: 11,
    name: "A Justiça",
    arcana: "major",
    icon: Scale,
    keywords: ["equilíbrio", "verdade", "consequências"],
    meaning: {
      upright: "Verdade e equilíbrio prevalecem; ações trazem consequências justas.",
      contextual: contextual(
        "Busque honestidade total — a verdade virá à tona.",
        "Mérito será reconhecido; avalie se o ambiente é justo.",
        "Questões familiares pedem diálogo honesto e reparação."
      ),
    },
  },
  {
    id: 12,
    name: "O Enforcado",
    arcana: "major",
    icon: RotateCcw,
    keywords: ["pausa", "sacrifício", "nova perspectiva"],
    meaning: {
      upright: "Pause e veja sob outro ângulo; rendição consciente traz clareza.",
      contextual: contextual(
        "Relacionamento em espera — soltar controle pode destravar.",
        "Paciência no trabalho; resultados virão com nova abordagem.",
        "Aceitar a situação familiar como está abre caminho para mudança."
      ),
    },
  },
  {
    id: 13,
    name: "A Morte",
    arcana: "major",
    icon: Skull,
    keywords: ["transformação", "fim", "renascimento"],
    meaning: {
      upright: "Fim de um ciclo e renascimento — transformação profunda.",
      contextual: contextual(
        "Algo precisa acabar para que a relação renasça de forma autêntica.",
        "Mudança de cargo, empresa ou área pode ser necessária.",
        "Padrões familiares antigos precisam ser deixados para trás."
      ),
    },
  },
  {
    id: 14,
    name: "A Temperança",
    arcana: "major",
    icon: Droplets,
    keywords: ["moderação", "harmonia", "integração"],
    meaning: {
      upright: "Equilíbrio e paciência criam harmonia duradoura.",
      contextual: contextual(
        "Encontre o meio-termo entre paixão e razão no amor.",
        "Combine diferentes habilidades para crescer profissionalmente.",
        "Integração e perdão gradual restauram a paz familiar."
      ),
    },
  },
  {
    id: 15,
    name: "O Diabo",
    arcana: "major",
    icon: Flame,
    keywords: ["apego", "tentação", "sombra"],
    meaning: {
      upright: "Cuidado com dependências, ciúmes ou padrões destrutivos.",
      contextual: contextual(
        "Apego, ciúme ou possessividade podem estar envenenando a relação.",
        "Ambiente tóxico ou vícios no trabalho limitam seu crescimento.",
        "Dinâmicas familiares manipulativas precisam ser reconhecidas."
      ),
    },
  },
  {
    id: 16,
    name: "A Torre",
    arcana: "major",
    icon: Building2,
    keywords: ["ruptura", "revelação", "libertação"],
    meaning: {
      upright: "Estruturas falsas desmoronam para revelar a verdade.",
      contextual: contextual(
        "Revelação súbita pode abalar a relação, mas liberta.",
        "Mudança abrupta no emprego ou projeto — adapte-se rapidamente.",
        "Conflito familiar intenso pode derrubar ilusões necessárias."
      ),
    },
  },
  {
    id: 17,
    name: "A Estrela",
    arcana: "major",
    icon: Star,
    keywords: ["esperança", "inspiração", "cura"],
    meaning: {
      upright: "Esperança renovada e cura após períodos difíceis.",
      contextual: contextual(
        "Esperança no amor — a relação pode se curar e florescer.",
        "Inspiração e reconhecimento profissional se aproximam.",
        "Cura familiar possível com vulnerabilidade e fé."
      ),
    },
  },
  {
    id: 18,
    name: "A Lua",
    arcana: "major",
    icon: Moon,
    keywords: ["ilusão", "medo", "subconsciente"],
    meaning: {
      upright: "Nem tudo é o que parece; medos ocultos influenciam a situação.",
      contextual: contextual(
        "Ilusões sobre a pessoa ou a relação — busque clareza.",
        "Incertezas profissionais refletem medos internos, não realidade.",
        "Mal-entendidos familiares alimentados por imaginação ou medo."
      ),
    },
  },
  {
    id: 19,
    name: "O Sol",
    arcana: "major",
    icon: Sun,
    keywords: ["alegria", "clareza", "sucesso"],
    meaning: {
      upright: "Clareza, alegria e vitória — energia positiva abundante.",
      contextual: contextual(
        "Relacionamento iluminado, transparente e cheio de alegria.",
        "Sucesso profissional e reconhecimento merecido.",
        "Harmonia e celebração entre os membros da família."
      ),
    },
  },
  {
    id: 20,
    name: "O Julgamento",
    arcana: "major",
    icon: Bell,
    keywords: ["despertar", "chamado", "renovação"],
    meaning: {
      upright: "Momento de despertar e responder a um chamado interior.",
      contextual: contextual(
        "Decisão definitiva sobre o futuro desta relação.",
        "Avaliação de carreira — é hora de responder ao seu verdadeiro chamado.",
        "Reconciliação ou perdão familiar como passo evolutivo."
      ),
    },
  },
  {
    id: 21,
    name: "O Mundo",
    arcana: "major",
    icon: Globe,
    keywords: ["completude", "realização", "integração"],
    meaning: {
      upright: "Ciclo completo, realização plena e integração de todas as partes.",
      contextual: contextual(
        "Relacionamento maduro e pleno, com senso de completude.",
        "Realização profissional e sensação de propósito cumprido.",
        "Família em equilíbrio — todos os laços encontram seu lugar."
      ),
    },
  },
];

const minorIcons: LucideIcon[] = [
  Zap, Flower2, Sword, Coins, Gem, Feather, Eye, Key, Anchor, Compass,
  Hourglass, Leaf, Waves, Wind, Cloud, Snowflake, TreePine, FlameKindling,
  Hand, HandHeart, HandMetal, Users, User, UserCheck, UserPlus, Baby,
  Dog, Cat, Bird, Fish, Bug, Rabbit, Turtle, Snail, Shell, Clover,
  Cherry, Apple, Grape, Wheat, Coffee, Wine, Beer, Cake, Cookie, Candy,
  Gift, Trophy, Medal, Flag, Map, MapPin, Home, Castle, Church, Tent,
  Ship, Plane, Rocket, Bike, Footprints,
];

const suits = ["paus", "copas", "espadas", "ouros"] as const;
const ranks = [
  "Ás", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito",
  "Nove", "Dez", "Página", "Cavaleiro", "Rainha", "Rei",
];

const suitLabels: Record<(typeof suits)[number], string> = {
  paus: "de Paus",
  copas: "de Copas",
  espadas: "de Espadas",
  ouros: "de Ouros",
};

const suitKeywords: Record<(typeof suits)[number], string[]> = {
  paus: ["ação", "criatividade", "impulso"],
  copas: ["emoção", "intuição", "relacionamento"],
  espadas: ["mente", "conflito", "verdade"],
  ouros: ["material", "estabilidade", "recursos"],
};

let minorId = 22;
for (const suit of suits) {
  for (let i = 0; i < ranks.length; i++) {
    const icon = minorIcons[(minorId - 22) % minorIcons.length];
    const rank = ranks[i];
    tarotDeck.push({
      id: minorId,
      name: `${rank} ${suitLabels[suit]}`,
      arcana: "minor",
      suit,
      icon,
      keywords: [...suitKeywords[suit], rank.toLowerCase()],
      meaning: {
        upright: `Energia de ${suitKeywords[suit].join(", ")} manifestada através do ${rank}.`,
        contextual: contextual(
          `No amor, o ${rank} ${suitLabels[suit]} indica ${suitKeywords[suit][0]} no vínculo afetivo.`,
          `Na carreira, o ${rank} ${suitLabels[suit]} aponta para ${suitKeywords[suit][1]} no ambiente profissional.`,
          `Na família, o ${rank} ${suitLabels[suit]} revela ${suitKeywords[suit][2]} nos laços familiares.`
        ),
      },
    });
    minorId++;
  }
}

export const CARD_SELECTION_COUNT = 5;

export function getCardById(id: number): TarotCard | undefined {
  return tarotDeck.find((c) => c.id === id);
}

export function generateReadingSummary(
  themeId: ThemeId,
  cardIds: number[]
): string {
  const cards = cardIds.map(getCardById).filter(Boolean) as TarotCard[];
  if (cards.length === 0) return "";

  const majorCount = cards.filter((c) => c.arcana === "major").length;
  const themes: Record<ThemeId, string> = {
    relacionamento:
      majorCount >= 3
        ? "As cartas maiores dominam esta leitura — forças kármicas e destino estão fortemente atuando neste relacionamento. Preste atenção aos padrões que se repetem."
        : "A leitura aponta para dinâmicas emocionais do dia a dia. Pequenas atitudes consistentes farão mais diferença do que grandes gestos isolados.",
    trabalho:
      majorCount >= 3
        ? "Transformações significativas se aproximam na sua trajetória profissional. Este é um momento de decisões importantes."
        : "O progresso virá por meio de ações práticas e consistentes. Foque no que está ao seu alcance agora.",
    familia:
      majorCount >= 3
        ? "Questões familiares profundas e antigas estão sendo ativadas. Cura e transformação são possíveis, mas exigem coragem."
        : "Os conflitos familiares podem ser resolvidos com comunicação paciente e gestos concretos de cuidado.",
  };

  const energyKeywords = cards.flatMap((c) => c.keywords).slice(0, 6);
  const uniqueKeywords = [...new Set(energyKeywords)];

  return `${themes[themeId]} As energias predominantes são: ${uniqueKeywords.join(", ")}. O conjunto das ${cards.length} cartas revela um caminho de integração — cada carta ilumina um aspecto diferente da sua pergunta.`;
}
