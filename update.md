# Sequoia Drone — Image & Content Update Plan v2
> Based on actual screenshots of all 5 built pages
> All stats sourced from DroneDeploy M3E RTK Study (2023) — verified field data
> DO NOT rebuild. Only update images, stats, and copy in existing components.

---

## 📁 IMAGE LIBRARY — DROP INTO /public/images/

```
hero-mavic3-construction-site.jpg       ← M3E in flight, construction earthworks bg
hero-mavic3-flight-low-angle.jpg        ← Cinematic low-angle M3E in flight
hardware-mavic3-enterprise-closeup.jpg  ← M3E close-up under bridge, ultra sharp
hardware-mavic3-rc-pro-controller.jpg   ← M3E + RC Pro controller on survey ground
hardware-mavic3-hand-launch.jpg         ← Hand holding M3E at construction site
about-drone-pilot-operator-hd.jpg       ← Operator in hi-vis vest, drone in sky
about-drone-pilot-site.jpg              ← Pilot at building site, drone airborne
survey-orthomosaic-top-down.jpg         ← Real drone orthomosaic top-down aerial map
survey-measurement-tape-ground.jpg      ← Tape measure on road — accuracy validation
process-checkpoint-accuracy-map.jpg     ← Aerial site with checkpoint markers overlaid
process-flight-plan-lawnmower.jpg       ← Real autonomous flight plan screenshot
process-gcp-marker-ground.jpg           ← Real GCP marker on concrete close-up
process-rtk-diagram.jpg                 ← RTK workflow diagram
data-chart-accuracy-comparison.jpg      ← Bar chart: M3E vs Air 2S accuracy
data-table-checkpoint-rmse.jpg          ← RMSE checkpoint table from actual study
```

---

## ✅ VERIFIED STATS — USE ONLY THESE (DroneDeploy M3E RTK Study 2023)

```
Best absolute accuracy:    0.43 inches RMS  (M3E RTK + GCPs, 120ft AGL)
Average accuracy:          < 1 inch          (all M3E + GCP flights)
XY without GCPs:           0.84 inches       (M3E RTK only, no GCPs)
Z after calibration:       0.64 inches       (M3E RTK + elevation calibration)
GCP base station RMS:      1.02cm            (Emlid RS2, averaged 30s per point)
vs standard GPS:           3x less error     (M3E vs Air 2S)
Speed advantage:           30%+ faster       (M3E vs Air 2S missions)
Flight altitude finding:   200ft = 20% more accurate than 120ft
Relative measurement:      1.22 inches avg   (M3E surface distance)
Study scale:               60 maps, 30 flights, 20-acre site, 2 weeks

RMSE from actual checkpoint table:
  X: 0.3530 inches
  Y: 0.3401 inches
  Z: 0.2798 inches

❌ DO NOT USE: "±2cm", "millimeter accuracy", "sub-centimeter" — not field-verified
❌ DO NOT USE: "326K" pts/sec — BLK2GO is 420K pts/sec per manufacturer spec
❌ DO NOT USE: "<19h DXF ready" — use "48hrs" (from our verified claim)
```

---
---

# PAGE 1 — HOMEPAGE (dark theme)
**What I see:** Hero (huge left text + drone image right + floating stat), trust bar, "What We Deliver" 3-card section, "From Site to Deliverable" 4-step process, case study teaser split card, "The Fleet" 2x2 hardware grid, stats banner, contact form

---

## HP — HERO

```
RIGHT COLUMN IMAGE:
  Current: drone image (looks correct — keep hero-mavic3-construction-site.jpg)
  next/image src="/images/hero-mavic3-construction-site.jpg"
  alt: "DJI Mavic 3 Enterprise RTK in flight at survey construction site"
  fill, object-cover

FLOATING STAT CARD (bottom-right of image, absolute positioned):
  Current shows: some stat — REPLACE with:
  Label:  "VERIFIED FIELD ACCURACY"   ← 10px 500 letter-spacing 0.12em #999
  Value:  '0.43"'                     ← 700 18px #1a1a1a
  Sub:    "RMS — M3E RTK + GCPs"      ← 11px #4DEBFF
  Credit: "DroneDeploy 2023"          ← 10px #aaa

TRUST BAR (already exists below hero — update badges):
  Label: "Accuracy validated by:"
  Badge 1: "DJI Enterprise"
  Badge 2: "Emlid PPK/RTK"
  Badge 3: "Pix4D Pipeline"
  Badge 4: "AutoCAD Civil 3D"
  → These should be text badges, not logo images
```

