import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CalendarRange,
  Car,
  Check,
  ClipboardCheck,
  CreditCard,
  Languages,
  Mail,
  Phone,
  Timer,
  Users,
  Video,
} from "lucide-react";
import { FinzaHeader, FinzaFooter } from "@/components/finza";
import { CodeTheorieLogo } from "@/components/finza/CodeTheorieLogo";
import proDashboard from "@/assets/screenshots/pro-dashboard.webp";
import { PUBLISHER } from "@/lib/schema";
import { PRICE_MAD } from "@/lib/pricing";

const SITE_URL = "https://codetheorie.ma";
const TITLE = "Codetheorie — Logiciel auto-école & code de la route Maroc";
const DESCRIPTION =
  `Logiciel auto-école & entraînement code de la route Maroc 2026. Formules Siya9a Pro pour auto-écoles dès 5 900 MAD/an. Accès candidat complet à ${PRICE_MAD} MAD.`;

const FAQ = [
  {
    q: "Est-ce que Siya9a est recommandé par la NARSA ?",
    a: "La NARSA ne recommande aucun outil privé — c'est une agence publique, pas un annuaire de logiciels. Ce qu'elle fait, c'est gérer vos dossiers et examens via son portail officiel. Siya9a n'a jamais eu vocation à remplacer ça : on gère tout ce que la NARSA ne fait pas — votre planning, vos paiements, votre communication avec les élèves. Les deux plateformes fonctionnent en parallèle, pas en concurrence.",
  },
  {
    q: "Combien coûte Siya9a pour une auto-école ?",
    a: "Les formules Siya9a Pro pour auto-écoles débutent à 5 900 MAD/an (Start), 9 900 MAD/an (ÉLITE Medium) et 18 900 MAD/an (ÉLITE Grand Cabinet). Tous les plans incluent onboarding, formation de l'équipe et support WhatsApp.",
  },
  {
    q: "Siya9a est-il certifié ou approuvé par la NARSA ?",
    a: "Non. Siya9a Pro est un logiciel privé et indépendant. Il accompagne la réforme NARSA 2026 comme outil de gestion, mais n'est ni édité, ni certifié, ni recommandé par la NARSA et ne remplace pas son portail.",
  },
  {
    q: "Combien d'élèves puis-je gérer ?",
    a: "Chaque formule inclut un nombre de nouveaux élèves par mois : 20 (Start), 50 (Medium) ou 150 (Grand Cabinet). Au-delà de 150 nouveaux élèves par mois, contactez-nous.",
  },
  {
    q: "La formation de l'équipe est-elle incluse ?",
    a: "Oui. La prise en main en vidéo est incluse dans toutes les formules. La reprise assistée de vos données (import Excel ou documents papier) est incluse à partir de Medium.",
  },
  {
    q: "Quelle est la durée de l'abonnement ?",
    a: "Les abonnements sont annuels, en dirhams marocains, toutes taxes comprises. Chaque paiement couvre douze mois ; il n'y a pas d'abonnement mensuel. L'essai de 14 jours est gratuit et sans carte.",
  },
  {
    q: "Ça marche sur mobile ?",
    a: "Oui. La plateforme est mobile-first : élèves sur smartphone, direction sur tablette ou ordinateur.",
  },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#38bdf8" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_MA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Codetheorie",
          url: `${SITE_URL}/`,
          description: DESCRIPTION,
          image: `${SITE_URL}/og-codetheorie.jpg`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android, iOS",
          inLanguage: "fr-MA",
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "5900",
            highPrice: "18900",
            priceCurrency: "MAD",
            availability: "https://schema.org/InStock",
          },
          publisher: PUBLISHER,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});

const NAV = [
  { label: "Auto-écoles", hash: "ecoles" },
  { label: "Élèves", hash: "eleves" },
  { label: "Tarifs", hash: "tarifs" },
  { label: "Contact", hash: "contact" },
];

