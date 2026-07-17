/**
 * Shared content types for the Altamash Bari architecture portfolio.
 * Display content is authored in lib/projects.ts and lib/content.ts.
 */

export type ProjectStatus = "Completed" | "In Progress" | "Concept" | "Design Development";

export type ProjectCategory =
  | "Institutional"
  | "Transit"
  | "Commercial"
  | "Residential"
  | "Hospitality"
  | "Interior"
  | "Cultural";

/**
 * Editorial grouping used on the Selected Works page and homepage teaser.
 * Set once per project; independent of `status` so a later stage change
 * never silently moves a project into a different row.
 */
export type ProjectWorkType = "Architectural" | "Interior" | "Competition";

export interface ProjectImage {
  /** Local path like /portfolio/{slug}/cover.jpg */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional short caption shown beneath drawing/render sheets. */
  caption?: string;
}

/** A single editorial narrative block on the case-study page. */
export interface StoryBlock {
  heading?: string;
  body: string;
  /**
   * Optional set of images for this block. When present, the block renders
   * as a multi-image "chapter" (area grid) instead of pairing 1:1 with a
   * single gallery image by position.
   */
  images?: ProjectImage[];
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  status: ProjectStatus;
  /** Selected Works row: Architectural Projects / Interior Design / Design Competition Entries. */
  workType: ProjectWorkType;
  featured: boolean;
  /** One line used on cards and listings. */
  summary: string;
  /** Opening paragraph on the case-study page. */
  intro: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  story: StoryBlock[];
  specs: ProjectSpec[];
}

export interface Capability {
  title: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  organisation: string;
  location: string;
  period: string;
  detail: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  /** Short bold caps micro-label, e.g. "PROJECTS LED". */
  tag?: string;
  /** Separate descriptive sentence shown beneath the tag. */
  description?: string;
}

export interface Certification {
  title: string;
  organisation: string;
  year: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
