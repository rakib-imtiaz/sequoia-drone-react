# Sequoia Drone — Website Build Plan v3.0
> Next.js 14 + Tailwind CSS + Framer Motion + Lenis
> Dark theme (primary) + White theme (select pages)
> Two-pillar: Survey/Engineering + Environmental Intelligence

---

## SITE MAP — ALL PAGES

```
/                    → Homepage           (dark theme)
/services            → Services           (dark theme)
/hardware            → Hardware           (dark theme)
/industries          → Industries         (white theme)
/case-studies        → Case Studies       (white theme)
/case-studies/[slug] → Case Study Detail  (mixed: white hero + dark sections)
/about               → About             (mixed: dark hero + white story)
/contact             → Contact           (white theme)
```

---

## PACKAGES TO INSTALL

```bash
npm install framer-motion
npm install lenis
npm install lucide-react
npm install react-countup
npm install react-intersection-observer
```

```json
"dependencies": {
  "next": "14.x",
  "react": "^18",
  "framer-motion": "^11",
  "lenis": "^1.1.x",
  "lucide-react": "^0.383.0",
  "react-countup": "^6.x",
  "react-intersection-observer": "^9.x"
}
```

---

## DESIGN SYSTEM

### Color Tokens
```css
/* Dark Theme */
--bg:           #0a0a0a
--surface:      #111111
--surface-hi:   #161616
--border-dark:  rgba(255,255,255,0.08)
--text:         #ffffff
--muted:        rgba(255,255,255,0.55)

/* White Theme */
--bg-light:     #ffffff
--surface-light:#f5f5f2
--border-light: #e8e8e4
--text-light:   #1a1a1a
--muted-light:  #666666

/* Accents (both themes) */
--cyan:   #4DEBFF   ← Survey/Engineering pillar
--green:  #4CAF72   ← Environmental pillar
--orange: #E8612A   ← CTAs only
--olive:  #3d4a2e   ← italic headline accent (dark sections only)

/* Shared */
--radius: 16px
--ease:   cubic-bezier(.165,.84,.44,1)
```

### Typography
```
Font: Space Grotesk (Google Fonts — weights 300, 400, 500, 600, 700)
Headline: clamp(36px, 5vw, 64px) | weight 700 | line-height 1.1
Subhead:  clamp(22px, 3vw, 36px) | weight 600
Body:     15px | weight 400 | line-height 1.65
Caption:  12–13px | weight 500 | letter-spacing 0.08em
Eyebrow:  11px | weight 500 | letter-spacing 0.14em | uppercase
```

---

## FILE STRUCTURE

```
sequoia-drone-react/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx                    ← Homepage
│   │   ├── services/page.tsx
│   │   ├── hardware/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── case-studies/page.tsx
│   │   ├── case-studies/[slug]/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollProgressBar.tsx
│   │   ├── ui/
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── StaggerText.tsx
│   │   │   ├── ParallaxImage.tsx
│   │   │   ├── TiltCard.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   └── ClipReveal.tsx
│   │   └── sections/ (one file per section)
│   └── hooks/
│       └── useParallax.ts
```

---

## ANIMATION SYSTEM — FULL SPEC

### Rules (never break)
```
PERFORMANCE:
  Only animate: opacity, transform (translate/scale/rotate), clipPath
  Never animate: width, height, top, left, margin, padding → causes reflow/jank
  Both Framer Motion and raw CSS must follow this rule

SCROLL REVEAL:
  viewport: { once: true }   — never re-trigger on bounce
  margin: '-80px'            — trigger just before element enters viewport
  Default: y:40→0, duration 0.65s, ease [0.165,0.84,0.44,1]

STAGGER:
  Desktop: 0.08s between children
  Mobile:  0.05s (users scroll faster)

PARALLAX SPEEDS:
  Background layer:   speed 30–50 (moves least)
  Mid layer:          speed 50–70
  Foreground float:   speed 20–30
  Hero image:         speed 80–100 max

MOBILE DISABLE (hover:none media query):
  TiltCard       → plain div
  MagneticButton → plain button
  Background orb parallax → static
  Hero parallax  → cap y at 20px max

PREFERS-REDUCED-MOTION:
  Set all durations to 0, skip all transforms
  Check: window.matchMedia('(prefers-reduced-motion:reduce)').matches
```

### ScrollReveal.tsx
```tsx
'use client'
import { motion } from 'framer-motion'
export default function ScrollReveal({ children, delay = 0, y = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.165, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

### ClipReveal.tsx — image wipe-in
```tsx
'use client'
import { motion } from 'framer-motion'
export default function ClipReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.165, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

### StaggerText.tsx — word-by-word headline
```tsx
'use client'
import { motion } from 'framer-motion'
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const word = {
  hidden: { y: 60, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ease: [0.165, 0.84, 0.44, 1], duration: 0.7 } },
}
export default function StaggerText({ text, className }) {
  return (
    <motion.h1 className={className} variants={container} initial="hidden" animate="show">
      {text.split(' ').map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block mr-[0.25em]">{w}</motion.span>
      ))}
    </motion.h1>
  )
}
```

### useParallax.ts
```tsx
import { useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
export function useParallax(distance = 80) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance])
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 })
  return { ref, y: smoothY }
}
```

### ParallaxImage.tsx
```tsx
'use client'
import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'
import Image from 'next/image'
export default function ParallaxImage({ src, alt, speed = 60 }) {
  const { ref, y } = useParallax(speed)
  return (
    <div ref={ref} className="overflow-hidden rounded-2xl relative w-full h-full">
      <motion.div style={{ y }} className="scale-110 w-full h-full absolute inset-0">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  )
}
// Mobile: pass speed={speed * 0.5}
```

### TiltCard.tsx — 3D mouse tracking (desktop only)
```tsx
'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
export default function TiltCard({ children, className }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })
  function onMouseMove(e) {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onMouseLeave() { x.set(0); y.set(0) }
  return (
    <motion.div className={className} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
      {children}
    </motion.div>
  )
}
// MOBILE: if (window.matchMedia('(hover:none)').matches) return <div className={className}>{children}</div>
```