const B2B_FEATURES = [
  {
    icon: Users,
    title: "Gestion élèves & moniteurs",
    desc: "Dossiers complets, contrats, documents scannés, statuts en un coup d'œil.",
  },
  {
    icon: CalendarRange,
    title: "Planning & séances",
    desc: "Réservation, présence, séances théorie et conduite — synchronisé pour toute l'équipe.",
  },
  {
    icon: ClipboardCheck,
    title: "Examens blancs illimités",
    desc: "Séries d'entraînement, correction automatique, mode examen chronométré.",
  },
  {
    icon: BarChart3,
    title: "Statistiques de réussite",
    desc: "Taux de réussite par moniteur, par série, par élève. Décisions basées sur les données.",
  },
];



const B2B_PLANS = [
  {
    name: "Start",
    price: "5 900",
    monthly: "≈ 490 MAD/mois",
    ideal: "jusqu'à 20 nouveaux élèves / mois",
    features: [
      "Écosystème complet : panel admin + codetheorie.ma (app élèves) + mode enseignement TV/Beamer",
      "Toutes les fonctionnalités de gestion, sans restriction (élèves, planning, examens, véhicules, moniteurs, finances)",
      "Facturation DGI · TVA 20 % · bulletins de paie CNSS",
      "Portails élèves WhatsApp · audio Darija · contenu d'entraînement au code",
      "Multi-utilisateurs (directeur, secrétaire, moniteur)",
      "20 nouveaux élèves / mois",
      "Support e-mail & WhatsApp · onboarding vidéo",
    ],
    cta: "Démarrer l'essai 14j",
  },
  {
    name: "ÉLITE Medium",
    price: "9 900",
    monthly: "≈ 825 MAD/mois",
    ideal: "jusqu'à 50 nouveaux élèves / mois",
    features: [
      "Tout du plan Start — toutes les fonctionnalités",
      "50 nouveaux élèves / mois",
      "Support prioritaire WhatsApp",
      "Reprise de vos données assistée (import Excel / papier)",
    ],
    cta: "Choisir ce plan",
    featured: true,
  },
  {
    name: "ÉLITE Grand Cabinet",
    price: "18 900",
    monthly: "≈ 1 575 MAD/mois",
    ideal: "jusqu'à 150 nouveaux élèves / mois · multi-filiales",
    features: [
      "Tout du plan Medium",
      "150 nouveaux élèves / mois (au-delà : nous contacter)",
      "Multi-filiales · tableau de bord consolidé",
      "Account manager dédié · objectif de disponibilité 99,5 %",
      "Onboarding sur mesure",
    ],
    cta: "Nous contacter",
  },
];