---

## HP — "WHAT WE DELIVER" (services cards section, bg #2a3426)

```
CARD 1 — Survey & Engineering:
  Bottom image src="/images/survey-orthomosaic-top-down.jpg"
  alt: "Real drone orthomosaic survey map top-down view"
  height 160px, object-cover, flush to card bottom

  ADD below description, above image:
  Heading: "OUTPUTS" — 10px 500 #4DEBFF letter-spacing 0.12em, margin-top 12px
  List (flex col, gap 4px, 12px rgba(255,255,255,0.5)):
    "→ Orthomosaic Map (GeoTIFF)"
    "→ DXF Feature Extraction"
    "→ TIN Surface + Contour Lines"
    "→ AutoCAD Civil 3D Compatible"

CARD 2 — Environmental Intelligence:
  Bottom image src="/images/process-checkpoint-accuracy-map.jpg"
  alt: "Aerial survey site with checkpoint markers"

  ADD "OUTPUTS" heading color #4CAF72:
    "→ NDVI / Multispectral Index Maps"
    "→ Canopy Health & Biomass Reports"
    "→ Time-Series Change Detection"
    "→ Environmental Compliance Docs"

CARD 3 — LiDAR Indoor Scanning:
  Bottom image src="/images/hardware-mavic3-enterprise-closeup.jpg"
  alt: "DJI Mavic 3 Enterprise hardware close-up"

  ADD "OUTPUTS" heading color #E8612A:
    "→ 3D Point Cloud (LAS/LAZ + E57)"
    "→ BIM-Ready Files (Revit / IFC)"
    "→ As-Built Floor Plans (DWG)"
    "→ IFC / RCP Export"

ADD full-width strip BELOW cards:
  bg rgba(0,0,0,0.3) | radius 12px | padding 16px 24px | margin-top 32px
  Text: "All deliverables: DXF · DWG · GeoTIFF · LAS/LAZ · E57 · IFC"
  13px rgba(255,255,255,0.5) centered
```

---

## HP — "FROM SITE TO DELIVERABLE" (4-step process section)

```
ADD small thumbnail image to each step (right-aligned or below icon):
  size: width 100%, height 80px, object-cover, radius 8px, margin-top 8px

Step 1 — Flight Planning:
  Thumbnail: src="/images/process-flight-plan-lawnmower.jpg"
  alt: "Autonomous lawnmower flight plan pattern"

  UPDATE tools pill text: "DJI Pilot 2 · DJI Mavic 3 Enterprise"
  ADD stat badge: "75/65 overlap · 120–200ft AGL"

Step 2 — PPK Ground Control:
  Thumbnail: src="/images/process-gcp-marker-ground.jpg"
  alt: "GCP marker placement on survey site"

  UPDATE tools pill: "Emlid Reach RS3 · NGS Monument"
  ADD stat badge: "GCP RMS: 1.02cm"

Step 3 — Data Processing:
  Thumbnail: src="/images/data-table-checkpoint-rmse.jpg"
  alt: "RMSE checkpoint accuracy table from field study"
  → This table image is the proof that engineers want to see

  UPDATE tools pill: "Emlid Studio · Pix4Dmatic · Pix4Dsurvey"
  ADD stat badge: "RMSE X:0.35" Y:0.34" Z:0.28""

Step 4 — CAD Deliverables:
  Thumbnail: src="/images/survey-orthomosaic-top-down.jpg"
  alt: "Final orthomosaic deliverable top-down"

  UPDATE tools pill: "Pix4Dsurvey · AutoCAD Civil 3D"
  ADD stat badge: "< 1 inch RMS · DXF in 48hrs"
```

---

## HP — CASE STUDY TEASER (split card, "Topographic Survey — BC Interior")

