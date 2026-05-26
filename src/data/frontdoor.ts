/* -------------------------------------------------------------------
   frontdoor.ts — hand-curated content for the homepage (the front door).
   This is NOT the case-study archive (src/content/work) — that stays for
   job applications. Everything here is what a STRANGER sees first.

   Edit this file to update the front door. Keep it:
     - legible to people who don't know Ron or his work
     - present-tense and show-not-tell
     - focused on repeatable, ongoing practice (so it reads "he does this
       all the time", Martin-Jordan-style) framed with authority (Logan).

   Placeholder copy below is structural scaffolding — replace the words,
   keep the shape.
   ------------------------------------------------------------------- */

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

/* The masthead: who he is + what he does for you, in plain language. */
export interface Positioning {
  name: string;
  /* One sharp line a stranger reads first. */
  role: string;
  /* 1–2 sentences: what he does and who it's for. Authority, not hedging. */
  statement: string;
  portrait: string;
}

/* Ongoing work — the anchor. Status verbs signal repeatable practice. */
export interface CurrentWork {
  title: string;
  status: 'building' | 'shipping' | 'running' | 'teaching' | 'advising' | 'researching';
  blurb: string;            // 1–2 sentences, present tense
  metric?: string;          // "deployed in 12 counties", "4th cohort"
  collaborators?: string[]; // named — Jordan-style credibility
  links?: Link[];           // further reading / proof
  since?: string;           // "2024–present"
}

/* Dated, future-facing items. Sorted + future-filtered in the page. */
export interface UpcomingEvent {
  title: string;
  venue: string;
  date: string;             // ISO "2026-09-14"
  href?: string;
  location?: string;        // "Oslo" / "remote"
}

/* Plain link items (writing, talks, interviews, teaching, host). */
export interface RefItem {
  title: string;
  where?: string;
  href?: string;
}

/* =================================================================== */

export const POSITIONING: Positioning = {
  name: 'Ron Bronson',
  role: 'Critical urbanist & design executive',
  statement:
    'I help institutions close the gap between written policy and what actually reaches people — designing, building, and advising on how consequential public technology gets deployed in everyday life.',
  portrait: '/hero.jpg',
};

export const CURRENT_WORK: CurrentWork[] = [
  {
    title: 'Public Mechanics',
    status: 'building',
    blurb:
      'Primitives and strategy for formalizing agentic decision rights — so the judgment inside public delivery is codified and actually enforced as AI proliferates.',
    since: '2025–present',
    links: [{ label: 'Read the thesis', href: 'https://makingpublicwork.com', external: true }],
  },
  {
    title: 'Urban Technology at U-Michigan',
    status: 'teaching',
    blurb:
      'Teaching Public Mechanics, Interaction Design, and Service Design as an Assistant Professor of Practice — training the next cohort to deploy systems people can actually use.',
    metric: 'Taubman College',
    since: '2024–present',
    links: [
      {
        label: 'Faculty profile',
        href: 'https://taubmancollege.umich.edu/faculty/directory/ron-bronson/',
        external: true,
      },
    ],
  },
  {
    title: 'Portland Digital Corps',
    status: 'running',
    blurb:
      'Founded and run an all-volunteer cohort delivering digital services for local public institutions — repeatable civic delivery, not one-off pilots.',
    metric: 'All-volunteer cohort',
    since: '2023–present',
    links: [{ label: 'digitalcorpspdx.org', href: 'https://digitalcorpspdx.org', external: true }],
  },
];

export const UPCOMING: UpcomingEvent[] = [
  // { title: 'Design as Repair', venue: 'IxDA Oslo', date: '2026-09-14', location: 'Oslo', href: '#' },
];

export const WRITING: RefItem[] = [
  {
    title: 'Some advice on managing your design career upwards',
    where: 'Piccalil.li',
    href: 'https://piccalil.li/blog/some-advice-on-managing-your-design-career-upwards/',
  },
  { title: 'Design as Repair', href: 'https://blog.ronbronson.com/design-as-repair' },
  {
    title: 'The Bureaucratic Banality of Andor',
    href: 'https://blog.ronbronson.com/the-bureaucratic-banality-of-andor',
  },
  {
    title: 'What Forward Deployed Design Actually Looks Like',
    href: 'https://blog.ronbronson.com/what-forward-deployed-design-actually-looks-like?ref=rogerwong.me',
  },
];

export const TALKS: RefItem[] = [
  {
    title: 'Design as Repair',
    where: 'IxDA Oslo',
    href: 'https://www.ixda.no/talks/design-as-repair',
  },
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
  {
    title: 'Leading the Field',
    where: 'Code for America',
    href: 'https://codeforamerica.org/news/leading-the-field-ron-bronson/',
  },
  {
    title: 'Did I Do That Podcast',
    href: 'https://www.dididothat.design/episode/what-huh-me-huh-what-with-ron-bronson',
  },
  {
    title: 'Building Better User-Centered Products',
    where: 'Pixel Pioneers',
    href: 'https://pixelpioneers.co/blog/building-better-user-centered-products-an-interview-with-ron-bronson',
  },
];

export const TEACHING: RefItem[] = [
  { title: 'Public Mechanics (UT 402)', where: 'F26, W26' },
  { title: 'Interaction Design (UT 330)', where: 'F26' },
  { title: 'Service Design and Urban Needs (UT 360)', where: "W'26, W'24" },
];

export const HOST: RefItem[] = [
  { title: 'Future Perfect Book Club', href: 'https://futureperfectbook.club' },
  { title: 'The Sound Bulletin on KFFP-FM', href: 'https://www.mixcloud.com/908rb/' },
];

export const ELSEWHERE: Link[] = [
  { label: 'Side projects', href: 'https://ronbronson.dev' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/ronbronson.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ronbronson/' },
  { label: 'GitHub', href: 'https://github.com/quarterback' },
  { label: 'Email', href: 'mailto:ron@ronbronson.com' },
  { label: 'Letterboxd', href: 'https://letterboxd.com/ronbronson/' },
  { label: 'Mastodon', href: 'https://mastodon.social/@ronbronson' },
];
