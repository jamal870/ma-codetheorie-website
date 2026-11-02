import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalBlock, LegalRow } from "@/components/finza/LegalLayout";
import { LEGAL } from "@/components/finza/legal";
import { COMPANY } from "@/components/finza";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Siya9a Pro & Code Theorie" },
      {
        name: "description",
        content:
          "Mentions légales de Finza Tech, éditeur de Siya9a Pro et Code Theorie : identité, RC, ICE, identifiant fiscal et hébergement.",
      },
      { property: "og:title", content: "Mentions légales — Siya9a Pro & Code Theorie" },
      {
        property: "og:description",
        content: "Identité de l'éditeur, identifiants légaux et hébergement du site codetheorie.ma.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://codetheorie.ma/mentions-legales" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://codetheorie.ma/mentions-legales" }],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales du site codetheorie.ma">
      <LegalBlock heading="Éditeur du site">
        <p>
          <strong className="text-finza-ink">{LEGAL.companyName}</strong> — {LEGAL.legalForm}
        </p>
        <p>Siège social : {LEGAL.address}</p>
        <p>
          Téléphone :{" "}
          <a href={`tel:${COMPANY.phone}`} className="font-semibold text-finza-brand">
            +212 661 349 492
          </a>
        </p>
        <p>
          E-mail :{" "}
          <a href={`mailto:${COMPANY.email}`} className="font-semibold text-finza-brand">
            {COMPANY.email}
          </a>
        </p>
        <p>
          Site web :{" "}
          <a href="https://codetheorie.ma" className="font-semibold text-finza-brand">
            codetheorie.ma
          </a>
        </p>
      </LegalBlock>

      <LegalBlock heading="Identifiants légaux">
        <LegalRow label="Registre du commerce" value={`${LEGAL.rc} — ${LEGAL.rcCourt}`} />
        <LegalRow label="ICE" value={LEGAL.ice} />
        <LegalRow label="Identifiant fiscal (IF)" value={LEGAL.if} />
        <LegalRow label="Taxe professionnelle (TP)" value={LEGAL.tp} />
        <LegalRow label="Affiliation CNSS" value={LEGAL.cnss} />
        <LegalRow label="Numéro BO (Bulletin officiel)" value={LEGAL.bo} />
        <LegalRow label="Dépôt des actes" value={LEGAL.deposit} />
      </LegalBlock>

      <LegalBlock heading="Hébergement">
        <p>
          Site vitrine : Netlify, Inc. — 512 2nd Street, Suite 200, San Francisco, CA 94107,
          États-Unis (réseau CDN).
        </p>
        <p>
          Applications et bases de données (Code Theorie, Siya9a Pro, Mizan) : Hostinger
          International Ltd. — 61 Lordou Vironos Street, 6023 Larnaca, Chypre (Union européenne).
        </p>
        <p>
          Les traitements et transferts de données sont déclarés auprès de la CNDP conformément à la
          loi marocaine 09-08. Détails dans notre politique de confidentialité.
        </p>
      </LegalBlock>

      <LegalBlock heading="Propriété intellectuelle">
        <p>
          Les textes, logos et le code source de ce site sont la propriété de Finza Tech, sauf
          mention contraire. Certains contenus d'entraînement (questions, illustrations) sont
          fondés sur des supports de la NARSA, dont les droits restent à leurs titulaires.
        </p>
      </LegalBlock>

      <LegalBlock heading="Indépendance et absence de garantie">
        <p>
          Code Theorie est une application indépendante de préparation à l'examen théorique du
          permis de conduire. Elle n'est ni éditée, ni approuvée, ni certifiée par la NARSA. Les
          examens blancs sont des entraînements, pas des examens officiels. Finza Tech ne garantit
          pas la réussite à l'examen ; seule la NARSA organise l'examen officiel.
        </p>
      </LegalBlock>

      <LegalBlock heading="Marques">
        <p>Mizan et Siya9a sont des marques déposées par Finza Tech.</p>
      </LegalBlock>
    </LegalLayout>
  );
}
