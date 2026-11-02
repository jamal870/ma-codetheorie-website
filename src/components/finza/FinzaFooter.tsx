import { Link } from "@tanstack/react-router";
import { FINZA_PRODUCTS, COMPANY, type FinzaProductId } from "./products";

interface FinzaFooterProps {
  /** Current product — excluded from "Other products" list. */
  product: FinzaProductId;
  /** Product display name shown in the copyright line. */
  productName: string;
  /** Hide the cross-product "Autres produits" column. */
  hideOtherProducts?: boolean;
}

/**
 * Shared Finza footer.
 */
export function FinzaFooter({ product, productName, hideOtherProducts = false }: FinzaFooterProps) {
  const siblings = hideOtherProducts ? [] : FINZA_PRODUCTS.filter((p) => p.id !== product && p.id !== "finza");

  return (
    <footer className="mt-auto bg-finza-ink text-white">
      <div className={`mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 ${hideOtherProducts ? "lg:grid-cols-4" : "lg:grid-cols-5"}`}>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/50">
            {productName}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Un produit de la famille Finza Tech : des outils marocains pensés pour
            la réalité du terrain. Finza Tech est un éditeur privé, indépendant de la NARSA.
          </p>
        </div>

        {!hideOtherProducts && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">
              Autres produits
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {siblings.map((p) => (
                <li key={p.id}>
                  <a href={p.href} className="text-white/80 hover:text-white">
                    {p.name}{" "}
                    <span className="text-white/40">— {p.tagline}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/50">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${COMPANY.email}`} className="text-white/80 hover:text-white">
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a href={`tel:${COMPANY.phone}`} className="text-white/80 hover:text-white">
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={COMPANY.url} className="text-white/80 hover:text-white">
                {COMPANY.name}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/50">
            Guides
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/guides/reforme-narsa-2026" className="text-white/80 hover:text-white">
                Réforme NARSA 2026
              </Link>
            </li>
            <li>
              <Link to="/guides/examen-code-route-maroc" className="text-white/80 hover:text-white">
                Examen du code au Maroc
              </Link>
            </li>
            <li>
              <Link to="/guides/logiciel-gestion-auto-ecole" className="text-white/80 hover:text-white">
                Choisir un logiciel auto-école
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/50">
            Légal
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/mentions-legales" className="text-white/80 hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/cgv" className="text-white/80 hover:text-white">
                CGV
              </Link>
            </li>
            <li>
              <Link to="/confidentialite" className="text-white/80 hover:text-white">
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name} · {productName}</p>
          <a href={COMPANY.url} className="hover:text-white">
            {COMPANY.tagline}
          </a>
        </div>
      </div>
    </footer>
  );
}
