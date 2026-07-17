import type {
  Capability,
  Certification,
  ExperienceItem,
  Faq,
  NavItem,
  SocialLink,
  Stat,
} from "./types";

/*
  ALTAMASH BARI — architect portfolio content.
  ----------------------------------------------------------------------------
  All real, from the source portfolio. Edit `profile`, the arrays below, and the
  images in /public/portfolio to keep the site current.
*/

export const profile = {
  name: "Altamash Bari",
  firstName: "Altamash",
  role: "Architect",
  motto: "The simple, the better.",
  // One-line positioning used across metadata and the footer.
  positioning:
    "Architect designing healthcare, transit, and skylines where clarity, climate, and human experience meet.",
  // Longer intro used in the About section.
  intro:
    "Altamash Bari is a BIM Architect and Architectural Designer with 4+ years across high-rise residential and commercial work in India and the UAE. Based in Dubai, he currently leads architectural and fa\u00e7ade BIM delivery on landmark projects, including the Sheikh Zayed Museum, Expo City's Sky and Mangrove Residences, and Bristol Towers.",
  email: "Barialt0786@gmail.com",
  phoneUAE: "+971 56 830 4363",
  linkedin: "https://www.linkedin.com/in/altamash-bari-2b7733201",
  issuu: "https://issuu.com/altamashbari/docs/altamash_bari_portfolio_",
  location: "Dubai, UAE",
  availability: "Open to work across India and the UAE",
  degree: "Bachelor of Architecture, Integral University, Lucknow",
};

export const navItems: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Issuu", href: profile.issuu },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const capabilities: Capability[] = [
  {
    title: "Architectural Design",
    description:
      "Concept to construction detail, developed from site, structure, and program into a single clear idea.",
  },
  {
    title: "Institutional & Healthcare",
    description:
      "Complex, climate-responsive buildings, from a 300-bed multi-speciality hospital to civic infrastructure.",
  },
  {
    title: "Transit & Urban Design",
    description:
      "Terminals and public realm that move people well, informed by IUDI urban design training.",
  },
  {
    title: "High-Rise & Mixed-Use",
    description:
      "Towers and mixed-use developments that shape a skyline while working hard at the ground.",
  },
  {
    title: "Interior Design",
    description:
      "Interiors resolved as one piece with the architecture, from planning and light to fixed joinery.",
  },
  {
    title: "BIM & 3D Visualisation",
    description:
      "Revit and BIM 360 coordination with Lumion renders that let clients read a space before it is built.",
  },
  {
    title: "Dynamo & Scripting",
    description:
      "Custom Revit add-ins and Dynamo graphs that automate repetitive modelling and turn manual routines into smart, repeatable workflows.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "BIM Specialist | Architecture & Fa\u00e7ade Lead",
    organisation: "iRivet Software House",
    location: "Dubai, UAE",
    period: "2025 \u2014 Present",
    detail:
      "Leading architectural and fa\u00e7ade BIM delivery to LOD400 across landmark developments including the Sheikh Zayed Museum, Expo City's Sky and Mangrove Residences, and Bristol Towers, running clash detection, IFC coordination and RFI resolution across teams of 10 to 14 while mentoring junior modellers.",
  },
  {
    role: "Architectural Designer | Project Coordinator",
    organisation: "Emissive Interiors & Fit-Out",
    location: "Dubai, UAE",
    period: "2024 \u2014 2025",
    detail:
      "Delivered interior and fit-out packages from concept through to shop drawings, coordinating MEP, running site inspections and snag lists, and preparing material boards and authority submissions across Dubai Municipality, Trakhees, DDA and Civil Defence, alongside client-facing presentations.",
  },
  {
    role: "Architectural Assistant",
    organisation: "Architect Hafeez Contractor",
    location: "Mumbai, India",
    period: "2023 \u2014 2024",
    detail:
      "Produced working drawings, joinery details, GFC sets and 3D visuals inside one of India's most prolific practices, coordinating structural and MEP inputs, area and cost estimates, and authority submission drawings on major residential developments.",
  },
  {
    role: "Freelance & Remote Architectural Designer",
    organisation: "Independent Practice",
    location: "India",
    period: "2020 \u2014 2023",
    detail:
      "Delivered four independent commissions end to end ahead of formal practice: a full residential interior in Gomtinagar, a street-facing fa\u00e7ade redesign in Jankipuram, a residential interior in Abubakar Nagar, Deoria, and row-housing and plotting layouts in partnership with Narayan Group \u2014 building a practical, client-facing design foundation from the ground up.",
  },
];

