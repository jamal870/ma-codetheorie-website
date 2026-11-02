import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FinzaHeader, FinzaFooter } from "@/components/finza";
import { CodeTheorieLogo } from "@/components/finza/CodeTheorieLogo";
import loginShot from "@/assets/screenshots/01-login.webp";
import registerShot from "@/assets/screenshots/02-register.webp";
import dashboardShot from "@/assets/screenshots/03-dashboard.webp";
import seriesShot from "@/assets/screenshots/04-series.webp";
import quizShot from "@/assets/screenshots/05-quiz.webp";
import { PUBLISHER } from "@/lib/schema";

const THEME_COLOR = "#38bdf8";

const PAGE_URL = "https://codetheorie.ma/eleves";
const TITLE = "Code Theorie — Entraînement au code de la route Maroc, darija";
const DESCRIPTION =
  "1 000 questions d'entraînement au code de la route, examens blancs illimités, français + darija, hors-ligne. 1 examen blanc gratuit (7 jours), puis 49 MAD / 6 mois. Sans abonnement, sans carte.";

const REGISTER_URL = "https://app.codetheorie.ma/?mode=register";

const NAV = [
  { label: "Fonctionnalités", hash: "features" },
  { label: "Aperçu", hash: "screens" },
  { label: "Tarif élève", hash: "offre" },
  { label: "FAQ", hash: "faq" },
];

const PAINS = [
  {
    icon: "📚",
    title: "Supports papier dépassés ?",
    desc: "Les cahiers papier ne sont pas toujours à jour. Vérifie que ton support correspond au programme en vigueur.",
  },
  {
    icon: "⏰",
    title: "Pas de temps pour l'auto-école ?",
    desc: "Horaires fixes, cours groupés, trajet fatigant. Tu perds des semaines pour un examen théorique.",
  },
  {
    icon: "💸",
    title: "800 à 1 500 MAD pour le code ?",
    desc: "Les auto-écoles facturent cher juste pour la partie théorique. Tu paies pour une salle, pas pour progresser.",
  },
  {
    icon: "🤯",
    title: "Explications en français strict ?",
    desc: "Difficile de suivre quand la langue de tous les jours c'est la darija. Résultat : tu apprends par cœur sans comprendre.",
  },
];

const FEATURES = [
  { icon: "🎯", title: "1 000 questions d'entraînement", desc: "Des questions au format de l'examen théorique du permis B, avec explications en français et en darija." },
  { icon: "📝", title: "25 séries thématiques", desc: "Panneaux, priorités, nuit, alcool, autoroute… chaque thème isolé pour progresser." },
  { icon: "🎧", title: "Écoute en Darija", desc: "Chaque question lisible en français ET écoutable en darija marocaine (bouton audio)." },
  { icon: "📊", title: "Examens blancs illimités", desc: "40 questions chronométrées, au format de l'examen théorique. Score immédiat. Un entraînement, pas un examen officiel." },
  { icon: "📴", title: "Fonctionne hors-ligne", desc: "3,7 Mo de cache — révise dans le taxi, le tram, le désert. Sync dès que le wifi revient." },
  { icon: "📲", title: "Installable comme une app", desc: "Ajoute-la à ton écran d'accueil en 1 clic — iPhone, Android, PC. Pas d'App Store." },
  { icon: "🏆", title: "Suivi de progression", desc: "Streak, taux de réussite, évolution sur 7 jours et derniers examens blancs. Tu vois où tu en es." },
  { icon: "🔒", title: "Sans abonnement piège", desc: "49 MAD / 6 mois, accès complet. Zéro débit automatique, zéro carte enregistrée." },
];

const SCREENS = [
  { src: dashboardShot, title: "Ton tableau de bord", desc: "Ton taux de réussite, ton streak, ton prochain examen blanc — tout en un coup d'œil." },
  { src: quizShot, title: "Une question d'entraînement", desc: "Photo réelle, choix multiples, bouton « Écouter en darija ». Comprends avant de répondre." },
  { src: seriesShot, title: "25 séries thématiques", desc: "Panneaux, priorités, nuit, autoroute… bosse un thème à la fois." },
  { src: loginShot, title: "Connexion sécurisée", desc: "Email ou numéro marocain. Reste connecté sur tous tes appareils." },
  { src: registerShot, title: "Inscription en 30 secondes", desc: "Aucune carte bancaire. 1 examen blanc gratuit dès l'inscription, valable 7 jours." },
];

