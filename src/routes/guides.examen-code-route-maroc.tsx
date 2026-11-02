import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GuideLayout,
  GuideSection,
  GuideTable,
  GuideFaq,
  faqSchema,
  articleSchema,
  breadcrumbSchema,
  type GuideFaqItem,
} from "@/components/finza/GuideLayout";
import { PRICE_MAD } from "@/lib/pricing";

const PAGE_URL = "https://codetheorie.ma/guides/examen-code-route-maroc";
/** <title> (≤ 60 caractères) ; le H1 complet est HEADLINE. */
const TITLE = "Examen du code au Maroc : déroulé, coût et préparation";
const HEADLINE = "Examen du code de la route au Maroc : déroulé, coût et préparation";
const DESCRIPTION =
  "Comment se passe l'épreuve théorique du permis au Maroc : inscription en auto-école, déroulé de l'examen NARSA, catégories de permis, coût et préparation.";
const UPDATED = "août 2026";
const UPDATED_ISO = "2026-08-01";

const FAQ: GuideFaqItem[] = [
  {
    question: "Peut-on passer le code sans auto-école au Maroc ?",
    answer:
      "Non. Le candidat doit être présenté par un établissement d'enseignement de la conduite agréé, qui constitue le dossier et inscrit le candidat à l'examen organisé par NARSA.",
  },
  {
    question: "L'examen du code est-il disponible en arabe ?",
    answer:
      "Oui, l'épreuve théorique est proposée en arabe ; l'entraînement bilingue français/arabe est donc le plus proche des conditions réelles pour beaucoup de candidats.",
  },
  {
    question: "Combien coûte l'entraînement Code Theorie ?",
    answer:
      `${PRICE_MAD} MAD pour l'accès complet, en achat unique. Ce montant couvre uniquement l'entraînement : les frais d'examen et les frais d'auto-école sont facturés séparément.`,
  },
  {
    question: "Que se passe-t-il en cas d'échec au code ?",
    answer:
      "Le candidat peut repasser l'épreuve ; les modalités et délais de représentation sont fixés par la réglementation et communiqués par l'auto-école. Les frais d'examen sont dus à nouveau.",
  },
];

export const Route = createFileRoute("/guides/examen-code-route-maroc")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: HEADLINE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: PAGE_URL },
      { property: "article:modified_time", content: UPDATED_ISO },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          articleSchema({
            url: PAGE_URL,
            headline: HEADLINE,
            description: DESCRIPTION,
            section: "Candidats",
            modified: UPDATED_ISO,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Accueil", url: "https://codetheorie.ma/" },
            { name: "Guides", url: "https://codetheorie.ma/guides" },
            { name: HEADLINE, url: PAGE_URL },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <GuideLayout
      eyebrow="Candidats"
      title={HEADLINE}
      intro="L'examen du permis de conduire au Maroc comporte une épreuve théorique sur le code de la route (le « code ») puis une épreuve pratique. Ce guide détaille le déroulé de l'épreuve, son coût réel, ce qui dépend de l'auto-école, ce qui dépend de NARSA, et la préparation qui permet de réussir le code de la route du premier coup."
      updated={UPDATED}
      cta={{
        label: `Commencer l'entraînement — ${PRICE_MAD} MAD`,
        href: "/eleves",
        note: "Accès complet en achat unique. Les frais d'examen et d'auto-école ne sont pas inclus.",
      }}
    >
      <GuideSection heading="Le parcours en cinq étapes">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong>Inscription en auto-école agréée</strong> — obligatoire : c'est l'établissement
            qui présente le candidat à l'examen.
          </li>
          <li>
            <strong>Constitution du dossier</strong> — pièce d'identité, photos, visite médicale et
            pièces demandées par l'auto-école.
          </li>
          <li>
            <strong>Formation théorique</strong> — cours en salle et/ou entraînement personnel sur
            des questions d'entraînement.
          </li>
          <li>
            <strong>Épreuve théorique (code)</strong> — organisée par NARSA, sur écran, sous forme
            de questions à choix.
          </li>
          <li>
            <strong>Formation puis épreuve pratique</strong> — heures de conduite, puis examen de
            conduite. Le code doit être obtenu avant.
          </li>
        </ol>
      </GuideSection>

      <GuideSection heading="Qui fait quoi">
        <GuideTable
          head={["Sujet", "Interlocuteur"]}
          rows={[
            ["Date, lieu et validation de l'examen", "NARSA (via l'auto-école)"],
            ["Dossier, convocation, frais", "Auto-école"],
            ["Résultat et délivrance du permis", "NARSA"],
            ["Entraînement aux questions", "Le candidat (Code Theorie, cours en salle)"],
          ]}
        />
        <p>
          Code Theorie est un outil d'entraînement privé. Il n'est ni édité ni recommandé par NARSA
          et ne donne accès à aucune inscription officielle.
        </p>
      </GuideSection>

      <GuideSection heading="Combien ça coûte">
        <GuideTable
          head={["Poste", "Payé à", "Montant"]}
          rows={[
            ["Forfait auto-école (code + conduite)", "Auto-école", "Variable selon la ville et l'établissement"],
            ["Frais d'examen et de titre", "Circuit officiel, via l'auto-école", "Selon tarifs en vigueur"],
            ["Entraînement Code Theorie", "Code Theorie", `${PRICE_MAD} MAD — accès complet`],
          ]}
        />
        <p>
          Nous n'affichons pas de montants officiels chiffrés dans ce guide : ils évoluent et
          doivent être confirmés par votre auto-école ou par{" "}
          <a href="https://www.narsa.ma" className="font-semibold text-finza-brand" rel="noopener">
            narsa.ma
          </a>
          .
        </p>
      </GuideSection>

      <GuideSection heading="Méthode d'entraînement qui fonctionne">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Réviser par thème avant de simuler</strong> : signalisation, priorités, vitesse,
            documents, conduite en agglomération.
          </li>
          <li>
            <strong>Lire la correction, pas seulement le score</strong> : l'erreur comprise ne se
            répète pas.
          </li>
          <li>
            <strong>S'entraîner dans la langue de l'examen</strong> — français ou arabe selon votre
            choix, sans mélanger au dernier moment.
          </li>
          <li>
            <strong>Passer en mode examen chronométré</strong> une fois que les thèmes sont stables,
            pour travailler le rythme et le stress.
          </li>
          <li>
            <strong>Réviser court et souvent</strong> : 20 minutes par jour valent mieux que trois
            heures la veille.
          </li>
        </ul>
        <p>
          L'application est décrite en détail sur{" "}
          <Link to="/eleves" className="font-semibold text-finza-brand">
            la page de l'application Code Theorie
          </Link>
          .
        </p>
      </GuideSection>

      <GuideSection heading="Questions fréquentes">
        <GuideFaq items={FAQ} />
      </GuideSection>
    </GuideLayout>
  );
}
