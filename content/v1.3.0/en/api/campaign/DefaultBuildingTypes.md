---
title: "DefaultBuildingTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBuildingTypes`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBuildingTypes

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingTypes`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/Buildings/DefaultBuildingTypes.cs`

## Overview

`DefaultBuildingTypes` lives in `TaleWorlds.CampaignSystem.Settlements.Buildings` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Buildings` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SettlementFortifications` | `public static BuildingType SettlementFortifications { get; }` |
| `SettlementBarracks` | `public static BuildingType SettlementBarracks { get; }` |
| `SettlementTrainingFields` | `public static BuildingType SettlementTrainingFields { get; }` |
| `SettlementGuardHouse` | `public static BuildingType SettlementGuardHouse { get; }` |
| `SettlementTaxOffice` | `public static BuildingType SettlementTaxOffice { get; }` |
| `SettlementWarehouse` | `public static BuildingType SettlementWarehouse { get; }` |
| `SettlementMason` | `public static BuildingType SettlementMason { get; }` |
| `SettlementSiegeWorkshop` | `public static BuildingType SettlementSiegeWorkshop { get; }` |
| `SettlementWaterworks` | `public static BuildingType SettlementWaterworks { get; }` |
| `SettlementCourthouse` | `public static BuildingType SettlementCourthouse { get; }` |
| `SettlementMarketplace` | `public static BuildingType SettlementMarketplace { get; }` |
| `SettlementRoadsAndPaths` | `public static BuildingType SettlementRoadsAndPaths { get; }` |
| `CastleFortifications` | `public static BuildingType CastleFortifications { get; }` |
| `CastleBarracks` | `public static BuildingType CastleBarracks { get; }` |
| `CastleTrainingFields` | `public static BuildingType CastleTrainingFields { get; }` |
| `CastleGuardHouse` | `public static BuildingType CastleGuardHouse { get; }` |
| `CastleCastallansOffice` | `public static BuildingType CastleCastallansOffice { get; }` |
| `CastleSiegeWorkshop` | `public static BuildingType CastleSiegeWorkshop { get; }` |
| `CastleCraftmansQuarters` | `public static BuildingType CastleCraftmansQuarters { get; }` |
| `CastleFarmlands` | `public static BuildingType CastleFarmlands { get; }` |
| `CastleGranary` | `public static BuildingType CastleGranary { get; }` |
| `CastleMason` | `public static BuildingType CastleMason { get; }` |
| `CastleRoadsAndPaths` | `public static BuildingType CastleRoadsAndPaths { get; }` |
| `SettlementDailyHousing` | `public static BuildingType SettlementDailyHousing { get; }` |
| `SettlementDailyTrainMilitia` | `public static BuildingType SettlementDailyTrainMilitia { get; }` |
| `SettlementDailyFestivalAndGames` | `public static BuildingType SettlementDailyFestivalAndGames { get; }` |
| `SettlementDailyIrrigation` | `public static BuildingType SettlementDailyIrrigation { get; }` |
| `CastleDailySlackenGarrison` | `public static BuildingType CastleDailySlackenGarrison { get; }` |
| `CastleDailyRaiseTroops` | `public static BuildingType CastleDailyRaiseTroops { get; }` |
| `CastleDailyDrills` | `public static BuildingType CastleDailyDrills { get; }` |
| `CastleDailyIrrigation` | `public static BuildingType CastleDailyIrrigation { get; }` |

## Usage Example

```csharp
var example = new DefaultBuildingTypes();
```

## See Also

- [Complete Class Catalog](../catalog)