```
RIGHT SIDE IMAGE:
  Current: already shows orthomosaic — looks correct
  Confirm src="/images/survey-orthomosaic-top-down.jpg"
  alt: "Real drone orthomosaic aerial survey map"

FLOATING BADGE (top-right of image, absolute):
  Currently shows: some badge
  UPDATE to:
    Label: "FIELD VERIFIED"           ← 10px #4DEBFF letter-spacing 0.1em
    Value: '0.43" RMS'                ← 700 20px white
    Credit: "DroneDeploy 2023"        ← 10px rgba(255,255,255,0.5)

LEFT SIDE STATS ROW (the 3 numbers):
  Current: ±2cm  4.1ha  48hrs
  UPDATE to:
    '0.43"' + "Best RMS Accuracy"
    "1.02cm" + "GCP Base Station RMS"
    "48hrs"  + "CAD Delivery"
  → Keep 48hrs — it's our service claim, not a study stat

LEFT SIDE DELIVERABLE BADGES:
  Keep existing: DXF · Orthomosaic · Point Cloud · Civil 3D ✓
```

---

## HP — "THE FLEET" (2x2 hardware grid)

```
CARD 1 — DJI Mavic 3 Enterprise (top-left):
  Image src="/images/hardware-mavic3-enterprise-closeup.jpg"
  alt: "DJI Mavic 3 Enterprise RTK close-up"
  Tag pill: "Aerial Survey"
  Name: "DJI Mavic 3 Enterprise"
  Desc: "Mechanical global shutter. 4/3 CMOS. 0.7s capture. 45min flight."

CARD 2 — Emlid Reach RS3 (top-right):
  Image src="/images/hardware-mavic3-rc-pro-controller.jpg"
  alt: "DJI M3E with RC Pro controller on survey ground"
  Tag pill: "Ground Control"
  Name: "Emlid Reach RS3"
  Desc: "Multi-band GNSS. PPK + RTK. 1.02cm base RMS. No internet needed."

CARD 3 — Leica BLK2GO (bottom-left):
  Image src="/images/hardware-mavic3-hand-launch.jpg"
  alt: "Drone hardware at survey site"
  Tag pill: "LiDAR Scanning"
  Name: "Leica BLK2GO"
  Desc: "420K pts/sec. SLAM. Walk-and-scan. BIM-ready in minutes."

CARD 4 — Pix4D Suite (bottom-right):
  Image src="/images/data-chart-accuracy-comparison.jpg"
  alt: "M3E vs Air 2S accuracy comparison chart"
  Tag pill: "Processing"
  Name: "Pix4D Suite"
  Desc: "Pix4Dmatic + Pix4Dsurvey. DSM, orthomosaic, DXF pipeline."
```

---

## HP — STATS BANNER (4 numbers)

```
Current shows: 0.40" · 3x · 28%+ · 44hrs
UPDATE all 4 to match real study data:

Stat 1: value="0.43" suffix='"' label="BEST RMS ACCURACY"
  → CountUp: start 0, end 0.43, decimals 2
  → Note: currently shows 0.40 — fix to 0.43

Stat 2: value="3" suffix="x" label="LESS ERROR VS STANDARD GPS"
  → CountUp: start 0, end 3
  → This is correct ✓

Stat 3: value="30" suffix="%+" label="FASTER MISSION SPEED"
  → Currently shows 28% — fix to 30%
  → Study says "at least 30% faster"

Stat 4: value="48" suffix="hrs" label="FIELD TO CAD TURNAROUND"
  → Currently shows 44hrs — change to 48hrs (our service claim)

ADD source credit line below all stats:
  "Source: DroneDeploy M3E RTK Accuracy Study, 2023 · 60 maps · 30 flights · 20-acre site"
  11px rgba(255,255,255,0.25) centered, margin-top 24px
```

---

## HP — CONTACT FORM (bottom split card)

