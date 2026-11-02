import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Code Theorie — Préparation à l'examen théorique du permis (Maroc)" },
      { name: "description", content: "Code Theorie : la solution complète pour auto-écoles, moniteurs et élèves au Maroc — code de la route, théorie et gestion." },
      { name: "author", content: "Finza Tech" },
      { property: "og:title", content: "Code Theorie — Préparation à l'examen théorique du permis (Maroc)" },
      { property: "og:description", content: "Code Theorie : la solution complète pour auto-écoles, moniteurs et élèves au Maroc — code de la route, théorie et gestion." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Code Theorie" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@codetheorie" },
      { name: "twitter:title", content: "Code Theorie — Préparation à l'examen théorique du permis (Maroc)" },
      { name: "twitter:description", content: "Code Theorie : la solution complète pour auto-écoles, moniteurs et élèves au Maroc — code de la route, théorie et gestion." },
      { property: "og:image", content: "https://codetheorie.ma/og-codetheorie.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Code Theorie — logiciel auto-école & code de la route au Maroc" },
      { name: "twitter:image", content: "https://codetheorie.ma/og-codetheorie.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png?v=2" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png?v=2" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=2" },
      // Polices auto-hébergées (public/fonts, déclarées dans styles.css) : aucune requête vers
      // Google Fonts, donc aucune donnée visiteur transmise à un tiers.
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/instrument-sans-latin.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/syne-latin.woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Finza Tech",
          legalName: "FINZA TECH SARL",
          url: "https://codetheorie.ma",
          logo: "https://codetheorie.ma/finza-logo.png",
          image: "https://codetheorie.ma/og-codetheorie.jpg",
          description:
            "Éditeur marocain de Code Theorie (entraînement à l'examen théorique du permis, application indépendante de la NARSA) et de Siya9a Pro (logiciel de gestion d'auto-école).",
          email: "support@finza.ma",
          telephone: "+212661349492",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "support@finza.ma",
            telephone: "+212661349492",
            availableLanguage: ["fr", "ar"],
            areaServed: "MA",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "67, rue Chevalier Bayard, 5e étage, n° 16, Belvédère",
            addressLocality: "Casablanca",
            addressCountry: "MA",
          },
          identifier: [
            { "@type": "PropertyValue", name: "ICE", value: "003970415000091" },
            { "@type": "PropertyValue", name: "RC", value: "733497" },
          ],
          sameAs: ["https://finza.ma", "https://siya9apro.ma", "https://mizan.finza.ma"],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Each product route wraps itself with its own data-product and Finza shell. */}
      <Outlet />
    </QueryClientProvider>
  );
}

