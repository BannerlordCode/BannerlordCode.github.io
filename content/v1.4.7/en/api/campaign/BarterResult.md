---
title: "BarterResult"
description: "BarterResult — class in TaleWorlds.CampaignSystem.BarterSystem. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# BarterResult

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BarterResult`  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/BarterResult.cs`

## Overview

`BarterResult` is a named type in the TaleWorlds.CampaignSystem.BarterSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BarterResult`.
- **Instance members** (1): `OfferedBarters`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OfferedBarters` | property | Instance entry point `List<Barterable>` property. Read it for current state; a declared setter writes that state in place. |
| `BarterResult` | ctor | Instance entry point. Takes 4 arguments: `Hero offererHero`, `Hero otherHero`, `List<Barterable> offeredBarters`, `bool isAccepted`. Returns ``. |

- Constructed as `public BarterResult(Hero offererHero, Hero otherHero, List<Barterable> offeredBarters, bool isAccepted)`.

## Usage Example

```csharp
var barterResult = new BarterResult(offererHero, otherHero, offeredBarters, isAccepted);
// Read current state through barterResult.OfferedBarters.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/BarterSystem/BarterResult.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Barterable](../Barterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.

Section: [api/campaign/](../) — the other types in this bucket.
