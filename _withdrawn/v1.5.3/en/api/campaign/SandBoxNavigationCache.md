---
title: "SandBoxNavigationCache"
description: "Auto-generated class reference for SandBoxNavigationCache."
---
# SandBoxNavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxNavigationCache : NavigationCache<Settlement>,MapDistanceModel.INavigationCache `
**Base:** NavigationCache<Settlement>, MapDistanceModel.INavigationCache
**Source:** TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs

## Overview

Auto-generated stub for `SandBoxNavigationCache`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetCacheElement
`protected override Settlement GetCacheElement(string settlementId)`

### GetSceneXmlCrcValues
`public override void GetSceneXmlCrcValues(out uint sceneXmlCrc,out uint sceneNavigationMeshCrc)`

### GetNavMeshFaceCount
`protected override int GetNavMeshFaceCount()`

### GetNavMeshFaceCenterPosition
`protected override Vec2 GetNavMeshFaceCenterPosition(int faceIndex)`

### GetFaceRecordAtIndex
`protected override PathFaceRecord GetFaceRecordAtIndex(int faceIndex)`

### GetRegionSwitchCostTo0
`protected override int GetRegionSwitchCostTo0()`

### GetRegionSwitchCostTo1
`protected override int GetRegionSwitchCostTo1()`

### GetExcludedFaceIds
`protected override int[] GetExcludedFaceIds()`

### GetRealDistanceAndLandRatioBetweenSettlements
`protected override float GetRealDistanceAndLandRatioBetweenSettlements(NavigationCacheElement<Settlement> settlement1,NavigationCacheElement<Settlement> settlement2,out float landRatio)`

### GetFaceRecordForPoint
`protected override void GetFaceRecordForPoint(Vec2 position,out bool isOnRegion1)`

### CheckBeingNeighbor
`protected override bool CheckBeingNeighbor(List<Settlement> settlementsToConsider,Settlement settlement1,Settlement settlement2,bool useGate1,bool useGate2,out float distance)`

### GetRealPathDistanceFromPositionToSettlement
`protected override float GetRealPathDistanceFromPositionToSettlement(Vec2 checkPosition,PathFaceRecord currentFaceRecord,float maxDistanceToLookForPathDetection,Settlement currentSettlementToLook,out bool isPort)`

### GetClosestSettlementsToPositionInCache
`protected override IEnumerable<Settlement> GetClosestSettlementsToPositionInCache(Vec2 checkPosition,List<Settlement> settlements)`

### GetAllRegisteredSettlements
`protected override List<Settlement> GetAllRegisteredSettlements()`

### FinalizeInitialization
`public void FinalizeInitialization()`

## See Also

- [Section index](../)
