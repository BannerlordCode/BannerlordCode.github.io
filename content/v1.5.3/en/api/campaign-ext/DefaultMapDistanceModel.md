---
title: "DefaultMapDistanceModel"
description: "Auto-generated class reference for DefaultMapDistanceModel."
---
# DefaultMapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapDistanceModel : MapDistanceModel `
**Base:** MapDistanceModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs

## Overview

Auto-generated stub for `DefaultMapDistanceModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RegisterDistanceCache
`public override void RegisterDistanceCache(MobileParty.NavigationType navigationCapability,MapDistanceModel.INavigationCache cacheToRegister)`

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public override float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationCapabilities)`

### GetLandRatioOfPathBetweenSettlements
`public override float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement,Settlement toSettlement,bool isFromPort,bool isTargetingPort)`

### GetDistance
`public override float GetDistance(Settlement fromSettlement,Settlement toSettlement,bool isFromPort = false,bool isTargetingPort = false,MobileParty.NavigationType navigationCapability = MobileParty.NavigationType.Default)`

### GetPortToGateDistanceForSettlement
`public override float GetPortToGateDistanceForSettlement(Settlement settlement)`

### PathExistBetweenPoints
`public override bool PathExistBetweenPoints(in CampaignVec2 fromPoint,in CampaignVec2 toPoint,MobileParty.NavigationType navigationType)`

### GetClosestEntranceToFace
`public override ValueTuple<Settlement,bool> GetClosestEntranceToFace(PathFaceRecord face,MobileParty.NavigationType navigationCapabilities)`

### GetNeighborsOfFortification
`public override MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town,MobileParty.NavigationType navigationCapabilities)`

### GetTransitionCostAdjustment
`public override float GetTransitionCostAdjustment(Settlement settlement1,bool isFromPort,Settlement settlement2,bool isTargetingPort,bool fromIsCurrentlyAtSea,bool toIsCurrentlyAtSea)`

## See Also

- [Section index](../)