function LandingPage() {
  return (
    <div data-product="siya9a" className="flex min-h-screen flex-col bg-finza-paper">
      <FinzaHeader
        product="siya9a"
        logo={<CodeTheorieLogo />}
        navLinks={NAV}
        cta={{ label: "Démo gratuite", href: "#ecoles" }}
      />
      <main className="flex-1">
        <Hero />
        <NarsaSection />
        <EcolesSection />
        <CandidatsSection />
        <Ecosystem />
        <FaqSection />
        <FinalCta />
      </main>
      <FinzaFooter product="siya9a" productName="Codetheorie" />
    </div>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-finza-line bg-finza-paper px-5 py-14 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-finza-surface lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-finza-brand/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — texte */}
        <div className="max-w-xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-finza-brand" />
            <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">
              Logiciel de gestion pour auto-écoles · Compatible réforme NARSA 2026
            </span>
          </div>

          <h1 className="text-[38px] font-extrabold leading-[1.02] tracking-tight text-finza-ink sm:text-[58px]">
            Digitalisez votre <span className="text-finza-brand">auto-école</span> en 48h
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-finza-ink-soft">
            NARSA gère vos examens. Siya9a gère votre business — élèves, planning, paiements,
            moniteurs. Les deux ensemble, aucune donnée à ressaisir deux fois.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#ecoles"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-finza-brand px-7 py-4 text-[15px] font-extrabold text-finza-brand-ink shadow-[var(--finza-shadow-brand)] transition-transform hover:-translate-y-0.5"
            >
              Réserver une démo gratuite
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="tel:+212661349492"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-finza-ink px-7 py-4 text-[15px] font-extrabold text-finza-ink transition-colors hover:bg-finza-ink hover:text-finza-paper"
            >
              <Phone className="h-4 w-4" aria-hidden />
              06 61 34 94 92
            </a>
          </div>

          <ul className="mt-10 grid gap-3 border-t border-finza-line pt-6 text-[13px] font-semibold text-finza-ink-soft sm:grid-cols-3">
            {[
              "Lancement 2026 · Places pilotes limitées",
              "Formation équipe incluse",
              "Support WhatsApp en darija",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-finza-brand" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — produit réel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-finza-line bg-white shadow-[var(--finza-shadow)]">
            <div className="flex items-center gap-2 border-b border-finza-line bg-finza-surface px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-finza-line" />
              <span className="h-2 w-2 rounded-full bg-finza-line" />
              <span className="h-2 w-2 rounded-full bg-finza-line" />
              <span className="ml-2 text-[11px] font-bold uppercase tracking-[1.5px] text-finza-ink-soft">
                Siya9a Pro · tableau de bord
              </span>
            </div>
            <img
              src={proDashboard}
              alt="Tableau de bord Siya9a Pro : élèves, planning et paiements d'une auto-école"
              loading="eager"
              className="block w-full"
            />
          </div>

          <a
            href="#eleves"
            className="group mt-5 flex items-center justify-between gap-4 rounded-lg border border-finza-line bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--finza-shadow)]"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-finza-brand-soft text-finza-brand">
                <Car className="h-5 w-5" aria-hidden />
              </span>
              <div className="text-left">
                <p className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-finza-brand">
                  Candidat au permis&nbsp;?
                </p>
                <p className="text-[14px] font-bold text-finza-ink">
                  Teste 3 questions d'entraînement — gratuit, sans inscription
                </p>
              </div>
            </div>
            <ArrowRight
              className="h-4 w-4 shrink-0 text-finza-brand transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- NARSA + SIYA9A ---------- */

function NarsaSection() {
  return (
    <section id="narsa" className="scroll-mt-24 border-t border-finza-line bg-white px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">
            Réforme NARSA 2026
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-finza-ink sm:text-4xl">
            NARSA ou Siya9a&nbsp;? Les deux.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-finza-line bg-finza-paper p-7 shadow-[var(--finza-shadow)]">
            <h3 className="text-[17px] font-extrabold text-finza-ink">NARSA s'occupe de :</h3>
            <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-finza-ink-soft">
              {[
                "Dossiers officiels",
                "Inscription aux examens",
                "Résultats",
                "Conformité réglementaire",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-finza-ink-soft" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-finza-brand bg-finza-brand-soft p-7 shadow-[var(--finza-shadow-brand)]">
            <h3 className="text-[17px] font-extrabold text-finza-ink">Siya9a s'occupe de :</h3>
            <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-finza-ink">
              {[
                "Planning des séances",
                "Suivi des paiements",
                "Rappels WhatsApp",
                "Gestion des moniteurs et véhicules",
                "Statistiques de réussite par élève",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-finza-brand text-finza-brand-ink">
                    <Check className="h-2.5 w-2.5" aria-hidden />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-finza-line bg-finza-paper px-6 py-5 text-center text-[15px] leading-relaxed text-finza-ink-soft">
          Aucune des deux plateformes ne remplace l'autre. Siya9a se connecte à votre flux NARSA dès
          que l'API sera disponible (prévue à partir d'octobre 2026) —{" "}
          <strong className="text-finza-ink">vos données ne seront jamais saisies deux fois.</strong>
        </p>
      </div>
    </section>
  );
}

/* ---------- B2B SECTION ---------- */


function EcolesSection() {
  return (
    <section id="ecoles" className="scroll-mt-24 border-t border-finza-line bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">Pour les auto-écoles</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-finza-ink sm:text-4xl">
            Le cockpit complet de votre auto-école
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] text-finza-ink-soft">
            Fini le cahier, fini Excel. Gérez toute votre auto-école depuis une seule plateforme.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {B2B_FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-finza-line bg-finza-paper p-6 shadow-[var(--finza-shadow)] transition-transform hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-finza-brand-soft text-finza-brand">
                <f.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-[16px] font-extrabold text-finza-ink">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-finza-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div id="tarifs" className="scroll-mt-24 mt-16">
          <div className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">Tarifs transparents · en MAD</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-finza-ink sm:text-3xl">
              Un plan pour chaque taille d'auto-école
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-finza-ink-soft">
              14 jours d'essai gratuit sur tous les plans, sans carte. Abonnement annuel ensuite, toutes taxes comprises. Sur app.siya9apro.ma, choisissez « Créer un compte », puis confirmez votre e-mail.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {B2B_PLANS.map((plan) => (
              <article
                key={plan.name}
                className={
                  plan.featured
                    ? "relative flex flex-col overflow-hidden rounded-3xl border-2 border-finza-brand bg-finza-ink p-8 text-white shadow-[var(--finza-shadow-brand)] lg:-my-4 lg:scale-[1.03]"
                    : "relative flex flex-col overflow-hidden rounded-3xl border border-finza-line bg-white p-8 shadow-[var(--finza-shadow)]"
                }
              >
                {plan.featured && (
                  <>
                    <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-finza-brand/25 blur-3xl" />
                    <span className="relative z-10 mb-4 inline-flex w-fit items-center rounded-full bg-finza-brand px-3 py-1 text-[10px] font-black uppercase tracking-widest text-finza-brand-ink">
                      ⭐ Le plus populaire
                    </span>
                  </>
                )}
                <h3 className={`relative z-10 text-[12px] font-extrabold uppercase tracking-[1.5px] ${plan.featured ? "text-finza-brand" : "text-finza-ink-soft"}`}>
                  {plan.name}
                </h3>
                <div className="relative z-10 mt-3 flex items-baseline gap-1.5">
                  <span className={`text-5xl font-black tracking-tight ${plan.featured ? "text-white" : "text-finza-ink"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-base font-semibold ${plan.featured ? "text-finza-brand" : "text-finza-ink-soft"}`}>
                    MAD/an
                  </span>
                </div>
                <p className={`relative z-10 mt-1 text-xs ${plan.featured ? "text-white/60" : "text-finza-ink-soft"}`}>
                  {plan.monthly} · facturé annuellement
                </p>
                <p className={`relative z-10 mt-3 text-[13px] font-semibold ${plan.featured ? "text-white/80" : "text-finza-ink"}`}>
                  Idéal pour : {plan.ideal}
                </p>
                <ul className="relative z-10 mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px]">
                      <span className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${plan.featured ? "bg-finza-brand text-finza-brand-ink" : "bg-finza-brand-soft text-finza-brand"}`}>
                        <Check className="h-2.5 w-2.5" aria-hidden />
                      </span>
                      <span className={plan.featured ? "text-white/90" : "text-finza-ink"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.name === "ÉLITE Grand Cabinet" ? "https://wa.me/212661349492?text=Bonjour%20Siya9a%20Pro" : "https://app.siya9apro.ma/"}
                  target={plan.name === "ÉLITE Grand Cabinet" ? "_blank" : undefined}
                  rel={plan.name === "ÉLITE Grand Cabinet" ? "noopener noreferrer" : undefined}
                  className={
                    plan.featured
                      ? "relative z-10 mt-8 inline-flex items-center justify-center rounded-full bg-finza-brand py-4 text-sm font-black uppercase tracking-wider text-finza-brand-ink shadow-[var(--finza-shadow-brand)] transition-transform hover:scale-[1.02]"
                      : "relative z-10 mt-8 inline-flex items-center justify-center rounded-full border-2 border-finza-brand py-4 text-sm font-bold text-finza-brand transition-colors hover:bg-finza-brand hover:text-finza-brand-ink"
                  }
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>

          <div id="contact" className="scroll-mt-24 mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 text-center shadow-[var(--finza-shadow)]">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] font-bold text-finza-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" aria-hidden /> support@finza.ma
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" aria-hidden /> 06 61 34 94 92
              </span>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-finza-ink-soft">
              <CreditCard className="h-3.5 w-3.5" aria-hidden /> Paiement sécurisé · Facture DGI conforme envoyée automatiquement
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] font-semibold text-finza-ink">
              <span>YouCan Pay</span>
              <span>·</span>
              <span>Visa</span>
              <span>·</span>
              <span>Mastercard</span>
              <span>·</span>
              <span>Virement bancaire</span>
            </div>
          </div>
        </div>

        {/* Honest positioning + direct CTA */}
        <div className="mt-14 text-center">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-finza-ink-soft">
            Lancement 2026 · Places pilotes limitées
          </p>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-finza-ink-soft">
            On ne masque pas le début du voyage. En 2026 on ouvre un nombre limité d'auto-écoles pilotes
            pour construire l'outil avec elles — support prioritaire et tarif préférentiel inclus.
          </p>
          <a
            href="https://wa.me/212661349492?text=Bonjour%20Siya9a%20Pro%2C%20je%20souhaite%20postuler%20pour%20une%20place%20pilote%202026"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-finza-brand px-6 py-3 text-[14px] font-extrabold text-finza-brand-ink shadow-[var(--finza-shadow-brand)] transition-transform hover:scale-[1.03]"
          >
            Postuler pour une place pilote →
          </a>
          <p className="mt-3 text-[12px] text-finza-ink-soft">
            Réponse sous 24h par WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- B2C SECTION ---------- */

/* ---------- CANDIDATS (link to /eleves) ---------- */

const B2C_FEATURES = [
  {
    icon: BookOpen,
    title: "Séries d'entraînement",
    desc: "1 000 questions classées par thème, avec explications.",
  },
  {
    icon: Timer,
    title: "Mode examen chronométré",
    desc: "Au format de l'examen théorique : 40 questions, correction immédiate. Un entraînement, pas un examen officiel.",
  },
  {
    icon: Video,
    title: "Explications écrites et audio",
    desc: "Chaque réponse expliquée en français et en darija, pour comprendre au lieu d'apprendre par cœur.",
  },
  {
    icon: Languages,
    title: "Français & العربية",
    desc: "Bascule la langue à tout moment, sur téléphone comme sur ordinateur.",
  },
];

function CandidatsSection() {
  return (
    <section
      id="eleves"
      className="relative scroll-mt-24 overflow-hidden border-y border-finza-line bg-finza-surface px-5 py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-finza-brand/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-lg">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-finza-brand" />
            <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">
              Code Theorie · pour les élèves
            </span>
          </div>
          <h2 className="text-[32px] font-extrabold leading-[1.05] tracking-tight text-finza-ink sm:text-[44px]">
            Tu passes le permis&nbsp;? <span className="text-finza-brand">Entraîne-toi ici.</span>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-finza-ink-soft">
            Code Theorie est la plateforme d'entraînement pour les candidats — indépendante de ton
            auto-école. Séries d'entraînement, examens blancs, explications.
          </p>

          <div className="mt-8 rounded-lg border border-finza-line bg-white p-6 shadow-[var(--finza-shadow)]">
            <p className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-finza-ink-soft">
              Accès élève
            </p>
            <p className="mt-2 text-[32px] font-extrabold leading-none text-finza-ink">
              {PRICE_MAD} MAD
            </p>
            <p className="mt-2 text-[14px] font-semibold text-finza-brand">
              Paiement unique, 6 mois d'accès complet
            </p>
            <p className="mt-1 text-[13px] text-finza-ink-soft">
              Aucun abonnement, aucun renouvellement automatique. L'examen blanc gratuit est valable 7 jours
              après l'inscription ou jusqu'à ce que tu l'aies passé.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/eleves"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-finza-brand px-6 py-3 text-[14px] font-bold text-finza-brand-ink transition-transform hover:-translate-y-0.5"
              >
                Espace élèves
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/eleves"
                hash="essai"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-finza-ink px-6 py-3 text-[14px] font-bold text-finza-ink transition-colors hover:bg-finza-paper"
              >
                <Car className="h-4 w-4" aria-hidden />1 examen blanc gratuit
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {B2C_FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-finza-line bg-white p-6 shadow-[var(--finza-shadow)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-finza-brand-soft text-finza-brand">
                <f.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-finza-ink">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-finza-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------- ECOSYSTEM ---------- */

function Ecosystem() {
  return (
    <section className="border-y border-finza-line bg-white px-5 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">Écosystème Finza</p>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-finza-ink sm:text-3xl">
          Codetheorie fait partie de Finza Tech
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] text-finza-ink-soft">
          Des outils marocains pour digitaliser les auto-écoles : gestion, formation et communication.
        </p>
        <p className="mx-auto mt-4 max-w-2xl rounded-2xl border border-finza-line bg-finza-paper px-5 py-3 text-[14px] font-semibold text-finza-ink">
          Siya9a Pro pour votre auto-école, Code Theorie pour vos élèves — même écosystème.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { name: "Codetheorie", tag: "Entraînement code de la route", href: "/eleves" },
            { name: "Siya9a Pro", tag: "Gestion auto-école", href: "https://siya9apro.ma" },
          ].map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="rounded-2xl border border-finza-line bg-finza-paper px-5 py-4 text-left transition-transform hover:-translate-y-1"
            >
              <div className="text-[15px] font-extrabold text-finza-ink">{p.name}</div>
              <div className="text-[13px] text-finza-ink-soft">{p.tag}</div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-[13px] text-finza-ink-soft">
          En savoir plus sur{" "}
          <a href="https://finza.ma" className="font-bold text-finza-brand underline">
            finza.ma
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function FaqSection() {
  return (
    <section className="bg-finza-paper px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-finza-brand">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-finza-ink sm:text-4xl">Questions fréquentes</h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-finza-line bg-white p-5">
              <summary className="flex cursor-pointer items-center justify-between gap-3 text-[16px] font-extrabold text-finza-ink">
                {f.q}
                <span className="text-finza-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-finza-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */

function FinalCta() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-finza-brand to-finza-ink px-8 py-14 text-center text-finza-brand-ink shadow-[var(--finza-shadow-brand)]">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Prêt à commencer ?</h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] opacity-90">
          Choisis ton parcours — démo pour les écoles, entraînement pour les élèves.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#ecoles"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-extrabold text-finza-brand shadow-lg transition-transform hover:scale-[1.02]"
          >
            <Building2 className="h-4 w-4" aria-hidden />
            Je gère une auto-école
            <ArrowRight className="h-4 w-4" aria-hidden />
            <span className="sr-only">Démo</span>
          </a>
          <a
            href="#eleves"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-[15px] font-extrabold text-white transition-colors hover:bg-white/10"
          >
            <Car className="h-4 w-4" aria-hidden />
            Je suis élève
            <ArrowRight className="h-4 w-4" aria-hidden />
            <span className="sr-only">Tester</span>
          </a>
        </div>
      </div>
    </section>
  );
}
