---
title: "SandBoxNavigationCache"
description: "SandBoxNavigationCache 的自动生成类参考。"
---
# SandBoxNavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxNavigationCache : NavigationCache<Settlement>,MapDistanceModel.INavigationCache `
**Base:** NavigationCache<Settlement>,MapDistanceModel.INavigationCache
**Source:** TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs

## 概述

`SandBoxNavigationCache` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetCacheElement
`protected override Settlement GetCacheElement(string settlementId) `
`protected override NavigationCacheElement<Settlement> GetCacheElement(Settlement settlement,bool isPortUsed) `

### GetSceneXmlCrcValues
`public override void GetSceneXmlCrcValues(out uint sceneXmlCrc,out uint sceneNavigationMeshCrc) `

### GetNavMeshFaceCount
`protected override int GetNavMeshFaceCount() `

### GetNavMeshFaceCenterPosition
`protected override Vec2 GetNavMeshFaceCenterPosition(int faceIndex) `

### GetFaceRecordAtIndex
`protected override PathFaceRecord GetFaceRecordAtIndex(int faceIndex) `

### GetRegionSwitchCostTo0
`protected override int GetRegionSwitchCostTo0() `

### GetRegionSwitchCostTo1
`protected override int GetRegionSwitchCostTo1() `

### GetExcludedFaceIds
`protected override int[] GetExcludedFaceIds() `

### GetRealDistanceAndLandRatioBetweenSettlements
`protected override float GetRealDistanceAndLandRatioBetweenSettlements(NavigationCacheElement<Settlement> settlement1,NavigationCacheElement<Settlement> settlement2,out float landRatio) `

### GetFaceRecordForPoint
`protected override void GetFaceRecordForPoint(Vec2 position,out bool isOnRegion1) `

### CheckBeingNeighbor
`protected override bool CheckBeingNeighbor(List<Settlement> settlementsToConsider,Settlement settlement1,Settlement settlement2,bool useGate1,bool useGate2,out float distance) `

### GetRealPathDistanceFromPositionToSettlement
`protected override float GetRealPathDistanceFromPositionToSettlement(Vec2 checkPosition,PathFaceRecord currentFaceRecord,float maxDistanceToLookForPathDetection,Settlement currentSettlementToLook,out bool isPort) `

### GetClosestSettlementsToPositionInCache
`protected override IEnumerable<Settlement> GetClosestSettlementsToPositionInCache(Vec2 checkPosition,List<Settlement> settlements) `

### GetAllRegisteredSettlements
`protected override List<Settlement> GetAllRegisteredSettlements() `

### FinalizeInitialization
`public void FinalizeInitialization() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
