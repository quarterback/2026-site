// Site content - edit this file to update your portfolio
// This centralizes content so you can update without touching components

export const siteConfig = {
  name: "Ron Bronson",
  tagline: "I design how public systems make decisions.",
  impactStatement: "18F alumni · Professor · Consequence Design",
  email: "hello@ronbronson.dev",
  description: "Designer focused on public systems and decision-making",
};

export const projects = [
  {
    title: "18F / Federal Government",
    description: "Designing systems that help millions of people navigate government services.",
    impact: "Served millions of users",
    tags: ["Service Design", "Public Sector", "Systems Thinking"],
    link: undefined,
    image: undefined,
  },
  {
    title: "State Capacity AI",
    description: "Exploring how AI can strengthen public institutions and decision-making.",
    impact: undefined,
    tags: ["AI", "Policy", "Research"],
    link: undefined,
    image: undefined,
  },
  {
    title: "Consequence Design",
    description: "Framework for understanding how design decisions create downstream effects.",
    impact: undefined,
    tags: ["Framework", "Design Theory", "Speaking"],
    link: "https://consequencedesign.org", // Update with real link
    image: undefined,
  },
];

export const media = [
  {
    title: "Consequence Design and Public Systems",
    source: "Design Matters Podcast",
    type: "podcast" as const,
    date: "2024",
    link: "#",
  },
  {
    title: "Building for the Public Good",
    source: "A List Apart",
    type: "feature" as const,
    date: "2024",
    link: "#",
  },
  {
    title: "Designing Government Services",
    source: "UX Conference",
    type: "talk" as const,
    date: "2024",
    link: "#",
  },
  {
    title: "The Future of Civic Tech",
    source: "Tech & Society Interview",
    type: "interview" as const,
    date: "2023",
    link: "#",
  },
];

export const socials = [
  { name: "Bluesky", url: "https://bsky.app/profile/ronbronson.com" },
  { name: "LinkedIn", url: "https://linkedin.com/in/ronbronson" },
  { name: "GitHub", url: "https://github.com/ronbronson" },
  { name: "Letterboxd", url: "https://letterboxd.com/ronbronson" },
  { name: "Last.fm", url: "https://last.fm/user/ronbronson" },
];

export const about = {
  bio: `<strong>Designer, educator, and systems thinker</strong> focused on how public institutions serve people. I've spent my career at the intersection of design, policy, and technology — from federal agencies to universities. I teach, write, and speak about <strong>consequence design</strong>: understanding the downstream effects of the systems we create.`,
  details: [
    "Tea sommelier",
    "High school tennis coach",
    "Local radio host",
    "Portland, OR",
  ],
};

// API Integration stubs
// Replace these with actual API calls

export async function getLastFmNowPlaying() {
  // TODO: Implement Last.fm API call
  // const API_KEY = import.meta.env.LASTFM_API_KEY;
  // const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ronbronson&api_key=${API_KEY}&format=json&limit=1`);
  return {
    track: "Loading...",
    artist: "via Last.fm",
  };
}

export async function getLiteralCurrentlyReading() {
  // TODO: Implement Literal.club GraphQL API call
  return {
    title: "Loading...",
    author: "via Literal",
  };
}
