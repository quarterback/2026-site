/* -------------------------------------------------------------------
   frontdoor.ts — homepage content, ported from the 2026 Site v2 design.
   Structure: hero → Current work (case studies) → Speaking → Highlights
   (with 2025 toggle) → Recent past work → Writing/Podcasts → Hosting →
   footer. Image slots are placeholders until real photos exist.
   Edit freely; "[…]" marks slots to fill.
   ------------------------------------------------------------------- */

export interface RImage { placeholder: string; src?: string; alt?: string; }
export interface RLink { label: string; href: string; }
export interface Course { code: string; title: string; terms: string; }

export interface CaseStudy {
  id: string;
  title: string;
  href?: string;
  span?: string;
  body?: string;
  images?: RImage[];
  reading?: RLink[];
  courses?: Course[];
}

export interface SpeakItem { date: string; title: string; where: string; href?: string; }
export interface Highlight { month: string; title: string; body: string; placeholder: string; image?: string; href?: string; }
export interface Piece { title: string; where: string; href?: string; }
export interface ElseLink { label: string; href: string; }

export const ME = {
  name: 'Ron Bronson',
  role: 'Critical urbanist and design executive. I work on public mechanics — closing the latency between written policy and on-the-ground deployment, and naming where consequential decisions live inside delivery.',
  email: 'ron@ronbronson.com',
};

export const CURRENT_WORK: CaseStudy[] = [
  {
    id: 'pdx',
    title: 'Volunteer digital service delivery at Portland Digital Corps',
    href: 'https://digitalcorpspdx.org',
    body: 'An all-volunteer practice I founded in 2025 — fifty-plus practitioners delivering nonprofit websites in eight-week engagements, no procurement. The model has since spread to other cities.',
    // Drop /img/pdx-finale.jpg into /public/img and uncomment the src line:
    images: [
      { /* src: '/img/pdx-finale.jpg', */ alt: 'PDX Digital Corps Finale Show & Tell', placeholder: 'PDX Digital Corps Finale Show & Tell' },
      { placeholder: 'Shipped nonprofit site' },
    ],
  },
  {
    id: 'umich',
    title: 'Teaching design and delivery in Urban Technology at the University of Michigan',
    href: 'https://taubmancollege.umich.edu/faculty/directory/ron-bronson/',
    images: [
      { src: '/img/umich-lets-grow.jpg', alt: 'Urban Technology students presenting Let’s Grow Michigan work', placeholder: '' },
      { src: '/img/umich-mittencorps.jpg', alt: 'MittenCorps student presentation', placeholder: '' },
    ],
    reading: [{ label: 'yearsahead.io', href: 'https://yearsahead.io' }],
    courses: [
      { code: 'UT 402', title: 'Public Mechanics', terms: 'F26 · W26' },
      { code: 'UT 330', title: 'Interaction Design', terms: 'F26' },
      { code: 'UT 360', title: 'Service Design & Urban Needs', terms: 'W26 · W24' },
    ],
  },
];

export const PAST_WORK: CaseStudy[] = [
  {
    id: '18f',
    title: 'Design and delivery across federal agencies at 18F (GSA)',
    span: '2021 – 2025',
    body: "Led the design practice at the federal government's internal digital consultancy, shipping platforms and services used by millions. Code owner of the 18F UX Guide, 18F Methods, and the 18F blog. 18F was eliminated in March 2025.",
    // Drop these two files into /public/img and uncomment the src lines:
    images: [
      { /* src: '/img/18f-launch.jpg', */ alt: '18F website launch — ribbon-cutting on the GSA stage', placeholder: '18F website launch — GSA stage ribbon-cutting' },
      { /* src: '/img/18f-team.jpg', */ alt: '18F design team', placeholder: '18F design team' },
    ],
    reading: [
      { label: 'What happened to 18F (NYT)', href: 'https://www.nytimes.com/2025/03/03/us/politics/18f-technology-specialists-fired.html' },
    ],
  },
];

