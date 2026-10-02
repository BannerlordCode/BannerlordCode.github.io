---
title: "FiefBarterGroup"
description: "FiefBarterGroup — class in TaleWorlds.CampaignSystem.BarterSystem. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# FiefBarterGroup

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class FiefBarterGroup : BarterGroup`  
**Base:** `BarterGroup`  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/FiefBarterGroup.cs`

## Overview

`FiefBarterGroup` is a named type in the TaleWorlds.CampaignSystem.BarterSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends BarterGroup, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `AIDecisionWeight`.
- **Extension points** (1): `AIDecisionWeight`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AIDecisionWeight` | property (override) | Overrides the base member `float` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// FiefBarterGroup is read through its properties:
//   AIDecisionWeight : float
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/BarterSystem/FiefBarterGroup.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BarterGroup](../BarterGroup/) — `TaleWorlds.CampaignSystem.BarterSystem`.

Section: [api/campaign/](../) — the other types in this bucket.
