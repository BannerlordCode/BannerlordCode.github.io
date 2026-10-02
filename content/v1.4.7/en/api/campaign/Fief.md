---
title: "Fief"
description: "Fief — class in TaleWorlds.CampaignSystem.Settlements. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# Fief

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class Fief : SettlementComponent`  
**Base:** `SettlementComponent`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Fief.cs`

## Overview

`Fief` is a named type in the TaleWorlds.CampaignSystem.Settlements namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends SettlementComponent, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `Militia`, `GarrisonParty`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GarrisonParty` | property | Instance entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `Militia` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Fief is read through its properties:
//   Militia : float
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Fief.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [GarrisonPartyComponent](../GarrisonPartyComponent/) — `TaleWorlds.CampaignSystem.Party.PartyComponents`.

Section: [api/campaign/](../) — the other types in this bucket.
