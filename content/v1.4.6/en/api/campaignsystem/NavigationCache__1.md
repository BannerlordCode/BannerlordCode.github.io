---
title: "NavigationCache<T>"
description: "NavigationCache<T>: a public class in TaleWorlds.CampaignSystem, inheriting ISettlementDataHolder; 38 exposed members (34 methods, 1 properties, 2 fields). Source: TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs."
---
# NavigationCache<T>

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class NavigationCache<T>where T : ISettlementDataHolder`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs`

## Overview

NavigationCache<T> lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs. It is a public class (abstract), implementing/inheriting ISettlementDataHolder; the inheritance chain is NavigationCache → ISettlementDataHolder. It exposes 38 public/protected members: 34 methods, 1 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NavigationCache<T> is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Map.DistanceCache) the module directory; inheritance chain NavigationCache → ISettlementDataHolder. The surface is method-led (methods 34/38, properties 1/38), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumDistanceBetweenTwoConnectedSettlements` | `public float MaximumDistanceBetweenTwoConnectedSettlements` | property |
| `NavigationCache` | `protected NavigationCache(MobileParty.NavigationType navigationType)` | constructor |
| `FinalizeCacheInitialization` | `protected void FinalizeCacheInitialization()` | method |
| `CopyTo` | `public static void CopyTo<T1>(NavigationCache<T1>source, NavigationCache<T>target) where T1 : ISettlementDataHolder` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<T>GetNeighbors(T settlement)` | method |
| `GetClosestSettlementToFaceIndex` | `public T GetClosestSettlementToFaceIndex(int faceId, out bool isAtSea)` | method |
| `GenerateCacheData` | `public void GenerateCacheData()` | method |
| `GetSettlementToSettlementDistanceWithLandRatio` | `protected float GetSettlementToSettlementDistanceWithLandRatio(NavigationCacheElement<T>settlement1, NavigationCacheElement<T>settlement2, out float landRatio)` | method |
| `SetSettlementToSettlementDistanceWithLandRatio` | `protected void SetSettlementToSettlementDistanceWithLandRatio(NavigationCacheElement<T>settlement1, NavigationCacheElement<T>settlement2, float distance, float landRatio)` | method |
| `AddNeighbor` | `protected void AddNeighbor(T settlement1, T settlement2)` | method |
| `SetClosestSettlementToFaceIndex` | `protected void SetClosestSettlementToFaceIndex(int faceId, NavigationCacheElement<T>settlement)` | method |
| `GetRealDistanceAndLandRatioBetweenSettlements` | `protected abstract float GetRealDistanceAndLandRatioBetweenSettlements(NavigationCacheElement<T>settlement1, NavigationCacheElement<T>settlement2, out float landRatio);` | method |
| `GetCacheElement` | `protected abstract T GetCacheElement(string settlementId);` | method |
| `NavigationCacheElement` | `protected abstract NavigationCacheElement<T>GetCacheElement(T settlement, bool isPortUsed);` | method |
| `GetLandRatioOfPath` | `protected float GetLandRatioOfPath(NavigationPath path, Vec2 startPosition)` | method |
| `GetFaceRecordForPoint` | `protected abstract void GetFaceRecordForPoint(Vec2 position, out bool isOnRegion1);` | method |
| `GenerateClosestSettlementToFaceCache` | `protected void GenerateClosestSettlementToFaceCache()` | method |
| `GetNavMeshFaceCount` | `protected abstract int GetNavMeshFaceCount();` | method |
| `GetNavMeshFaceCenterPosition` | `protected abstract Vec2 GetNavMeshFaceCenterPosition(int faceIndex);` | method |
| `GetFaceRecordAtIndex` | `protected abstract PathFaceRecord GetFaceRecordAtIndex(int faceIndex);` | method |
| `int[]GetExcludedFaceIds` | `protected abstract int[]GetExcludedFaceIds();` | method |
| `GetRegionSwitchCostTo0` | `protected abstract int GetRegionSwitchCostTo0();` | method |
| `GetRegionSwitchCostTo1` | `protected abstract int GetRegionSwitchCostTo1();` | method |
| `GenerateSettlementToSettlementDistanceCache` | `protected void GenerateSettlementToSettlementDistanceCache()` | method |
| `GenerateNeighborSettlementsCache` | `protected void GenerateNeighborSettlementsCache()` | method |
| `CheckBeingNeighbor` | `protected bool CheckBeingNeighbor(List<T>settlementsToConsider, T settlement1, T settlement2)` | method |
| `List` | `protected abstract List<T>GetAllRegisteredSettlements();` | method |
| `List` | `protected List<T>GetUpdatedSettlementsForNeighborDetection(List<T>settlements)` | method |
| `CheckBeingNeighbor` | `protected abstract bool CheckBeingNeighbor(List<T>settlementsToConsider, T settlement1, T settlement2, bool useGate1, bool useGate2, out float foundDistance);` | method |
| `GetRealPathDistanceFromPositionToSettlement` | `protected abstract float GetRealPathDistanceFromPositionToSettlement(Vec2 checkPosition, PathFaceRecord currentFaceRecord, float maxDistanceToLookForPathDetection, T currentSettlementToLook, out bool isPort);` | method |
| `GetClosestSettlementToPosition` | `protected T GetClosestSettlementToPosition(Vec2 checkPosition, PathFaceRecord currentFaceRecord, int[]excludedFaceIds, List<T>settlementRecords, int regionSwitchCostTo0, int regionSwitchCostTo1, float minPathScoreEverFound, out bool isPort)` | method |
| `IEnumerable` | `protected abstract IEnumerable<T>GetClosestSettlementsToPositionInCache(Vec2 checkPosition, List<T>settlements);` | method |
| `GetSceneXmlCrcValues` | `public abstract void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc);` | method |
| `GetSettlementsDistanceCacheFileForCapability` | `public bool GetSettlementsDistanceCacheFileForCapability(string moduleId, out string filePath)` | method |
| `Serialize` | `public void Serialize(string path)` | method |
| `Deserialize` | `public void Deserialize(string path)` | method |
| `AgentRadius` | `protected const float AgentRadius` | field |
| `ExtraCostMultiplierForNeighborDetection` | `protected const float ExtraCostMultiplierForNeighborDetection` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ISettlementDataHolder](../ISettlementDataHolder)
- [same namespace ISettlementDataHolder](../ISettlementDataHolder)
- [same namespace NavigationCacheElement](../NavigationCacheElement__1)
- [same namespace SandBoxNavigationCache](../SandBoxNavigationCache)
