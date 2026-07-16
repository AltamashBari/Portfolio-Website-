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
    "Altamash Bari is a BIM Architect and Architectural Designer with 4+ years across high-rise residential and commercial work in India and the UAE. Based in Dubai, he currently leads architectural and façade BIM delivery on landmark projects, including the Sheikh Zayed Museum, Expo City's Sky and Mangrove Residences, and Bristol Towers.",
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
];

export const experience: ExperienceItem[] = [
  {
    role: "Architectural Intern",
    organisation: "Architect Hafeez Contractor",
    location: "Mumbai",
    period: "2023",
    detail:
      "Worked inside one of India's most prolific practices on Shalimar One World, Marbella Towers, and Monte South, the award-winning South Mumbai residential landmark.",
  },
  {
    role: "Row Housing & Plotting",
    organisation: "Narayan Group",
    location: "Lucknow",
    period: "2023",
    detail:
      "Partnership work on residential row housing layout and plotting for a Lucknow development.",
  },
  {
    role: "Interior Design",
    organisation: "Partnership Project",
    location: "Gomtinagar, Lucknow",
    period: "2022",
    detail: "Full interior design for a private residence, from planning to material and joinery detail.",
  },
  {
    role: "Facade Redesign",
    organisation: "Freelance",
    location: "Jankipuram, Lucknow",
    period: "2021",
    detail: "Redesigned the street-facing facade of an existing building for a sharper, calmer identity.",
  },
  {
    role: "Interior Design",
    organisation: "Freelance",
    location: "Abubakar Nagar, Deoria",
    period: "2020",
    detail: "First independent commission, a residential interior delivered end to end.",
  },
];

export const stats: Stat[] = [
  { value: "6", label: "Selected works across five sectors" },
  { value: "300", label: "Bed hospital, designed in full" },
  { value: "60", suffix: "+", label: "Storey towers worked on" },
  { value: "9", label: "Design and BIM tools in daily use" },
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
