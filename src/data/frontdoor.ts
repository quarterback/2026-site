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
  body?: string | string[];
  images?: RImage[];
  embed?: string;
  reading?: RLink[];
  courses?: Course[];
}

export interface SpeakItem { date: string; title: string; where: string; href?: string; }
export interface Highlight { month: string; title: string; body?: string; placeholder: string; image?: string; embed?: string; href?: string; }
export interface Piece { title: string; where: string; href?: string; }
export interface ElseLink { label: string; href: string; }

export const ME = {
  name: 'Ron Bronson',
  role: 'I work on what it takes to build services and the practices that build them, across government, education, and the institutions in between.',
  bio: `Most recently led the design practice at 18F, the U.S. federal government's internal digital consultancy, until its closure in 2025. Now teaches in the Urban Technology program at the University of Michigan, runs a volunteer civic delivery practice in Portland, and serves as president of the local chapter of AIGA. Co-hosts the <a href="https://futureperfectbook.club" target="_blank" rel="noopener noreferrer">Future Perfect Book Club</a> podcast and hosts The Sound Bulletin on Freeform Portland.`,
  email: 'ron@ronbronson.com',
};

export const CURRENT_WORK: CaseStudy[] = [
  {
    id: '18f',
    title: 'Digital public infrastructure at 18F',
    span: 'Director, Head of Design · 2017–2025',
    body: 'Ran the design practice for an organization that delivered hundreds of digital service projects to large institutional clients, scaling the design team from 21 to 40 across a portfolio of platforms and services used by millions. Owned the public-facing guides and methods library that the practice used and that thousands of practitioners outside the organization adopted. Also served as Acting Chief of Staff during the transition that followed.',
    images: [
      { src: '/img/18f-launch.jpg', alt: '18F website launch ribbon-cutting on the GSA stage', placeholder: '' },
    ],
    reading: [
      { label: '18F Guides', href: 'https://guides.18f.org/' },
      { label: 'De-risking Government Technology Field Guide', href: 'https://digitalgovernmenthub.org/wp-content/uploads/2022/07/federal-field-guide-4dccc06e01cd56773eb140ff6e6b2805cc517a460d6bff6689e7edd0ef349598.pdf' },
      { label: 'What happened to 18F (NYT)', href: 'https://www.nytimes.com/2025/03/03/us/politics/18f-technology-specialists-fired.html' },
      { label: 'How 18F transformed government tech (Techdirt)', href: 'https://www.techdirt.com/2025/04/04/how-18f-transformed-government-technology-%E2%88%92-and-why-its-elimination-matters/' },
    ],
  },
  {
    id: 'pdx',
    title: 'Volunteer digital service delivery at Portland Digital Corps',
    href: 'https://digitalcorpspdx.org',
    span: 'March–July 2025',
    body: 'Founded and ran a volunteer practice that organized 100-plus designers, engineers, researchers, and writers to deliver digital projects for six mission-driven organizations across a four-month engagement window. The model has since been replicated in other cities.',
    images: [
      { src: '/img/pdx-cape-perpetua.jpg', alt: 'A Portland Digital Corps cohort presenting the Cape Perpetua Collaborative website redesign at the finale show & tell', placeholder: '' },
    ],
  },
  {
    id: 'umich',
    title: 'Teaching in the Urban Technology program at the University of Michigan',
    href: 'https://taubmancollege.umich.edu/faculty/directory/ron-bronson/',
    body: 'Teach three courses in an interdisciplinary urban technology program — on the design of public services, on interaction design, and on the gap between how policy is written and how delivery actually works on the ground. Students do project work with real partners; recent projects have addressed administrative burdens, court systems, and airport service redesign.',
    images: [
      { src: '/img/umich-lets-grow.jpg', alt: 'Urban Technology students presenting Let’s Grow Michigan work', placeholder: '' },
      { src: '/img/umich-mittencorps.jpg', alt: 'MittenCorps student presentation', placeholder: '' },
    ],
    reading: [{ label: 'yearsahead.io', href: 'https://yearsahead.io' }],
  },
  {
    id: 'bloomington',
    title: 'Redesigning bloomington.in.gov',
    span: 'UX Engineer & Service Designer · 2016–2017',
    body: 'On a three-person team, redesigned the City of Bloomington’s decade-old website, migrating it from an in-house CMS to Drupal. I presented the work at DrupalCon 2018.',
    embed: 'https://www.youtube.com/embed/REUJCWpFOcI',
    reading: [{ label: 'bloomington.in.gov', href: 'https://bloomington.in.gov' }],
  },
  {
    id: 'nava',
    title: 'Digital services for federal health programs at Nava PBC',
    span: 'Director of Design & Operations · 2025',
    body: 'A public benefit corporation building digital services for major federal health programs. A six-month role spanning its tenth anniversary and a leadership transition.',
    images: [
      { src: '/img/nava.jpg', alt: 'Nava PBC tenth anniversary', placeholder: '' },
    ],
  },
];

export const PAST_WORK: CaseStudy[] = [];

/* Conferences & local events Ron has organized/run. Same shape as case
   studies — full-bleed imagery + short description. */