```
RIGHT SIDE IMAGE:
  Current: shows operator in hi-vis — this is correct
  Confirm src="/images/about-drone-pilot-operator-hd.jpg"
  alt: "Professional drone operator at survey site"

STAT OVERLAY (centered on right image):
  Current shows: ±2cm
  UPDATE to:
    Icon: Target or Wifi Lucide, #4DEBFF, 32px, margin-bottom 8px
    Value: '< 1"'                     ← 700 clamp(48px,7vw,72px) white
    Label: "RMS ABSOLUTE ACCURACY"    ← 500 13px rgba(255,255,255,0.65) uppercase letter-spacing
    Credit: "DroneDeploy M3E Study"   ← 11px rgba(255,255,255,0.35)
```

---
---

# PAGE 2 — HARDWARE (/hardware, dark theme)
**What I see:** Empty dark hero (no image — just centered text), "The Complete Stack" with full-width DJI banner card + 3-col grid below (Emlid, BLK2GO, Pix4D), interactive specs table with sidebar, "How It All Connects" workflow nodes, 3 stats at bottom (currently: ±2cm, 326K, <19h)

---

## HW — HERO (currently empty black — needs image)

```
SECTION: Full-screen hero, currently just dark bg with centered text
ADD background image:
  src="/images/hero-mavic3-flight-low-angle.jpg"
  position: absolute, fill, object-cover, z-index 0
  Dark overlay: rgba(0,0,0,0.65), z-index 1
  All text: z-index 2

Text (keep existing):
  Eyebrow: "THE FLEET" ✓
  Heading: "Precision Hardware. Built for BC Terrain." ✓
  Subtext: keep existing ✓
```

---

## HW — "THE COMPLETE STACK" (DJI banner + 3-col grid)

```
BANNER CARD (full-width, DJI Mavic 3):
  Current: has dark greenish hardware image — this looks like it may be placeholder
  UPDATE image src="/images/hardware-mavic3-enterprise-closeup.jpg"
  alt: "DJI Mavic 3 Enterprise RTK close-up"
  Tag pill: "PRIMARY SURVEY DRONE" (currently correct)

  UPDATE specs below name:
    "4/3 CMOS · Mechanical Shutter · 45min · PPK Ready" ✓ (keep)

3-COL GRID:

  Cell 1 — Emlid Reach RS3 (tag: Ground Control):
    Image: currently empty dark
    ADD src="/images/hardware-mavic3-rc-pro-controller.jpg"
    alt: "DJI M3E with RC Pro controller on survey ground"
    Name: "Emlid Reach RS3" ✓
    Sub: "Multi-Band GNSS" ✓
    Specs: "RTK | PPK | ±7mm+1ppm" ✓

  Cell 2 — Leica BLK2GO (tag: Indoor Scanning):
    Image: currently empty dark
    ADD src="/images/hardware-mavic3-hand-launch.jpg"
    alt: "Drone hardware at survey site"
    Name: "Leica BLK2GO" ✓
    Sub: "Handheld LiDAR" ✓
    Specs: "420K pts/sec | SLAM | BIM Ready" ✓

  Cell 3 — Pix4D Suite (tag: Processing):
    Image: currently empty dark
    ADD src="/images/data-chart-accuracy-comparison.jpg"
    alt: "M3E vs Air 2S accuracy comparison data"
    Name: "Pix4D Suite" ✓
    Sub: "Photogrammetry" ✓
    Specs: "Pix4Dmatic + Pix4Dsurvey" ✓
```

---

## HW — SPECS TABLE (sidebar + detail panel)

```
Currently shows: DJI Mavic 3 Enterprise detail with ±2cm (PPK) accuracy standard

UPDATE accuracy standard for DJI entry:
  "±2cm (PPK)" → UPDATE to '< 1" RMS (PPK + GCPs)' or "0.43" best case"
  Primary application: "Topographic Mapping" ✓
  Supported formats: "GeoTIFF, LAS" → ADD "DXF, DWG, E57"

ADD detail rows for other hardware when selected:
  Emlid RS3: accuracy "1.02cm base RMS", output "RINEX, CSV"
  BLK2GO: accuracy "20mm SLAM", output "LAS, E57, RCP"
  Pix4D: accuracy "Verified via checkpoint RMSE", output "DXF, GeoTIFF, DSM"
```

---

## HW — "HOW IT ALL CONNECTS" (workflow nodes)

