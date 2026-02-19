---
title: "HeyPBJ — Structured Matching Platform"
type: "delivery"
lede: "Dating and social discovery as a routing problem—using cohorts, compatibility metrics, and guided prompts instead of endless feeds."
summary: "A structured-matching platform that treats social discovery as infrastructure rather than a feed, assembling compatible small groups ('rundles') based on declared preferences and weighted signals."
itemType: "project"
systemType: "Matching infrastructure + social discovery"
outcome: "Production platform exploring constraint-based matching and small-group dynamics"
order: 108
featured: true
tags: ["AT Protocol", "Matching", "Social Discovery", "Routing"]
role: "Designer, Developer, Architect"
timeline: "2024 - Present"
externalUrl: "https://heypbj.xyz"
parent: "atproto-projects"
hero:
  image: "/img/heypbj.xyz.png"
---

## Swiping Is a Market Failure

Every dating app on the market optimizes for the same thing: time-on-app. More swipes, more sessions, more ad impressions. The user's actual goal — meaningful connection — is structurally misaligned with the business model.

HeyPBJ starts from a different premise: **connection is a routing problem, not a content problem.** The system should get you to the right people faster, not keep you scrolling longer.

---

## The 15-Pick Weekly Draft

Instead of infinite feeds, PBJ gives you a **weekly draft** — a curated cohort of 15 compatible people, assembled from declared preferences and weighted compatibility signals. You pick. They pick. Matches form from mutual selection within a bounded set.

This isn't a personality quiz feeding a black box. It's **transparent routing**: you say what you want, the system shows you why these people landed in your draft, and you make an informed call.

**Small-group dynamics ("rundles")** — cohorts of 3–8 people — provide social context before anyone pairs off. You see how someone shows up in a group before you commit to a one-on-one. That's data no profile can give you.

---

## Why It Works

**Constraint breeds quality.** Fifteen picks forces intentionality. No doom-scrolling, no paradox of choice, no algorithmic mystery. You get good options with clear rationale.

**Transparency builds trust.** Everyone in a rundle sees the same compatibility data. No hidden algorithms deciding who sees whom. The system shows its work.

**Pacing prevents burnout.** Weekly cadence, guided prompts, progressive disclosure. The interaction design respects your time instead of exploiting it.

**Context before chemistry.** Group interaction reveals compatibility signals that profiles and DMs never capture — how someone listens, responds under pressure, shows up for others.

---

## Built on AT Protocol

PBJ runs on decentralized infrastructure. Your identity, preferences, and interaction history belong to you — not the platform. If PBJ disappears tomorrow, your data doesn't.

- **Decentralized identity** — users own their profiles via AT Protocol DIDs
- **Portable preferences** — your matching criteria travel with you across compatible services
- **Client-side scoring** — compatibility computed locally for privacy
- **Open data model** — structured records, not proprietary lock-in

---

## Interoperable with Glowrm

This is where it gets interesting. PBJ plugs directly into [Glowrm's trust layer](/work/glowrm-trust-layer) for identity verification and safety:

- **Portable reputation** — carry verified credentials from other networks into your PBJ profile
- **Trust-weighted matching** — mutual vouches from friends and communities factor into compatibility
- **Safety signals** — cross-network reputation checks without centralized surveillance
- **Consent enforcement** — communication preferences declared in Glowrm travel into PBJ automatically

Two platforms, one trust layer. This is what interoperability actually looks like when you build on open protocols instead of walled gardens.

---

## What This Unlocks

PBJ isn't just a dating app. It's a proof of concept for **structured matching as infrastructure** — applicable to co-founder discovery, roommate matching, mentorship pairing, collaboration routing. Any domain where people need to find compatible others and the current tools are a feed-shaped waste of everyone's time.

The underlying architecture — declared preferences, weighted scoring, cohort formation, pacing mechanics, transparent algorithms — is a framework, not a feature set. It's designed to be forked, extended, and adapted.