const COMPARE = [
  ["Prix", "800 à 1 500 MAD", "49 MAD"],
  ["Disponibilité", "Horaires fixes", "24/7 · partout"],
  ["Mise à jour", "Livre papier (selon l'édition)", "Mis à jour par l'éditeur"],
  ["Nombre de questions", "≈ 200 dans le livre", "1 000 d'entraînement"],
  ["Examens blancs", "1 × en salle", "Illimités"],
  ["Suivi de progression", "Aucun", "Live · par thème"],
  ["Écoute en darija", "Non", "Oui, chaque question"],
  ["Mode hors-ligne", "—", "3,7 Mo de cache"],
];

const OFFER_FEATURES = [
  "1 000 questions d'entraînement au format de l'examen",
  "25 séries thématiques",
  "Examens blancs illimités",
  "Français + Darija (audio)",
  "Mode hors-ligne complet",
  "Support WhatsApp 7j/7",
  "Aucun renouvellement automatique",
];

const FAQS: ReadonlyArray<readonly [string, string]> = [
  ["Est-ce un examen officiel ou certifié ?", "Code Theorie est une application indépendante de préparation à l'examen théorique. Elle n'est ni éditée, ni approuvée, ni certifiée par la NARSA. Les examens blancs sont des entraînements, pas des examens officiels, et aucune réussite à l'examen n'est garantie. Seule la NARSA organise l'examen officiel."],
  ["Comment fonctionne l'examen blanc gratuit ?", "Inscription email, pas de carte → 1 examen blanc complet gratuit, valable 7 jours après l'inscription ou jusqu'à ce que tu l'aies passé (selon ce qui arrive en premier). Pour les séries, la révision et les examens blancs illimités : 49 MAD / 6 mois, par virement, reçu sur WhatsApp."],
  ["Combien coûte l'accès complet ?", "49 MAD / 6 mois. Pas d'abonnement, pas de renouvellement automatique. Paiement par virement ou Wafacash, reçu sur WhatsApp."],
  ["Comment je paye ?", "Par virement bancaire ou Wafacash, puis tu nous envoies le reçu sur WhatsApp. C'est la méthode principale. Carte bancaire marocaine (CMI) disponible en option via YouCan Pay."],
  ["Est-ce que ça marche sans internet ?", "Oui. Depuis le tableau de bord, télécharge le contenu pour l'utiliser hors-ligne. Tu peux alors réviser sans connexion ; ta progression se synchronise dès que le wifi revient."],
  ["C'est disponible en darija ?", "Oui. L'interface est en français, mais chaque question dispose d'un bouton « Écouter » qui lit la question et les réponses en darija marocaine. Idéal si tu comprends mieux à l'oral."],
  ["Comment j'installe l'app sur mon téléphone ?", "Sur iPhone : ouvre Safari → codetheorie.ma → bouton Partager → « Sur l'écran d'accueil ». Sur Android : Chrome te propose automatiquement « Installer l'app ». Pas besoin d'App Store."],
  ["Je peux annuler à tout moment ?", "Il n'y a rien à annuler — c'est un paiement unique de 49 MAD / 6 mois. Aucune carte n'est stockée, aucun débit ne se déclenche automatiquement."],
  ["Ça marche sur ordinateur aussi ?", "Oui — la même app fonctionne sur PC, Mac, tablette et téléphone. Tu te connectes avec le même compte partout, ta progression est synchronisée en temps réel."],
  ["Mes données sont-elles en sécurité ?", "Oui. Aucune donnée revendue. Aucune publicité. Hébergement sécurisé, paiements via YouCan Pay. Tu peux supprimer ton compte à tout moment."],
  ["Combien de temps faut-il pour se préparer ?", "Cela dépend de ton niveau et de ton rythme. Le tableau de bord te montre ta progression ; c'est une indication d'entraînement, pas une garantie de réussite à l'examen."],
];

