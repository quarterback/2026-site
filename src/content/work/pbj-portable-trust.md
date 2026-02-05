---
title: "PBJ: Portable Trust and Intentional Allocation"
summary: "Dating app prototype exploring cross-platform reputation and scarcity mechanics."
systemType: "Trust infrastructure + decision architecture"
outcome: "Working prototype demonstrating portable identity and resource allocation"
order: 4
featured: false
tags: ["ATProto", "Trust Systems", "Prototype", "SPA"]
externalUrl: "https://heypbj.xyz"
---

> **Part of the Glowrm ecosystem** — PBJ uses [Glowrm](/work/glowrm) for cross-platform trust and Stratified Preference Allocation (SPA). Reputation earned here affects standing on Leafroll and Roomies.

## The problem

Modern platforms treat each interaction as isolated. When someone behaves badly on a dating app, they create a new account. When they're banned from one service, they move to another. Trust doesn't travel—and neither does accountability.

Meanwhile, users face a different problem: **decision fatigue from infinite options**. When every choice is low-stakes (a swipe costs nothing), people stop making meaningful decisions. They optimize for volume, not quality.

These are infrastructure problems masquerading as product problems. Most apps try to solve them with better moderation or smarter algorithms. But moderation is reactive, and algorithms can't fix the incentive structure.

## The intervention

PBJ is a prototype exploring two infrastructure-level interventions:

### Portable Trust via Glowrm

Glowrm is a cross-platform trust clearinghouse. Instead of each app maintaining its own reputation system, Glowrm provides shared infrastructure:

- **One DID, one reputation.** A user's trust score follows them across PBJ (dating), Leafroll (professional networking), and Roomies (roommate finding).
- **Consequences travel.** Bad behavior on PBJ—harassment, ghosting patterns, reports—impacts your ability to use other Glowrm-connected apps.
- **Positive signals compound.** Good behavior builds trust that's visible everywhere.

This creates accountability without centralized control. Each app decides what trust score threshold matters for their context, but the underlying signal is shared.

### Stratified Preference Allocation (SPA)

The "jar" system replaces unlimited swiping with constrained, tiered signaling:

- **Constrained selection.** Limited jars (k) vs. unlimited profiles (N). Scarcity forces meaningful prioritization instead of costless over-signaling.
- **Priority tiers.** Allocations are stratified—sending 8 jars signals something different than sending 2. Tier placement communicates preference intensity.
- **Quality-based capacity.** Your jar allocation scales with your Glowrm trust score. Better platform citizenship = more selection capacity.
- **Bilateral exchange.** Both people must invest before conversation opens. This isn't matching—it's mutual commitment with visible stakes.

The mechanic forces truthful preference signaling. When you only have 15 jars, you actually look at profiles. You make decisions instead of reflexively swiping.

## Architecture

PBJ separates data by who should control it:

| Data | Location | Controller | Portable? |
|------|----------|------------|-----------|
| Profile (photos, bio, interests) | User's ATProto repository | User | Yes |
| Reputation, jar balances | Glowrm | Infrastructure | Cross-app |
| Messages, match history | PBJ database | App | App-specific |

**ATProto for Identity:** Users authenticate via Bluesky OAuth, providing a decentralized identifier (DID) that they own. Profile data lives in their personal data repository. If PBJ disappears, users keep their identity and profile data.

**Glowrm for Trust:** When a user sends jars, PBJ reports the allocation to Glowrm. When users match, both receive positive reputation events. When someone gets reported, that affects their cross-platform score. PBJ doesn't calculate reputation—it consumes and contributes to shared infrastructure.

**Local Storage for Context:** Conversations and match history stay in PBJ's database. These are app-specific interactions that don't need to be portable.

## Design decisions

**Why jars instead of likes?** Likes are infinite and therefore meaningless. Jars are scarce and therefore signal intent. The name "jar" (peanut butter jar) reinforces that you're giving something, not just clicking something.

**Why variable amounts (1-10)?** Binary signals lose information. Letting users choose how many jars creates a richer signal that recipients can interpret.

**Why bilateral exchange, not algorithmic matching?** Traditional matching algorithms are black boxes. With bilateral jar exchange, both parties actively commit resources before anything happens. There's no "you matched!" notification—there's "you both invested."

**Why the "Pan" (save for later)?** Not every decision should be immediate. The Pan lets users bookmark profiles for 7 days, acknowledging that sometimes you need to sit with a decision.

## What this demonstrates

1. **Cross-platform trust is possible.** Glowrm shows that reputation can be shared without centralized identity. Apps maintain independence while contributing to collective accountability.

2. **Scarcity mechanics change behavior.** When resources are limited, people make intentional choices. This applies far beyond dating—to attention, engagement, access.

3. **Decentralized identity is ready.** ATProto provides production-grade infrastructure for user-owned identity. The protocol works; the ecosystem is emerging.

4. **Separation of concerns scales.** By clearly dividing what users own (identity/profile), what infrastructure manages (trust/allocation), and what apps control (context-specific data), you get portability without chaos.

## Learnings

**What worked:**
- The jar mechanic immediately changes browsing behavior—people slow down
- Cross-app reputation visibility makes consequences tangible
- ATProto auth is surprisingly smooth for users familiar with Bluesky

**What I'd iterate on:**
- The 15-jar weekly reset needs tuning—some users exhaust allocation quickly, others hoard
- Jar count visibility creates anxiety for some users; optional privacy mode worth exploring
- The "Pan" decay (7 days) might be too aggressive

**Infrastructure implications:**
- Glowrm could support more nuanced reputation facets (professional vs. social contexts)
- SPA mechanics could apply to many scarcity-appropriate domains: job applications, event RSVPs, feature requests
