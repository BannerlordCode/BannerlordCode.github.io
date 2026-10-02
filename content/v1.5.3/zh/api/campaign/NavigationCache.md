---
title: "NavigationCache"
description: "NavigationCache 的自动生成类参考。"
---
# NavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NavigationCache<T> where T : ISettlementDataHolder `
**Base:** ISettlementDataHolder
**Source:** TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs

## 概述

`NavigationCache` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### FinalizeCacheInitialization
`protected void FinalizeCacheInitialization() `

### GetNeighbors
`public MBReadOnlyList<T> GetNeighbors(T settlement) `

### GetClosestSettlementToFaceIndex
`public T GetClosestSettlementToFaceIndex(int faceId,out bool isAtSea) `

### GenerateCacheData
`public void GenerateCacheData() `

### GetSettlementToSettlementDistanceWithLandRatio
`protected float GetSettlementToSettlementDistanceWithLandRatio(NavigationCacheElement<T> settlement1,NavigationCacheElement<T> settlement2,out float landRatio) `

### SetSettlementToSettlementDistanceWithLandRatio
`protected void SetSettlementToSettlementDistanceWithLandRatio(NavigationCacheElement<T> settlement1,NavigationCacheElement<T> settlement2,float distance,float landRatio) `

### AddNeighbor
`protected void AddNeighbor(T settlement1,T settlement2) `

### SetClosestSettlementToFaceIndex
`protected void SetClosestSettlementToFaceIndex(int faceId,NavigationCacheElement<T> settlement) `

### GetRealDistanceAndLandRatioBetweenSettlements
`protected abstract float GetRealDistanceAndLandRatioBetweenSettlements(NavigationCacheElement<T> settlement1,NavigationCacheElement<T> settlement2,out float landRatio)`

### GetCacheElement
`protected abstract T GetCacheElement(string settlementId)`
`protected abstract NavigationCacheElement<T> GetCacheElement(T settlement,bool isPortUsed)`

### GetLandRatioOfPath
`protected float GetLandRatioOfPath(NavigationPath path,Vec2 startPosition) `

### GetFaceRecordForPoint
`protected abstract void GetFaceRecordForPoint(Vec2 position,out bool isOnRegion1)`

### GenerateClosestSettlementToFaceCache
`protected void GenerateClosestSettlementToFaceCache() `

### GetNavMeshFaceCount
`protected abstract int GetNavMeshFaceCount()`

### GetNavMeshFaceCenterPosition
`protected abstract Vec2 GetNavMeshFaceCenterPosition(int faceIndex)`

### GetFaceRecordAtIndex
`protected abstract PathFaceRecord GetFaceRecordAtIndex(int faceIndex)`

### GetExcludedFaceIds
`protected abstract int[] GetExcludedFaceIds()`

### GetRegionSwitchCostTo0
`protected abstract int GetRegionSwitchCostTo0()`

### GetRegionSwitchCostTo1
`protected abstract int GetRegionSwitchCostTo1()`

### GenerateSettlementToSettlementDistanceCache
`protected void GenerateSettlementToSettlementDistanceCache() `

### GenerateNeighborSettlementsCache
`protected void GenerateNeighborSettlementsCache() `

### CheckBeingNeighbor
`protected bool CheckBeingNeighbor(List<T> settlementsToConsider,T settlement1,T settlement2) `
`protected abstract bool CheckBeingNeighbor(List<T> settlementsToConsider,T settlement1,T settlement2,bool useGate1,bool useGate2,out float foundDistance)`

### GetAllRegisteredSettlements
`protected abstract List<T> GetAllRegisteredSettlements()`

### GetUpdatedSettlementsForNeighborDetection
`protected List<T> GetUpdatedSettlementsForNeighborDetection(List<T> settlements) `

### GetRealPathDistanceFromPositionToSettlement
`protected abstract float GetRealPathDistanceFromPositionToSettlement(Vec2 checkPosition,PathFaceRecord currentFaceRecord,float maxDistanceToLookForPathDetection,T currentSettlementToLook,out bool isPort)`

### GetClosestSettlementToPosition
`protected T GetClosestSettlementToPosition(Vec2 checkPosition,PathFaceRecord currentFaceRecord,int[] excludedFaceIds,List<T> settlementRecords,int regionSwitchCostTo0,int regionSwitchCostTo1,float minPathScoreEverFound,out bool isPort,bool useEarlyOut = false) `

### GetClosestSettlementsToPositionInCache
`protected abstract IEnumerable<T> GetClosestSettlementsToPositionInCache(Vec2 checkPosition,List<T> settlements)`

### GetSceneXmlCrcValues
`public abstract void GetSceneXmlCrcValues(out uint sceneXmlCrc,out uint sceneNavigationMeshCrc)`

### GetSettlementsDistanceCacheFileForCapability
`public bool GetSettlementsDistanceCacheFileForCapability(string moduleId,out string filePath) `

### Serialize
`public void Serialize(string path) `

### Deserialize
`public void Deserialize(string path) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