### MagneticButton.tsx
```tsx
'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
export default function MagneticButton({ children, className, onClick }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })
  function onMouseMove(e) {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  function onMouseLeave() { x.set(0); y.set(0) }
  return (
    <motion.button className={className} style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} onClick={onClick}>
      {children}
    </motion.button>
  )
}
// MOBILE: render plain <button> if (hover:none)
```

### ScrollProgressBar.tsx
```tsx
'use client'
import { motion, useScroll, useSpring } from 'framer-motion'
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#4DEBFF] z-[100]" />
  )
}
```

### Lenis Smooth Scroll — SmoothScrollProvider.tsx
```tsx
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
// In layout.tsx: wrap <html> children with <SmoothScrollProvider>
```

---

## BENTO GRID DESIGN SYSTEM

```
BENTO PRINCIPLES:
  Asymmetric grid — mix 1/3, 2/3, 1/2, and full-width cells
  All cells: rounded-2xl, overflow-hidden
  Dark cells: bg #111111, border rgba(255,255,255,0.07)
  Light cells: bg #f5f5f2, border #e8e8e4
  Gap: 16–20px
  Never equal-size boring grids — always vary cell widths/heights

CELL TYPES:
  A. Image cell:   full-bleed ParallaxImage, gradient overlay, text bottom-left
  B. Stats cell:   large number (cyan/orange) + label, no image, dark bg
  C. Feature cell: icon top-left, title, desc, tool badge bottom-right
  D. Process cell: numbered badge + step content
  E. Banner cell:  full-width, gradient bg, centered text

HOVER (all cells):
  border-color: rgba(77,235,255,0.3) on dark / #4DEBFF on light
  box-shadow:   0 0 24px rgba(77,235,255,0.06)
  duration:     300ms ease
  TiltCard wrapper on desktop (max 6deg)

ANIMATIONS:
  Image cells:   ClipReveal (wipe from bottom)
  Stats cells:   CountUp on inView
  Feature cells: ScrollReveal y:30→0
  Stagger:       0.08s between cells
```

---
---
# PAGE 1 — HOMEPAGE  (/)**
**Theme: Dark**
---

## HP-1 | NAVBAR
```
Fixed top | height 56px
bg: transparent → on scroll: rgba(10,10,10,0.85) + backdrop-blur-md + bottom border rgba(255,255,255,0.08)
padding: 0 48px desktop / 0 20px mobile

Logo (left): flame SVG orange + "Sequoia" — Space Grotesk 600, 15px, #fff, gap 8px
Nav (center, absolute): Solutions | Hardware | Industries | About
  400, 14px, rgba(255,255,255,0.65), gap 32px, hover → #4DEBFF 200ms
CTA (right): MagneticButton — "Get a Quote" | bg #E8612A | pill | 10px 22px | 500 14px
ScrollProgressBar: cyan 2px top of page

MOBILE: hamburger → slide-down drawer bg #111111
  Nav items stacked, 48px height, border-bottom rgba(255,255,255,0.06)
  CTA full-width at bottom
```

## HP-2 | HERO
```
bg #0a0a0a | min-height 100vh | padding-top 80px
Grid: 52% left / 48% right | gap 48px | align-items center
max-width 1200px | padding 0 48px

LEFT:
  Eyebrow row: orange 32px line (2px height) + "ORGANIC INDUSTRIALISM" 11px 500 #E8612A letter-spacing 0.14em
  Headline (StaggerText): "Survey-Grade Data. For Land & Living Ecosystems."
    "Living" → color #4DEBFF
    700 | clamp(38px,5vw,60px) | #fff
  Subtext: "From centimeter-accurate topographic surveys to canopy health
    mapping — Sequoia delivers CAD-ready deliverables and environmental
    intelligence across BC's most challenging terrain."
    400 | 15px | rgba(255,255,255,0.55) | max-width 400px | line-height 1.65
  Buttons:
    MagneticButton: "Explore Solutions →" | bg #E8612A | white | pill | 12px 24px
    Ghost: "View Hardware" | transparent | rgba(255,255,255,0.65)
    Gap: 12px

RIGHT:
  Wrapper: bg #1a2018 | radius 20px | overflow hidden | aspect-ratio 4/4.8
  Image: ParallaxImage speed=80 — drone over BC forest
  Floating stat card (absolute bottom:-16px right:-16px):
    bg white | radius 12px | padding 12px 16px | shadow 0 8px 32px rgba(0,0,0,0.3)
    Left: orange square 8x8px radius 4px
    Right top: "SURVEY ACCURACY" 10px 500 letter-spacing 0.1em #999
    Right mid: "±2cm RMS" 700 18px #1a1a1a
    Right bot: "PPK Verified" 11px 500 #4DEBFF

ANIMATIONS:
  Left: x:-40→0 opacity:0→1 | duration 0.8
  Right: x:40→0 scale:0.96→1 | delay 0.15
  Headline: StaggerText stagger 0.08s
  Floating card: y:16→0 opacity:0→1 | delay 0.6
  Image: ClipReveal delay 0.2

IMAGE: "DJI drone flying over BC forest misty mountains cinematic dark moody portrait 4:5"

MOBILE: single column | image above text | image aspect-ratio 16/10 | buttons stack full-width
```

