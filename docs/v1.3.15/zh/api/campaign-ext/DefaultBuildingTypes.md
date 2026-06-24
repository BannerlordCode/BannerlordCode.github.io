<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBuildingTypes`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBuildingTypes

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingTypes`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Settlements/Buildings/DefaultBuildingTypes.cs`

## 概述

`DefaultBuildingTypes` 位于 `TaleWorlds.CampaignSystem.Settlements.Buildings`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Buildings` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 使用示例

```csharp
var value = new DefaultBuildingTypes();
```

## 参见

- [完整类目录](../catalog)