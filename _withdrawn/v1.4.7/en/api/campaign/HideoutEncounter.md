---
title: "HideoutEncounter"
description: "HideoutEncounter — class in TaleWorlds.CampaignSystem.Encounters. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# HideoutEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class HideoutEncounter : LocationEncounter`  
**Base:** `LocationEncounter`  
**Source:** `TaleWorlds.CampaignSystem/Encounters/HideoutEncounter.cs`

## Overview

`HideoutEncounter` is a named type in the TaleWorlds.CampaignSystem.Encounters namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends LocationEncounter, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `HideoutEncounter`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `HideoutEncounter` | ctor | Instance entry point. Takes 1 argument: `Settlement settlement`. Returns ``. |

- Constructed as `public HideoutEncounter(Settlement settlement)`.

## Usage Example

```csharp
var hideoutEncounter = new HideoutEncounter(settlement);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Encounters/HideoutEncounter.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LocationEncounter](../LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.

Section: [api/campaign/](../) — the other types in this bucket.