## HP-3 | SERVICES OVERVIEW
```
bg #2a3426 | padding 80px 48px | max-width 1200px

Header (left):
  Eyebrow: "OUR CORE SERVICES"
  Heading: "Two Disciplines. One Platform."
  Orange underline: 48px wide, 3px, #E8612A
  Subtext: "Whether you need survey-grade CAD deliverables or environmental
    intelligence — Sequoia covers both." | 14px rgba(255,255,255,0.55)

Cards grid: repeat(3, 1fr) | gap 20px | margin-top 48px
Mobile: 1 column

EACH CARD:
  bg #1e2b1a | border 1px rgba(255,255,255,0.07) | radius 16px
  padding 24px 20px 0 20px | overflow hidden | flex column

  Icon: 28px Lucide | top-left
  Left border accent: 3px colored strip left edge of card
  Title: 600 17px #fff | margin-top 16px
  Desc:  13px rgba(255,255,255,0.55) | line-height 1.5 | margin-top 8px
  Bottom image: margin-top auto | height 160px | full width flush | object-cover

  Card 1 — Survey & Engineering:
    Icon: Target #4DEBFF | accent border #4DEBFF
    Desc: "Centimeter-level aerial data into industry-standard CAD deliverables."
    Image: orthomosaic / CAD map top-down view

  Card 2 — Environmental Intelligence:
    Icon: Leaf #4CAF72 | accent border #4CAF72
    Desc: "Spectral and thermal imaging for forestry, agriculture, and land stewardship."
    Image: forest canopy NDVI aerial view

  Card 3 — LiDAR Indoor Scanning:
    Icon: Scan #E8612A | accent border #E8612A
    Desc: "Walk-and-scan BIM-ready point clouds for structures and interiors."
    Image: colorized 3D point cloud

HOVER: scale 1.02 | border rgba(255,255,255,0.18) | 300ms
ANIMATIONS: stagger 0.12s | y:40→0 opacity:0→1
```

## HP-4 | HOW IT WORKS
```
bg #0a0a0a | padding 80px 48px | max-width 1200px

Eyebrow: "THE PROCESS"
Heading: "Simple Steps. Precise Results."

4 horizontal steps | desktop: flex row | mobile: flex column

Each step:
  Number badge: circle 40px | border 1.5px solid #4DEBFF | color #4DEBFF | 600 16px
  Icon: 20px Lucide above number
  Title: 600 17px #fff | margin-top 12px
  Desc: 13px rgba(255,255,255,0.55) | 2 lines

Connecting line between badges:
  motion.div | scaleX tied to section scrollYProgress
  height 1.5px | bg linear-gradient(to right, #4DEBFF, #4CAF72)
  Origin: left

Steps:
  1. Flight Planning — ClipboardList — "Polygon mission, 80/70 overlap. DJI Pilot 2 app."
  2. Ground Control — Radio — "Emlid RS3 base station. PPK raw data logging in field."
  3. Processing — Cpu — "Emlid Studio PPK correction + Pix4Dmatic photogrammetry."
  4. Deliverables — FileDown — "DXF, orthomosaic, point cloud — formatted for your workflow."

Mobile: vertical stack | line on left side of steps
```

## HP-5 | HARDWARE SHOWCASE
```
bg #0a0a0a | padding 80px 48px | max-width 1200px

Header row (space-between flex, align-items flex-end):
  Left: "Hardware Showcase" 700 40px #fff + "The fleet engineered for precision." 14px rgba(255,255,255,0.45)
  Right: "View All Fleet →" 14px 500 #E8612A | hover: underline + arrow translateX(3px)

Grid: repeat(2, 1fr) | gap 20px | margin-top 32px
Mobile: 1 column

Each card (4 total):
  height 320px | radius 16px | overflow hidden | position relative
  TiltCard wrapper (desktop)

  ParallaxImage speed=30 — full bleed
  Gradient overlay: linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.8) 100%)

  Tag pill (absolute top:16px right:16px):
    bg rgba(255,255,255,0.12) | backdrop-blur-md | border 1px rgba(255,255,255,0.2)
    pill | 11px 500 #fff | padding 4px 12px

  Text (absolute bottom, padding 24px):
    Name: 600 20px #fff
    Desc: 13px rgba(255,255,255,0.65) 1 line

Cards:
  DJI Mavic 3 Enterprise  | Mechanical global shutter. 4/3 CMOS sensor.   | Aerial Survey
  Emlid Reach RS3          | Multi-band GNSS. PPK/RTK. ±cm accuracy.        | Ground Control
  Leica BLK2GO             | Handheld LiDAR. 420K pts/sec.                  | LiDAR Scanning
  Pix4D Suite              | Pix4Dmatic + Pix4Dsurvey pipeline.             | Processing

HOVER: TiltCard 6deg + image scale 1.04
ANIMATIONS: stagger 0.1s | x:60→0 opacity:0→1

IMAGE SEARCH:
  "DJI Mavic 3 Enterprise drone dark studio product photo"
  "Emlid Reach RS3 GNSS tripod field survey outdoor"
  "Leica BLK2GO handheld laser scanner"
  "Pix4D point cloud 3D interface dark software"
```

## HP-6 | STATS BANNER
```
bg #111111 | padding 64px 48px

4 stats horizontal | dividers between (1px rgba(255,255,255,0.08) vertical)
Mobile: 2x2 grid

±2cm     | Positional Accuracy
100%     | CAD-Ready Deliverables
BC       | Primary Service Region
PPK+RTK  | GNSS Methods Supported

Number: 700 clamp(40px,6vw,64px) #4DEBFF
Label:  500 13px rgba(255,255,255,0.55) letter-spacing 0.1em uppercase
CountUp on inView (react-countup + react-intersection-observer)
```

## HP-7 | CONTACT FORM
```
bg #0a0a0a | padding 80px 48px

Outer card: bg #111111 | radius 24px | padding 48px
Grid: 50% form left / 50% image right | gap 48px
Mobile: single column

LEFT — FORM:
  Heading: "Ready to scope your project?" | 700 36px #fff
  Subtext: 14px rgba(255,255,255,0.55)
  Inputs: bg #161616 | border rgba(255,255,255,0.12) | radius 10px | height 44px
  Focus: border #4DEBFF | glow 0 0 0 3px rgba(77,235,255,0.12)
  Placeholder: rgba(255,255,255,0.25)
  Row 1: Full Name + Work Email (gap 12px)
  Row 2: Industry select — Land Surveying | Engineering | Forestry | Mining | Agriculture | Municipal | Other
  Row 3: Project description textarea 4 rows | resize none
  Submit: MagneticButton full-width | bg #E8612A | white | height 48px | 500 15px | radius 10px
  Success: AnimatePresence — form fades out, success card scales in

RIGHT — IMAGE + STAT:
  ParallaxImage speed=30 — BC aerial landscape
  Overlay rgba(0,0,0,0.3)
  Centered: "±2cm" 700 80px #fff + "RMS Accuracy Achieved" 14px rgba(255,255,255,0.65) uppercase letter-spacing

IMAGE: "British Columbia aerial landscape forest mountains drone cinematic dark"
```