export const SPEAKING_2026: SpeakItem[] = [
  { date: 'TBD 2026', title: '[Add event title]', where: '[Conference / venue]', href: '#' },
  { date: 'TBD 2026', title: '[Add event title]', where: '[Conference / venue]', href: '#' },
];

export const SPEAKING_PAST: SpeakItem[] = [
  { date: 'Oct 2025', title: 'Design as Repair', where: 'IxDA Oslo · Keynote', href: 'https://www.ixda.no/talks/design-as-repair' },
  { date: 'Sep 2025', title: '[CUGOS GIS keynote title]', where: 'CUGOS · Keynote', href: '#' },
  { date: '2024', title: 'Deceptive Design / Consequence Design', where: 'digital.gov', href: 'https://digital.gov/resources/deceptive-design-how-to-identify-and-combat-consequence-design' },
  { date: '2022', title: 'Design Consequences in Everyday Life', where: 'Rosenfeld Civic Design', href: 'https://rosenfeldmedia.com/civic-design-2022/design-consequences-everyday-life-ron-bronson-readings-and-other-resources/' },
];

export const HIGHLIGHTS_2026: Highlight[] = [
  {
    month: 'Apr 2026',
    title: 'Led civic-tech panels at U-M Service Design Weekend',
    body: 'Hosted panels connecting students and practitioners on civic technology and service design at Michigan.',
    placeholder: 'Service Design Weekend photo',
    image: '/img/ssw-civic-tech-2026.jpg',
    href: 'https://taubmancollege.umich.edu/news/2026/04/15/bronson-leads-civic-tech-panels-at-u-m-service-design-weekend/',
  },
];

export const HIGHLIGHTS_2025: Highlight[] = [
  { month: 'Oct 2025', title: 'Design as Repair · IxDA Oslo keynote', body: 'Keynote on repair as a design discipline — what changes when the failure modes that matter are dead ends rather than rough happy paths.', placeholder: 'IxDA Oslo stage photo', href: 'https://www.ixda.no/talks/design-as-repair' },
  { month: 'Sep 2025', title: 'CUGOS GIS · Keynote', body: '[Brief description — the through-line of the talk, who was in the room, what landed.]', placeholder: 'CUGOS stage / slide photo' },
  { month: 'Aug 2025', title: 'Portland Digital Corps launched', body: 'Founded an all-volunteer practice that organised fifty-plus practitioners to deliver six nonprofit websites in eight-week engagements. Model has since been picked up in other cities.', placeholder: 'Cohort photo', href: 'https://digitalcorpspdx.org' },
  { month: 'Mar 2025', title: 'End of 18F', body: '18F was eliminated by executive action. Four years as Head of Design closed under those circumstances. Writing about what the practice was, and what it leaves behind, is ongoing.', placeholder: '18F team or project photo', href: 'https://www.nytimes.com/2025/03/03/us/politics/18f-technology-specialists-fired.html' },
  { month: '2025', title: 'Service Design Show · Ep. 236', body: 'Long-form podcast conversation on repairing service design for the age of AI.', placeholder: 'Podcast artwork or recording photo', href: 'https://podcasts.apple.com/br/podcast/repairing-service-design-for-the-age-of-ai-ron-bronson-ep-236/id1104665758?i=1000726081505' },
  { month: '2025', title: 'Leading the Field · Code for America', body: 'Conversation with Code for America on leading design practice inside U.S. government.', placeholder: 'CfA interview thumbnail', href: 'https://codeforamerica.org/news/leading-the-field-ron-bronson/' },
];

