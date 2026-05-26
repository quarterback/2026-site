/* -------------------------------------------------------------------
   frontdoor.ts — content for the homepage.

   JOB: get Ron booked/hired. A stranger should grasp what he does FOR
   them and have an obvious path to contact.
   FORM: big confident statements, each anchored by visible proof
   (photos, artifacts, named work). Authority, not a bio.

   Edit this file to change the pitch. Copy below is placeholder
   scaffolding to show the structure — replace the words and swap in real
   proof photos from /public/img. Keep the shape.
   ------------------------------------------------------------------- */

export interface Cta {
  label: string;
  href: string;
  external?: boolean;
}

/* The lead pitch — value statement + a clear call to action. */
export interface Lead {
  name: string;
  headline: string;   // the big value statement (what he does, for whom)
  sub: string;        // one supporting line
  ctas: Cta[];        // primary + secondary action
}

/* A piece of evidence under a claim — ideally a photo/artifact. */
export interface ProofItem {
  label: string;      // what it is
  image?: string;     // /img/… ; omit for a text-only proof pill
  href?: string;
  external?: boolean;
}

/* A confident claim about what he does for you, backed by proof. */
export interface Capability {
  statement: string;  // bold: "I do X for you"
  blurb: string;      // what you actually get / how it works
  proof: ProofItem[]; // the receipts
  cta?: Cta;          // optional deeper link
}

/* Logan-style social proof — the names that vouch for you. */
export interface SocialProof {
  label: string;
  items: string[];    // institutions / venues
}

export interface Contact {
  line: string;       // the ask
  email: string;
  ctas: Cta[];
}

/* =================================================================== */

export const LEAD: Lead = {
  name: 'Ron Bronson',
  headline:
    'I help institutions deploy public technology that actually reaches people.',
  sub: 'Two decades closing the gap between policy and delivery — from small counties to federal agencies.',
  ctas: [
    { label: 'Get in touch', href: 'mailto:ron@ronbronson.com' },
    { label: 'Book a talk', href: '/speaking' },
  ],
};

export const SOCIAL_PROOF: SocialProof = {
  label: 'Worked with & spoken at',
  items: [
    '18F / GSA',
    'Dept. of Veterans Affairs',
    'IRS',
    'HHS',
    'Dept. of Defense',
    'University of Michigan',
    'Code for America',
    'Bloomberg',
    'IxDA',
    'Rosenfeld',
    'Cloudflare',
  ],
};

export const CAPABILITIES: Capability[] = [
  {
    statement: 'I stabilize stalled delivery programs.',
    blurb:
      'Through Occupant, I diagnose where ownership got lost and reset deployment plans so programs outlast the engagement.',
    cta: { label: 'Occupant', href: 'https://www.occupant.works/', external: true },
    proof: [
      { label: 'Portland Digital Corps', image: '/img/digitalcorpspdx.org.png', href: 'https://digitalcorpspdx.org', external: true },
      { label: '18F delivery, federal scale', image: '/img/18f-leadership.svg' },
      { label: 'Occupant', image: '/img/occupant.png', href: 'https://www.occupant.works/', external: true },
    ],
  },
  {
    statement: 'I advise leadership on institutional AI deployment.',
    blurb:
      'State Capacity AI builds the procurement benchmarks and decision infrastructure governments need to evaluate AI without the sales pitch.',
    cta: { label: 'State Capacity AI', href: 'https://statecapacity.ai', external: true },
    proof: [
      { label: 'State Capacity AI', image: '/img/statecapacity-ai.svg', href: 'https://statecapacity.ai', external: true },
      { label: 'Public Mechanics', href: 'https://makingpublicwork.com', external: true },
    ],
  },
  {
    statement: 'I speak and teach on how public systems really work.',
    blurb:
      'Keynotes, workshops, and a faculty practice at U-Michigan — energetic talks on delivery, consequence design, and public mechanics.',
    cta: { label: 'Speaking', href: '/speaking' },
    proof: [
      { label: 'Design for the Public', image: '/img/dfp24.jpg' },
      { label: 'IxDA Oslo', image: '/img/oaca2022.jpg', href: 'https://www.ixda.no/talks/design-as-repair', external: true },
      { label: 'U-Michigan, Urban Technology', image: '/img/michigan-teaching.svg', href: 'https://taubmancollege.umich.edu/faculty/directory/ron-bronson/', external: true },
    ],
  },
];

export const CONTACT: Contact = {
  line: "If your project is too important to leave the gap between pilot and product to chance, let's talk.",
  email: 'ron@ronbronson.com',
  ctas: [
    { label: 'Email me', href: 'mailto:ron@ronbronson.com' },
    { label: 'Advising via Occupant', href: 'https://www.occupant.works/', external: true },
    { label: 'Book a talk', href: '/speaking' },
  ],
};