## HP-8 | FOOTER
```
bg #060d04 | padding 64px 48px 32px

Grid: 1.6fr 1fr 1fr 1fr | gap 48px

Col 1 Brand: logo + tagline 13px rgba(255,255,255,0.4) max-width 200px line-height 1.6
Col 2 Services: Topographic Surveys | Feature Extraction | PPK Ground Control | LiDAR Scanning | Canopy Analysis | Environmental Mapping
Col 3 Company: About | Hardware | Industries | Case Studies | Careers | Press Kit
Col 4 Contact: hello@sequoiadrone.ca | British Columbia, Canada | Social icons (LinkedIn, Instagram, X)

Links: 13px rgba(255,255,255,0.45) | hover → #4DEBFF + translateX(3px) | 200ms

Divider: 1px rgba(255,255,255,0.08) | margin-top 48px
Bottom: © 2024 Sequoia Drone Systems. All Rights Reserved. | Privacy Policy | Terms of Service
  12px rgba(255,255,255,0.25)

Mobile: 2-col grid | bottom bar stacked centered
```

---
---
# PAGE 2 — SERVICES (/services)
**Theme: Dark**
---

## SV-1 | HERO
```
bg #0a0a0a | min-height 70vh | centered text
Full-screen ParallaxImage speed=100 | dark overlay rgba(0,0,0,0.65)

Eyebrow: "WHAT WE DO"
Headline StaggerText: "Survey-Grade Intelligence. At Every Scale."
Subtext: "Two interconnected disciplines — precision land surveying and
  environmental intelligence — delivered as a complete service."
CTA row: "Get a Quote" (orange pill) + "View Case Studies" (ghost)
```

## SV-2 | SURVEY & ENGINEERING DETAIL
```
bg #0a0a0a | padding 100px 48px
Split: 45% text left / 55% visual right | gap 64px

LEFT:
  Eyebrow: "SURVEY & ENGINEERING" | color #4DEBFF
  Heading: "From Flight to CAD-Ready Files."
  Steps 1–6 (stagger ScrollReveal 0.1s each):
    Each step: number badge (circle, cyan border) + title 600 16px + desc 14px muted
    1. Flight Planning  — polygon mission, 80/70 overlap, DJI Pilot 2
    2. PPK Ground Control — Emlid RS3, NGS monument, no internet
    3. PPK Processing   — Emlid Studio, base station log correction
    4. Photogrammetry   — Pix4Dmatic, DSM, point cloud, orthomosaic
    5. Feature Extraction — Pix4Dsurvey, classify, clean, vectorize
    6. CAD Export       — DXF, TIN, contours → AutoCAD Civil 3D
  Accuracy badge pill: "±2cm RMS | PPK Verified | Civil 3D Compatible"
    bg rgba(77,235,255,0.08) | border #4DEBFF | text #4DEBFF

RIGHT — BENTO GRID (3 cells):
  Cell 1 (tall, left): full-bleed orthomosaic image | ClipReveal
  Cell 2 (top-right): 3D point cloud image | ClipReveal
  Cell 3 (bottom-right): stats card bg #111111
    "DXF Export" 600 18px #4DEBFF + "Civil 3D Compatible" muted + "±2cm RMS" large
  All cells TiltCard | radius 16px
```

## SV-3 | ENVIRONMENTAL INTELLIGENCE DETAIL
```
bg #111111 | padding 100px 48px
Split: 55% visual left / 45% text right

LEFT — 2x2 card grid (same structure as HP services cards):
  Canopy Analysis — Tree #4CAF72 — multispectral forest image
  Soil Health Mapping — Layers #4CAF72 — thermal map image
  Forestry Assessment — Activity #4CAF72 — LiDAR forest image
  Environmental Monitoring — Eye #4CAF72 — time-series aerial

RIGHT:
  Eyebrow: "ENVIRONMENTAL INTELLIGENCE" | color #4CAF72
  Heading: "Aerial Data for Living Landscapes."
  Desc: "Multispectral and thermal imaging helps land managers,
    forestry teams, and agricultural operations make decisions
    grounded in real field data."
  Tool badges: "Multispectral" | "Thermal" | "NDVI" | "LiDAR + RGB"
    Pills: bg rgba(76,175,114,0.08) | border #4CAF72 | text #4CAF72
```

## SV-4 | DELIVERABLES BENTO GRID
```
bg #0a0a0a | padding 80px 48px

Heading: "What You Actually Receive."
Subtext: "Every project ends with files your team can use immediately."

BENTO LAYOUT:
  Row 1: [Cell A 2/3 wide] + [Cell B 1/3 wide, spans rows 1+2]
  Row 2: [Cell C 1/3] + [Cell D 1/3]
  Row 3: [Cell E full width, short]
  Gap: 16px

Cell A (large image): orthomosaic aerial map | ClipReveal
  Overlay text bottom-left: "Orthomosaic Map" 600 22px #fff + "Geo-corrected aerial basemap" muted

Cell B (tall stats): bg #111111 | centered content
  ColorIzed point cloud image top half | text bottom half
  "420K pts/sec" large #4DEBFF + "Classified & Cleaned" label

Cell C (feature): bg #111111
  FileCode icon #4DEBFF | "DXF Export" title | "Civil 3D Compatible" | "TIN + Contours + Vector"

Cell D (feature): bg #111111
  CheckCircle icon #4CAF72 | "Accuracy Report" | "RMS Error: ±2cm" | "PPK Verified"

Cell E (banner): bg linear-gradient(135deg, rgba(77,235,255,0.06), rgba(76,175,114,0.06))
  border rgba(255,255,255,0.07)
  "All formats: DXF | DWG | GeoTIFF | LAS/LAZ | E57 | IFC"
  Center | 500 15px rgba(255,255,255,0.7)

HOVER all cells: border rgba(77,235,255,0.3) | shadow 0 0 24px rgba(77,235,255,0.06)
ANIMATIONS: stagger 0.08s | ClipReveal on image cells | ScrollReveal on feature cells
```

