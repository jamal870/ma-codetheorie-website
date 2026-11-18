# Politique de sécurité

## Signaler une vulnérabilité

Si vous découvrez une faille de sécurité sur **codetheorie.ma** ou dans ce dépôt,
merci de **ne pas** ouvrir d'issue publique. Écrivez-nous directement :

- E-mail : **support@finza.ma** (objet : « Sécurité codetheorie.ma »)
- Téléphone / WhatsApp : +41 76 779 03 83
- Fichier machine-lisible : https://codetheorie.ma/.well-known/security.txt (RFC 9116)

Merci d'indiquer l'URL concernée, les étapes pour reproduire le problème et,
si possible, l'impact estimé. Nous accusons réception sous 3 jours ouvrés et
tenons le rapporteur informé jusqu'à la correction.

## Périmètre

- Site vitrine `codetheorie.ma` (ce dépôt : TanStack Start, rendu côté serveur sur Netlify).
- Les applications `app.codetheorie.ma` et `app.siya9apro.ma` ont leur propre dépôt ;
  les signalements les concernant sont reçus à la même adresse.

## Mesures en place

- En-têtes de sécurité (CSP avec nonce par requête, HSTS, X-Frame-Options,
  Referrer-Policy, Permissions-Policy) dans `netlify.toml` et `src/server.ts`.
- Aucun service tiers côté navigateur : polices auto-hébergées, pas de traqueur.
- Dépendances surveillées par Dependabot (`.github/dependabot.yml`),
  versions figées dans `bun.lock`.
- Aucun secret versionné (voir `.gitignore`).
