---
title: "DefaultBuildingTypes"
description: "DefaultBuildingTypes — class in TaleWorlds.CampaignSystem.Settlements.Buildings. 33 public members (31 static)."
---

<!-- v147-skeleton -->
# DefaultBuildingTypes

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Buildings`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultBuildingTypes`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Buildings/DefaultBuildingTypes.cs`

## Overview

`DefaultBuildingTypes` is a named type in the TaleWorlds.CampaignSystem.Settlements.Buildings namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DefaultBuildingTypes`.
- **Static entry points** (31): `SettlementFortifications`, `SettlementBarracks`, `SettlementTrainingFields`, `SettlementGuardHouse`, `SettlementTaxOffice`, `SettlementWarehouse`, ….
- **Data and constants** (1): `MaxBuildingLevel`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CastleBarracks` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleCastallansOffice` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleCraftmansQuarters` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleDailyDrills` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleDailyIrrigation` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleDailyRaiseTroops` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleDailySlackenGarrison` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleFarmlands` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleFortifications` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleGranary` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleGuardHouse` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleMason` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleRoadsAndPaths` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleSiegeWorkshop` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `CastleTrainingFields` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementBarracks` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementCourthouse` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementDailyFestivalAndGames` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementDailyHousing` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementDailyIrrigation` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementDailyTrainMilitia` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementFortifications` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementGuardHouse` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |
| `SettlementMarketplace` | property (static) | Static entry point `BuildingType` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public DefaultBuildingTypes()`.

9 further public members follow the same patterns.
## Usage Example

```csharp
var defaultBuildingTypes = new DefaultBuildingTypes();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Buildings/DefaultBuildingTypes.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BuildingType](../BuildingType/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.
- [BuildingEffectEnum](../BuildingEffectEnum/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.
- [BuildingEffectIncrementType](../BuildingEffectIncrementType/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.
- [Workshop](../Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.

Section: [api/campaign/](../) — the other types in this bucket.
