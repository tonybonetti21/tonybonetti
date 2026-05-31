import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MotionReveal } from '@/components/motion-reveal'

export const metadata = {
  title: 'Mentions légales — Tony Bonetti',
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <Link href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/60 backdrop-blur-xl transition hover:text-white">
          <ArrowLeft size={14} />
          Retour
        </Link>

        <MotionReveal>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Mentions légales</h1>

          <div className="mt-10 space-y-8 text-sm leading-7" style={{ color: 'rgba(245,240,232,0.65)' }}>
            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">Éditeur du site</h2>
              <p>Tony Bonetti</p>
              <p>Site web : tonybonetti.fr</p>
              <p>Email : contact@tonybonetti.fr</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">Hébergement</h2>
              <p>Vercel Inc.</p>
              <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p>Site web : vercel.com</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo) est la propriété
                exclusive de Tony Bonetti, sauf mention contraire. Toute reproduction, représentation,
                modification ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">Données personnelles</h2>
              <p>
                Ce site ne collecte aucune donnée personnelle à l'exception des statistiques
                de visite anonymes via Plausible Analytics (sans cookies, conforme RGPD).
              </p>
              <p>
                Si vous soumettez votre adresse email via le formulaire de notification, celle-ci
                est utilisée uniquement pour vous informer de la publication de nouveaux guides.
                Vous pouvez demander sa suppression à tout moment en écrivant à contact@tonybonetti.fr.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">Cookies</h2>
              <p>
                Ce site n'utilise aucun cookie. L'outil d'analyse Plausible fonctionne sans cookie
                et ne trace pas les visiteurs entre les sessions.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">Responsabilité</h2>
              <p>
                Les informations fournies sur ce site le sont à titre indicatif. Tony Bonetti ne saurait
                être tenu responsable des erreurs, omissions ou résultats qui pourraient être obtenus
                par un mauvais usage de ces informations. La pratique de la randonnée comporte des risques
                inhérents — chaque sortie reste sous la responsabilité de celui qui la pratique.
              </p>
            </section>
          </div>
        </MotionReveal>
      </div>
    </main>
  )
}