export const stats: Stat[] = [
  {
    value: "20",
    suffix: "+",
    tag: "PROJECTS LED & DELIVERED",
    description: "Architectural, interior and BIM projects taken from concept through to delivery.",
    label: "Architectural, interior and BIM projects taken from concept through to delivery.",
  },
  {
    value: "4",
    suffix: "+",
    tag: "YEARS OF EXPERIENCE",
    description: "Across architecture, interior design and BIM delivery in India and the UAE.",
    label: "Across architecture, interior design and BIM delivery in India and the UAE.",
  },
  {
    value: "5",
    tag: "COUNTRIES",
    description: "Design and delivery contexts worked across, from India to the wider Gulf region.",
    label: "Design and delivery contexts worked across, from India to the wider Gulf region.",
  },
  {
    value: "9",
    tag: "DESIGN & BIM TOOLS",
    description: "In daily use, from AutoCAD and Revit to Navisworks, Dynamo and Lumion.",
    label: "In daily use, from AutoCAD and Revit to Navisworks, Dynamo and Lumion.",
  },
];

export const certifications: Certification[] = [
  {
    title: "BIM Architecture Professional Course",
    organisation: "Remote",
    year: "2024",
  },
  {
    title: "IUDI Workshop, Urban Design",
    organisation: "Lucknow",
    year: "2023",
  },
  {
    title: "IIID Workshop",
    organisation: "Lucknow",
    year: "2021",
  },
  {
    title: "UGreen Spaces Workshop, with Filipe Boni",
    organisation: "Lucknow",
    year: "2021",
  },
  {
    title: "ZONASA 2019, Z412",
    organisation: "Kolkata",
    year: "2019",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Design & Drafting",
    items: ["AutoCAD", "Revit", "Navisworks", "SketchUp", "Dynamo", "Lumion"],
  },
  {
    label: "Project Coordination",
    items: [
      "BIM Modeling & Clash Detection",
      "As-Built Documentation (LOD400)",
      "Authority Submissions",
      "BIM 360 & ACC",
      "Aconex",
      "RFI & Site Support",
    ],
  },
  {
    label: "Languages",
    items: ["English", "Urdu", "Hindi"],
  },
];

// Answer-engine (AEO/AIEO) friendly Q&A, also rendered as an FAQPage schema.
export const faqs: Faq[] = [
  {
    question: "Who is Altamash Bari?",
    answer:
      "Altamash Bari is an architect based in Dubai, UAE, and available for work across India and the UAE. A Bachelor of Architecture from Integral University, Lucknow, he trained at Architect Hafeez Contractor in Mumbai and designs across healthcare, transit, residential, and commercial architecture.",
  },
  {
    question: "What kind of projects does Altamash Bari design?",
    answer:
      "His portfolio spans a 300-bed multi-speciality hospital, an inter-state bus terminal, an iconic expo pavilion, a mixed-use high-rise, an award-winning residential tower, and riverfront commercial towers, covering the institutional, transit, hospitality, residential, and commercial sectors.",
  },
  {
    question: "Where is Altamash Bari based and is he available for work?",
    answer:
      "He is based in Dubai, UAE, and is open to architecture opportunities across India and the UAE. He can be reached at Barialt0786@gmail.com or on LinkedIn.",
  },
  {
    question: "What software and tools does Altamash Bari use?",
    answer:
      "Altamash works in AutoCAD, SketchUp, Revit, BIM 360, and Lumion, with fabrication skills in CNC, laser cutting, 3D printing, and physical model making.",
  },
];
