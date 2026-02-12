---
title: "Leafroll — Professional Identity Layer"
type: "project"
lede: "Dynamic, modular professional profiles that travel across networks—rethinking how people present work, skills, and trajectory."
summary: "A lightweight professional-identity prototype treating profiles as living documents composed of signals, artifacts, and endorsements that can be rearranged depending on context—collaboration, hiring, or discovery."
itemType: "project"
systemType: "Professional identity + portfolio infrastructure"
outcome: "Working prototype exploring composable profiles and portable reputation"
order: 110
featured: true
tags: ["AT Protocol", "Professional Identity", "Portfolios", "Composable Records"]
role: "Designer, Developer, Architect"
timeline: "2024 - Present"
externalUrl: "https://leafroll.fun"
parent: "atproto-projects"
---

## The Problem with Static Résumés

Traditional career documentation is broken:
- **Résumés are static snapshots** optimized for a single use case (job applications)
- **LinkedIn profiles** become cluttered catch-alls with no context
- **Work samples** live in scattered portfolios with no connective tissue
- **Reputation doesn't travel**—references and endorsements are locked to platforms
- **Context collapses**—you present the same profile whether pitching a collaboration, applying for a job, or joining a community

You can't easily answer:
- "What does this person bring to a specific project?"
- "How has their work evolved over time?"
- "Who can vouch for their skills in this domain?"
- "What artifacts best demonstrate relevant capability?"

---

## What Leafroll Does

Leafroll treats professional identity as **composable, portable infrastructure**. Instead of static career pages, profiles are:

### 1. Living Documents
- **Dynamic, not fixed:** Update as skills evolve, projects complete, and focus shifts
- **Signal-rich:** Not just job titles—artifacts, endorsements, collaboration patterns
- **Contextual:** Rearrange based on who's viewing and why
- **Time-aware:** Show trajectory and evolution, not just current state

### 2. Modular & Composable
Profiles are built from **structured components**:
- **Artifacts:** Work samples, case studies, projects
- **Signals:** Skills, tools, methodologies
- **Endorsements:** Vouches from collaborators (verified via Glowrm)
- **Context:** Why you did the work, what you learned, how it fits your trajectory
- **Metadata:** Structured tags for discovery and filtering

Each component can be:
- **Rearranged** for different contexts (hiring vs. collaboration vs. community)
- **Linked** to other people, projects, and organizations
- **Versioned** to show how work evolved
- **Selectively shared** based on permissions

### 3. Portable & Network-Native
Built on AT Protocol, so:
- **You own your data** (not the platform)
- **Endorsements travel** with you across networks
- **Profiles can be queried** by compatible services
- **Reputation is portable** (verified by Glowrm trust layer)

### 4. Context-Aware Presentation
Instead of one static profile, Leafroll can generate **contextual views**:
- **For hiring:** Emphasize relevant experience, endorsements, work samples
- **For collaboration:** Highlight complementary skills, past projects, availability
- **For community:** Show shared interests, values, background
- **For discovery:** Surface emergent skills, trajectory, unique combinations

---

## Design Principles

### Show Work, Not Just Credentials
Leafroll prioritizes **artifacts and endorsements** over job titles and dates. What you've built matters more than where you worked.

### Dynamic Over Static
Profiles **evolve** as you do. New skills, completed projects, and endorsements update automatically. You see trajectory, not just snapshots.

### Composable Over Monolithic
Profiles are **assembled from components** that can be mixed, rearranged, and filtered. No single "correct" view—presentation adapts to context.

### Portable Over Locked-In
Your professional identity **travels with you**. No platform lock-in; endorsements and work history follow you across networks.

### Social Proof Over Self-Report
**Endorsements are verified** (via Glowrm). Collaborators can vouch for specific skills or projects, creating trusted reputation.

---

## How It Works

### Profile Components

**Artifacts:**
- Case studies, projects, portfolios
- Work samples (code, designs, writing, media)
- Links to live work or deployments
- Context: problem, approach, outcome, learnings

**Signals:**
- Skills (verified by endorsements)
- Tools and methodologies
- Domains and industries
- Interests and values

**Endorsements:**
- Verified vouches from collaborators (Glowrm integration)
- Skill-specific endorsements ("Alice is excellent at X")
- Project endorsements ("Bob contributed to Y and was great to work with")
- Context: who, when, why, for what

**Trajectory:**
- How skills evolved over time
- Thematic arcs across projects
- Transitions and pivots
- Emergent patterns (e.g., "increasingly focused on civic tech")

**Metadata:**
- Structured tags for discovery
- Availability and preferences
- Collaboration style and values
- Communication preferences (pulled from Glowrm consent layer)

### Contextual Views

**Hiring Mode:**
Shows relevant experience, endorsements from past employers/clients, work samples aligned with job requirements, and skill verification.

**Collaboration Mode:**
Highlights complementary skills, availability, past collaboration patterns, and communication preferences. Shows what you bring to a team.