---
---
# PAGE 3 — HARDWARE (/hardware)
**Theme: Dark**
---

## HW-1 | HERO
```
bg #0a0a0a | min-height 60vh | centered
Subtle CSS grid pattern overlay or abstract point cloud image + heavy dark overlay

Eyebrow: "THE FLEET"
Headline StaggerText: "Precision Hardware. Built for BC Terrain."
Subtext: "Every tool chosen for accuracy, reliability, and integration
  into survey-grade workflows."
```

## HW-2 | HARDWARE BENTO
```
bg #0a0a0a | padding 80px 48px

Heading: "The Complete Stack."

LAYOUT:
  Banner card (full width, height 240px) — DJI Mavic 3
  3-col grid below (height 300px each) — Emlid | BLK2GO | Pix4D
  Gap: 16px

Banner card:
  ParallaxImage speed=60 — wide drone panorama cinematic
  Gradient: rgba(0,0,0,0.75)→transparent left to right
  Left text zone (padding 40px):
    Tag pill "Primary Survey Drone" | bg rgba(77,235,255,0.12) text #4DEBFF
    "DJI Mavic 3 Enterprise" 700 36px #fff
    Specs row: "4/3 CMOS · Mechanical Shutter · 45min · PPK Ready"
      Each spec: cyan dot + 13px rgba(255,255,255,0.65)

3-col cards:
  Emlid RS3: image + overlay "Multi-Band GNSS" + specs "RTK | PPK | ±7mm+1ppm" | tag "Ground Control"
  BLK2GO: image + overlay "Handheld LiDAR" + specs "420K pts/sec | SLAM | BIM Ready" | tag "Indoor Scanning"
  Pix4D: software UI screenshot + overlay "Photogrammetry" + specs "Pix4Dmatic + Pix4Dsurvey" | tag "Processing"

BELOW BENTO — specs table card:
  bg white | radius 16px | padding 32px | max-width 1000px
  table: Hardware | Accuracy | Primary Use | Output Format
  4 rows | alternating bg #f9f9f7 / white
  Header: bg #1a1a1a text white
  Cyan left border on DJI row (featured)
  (This is the white accent card on a dark page — creates contrast break)
```

## HW-3 | WORKFLOW INTEGRATION
```
bg #111111 | padding 80px 48px

Heading: "How It All Connects."
Subtext: "The complete pipeline from flight to deliverable."

Horizontal flow diagram:
  [DJI Drone] → [Emlid RS3] → [Emlid Studio] → [Pix4Dmatic] → [Pix4Dsurvey] → [AutoCAD Civil 3D]

Each node:
  Circle 56px | bg #161616 | border 1.5px rgba(255,255,255,0.15)
  Lucide icon inside centered
  Label below: 500 13px rgba(255,255,255,0.65)

Connecting arrow lines:
  motion.div scaleX: tied to section scrollYProgress
  Survey chain: #4DEBFF | Environmental: #4CAF72
  Arrow head: small triangle SVG

Below nodes — 3 stat highlights:
  ±2cm accuracy achieved | 420K pts/sec capture | DXF ready < 24hrs
  Each: large number #4DEBFF + label muted
  CountUp on inView

Mobile: vertical stack with line on left
```

---
---
# PAGE 4 — INDUSTRIES (/industries)
**Theme: WHITE**
---

## IN-1 | HERO
```
bg #ffffff | min-height 60vh | left-aligned
padding 120px 48px | max-width 1200px

Eyebrow: "WHO WE SERVE" — orange 32px line + text #E8612A
Headline: "Built for BC's Most Demanding Sectors."
  "BC's" → color #4DEBFF on white background
  700 | clamp(38px,5vw,60px) | #1a1a1a
Subtext: 15px #666666 | max-width 520px
CTA: "View All Services →" | bg #1a1a1a | white | pill | 12px 28px

Right side (absolute or grid): 2x2 image grid
  4 images: BC forest canopy | construction site | farmland | mine site
  Each: radius 12px | height 140px | object-cover | no gaps
  Slight offset layout (staggered y position)

Bottom — ticker/marquee bar:
  bg #f5f5f2 | height 48px | overflow hidden
  Infinite scroll left — "Land Surveying · Engineering · Forestry · Mining · Agriculture · Municipal · "
  Font 500 14px #1a1a1a | letter-spacing 0.06em
  No pause on hover
```

