import CaseStudyDetail from '@/components/sections/casestudies/CaseStudyDetail'

export const metadata = {
  title: 'Topographic Survey — BC Interior | Case Study',
  description: 'Detailed topographic mapping matching Civil 3D standards.',
}

// In a real app, this would fetch the case study data based on the slug.
// For this template, we are just rendering the static CaseStudyDetail layout.
export default function SingleCaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <CaseStudyDetail />
    </main>
  )
}

// Generate static params for the template links so Next.js doesn't 404
export function generateStaticParams() {
  return [
    { slug: 'bc-interior' },
    { slug: 'highway-1' },
    { slug: 'fraser-valley' },
    { slug: 'kamloops-mine' },
    { slug: 'kelowna-vineyard' },
  ]
}
