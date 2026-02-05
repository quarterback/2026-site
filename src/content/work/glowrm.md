---
title: "Glowrm"
summary: "Trust infrastructure for decentralized social apps—like a credit bureau for online reputation"
systemType: "Infrastructure + API Platform"
outcome: "3 apps connected, 1,500+ users"
order: 5
featured: true
tags: ["Infrastructure", "API Design", "Trust Systems", "ATProto"]
---

## The problem

Every social app reinvents the wheel on trust. Dating apps build their own reputation systems. Professional networks create their own verification flows. Roommate finders develop their own safety checks. None of them talk to each other.

This creates two failures:
1. **Bad actors hop between apps** — Get banned from one dating app? Just sign up for another. Your reputation doesn't follow you.
2. **Good users start from zero everywhere** — Built years of positive reputation on one platform? It means nothing when you try a new app.

The ATProto ecosystem (Bluesky and apps built on it) needed shared trust infrastructure, not another siloed reputation system.

## The approach

I designed Glowrm as infrastructure, not a feature. Think Experian for social apps—a reputation bureau that apps plug into rather than build themselves.

**Key design decisions:**

- **Generic "units" architecture** — Instead of building for one use case, I created a flexible resource allocation system. Dating apps use "jars." Professional networks use "credits." Roommate apps use "waves." Same infrastructure, different semantics.

- **Simple API surface** — Apps report trust events (positive interactions, reports, blocks, bans). Glowrm calculates reputation. Apps query eligibility. That's it.

- **Reputation that travels** — A user's 20-80 trust score follows them across every connected app. Bad behavior on a dating app affects your standing on a professional network.

## The solution

Glowrm provides three core services:

**1. Cross-App Reputation**
Trust scores on a 20-80 scale that reflect behavior across all connected apps. The score weights recent activity, considers event severity, and updates in real-time.

**2. Trust Event Logging**
A unified API for apps to report user behavior—positive interactions boost reputation, reports and blocks decrease it, bans set it to minimum.

**3. Strategic Profile Allocation (SPA)**
Configurable resource limits that prevent spam and encourage intentional interaction. Each app defines its own unit mechanics while Glowrm handles the accounting.

## What shipped

- Production API serving 3 connected applications
- Enterprise-scale demo with 1,500 users and 20,000+ events
- Admin dashboard for monitoring trust events and reputation distribution
- Public documentation for developer integration
- Reference implementations showing integration patterns

## What I learned

Building infrastructure requires saying no to features. Apps wanted Glowrm to handle communities, groups, and segmentation. I kept pushing back: that's app logic, not trust infrastructure. The simpler the core, the more apps could plug in without friction.

The hardest part wasn't the code—it was the positioning. "Reputation API" sounds boring. "Credit bureau for social apps" clicked immediately.
