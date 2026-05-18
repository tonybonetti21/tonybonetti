export interface Spot {
  id: string
  name: string
  region: string
  country: string
  image: string
  articleUrl?: string
}

export const spots: Spot[] = [
  { id: 'oeschinensee', name: 'Oeschinensee', region: 'Alpes bernoises', country: 'Suisse', image: '/images/spots/oeschinensee.jpg' },
  { id: 'blausee', name: 'Blausee', region: 'Kandertal', country: 'Suisse', image: '/images/spots/blausee.jpg' },
  { id: 'lauterbrunnen', name: 'Lauterbrunnen', region: 'Oberland bernois', country: 'Suisse', image: '/images/spots/lauterbrunnen.jpg' },
  { id: 'lac-bleu-evolene', name: "Lac Bleu d'Évolène", region: 'Valais', country: 'Suisse', image: '/images/spots/lac-bleu.jpg' },
  { id: 'limmernsee', name: 'Limmernsee', region: 'Glaris', country: 'Suisse', image: '/images/spots/limmernsee.jpg' },
  { id: 'cascades-jura', name: 'Cascades du Jura', region: 'Jura', country: 'France', image: '/images/spots/jura-cascades.jpg' },
]
