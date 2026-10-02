---
title: "DefaultMapDistanceModel"
description: "DefaultMapDistanceModel 的自动生成类参考。"
---
# DefaultMapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapDistanceModel : MapDistanceModel `
**Base:** MapDistanceModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs

## 概述

`DefaultMapDistanceModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RegisterDistanceCache
`public override void RegisterDistanceCache(MobileParty.NavigationType navigationCapability,MapDistanceModel.INavigationCache cacheToRegister) `

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public override float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationCapabilities) `

### GetLandRatioOfPathBetweenSettlements
`public override float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement,Settlement toSettlement,bool isFromPort,bool isTargetingPort) `

### GetDistance
`public override float GetDistance(Settlement fromSettlement,Settlement toSettlement,bool isFromPort = false,bool isTargetingPort = false,MobileParty.NavigationType navigationCapability = MobileParty.NavigationType.Default) `
`public override float GetDistance(Settlement fromSettlement,Settlement toSettlement,bool isFromPort,bool isTargetingPort,MobileParty.NavigationType navigationCapability,out float landRatio) `
`public override float GetDistance(MobileParty fromMobileParty,Settlement toSettlement,bool isTargetingPort,MobileParty.NavigationType customCapability,out float estimatedLandRatio) `
`public override float GetDistance(MobileParty fromMobileParty,MobileParty toMobileParty,MobileParty.NavigationType customCapability,out float landRatio) `
`public override bool GetDistance(MobileParty fromMobileParty,MobileParty toMobileParty,MobileParty.NavigationType customCapability,float maxDistance,out float distance,out float landRatio) `
`public override float GetDistance(in CampaignVec2 fromPoint,in CampaignVec2 toPoint,MobileParty.NavigationType customCapability,out float landRatio) `
`public override float GetDistance(MobileParty fromMobileParty,in CampaignVec2 toPoint,MobileParty.NavigationType customCapability,out float landRatio) `
`public override float GetDistance(Settlement fromSettlement,in CampaignVec2 toPoint,bool isFromPort,MobileParty.NavigationType customCapability) `

### GetPortToGateDistanceForSettlement
`public override float GetPortToGateDistanceForSettlement(Settlement settlement) `

### PathExistBetweenPoints
`public override bool PathExistBetweenPoints(in CampaignVec2 fromPoint,in CampaignVec2 toPoint,MobileParty.NavigationType navigationType) `

### GetClosestEntranceToFace
`public override ValueTuple<Settlement,bool> GetClosestEntranceToFace(PathFaceRecord face,MobileParty.NavigationType navigationCapabilities) `

### GetNeighborsOfFortification
`public override MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town,MobileParty.NavigationType navigationCapabilities) `

### GetTransitionCostAdjustment
`public override float GetTransitionCostAdjustment(Settlement settlement1,bool isFromPort,Settlement settlement2,bool isTargetingPort,bool fromIsCurrentlyAtSea,bool toIsCurrentlyAtSea) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
