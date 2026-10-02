---
title: "BarterGroup"
description: "BarterGroup — class in TaleWorlds.CampaignSystem.BarterSystem. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# BarterGroup

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class BarterGroup`  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/BarterGroup.cs`

## Overview

`BarterGroup` is a named type in the TaleWorlds.CampaignSystem.BarterSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `AIDecisionWeight`.
- **Extension points** (1): `AIDecisionWeight`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AIDecisionWeight` | property (abstract) | Abstract — a subclass must supply it `float` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// BarterGroup is read through its properties:
//   AIDecisionWeight : float
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/BarterSystem/BarterGroup.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
