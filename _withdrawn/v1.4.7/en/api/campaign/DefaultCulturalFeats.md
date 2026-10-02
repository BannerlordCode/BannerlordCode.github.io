---
title: "DefaultCulturalFeats"
description: "DefaultCulturalFeats — class in TaleWorlds.CampaignSystem.CharacterDevelopment. 19 public members (18 static)."
---

<!-- v147-skeleton -->
# DefaultCulturalFeats

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultCulturalFeats`  
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultCulturalFeats.cs`

## Overview

`DefaultCulturalFeats` is a named type in the TaleWorlds.CampaignSystem.CharacterDevelopment namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DefaultCulturalFeats`.
- **Static entry points** (18): `AseraiTraderFeat`, `AseraiDesertFeat`, `AseraiIncreasedWageFeat`, `BattanianForestSpeedFeat`, `BattanianMilitiaFeat`, `BattanianConstructionFeat`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AseraiDesertFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `AseraiIncreasedWageFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `AseraiTraderFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `BattanianConstructionFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `BattanianForestSpeedFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `BattanianMilitiaFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `EmpireArmyInfluenceFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `EmpireGarrisonWageFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `EmpireVillageHearthFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `KhuzaitAnimalProductionFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `KhuzaitDecreasedTaxFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `KhuzaitRecruitUpgradeFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `SturgianArmyInfluenceCostFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `SturgianDecisionPenaltyFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `SturgianGrainProductionFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `VlandianArmyInfluenceFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `VlandianCastleVillageProductionFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `VlandianRenownMercenaryFeat` | property (static) | Static entry point `FeatObject` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultCulturalFeats` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DefaultCulturalFeats()`.

## Usage Example

```csharp
var defaultCulturalFeats = new DefaultCulturalFeats();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultCulturalFeats.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [FeatObject](../FeatObject/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.

Section: [api/campaign/](../) — the other types in this bucket.
