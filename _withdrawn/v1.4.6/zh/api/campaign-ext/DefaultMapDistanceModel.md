---
title: "DefaultMapDistanceModel"
description: "DefaultMapDistanceModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 MapDistanceModel；公开成员 18 个（方法 15、属性 3、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMapDistanceModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMapDistanceModel : MapDistanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultMapDistanceModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs。它是一个 public 类，实现/继承 MapDistanceModel，继承链为 DefaultMapDistanceModel → MapDistanceModel → MBGameModel → GameModel。public/protected 成员共 18 个：15 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultMapDistanceModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultMapDistanceModel → MapDistanceModel → MBGameModel → GameModel。成员构成以方法为主（方法 15/18，属性 3/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegionSwitchCostFromLandToSea` | `public override int RegionSwitchCostFromLandToSea` | 属性 |
| `RegionSwitchCostFromSeaToLand` | `public override int RegionSwitchCostFromSeaToLand` | 属性 |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public override float MaximumSpawnDistanceForCompanionsAfterDisband` | 属性 |
| `RegisterDistanceCache` | `public override void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister)` | 方法 |
| `GetMaximumDistanceBetweenTwoConnectedSettlements` | `public override float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationCapabilities)` | 方法 |
| `GetLandRatioOfPathBetweenSettlements` | `public override float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)` | 方法 |
| `GetDistance` | `public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort = false, bool isTargetingPort = false, MobileParty.NavigationType navigationCapability = MobileParty.NavigationType.Default)` | 方法 |
| `GetDistance` | `public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)` | 方法 |
| `GetDistance` | `public override float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)` | 方法 |
| `GetDistance` | `public override float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)` | 方法 |
| `GetDistance` | `public override bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)` | 方法 |
| `GetDistance` | `public override float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType customCapability, out float landRatio)` | 方法 |
| `GetDistance` | `public override float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType customCapability)` | 方法 |
| `GetPortToGateDistanceForSettlement` | `public override float GetPortToGateDistanceForSettlement(Settlement settlement)` | 方法 |
| `PathExistBetweenPoints` | `public override bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)` | 方法 |
| `bool>GetClosestEntranceToFace` | `public override ValueTuple<Settlement, bool>GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities)` | 方法 |
| `MBReadOnlyList` | `public override MBReadOnlyList<Settlement>GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)` | 方法 |
| `GetTransitionCostAdjustment` | `public override float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MapDistanceModel](../MapDistanceModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
