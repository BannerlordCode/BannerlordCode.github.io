---
title: "EncyclopediaListItemComparer"
description: "EncyclopediaListItemComparer — class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaListItemComparer

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncyclopediaListItemComparer : IComparer<EncyclopediaListItemVM>`  
**Base:** `IComparer`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemComparer.cs`

## Overview

`EncyclopediaListItemComparer` is a rule or comparison type: it answers a yes/no or ordering question so that callers can sort, filter or gate behaviour without writing the condition inline.

It extends IComparer, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A rule is a named decision. Keep the condition pure and cheap — it may be evaluated once per entity per frame — and keep the effect outside it.

Prefer composing rules over branching inside one: a rule that reads as a single sentence is a rule you can trust when the data changes.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaListItemComparer`.
- **Instance members** (2): `SortController`, `Compare`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Compare` | method | Instance entry point. Takes 2 arguments: `EncyclopediaListItemVM x`, `EncyclopediaListItemVM y`. Returns `int`. |
| `SortController` | property | Instance entry point `EncyclopediaSortController` property. Read it for current state; a declared setter writes that state in place. |
| `EncyclopediaListItemComparer` | ctor | Instance entry point. Takes 1 argument: `EncyclopediaSortController sortController`. Returns ``. |

- Constructed as `public EncyclopediaListItemComparer(EncyclopediaSortController sortController)`.

## Usage Example

```csharp
var data = new EncyclopediaListItemComparer
{
    SortController = default,
};
```

## Risks and Boundaries

- Rules are evaluated in hot loops; avoid allocation inside the comparison.
- The null case is usually unhandled and shows up as an exception rather than a filtered-out entry.
- A rule that captures mutable state gives order-dependent results; keep it stateless.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemComparer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaListItemVM](../EncyclopediaListItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`.

Section: [api/viewmodel/](../) — the other types in this bucket.