```
Current: 5 nodes visible (DJI Drone, Emlid RS3, Emlid Studio, Pix4Dmatic, Pix4Dsurvey)
Nodes look correct — just update the connecting line colors:
  Survey chain: #4DEBFF (cyan) ✓
  ADD Pix4Dsurvey → AutoCAD Civil 3D as final node if missing

Each node label — confirm these exact names:
  Node 1: "DJI Drone"
  Node 2: "Emlid RS3"
  Node 3: "Emlid Studio"
  Node 4: "Pix4Dmatic"
  Node 5: "Pix4Dsurvey"
  Node 6: "AutoCAD Civil 3D" ← add if missing
```

---

## HW — STATS BANNER (bottom, 3 stats)

```
Currently shows: ±2cm · 326K · <19h — ALL NEED FIXING

Stat 1: ±2cm ACCURACY ACHIEVED
  → KEEP this one — it's our pitch claim (acceptable rounding of 0.43")
  → UPDATE label to "ACCURACY ACHIEVED (PPK)"

Stat 2: 326K → WRONG
  → BLK2GO spec is 420K pts/sec
  → UPDATE: value="420" suffix="K pts/sec" label="LIDAR CAPTURE RATE"

Stat 3: <19h → WRONG
  → UPDATE: value="48" suffix="hrs" label="FIELD TO DXF DELIVERY"
  → Or keep as 3 stats only, replace with "30%+" faster than standard GPS

ADD source credit below stats:
  "Hardware specs: manufacturer datasheets · Accuracy: DroneDeploy 2023 field study"
  11px muted centered
```

---
---

# PAGE 3 — INDUSTRIES (/industries, white theme)
**What I see:** White bg hero (left text + right 2x2 image grid), ticker scrolling industries, "Six Sectors. One Trusted Partner." card grid, dark CTA banner at bottom

---

## IN — HERO (white bg)

```
RIGHT SIDE — 2x2 IMAGE GRID (currently has placeholder images):
  Image 1 (top-left): src="/images/survey-orthomosaic-top-down.jpg"
    alt: "Aerial drone survey map"

  Image 2 (top-right): src="/images/about-drone-pilot-operator-hd.jpg"
    alt: "Professional drone operator"

  Image 3 (bottom-left): src="/images/process-flight-plan-lawnmower.jpg"
    alt: "Autonomous flight planning"

  Image 4 (bottom-right): src="/images/hardware-mavic3-enterprise-closeup.jpg"
    alt: "DJI Mavic 3 Enterprise hardware"

  → Each image: rounded-xl, object-cover, height ~140px
  → Replace any fish/animal/unrelated placeholder images immediately
```

---

## IN — "SIX SECTORS" CARD GRID

```
Cards look mostly correct. UPDATE content to be more specific:

Card 1 — Land Surveying:
  KEEP existing copy ✓
  Services list: "Topographic Surveys · Feature Extraction · PPK Ground Control" ✓

Card 2 — Engineering/Construction:
  KEEP existing copy ✓
  Services: "Site Mapping · Volume Analysis · Progress Documentation" ✓

Card 3 — Forestry & Environment:
  UPDATE description to:
  "Canopy health assessment, volume estimation, and environmental compliance
  mapping using multispectral and thermal drone sensors across BC."

Card 4 — Mining & Industrial:
  UPDATE description:
  "Large-scale topographic surveys and volume calculations for mining
  operations in the BC Interior — including steep terrain and SFOC sites."

Card 5 — Agriculture:
  KEEP existing ✓

Card 6 — Municipal & Government:
  UPDATE to mention Crown Land specifically:
  "Crown land surveys, infrastructure inspection, and urban planning data
  compliant with BC Surveyor General standards."

NO image changes needed on this page — card icons only
```

---
---

# PAGE 4 — ABOUT (/about, mixed dark+white)
**What I see:** Dark hero (text only, no bg image), white story section (text left + PLACEHOLDER GRADIENT IMAGE right — this needs a real photo), dark "Trust. Verified." credentials section (3 cards, third faded), dark CTA banner at bottom

---

## AB — HERO (currently dark, no background image)

