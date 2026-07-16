import type { Faq, Project } from "./types";
import { profile } from "./content";

/**
 * Public site URL. Override with NEXT_PUBLIC_SITE_URL for previews / production.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://altamashbari.com";

export function absoluteUrl(path = ""): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Rich Person entity for the architect. Feeds Google's knowledge graph and
 * answer/AI engines (AEO/AIEO) with who Altamash is, what he does, and where.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Architect",
    description: profile.positioning,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    image: absoluteUrl("/portfolio/altamash.jpg"),
    telephone: profile.phoneUAE,
    sameAs: [profile.linkedin, profile.issuu],
    knowsAbout: [
      "Architecture",
      "Healthcare architecture",
      "Transit and urban design",
      "High-rise and mixed-use design",
      "Interior design",
      "BIM and 3D visualisation",
    ],
    knowsLanguage: ["English", "Hindi", "Urdu"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Integral University, Lucknow",
    },
    worksFor: {
      "@type": "Organization",
      name: "Architect Hafeez Contractor",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    workLocation: [
      { "@type": "Place", name: "India" },
      { "@type": "Place", name: "United Arab Emirates" },
    ],
  };
}

/** CreativeWork structured data for a single project case study. */
export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.cover.src),
    dateCreated: project.year,
    locationCreated: { "@type": "Place", name: project.location },
    creator: { "@type": "Person", name: profile.name, url: SITE_URL },
    genre: project.category,
  };
}

/** FAQPage structured data (answer-engine optimisation). */
export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** BreadcrumbList for a project case study. */
export function breadcrumbJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: absoluteUrl("/projects") },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: absoluteUrl(`/projects/${project.slug}`),
      },
    ],
  };
}
