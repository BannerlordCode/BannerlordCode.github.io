---
title: "BannerVisualCreator"
description: "BannerVisualCreator — class in TaleWorlds.MountAndBlade.View. No public members of its own."
---

<!-- v147-skeleton -->
# BannerVisualCreator

**Namespace:** `TaleWorlds.MountAndBlade.View`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class BannerVisualCreator : IBannerVisualCreator`  
**Base:** `IBannerVisualCreator`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisualCreator.cs`

## Overview

`BannerVisualCreator` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends IBannerVisualCreator, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on BannerVisualCreator itself in `TaleWorlds.MountAndBlade.View`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// BannerVisualCreator exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisualCreator.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerVisual](../BannerVisual/) — `TaleWorlds.MountAndBlade.View`.

Section: [api/mission-ext/](../) — the other types in this bucket.
