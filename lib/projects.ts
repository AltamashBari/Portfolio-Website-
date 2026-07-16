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
    featured: false,
    summary:
      "A private residence in Alshamal, Qatar: separate men's and women's majlis wings, a family living wing and a wellness suite, held together by walnut, travertine and brass.",
    intro:
      "Corte Vetro Villa is a private residence in Alshamal, Qatar, designed for owner Salem Al-Ghanim, in association with Kayan and architect Bashar A. Al-Salem. Altamash led the interior architecture and design team on the project, covering 3D modelling and visualisation, mood boards, client meetings, and construction drawings across the villa's reception, family and wellness wings.",
    cover: img(
      "corte-vetro-villa",
      "cover.jpg",
      960,
      1600,
      "Grand entrance hall of Corte Vetro Villa, with book-matched travertine walls, brass sconces and a framed view to the garden",
    ),
    gallery: [
      img("corte-vetro-villa", "01.jpg", 1600, 900, "Men's majlis at Corte Vetro Villa, with a curved wood-panelled ceiling, backlit display wall and a suspended arc floor lamp", "Men's majlis"),
      img("corte-vetro-villa", "02.jpg", 1600, 1600, "Women's majlis at Corte Vetro Villa, a symmetrical seating hall in travertine and walnut with layered ambient lighting", "Women's majlis"),
      img("corte-vetro-villa", "03.jpg", 1410, 1600, "Master living area at Corte Vetro Villa with a curved ceiling, boucle daybed, suspended arc lamp and integrated fireplace", "Master suite — private living area"),
      img("corte-vetro-villa", "04.jpg", 1600, 900, "Master bedroom and dressing area at Corte Vetro Villa, with full-height glazing, sheer drapery and a built-in display wall", "Master bedroom & dressing"),
      img("corte-vetro-villa", "05.jpg", 1600, 1600, "Master bathroom at Corte Vetro Villa with a floating book-matched stone vanity and backlit mirror walls", "Master bathroom"),
      img("corte-vetro-villa", "06.jpg", 1600, 1600, "Kitchen and family lounge at Corte Vetro Villa, centred on a dramatic veined marble island and backlit fluted glass panel", "Kitchen & family lounge"),
      img("corte-vetro-villa", "07.jpg", 1600, 900, "Family lounge at Corte Vetro Villa opening onto an internal planted courtyard behind a woven brass screen", "Lounge & family living"),
      img("corte-vetro-villa", "08.jpg", 1600, 1600, "Home gym and spa at Corte Vetro Villa behind timber louvred blinds with natural stone accent walls", "Wellness: gym & spa"),
      img("corte-vetro-villa", "09.jpg", 1600, 1600, "Lift and staircase core at Corte Vetro Villa in book-matched stone and bronze-finished panelling", "Circulation: lift & staircase"),
      img("corte-vetro-villa", "10.jpg", 1481, 1600, "A children's bedroom at Corte Vetro Villa with a custom wall mural and bespoke joinery", "Family bedrooms"),
    ],
    story: [
      {
        heading: "Overview",
        body: "Corte Vetro Villa is a private residence in Alshamal, Qatar, built for owner Salem Al-Ghanim across two levels of formal reception, family living and wellness space. The brief called for a home able to host separate men's and women's majlis gatherings in the Gulf tradition alongside a calmer, warmer world for daily family life — two registers of hospitality under one roof.",
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
        heading: "The Private Wing: Master Suite",
        body: "The master bedroom is planned around a curved plaster ceiling detail and a suspended arc lamp, with a built-in fireplace and a rounded boucle daybed forming a private sitting area distinct from the sleeping zone. Sheer drapery and full-height glazing keep the room in daylight while framing views out to the garden.",
      },
      {
        heading: "Master Bathroom",
        body: "The master bathroom continues the material language of the bedroom: a floating book-matched stone vanity, backlit mirror walls and brass fittings replace applied ornament with the pattern of the stone itself, keeping the room spa-like and restrained.",
      },
      {
        heading: "Kitchen & Family Lounge",
        body: "A dramatic veined marble island anchors the kitchen and doubles as the everyday family table, set against a backlit fluted glass panel and walnut millwork with open display shelving. It is the most tactile material moment in the house, deliberately placed where the family gathers daily rather than in a formal room.",
      },
      {
        heading: "Lounge & Family Living",
        body: "A double-height family lounge opens onto an internal planted courtyard behind a woven brass screen, bringing daylight and greenery into the deepest part of the plan. Low, deep seating and a sculptural bronze wall piece keep the room informal against the more ceremonial majlis spaces elsewhere in the house.",
      },
      {
        heading: "Wellness: Gym & Spa",
        body: "The wellness suite pairs a full home gym with a spa, set behind timber louvred blinds that filter daylight across the space. Natural stone accent walls and warm timber ceiling panels carry the house's material language into a space built for daily use rather than display.",
      },
      {
        heading: "Circulation: Lift & Staircase",
        body: "The lift and stair core is treated as its own set piece, in book-matched stone and bronze-finished panelling with a floating timber-clad stair, so the vertical circulation between the villa's formal and private levels feels considered rather than incidental.",
      },
      {
        heading: "Family Bedrooms",
        body: "Each of the children's bedrooms was given its own identity within the shared material palette, from custom wall murals to bespoke joinery, so the family wing stays playful without breaking from the calm, tactile language established across the rest of the house.",
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