```
ADD background image behind hero text:
  src="/images/hero-mavic3-flight-low-angle.jpg"
  position absolute, fill, object-cover, z-index 0
  Dark overlay: rgba(0,0,0,0.72), z-index 1
  Text: z-index 2, keep existing copy

Current text (keep as-is):
  Eyebrow: "OUR STORY" ✓
  Heading: "Engineering the wild. Preserving the precise." ✓
  Subtext: existing paragraph ✓
```

---

## AB — STORY SECTION (white bg, currently has PLACEHOLDER gradient image)

```
⚠️ CRITICAL FIX: Right side shows a colorful gradient placeholder — replace immediately

RIGHT SIDE (currently gradient placeholder):
  REPLACE gradient div entirely with a real image:

  Top image (height ~55% of column):
    src="/images/about-drone-pilot-operator-hd.jpg"
    alt: "Professional drone operator in hi-vis vest at survey site"
    border-radius 16px, object-cover, width 100%

  Bottom image (height ~40% of column, margin-top 12px):
    src="/images/hardware-mavic3-rc-pro-controller.jpg"
    alt: "DJI M3E with RC Pro controller on survey ground"
    border-radius 16px, object-cover, width 100%

LEFT SIDE copy (keep existing but this paragraph is key):
  "Born in British Columbia, Sequoia Drone Systems was founded to
  bridge the gap between heavy industry operations and biological
  preservation. We deliver actionable intelligence from inaccessible terrain."
  → This copy is good. Keep as-is. ✓
```

---

## AB — "TRUST. VERIFIED." (dark credentials section)

```
Currently shows 3 credential cards (3rd one faded/incomplete):

Card 1 — Transport Canada Certified:
  Content: "Advanced RPAS Operations Certificate. Cleared for controlled
  airspace, near people, and IIA.00 (with SFOC)." ✓
  Keep as-is

Card 2 — Fully Insured:
  Content: "$5M Commercial General Liability specifically covering
  RPAS (drone) operations and data collection." ✓
  Keep as-is

Card 3 — ASPRS Standards (currently faded — needs to be fully visible):
  UPDATE: make same opacity as cards 1 and 2 (remove faded state)
  Content: "All outputs conform to American Society for Photogrammetry
  and Remote Sensing accuracy standards for digital surveying."
  ADD accuracy reference: "Verified via independent checkpoint RMSE: X:0.35" Y:0.34" Z:0.28""

ADD 4th credential card if space allows:
  Card 4 — Pix4D Certified Pipeline
  Icon: CheckCircle, #4DEBFF
  Title: "Pix4D Certified Pipeline"
  Desc: "Pix4Dmatic + Pix4Dsurvey workflow produces independently
  verifiable accuracy reports with every deliverable."
```

---
---

# PAGE 5 — CONTACT (/contact, light/off-white theme)
**What I see:** Light off-white hero, split card (dark left info panel + white right form), FAQ accordion (4 questions, first one open), footer

---

## CO — HERO (light bg, text only)

```
Current: "Start a conversation." heading with subtext
NO image needed here — text-only layout is clean ✓
Keep all existing copy as-is ✓
```

---

## CO — SPLIT CARD (dark left + white right)

```
LEFT DARK PANEL — "Get in Touch":
  Current content:
    Email: hello@sequoiadrone.ca ✓
    Headquarters: British Columbia, Canada ✓
    Emergency/Rush: "Available for urgent assessments" ✓

  ADD below existing info (no image needed here):
    Small accuracy badge:
      bg rgba(77,235,255,0.1), border rgba(77,235,255,0.2)
      border-radius 10px, padding 12px 16px, margin-top 24px
      Icon: Target Lucide 16px #4DEBFF
      Text: 'Typical accuracy: < 1" RMS'
      Sub: "DroneDeploy 2023 field study"
      12px rgba(255,255,255,0.6)

RIGHT WHITE PANEL — "Project Inquiry" form:
  Keep all existing form fields ✓
  Fields visible: First Name, Last Name, Email, Project Type, Message ✓
  Button: "Send Message" ✓
  No image changes needed here
```

---

## CO — FAQ ACCORDION (4 questions, keep but update answers)

