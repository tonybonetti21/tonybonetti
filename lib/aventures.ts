export type Region = 'suisse' | 'jura' | 'alpes'
export type Difficulty = 'facile' | 'modérée' | 'difficile'

export interface Adventure {
  slug: string
  region: Region
  title: string
  place: string
  excerpt: string
  image: string
  date: string
  distance_km: number
  elevation_gain_m: number
  duration_h: number
  difficulty: Difficulty
  content: string[]   // paragraphes
  gallery: string[]
  highlights: string[]
}

export const REGIONS: Record<Region, { label: string; description: string; cover: string }> = {
  suisse: {
    label: 'Suisse',
    description: 'Cols alpins, lacs glaciaires et routes panoramiques entre Berner Oberland et Valais.',
    cover: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2400&q=85',
  },
  jura: {
    label: 'Jura',
    description: 'Crêtes boisées, combes secrètes et belvédères sur les Alpes — le terrain de jeu de proximité.',
    cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85',
  },
  alpes: {
    label: 'Alpes',
    description: 'Sommets, refuges et grandes traversées — là où l\'horizon devient vertical.',
    cover: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2400&q=85',
  },
}

export const adventures: Adventure[] = [
  // ── SUISSE ──────────────────────────────────────────────────────────────────
  {
    slug: 'oeschinensee-kandersteg',
    region: 'suisse',
    title: 'Oeschinensee depuis Kandersteg',
    place: 'Berner Oberland',
    excerpt: 'Le bleu glaciaire comme point fixe, les falaises en silence autour. Un lac qui arrête le temps.',
    image: 'https://images.unsplash.com/photo-1530841344095-c65c20fbd011?auto=format&fit=crop&w=1400&q=84',
    date: '2024-08-14',
    distance_km: 11,
    elevation_gain_m: 620,
    duration_h: 4,
    difficulty: 'modérée',
    highlights: ['Vue sur le lac depuis la crête', 'Falaises de 500m en surplomb', 'Retour par la forêt de mélèzes'],
    content: [
      'Il y a des endroits qu\'on imagine avant de les voir. L\'Oeschinensee en fait partie — ce lac cirque du Berner Oberland dont le bleu semble irréel sur les photos, et qui l\'est encore plus en vrai.',
      'Le départ se fait depuis le village de Kandersteg, à 1200m d\'altitude. On monte d\'abord par la télécabine pour gagner du temps, ou à pied pour mériter chaque mètre — selon l\'humeur du jour. Ce matin-là, le ciel est laiteux, les parois des Blümlisalp se devinent plus qu\'elles ne se montrent.',
      'L\'arrivée sur le lac est un choc doux. L\'eau est d\'un bleu presque irréel, entre turquoise et ardoise selon l\'heure. Autour, des falaises à pic de 500 mètres ferment l\'horizon dans trois directions. On est dans une coupe géologique, un cirque taillé par des millénaires de glace.',
      'J\'ai longé la rive sud jusqu\'au bout du lac, là où la foule des téléphériques ne va plus. Le silence change de texture à mesure qu\'on s\'éloigne. Le sentier monte ensuite vers la crête nord, d\'où on domine tout le cirque. Vue totale. Un de ces moments où on sort le téléphone puis on le remet dans la poche — certains paysages se méritent en silence.',
      'Retour par la forêt de mélèzes, encore dorée en ce mois d\'août. La lumière de fin d\'après-midi filtre à travers les branches. Kandersteg, en bas, semble minuscule.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1530841344095-c65c20fbd011?auto=format&fit=crop&w=1200&q=84',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=84',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=84',
    ],
  },
  {
    slug: 'lac-retaud-diablerets',
    region: 'suisse',
    title: 'Lac Rétaud et les Diablerets',
    place: 'Vaud alpin',
    excerpt: 'Un petit lac miroir perché à 1685m, avec le glacier des Diablerets en fond de scène.',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1400&q=84',
    date: '2024-07-03',
    distance_km: 8,
    elevation_gain_m: 380,
    duration_h: 3,
    difficulty: 'facile',
    highlights: ['Reflet du glacier dans le lac', 'Alpage de Crêt-Cossette', 'Panorama 180° sur les préalpes vaudoises'],
    content: [
      'Le Lac Rétaud n\'est pas le plus grand, ni le plus haut. Mais il a cette qualité rare des lacs miroirs : quand le vent dort, le glacier des Diablerets s\'y reflète à la perfection. Une symétrie que l\'on cherche, que l\'on attend, et qui arrive.',
      'Départ depuis le Col du Pillon, accessible en voiture depuis Aigle ou Gstaad. La montée est douce, à travers des alpages encore humides de rosée en ce début juillet. Les vaches ne regardent pas les randonneurs — elles ont mieux à faire.',
      'Le lac apparaît au détour d\'un replat. Petit, presque circulaire, bordé de joncs et de rochers plats idéaux pour la pause. En face, la masse blanche du glacier domine. L\'échelle est difficile à saisir — ces séracs là-haut font des dizaines de mètres.',
      'J\'ai attendu une heure que la surface du lac se calme. Ça s\'est produit vers 9h30, juste après le passage d\'un groupe qui rentrait. Cinq minutes de miroir parfait. C\'est assez pour une photo qui tient. Le reste de la randonnée se fait en descente facile vers l\'alpage de Crêt-Cossette, avec une vue ouverte sur toute la chaîne des préalpes.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1200&q=84',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=84',
    ],
  },

  // ── JURA ────────────────────────────────────────────────────────────────────
  {
    slug: 'cret-pela-doubs',
    region: 'jura',
    title: 'Crêt Pela et les belvédères du Doubs',
    place: 'Jura franco-suisse',
    excerpt: 'La rivière Doubs 400m en contrebas, la Suisse en face. Une crête qui coupe en deux pays et en deux lumières.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=84',
    date: '2024-10-19',
    distance_km: 14,
    elevation_gain_m: 550,
    duration_h: 5,
    difficulty: 'modérée',
    highlights: ['Belvédère du Crêt Pela à 1495m', 'Gorges du Doubs vues du dessus', 'Forêt d\'épicéas en automne'],
    content: [
      'Le Jura a ses jours de gloire discrets. Octobre en est un. Les hêtres virent au roux, les épicéas restent verts, et entre les deux, une lumière rasante qui peint tout en or.',
      'Le Crêt Pela se mérite — la montée depuis Mouthe est raide dans la forêt, silencieuse, parfois brumeuse. On entend ses pas sur les feuilles mortes. On n\'entend rien d\'autre.',
      'L\'arrivée au belvédère est une récompense nette. Le Doubs coule 400 mètres en dessous, vert foncé, lent. Sur l\'autre rive, c\'est déjà la Suisse — le canton de Neuchâtel, quelques maisons, un clocher. La frontière passe ici sans panneau, juste une ligne imaginaire sur la carte.',
      'La crête nord offre une succession de points de vue. À chaque virage, un nouveau cadrage sur les gorges. L\'automne densifie les couleurs — on n\'a pas besoin de filtres, juste de bonne lumière et d\'un peu de patience.',
      'Retour par le versant ouest, plus forestier, plus calme. Le soleil est bas. Les ombres s\'allongent. C\'est le Jura comme on le préfère : sans foule, sans bruit, avec juste ce qu\'il faut de sauvage.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=84',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=84',
    ],
  },
  {
    slug: 'mont-d-or-lever-de-soleil',
    region: 'jura',
    title: 'Mont d\'Or au lever du soleil',
    place: 'Pontarlier, Doubs',
    excerpt: 'Partir dans le noir, arriver dans la lumière. Le Mont d\'Or au petit matin, quand les Alpes flottent sur la brume.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=84',
    date: '2024-06-21',
    distance_km: 9,
    elevation_gain_m: 430,
    duration_h: 3.5,
    difficulty: 'facile',
    highlights: ['Lever de soleil sur les Alpes', 'Vue sur le lac de Saint-Point', 'Sentier crête panoramique'],
    content: [
      'Le réveil sonne à 4h30. Dehors, il fait encore nuit. L\'idée du Mont d\'Or semblait bonne la veille — elle l\'est moins dans l\'obscurité du couloir, les chaussures à la main.',
      'Mais on part quand même. C\'est ça, le jeu.',
      'La montée dans le noir est une expérience à part. La frontale éclaire deux mètres devant. Le sentier est connu — on l\'a fait en journée — mais il devient différent, plus intime, presque irréel. La forêt craque doucement.',
      'Le sommet arrive juste avant le soleil. On s\'installe, on sort le thermos, on attend. L\'horizon à l\'est est orange pâle. Puis le disque monte — d\'abord timide, puis décidé. Les Alpes émergent de la brume par vagues : d\'abord les Aravis, puis le Mont Blanc, puis toute la chaîne.',
      'C\'est pour ça qu\'on met le réveil à 4h30.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=84',
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=84',
    ],
  },

  // ── ALPES ───────────────────────────────────────────────────────────────────
  {
    slug: 'lac-blanc-chamonix',
    region: 'alpes',
    title: 'Lac Blanc depuis Les Praz',
    place: 'Massif du Mont-Blanc',
    excerpt: 'Le Mont-Blanc en face, le lac dans les rochers, et cette impression d\'avoir tout dit en une image.',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1400&q=84',
    date: '2024-09-07',
    distance_km: 16,
    elevation_gain_m: 1050,
    duration_h: 6,
    difficulty: 'difficile',
    highlights: ['Reflet du Mont-Blanc dans le lac', 'Mer de glace depuis la crête', 'Lever de soleil sur les aiguilles'],
    content: [
      'Le Lac Blanc est une des randonnées les plus photographiées de Chamonix. Et pourtant, on y va quand même. Parce que certains clichés méritent d\'être vécus en vrai.',
      'Départ depuis Les Praz de Chamonix, à l\'index. La montée par la Flégère est longue — 1050m de dénivelé, ça se mérite à chaque virage. La végétation laisse progressivement place aux rochers. L\'air change. On s\'élève.',
      'Le lac arrive au détour d\'un chaos rocheux, à 2352m. La vue est immédiate, totale. Le Mont-Blanc occupe tout l\'horizon ouest. Le Dru, l\'Aiguille Verte, les Grandes Jorasses — toute la chaîne en un seul plan. Et en premier plan, ce lac de montagne d\'un bleu profond, immobile.',
      'J\'y suis resté deux heures. À regarder changer la lumière. À voir passer les nuages sur les aiguilles. À comprendre pourquoi les gens reviennent ici chaque année.',
      'La descente côté Flégère est plus douce. Chamonix brille en bas, minuscule. Le Mont-Blanc rougit. La journée s\'achève comme elle devait — dans la lumière.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=84',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=84',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=84',
    ],
  },
  {
    slug: 'tour-des-glaciers-vanoise',
    region: 'alpes',
    title: 'Tour des glaciers de la Vanoise',
    place: 'Parc national de la Vanoise',
    excerpt: 'Deux jours, un bivouac, des glaciers de toutes parts. La Vanoise comme on ne la voit plus.',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1400&q=84',
    date: '2024-08-03',
    distance_km: 28,
    elevation_gain_m: 1800,
    duration_h: 14,
    difficulty: 'difficile',
    highlights: ['Glacier de la Grande Casse', 'Bivouac au lac Long', 'Passage du col de la Vanoise à 2517m'],
    content: [
      'La Vanoise, c\'est le parc national le moins visité des Alpes françaises — et peut-être le plus sauvage. Pas de route, pas de remontées mécaniques en activité, juste des sentiers et des gardes-parc.',
      'Le tour des glaciers se fait idéalement en deux jours avec un bivouac. J\'ai posé la tente au Lac Long, à 2430m, juste sous la barre des glaciers. La nuit était froide, claire, silencieuse. Le genre de nuit qui justifie d\'emporter le matelas en mousse au lieu du confort.',
      'Le deuxième jour démarre dans les glaces du petit matin. La Grande Casse — 3855m — domine tout. Ses glaciers descendent en écharpes blanches jusqu\'aux alpages. Les bouquetins regardent passer les randonneurs avec cette indifférence royale qui les caractérise.',
      'Le col de la Vanoise, à 2517m, est le point culminant du tour. Vue à 360°. Les refuges en contrebas semblent des jouets. Les glaciers, eux, semblent immenses et fragiles à la fois — ils reculent chaque été, millimètre par millimètre.',
      'On redescend vers Pralognan en fin d\'après-midi. Les jambes sont lourdes. L\'esprit, lui, est léger.',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=84',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=84',
    ],
  },
]

export function getAdventuresByRegion(region: Region): Adventure[] {
  return adventures.filter(a => a.region === region)
}

export function getAdventure(region: Region, slug: string): Adventure | undefined {
  return adventures.find(a => a.region === region && a.slug === slug)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  facile: 'Facile',
  modérée: 'Modérée',
  difficile: 'Difficile',
}

export const DIFFICULTY_COLOR: Record<Difficulty, string> = {
  facile: 'rgba(82,183,136,0.85)',
  modérée: 'rgba(226,185,126,0.85)',
  difficile: 'rgba(231,111,81,0.85)',
}