## IN-2 | INDUSTRIES GRID
```
bg #ffffff | padding 80px 48px

Heading: "Six Sectors. One Trusted Partner." | #1a1a1a 700 large
Subtext: 14px #666

Grid: repeat(3, 1fr) | gap 24px | margin-top 48px
Mobile: 1 column

EACH CARD:
  bg #f5f5f2 | radius 16px | padding 32px | border 1px #e8e8e4
  HOVER: bg #ffffff | border-color #4DEBFF | shadow 0 4px 24px rgba(0,0,0,0.08) | translateY(-4px)
  Transition 300ms

  Top: icon 32px Lucide (colored) + small tag pill top-right
  Title: 600 20px #1a1a1a | margin-top 16px
  Desc: 14px #666 | line-height 1.6 | 2–3 lines
  Services list (3 items): 13px #999 | bullet dots
  Bottom link: "Explore Services →" 13px 500 #E8612A | hover underline

Cards:
  Land Surveying — MapPin #4DEBFF
    "Legal surveys, topographic mapping, and as-built documentation processed to Civil 3D standard."
    → Topographic Surveys · Feature Extraction · PPK Ground Control

  Engineering/Construction — HardHat #E8612A
    "Cut/fill analysis, grade verification, and progress monitoring for civil engineering projects."
    → Site Mapping · Volume Analysis · Progress Documentation

  Forestry & Environment — TreePine #4CAF72
    "Canopy health assessment, volume estimation, and environmental compliance mapping across BC."
    → Canopy Analysis · Biomass Mapping · Environmental Monitoring

  Mining & Industrial — Layers #E8612A
    "Large-scale topographic surveys and volume calculations for mining operations."
    → Volume Surveys · Site Monitoring · Industrial Layout

  Agriculture — Sun #4CAF72
    "Soil health, crop stress detection, and precision irrigation planning from multispectral data."
    → NDVI Mapping · Soil Analysis · Irrigation Planning

  Municipal & Government — Landmark #4DEBFF
    "Crown land surveys, infrastructure inspection, and urban planning data for government."
    → Crown Land · Infrastructure · Urban Planning

ANIMATIONS: ScrollReveal stagger 0.1s each card
```

## IN-3 | CTA BANNER
```
bg linear-gradient(135deg, #1a1a1a 0%, #2a3426 100%)
Radius 24px | padding 80px 64px | max-width 1100px | centered | margin 0 48px 80px

Left: "Not sure which service fits your project?" 700 36px #fff
  Subtext: "Talk to our team. We'll scope it for you." rgba(255,255,255,0.65) 15px

Right: MagneticButton "Start a Conversation" bg #E8612A + ghost "View Services"
  Gap 12px | side by side
```

---
---
# PAGE 5 — CASE STUDIES (/case-studies)
**Theme: WHITE**
---

## CS-1 | HERO
```
bg #ffffff | centered | padding 120px 48px 60px

Eyebrow: "OUR WORK"
Headline: "Proof in the Data."
  "Data." → italic color #E8612A
  700 large #1a1a1a
Subtext: "Real projects. Verified accuracy. CAD-ready deliverables
  for engineering firms across British Columbia." | 14px #666666

Filter pills (below headline, margin-top 32px):
  All | Survey & Engineering | Environmental
  Active: bg #1a1a1a text white | radius 999px | padding 8px 20px
  Inactive: bg #f5f5f2 text #666 border #e8e8e4 | same size
  Hover inactive: bg #efefec
```

## CS-2 | CASE STUDY BENTO GRID
```
bg #f5f5f2 | padding 80px 48px

BENTO LAYOUT:
  Row 1: [Featured card 2/3] + [Tall card 1/3, spans row 1+2]
  Row 2: [Card 1/3] + [Card 1/3]
  Gap 20px

FEATURED CARD (dark on white page):
  bg #0a0a0a | radius 20px | overflow hidden | height 420px
  Grid: 55% text left / 45% image right

  Left (padding 40px):
    Tag pill: "Survey & Engineering" bg rgba(77,235,255,0.1) text #4DEBFF
    Title: "Topographic Survey — BC Interior Construction Site" 600 28px #fff
    Stats row (margin-top 24px):
      ±2cm accuracy | 4.2 hectares | DXF in 48hrs
      Each: large number #4DEBFF + small label rgba(255,255,255,0.55)
    CTA: "Read Case Study →" 14px 500 #4DEBFF | hover translateX(4px)

  Right: ParallaxImage speed=30 — aerial site photo | ClipReveal

STANDARD CARDS (4 remaining):
  bg #ffffff | border 1px #e8e8e4 | radius 16px
  HOVER: shadow 0 8px 32px rgba(0,0,0,0.1) | border-color #4DEBFF | translateY(-4px)

  Image top: height 180px | ClipReveal | object-cover
  Body padding 24px:
    Tag pill small (colored by pillar)
    Title: 600 18px #1a1a1a
    Excerpt: 13px #888 2 lines
    Stats: 2–3 key numbers (muted smaller than featured)
    Link: "View Project →" 13px 500 #E8612A

ANIMATIONS: Featured ScrollReveal + ClipReveal | cards stagger 0.1s | hover translateY spring
```

## CS-3 | CASE STUDY DETAIL (/case-studies/[slug])
```
MIXED THEME: white hero → alternating dark/white content

HERO (white):
  Breadcrumb: Case Studies > [Project Name] | 13px #999
  Tag pill: pillar type
  Title: 700 large #1a1a1a
  Stats bar: 3–4 key metrics in dark pill badges
  Hero image: full-width ClipReveal 500px height | radius 16px | object-cover

SECTION 1 — The Challenge (white bg #ffffff):
  2-col: text left / image right
  Problem statement, client context
  Image: ParallaxImage speed=30 | radius 16px

SECTION 2 — Our Approach (dark bg #0a0a0a):
  Numbered steps matching HP-4 How It Works style
  Animated connecting line

SECTION 3 — Deliverables (dark bg #111111):
  Mini bento: 3 cells
  DXF preview card + stats card + accuracy report card
  Same bento system as SV-4

SECTION 4 — Results (white bg #ffffff):
  3 large stat highlights, CountUp on inView
  Each: number #E8612A large + label + short context sentence

BOTTOM CTA (dark):
  "Start a Similar Project" orange button + "View All Case Studies" ghost
```

---
---
# PAGE 6 — ABOUT (/about)
**Theme: Mixed (dark hero + white story)**
---

