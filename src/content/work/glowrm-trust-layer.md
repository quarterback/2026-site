---
title: "Glowrm — Trust & Relationship Layer"
type: "delivery"
lede: "Portable trust primitives for decentralized social environments—how identity, reputation, and consent travel across networks."
summary: "A trust and relationship-layer prototype for AT Protocol environments, providing lightweight infrastructure for signaling credibility, tracking interaction history, and routing trust between participants and communities."
itemType: "project"
systemType: "Trust infrastructure + decentralized moderation"
outcome: "Working prototype exploring portable trust, reputation, and consent mechanisms"
order: 109
featured: true
toc: true
tags: ["AT Protocol", "Trust", "Reputation", "Decentralized Identity", "Moderation"]
role: "Designer, Developer, Architect"
timeline: "2024 - Present"
externalUrl: "https://glowrm.tech"
parent: "atproto-projects"
---

## The Problem Every Platform Ignores

Every time you join a new platform, you start from zero. No reputation. No verified credentials. No signal that you're a real person who's been trusted in other spaces. Years of community standing, evaporated at every signup screen.

Meanwhile, bad actors exploit exactly this — the fact that trust doesn't travel. They get banned somewhere, create a new account somewhere else, and start over clean. The people who play by the rules get punished with cold starts. The people who don't get infinite fresh starts.

Glowrm is **infrastructure for trust that travels.**

---

## What It Does

Four primitives. All portable. All user-controlled.

### Identity Verification
Credentials that aren't locked to one platform. Multi-source verification — domain ownership, social proof, community attestations — with cryptographic signatures so nobody can fake them. Prove what you need to prove without revealing everything.

### Reputation That Follows You
Interaction history you own. Community vouches and endorsements. Negative signals with context (not just a scarlet letter). Multi-dimensional reputation — reliability, expertise, civility — because "trustworthy" means different things in different contexts.

### Consent and Boundaries
Persistent preference declarations that travel with you. "No unsolicited DMs" set once, enforced everywhere. Context-aware rules for different spaces. Revocable permissions when trust breaks. Transparent data flows so you always know who sees what.

### Trust Routing
The hard problem: how do vouches from one community inform decisions in another? Can endorsements be weighted by relationship strength? How do negative signals propagate without becoming permanent? What happens when trust networks conflict? Glowrm answers these by treating trust as a routing layer, not a binary score.

---

## Already Powering PBJ

This isn't theoretical. Glowrm is the trust backbone for [HeyPBJ's matching platform](/work/heypbj-matching-platform):

- **Identity verification** in dating rundles — you know who you're talking to
- **Cross-network safety checks** — reputation from other communities factors into matching
- **Trust-weighted compatibility** — mutual vouches from friends boost match quality
- **Consent enforcement** — communication preferences declared in Glowrm apply automatically in PBJ

Two products, one trust layer. When you build on open protocols, interoperability isn't a roadmap item — it's the starting condition.

---

## How Communities Use It

**Moderation tooling.** A forum checks if new applicants have endorsements from trusted communities. Cold-start spam drops. Graduated moderation replaces ban-or-allow binary thinking.

**Safe onboarding.** A new platform accepts portable verification instead of making everyone prove themselves from scratch. Trusted users get access faster. Unknown users get scaffolded in.

**Trust-based discovery.** Matching and routing systems weight compatibility by mutual connections. People get routed toward communities where they're already known. Cold-start problems shrink.

---

## Built on AT Protocol

Everything runs on decentralized infrastructure. Trust data lives with the user, not the platform.

- **DIDs** (decentralized identifiers) for tamper-proof identity
- **User-controlled data repos** — you decide what's shared and with whom
- **Cryptographic attestations** — third-party vouches that can't be forged
- **Zero-knowledge proofs** for privacy-preserving verification — prove claims without revealing underlying data
- **Composable schemas** so any AT Protocol app can read and write trust primitives

If Glowrm disappears tomorrow, your trust data doesn't. That's the point.

---

## Why This Is Category-Defining

Every social platform reinvents trust from scratch — poorly. Centralized moderation doesn't scale. Binary block lists don't capture nuance. Platform-locked reputation creates walled gardens where incumbents win by default.

Glowrm treats trust as **shared infrastructure**, not a platform feature. It's the layer that makes niche apps viable — because a new social product with 500 users can tap into trust signals from networks with millions. You don't need scale to have safety. You need interoperability.

The thesis: portable trust is the unlock for the next generation of social products. Without it, every new platform is starting from zero on the hardest problem in social software. With it, the barrier to building safe, credible social spaces drops dramatically.
