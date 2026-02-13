---
title: "HeyPBJ — Structured Matching Platform"
type: "concept"
lede: "Social discovery as decision-layer architecture—demonstrating how routing systems, judgment frameworks, and constraint-based matching operate in public environments."
summary: "Decision infrastructure for social routing—showing how compatibility metrics, cohort formation algorithms, and guided judgment mechanics function as governable systems rather than opaque feeds."
itemType: "project"
systemType: "Decision architecture + routing infrastructure"
outcome: "Operational system demonstrating transparent matching, constraint-based decision frameworks, and accountable routing mechanics"
order: 108
featured: true
tags: ["Decision Systems", "Routing Architecture", "Judgment Mechanics", "Constraint-Based Design", "AT Protocol"]
role: "Founder, Architect"
timeline: "2024 - Present"
externalUrl: "https://heypbj.xyz"
parent: "atproto-projects"
hero:
  image: "/img/heypbj.xyz.png"
---

## The Core Idea

Dating and social discovery aren't content problems—they're **routing problems**. HeyPBJ treats connection as infrastructure: users signal what they're looking for, the system assembles compatible cohorts, and matches unfold through guided prompts rather than infinite scrolling.

Instead of feeds, swipes, and algorithmic mystery, HeyPBJ uses:
- **Declared preferences** (what you're seeking, how you want to interact)
- **Weighted signals** (compatibility metrics across multiple dimensions)
- **Small cohorts** ("rundles"—compatible groups of 3-8 people)
- **Guided prompts** (structured interaction contexts)
- **Mutual visibility** (everyone sees the same compatibility data)

---

## The Problem with Feeds

Traditional dating/social apps treat discovery as an engagement optimization problem:
- Endless swiping creates decision fatigue
- Algorithmic feeds prioritize retention over connection
- Matches lack context or shared understanding
- Success metrics (time-on-app, swipes) misalign with user goals (meaningful connection)

The result: people spend hours scrolling but rarely find compatible matches, and when they do, there's no shared framework for moving forward.

---

## How HeyPBJ Works

### 1. Declared Preferences
Users explicitly state what they're looking for:
- Connection type (dating, friendship, collaboration)
- Interaction preferences (pacing, communication style)
- Values and priorities
- Deal-breakers and must-haves

This isn't a personality quiz—it's **routing metadata**. The system uses these signals to compute compatibility.

### 2. Weighted Compatibility Metrics
Rather than binary yes/no, HeyPBJ calculates **multi-dimensional compatibility**:
- Alignment on core values
- Complementary interaction styles
- Shared interests and context
- Geographic/logistical feasibility

Scores are **transparent and mutual**: everyone in a rundle sees the same data about why they were matched.

### 3. Rundles (Small Cohorts)
Instead of one-on-one matches, the system creates **small groups** of 3-8 compatible people. This:
- Reduces pressure of binary yes/no decisions
- Provides social context (how you interact in a group matters)
- Allows for organic subgroup formation
- Creates shared understanding before pairing off

### 4. Guided Prompts & Decision Mechanics
Interaction happens through **structured prompts** rather than freeform chat:
- Icebreaker questions
- Group activities or challenges
- Progressive disclosure (reveal info as trust builds)
- Lightweight decision points (signal interest without commitment)

This pacing prevents premature intimacy and provides scaffolding for connection.

---

## Design Principles

### Intentionality Over Engagement
HeyPBJ optimizes for **successful connection**, not time-on-app. Users should spend *less* time in the system if it's working.

### Constraint-Based Matching
Small cohorts, explicit criteria, and pacing constraints make the space more legible. Instead of infinite choice, users get **good options with clear rationale**.

### Mutual Visibility
No hidden algorithms. Everyone sees:
- Why they were matched
- Compatibility scores and dimensions
- Who else is in their rundle
- How the system made decisions

### Context Before Chemistry
Compatibility data and group interaction provide **shared context** before one-on-one pairing. This reduces awkward cold-start conversations.

---

## Technical Architecture

**Frontend:**
- Progressive web app (PWA) for cross-platform access
- Client-side compatibility scoring for privacy
- Real-time interaction via WebSocket/AT Protocol events

**Backend (AT Protocol-based):**
- Decentralized identity (users own their data)
- Preference declarations as structured records
- Compatibility computation as composable service
- Rundle formation as routing layer
- Interaction history stays with user, not platform

**Matching Engine:**
- Multi-dimensional compatibility scoring
- Constraint satisfaction for cohort formation
- Pacing and decision mechanics
- Progressive disclosure rules

---

## User Journey

1. **Onboarding:** User declares preferences, priorities, and interaction style
2. **Matching:** System computes compatibility and forms rundles
3. **Introduction:** User receives cohort with transparency about why
4. **Interaction:** Guided prompts and group activities provide context
5. **Decision Points:** Lightweight signals to express interest in subgroups/individuals
6. **Pairing:** System suggests one-on-one connections within cohort based on mutual signals
7. **Iteration:** User refines preferences based on what worked

---

## What Makes This Different

### Not a Feed
No infinite scroll, no engagement maximization. Just periodic cohort assignments with clear rationale.

### Not Algorithmic Mystery
Users see exactly why they were matched and can adjust their preferences to improve future rundles.

### Not One-on-One from Start
Group context reduces pressure and provides richer compatibility data before pairing.

### Not Platform Lock-In
AT Protocol foundation means users own their data and can move between compatible services.

---

## Research Questions

HeyPBJ explores:
- Can **constraint-based matching** produce better outcomes than infinite choice?
- Do **small-group dynamics** provide better compatibility signals than profiles alone?
- Does **transparency** (showing the algorithm's work) increase trust and satisfaction?
- Can **pacing mechanisms** prevent burnout and premature ghosting?
- How do **portable identity and preferences** change platform power dynamics?

---

## Part of the AT Protocol Suite

HeyPBJ is one of several interconnected projects exploring decentralized infrastructure:
- [AT Protocol Projects](/work/atproto-projects) (Parent project)
- [Glowrm](/work/glowrm-trust-layer) (Trust and reputation layer)
- [Leafroll](/work/leafroll-professional-identity) (Professional identity)
- [Occupant](/work/occupant-ai-benchmarks) (Public data infrastructure)

**Glowrm integration:** HeyPBJ uses Glowrm's trust primitives for safety/moderation—users can carry reputation and verified credentials across networks.

**Leafroll integration:** Professional discovery rundles can pull from Leafroll profiles for skill-based matching and collaboration.

---

## What This Demonstrates

- **Decision-layer architecture in public contexts**: Routing systems, judgment frameworks, and compatibility mechanics that are transparent, auditable, and contestable
- **Constraint-based decision infrastructure**: Limits and structure create governable systems through cohort formation, weighted signals, and guided prompts
- **Transparent routing mechanics**: Compatibility scores and matching rationale establish accountability in automated systems
- **Judgment routing at human scale**: Small-group dynamics provide context before binary decisions—patterns applicable to case management, triage, and escalation
- **Governable automation**: Systems optimized for legible outcomes, demonstrating decision infrastructure serving human goals when properly instrumented