## AB-1 | HERO (dark)
```
bg #0a0a0a | min-height 75vh | centered

Background: animated gradient orb
  motion.div | blur-3xl | opacity 15%
  rgba(77,235,255,0.15) center-left + rgba(76,175,114,0.1) center-right
  Animate: x:-20→20 y:-10→10 | infinite alternate | duration 8s ease-in-out

Eyebrow: "ABOUT SEQUOIA"
Headline StaggerText: "Where Precision Meets the Land."
  Italic accent words → #4DEBFF
Subtext: "We are a BC-based drone intelligence company combining
  survey-grade data collection with environmental expertise — built
  for the terrain, climate, and industries of the BC Interior."
  400 16px rgba(255,255,255,0.65) max-width 580px centered

Stats row (below subtext):
  ±2cm Accuracy | BC Interior Coverage
  Number 700 40px #4DEBFF + label muted
```

## AB-2 | STORY SECTION (white)
```
bg #ffffff | padding 100px 48px
Grid: text 50% left / images 50% right | gap 64px | align-items start

LEFT:
  Eyebrow: "OUR STORY"
  Heading: "Built from the field up." | 700 40px #1a1a1a
  3 paragraphs (write your actual background — BC surveying experience,
    Sequoia's founding, approach to precision)
  Each paragraph: 15px #444 line-height 1.7 | margin-bottom 20px

RIGHT: stacked images (gap 12px)
  Top image (60% height): drone in field warm golden light | ParallaxImage speed=30 | radius 16px
  Bottom image (40% height): Emlid RS3 close-up setup | ParallaxImage speed=20 | radius 16px

BELOW (full-width 3-card row):
  bg #f5f5f2 | radius 16px | padding 32px | border 1px #e8e8e4
  HOVER: bg #fff | border-color #E8612A | shadow

  Card 1: Zap icon #E8612A | "PPK-First Workflow" | "Accuracy without compromise on any terrain."
  Card 2: FileCode icon #4DEBFF | "CAD-Native Outputs" | "Files your team opens in Civil 3D on day one."
  Card 3: MapPin icon #4CAF72 | "BC Terrain Specialists" | "Built for the BC Interior's unique challenges."
```

## AB-3 | CREDENTIALS (dark)
```
bg #111111 | padding 80px 48px

Heading: "Our Certifications & Tools." | #fff
Subtext: "The stack that backs every deliverable." | muted

Badge grid: repeat(3, 1fr) | gap 16px
Mobile: 2-col

Each badge:
  bg #161616 | border rgba(255,255,255,0.07) | radius 12px | padding 28px | centered
  Icon/logo: 40px centered
  Name: 500 15px #fff | margin-top 12px
  Subtext: 13px rgba(255,255,255,0.45)
  HOVER: border rgba(255,255,255,0.2) | bg #1a1a1a

Badges:
  Transport Canada RPAS (drone certification)
  DJI Enterprise Workflow
  Pix4D Certified Pipeline
  Emlid Reach PPK/RTK
  AutoCAD Civil 3D Compatible
  BC Terrain Operations
```

---
---
# PAGE 7 — CONTACT (/contact)
**Theme: WHITE**
---

## CO-1 | HERO
```
bg #ffffff | padding 120px 48px 60px | max-width 700px centered

Eyebrow: "GET IN TOUCH"
Heading: "Let's Scope Your Project." | 700 large #1a1a1a
Subtext: "Tell us what you're working on. We'll assess the site,
  define deliverable requirements, and confirm accuracy targets
  before any flight is planned."
  14px #666666 | max-width 520px | line-height 1.65
```

## CO-2 | CONTACT SPLIT
```
bg #ffffff | padding 0 48px 100px | max-width 1200px

Grid: form 55% / info 45% | gap 64px
Mobile: single column (info below form)

LEFT — FORM CARD:
  bg #f5f5f2 | radius 20px | padding 40px | border 1px #e8e8e4

  All inputs: bg #fff | border 1px #e0e0e0 | radius 10px | height 48px
  Focus: border #E8612A | glow rgba(232,97,42,0.1) 0 0 0 3px
  Placeholder: #bbb
  Font: Space Grotesk 400 14px #1a1a1a

  Row 1: Full Name + Work Email | gap 12px
  Row 2: Company Name full width
  Row 3: Industry select (same options as homepage)
  Row 4: Project Details textarea 5 rows resize none
  Row 5: Preferred Contact — radio pills "Email" / "Phone"
    Active pill: bg #1a1a1a text white | Inactive: bg #eee text #666
  Submit: MagneticButton full-width | bg #1a1a1a | white | hover bg #E8612A | height 52px | radius 10px
    Transition: bg 300ms ease

  SUCCESS STATE (AnimatePresence):
    Checkmark SVG: motion.path strokeDashoffset draw animation, green stroke
    "Message received! We'll be in touch within 24 hours."
    Scale 0.95→1 + opacity 0→1 | spring animation

RIGHT — INFO:
  3 stacked cards | gap 16px

  Card 1: bg #f5f5f2 | radius 16px | padding 24px | border 1px #e8e8e4
    MapPin #E8612A 20px + "Location" 500 12px uppercase letter-spacing
    "British Columbia, Canada" 500 15px #1a1a1a
    "Primarily serving the BC Interior" 13px #888

  Card 2: same style
    Mail #4DEBFF + "Email"
    "hello@sequoiadrone.ca" — link hover #E8612A

  Card 3: same style
    Clock #4CAF72 + "Response Time"
    "Within 24 hours" | "Mon–Fri, 8am–6pm PST"

  Social row (margin-top 24px):
    LinkedIn | Instagram | X
    Each: dark pill bg #1a1a1a | white icon | hover bg #E8612A | 36px height | radius 999px

  FAQ ACCORDION (below socials, margin-top 32px):
    3 questions:
      "Do you serve clients outside BC?"     → "Currently focused on BC Interior operations."
      "What file formats do you deliver?"    → "DXF, GeoTIFF, LAS/LAZ, E57, IFC — formatted for your workflow."
      "How long does a survey take?"         → "Typically 1–3 days field + 2–5 days processing, depending on site."
    Open/close: AnimatePresence height animation
    Chevron icon rotates 180deg on open
    Border-bottom between items 1px #e8e8e4
```

---

