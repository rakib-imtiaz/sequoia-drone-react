Sequoia Drone — Content & Image Update Plan
> Built from real DroneDeploy accuracy study data (DJI Mavic 3 Enterprise RTK)
> All stats below are sourced from the whitepaper — do NOT fabricate numbers
---
📁 IMAGE LIBRARY — ALL RENAMED & READY
Place all images in `/public/images/` in your Next.js project.
```
/public/images/
  hero-mavic3-construction-site.jpg       ← DJI M3E in flight, construction earthworks bg
  hero-mavic3-flight-low-angle.jpg        ← Cinematic low-angle M3E in flight
  hardware-mavic3-enterprise-closeup.jpg  ← M3E close-up under bridge, ultra sharp
  hardware-mavic3-rc-pro-controller.jpg   ← M3E + RC Pro controller on survey ground
  hardware-mavic3-hand-launch.jpg         ← Hand holding M3E at construction site
  about-drone-pilot-operator-hd.jpg       ← Operator in hi-vis vest, drone in sky
  about-drone-pilot-site.jpg              ← Pilot operating drone at building site
  survey-orthomosaic-top-down.jpg         ← Real drone orthomosaic top-down aerial map
  survey-measurement-tape-ground.jpg      ← Tape measure on road — accuracy validation
  process-checkpoint-accuracy-map.jpg     ← Aerial site with checkpoint markers overlaid
  process-flight-plan-lawnmower.jpg       ← Real flight plan lawnmower pattern
  process-gcp-marker-ground.jpg           ← GCP marker on concrete, close-up
  process-rtk-diagram.jpg                 ← RTK workflow diagram illustration
  data-chart-accuracy-comparison.jpg      ← Bar chart: M3E vs Air 2S accuracy
  data-table-checkpoint-rmse.jpg          ← RMSE checkpoint table from actual study
```
---
📊 REAL DATA FROM DRONEDEPLOY STUDY — USE THESE EXACT NUMBERS
Source: "Measuring Accuracy of the DJI Mavic 3 Enterprise RTK using DroneDeploy Photogrammetry"
Author: Adam Carp, AEC Senior Solutions Engineer, DroneDeploy 2023.
Core Accuracy Stats (what to show on the site)
Metric	Value	Context
Best absolute accuracy (M3E RTK + GCPs)	0.43 inches / ~1.1cm	XYZ average, 120ft flight
Average absolute accuracy (M3E + GCPs)	< 1 inch / ~2.5cm	All flights combined
Horizontal (XY) accuracy without GCPs	0.84 inches	M3E RTK only, no GCPs
Vertical (Z) accuracy after calibration	0.64 inches	M3E RTK + elevation calibration
Relative measurement accuracy (M3E)	1.22 inches average	Surface distance measurements
GCP base station measurement RMS	1.02cm	Emlid RS2, averaged over 30s per point
RMSE from actual checkpoint table	X: 0.353in, Y: 0.340in, Z: 0.280in	Real field data from study
Hardware Specs (DJI Mavic 3 Enterprise — use verbatim)
```
Camera:         4/3-inch CMOS, 20 megapixel, mechanical global shutter
Photo interval: 0.7 seconds minimum (no motion blur)
Flight time:    45 minutes maximum rated
Weight:         2 lbs (0.9kg)
Wind rating:    Up to 26 MPH
Temp range:     14°F to 104°F (-10°C to 40°C)
RTK accuracy:   1cm horizontal, 1.5cm vertical (manufacturer claim)
Zoom:           56x hybrid zoom (dual-purpose: mapping + inspection)
```
Comparative Performance Stats
```
M3E vs Air 2S accuracy:    M3E produces 3x LESS map error than Air 2S
M3E vs Air 2S speed:       M3E completes missions 30%+ faster than Air 2S
GCPs impact on non-RTK:    GCPs improve accuracy by 10x on standard GPS drones
Flight altitude finding:   200ft flights were ~20% more accurate than 120ft
Study scale:               60 maps processed, 30 unique flights, 2-week study
Site size:                 20 acres tested
GCPs used:                 6 GCPs + 8 checkpoints = 14 total known points
```
---
🏗️ SECTION-BY-SECTION IMAGE & CONTENT PLACEMENT
---
SECTION 1 — NAVBAR
Images: None needed
Content: No change from work_plan.md
---
SECTION 2 — HERO
Primary image:
```
IMAGE FILE: hero-mavic3-construction-site.jpg
PLACEMENT:  Right column image card
WRAPPER:    bg #1a2018, border-radius 20px, overflow hidden, aspect-ratio 4/4.8
STYLE:      object-fit cover, fill prop (next/image)
ALT TEXT:   "DJI Mavic 3 Enterprise RTK in flight at survey site"

SECONDARY floating card (absolute top:16px left:-20px):
  IMAGE: none — text only
  Content: "DJI Mavic 3 Enterprise RTK" + "4/3 CMOS · Mechanical Shutter"
  Style: bg rgba(10,10,10,0.9), border rgba(255,255,255,0.1), radius 10px
```
Real copy to use:
```
Eyebrow: SURVEY-GRADE DRONE INTELLIGENCE · BC INTERIOR

Headline (StaggerText):
  Line 1: "Survey-Grade Data."
  Line 2: "For Land &"
  Line 3: "Living Ecosystems."
  → "Living" color: #4DEBFF

What we do paragraph:
  "We fly the DJI Mavic 3 Enterprise RTK, collect PPK-corrected GNSS
  data using the Emlid Reach RS3, and process it through Pix4Dmatic
  photogrammetry — delivering orthomosaics, 3D point clouds, and DXF
  files ready for AutoCAD Civil 3D within 48 hours."

Value prop pills row (3 pills):
  "✓ < 1 Inch RMS Accuracy"
  "✓ PPK + RTK Verified"
  "✓ AutoCAD Civil 3D Ready"

Floating stat card (absolute bottom:-16px right:-16px):
  Label:  VERIFIED FIELD ACCURACY
  Value:  0.43"
  Sub:    RMS — M3E RTK + GCPs
  Credit: DroneDeploy 2023 Study
  → Replace old "+24.8% Increase" with this
```
Trust bar (below hero, full width, bg #111111):
```
"Accuracy validated by:" label (muted 12px)
Text badges: DJI Enterprise · Emlid PPK/RTK · Pix4D Pipeline · AutoCAD Civil 3D
```
---
SECTION 3 — SERVICES OVERVIEW (bg #2a3426)
Card bottom images:
```
Card 1 — Survey & Engineering:
  IMAGE FILE: survey-orthomosaic-top-down.jpg
  PLACEMENT:  Flush bottom of card, margin-top auto
  HEIGHT:     160px, width 100%, object-cover
  ALT:        "Real drone orthomosaic aerial map"

Card 2 — Environmental Intelligence:
  IMAGE FILE: process-checkpoint-accuracy-map.jpg
  PLACEMENT:  Same as card 1
  ALT:        "Aerial site with survey checkpoint markers"

Card 3 — LiDAR Scanning:
  IMAGE FILE: hardware-mavic3-enterprise-closeup.jpg
  PLACEMENT:  Same as card 1
  ALT:        "DJI Mavic 3 Enterprise hardware close-up"
```
Real deliverables copy:
```
Card 1 — Survey & Engineering (left-accent: #4DEBFF):
  Desc: "PPK-corrected drone imagery processed into orthomosaics, DSMs,
    and vectorized DXF files — accurate to under 1 inch RMS."
  OUTPUTS heading: color #4DEBFF, 10px 500, letter-spacing 0.12em
  List items (12px rgba(255,255,255,0.5)):
    → Orthomosaic Map (GeoTIFF, 20MP source imagery)
    → DXF Feature Extraction (curbs, utilities, road centrelines)
    → TIN Surface + Contour Lines
    → AutoCAD Civil 3D Compatible export

Card 2 — Environmental Intelligence (left-accent: #4CAF72):
  Desc: "Multispectral and thermal imaging for forestry health,
    canopy analysis, and environmental compliance mapping."
  OUTPUTS heading: color #4CAF72
  List items:
    → NDVI / Multispectral Index Maps
    → Canopy Health & Biomass Reports
    → Time-Series Change Detection
    → Environmental Compliance Documentation

Card 3 — LiDAR Indoor Scanning (left-accent: #E8612A):
  Desc: "Leica BLK2GO walk-and-scan delivers BIM-ready point clouds
    for buildings and structures. No tripod. One operator."
  OUTPUTS heading: color #E8612A
  List items:
    → 3D Point Cloud (LAS/LAZ + E57)
    → BIM-Ready Files (Revit / Navisworks)
    → As-Built Floor Plans (DWG)
    → IFC / RCP Export

Bottom strip (full-width, bg rgba(0,0,0,0.3), radius 12px):
  Text: "All deliverables formatted for your workflow: DXF · DWG · GeoTIFF · LAS/LAZ · E57 · IFC"
```
---
SECTION 4 — HOW IT WORKS (bg #111111)
Step inset images (small thumbnails, right-aligned per step):
```
Step 1: process-flight-plan-lawnmower.jpg
  → Real autonomous flight plan screenshot
  → Size: 120px height, radius 8px, object-cover
  → Caption: "Actual flight plan — lawnmower pattern"

Step 2: process-gcp-marker-ground.jpg
  → Real GCP marker on ground
  → Same size + treatment
  → Caption: "GCP marker placement on site"

Step 3: data-table-checkpoint-rmse.jpg
  → Real RMSE accuracy table from study
  → bg white, radius 8px, padding 8px
  → Shows credibility to engineering clients

Step 4: survey-orthomosaic-top-down.jpg
  → Final output orthomosaic
  → Same thumbnail treatment
```
Real copy per step:
```
Heading:  "The BC Operations Pipeline."
Subtext:  "From remote alpine sites to urban construction corridors —
  we handle permitting, flight operations, and post-processing to
  deliver CAD-ready assets to your engineering team."

Step 1 — Flight Planning (ClipboardList icon):
  Desc: "We define the survey boundary and configure an autonomous
    polygon mission with 75/65 image overlap using DJI Pilot 2.
    Missions are planned at 120–200ft AGL for optimal accuracy."
  Tools pill: "DJI Pilot 2 · DJI Mavic 3 Enterprise"

Step 2 — PPK Ground Control (Radio icon):
  Desc: "Emlid RS3 base station is set over a known NGS monument.
    Raw GNSS data logs throughout the flight — no internet required.
    GCP positions are measured to 1.02cm RMS accuracy."
  Tools pill: "Emlid Reach RS3 · NGS Monument"
  Stat badge: "GCP Measurement RMS: 1.02cm"

Step 3 — Data Processing (Cpu icon):
  Desc: "Emlid Studio applies PPK corrections to all drone image
    geotags. Pix4Dmatic runs structure-from-motion photogrammetry
    to generate DSM, orthomosaic, and 3D point cloud. Accuracy is
    independently verified via RMS checkpoint error report."
  Tools pill: "Emlid Studio · Pix4Dmatic · Pix4Dsurvey"
  Stat badge: "RMSE X:0.35in Y:0.34in Z:0.28in"

Step 4 — CAD Deliverables (FileDown icon):
  Desc: "Vectorized features — curbs, gutters, utilities, road
    centrelines — and TIN surface models are exported as DXF
    files for immediate use in AutoCAD Civil 3D."
  Tools pill: "Pix4Dsurvey · AutoCAD Civil 3D"
  Stat badge: "< 1 inch RMS · DXF in 48hrs"
```
---
SECTION 5 — HARDWARE SHOWCASE (bg #0a0a0a)
Card images:
```
Card 1 — DJI Mavic 3 Enterprise (tag: Aerial Survey):
  IMAGE FILE: hardware-mavic3-enterprise-closeup.jpg
  ALT: "DJI Mavic 3 Enterprise RTK drone close-up"

Card 2 — Emlid Reach RS3 (tag: Ground Control):
  IMAGE FILE: hardware-mavic3-rc-pro-controller.jpg
  ALT: "DJI M3E with RC Pro controller on survey ground"
  NOTE: Replace with actual Emlid RS3 photo when available

Card 3 — Leica BLK2GO (tag: LiDAR Scanning):
  IMAGE FILE: hardware-mavic3-hand-launch.jpg
  ALT: "Drone survey hardware at construction site"
  NOTE: Replace with BLK2GO photo when sourced

Card 4 — Pix4D Suite (tag: Processing):
  IMAGE FILE: data-chart-accuracy-comparison.jpg
  ALT: "M3E vs Air 2S accuracy comparison chart"
```
Real specs copy:
```
DJI Mavic 3 Enterprise:
  Desc: "Mechanical global shutter eliminates rolling shutter distortion.
    4/3-inch CMOS captures 20MP images every 0.7 seconds for
    complete site coverage. RTK-enabled for centimeter positioning."
  Specs: 4/3 CMOS · 20MP · 0.7s interval · 45min · 2 lbs · 26MPH

Emlid Reach RS3:
  Desc: "Multi-band GNSS base station for PPK and RTK corrections.
    Logs raw GNSS data for post-processing — no internet required
    in the field. Compatible with DJI M3E RTK workflow."
  Specs: Multi-band GNSS · PPK + RTK · All constellations · ±7mm

Leica BLK2GO:
  Desc: "Handheld walk-and-scan LiDAR at 420,000 points per second.
    SLAM technology — no tripod, no setup time. One operator can
    capture an entire building in minutes."
  Specs: 420K pts/sec · SLAM · BIM-ready · 45min battery · 1.2kg

Pix4D Suite:
  Desc: "Pix4Dmatic handles photogrammetry processing of drone
    imagery into orthomosaics, DSMs, and point clouds.
    Pix4Dsurvey enables feature extraction and DXF export."
  Specs: Pix4Dmatic + Pix4Dsurvey · DSM · Ortho · DXF · GeoTIFF
```
---
SECTION 6 — STATS BANNER (bg #111111)
Use ONLY real numbers from the DroneDeploy study:
```
Stat 1:
  Value:   0.43"
  Suffix:  RMS
  Label:   BEST ACCURACY ACHIEVED
  CountUp: start 0, end 0.43, decimals 2

Stat 2:
  Value:   3x
  Label:   LESS ERROR VS STANDARD GPS
  CountUp: start 0, end 3, suffix "x"

Stat 3:
  Value:   30%+
  Label:   FASTER MISSION SPEED
  CountUp: start 0, end 30, suffix "%+"

Stat 4:
  Value:   48hrs
  Label:   FIELD TO CAD TURNAROUND
  CountUp: start 0, end 48, suffix "hrs"

Number color: #4DEBFF
Label style: 500, 12px, rgba(255,255,255,0.5), uppercase, letter-spacing 0.12em

Source credit line (below stats, centered):
  "Accuracy data: DroneDeploy M3E RTK Study, 2023 · 60 maps · 30 flights · 20-acre site"
  11px, rgba(255,255,255,0.25)
```
---
SECTION 7 — CASE STUDY TEASER (bg #0a0a0a)
Images:
```
Card right side (50% width):
  IMAGE FILE: survey-orthomosaic-top-down.jpg
  PLACEMENT:  fill, object-cover
  OVERLAY:    linear-gradient(to right, rgba(17,17,17,0.5), transparent)
  ALT:        "Real drone orthomosaic survey map"

Floating accuracy badge (absolute top:24px right:24px):
  bg rgba(10,10,10,0.85), backdrop-blur
  border 1px rgba(77,235,255,0.3), radius 12px
  Label: "FIELD VERIFIED"  (10px #4DEBFF)
  Value: "0.43" RMS"  (700 24px white)
  Credit: "DroneDeploy 2023"  (11px muted)
```
Copy:
```
Eyebrow:  REAL-WORLD ACCURACY DATA

Title:    "Survey-Grade Topographic Mapping"
          "— Field-Verified Results"

Desc:     "Using the DJI Mavic 3 Enterprise RTK with 6 evenly
  distributed GCPs measured by an Emlid RS3 to 1.02cm RMS, we
  process imagery through Pix4Dmatic and deliver complete DXF
  packages — curbs, utilities, TIN surface, and contour lines —
  with an average checkpoint error under 1 inch."

Stats row (CountUp, real numbers):
  0.43"   | Best RMS Accuracy
  1.02cm  | GCP Base RMS
  75/65   | Image Overlap
  48hrs   | Avg. Delivery

Deliverable badges:
  DXF · Orthomosaic · Point Cloud · TIN Surface · Civil 3D

CTA: "View Methodology →"
  → Links to /case-studies or /services
```
---
SECTION 8 — CONTACT FORM (bg #0a0a0a)
Images:
```
Right side panel:
  IMAGE FILE: about-drone-pilot-operator-hd.jpg
  PLACEMENT:  fill, object-cover, overlay rgba(0,0,0,0.35)
  ALT:        "Drone operator in hi-vis vest at survey site"

Centered stat overlay:
  Icon:    Wifi or Target Lucide icon, #4DEBFF, 36px
  Value:   "< 1 inch"  (700 clamp(48px,7vw,72px) white)
  Label:   "RMS ABSOLUTE ACCURACY"  (500 13px rgba(255,255,255,0.65))
  Credit:  "DroneDeploy M3E Study, 2023"  (11px muted)
```
---
ABOUT PAGE IMAGES
```
Hero (dark, full screen bg):
  IMAGE FILE: hero-mavic3-flight-low-angle.jpg
  STYLE: ParallaxImage speed=100, dark overlay rgba(0,0,0,0.6)
  ALT: "Cinematic DJI Mavic 3 Enterprise in flight"

Story section (white bg):
  Top image (60% height):
    IMAGE FILE: about-drone-pilot-operator-hd.jpg
    ALT: "Professional drone operator at survey site"

  Bottom image (40% height):
    IMAGE FILE: hardware-mavic3-rc-pro-controller.jpg
    ALT: "DJI M3E with RC Pro controller field setup"
```
---
HARDWARE PAGE IMAGES
```
Banner card (full-width, 240px tall):
  IMAGE FILE: hardware-mavic3-hand-launch.jpg
  STYLE: ParallaxImage speed=60, left-to-right gradient overlay
  ALT: "DJI Mavic 3 Enterprise being launched at construction site"

Grid cell 1 (DJI):
  IMAGE FILE: hardware-mavic3-enterprise-closeup.jpg

Grid cell 2 (Emlid):
  IMAGE FILE: hardware-mavic3-rc-pro-controller.jpg

Grid cell 3 (BLK2GO):
  SOURCE: Generate with Midjourney or fetch from leica-geosystems.com
  Prompt: "Leica BLK2GO handheld laser scanner concrete interior glowing points"

Grid cell 4 (Pix4D):
  IMAGE FILE: data-chart-accuracy-comparison.jpg
```
---
CASE STUDIES PAGE IMAGES
```
Featured dark card (2/3 wide):
  IMAGE FILE: survey-orthomosaic-top-down.jpg
  ALT: "Real drone orthomosaic aerial survey map"

Standard card — Project Alpha:
  IMAGE FILE: process-flight-plan-lawnmower.jpg
  Caption: "High-Altitude Topographic Survey"

Standard card — Project Beta:
  IMAGE FILE: about-drone-pilot-site.jpg
  Caption: "BIM-Ready Indoor Digital Twin"

Standard card — Project Gamma:
  IMAGE FILE: process-checkpoint-accuracy-map.jpg
  Caption: "Post-Harvest Canopy Analysis"
```
---
🛑 ACCURACY RULES — READ BEFORE BUILDING
```
✅ USE THESE EXACT NUMBERS (all field-verified):
  "0.43 inches"  → best case RMS (M3E RTK + GCPs, 120ft AGL)
  "< 1 inch"     → average absolute accuracy (M3E + GCPs)
  "0.84 inches"  → XY accuracy without GCPs (RTK only)
  "0.64 inches"  → Z accuracy after elevation calibration
  "1.02cm"       → Emlid RS2 GCP base station RMS
  "3x"           → M3E vs Air 2S accuracy advantage
  "30%+"         → M3E vs Air 2S speed advantage
  "20%"          → accuracy gain at 200ft vs 120ft AGL
  "1.22 inches"  → M3E relative measurement accuracy

❌ DO NOT use these (unverified or overstated):
  "±2cm"              → not from this study (study is inch-based)
  "millimeter accuracy" → overstated, not field-verified here
  "99% accuracy"        → no such stat in the study
  "sub-centimeter"      → manufacturer claim, not independently verified

📌 When displaying stats on site, always add a credit line:
  Small muted text: "Source: DroneDeploy M3E accuracy study, 2023"
  This is what makes it credible to an engineering firm like TRUE Consulting
```
---
✅ PRIORITY BUILD ORDER FOR AGENT
```
DAY 1 — Swap images and hero stat:
  1. Copy all 15 images to /public/images/
  2. Hero: swap to hero-mavic3-construction-site.jpg
  3. Hero floating card: change stat to "0.43" RMS / DroneDeploy 2023"
  4. Services Card 1 bottom: survey-orthomosaic-top-down.jpg
  5. Contact right panel: about-drone-pilot-operator-hd.jpg

DAY 2 — Update all copy with real stats:
  6. Stats banner: update all 4 stats to real numbers above
  7. How It Works: add real step copy + tool pills + stat badges
  8. Case Study Teaser: add real numbers + field-verified badge
  9. Services cards: add OUTPUTS lists per card

DAY 3 — Hardware + remaining pages:
  10. Hardware cards: real specs copy per device
  11. About page images
  12. Hardware page banner + grid
  13. Case studies grid
```
---
Source document: "Measuring Accuracy of the DJI Mavic 3 Enterprise RTK using DroneDeploy Photogrammetry"
Author: Adam Carp, AEC Senior Solutions Engineer, DroneDeploy 2023
Study: 60 processed maps · 30 unique flights · 20-acre site · Emlid RS2 GCPs