---
title: "MapDistanceModel"
description: "Auto-generated class reference for MapDistanceModel."
---
# MapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapDistanceModel : MBGameModel<MapDistanceModel> `
**Base:** MBGameModel<MapDistanceModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs

## Overview

Auto-generated stub for `MapDistanceModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public abstract float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationType)`

### GetLandRatioOfPathBetweenSettlements
`public abstract float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement,Settlement toSettlement,bool isFromPort,bool isTargetingPort)`

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty,Settlement toSettlement,bool isTargetingPort,MobileParty.NavigationType customCapability,out float estimatedLandRatio)`

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

## See Also

- [Section index](../)
