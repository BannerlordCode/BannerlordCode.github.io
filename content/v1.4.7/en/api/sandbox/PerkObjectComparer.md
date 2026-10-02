---
title: "PerkObjectComparer"
description: "PerkObjectComparer — class in SandBox.ViewModelCollection. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# PerkObjectComparer

**Namespace:** `SandBox.ViewModelCollection`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class PerkObjectComparer : IComparer<PerkObject>`  
**Base:** `IComparer`  
**Source:** `SandBox.ViewModelCollection/PerkObjectComparer.cs`

## Overview

`PerkObjectComparer` is a rule or comparison type: it answers a yes/no or ordering question so that callers can sort, filter or gate behaviour without writing the condition inline.

It extends IComparer, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A rule is a named decision. Keep the condition pure and cheap — it may be evaluated once per entity per frame — and keep the effect outside it.

Prefer composing rules over branching inside one: a rule that reads as a single sentence is a rule you can trust when the data changes.

Concretely, the surface breaks down like this:

- **Instance members** (1): `Compare`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Compare` | method | Instance entry point. Takes 2 arguments: `PerkObject x`, `PerkObject y`. Returns `int`. |

## Usage Example

```csharp
PerkObjectComparer.Compare(x, y);
```

## Risks and Boundaries

- Rules are evaluated in hot loops; avoid allocation inside the comparison.
- The null case is usually unhandled and shows up as an exception rather than a filtered-out entry.
- A rule that captures mutable state gives order-dependent results; keep it stateless.
- The declaration in `SandBox.ViewModelCollection/PerkObjectComparer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CampaignUIHelper](../../viewmodel/CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.

Section: [api/sandbox/](../) — the other types in this bucket.