export const EVENTS: CaseStudy[] = [
  {
    id: 'dfp',
    title: 'Design for the Public 24',
    span: 'October 16–17, 2024 · Portland, Oregon',
    body: 'Convened a two-day gathering of practitioners working on the intersection of policy and delivery — talks, panels, and conversations on how complex services get built and maintained.',
    images: [
      { src: '/img/dfp-panel.jpg', alt: 'A panel discussion on stage at Design for the Public', placeholder: '' },
      { src: '/img/dfp-crowd.jpg', alt: 'The audience at Design for the Public', placeholder: '' },
    ],
  },
  {
    id: 'pdm',
    title: 'Portland Design Month',
    body: 'President of AIGA Portland, the chapter’s professional design organization. Launched and ran the city’s annual design programming after the prior community festival closed in 2021 — events organized by studios, schools, and creative groups across the city under a shared banner.',
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
    month: 'April 2026',
    title: 'Organized a civic tech panel at the University of Michigan Service Design Weekend',
    body: 'Brought students and practitioners together on civic technology and delivery.',
    placeholder: 'Service Design Weekend photo',
    image: '/img/ssw-civic-tech-2026.jpg',
    href: 'https://taubmancollege.umich.edu/news/2026/04/15/bronson-leads-civic-tech-panels-at-u-m-service-design-weekend/',
  },
  {
    month: 'Winter 2026',
    title: 'Guest lecture on administrative burdens for PubPol 750 at the Ford School',
    body: 'Introduced students to public mechanics — the latency between policy as designed and delivery on the ground — and to civic tech and service design, and how their deployment differs in the U.S. versus the rest of the world.',
    placeholder: 'Add image',
    href: 'https://fordschool.umich.edu/course/winter/2025/pubpol-750020-topics-administrative-burdens-how-frictions-affect-access-public',
  },
  {
    month: 'January 2026',
    title: 'Speaker at Throughline Conference (online)',
    body: 'On design, delivery, and doing public-interest work that lasts.',
    placeholder: 'Add image',
    href: 'https://www.throughlineconf.com/',
  },
];

export const HIGHLIGHTS_2025: Highlight[] = [
  { month: 'December 2025 · Washington, DC', title: 'Panelist at Dot Gov Design Conference', body: 'A panel on designing government digital services that actually work.', placeholder: 'Dot Gov Design panel', image: '/img/aiga-dc.jpg', href: 'https://dotgovdesign.org/events' },
  { month: 'December 2025 · Baltimore', title: 'Judge, AIGA Baltimore Flux Design Competition', placeholder: 'Add image', href: 'https://fluxdesigncompetition.org/judges.php' },
  { month: 'November 2025', title: 'Keynote at the Cascadia Open Source GIS Conference, Seattle', body: 'Keynote on public mechanics — looking past apps and dashboards to the systems that keep public life running.', placeholder: 'Cascadia keynote photo', embed: 'https://www.youtube.com/embed/hnAScuK-oMo', href: 'https://cugos.org/2025-fall-fling/' },
  { month: 'September 2025', title: 'Ran a workshop at Hype Studies Conference, Barcelona', body: 'A workshop, “Hype and its impact on the City,” on how technology extends the shelf life of culture — recirculating past eras instead of making new ones.', placeholder: 'Add image', href: 'https://blog.ronbronson.com/the-long-half-life-of-culture' },
  { month: 'May 2025', title: 'Moderated a panel at the Code for America Summit, Washington DC', body: 'Moderated a panel of former 18F employees on lessons learned and hope for the future.', placeholder: 'Code for America Summit', image: '/img/cfa-summit.jpg', href: 'https://codeforamerica.org/news/leading-the-field-ron-bronson/' },
];

export const WRITING: Piece[] = [
  { title: 'Some advice on managing your design career upwards', where: 'Piccalil.li', href: 'https://piccalil.li/blog/some-advice-on-managing-your-design-career-upwards/' },
  { title: 'The Long Half-Life of Culture', where: 'blog.ronbronson.com', href: 'https://blog.ronbronson.com/the-long-half-life-of-culture' },
  { title: 'Design as Repair', where: 'blog.ronbronson.com', href: 'https://blog.ronbronson.com/design-as-repair' },
  { title: 'The Bureaucratic Banality of Andor', where: 'blog.ronbronson.com', href: 'https://blog.ronbronson.com/the-bureaucratic-banality-of-andor' },
  { title: 'What Forward Deployed Design Actually Looks Like', where: 'blog.ronbronson.com', href: 'https://blog.ronbronson.com/what-forward-deployed-design-actually-looks-like' },
  { title: 'Your AI Agent (or your printer) is Not a Coworker', where: 'makingpublicwork.com', href: 'https://makingpublicwork.com/3mmcnbrnins2q' },
  { title: 'Technologist is not a job', where: 'makingpublicwork.com', href: 'https://makingpublicwork.com/3mm5oz4i3kk2s' },
  { title: 'The Banality of Rules', where: 'makingpublicwork.com', href: 'https://makingpublicwork.com/3mlkawmzzfc2b' },
];

/* Others citing or covering Ron's work — social proof. */
export const CITED: Piece[] = [
  { title: 'Forward Deployed Design at 18F', where: 'Roger Wong', href: 'https://rogerwong.me/2026/05/forward-deployed-design-at-18f' },
  { title: 'Design as Repair, applied to NHS emergency medicine', where: 'St Emlyn’s', href: 'https://www.stemlynsblog.org/design-as-repair-nhs-emergency-medicine/' },
  { title: 'Design as Repair', where: 'Sublime', href: 'https://sublime.app/card/design-as-repair-ron-bronson?section=highlights' },
  { title: 'Design as Repair', where: 'Jonathan Stephens · on the Throughline talk', href: 'https://jonathanstephens.us/journal/design-as-repair' },
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
