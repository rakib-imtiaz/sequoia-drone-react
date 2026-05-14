# Sequoia Drone Go-Live Checklist

Mirrors §10 of the Developer Brief. Tick off every item before launching Google Ads campaigns.

---

## Design & Content

- [ ] All brief sections built and visible on `/`
- [ ] Logo uploaded and displays correctly in Navbar + Footer
- [ ] All placeholder copy reviewed and replaced with final client-approved text
- [ ] All images compressed to WebP, <200KB each, with descriptive `alt` text
- [ ] Mobile responsive, tested on iPhone (Safari) and Android (Chrome)
- [ ] Smooth scroll anchor navigation works from header on every section
- [ ] No broken links or 404 errors (run a link checker)
- [ ] Phone number is `tel:` link and clickable on mobile

## Integrations

- [ ] `NEXT_PUBLIC_CALENDLY_URL` set; embed displays and books a real test slot
- [ ] Calendly Event Settings → Confirmation Page → redirect set to `https://www.sequoiadrone.ca/thank-you`
- [ ] Calendly timezone set to **America/Vancouver**
- [ ] Stripe Payment Links created for Starter / Standard / Professional
- [ ] Each Stripe Payment Link success URL → `https://www.sequoiadrone.ca/thank-you`
- [ ] Stripe Refund Policy URL added in Dashboard → Settings → Public Info
- [ ] Stripe Tax enabled for GST/PST in BC
- [ ] Formspree endpoint configured and a test submission delivered to inbox
- [ ] Lead form submits, redirects to `/thank-you`, and arrives in Formspree dashboard
- [ ] reCAPTCHA v3 site key set; submissions show a token in the Formspree payload

## Tracking & Ads

- [ ] `NEXT_PUBLIC_GA4_MEASUREMENT_ID` set; GA4 Real-Time shows page-view from staging URL
- [ ] `generate_lead` event fires on `/thank-you` (verify in GA4 DebugView)
- [ ] `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` + `_LABEL` set
- [ ] Google Ads → Tools → Conversions shows the conversion firing (Tag Assistant)
- [ ] Global site tag (gtag) installed on every page (visible in page source)
- [ ] Google Search Console property verified for `sequoiadrone.ca`
- [ ] `sitemap.xml` submitted in Search Console (URL: `/sitemap.xml`)

## Legal & Compliance

- [ ] `/privacy` live, linked in footer, mentions PIPEDA + CASL + cookies
- [ ] `/terms` live, linked in footer, governing law set to BC
- [ ] `/refund` live, linked in footer, matches the policy filed in Stripe
- [ ] Lead form has CASL consent checkbox linking to `/privacy` + `/terms`
- [ ] SSL active, site reachable only via `https://`
- [ ] No copyrighted images used without license
- [ ] All testimonials are real (no fabricated reviews, per Google Ads policy)

## Performance

- [ ] PageSpeed Insights mobile score ≥ **85**
- [ ] PageSpeed Insights desktop score ≥ **95**
- [ ] Largest Contentful Paint < **3.0s** on mobile
- [ ] All hero & above-fold images served as WebP
- [ ] No render-blocking scripts (gtag uses `strategy="afterInteractive"`)
- [ ] Cloudflare (or other CDN) configured for caching

## Final Checks

- [ ] H1 on `/` contains the literal strings **"Kamloops"** and **"BC"** (Google Ads exact-match)
- [ ] Meta title ≤ 60 chars, contains primary keywords
- [ ] Meta description ≤ 160 chars, contains "Kamloops", "BC Interior", "drone services"
- [ ] LocalBusiness JSON-LD schema validates at https://search.google.com/test/rich-results
- [ ] Destination URL in every Google Ad exactly matches a live page on the site
- [ ] Phone number visible without scrolling on mobile (header or hero)
- [ ] No autoplay-with-audio media; no full-screen popups on load

---

Once every box is checked, hand the file back to the client with a signed-off date before the Google Ads campaigns go live.