export const Route = createFileRoute("/eleves")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: THEME_COLOR },
      { name: "keywords", content: "code de la route maroc, NARSA 2026, examen théorique permis maroc, application code route, كود السياقة المغرب, darija" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_MA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Code Theorie",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web, iOS, Android",
          url: PAGE_URL,
          description: DESCRIPTION,
          image: "https://codetheorie.ma/og-codetheorie.jpg",
          inLanguage: ["fr-MA", "ar-MA"],
          offers: {
            "@type": "Offer",
            price: "49",
            priceCurrency: "MAD",
            availability: "https://schema.org/InStock",
            url: REGISTER_URL,
          },
          publisher: PUBLISHER,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }),
      },
    ],
  }),
  component: ElevesPage,
});

function ElevesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div data-product="siya9a" className="flex min-h-screen flex-col bg-finza-paper">
      <FinzaHeader
        product="siya9a"
        logo={<CodeTheorieLogo />}
        navLinks={NAV}
        cta={{ label: "🚀 1 examen blanc gratuit", href: REGISTER_URL }}
        logoTo="/"
        hideProductSwitcher
      />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-finza-brand-soft via-finza-paper to-finza-paper px-5 py-14 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-finza-brand/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[12px] font-bold text-finza-brand shadow-sm">
                🎯 Préparation à l'examen théorique · 1 000 questions
              </div>
              <h1 className="text-[40px] font-black leading-[1.05] tracking-tight text-finza-ink sm:text-[56px]">
                Entraîne-toi au{" "}
                <span className="text-finza-brand">code de la route</span>{" "}
                sans y passer 3 mois
              </h1>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-finza-ink-soft">
              L'app marocaine pour t'entraîner à l'examen théorique du permis : 1 000 questions d'entraînement,
              examens blancs illimités, français + darija en audio, hors-ligne.
              <strong className="text-finza-ink"> 1 examen blanc gratuit</strong>, puis <strong className="text-finza-ink">49 MAD / 6 mois</strong> — au lieu de 1 200 MAD à l'auto-école.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={REGISTER_URL}
                  className="inline-flex items-center justify-center rounded-full bg-finza-brand px-7 py-4 text-[15px] font-extrabold text-finza-brand-ink shadow-[var(--finza-shadow-brand)] transition-transform hover:scale-[1.02]"
                >
                  🚀 1 examen blanc gratuit — 7 jours, sans carte
                </a>
                <a
                  href="#offre"
                  className="inline-flex items-center justify-center rounded-full border-2 border-finza-brand px-7 py-4 text-[15px] font-extrabold text-finza-brand transition-colors hover:bg-finza-brand-soft"
                >
                  Voir les tarifs
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-finza-ink-soft">
                <span>📲 Installable en 1 clic</span>
                <span>💳 Aucune carte requise</span>
                <span>🇲🇦 100% marocain</span>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div aria-hidden className="absolute inset-0 -z-10 mx-auto h-[520px] w-[280px] rotate-3 rounded-[48px] bg-gradient-to-br from-finza-brand/30 to-finza-brand/5 blur-xl" />
              <div className="relative">
                <img
                  src={dashboardShot}
                  alt="Écran du tableau de bord Code Theorie — taux de réussite, streak, examen blanc"
                  className="h-auto w-[280px] rounded-[36px] border-[6px] border-finza-ink shadow-[var(--finza-shadow)] sm:w-[320px]"
                  loading="eager"
                />
                <img
                  src={quizShot}
                  alt="Question d'entraînement avec bouton Écouter en darija"
                  className="absolute -bottom-6 -left-10 hidden h-auto w-[180px] rotate-[-8deg] rounded-[28px] border-[6px] border-finza-ink shadow-[var(--finza-shadow-brand)] sm:block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-finza-line bg-white px-5 py-10">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["1 000", "Questions d'entraînement"],
              ["37", "Séries thématiques"],
              ["1", "Examen blanc gratuit"],
              ["49 MAD", "Paiement unique · 6 mois"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-black text-finza-brand sm:text-4xl">{n}</div>
                <div className="mt-1 text-[13px] text-finza-ink-soft">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">Ça te parle ?</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-finza-ink sm:text-4xl">
                Le code de la route, c'est devenu compliqué
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {PAINS.map((p) => (
                <div key={p.title} className="rounded-2xl border border-finza-line bg-white p-6 shadow-[var(--finza-shadow)]">
                  <div className="mb-3 text-3xl">{p.icon}</div>
                  <h3 className="text-[17px] font-extrabold text-finza-ink">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-finza-ink-soft">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-[15px] text-finza-ink-soft">
              → On a construit Code Theorie exactement pour résoudre ces 4 problèmes.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-finza-surface px-5 py-20" style={{ scrollMarginTop: 80 }}>
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">Ce que tu obtiens</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-finza-ink sm:text-4xl">
                Tout ce qu'il te faut pour t'entraîner
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-finza-ink-soft">
                Optimisé mobile. Zéro publicité.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-2xl bg-white p-6 shadow-[var(--finza-shadow)] transition-transform hover:-translate-y-1">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-finza-brand-soft text-2xl">{f.icon}</div>
                  <h3 className="text-[16px] font-extrabold text-finza-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-finza-ink-soft">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section id="screens" className="px-5 py-20" style={{ scrollMarginTop: 80 }}>
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">Aperçu de l'app</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-finza-ink sm:text-4xl">
                Regarde à quoi ça ressemble
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {SCREENS.map((s) => (
                <figure key={s.title} className="flex flex-col items-center">
                  <img
                    src={s.src}
                    alt={s.title}
                    className="h-auto w-full max-w-[240px] rounded-[28px] border-[5px] border-finza-ink shadow-[var(--finza-shadow)]"
                    loading="lazy"
                  />
                  <figcaption className="mt-5 max-w-xs text-center">
                    <div className="text-[16px] font-extrabold text-finza-ink">{s.title}</div>
                    <p className="mt-1 text-sm text-finza-ink-soft">{s.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARE */}
        <section className="bg-finza-surface px-5 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">Comparaison honnête</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-finza-ink sm:text-4xl">
                Auto-école classique vs. Code Theorie
              </h2>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-finza-line bg-white shadow-[var(--finza-shadow)]">
              <table className="w-full text-left text-[14px] sm:text-[15px]">
                <thead>
                  <tr className="bg-finza-surface">
                    <th className="px-4 py-3.5 font-bold text-finza-ink-soft sm:px-6"></th>
                    <th className="px-4 py-3.5 font-extrabold text-finza-ink sm:px-6">Classique</th>
                    <th className="px-4 py-3.5 font-extrabold text-finza-brand sm:px-6">Code Theorie</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map(([k, a, b], i) => (
                    <tr key={k} className={i % 2 === 0 ? "" : "bg-finza-surface/40"}>
                      <td className="px-4 py-3.5 font-semibold text-finza-ink sm:px-6">{k}</td>
                      <td className="px-4 py-3.5 text-finza-ink-soft sm:px-6">{a}</td>
                      <td className="px-4 py-3.5 font-bold text-finza-ink sm:px-6">✓ {b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="offre" className="px-5 py-20" style={{ scrollMarginTop: 80 }}>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">Tarifs transparents</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-finza-ink sm:text-4xl">
                1 examen blanc gratuit, puis 49 MAD / 6 mois
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-finza-ink-soft">
                Un seul paiement, 6 mois d'accès complet. Aucun abonnement. Aucun renouvellement automatique.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
              {/* Trial card */}
              <div className="rounded-3xl border-2 border-dashed border-finza-brand bg-finza-brand-soft p-8">
                <div className="text-[12px] font-extrabold uppercase tracking-[1.5px] text-finza-brand">
                  🎁 1 examen blanc gratuit · 7 jours
                </div>
                <div className="mt-3 text-[42px] font-black leading-none text-finza-ink">Gratuit · 1 examen blanc</div>
                <p className="mt-2 text-[13px] text-finza-ink-soft">
                  Valable 7 jours après l'inscription ou jusqu'à ce que tu l'aies passé, selon ce qui arrive en premier.
                </p>
                <ul className="mt-6 space-y-2.5 text-[15px]">
                  {[
                    "1 examen blanc complet gratuit",
                    "Aucune carte bancaire requise",
                    "Aucun renouvellement automatique",
                    "Aucun débit automatique",
                    "Accès premium en 2 min sur WhatsApp",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-finza-ink">
                      <span className="font-black text-finza-brand">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={REGISTER_URL}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full border-2 border-finza-brand bg-white px-7 py-4 text-[15px] font-extrabold text-finza-brand transition-colors hover:bg-finza-brand hover:text-finza-brand-ink"
                >
                  Faire l'examen blanc gratuit
                </a>
              </div>

              {/* Premium card */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-finza-brand bg-gradient-to-br from-finza-ink to-finza-ink/95 p-8 text-white shadow-[var(--finza-shadow-brand)]">
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-finza-brand/25 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-finza-brand px-3 py-1 text-[11px] font-black uppercase tracking-widest text-finza-brand-ink">
                    ⭐ Le choix des élèves
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-[56px] font-black leading-none">49</span>
                    <span className="text-2xl font-bold opacity-80">MAD</span>
                  </div>
                  <div className="mt-1 text-sm opacity-70">Paiement unique · 6 mois</div>
                  <ul className="mt-6 space-y-2.5 text-[15px]">
                    {OFFER_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="font-black text-finza-brand">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={REGISTER_URL}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-finza-brand px-7 py-4 text-[15px] font-extrabold text-finza-brand-ink shadow-[var(--finza-shadow-brand)] transition-transform hover:scale-[1.02]"
                  >
                    🚀 Démarrer — 49 MAD / 6 mois
                  </a>
                </div>
              </div>
            </div>

            {/* Payment methods */}
            <div className="mt-10 rounded-2xl bg-finza-surface p-6 text-center">
              <div className="text-[13px] font-bold text-finza-ink-soft">
                💶 Paiement par virement / Wafacash + reçu WhatsApp — carte CMI en option
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-finza-ink">
                <span>Virement bancaire</span>
                <span>·</span>
                <span>Wafacash</span>
                <span>·</span>
                <span>Reçu sur WhatsApp</span>
                <span>·</span>
                <span className="text-finza-brand">CMI via YouCan Pay (option)</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-finza-surface px-5 py-20" style={{ scrollMarginTop: 80 }}>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">Questions fréquentes</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-finza-ink sm:text-4xl">
                Tout ce que tu te demandes
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {FAQS.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <div key={q} className="overflow-hidden rounded-xl border border-finza-line bg-white">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[16px] font-bold text-finza-ink"
                      aria-expanded={open}
                    >
                      <span>{q}</span>
                      <span
                        className="shrink-0 text-finza-brand transition-transform"
                        style={{ transform: open ? "rotate(180deg)" : undefined }}
                      >
                        ▼
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-4 text-[15px] leading-relaxed text-finza-ink-soft">{a}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-finza-brand to-finza-ink px-8 py-14 text-center text-finza-brand-ink shadow-[var(--finza-shadow-brand)]">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Prêt à t'entraîner ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] opacity-90">
              Crée ton compte en 30 secondes. 1 examen blanc gratuit pour tester, valable 7 jours. Aucune carte.
            </p>
            <a
              href={REGISTER_URL}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-extrabold text-finza-brand shadow-lg transition-transform hover:scale-[1.02]"
            >
              🚀 Faire mon examen blanc gratuit
            </a>
            <p className="mt-4 text-xs opacity-80">
              Puis 49 MAD / 6 mois pour séries + révision + examens illimités. Zéro abonnement.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-finza-ink-soft">
            Code Theorie est une application indépendante de préparation à l'examen théorique. Elle
            n'est ni éditée, ni approuvée, ni certifiée par la NARSA. Les examens blancs sont des
            entraînements, pas des examens officiels, et aucune réussite à l'examen n'est garantie.
          </p>
        </section>

        {/* WhatsApp floating */}
        <a
          href="https://wa.me/212661349492?text=Bonjour%20Code%20Theorie"
          target="_blank"
          rel="noopener"
          aria-label="Contacter le support Code Theorie sur WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
          style={{ background: "#25D366" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
        </a>
      </main>

      <FinzaFooter product="siya9a" productName="Code Theorie" hideOtherProducts />
    </div>
  );
}
