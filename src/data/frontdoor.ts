/* -------------------------------------------------------------------
   frontdoor.ts — content for the homepage.

   Structure follows the Martin Jordan model:
     hero (big statement + about role lines + contact)
     → Current Work (image-forward: image + title + role + collaborators
       + short description)
     → Speaking (recent talks, 2026 emphasized) → see all.

   Photos and final copy don't exist yet. Image slots left empty render as
   intentional placeholders, so the layout reads before real photos arrive.
   Items below are the ones Ron named to surface — refine the words, add
   images to /public/img and reference them in `images`.
   ------------------------------------------------------------------- */

export interface Cta { label: string; href: string; external?: boolean; note?: string; }
export interface Link { label: string; href: string; external?: boolean; }

export interface Hero {
  headline: string;                          // the big statement
  about: { text: string; href?: string; external?: boolean }[]; // role lines
  contact: Cta[];
  links: Link[];
}

export interface WorkImage { src: string; alt: string; }

export interface CurrentWork {
  title: string;
  images: WorkImage[];        // empty = placeholder slot(s)
  role?: string;
  collaborators?: string[];
  description: string;
  href?: string;
  external?: boolean;
}

export interface TalkItem {
  title: string;
  venue?: string;
  year?: string;
  href?: string;
  video?: boolean;
}

/* =================================================================== */

export const HERO: Hero = {
  headline: 'I help institutions deploy public technology that actually reaches people.',
  about: [
    { text: 'Assistant Professor of Practice, University of Michigan Urban Technology', href: 'https://taubmancollege.umich.edu/faculty/directory/ron-bronson/', external: true },
    { text: 'Former Head of Design, 18F · U.S. General Services Administration' },
  ],
  contact: [
    { label: 'Write a message', href: 'mailto:ron@ronbronson.com', note: 'via email' },
    { label: 'Book a session', href: '#', note: 'via Calendly' },
  ],
  links: [
    { label: 'Bluesky', href: 'https://bsky.app/profile/ronbronson.com', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ronbronson/', external: true },
    { label: 'GitHub', href: 'https://github.com/quarterback', external: true },
  ],
};

export const CURRENT_WORK: CurrentWork[] = [
  {
    title: 'Years Ahead',
    images: [],
    role: 'Founder & lead',
    description: 'Running yearsahead.io at the University of Michigan. [One or two sentences on what it is and who it serves.]',
    href: 'https://yearsahead.io',
    external: true,
  },
  {
    title: 'Teaching Urban Technology',
    images: [{ src: '/img/michigan-teaching.svg', alt: 'University of Michigan' }],
    role: 'Assistant Professor of Practice',
    description: 'Teaching Public Mechanics, Interaction Design, and Service Design in U-Michigan’s Urban Technology program. [Add a line on the angle.]',
    href: 'https://taubmancollege.umich.edu/faculty/directory/ron-bronson/',
    external: true,
  },
  {
    title: 'Portland Digital Corps',
    images: [{ src: '/img/digitalcorpspdx.org.png', alt: 'Portland Digital Corps' }],
    role: 'Founder',
    description: 'An all-volunteer cohort delivering digital services for local public institutions. [Add scope / impact.]',
    href: 'https://digitalcorpspdx.org',
    external: true,
  },
];

/* Recent speaking — emphasize 2026, then notable 2025 keynotes. */
export const SPEAKING: TalkItem[] = [
  { title: '[2026 talk — add as they happen]', year: '2026' },
  { title: 'Design as Repair — keynote', venue: 'IxDA Oslo', year: '2025', href: 'https://www.ixda.no/talks/design-as-repair', video: true },
  { title: 'Beyond Civic Tech: Public Mechanics — keynote', venue: 'CUGOS / Cascadia GIS', year: '2025', href: 'https://youtube.com/watch?v=hnAScuK-oMo', video: true },
  { title: 'Repairing Service Design in the Age of AI', venue: 'The Service Design Show', year: '2025', href: 'https://www.youtube.com/watch?v=4HKTGod1Xyo' },
];
