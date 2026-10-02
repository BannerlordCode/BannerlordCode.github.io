---
title: "EncyclopediaListItemNameComparer"
description: "EncyclopediaListItemNameComparer — class in TaleWorlds.CampaignSystem.Encyclopedia. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaListItemNameComparer

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `internal class EncyclopediaListItemNameComparer : EncyclopediaListItemComparerBase`  
**Base:** `EncyclopediaListItemComparerBase`  
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemNameComparer.cs`

## Overview

`EncyclopediaListItemNameComparer` is an internal class in TaleWorlds.CampaignSystem.Encyclopedia. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`EncyclopediaListItemNameComparer` is a rule or comparison type: it answers a yes/no or ordering question so that callers can sort, filter or gate behaviour without writing the condition inline.

It extends EncyclopediaListItemComparerBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A rule is a named decision. Keep the condition pure and cheap — it may be evaluated once per entity per frame — and keep the effect outside it.

Prefer composing rules over branching inside one: a rule that reads as a single sentence is a rule you can trust when the data changes.

Concretely, the surface breaks down like this:

- **Instance members** (2): `Compare`, `GetComparedValueText`.
- **Extension points** (2): `Compare`, `GetComparedValueText`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Compare` | method (override) | Overrides the base member. Takes 2 arguments: `EncyclopediaListItem x`, `EncyclopediaListItem y`. Returns `int`. |
| `GetComparedValueText` | method (override) | Overrides the base member. Takes 1 argument: `EncyclopediaListItem item`. Returns `string`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// EncyclopediaListItemNameComparer is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   Compare(`EncyclopediaListItem x`, `EncyclopediaListItem y`)
//     int
//   GetComparedValueText(`EncyclopediaListItem item`)
//     string
```

## Risks and Boundaries

- Rules are evaluated in hot loops; avoid allocation inside the comparison.
- The null case is usually unhandled and shows up as an exception rather than a filtered-out entry.
- A rule that captures mutable state gives order-dependent results; keep it stateless.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemNameComparer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaListItemComparerBase](../EncyclopediaListItemComparerBase/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaListItem](../EncyclopediaListItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/campaign/](../) — the other types in this bucket.