**Community Mode:**
Surfaces shared interests, values, and background. Emphasizes fit and contribution potential rather than credentials.

**Discovery Mode:**
Showcases unique skill combinations, emergent expertise, and trajectory. Helps people find you based on what makes you distinct.

---

## User Journey

1. **Create Profile:**
   - Add artifacts (projects, work samples)
   - Declare signals (skills, tools, interests)
   - Connect to Glowrm for identity verification

2. **Request Endorsements:**
   - Invite collaborators to vouch for specific skills/projects
   - Endorsements are cryptographically verified (Glowrm)
   - Build social proof over time

3. **Configure Context Views:**
   - Decide what to emphasize for different audiences
   - Set permissions (what's public vs. restricted)
   - Define routing rules (who sees what)

4. **Share & Discover:**
   - Share contextual profile links (e.g., "my collaboration profile")
   - Allow compatible services to query your data
   - Be discovered based on skills, trajectory, or unique combinations

5. **Evolve:**
   - Add new artifacts as projects complete
   - Update skills and signals as you grow
   - Accumulate endorsements from new collaborations
   - Profile stays current without manual résumé updates

---

## Technical Architecture

**AT Protocol Foundation:**
- Decentralized identity (DIDs)
- User-controlled data repositories
- Structured schemas for professional records
- Composable queries for discovery

**Data Structures:**
- **Artifact Records:** Structured case studies, projects, portfolios
- **Signal Declarations:** Skills, tools, methodologies, interests
- **Endorsement Records:** Verified vouches (Glowrm integration)
- **Trajectory Metadata:** How work evolved over time
- **Context Configurations:** Rules for what to show when

**Services:**
- **Profile Composer:** Generates contextual views from components
- **Discovery Engine:** Query profiles by skills, trajectory, signals
- **Endorsement Verifier:** Check cryptographic signatures (via Glowrm)
- **Artifact Renderer:** Display work samples in context

**Integrations:**
- **Glowrm:** Trust layer for endorsement verification and consent
- **HeyPBJ:** Professional discovery rundles for collaboration matching
- **External Services:** Any AT Protocol–compatible platform can query profiles

---

## Use Cases

### Hiring & Recruiting
- **Employers:** Search for candidates by skill combinations, trajectory, or verified endorsements
- **Candidates:** Present contextual profiles optimized for specific roles
- **Referrals:** Endorsements provide trusted social proof

### Collaboration & Freelancing
- **Project Matching:** Find collaborators with complementary skills
- **Team Assembly:** See how people work together (past collaboration patterns)
- **Vetting:** Check verified endorsements and work samples

### Community & Discovery
- **Find Your People:** Discover others with shared interests, values, or trajectories
- **Community Fit:** See if someone aligns with group culture/values
- **Emergence:** Surface unique skill combinations or non-obvious expertise

### Career Trajectory & Reflection
- **See Your Growth:** Visualize how skills and focus evolved over time
- **Identify Patterns:** Notice emergent themes across projects
- **Signal Shifts:** Broadcast career pivots or new directions

---

## Integration with Other Projects

### HeyPBJ (Matching Platform)
Uses Leafroll for:
- Professional discovery rundles (collaboration, not dating)
- Skill-based matching for project teams
- Verified credentials for professional contexts

### Glowrm (Trust Layer)
Uses Glowrm for:
- Cryptographic verification of endorsements
- Portable reputation across networks
- Consent management (who can see what)
- Trust routing (weighting endorsements by relationship strength)

### Occupant (AI Benchmarks)
Could use Leafroll for:
- Contributor profiles (expertise in AI/data)
- Verified credentials for data submissions
- Community governance (who can vote on methodology changes)

---

## Part of the AT Protocol Suite

Leafroll is one of several interconnected projects exploring decentralized infrastructure:
- [AT Protocol Projects](/work/atproto-projects) (Parent project)
- [HeyPBJ](/work/heypbj-matching-platform) (Matching platform)
- [Glowrm](/work/glowrm-trust-layer) (Trust layer)
- [Occupant](/work/occupant-ai-benchmarks) (Public data infrastructure)

---

## Research Questions

Leafroll explores:
- Can **modular profiles** better reflect how people actually work than static résumés?
- Do **verified endorsements** create more trusted reputation than self-reported credentials?
- How do **contextual views** change hiring, collaboration, and discovery?
- Can **portable identity** reduce lock-in and improve labor market fluidity?
- What happens when **professional reputation travels** across networks?

---

## What This Demonstrates

- **Composable professional identity**: Treating careers as living documents, not static snapshots
- **Portable reputation systems**: Building verified endorsements that travel across platforms
- **Context-aware presentation**: Adapting profiles based on audience and use case
- **Social proof infrastructure**: Creating trusted verification without centralized platforms
- **Decentralized career infrastructure**: Proving you can build professional networks without LinkedIn-style lock-in
- **Modular data design**: Showing how structured components enable flexible presentation
- **Trajectory thinking**: Emphasizing evolution and growth over fixed credentials