export const WRITING: Piece[] = [
  { title: 'Some advice on managing your design career upwards', where: 'Piccalil.li', href: 'https://piccalil.li/blog/some-advice-on-managing-your-design-career-upwards/' },
  { title: 'Design as Repair', where: 'blog.ronbronson.com', href: 'https://blog.ronbronson.com/design-as-repair' },
  { title: 'The Bureaucratic Banality of Andor', where: 'blog.ronbronson.com', href: 'https://blog.ronbronson.com/the-bureaucratic-banality-of-andor' },
  { title: 'What Forward Deployed Design Actually Looks Like', where: 'blog.ronbronson.com', href: 'https://blog.ronbronson.com/what-forward-deployed-design-actually-looks-like' },
  { title: 'Your AI Agent (or your printer) is Not a Coworker', where: 'makingpublicwork.com', href: 'https://makingpublicwork.com/3mmcnbrnins2q' },
  { title: 'Technologist is not a job', where: 'makingpublicwork.com', href: 'https://makingpublicwork.com/3mm5oz4i3kk2s' },
  { title: 'The Banality of Rules', where: 'makingpublicwork.com', href: 'https://makingpublicwork.com/3mlkawmzzfc2b' },
];

export const PODCASTS: Piece[] = [
  { title: 'Repairing Service Design for the Age of AI', where: 'Service Design Show · Ep. 236', href: 'https://podcasts.apple.com/br/podcast/repairing-service-design-for-the-age-of-ai-ron-bronson-ep-236/id1104665758?i=1000726081505' },
  { title: 'Leading the Field', where: 'Code for America', href: 'https://codeforamerica.org/news/leading-the-field-ron-bronson/' },
  { title: 'What Huh Me Huh What', where: 'Did I Do That Podcast', href: 'https://www.dididothat.design/episode/what-huh-me-huh-what-with-ron-bronson' },
  { title: 'Surfacing', where: 'Surfacing Podcast', href: 'https://open.spotify.com/episode/2lC2xrhf4PIasyzJW4faP7' },
  { title: 'Building Better User-Centered Products', where: 'Pixel Pioneers', href: 'https://pixelpioneers.co/blog/building-better-user-centered-products-an-interview-with-ron-bronson' },
];

export const HOSTING: Piece[] = [
  { title: 'Future Perfect Book Club', where: 'Speculative futures book club', href: 'https://futureperfectbook.club' },
  { title: 'The Sound Bulletin', where: 'KFFP-FM', href: 'https://www.mixcloud.com/908rb/' },
];

/* Curated, embeddable proof of work — a talk, a guest podcast, the things
   Ron hosts. `embed` is an iframe src; without it the card links out.
   Swap in real embed URLs / add or remove items freely. */
export interface MediaEmbed {
  kind: 'video' | 'audio';
  title: string;
  where: string;
  embed?: string;
  href?: string;
}

export const MEDIA: MediaEmbed[] = [
  {
    kind: 'video',
    title: 'Beyond Civic Tech: Public Mechanics',
    where: 'CUGOS · Keynote',
    embed: 'https://www.youtube.com/embed/hnAScuK-oMo',
    href: 'https://youtube.com/watch?v=hnAScuK-oMo',
  },
  {
    kind: 'video',
    title: 'Repairing Service Design for the Age of AI',
    where: 'The Service Design Show',
    embed: 'https://www.youtube.com/embed/4HKTGod1Xyo',
    href: 'https://www.youtube.com/watch?v=4HKTGod1Xyo',
  },
  {
    kind: 'audio',
    title: 'The Sound Bulletin',
    where: 'Freeform Portland · KFFP-FM',
    embed: 'https://www.mixcloud.com/widget/iframe/?feed=%2F908rb%2F&light=1&hide_cover=1&mini=1',
    href: 'https://www.mixcloud.com/908rb/',
  },
];

export const ELSEWHERE: ElseLink[] = [
  { label: 'Bluesky', href: 'https://bsky.app/profile/ronbronson.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ronbronson/' },
  { label: 'GitHub', href: 'https://github.com/quarterback' },
  { label: 'Mastodon', href: 'https://mastodon.social/@ronbronson' },
  { label: 'Letterboxd', href: 'https://letterboxd.com/ronbronson/' },
  { label: 'Literal', href: 'https://literal.club/ron' },
  { label: 'Record Club', href: 'https://record.club/ron' },
  { label: 'Listening', href: 'https://listening.ronbronson.com' },
  { label: 'Instagram', href: 'https://www.instagram.com/ronbronson/' },
];
