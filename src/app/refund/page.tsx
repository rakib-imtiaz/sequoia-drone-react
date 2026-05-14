import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Sequoia Drone Services',
  description:
    'Cancellation windows, refund tiers, and weather-rescheduling rules for Sequoia Drone Services bookings.',
  alternates: { canonical: 'https://www.sequoiadrone.ca/refund' },
  robots: { index: true, follow: true },
}

export default function RefundPage() {
  return (
    <LegalLayout title="Cancellation & Refund Policy" lastUpdated="May 2026">
      <p>
        Every flight requires pilot scheduling, airspace coordination, and equipment preparation,
        so cancellations have real cost implications. The policy below is designed to be fair to
        both parties and complies with Stripe&apos;s merchant-policy requirements.
      </p>

      <h2>1. Cancellation Windows</h2>
      <ul>
        <li>
          <strong>48+ hours before flight:</strong> <strong>Full refund</strong> of the deposit.
        </li>
        <li>
          <strong>24 to 48 hours before flight:</strong> <strong>50% refund</strong>. The remaining
          50% covers pilot reservation and airspace booking costs.
        </li>
        <li>
          <strong>Less than 24 hours, same-day, or no-show:</strong> <strong>No refund</strong>.
          The full deposit is forfeited.
        </li>
      </ul>

      <h2>2. Weather Cancellations (by Sequoia)</h2>
      <p>
        If we cancel a flight due to weather, NAV CANADA airspace restrictions, or safety concerns,
        we will offer:
      </p>
      <ul>
        <li>A <strong>free reschedule</strong> to the next mutually-available date, OR</li>
        <li>A <strong>full refund</strong> of any amounts paid, at your option.</li>
      </ul>
      <p>Safety always comes first. We will never push a flight that risks our pilots, your property, or image quality.</p>

      <h2>3. Weather Cancellations (by Client)</h2>
      <p>
        If a client wishes to cancel because of forecast weather concerns more than 24 hours
        before flight, we will reschedule at no charge.
      </p>

      <h2>4. Refund Processing</h2>
      <ul>
        <li>All approved refunds are processed via the <strong>original payment method (Stripe)</strong>.</li>
        <li>Processing time: <strong>5–10 business days</strong> to appear on your statement.</li>
        <li>Any applicable Stripe processing fees may be deducted from the refund amount.</li>
      </ul>

      <h2>5. How to Request a Refund</h2>
      <p>
        Email <a href="mailto:hello@sequoiadrone.ca">hello@sequoiadrone.ca</a> with:
      </p>
      <ol>
        <li>Your booking confirmation number (from Stripe or Calendly).</li>
        <li>The reason for cancellation.</li>
        <li>Your preferred refund method (default: original payment card).</li>
      </ol>
      <p>We will acknowledge the request within 2 business days and confirm next steps.</p>

      <h2>6. Disputes</h2>
      <p>
        Please contact us first before opening a chargeback. Most issues can be resolved directly
        and more quickly than going through your bank. Chargebacks opened before we have had a
        chance to respond may forfeit the right to a partial refund under this policy.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        This policy may be updated periodically. The version in effect on the date of your booking
        governs your engagement.
      </p>
    </LegalLayout>
  )
}
