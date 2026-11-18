/**
 * Shared schema.org nodes. Every nested Organization (publisher, author) carries the fields
 * search engines recommend (logo, sameAs, contactPoint), not only name and url.
 */
export const SITE_URL = "https://codetheorie.ma";

export const PUBLISHER = {
  "@type": "Organization",
  name: "Finza Tech",
  url: "https://finza.ma",
  logo: `${SITE_URL}/finza-logo.png`,
  sameAs: [SITE_URL, "https://siya9apro.ma", "https://mizan.finza.ma"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@finza.ma",
    telephone: "+41767790383",
    availableLanguage: ["fr", "ar"],
    areaServed: "MA",
  },
} as const;
