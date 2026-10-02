---
title: "MapDistanceModel"
description: "MapDistanceModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<MapDistanceModel>；公开成员 21 个（方法 15、属性 4、字段 1）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapDistanceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapDistanceModel : MBGameModel<MapDistanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

MapDistanceModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<MapDistanceModel>，继承链为 MapDistanceModel → MBGameModel → GameModel。public/protected 成员共 21 个：15 方法、4 属性、1 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapDistanceModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 MapDistanceModel → MBGameModel → GameModel。成员构成以方法为主（方法 15/21，属性 4/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegionSwitchCostFromLandToSea` | `public abstract int RegionSwitchCostFromLandToSea` | 属性 |
| `RegionSwitchCostFromSeaToLand` | `public abstract int RegionSwitchCostFromSeaToLand` | 属性 |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public abstract float MaximumSpawnDistanceForCompanionsAfterDisband` | 属性 |
| `GetMaximumDistanceBetweenTwoConnectedSettlements` | `public abstract float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationType);` | 方法 |
| `GetLandRatioOfPathBetweenSettlements` | `public abstract float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort);` | 方法 |
| `GetDistance` | `public abstract float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio);` | 方法 |
| `GetDistance` | `public abstract float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio);` | 方法 |
| `GetDistance` | `public abstract bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio);` | 方法 |
| `GetDistance` | `public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability);` | 方法 |
| `GetDistance` | `public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio);` | 方法 |
| `GetDistance` | `public abstract float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType, out float landRatio);` | 方法 |
| `GetDistance` | `public abstract float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType navigationType);` | 方法 |
| `GetPortToGateDistanceForSettlement` | `public abstract float GetPortToGateDistanceForSettlement(Settlement settlement);` | 方法 |
| `PathExistBetweenPoints` | `public abstract bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType);` | 方法 |
| `RegisterDistanceCache` | `public abstract void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister);` | 方法 |
| `bool>GetClosestEntranceToFace` | `public abstract ValueTuple<Settlement, bool>GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities);` | 方法 |
| `MBReadOnlyList` | `public abstract MBReadOnlyList<Settlement>GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities);` | 方法 |
| `GetTransitionCostAdjustment` | `public abstract float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea);` | 方法 |
| `PossibleMaximumMapBoundary` | `public const float PossibleMaximumMapBoundary` | 字段 |
| `INavigationCache` | `public interface INavigationCache` | 属性 |
| `INavigationCache` | `public interface INavigationCache` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
