import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sequoia Drone Services',
  description:
    'Terms and conditions governing the use of Sequoia Drone Services across Kamloops, the BC Interior, and Greater Vancouver.',
  alternates: { canonical: 'https://www.sequoiadrone.ca/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="May 2026">
      <p>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your engagement with Sequoia
        Drone Services (&ldquo;Sequoia,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By booking a
        flight, paying a deposit, or submitting a quote request, you agree to these Terms.
      </p>

      <h2>1. Services Offered</h2>
      <p>
        Sequoia provides professional drone services including aerial photography and video, real
        estate tours, construction progress monitoring, agricultural and land imaging, inspections,
        3D mapping &amp; surveying, event coverage, and film &amp; media production support across
        Kamloops, the BC Interior, and the Greater Vancouver / Lower Mainland area.
      </p>
      <p>
        The scope of each engagement is defined by the written quote or booking confirmation. Items
        not explicitly listed in the quote are not included.
      </p>

      <h2>2. Client Responsibilities</h2>
      <ul>
        <li>Provide accurate project details, contact information, and site access.</li>
        <li>Obtain permission from any private property owners where flights will take place.</li>
        <li>Disclose any known hazards (overhead wires, restricted areas, livestock, etc.).</li>
        <li>Ensure the client (or signing party) is at least 18 years of age.</li>
      </ul>

      <h2>3. Limitation of Liability</h2>
      <p>
        Drone operations are weather- and airspace-dependent. Sequoia is not liable for delays,
        cancellations, or partial captures caused by:
      </p>
      <ul>
        <li>Adverse weather (wind, precipitation, smoke, low visibility).</li>
        <li>NAV CANADA airspace restrictions or NOTAMs imposed after booking.</li>
        <li>Site-access denial or unsafe ground conditions discovered on arrival.</li>
        <li>Equipment failure outside our control, force majeure events.</li>
      </ul>
      <p>
        Our maximum total liability for any claim arising out of services rendered is limited to
        the amount paid by the client for those services.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        Unless a full buyout is agreed in writing, Sequoia retains copyright and ownership of all
        raw footage, processed imagery, and final deliverables. Clients receive a perpetual,
        non-exclusive license to use the delivered files for the project&apos;s stated purpose.
        Resale or sublicensing of footage to third parties requires written permission.
      </p>

      <h2>5. Payment Terms</h2>
      <p>
        A deposit (typically 30–50% of project value) is required to secure the booking. The
        balance is due on delivery of files. Payments are processed via Stripe. All prices are in
        Canadian dollars (CAD); applicable GST/PST is added at checkout.
      </p>

      <h2>6. Cancellation &amp; Refunds</h2>
      <p>
        Cancellations are governed by our <a href="/refund">Cancellation &amp; Refund Policy</a>.
        Please review it before booking.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the <strong>Province of British Columbia</strong>{' '}
        and the federal laws of Canada applicable therein.
      </p>

      <h2>8. Dispute Resolution</h2>
      <p>
        The parties agree to first attempt to resolve any dispute through good-faith negotiation.
        If unresolved within 30 days, disputes shall be submitted to mediation in Kamloops, BC,
        before any litigation is commenced. The courts of British Columbia shall have exclusive
        jurisdiction over any unresolved claims.
      </p>

      <h2>9. Changes to These Terms</h2>
      <p>
        Sequoia may update these Terms from time to time. The version in effect on the date of
        your booking governs the engagement. Continued use of the site or services after changes
        are posted constitutes acceptance of the new Terms.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms? Email{' '}
        <a href="mailto:hello@sequoiadrone.ca">hello@sequoiadrone.ca</a>.
      </p>
    </LegalLayout>
  )
}
