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
export interface Highlight { month: string; title: string; body?: string; placeholder: string; image?: string; embed?: string; href?: string; }
export interface Piece { title: string; where: string; href?: string; }
export interface ElseLink { label: string; href: string; }

export const ME = {
  name: 'Ron Bronson',
  role: 'Critical urbanist and design executive working on public mechanics.',
  bio: `Former Head of Design at 18F, the U.S. government's digital consultancy. Now an Assistant Professor of Practice in Urban Technology at the University of Michigan, founder of Portland Digital Corps, and President of AIGA Portland. He co-hosts the <a href="https://futureperfectbook.club" target="_blank" rel="noopener noreferrer">Future Perfect Book Club</a> podcast with Joel Goodman and hosts The Sound Bulletin on Freeform Portland.`,
  email: 'ron@ronbronson.com',
};

export const CURRENT_WORK: CaseStudy[] = [
  {
    id: 'pdx',
    title: 'Volunteer digital service delivery at Portland Digital Corps',
    href: 'https://digitalcorpspdx.org',
    body: 'A short-term civic-tech sprint I founded and ran from March to June 2025 — 100+ technologists shipping real digital projects for six Portland nonprofits, from Built Oregon to Families for Safe Streets.',
    images: [
      { src: '/img/pdx-cape-perpetua.jpg', alt: 'A Portland Digital Corps cohort presenting the Cape Perpetua Collaborative website redesign at the finale show & tell', placeholder: '' },
    ],
  },
  {
    id: 'umich',
    title: 'Teaching in the Urban Technology program at the University of Michigan',
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
    body: "Led the design practice at the federal government's internal digital consultancy — part of a team that delivered 455+ projects for 34 agencies, shipping platforms and services used by millions. Code owner of the 18F UX Guide, 18F Methods, and the 18F blog. 18F was eliminated in March 2025.",
    images: [
      { src: '/img/18f-launch.jpg', alt: '18F website launch — ribbon-cutting on the GSA stage', placeholder: '' },
    ],
    reading: [
      { label: '18F Guides', href: 'https://guides.18f.org/' },
      { label: 'What happened to 18F (NYT)', href: 'https://www.nytimes.com/2025/03/03/us/politics/18f-technology-specialists-fired.html' },
      { label: 'How 18F transformed government tech (Techdirt)', href: 'https://www.techdirt.com/2025/04/04/how-18f-transformed-government-technology-%E2%88%92-and-why-its-elimination-matters/' },
    ],
  },
];

/* Conferences & local events Ron has organized/run. Same shape as case
   studies — full-bleed imagery + short description. */
export const EVENTS: CaseStudy[] = [
  {
    id: 'dfp',
    title: 'Design for the Public — a civic-design conference in Portland',
    span: 'Fall 2024',
    body: 'Organized Design for the Public, convening practitioners working on public-interest technology and delivery for a day of talks and conversations in Portland.',
    images: [
      { src: '/img/dfp-panel.jpg', alt: 'A panel discussion on stage at Design for the Public', placeholder: '' },
      { src: '/img/dfp-crowd.jpg', alt: 'The audience at Design for the Public', placeholder: '' },
    ],
  },
  {
    id: 'pdm',
    title: 'PDX Design Month with AIGA Portland',
    body: 'As President of AIGA Portland, helped launch PDX Design Month — a month of talks and events bringing the city’s design community together.',
    images: [
      { src: '/img/pdx-design-month.jpg', alt: 'Ron Bronson speaking at a PDX Design Month event', placeholder: '' },
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
    month: '2026',
    title: 'Organized a civic-tech panel at U-M Service Design Weekend',
    placeholder: 'Service Design Weekend photo',
    image: '/img/ssw-civic-tech-2026.jpg',
    href: 'https://taubmancollege.umich.edu/news/2026/04/15/bronson-leads-civic-tech-panels-at-u-m-service-design-weekend/',
  },
  {
    month: '2026',
    title: 'Guest lecture on administrative burdens — PubPol 750, Ford School',
    placeholder: 'Add image',
    href: 'https://fordschool.umich.edu/course/winter/2025/pubpol-750020-topics-administrative-burdens-how-frictions-affect-access-public',
  },
  {
    month: '2026',
    title: 'Speaker at Throughline Conference (online)',
    placeholder: 'Add image',
    href: 'https://www.throughlineconf.com/',
  },
];

export const HIGHLIGHTS_2025: Highlight[] = [
  { month: '2025', title: 'Panelist at Dot Gov Design Conference (AIGA DC)', placeholder: 'AIGA DC Dot Gov Design panel', image: '/img/aiga-dc.jpg' },
  { month: '2025', title: 'Keynote at Cascadia Open Source Conference, Seattle', placeholder: 'Cascadia keynote photo', embed: 'https://www.youtube.com/embed/hnAScuK-oMo', href: 'https://youtube.com/watch?v=hnAScuK-oMo' },
  { month: '2025', title: 'Ran a workshop at Hype Studies Conference, Barcelona', placeholder: 'Add image', href: 'https://blog.ronbronson.com/the-long-half-life-of-culture' },
  { month: '2025', title: 'Moderated a panel at the Code for America Summit, Washington DC', placeholder: 'Code for America Summit', image: '/img/cfa-summit.jpg' },
  { month: 'Jun 2025 – Jan 2026', title: 'Director of Design & Operations at Nava PBC', placeholder: 'Nava 10th anniversary', image: '/img/nava.jpg' },
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
  kind: 'video' | 'audio' | 'article';
  title: string;
  where: string;
  embed?: string;
  href?: string;
}

export const MEDIA: MediaEmbed[] = [
  {
    kind: 'video',
    title: 'Design as Repair',
    where: 'IxDA Oslo · Keynote · Sep 2025',
    embed: 'https://player.vimeo.com/video/1177783240?h=ca450c1bd6',
    href: 'https://www.ixda.no/talks/design-as-repair',
  },
  {
    kind: 'video',
    title: 'Repairing Service Design for the Age of AI',
    where: 'The Service Design Show · Sep 2025',
    embed: 'https://www.youtube.com/embed/4HKTGod1Xyo',
    href: 'https://www.youtube.com/watch?v=4HKTGod1Xyo',
  },
  {
    kind: 'audio',
    title: 'What Huh Me Huh What',
    where: 'Did I Do That? · Oct 2025',
    href: 'https://youtu.be/kL0gYtoUtvI',
  },
  {
    kind: 'audio',
    title: 'The Sound Bulletin',
    where: 'Freeform Portland · KFFP-FM',
    embed: 'https://www.mixcloud.com/widget/iframe/?feed=%2F908rb%2F&light=1&hide_cover=1&mini=1',
    href: 'https://www.mixcloud.com/908rb/',
  },
  {
    kind: 'article',
    title: 'Building Better User-Centered Products',
    where: 'Pixel Pioneers · Interview',
    href: 'https://pixelpioneers.co/blog/building-better-user-centered-products-an-interview-with-ron-bronson',
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
