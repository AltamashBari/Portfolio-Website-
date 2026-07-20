import type { Project, ProjectImage } from "./types";

/*
  ALTAMASH BARI — selected works.
  ----------------------------------------------------------------------------
  Images live in /public/portfolio/{folder}/. `cover.jpg` is the hero render;
  numbered sheets (01.jpg ...) are the presentation sheets shown in the case
  study. To update a project, edit its object and drop new files in its folder.
*/

function img(
  folder: string,
  file: string,
  width: number,
  height: number,
  alt: string,
  caption?: string,
): ProjectImage {
  return { src: `/portfolio/${folder}/${file}`, alt, width, height, caption };
}

export const projects: Project[] = [
  {
    slug: "sky-residences-expo-city-dubai",
    title: "Sky Residences, Expo City Dubai",
    category: "Residential",
    location: "Expo City Dubai, UAE",
    year: "2025",
    status: "Design Development",
    workType: "Architectural",
    featured: true,
    summary:
      "Multidisciplinary LOD 400 BIM coordination across architecture, facade, interiors, structure, MEP and landscape for a residential community at Expo City Dubai.",
    intro:
      "Sky Residences is a mixed-use residential community developed by Expo City Dubai at the heart of the Expo 2020 legacy site, comprising mid- to high-rise towers gathered around Al Wasl Plaza. Altamash contributed to the project's multidisciplinary LOD 400 BIM delivery, coordinating architectural, facade, interior, structural, MEP, landscape and specialist packages through construction-stage documentation, progressing from BIM Architect / BIM Specialist to Arch & Facade Lead.",
    cover: img(
      "sky-residences",
      "cover.jpg",
      2000,
      1127,
      "Official render of the Sky Residences towers and landscaped retail promenade at Expo City Dubai",
    ),
    gallery: [
      img("sky-residences", "01.jpg", 1830, 1066, "Aerial site plan of the Expo City Dubai masterplan showing the Sky Residences district", "Expo City Dubai masterplan, official image"),
      img("sky-residences", "02.jpg", 1900, 1344, "Diagram illustrating role progression from BIM Architect / BIM Specialist to Arch & Facade Lead on Sky Residences", "Role progression, 2025"),
      img("sky-residences", "03.jpg", 1900, 1344, "Diagram of the LOD 400 multidisciplinary package scope across Architecture, Facade, Interior Design, Structure, MEP, Landscape and specialist packages", "LOD 400 package scope"),
      img("sky-residences", "04.jpg", 1900, 1344, "Diagram of BIM package coordination and discipline interfaces across AR, FC, ID, ST, MEP and LA", "BIM package & discipline coordination"),
      img("sky-residences", "05.jpg", 740, 1110, "Sky Residences towers under construction at Expo City Dubai, viewed from the site perimeter", "Sky Residences construction progress, site photograph"),
    ],
    story: [
      {
        heading: "Project Overview",
        body: "Sky Residences is a signature residential community within Expo City Dubai, forming part of the wider Expo City master plan on the site of Expo 2020 Dubai. The development comprises multiple mid- to high-rise towers of up to fifteen storeys, offering a mix of one- to four-bedroom apartments across a built-up area of more than 200,000 sqm. Towers sit above a landscaped podium deck with views toward Al Wasl Plaza, supported by amenities including swimming pools, gymnasiums, retail space, community halls and multi-level parking. The project is being delivered with a focus on passive cooling, operational efficiency and long-term sustainability, in keeping with Expo City Dubai's wider net-zero ambitions. This description reflects publicly available project information; Altamash's personal contribution is set out below.",
      },
      {
        heading: "Role & Professional Progression",
        body: "Altamash joined Sky Residences as a BIM Architect / BIM Specialist and progressed, over the course of the project, to Arch & Facade Lead. This progression reflects growing responsibility for architectural and facade BIM coordination as the project moved through LOD 400 documentation toward construction.",
      },
      {
        heading: "LOD 400 Multidisciplinary Scope",
        body: "Altamash's involvement spans the project's LOD 400 stage, working across multiple coordinated packages: Architecture (AR), Facade (FC), Interior Design (ID), Structure (ST), MEP, Landscape (LA), and other specialist consultant packages. LOD 400 requires models and drawings to carry construction-ready, near fabrication-level detail, so coordination at this stage is focused on resolving interfaces between disciplines ahead of issue for construction.",
      },
      {
        heading: "BIM Package & Discipline Overview",
        body: "Coordination at this stage has covered architectural model development and technical review; interface checks between architecture and structure, MEP and landscape; and facade-specific coordination including geometry, openings and slab-edge interfaces with the structural package. Interior design coordination has helped keep fit-out and architectural information aligned as the design has matured toward construction issue.",
      },
      {
        heading: "Responsibilities & Coordination Workflow",
        body: "Across this progression, Altamash's contribution has included multidisciplinary LOD 400 BIM coordination across the AR, FC, ID, ST, MEP and LA packages; architectural model development and technical review; federated-model review and interface coordination between disciplines; model audits and quality checks against project BIM requirements; clash identification, coordination tracking and follow-up toward resolution; review of constructability and discipline interfaces; coordination of architectural, structural and building-services requirements; facade geometry, openings, slab-edge and structural-interface coordination; curtain-wall and facade-package coordination as Arch & Facade Lead; support for coordinated drawings and construction-stage deliverables; and ongoing communication with discipline leads, consultants and project stakeholders.",
      },
      {
        heading: "Key Professional Contribution",
        body: "Contributed to the multidisciplinary LOD 400 BIM delivery and coordination of Sky Residences at Expo City Dubai, working across architectural, facade, interior, structural, MEP, landscape and specialist packages, progressing from BIM Architect / BIM Specialist to Arch & Facade Lead over the course of the project.",
      },
      {
        heading: "Sources & Image Credits",
        body: "Public project information above is drawn from Expo City Dubai's official Sky Residences pages and media releases, and from SSH's project page describing the appointed supervision consultant's scope. The cover render and masterplan aerial on this page are official Expo City Dubai marketing images, credited to Expo City Dubai and its design and consultant team. The construction-progress photograph shows the towers under construction as viewed from the public site perimeter. The role-progression, LOD 400 scope and BIM coordination diagrams are original illustrations created for this portfolio and do not reproduce any confidential project model, drawing, or document. The content on this page describes Altamash's personal BIM contribution only and does not represent Expo City Dubai or its project team.",
      },
    ],
    specs: [
      { label: "Location", value: "Expo City Dubai, UAE" },
      { label: "Sector", value: "Residential, Mixed-Use Community" },
      { label: "Stage", value: "LOD 400, Construction-Stage BIM" },
      { label: "Role", value: "BIM Architect to Arch & Facade Lead" },
      { label: "Packages", value: "AR, FC, ID, ST, MEP, LA + Specialist" },
    ],
  },
  {
    slug: "300-bed-multispeciality-hospital",
    title: "300-Bed Multi-Speciality Hospital",
    category: "Institutional",
    location: "Balrampur, U.P.",
    year: "2024",
    status: "Concept",
    workType: "Competition",
    featured: true,
    summary: "A climate-shaped civic hospital planned around therapeutic gardens.",
    intro:
      "A 300-bed multi-speciality hospital for Balrampur, planned as a piece of civic infrastructure rather than a machine. Two blocks of different heights hold emergency and out-patient care, stitched together by therapeutic gardens that every corridor can reach.",
    cover: img(
      "hospital",
      "cover.jpg",
      1600,
      1703,
      "Exterior render of the 300-bed multi-speciality hospital with a curved perforated facade and forecourt",
    ),
    gallery: [
      img("hospital", "01.jpg", 1900, 1344, "Climate analysis and form evolution diagrams for the hospital", "Climate analysis & form evolution"),
      img("hospital", "02.jpg", 1900, 1344, "Site plan, functional diagram and elevation for the hospital", "Site plan, functional diagram & elevation"),
      img("hospital", "03.jpg", 1900, 1344, "Design development render and movement diagrams for the hospital", "Design development & movement diagrams"),
      img("hospital", "04.jpg", 1900, 1344, "Basement and ground floor plans with rear elevation of the hospital", "Floor plans & rear elevation"),
    ],
    story: [
      {
        heading: "Climate first",
        body: "The plan begins with the sun and the monsoon. Blocks are turned and opened so wards catch daylight and cross-ventilation, and the harsh western sun is kept off the patient rooms, cutting the building's reliance on mechanical cooling.",
      },
      {
        heading: "Two blocks, one campus",
        body: "The ideal block is split and lifted into two heights, one for emergency and one for the out-patient department, and opened along the main access routes so way-finding stays instinctive for people arriving in stress.",
      },
      {
        heading: "Gardens that heal",
        body: "Therapeutic gardens are woven in at uniform intervals with access from every corridor, so recovery, staff respite, and visiting all happen close to green. The ground floor stays porous and walkable throughout.",
      },
    ],
    specs: [
      { label: "Type", value: "Institutional, Healthcare" },
      { label: "Location", value: "Balrampur, U.P." },
      { label: "Capacity", value: "300 beds" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    slug: "shalimar-one-world-group-housing",
    title: "Shalimar One World – Group Housing",
    category: "Residential",
    location: "Lucknow, U.P.",
    year: "2024",
    status: "Design Development",
    workType: "Architectural",
    featured: true,
    summary:
      "A large-scale group-housing development in Lucknow: site analysis, five tower typologies, apartment-mix studies, massing comparisons and FSI planning across a 7.9-acre riverside plot.",
    intro:
      "Shalimar One World – Group Housing is a large-scale residential development in Lucknow, Uttar Pradesh, planned on a 7.9-acre (72,185 sqm) site on the bank of the Gomti river, as part of the wider Shalimar One World masterplan. Altamash contributed to the project during his time at Architect Hafeez Contractor, working across site and context analysis, residential tower and apartment planning, massing comparisons, and FSI planning.",
    cover: img(
      "shalimar-one-world-group-housing",
      "cover.jpg",
      2000,
      1165,
      "Conceptual exterior render of the Shalimar One World Group Housing towers along a landscaped boulevard",
    ),
    gallery: [
      img("shalimar-one-world-group-housing", "01.jpg", 1900, 1084, "Site zoning, sun-path, site-extents, plot-layout, location and conceptual massing diagrams for Shalimar One World Group Housing", "Site & context analysis"),
      img("shalimar-one-world-group-housing", "02.jpg", 1700, 1638, "Typical floor plan of Tower A at Shalimar One World Group Housing, showing 3BHK+Servant (Small) and 2BHK+Study apartment layouts around a shared lift core", "Tower A — typical floor plan"),
      img("shalimar-one-world-group-housing", "03.jpg", 1700, 1638, "Typical floor plan of Tower B at Shalimar One World Group Housing, showing 3BHK+Servant (Medium) and 3BHK apartment layouts", "Tower B — typical floor plan"),
      img("shalimar-one-world-group-housing", "04.jpg", 1700, 1638, "Typical floor plan of Tower C at Shalimar One World Group Housing, showing 3BHK+Servant (Ultima) and 3BHK apartment layouts", "Tower C — typical floor plan"),
      img("shalimar-one-world-group-housing", "05.jpg", 1700, 1676, "Combined floor plans of Towers D and E at Shalimar One World Group Housing, stacking multiple apartment typologies around shared cores and corridors", "Towers D & E — combined block plans"),
      img("shalimar-one-world-group-housing", "06.jpg", 1900, 1226, "Comparative massing study of merged versus separated tower blocks for Shalimar One World Group Housing", "Comparative massing study"),
    ],
    story: [
      {
        heading: "Site & Context Analysis",
        body: "The scheme was studied against its context within the wider Shalimar One World masterplan on the bank of the Gomti river in Lucknow, alongside the adjoining Valencia phases and the One World commercial towers. Zoning, sun-path and site-extents studies mapped the plot's orientation, seasonal sun angles and proximity to nearby landmarks, while plot-layout and location studies fixed the site against the riverfront edge. A conceptual massing study then translated these constraints into an initial tower arrangement across the plot.",
      },
      {
        heading: "Tower A — Typical Floor Plan",
        body: "Tower A was planned as a point block with a mix of 3BHK+Servant (Small) and 2BHK+Study apartments arranged around a central core of three passenger lifts and a dedicated fire lift, giving every unit direct daylight and cross-ventilation.",
      },
      {
        heading: "Tower B — Typical Floor Plan",
        body: "Tower B carries a larger floor plate with 3BHK+Servant (Medium) and 3BHK apartment types, organised around the same three-lift-and-fire-lift core arrangement used across the tower family for consistency of servicing and egress.",
      },
      {
        heading: "Tower C — Typical Floor Plan",
        body: "Tower C introduces the largest apartment typology in the scheme, 3BHK+Servant (Ultima), alongside 3BHK units, again planned around a shared core. Towers A, B and C together form the principal tower cluster on Plot A.",
      },
      {
        heading: "Towers D & E — Combined Block Plans",
        body: "Towers D and E were developed as combined-block typologies on Plot B, stacking 3BHK+Servant (Small/Medium), 3BHK and 2BHK+Study apartments around shared fire-rated corridors and dual cores, testing a higher-density block configuration alongside the point towers of Plot A.",
      },
      {
        heading: "Comparative Massing Study",
        body: "Two massing options were studied for the site: one with merged, combined tower blocks and one with fully separated point towers. The comparison weighed built form, tower spacing, open space and site circulation against the same total unit count, informing the tower arrangement taken forward.",
      },
      {
        heading: "FSI & Planning Summary",
        body: "Across Plot A (Towers A, B and C) and Plot B (Towers D, E and F), the project's area statement worked out to a combined FSI consumption of approximately 2,96,612 sq.m (about 3.19 million sq.ft) against a permissible FSI of approximately 2,98,926 sq.m (about 3.22 million sq.ft), keeping the overall massing within the site's development potential across the residential towers, club house and entrance-hall areas.",
      },
      {
        heading: "My Contribution",
        body: "Contributed to Shalimar One World – Group Housing during his time at Architect Hafeez Contractor, covering site and context analysis, residential tower and apartment planning across five tower typologies (Towers A through E), unit-mix and layout optimisation, conceptual massing comparisons, area statements and FSI calculations, and the preparation and coordination of architectural drawings and presentation material.",
      },
      {
        heading: "Sources & Credits",
        body: "Project drawings and figures are adapted from internal presentation material prepared at Architect Hafeez Contractor; the drawings shown here have been cropped and isolated from their original page layout for this portfolio and do not reproduce the source material's page design, branding or office stamps. Supplementary public context on Shalimar One World and its Lucknow riverfront location is drawn from Shalimar Corp's official project channels. This page describes Altamash's personal contribution to the project only.",
      },
    ],
    specs: [
      { label: "Type", value: "Residential, Group Housing" },
      { label: "Location", value: "Lucknow, U.P." },
      { label: "Site", value: "7.9 acres (72,185 sqm)" },
      { label: "Status", value: "Design Development" },
      { label: "Role", value: "Architect Hafeez Contractor" },
    ],
  },
  {
    slug: "monte-south-residential-tower",
    title: "Monte South Residential Tower",
    category: "Residential",
    location: "Byculla, Mumbai",
    year: "2023",
    status: "Design Development",
    workType: "Architectural",
    featured: true,
    summary: "An award-winning luxury tower rising over the old Khatau Mills.",
    intro:
      "Monte South is an award-winning luxury development near South Mumbai at Byculla, spread across a 12.5-acre plot of the historic Khatau Mills. Four residential towers of 60-plus storeys hold ultra-spacious homes above a podium beach and amazon-themed landscaping. Altamash worked on the project during his time at Architect Hafeez Contractor.",
    cover: img(
      "monte-south",
      "cover.jpg",
      1600,
      1838,
      "Render of the Monte South twin residential towers rising above a landscaped podium in South Mumbai",
    ),
    gallery: [
      img("monte-south", "01.jpg", 1900, 1344, "Site plan with building layout for the Monte South development", "Site plan & layout"),
      img("monte-south", "02.jpg", 1900, 1344, "Podium level and club house plans with tower details", "Podium & club house"),
      img("monte-south", "03.jpg", 1900, 1344, "Tower elevations, toilet details and key plan for Monte South", "Elevations & details"),
    ],
    story: [
      {
        heading: "Towers over the mills",
        body: "Four towers of 60-plus storeys rise from a 12.5-acre plot of the old Khatau Mills, carrying 2, 2.5, 3, and 3.5 BHK homes with a range of resort-grade amenities.",
      },
      {
        heading: "A podium of its own",
        body: "The podium becomes a world in itself, a beach and amazon-themed landscape lifted above the city, giving residents calm and green in dense South Mumbai.",
      },
      {
        heading: "Recognised work",
        body: "Monte South has earned prestigious honours, including Best Residential High-Rise Development at the Asia Pacific Property Awards, the calibre of practice Altamash trained inside at Hafeez Contractor.",
      },
    ],
    specs: [
      { label: "Type", value: "Residential, High-Rise" },
      { label: "Location", value: "Byculla, Mumbai" },
      { label: "Site", value: "12.5 acres, 60+ storeys" },
      { label: "Role", value: "Architect Hafeez Contractor" },
    ],
  },
  {
    slug: "shalimar-one-world-commercial-towers",
    title: "Shalimar One World Commercial Towers",
    category: "Commercial",
    location: "Lucknow",
    year: "2023",
    status: "Design Development",
    workType: "Architectural",
    featured: true,
    summary: "Four riverfront commercial towers on the bank of the Gomti.",
    intro:
      "Shalimar One World is an upcoming commercial development in Lucknow on the bank of the Gomti river, a cluster of four towers of office and commercial space gathered around a vast entry deck that opens to a panoramic view of the water.",
    cover: img(
      "shalimar",
      "cover.jpg",
      1600,
      1702,
      "Render of the Shalimar One World commercial towers with a glazed, colour-lit facade on the Gomti riverfront",
    ),
    gallery: [
      img("shalimar", "01.jpg", 1900, 1344, "Site plan of the Shalimar One World towers along the Gomti river", "Riverfront site plan"),
      img("shalimar", "02.jpg", 1900, 1344, "Group housing and hotel zoning plans for Shalimar One World", "Zoning & massing"),
      img("shalimar", "03.jpg", 1900, 1344, "Tower elevations and exterior renders of Shalimar One World", "Elevations & renders"),
    ],
    story: [
      {
        heading: "On the river's edge",
        body: "The 7.9-acre plot sits on the bank of the Gomti, and the whole scheme is turned to face the water, trading a generic business park for a genuine riverfront address.",
      },
      {
        heading: "Four towers, one deck",
        body: "Four office and commercial towers share a huge entry deck, the highlight of the scheme, a raised public space that faces the river and slows visitors down.",
      },
      {
        heading: "Built for the city",
        body: "Now in design development, the towers are scaled to become a working piece of Lucknow's commercial future rather than a sealed enclave.",
      },
    ],
    specs: [
      { label: "Type", value: "Commercial, Office" },
      { label: "Location", value: "Lucknow, Gomti riverfront" },
      { label: "Site", value: "7.9 acres (32,550 sqm), 4 towers" },
      { label: "Status", value: "Design development" },
    ],
  },
  {
    slug: "corte-vetro-villa",
    title: "Corte Vetro Villa",
    category: "Interior",
    location: "Alshamal, Qatar",
    year: "2026",
    status: "Completed",
    workType: "Interior",
    featured: true,
    summary:
      "A private residence in Alshamal, Qatar, organised into seven distinct areas — reception, family living, the master suite, children's and guest wings, wellness, and circulation — held together by walnut, travertine and brass.",
    intro:
      "Corte Vetro Villa is a private residence in Alshamal, Qatar, designed for owner Salem Al-Ghanim, in association with Kayan and architect Bashar A. Al-Salem. Altamash led the interior architecture and design team on the project, covering 3D modelling and visualisation, mood boards, client meetings, and construction drawings across the villa's reception, family, private and wellness wings.",
    cover: img(
      "corte-vetro-villa",
      "cover.jpg",
      960,
      1600,
      "Grand entrance hall of Corte Vetro Villa, with book-matched travertine walls, brass sconces and a framed view to the garden",
    ),
    gallery: [],
    story: [
      {
        heading: "Overview",
        body: "Corte Vetro Villa is a private residence in Alshamal, Qatar, built for owner Salem Al-Ghanim across two levels of formal reception, family living and wellness space. The brief called for a home able to host separate men's and women's majlis gatherings in the Gulf tradition alongside a calmer, warmer world for daily family life — two registers of hospitality under one roof. The house is organised below into seven areas, each with its own character within a single, consistent material language.",
      },
      {
        heading: "Design Concept",
        body: "The design holds every space to a single material language — walnut, travertine and brass — and lets scale and light do the work of distinguishing formal from informal. Reception rooms are generous, symmetrical and high-ceilinged; family spaces are lower, warmer and more textured, so the shift from hosting to living is felt rather than announced.",
      },
      {
        heading: "Materials & Palette",
        body: "A consistent material palette runs through the house: book-matched travertine and richly veined marble against rift-cut walnut panelling, brushed brass and bronze fixtures, and boucle, wool and camel-toned upholstery. Cove-lit ceilings and slim brass pendants keep the lighting layered and indirect rather than relying on a single fixture, so every room reads calm after dark.",
      },
      {
        heading: "01 — Arrival & Reception",
        body: "The villa opens into its most ceremonial rooms first. Mirrored men's and women's majlis halls in travertine and walnut anchor the reception wing, each supported by its own washroom and prayer nook so a full evening of hosting never has to cross into the family's private spaces. A backlit perfume and scent bar greets guests just off the entrance, and a dedicated women's dining room, book-matched in stone beneath a sculptural chandelier, extends the formal register into a shared meal.",
        images: [
          img("corte-vetro-villa", "01.jpg", 1600, 900, "Men's majlis at Corte Vetro Villa, with a curved wood-panelled ceiling, backlit display wall and a suspended arc floor lamp", "Men's majlis"),
          img("corte-vetro-villa", "02.jpg", 1600, 1600, "Women's majlis at Corte Vetro Villa, a symmetrical seating hall in travertine and walnut with layered ambient lighting", "Women's majlis"),
          img("corte-vetro-villa", "11.jpg", 1600, 900, "Women's dining room at Corte Vetro Villa with a book-matched stone feature wall and a long table beneath a sculptural chandelier", "Women's dining"),
          img("corte-vetro-villa", "12.jpg", 960, 1600, "Washroom and prayer nook off the majlis at Corte Vetro Villa, arched wood surround with a stone basin", "Majlis washroom & prayer nook"),
          img("corte-vetro-villa", "13.jpg", 1383, 1600, "Perfume and scent display bar off the entrance at Corte Vetro Villa in backlit walnut joinery", "Entrance perfume bar"),
        ],
      },
      {
        heading: "02 — Family Living",
        body: "Behind the reception wing, the house softens into where the family actually lives. A dramatic veined-marble island anchors the open kitchen and family lounge, doubling as the everyday table, while a separate chef's kitchen handles the heavier work out of sight. A roof-level pantry and laundry hall keeps daily logistics tucked away in the same warm oak language as the rooms it serves, and the lounge itself opens onto a planted internal courtyard behind a woven brass screen, keeping daylight and greenery at the centre of family life.",
        images: [
          img("corte-vetro-villa", "06.jpg", 1600, 1600, "Kitchen and family lounge at Corte Vetro Villa, centred on a dramatic veined marble island and backlit fluted glass panel", "Kitchen & family lounge"),
          img("corte-vetro-villa", "07.jpg", 1600, 900, "Family lounge at Corte Vetro Villa opening onto an internal planted courtyard behind a woven brass screen", "Lounge & courtyard"),
          img("corte-vetro-villa", "14.jpg", 1600, 991, "Chef's kitchen at Corte Vetro Villa in dark stone and matte walnut cabinetry", "Chef's kitchen"),
          img("corte-vetro-villa", "15.jpg", 1280, 1600, "Roof-level pantry and laundry hall at Corte Vetro Villa in warm oak panelling", "Pantry & laundry"),
        ],
      },
      {
        heading: "03 — Master Suite",
        body: "The master suite is planned as a private wing of its own: a curved-ceiling sitting area with a suspended arc lamp and built-in fireplace, a bedroom held in full-height glazing and sheer drapery, a dedicated perfume and dressing zone, and a bathroom finished in book-matched stone with a floating vanity and backlit mirror walls. Every surface repeats the same material vocabulary as the rest of the house, scaled up for a room meant to be lived in daily rather than shown.",
        images: [
          img("corte-vetro-villa", "03.jpg", 1410, 1600, "Master living area at Corte Vetro Villa with a curved ceiling, boucle daybed, suspended arc lamp and integrated fireplace", "Master suite — private living area"),
          img("corte-vetro-villa", "04.jpg", 1600, 900, "Master bedroom and dressing area at Corte Vetro Villa, with full-height glazing, sheer drapery and a built-in display wall", "Master bedroom & dressing"),
          img("corte-vetro-villa", "05.jpg", 1600, 1600, "Master bathroom at Corte Vetro Villa with a floating book-matched stone vanity and backlit mirror walls", "Master bathroom"),
          img("corte-vetro-villa", "16.jpg", 960, 1600, "Perfume and dressing display zone within the master suite at Corte Vetro Villa", "Master perfume & dressing zone"),
        ],
      },
      {
        heading: "04 — Children's Wing",
        body: "Four bedrooms and a shared play area give the villa's youngest residents a wing with its own identity, from a moon-and-cloud mural for the youngest room to a rose-toned scheme for a teenage bedroom and a walnut-and-grey palette for a second child's room. A ball-pit and climbing-wall play area sits alongside, keeping the wing playful without breaking from the calm, tactile material language established across the rest of the house.",
        images: [
          img("corte-vetro-villa", "10.jpg", 1481, 1600, "A children's bedroom at Corte Vetro Villa with a custom wall mural and bespoke joinery", "Children's bedroom"),
          img("corte-vetro-villa", "17.jpg", 1600, 1600, "A children's bedroom at Corte Vetro Villa with a moon-and-cloud wall mural above the bed", "Moon & cloud bedroom"),
          img("corte-vetro-villa", "18.jpg", 1600, 1524, "A teenage bedroom at Corte Vetro Villa in a rose and warm-neutral palette", "Teenage bedroom"),
          img("corte-vetro-villa", "19.jpg", 1600, 1554, "A second children's bedroom at Corte Vetro Villa in walnut and warm grey tones", "Children's bedroom, walnut & grey"),
          img("corte-vetro-villa", "20.jpg", 1280, 1600, "Children's play area at Corte Vetro Villa with a ball pit and climbing wall", "Play area"),
        ],
      },
      {
        heading: "05 — Guest Wing",
        body: "Two guest bedrooms, one on the ground floor and one on the first, are held to the same neutral, tactile palette as the family wing but pared back to let visiting guests feel at home without competing with the family's own rooms. A rounded mirror feature anchors the ground-floor room, while the first-floor room relies on built-in wardrobe joinery to keep the space uncluttered.",
        images: [
          img("corte-vetro-villa", "21.jpg", 1320, 1600, "Ground-floor guest bedroom at Corte Vetro Villa in a neutral palette with a rounded mirror feature", "Ground-floor guest bedroom"),
          img("corte-vetro-villa", "22.jpg", 1280, 1600, "First-floor guest bedroom at Corte Vetro Villa with built-in wardrobe joinery", "First-floor guest bedroom"),
        ],
      },
      {
        heading: "06 — Wellness",
        body: "The wellness suite pairs a full home gym with a spa and sauna, set behind timber louvred blinds that filter daylight across the space. Natural stone accent walls and warm timber ceiling panels carry the house's material language into a space built for daily use rather than display.",
        images: [
          img("corte-vetro-villa", "08.jpg", 1600, 1600, "Home gym and spa at Corte Vetro Villa behind timber louvred blinds with natural stone accent walls", "Gym & spa"),
          img("corte-vetro-villa", "23.jpg", 1600, 1600, "Sauna within the wellness suite at Corte Vetro Villa, lined in warm timber", "Sauna"),
        ],
      },
      {
        heading: "07 — Circulation & Support",
        body: "The lift and stair core is treated as its own set piece, in book-matched stone and bronze-finished panelling with a floating timber-clad stair, so the vertical circulation between the villa's formal and private levels feels considered rather than incidental. A home office off the garage level, anchored by a sculptural stone-clad desk, completes the villa's support spaces.",
        images: [
          img("corte-vetro-villa", "09.jpg", 1600, 1600, "Lift and staircase core at Corte Vetro Villa in book-matched stone and bronze-finished panelling", "Lift & staircase"),
          img("corte-vetro-villa", "24.jpg", 1600, 1600, "Home office off the garage level at Corte Vetro Villa with a sculptural stone-clad desk", "Garage-level home office"),
        ],
      },
      {
        heading: "My Contribution",
        body: "Altamash led the interior architecture and design team on Corte Vetro Villa, working alongside Kayan and architect Bashar A. Al-Salem. His role spanned 3D modelling and visualisation across all interior zones, mood board and material direction, client meetings, and construction drawings, shaping the project from early concept through to detailed documentation.",
      },
      {
        heading: "Sources & Credits",
        body: "Corte Vetro Villa, Alshamal, Qatar, for owner Salem Al-Ghanim, designed in association with Kayan and architect Bashar A. Al-Salem. All renders shown are original visualisation work produced for the project and do not reproduce any client-confidential drawings or documents beyond the presentation imagery itself.",
      },
    ],
    specs: [
      { label: "Type", value: "Residential Interior" },
      { label: "Location", value: "Alshamal, Qatar" },
      { label: "Client", value: "Salem Al-Ghanim" },
      { label: "Status", value: "Completed" },
      { label: "Role", value: "Kayan, with architect Bashar A. Al-Salem" },
    ],
  },
  {
    slug: "irfan-khan-residence",
    title: "Dr. Irfan Khan Residence",
    category: "Interior",
    location: "Lucknow, U.P.",
    year: "2026",
    status: "Design Development & Construction",
    workType: "Interior",
    featured: true,
    summary:
      "A three-level family residence in Lucknow with a neoclassical facade, generous ensuite bedrooms, and a rooftop gym and terrace.",
    intro:
      "Dr. Irfan Khan Residence is a private family home in Lucknow, Uttar Pradesh, planned across three levels around a formal neoclassical elevation. Altamash led the architectural design and space planning, developing the facade language, floor plans and room layouts from early concept through design development and into construction.",
    cover: img(
      "irfan-khan-residence",
      "cover.jpg",
      1536,
      1024,
      "Three-quarter exterior view of the Dr. Irfan Khan Residence in Lucknow, showing the arched entrance bay, columned balcony and wrought-iron gate",
    ),
    gallery: [],
    story: [
      {
        heading: "Overview",
        body: "Dr. Irfan Khan Residence is a private family home in Lucknow, planned across a ground floor and two upper levels around a single, formally composed neoclassical elevation. Below is an overview of the house's exterior treatment and its three floors, arranged from the shared and formal rooms at ground level up to a private wellness floor and terrace at the top.",
      },
      {
        heading: "01 — Exterior & Facade",
        body: "The elevation is treated in a restrained neoclassical language: rendered stucco walls, a projecting arched bay at the entrance flanked by paired columns, and deep cornice mouldings that wrap the building beneath a dark tiled hip roof. Wrought-iron gates and balustrades, planted balconies at every level, and a landscaped forecourt soften the formality of the facade and announce the house from the street.",
        images: [
          img("irfan-khan-residence", "01.jpg", 1555, 1012, "Frontal elevation of the Dr. Irfan Khan Residence with a central arched window, classical cornice detailing and a landscaped forecourt", "Front elevation"),
          img("irfan-khan-residence", "02.jpg", 1537, 1023, "Angled exterior view of the Dr. Irfan Khan Residence showing the layered hip roofs and balconies across three levels", "Angled exterior view"),
          img("irfan-khan-residence", "03.jpg", 1578, 997, "Daytime exterior view of the Dr. Irfan Khan Residence with the driveway, entrance gate and perimeter planting", "Driveway & entrance gate"),
          img("irfan-khan-residence", "04.jpg", 1254, 1254, "Close-up of the arched central bay at the Dr. Irfan Khan Residence, with carved stucco reliefs, paired columns and a planted balcony", "Entrance bay detail"),
        ],
      },
      {
        heading: "02 — Ground Floor: Living & Reception",
        body: "The ground floor holds the house's shared and formal spaces: a drawing room and dining area open toward a rear lawn and deck, with the kitchen, utility and store rooms arranged along the service side. A staff quarter with its own toilet sits off the entrance lobby, keeping day-to-day support separate from family life, alongside a private bedroom suite with its own dressing area and bathroom.",
        images: [
          img("irfan-khan-residence", "05.jpg", 1517, 1037, "Furnished ground floor plan of the Dr. Irfan Khan Residence, showing the drawing room, dining area, kitchen, staff quarter and rear lawn", "Ground floor plan"),
        ],
      },
      {
        heading: "03 — First Floor: Private Wing",
        body: "Three family bedrooms, each with its own dressing area and ensuite bathroom, are arranged around a shared family lounge and a stair core open to the sky above. Balconies of varying widths extend each room outward, and a pantry counter keeps the lounge self-sufficient for everyday family time away from the formal rooms below.",
        images: [
          img("irfan-khan-residence", "06.jpg", 1516, 1038, "Furnished first floor plan of the Dr. Irfan Khan Residence, showing three ensuite bedrooms arranged around a shared family lounge", "First floor plan"),
        ],
      },
      {
        heading: "04 — Second Floor: Wellness & Terrace",
        body: "The top floor steps back from the family wing into a private bedroom suite and a full multipurpose hall fitted out as a home gym, opening onto a sixty-foot terrace that runs the width of the house. It is the most private level of the home, planned for exercise, quiet mornings and open-air evenings above the rest of the house.",
        images: [
          img("irfan-khan-residence", "07.jpg", 1515, 1038, "Furnished second floor plan of the Dr. Irfan Khan Residence, showing a private bedroom suite, multipurpose gym hall and terrace", "Second floor & terrace plan"),
        ],
      },
      {
        heading: "My Contribution",
        body: "Altamash led the architectural design and space planning for Dr. Irfan Khan Residence, developing the facade elevation, floor plans and room layouts from early concept through design development and into construction, for a private family client in Lucknow.",
      },
      {
        heading: "Sources & Credits",
        body: "Dr. Irfan Khan Residence, Lucknow, Uttar Pradesh, for a private family client. The elevation renders and furnished floor plans shown are original visualisation and planning work produced for the project.",
      },
    ],
    specs: [
      { label: "Type", value: "Residential Villa" },
      { label: "Location", value: "Lucknow, U.P." },
      { label: "Client", value: "Dr. Irfan Khan" },
      { label: "Status", value: "Design Development & Construction" },
      { label: "Levels", value: "Ground + 2 upper floors" },
    ],
  },
  {
    slug: "inter-state-bus-terminal",
    title: "Inter State Bus Terminal",
    category: "Transit",
    location: "Lucknow, U.P.",
    year: "2022",
    status: "Concept",
    workType: "Competition",
    featured: true,
    summary: "A calm, legible gateway for the Purvanchal expressway.",
    intro:
      "An inter-state bus terminal for Lucknow, sited to catch the new Purvanchal expressway that links the capital region to Faizabad, Ghazipur, Azamgarh, Gorakhpur, Varanasi and beyond. A clear, generous gateway for tens of thousands of daily journeys.",
    cover: img(
      "bus-terminal",
      "cover.jpg",
      1600,
      1703,
      "Render of the inter state bus terminal, a glazed volume rising above a brick-lined approach",
    ),
    gallery: [
      img("bus-terminal", "01.jpg", 1900, 1344, "Stilt, first and second floor plans of the bus terminal", "Architectural floor plans"),
      img("bus-terminal", "02.jpg", 1900, 1344, "Exploded diagram and interior renders of the bus terminal concourse", "Structure & concourse"),
    ],
    story: [
      {
        heading: "A regional junction",
        body: "The Purvanchal expressway was already reshaping how eastern Uttar Pradesh moves. The terminal answers it with a clear, generous concourse that can absorb surges of travellers without losing its calm.",
      },
      {
        heading: "Read at a glance",
        body: "A single glazed volume announces the entrance and floods the concourse with daylight, so a first-time traveller can read the whole building in one look.",
      },
      {
        heading: "Ground that works",
        body: "Bus movement, drop-off, and pedestrian flow are separated cleanly at grade, keeping the forecourt safe, unhurried, and easy to navigate on foot.",
      },
    ],
    specs: [
      { label: "Type", value: "Transit, Public" },
      { label: "Location", value: "Lucknow, U.P." },
      { label: "Context", value: "Purvanchal Expressway" },
      { label: "Year", value: "2022" },
    ],
  },
  {
    slug: "iconic-indian-pavilion",
    title: "The Iconic Indian Pavilion",
    category: "Cultural",
    location: "Mumbai",
    year: "2021",
    status: "Concept",
    workType: "Competition",
    featured: true,
    summary: "A cluster of gridshell domes around a sculptural canopy.",
    intro:
      "The Iconic Indian Pavilion is an expo project on a 7,000 sqm plot, conceived as a cluster of gridshell domes gathered around a sculptural central canopy. G+3 with a single basement, it is built to draw a crowd and hold its attention.",
    cover: img(
      "pavilion",
      "cover.jpg",
      1600,
      1703,
      "Render of the Iconic Indian Pavilion, gridshell domes and a branching central canopy among palms",
    ),
    gallery: [
      img("pavilion", "01.jpg", 1900, 1344, "Sections and site plan of the pavilion domes", "Sections & site plan"),
      img("pavilion", "02.jpg", 1900, 1344, "Plans and renders of the pavilion dome cluster", "Plans & dome cluster"),
    ],
    story: [
      {
        heading: "A gathering of domes",
        body: "Rather than one hall, the pavilion breaks into a family of triangulated gridshell domes, each a room of its own, linked by a shaded public plaza planted with palms.",
      },
      {
        heading: "A canopy at the centre",
        body: "A branching central column opens into a wide canopy, giving the pavilion a single unforgettable image and a cool, shaded heart for events and gatherings.",
      },
      {
        heading: "An open ground",
        body: "With no restriction on built-up area, the design spends its freedom on generous, walkable public space rather than bulk, keeping the ground open and inviting.",
      },
    ],
    specs: [
      { label: "Type", value: "Commercial, Expo" },
      { label: "Location", value: "Mumbai" },
      { label: "Plot", value: "7,000 sqm, G+3" },
      { label: "Year", value: "2021" },
    ],
  },
  {
    slug: "mixed-use-high-rise",
    title: "Mixed-Use High-Rise",
    category: "Commercial",
    location: "Lucknow",
    year: "2021",
    status: "Concept",
    workType: "Competition",
    featured: true,
    summary: "A symbolic mixed-use tower for a new city skyline.",
    intro:
      "A mixed-use high-rise that turns a commercial plot in Lucknow into a landmark, blending commercial, office, residential, and recreational uses into one vertical neighbourhood meant to set the tone for the buildings that follow.",
    cover: img(
      "mixed-use",
      "cover.jpg",
      1600,
      1703,
      "Aerial render of the mixed-use high-rise with a glazed atrium base and landscaped grounds",
    ),
    gallery: [
      img("mixed-use", "01.jpg", 1900, 1344, "Exploded diagram, site plan and section of the mixed-use building", "Exploded program & section"),
      img("mixed-use", "02.jpg", 1900, 1344, "Exterior render and office/residential floor plans of the mixed-use high-rise", "Renders & floor plans"),
      img("mixed-use", "03.jpg", 1900, 1344, "Front and back elevations with render and floor plans of the mixed-use high-rise", "Elevations, render & floor plans"),
    ],
    story: [
      {
        heading: "One building, four lives",
        body: "The program is split roughly 40% commercial, 30% office, 25% residential, and 5% recreational, stacked so each use gets the light and access it needs while sharing a single address.",
      },
      {
        heading: "A skyline to aspire to",
        body: "The massing is composed as a symbol, a high-rise meant to shape the future skyline of the city and set a benchmark for the buildings that come after it.",
      },
      {
        heading: "Life at the base",
        body: "A glazed, publicly generous base ties the tower back to the street, so the ground stays active and social well beyond office hours.",
      },
    ],
    specs: [
      { label: "Type", value: "Commercial, Mixed-Use" },
      { label: "Location", value: "Lucknow" },
      { label: "Mix", value: "Retail, Office, Homes, Leisure" },
      { label: "Year", value: "2021" },
    ],
  },
];

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByWorkType(workType: Project["workType"]): Project[] {
  return projects.filter((p) => p.workType === workType);
}

/** Previous / next project for case-study navigation (wraps around). */
export function getAdjacentProjects(slug: string): { prev: Project; next: Project } | null {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
