---
title: "MapDistanceModel"
description: "MapDistanceModel 的自动生成类参考。"
---
# MapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapDistanceModel : MBGameModel<MapDistanceModel> `
**Base:** MBGameModel<MapDistanceModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs

## 概述

`MapDistanceModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public abstract float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationType)`

### GetLandRatioOfPathBetweenSettlements
`public abstract float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement,Settlement toSettlement,bool isFromPort,bool isTargetingPort)`

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty,Settlement toSettlement,bool isTargetingPort,MobileParty.NavigationType customCapability,out float estimatedLandRatio)`
`public abstract float GetDistance(MobileParty fromMobileParty,MobileParty toMobileParty,MobileParty.NavigationType customCapability,out float landRatio)`
`public abstract bool GetDistance(MobileParty fromMobileParty,MobileParty toMobileParty,MobileParty.NavigationType customCapability,float maxDistance,out float distance,out float landRatio)`
`public abstract float GetDistance(Settlement fromSettlement,Settlement toSettlement,bool isFromPort,bool isTargetingPort,MobileParty.NavigationType navigationCapability)`
`public abstract float GetDistance(Settlement fromSettlement,Settlement toSettlement,bool isFromPort,bool isTargetingPort,MobileParty.NavigationType navigationCapability,out float landRatio)`
`public abstract float GetDistance(MobileParty fromMobileParty,in CampaignVec2 toPoint,MobileParty.NavigationType navigationType,out float landRatio)`
`public abstract float GetDistance(in CampaignVec2 fromPoint,in CampaignVec2 toPoint,MobileParty.NavigationType navigationType,out float landRatio)`
`public abstract float GetDistance(Settlement fromSettlement,in CampaignVec2 toPoint,bool isFromPort,MobileParty.NavigationType navigationType)`

### GetPortToGateDistanceForSettlement
`public abstract float GetPortToGateDistanceForSettlement(Settlement settlement)`

### PathExistBetweenPoints
`public abstract bool PathExistBetweenPoints(in CampaignVec2 fromPoint,in CampaignVec2 toPoint,MobileParty.NavigationType navigationType)`

### RegisterDistanceCache
`public abstract void RegisterDistanceCache(MobileParty.NavigationType navigationCapability,MapDistanceModel.INavigationCache cacheToRegister)`

### GetClosestEntranceToFace
`public abstract ValueTuple<Settlement,bool> GetClosestEntranceToFace(PathFaceRecord face,MobileParty.NavigationType navigationCapabilities)`

### GetNeighborsOfFortification
`public abstract MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town,MobileParty.NavigationType navigationCapabilities)`

### GetTransitionCostAdjustment
`public abstract float GetTransitionCostAdjustment(Settlement settlement1,bool isFromPort,Settlement settlement2,bool isTargetingPort,bool fromIsCurrentlyAtSea,bool toIsCurrentlyAtSea)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