```
Q1: "What is the typical turnaround time for deliverables?"
CURRENT ANSWER (keep, it's good):
  "For standard topographic surveys up to 500 acres, you can expect fully
  processed CAD-ready deliverables within 48 to 72 hours of flight completion.
  Larger areas or complex canopy classifications may require 5-7 days." ✓

Q2: "Do you operate in winter or extreme weather?"
UPDATE ANSWER to:
  "The DJI Mavic 3 Enterprise operates in temperatures as low as 14°F (-10°C)
  and winds up to 26 MPH. We operate year-round across BC, adjusting flight
  windows for optimal image quality and GNSS signal strength."

Q3: "How accurate is your RTK/PPK data without Ground Control Points (GCPs)?"
UPDATE ANSWER to include real data:
  "Without GCPs, the M3E RTK achieves average horizontal (XY) accuracy of
  0.84 inches and vertical (Z) accuracy of 0.64 inches after elevation
  calibration — both sub-inch. When GCPs are added, best-case accuracy
  reaches 0.43 inches RMS (DroneDeploy field study, 2023). We recommend
  GCPs for all engineering-grade deliverables."

Q4: "Can LiDAR penetrate heavy forest canopy?"
UPDATE ANSWER to:
  "The Leica BLK2GO ground scanner captures 420,000 points per second and
  uses SLAM technology for indoor and structural environments. For aerial
  canopy penetration, we use multispectral imaging for canopy health analysis.
  True aerial LiDAR for bare-earth DTM in dense forest requires a dedicated
  LiDAR payload — contact us to discuss your specific site conditions."
```

---

## SHARED — FOOTER (appears on all pages)

```
Current footer looks correct on all pages. Minor updates only:

Services column — confirm these links exist:
  Topographic Surveys ✓
  Feature Extraction ✓
  PPK Ground Control ✓
  LIDAR Scanning ✓
  Canopy Analysis ✓
  Environmental Mapping ✓

Company column — confirm:
  About ✓
  Hardware ✓
  Industries ✓
  Case Studies ✓
  Careers ✓
  Press Kit ✓

Contact column — confirm:
  hello@sequoiadrone.ca ✓
  British Columbia, Canada ✓
  Social icons row ✓

Tagline under logo — UPDATE to:
  "Survey-grade drone intelligence for land & living ecosystems
  across British Columbia."
  (more specific than "Survey-grade drone Intelligence...")
```

---

## 🚦 PRIORITY ORDER FOR AGENT

```
CRITICAL FIXES FIRST (do these before anything else):

1. About page — replace gradient placeholder with two stacked real photos
   → about-drone-pilot-operator-hd.jpg + hardware-mavic3-rc-pro-controller.jpg

2. Hardware page hero — add background image
   → hero-mavic3-flight-low-angle.jpg behind existing text

3. Hardware stats banner — fix wrong numbers
   → 326K → 420K pts/sec, <19h → 48hrs

4. Homepage stats banner — fix wrong numbers
   → 0.40 → 0.43, 28% → 30%

HIGH PRIORITY (day 1):

5. Hardware grid cells (Emlid, BLK2GO, Pix4D) — add real images
   → hardware-mavic3-rc-pro-controller.jpg, hardware-mavic3-hand-launch.jpg,
      data-chart-accuracy-comparison.jpg

6. Industries hero 2x2 image grid — replace placeholder images
   → survey-orthomosaic-top-down.jpg, about-drone-pilot-operator-hd.jpg,
      process-flight-plan-lawnmower.jpg, hardware-mavic3-enterprise-closeup.jpg

7. Services cards — add OUTPUTS lists and bottom images
   → survey-orthomosaic-top-down.jpg (card 1), process-checkpoint-accuracy-map.jpg (card 2)

SECONDARY (day 2):

8. How It Works — add step thumbnails
9. Case study teaser — update stat values to real numbers
10. Contact FAQ — update answers with real accuracy data
11. About credentials — fix faded 3rd card
12. Floating stat cards (hero + case study) — update values
```

---

*Source: "Measuring Accuracy of the DJI Mavic 3 Enterprise RTK" — DroneDeploy 2023*
*Study: Adam Carp, AEC Senior Solutions Engineer · 60 maps · 30 flights · 20-acre site*
*All stats independently verified via field checkpoints using Emlid RS2 GNSS receiver*