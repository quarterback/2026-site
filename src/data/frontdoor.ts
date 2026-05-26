/* -------------------------------------------------------------------
   frontdoor.ts — hand-curated content for the homepage (the front door).
   Audience: people who DON'T know Ron. Lead with what he's been up to,
   not a long bio. Photo-forward where good photos exist.

   The HIGHLIGHTS array is the core: a low-effort, easy-to-update feed of
   things he's done (events run, things built, taught, spoken). Add an entry,
   optionally point it at a photo in /public/img, done.

   Placeholder copy below is structural scaffolding — replace the words and
   swap in real photos. Keep the shape.
   ------------------------------------------------------------------- */

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

/* Minimal masthead — name + one short line. No long bio. */
export interface Positioning {
  name: string;
  role: string;          // one sharp line a stranger reads first
  tagline: string;       // ONE short sentence, present tense
  portrait: string;
}

/* A highlight — one thing he's done. Photo optional. */
export interface Highlight {
  title: string;
  blurb?: string;        // 1 short sentence, optional
  tag?: 'Ran' | 'Built' | 'Founded' | 'Teaching' | 'Speaking' | 'Writing' | 'Coaching';
  image?: string;        // /img/… ; omit for a text-only card
  alt?: string;
  href?: string;
  external?: boolean;
  when?: string;         // "2024", "2024–present"
}

/* Dated, future-facing items. Sorted + future-filtered in the page. */
export interface UpcomingEvent {
  title: string;
  venue: string;
  date: string;          // ISO "2026-09-14"
  href?: string;
  location?: string;
}

/* Plain link items (writing, talks, interviews — used on /speaking). */
export interface RefItem {
  title: string;
  where?: string;
  href?: string;
}

/* =================================================================== */

export const POSITIONING: Positioning = {
  name: 'Ron Bronson',
  role: 'Critical urbanist & design executive',
  tagline:
    'I help institutions close the gap between policy and what actually reaches people.',
  portrait: '/hero.jpg',
};

export const HIGHLIGHTS: Highlight[] = [
  {
    title: 'Design for the Public',
    blurb: 'Convened practitioners working on public-interest technology and delivery.',
    tag: 'Ran',
    image: '/img/dfp24.jpg',
    alt: 'Ron Bronson speaking at Design for the Public',
    when: '2024',
  },
  {
    title: 'Portland Digital Corps',
    blurb: 'Founded an all-volunteer cohort delivering digital services for local public institutions.',
    tag: 'Founded',
    image: '/img/digitalcorpspdx.org.png',
    alt: 'Portland Digital Corps',
    href: 'https://digitalcorpspdx.org',
    external: true,
    when: '2023–present',
  },
  {
    title: 'Urban Technology at U-Michigan',
    blurb: 'Assistant Professor of Practice — teaching Public Mechanics, Interaction & Service Design.',
    tag: 'Teaching',
    image: '/img/michigan-teaching.svg',
    alt: 'University of Michigan',
    href: 'https://taubmancollege.umich.edu/faculty/directory/ron-bronson/',
    external: true,
    when: '2024–present',
  },
  {
    title: 'Public Mechanics',
    blurb: 'Primitives and strategy for formalizing agentic decision rights in public delivery.',
    tag: 'Writing',
    href: 'https://makingpublicwork.com',
    external: true,
    when: '2025–present',
  },
  {
    title: 'Design as Repair',
    blurb: 'Keynote on treating public-sector work as repair more than reinvention.',
    tag: 'Speaking',
    image: '/img/oaca2022.jpg',
    alt: 'Ron Bronson speaking',
    href: 'https://www.ixda.no/talks/design-as-repair',
    external: true,
    when: 'IxDA Oslo',
  },
  {
    title: 'State champions',
    blurb: 'Head Girls Varsity Tennis Coach at Catlin Gabel — a constraint-led, problem-solver approach.',
    tag: 'Coaching',
    image: '/img/2023_title.jpg',
    alt: 'State championship tennis team',
    href: '/coaching',
  },
];

export const UPCOMING: UpcomingEvent[] = [
  // { title: 'Talk title', venue: 'Conference', date: '2026-09-14', location: 'Oslo', href: '#' },
];

/* Used on the consolidated /speaking page (not the homepage). */
export const WRITING: RefItem[] = [
  {
    title: 'Some advice on managing your design career upwards',
    where: 'Piccalil.li',
    href: 'https://piccalil.li/blog/some-advice-on-managing-your-design-career-upwards/',
  },
  { title: 'Design as Repair', href: 'https://blog.ronbronson.com/design-as-repair' },
  {
    title: 'What Forward Deployed Design Actually Looks Like',
    href: 'https://blog.ronbronson.com/what-forward-deployed-design-actually-looks-like',
  },
];

export const TALKS: RefItem[] = [
  { title: 'Design as Repair', where: 'IxDA Oslo', href: 'https://www.ixda.no/talks/design-as-repair' },
  {
    title: 'Deceptive Design / Consequence Design',
    where: 'digital.gov',
    href: 'https://digital.gov/resources/deceptive-design-how-to-identify-and-combat-consequence-design',
  },
  {
    title: 'Design Consequences in Everyday Life',
    where: 'Rosenfeld Civic Design, 2022',
    href: 'https://rosenfeldmedia.com/civic-design-2022/design-consequences-everyday-life-ron-bronson-readings-and-other-resources/',
  },
];

export const INTERVIEWS: RefItem[] = [
  {
    title: 'Repairing Service Design for the Age of AI',
    where: 'Service Design Show',
    href: 'https://podcasts.apple.com/br/podcast/repairing-service-design-for-the-age-of-ai-ron-bronson-ep-236/id1104665758?i=1000726081505',
  },
  { title: 'Leading the Field', where: 'Code for America', href: 'https://codeforamerica.org/news/leading-the-field-ron-bronson/' },
  { title: 'Did I Do That Podcast', href: 'https://www.dididothat.design/episode/what-huh-me-huh-what-with-ron-bronson' },
];
