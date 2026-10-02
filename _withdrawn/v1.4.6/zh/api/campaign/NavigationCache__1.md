---
title: "NavigationCache<T>"
description: "NavigationCache<T>：TaleWorlds.CampaignSystem.Map.DistanceCache 的 public 类，继承 ISettlementDataHolder；公开成员 38 个（方法 34、属性 1、字段 2）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NavigationCache<T>

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class NavigationCache<T>where T : ISettlementDataHolder`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

NavigationCache<T> 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs。它是一个 public 类（abstract），实现/继承 ISettlementDataHolder，继承链为 NavigationCache → ISettlementDataHolder。public/protected 成员共 38 个：34 方法、1 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NavigationCache<T> 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Map.DistanceCache`，继承链 NavigationCache → ISettlementDataHolder。成员构成以方法为主（方法 34/38，属性 1/38），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumDistanceBetweenTwoConnectedSettlements` | `public float MaximumDistanceBetweenTwoConnectedSettlements` | 属性 |
| `NavigationCache` | `protected NavigationCache(MobileParty.NavigationType navigationType)` | 构造函数 |
| `FinalizeCacheInitialization` | `protected void FinalizeCacheInitialization()` | 方法 |
| `CopyTo` | `public static void CopyTo<T1>(NavigationCache<T1>source, NavigationCache<T>target) where T1 : ISettlementDataHolder` | 方法 |
| `MBReadOnlyList` | `public MBReadOnlyList<T>GetNeighbors(T settlement)` | 方法 |
| `GetClosestSettlementToFaceIndex` | `public T GetClosestSettlementToFaceIndex(int faceId, out bool isAtSea)` | 方法 |
| `GenerateCacheData` | `public void GenerateCacheData()` | 方法 |
| `GetSettlementToSettlementDistanceWithLandRatio` | `protected float GetSettlementToSettlementDistanceWithLandRatio(NavigationCacheElement<T>settlement1, NavigationCacheElement<T>settlement2, out float landRatio)` | 方法 |
| `SetSettlementToSettlementDistanceWithLandRatio` | `protected void SetSettlementToSettlementDistanceWithLandRatio(NavigationCacheElement<T>settlement1, NavigationCacheElement<T>settlement2, float distance, float landRatio)` | 方法 |
| `AddNeighbor` | `protected void AddNeighbor(T settlement1, T settlement2)` | 方法 |
| `SetClosestSettlementToFaceIndex` | `protected void SetClosestSettlementToFaceIndex(int faceId, NavigationCacheElement<T>settlement)` | 方法 |
| `GetRealDistanceAndLandRatioBetweenSettlements` | `protected abstract float GetRealDistanceAndLandRatioBetweenSettlements(NavigationCacheElement<T>settlement1, NavigationCacheElement<T>settlement2, out float landRatio);` | 方法 |
| `GetCacheElement` | `protected abstract T GetCacheElement(string settlementId);` | 方法 |
| `NavigationCacheElement` | `protected abstract NavigationCacheElement<T>GetCacheElement(T settlement, bool isPortUsed);` | 方法 |
| `GetLandRatioOfPath` | `protected float GetLandRatioOfPath(NavigationPath path, Vec2 startPosition)` | 方法 |
| `GetFaceRecordForPoint` | `protected abstract void GetFaceRecordForPoint(Vec2 position, out bool isOnRegion1);` | 方法 |
| `GenerateClosestSettlementToFaceCache` | `protected void GenerateClosestSettlementToFaceCache()` | 方法 |
| `GetNavMeshFaceCount` | `protected abstract int GetNavMeshFaceCount();` | 方法 |
| `GetNavMeshFaceCenterPosition` | `protected abstract Vec2 GetNavMeshFaceCenterPosition(int faceIndex);` | 方法 |
| `GetFaceRecordAtIndex` | `protected abstract PathFaceRecord GetFaceRecordAtIndex(int faceIndex);` | 方法 |
| `int[]GetExcludedFaceIds` | `protected abstract int[]GetExcludedFaceIds();` | 方法 |
| `GetRegionSwitchCostTo0` | `protected abstract int GetRegionSwitchCostTo0();` | 方法 |
| `GetRegionSwitchCostTo1` | `protected abstract int GetRegionSwitchCostTo1();` | 方法 |
| `GenerateSettlementToSettlementDistanceCache` | `protected void GenerateSettlementToSettlementDistanceCache()` | 方法 |
| `GenerateNeighborSettlementsCache` | `protected void GenerateNeighborSettlementsCache()` | 方法 |
| `CheckBeingNeighbor` | `protected bool CheckBeingNeighbor(List<T>settlementsToConsider, T settlement1, T settlement2)` | 方法 |
| `List` | `protected abstract List<T>GetAllRegisteredSettlements();` | 方法 |
| `List` | `protected List<T>GetUpdatedSettlementsForNeighborDetection(List<T>settlements)` | 方法 |
| `CheckBeingNeighbor` | `protected abstract bool CheckBeingNeighbor(List<T>settlementsToConsider, T settlement1, T settlement2, bool useGate1, bool useGate2, out float foundDistance);` | 方法 |
| `GetRealPathDistanceFromPositionToSettlement` | `protected abstract float GetRealPathDistanceFromPositionToSettlement(Vec2 checkPosition, PathFaceRecord currentFaceRecord, float maxDistanceToLookForPathDetection, T currentSettlementToLook, out bool isPort);` | 方法 |
| `GetClosestSettlementToPosition` | `protected T GetClosestSettlementToPosition(Vec2 checkPosition, PathFaceRecord currentFaceRecord, int[]excludedFaceIds, List<T>settlementRecords, int regionSwitchCostTo0, int regionSwitchCostTo1, float minPathScoreEverFound, out bool isPort)` | 方法 |
| `IEnumerable` | `protected abstract IEnumerable<T>GetClosestSettlementsToPositionInCache(Vec2 checkPosition, List<T>settlements);` | 方法 |
| `GetSceneXmlCrcValues` | `public abstract void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc);` | 方法 |
| `GetSettlementsDistanceCacheFileForCapability` | `public bool GetSettlementsDistanceCacheFileForCapability(string moduleId, out string filePath)` | 方法 |
| `Serialize` | `public void Serialize(string path)` | 方法 |
| `Deserialize` | `public void Deserialize(string path)` | 方法 |
| `AgentRadius` | `protected const float AgentRadius` | 字段 |
| `ExtraCostMultiplierForNeighborDetection` | `protected const float ExtraCostMultiplierForNeighborDetection` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ISettlementDataHolder](../ISettlementDataHolder/)
- [同命名空间 ISettlementDataHolder](../ISettlementDataHolder/)
- [同命名空间 NavigationCacheElement](../NavigationCacheElement__1/)
- [同命名空间 SandBoxNavigationCache](../SandBoxNavigationCache/)