## PARALLAX MAP — ALL PAGES

| Effect | Page / Section | Speed |
|---|---|---|
| Hero image drift | All page heroes | 80–100 |
| Survey pillar image | Services | 50 |
| Environmental pillar | Services | 40 |
| Hardware card images | Hardware, Homepage | 30 |
| Bento image cells | Services, Case Studies | 35 |
| Case study hero | Case Study detail | 60 |
| Story section images | About | 30 |
| CTA contact image | Homepage | 30 |
| Background orb | About hero | slow infinite motion |
| Line draw (How It Works) | Homepage, Hardware | scaleX scroll |
| Progress bar | All pages | scroll-linked |

---

## MOBILE RULES (ALL PAGES)

```
KEEP (reduce values):
  ScrollReveal:    y 40→20px | stagger 0.08→0.05s
  ClipReveal:      keep
  CountUp:         keep
  StaggerText:     stagger 0.08→0.05s
  ParallaxImage:   speed × 0.5
  ScrollProgressBar: keep
  AnimatePresence: keep

DISABLE on touch (hover:none media query):
  TiltCard      → return plain div
  MagneticButton → return plain <button>
  BG orb parallax → static position
  Hero parallax  → cap at y=20px

LAYOUT CHANGES:
  All bento grids → 1 column
  All 2-col splits → 1 column (image usually below text)
  Hardware banner → image top, text below
  Stats bar → 2×2 grid
  Footer → 2-col grid, brand full-width row 1
  Ticker → keep (works well on mobile)
  Case study detail → full width sections

TYPOGRAPHY:
  Headline clamp: keep but reduce min end (36→28px)
  Body: keep 15px (readable on mobile)
```

---

## IMAGE SEARCH QUERIES (ALL PAGES)

```
Homepage hero:
  "DJI Mavic 3 Enterprise drone flying BC forest misty mountains cinematic dark moody portrait"

Services — survey:
  "Colorized 3D LiDAR point cloud urban street dark background teal orange gradient"

Services — environmental:
  "NDVI multispectral drone aerial forest canopy false color infrared top-down"

Hardware — banner:
  "DJI Mavic 3 Enterprise drone in flight BC wilderness dramatic sky wide cinematic 16:5"

Hardware — product cards:
  "DJI Mavic 3 Enterprise product photo dark studio dramatic lighting"
  "Emlid Reach RS3 GNSS receiver tripod field outdoor survey"
  "Leica BLK2GO handheld laser scanner product photo"
  "Pix4D photogrammetry software 3D point cloud interface dark"

Case studies — aerial:
  "Aerial drone survey BC interior construction site landscape dramatic overcast sky"

About — field:
  "Drone surveyor setting up GNSS receiver BC field golden hour professional"
  "Close-up GNSS receiver survey equipment outdoor field realistic"

Contact / CTA:
  "British Columbia aerial forest mountains sunrise cinematic dark no people"

Industries — grid:
  "BC forest canopy aerial drone"
  "Construction site aerial survey drone"
  "Agricultural field aerial top-down BC"
  "Open pit mine aerial survey BC"
```

---

## MIDJOURNEY GENERATION PROMPTS

```
Hero:
"DJI Mavic 3 Enterprise drone hovering above dense BC forest, misty mountains
background, cinematic aerial photography, golden hour, ultra realistic, 4:5
portrait, dark moody tones, no text --ar 4:5 --v 6"

Survey bento:
"Colorized 3D LiDAR point cloud urban street curbs sidewalks, teal orange color
gradient, dark background, photorealistic data visualization, no text --ar 4:3 --v 6"

Environmental:
"NDVI multispectral drone map BC forest canopy, false color infrared vegetation
health, aerial top-down view, dark border, no text --ar 4:3 --v 6"

Case study:
"Aerial drone photograph BC interior landscape rolling hills construction survey
site, overcast dramatic sky, wide angle cinematic, high contrast dark --ar 16:9 --v 6"

Hardware DJI:
"DJI Mavic 3 Enterprise drone product photo, dramatic side lighting, dark studio
background, ultra sharp, commercial photography style, no text --ar 1:1 --v 6"
```

---

## PRIORITY BUILD ORDER

```
Phase 1 — Foundation (all pages depend on this)
  1. layout.tsx — fonts + Lenis + ScrollProgressBar + AnimatePresence
  2. globals.css — CSS vars + reset + scrollbar
  3. SmoothScrollProvider.tsx
  4. ScrollReveal + ClipReveal + StaggerText
  5. useParallax + ParallaxImage
  6. TiltCard + MagneticButton (with mobile disable logic)
  7. Navbar + Footer

Phase 2 — Homepage
  8. Hero + ServicesOverview + HowItWorks
  9. HardwareShowcase + Stats + ContactForm

Phase 3 — Services + Hardware
  10. /services — hero + Survey detail + Env detail + Deliverables Bento
  11. /hardware — hero + Hardware Bento + Workflow Integration

Phase 4 — White Theme Pages
  12. /industries — hero + ticker + grid + CTA banner
  13. /case-studies — hero + filters + bento grid
  14. /case-studies/[slug] — detail template (reusable)

Phase 5 — About + Contact
  15. /about — hero (orb animation) + Story + Credentials
  16. /contact — hero + split form + accordion

Phase 6 — Polish Pass
  17. AnimatePresence page transitions in layout.tsx
  18. Reduced motion audit — all pages
  19. Mobile breakpoint audit — all pages
  20. Performance: confirm only opacity+transform animated everywhere
  21. Lenis + Framer Motion scroll sync verification
```

---

*Sequoia Drone React — Build Spec v3.0*
*Stack: Next.js 14 · Tailwind CSS · Framer Motion v11 · Lenis · Space Grotesk*
*Pages: 8 total | Dark: 3 | White: 3 | Mixed: 2*
*Animation system: ScrollReveal · ClipReveal · StaggerText · TiltCard · MagneticButton · ParallaxImage · ScrollProgressBar*
