import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sequoia Drone Services',
  description:
    'How Sequoia Drone Services collects, uses, and protects personal information under PIPEDA and CASL.',
  alternates: { canonical: 'https://www.sequoiadrone.ca/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 2026">
      <p>
        Sequoia Drone Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) respects your
        privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal
        information in accordance with the <strong>Personal Information Protection and Electronic
        Documents Act (PIPEDA)</strong> of Canada and Canada&apos;s Anti-Spam Legislation
        (<strong>CASL</strong>).
      </p>

      <h2>1. Information We Collect</h2>
      <p>When you contact us through our website, book a flight, or pay a deposit, we may collect:</p>
      <ul>
        <li><strong>Identity &amp; contact data</strong> — name, email address, phone number.</li>
        <li><strong>Project details</strong> — service type, location, project description.</li>
        <li><strong>Technical data</strong> — IP address, browser type, pages visited (via Google Analytics).</li>
        <li><strong>Payment data</strong> — handled directly by Stripe; we never see your full card number.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide quotes and respond to inquiries.</li>
        <li>To deliver the drone services you have booked.</li>
        <li>To send transactional confirmations (booking, payment, file-delivery emails).</li>
        <li>To improve our website and marketing performance.</li>
        <li>To comply with our legal and regulatory obligations.</li>
      </ul>

      <h2>3. Third-Party Tools</h2>
      <p>We use the following service providers to operate our business:</p>
      <ul>
        <li><strong>Google Analytics 4 &amp; Google Ads</strong> — anonymized site analytics and ad performance tracking.</li>
        <li><strong>Stripe</strong> — secure payment processing for deposits and packages.</li>
        <li><strong>Calendly</strong> — booking calendar for consultations and flights.</li>
        <li><strong>Formspree</strong> — secure delivery of contact-form submissions.</li>
        <li><strong>Google reCAPTCHA</strong> — spam prevention on our forms.</li>
      </ul>
      <p>Each provider has its own privacy policy governing its use of your data.</p>

      <h2>4. Cookies</h2>
      <p>
        Our site uses cookies for analytics (Google Analytics) and conversion tracking (Google
        Ads). You can disable cookies in your browser settings; the site will continue to function
        without them.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain inquiry data for up to <strong>24 months</strong> after last contact, and project
        files for the duration of the engagement plus 12 months for warranty / re-licensing
        purposes. After that we delete or anonymize the records.
      </p>

      <h2>6. Your Rights Under PIPEDA</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Correct any inaccuracies in that information.</li>
        <li>Request deletion of your personal information (subject to legal retention requirements).</li>
        <li>Withdraw consent for marketing communications at any time.</li>
      </ul>

      <h2>7. CASL Compliance</h2>
      <p>
        You will only receive marketing communications from us after providing express consent
        (via the consent checkbox on our lead form). Every commercial email contains an unsubscribe
        link. To opt out at any time, reply to any email with &ldquo;UNSUBSCRIBE&rdquo; or email us
        directly (below).
      </p>

      <h2>8. Contact Us</h2>
      <p>
        For privacy inquiries or to exercise any of the rights above, email{' '}
        <a href="mailto:privacy@sequoiadrone.ca">privacy@sequoiadrone.ca</a>. We will respond within
        30 days as required by PIPEDA.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. We will post the new version on this page
        with an updated &ldquo;Last updated&rdquo; date.
      </p>
    </LegalLayout>
  )
}
