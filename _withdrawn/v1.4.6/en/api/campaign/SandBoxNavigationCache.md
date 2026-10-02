---
title: "SandBoxNavigationCache"
description: "SandBoxNavigationCache: a public class in TaleWorlds.CampaignSystem.Map.DistanceCache, inheriting NavigationCache<Settlement>, MapDistanceModel.INavigationCache; 17 exposed members (16 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxNavigationCache

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SandBoxNavigationCache : NavigationCache<Settlement>, MapDistanceModel.INavigationCache`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

SandBoxNavigationCache lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs. It is a public class, implementing/inheriting NavigationCache<Settlement>, MapDistanceModel.INavigationCache; the inheritance chain is SandBoxNavigationCache → NavigationCache → ISettlementDataHolder. It exposes 17 public/protected members: 16 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxNavigationCache lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Map.DistanceCache`, inheritance chain SandBoxNavigationCache → NavigationCache → ISettlementDataHolder. The surface is method-led (methods 16/17, properties 0/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SandBoxNavigationCache` | `public SandBoxNavigationCache(MobileParty.NavigationType navigationType) : base(navigationType)` | constructor |
| `GetCacheElement` | `protected override Settlement GetCacheElement(string settlementId)` | method |
| `NavigationCacheElement` | `protected override NavigationCacheElement<Settlement>GetCacheElement(Settlement settlement, bool isPortUsed)` | method |
| `GetSceneXmlCrcValues` | `public override void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)` | method |
| `GetNavMeshFaceCount` | `protected override int GetNavMeshFaceCount()` | method |
| `GetNavMeshFaceCenterPosition` | `protected override Vec2 GetNavMeshFaceCenterPosition(int faceIndex)` | method |
| `GetFaceRecordAtIndex` | `protected override PathFaceRecord GetFaceRecordAtIndex(int faceIndex)` | method |
| `GetRegionSwitchCostTo0` | `protected override int GetRegionSwitchCostTo0()` | method |
| `GetRegionSwitchCostTo1` | `protected override int GetRegionSwitchCostTo1()` | method |
| `int[]GetExcludedFaceIds` | `protected override int[]GetExcludedFaceIds()` | method |
| `GetRealDistanceAndLandRatioBetweenSettlements` | `protected override float GetRealDistanceAndLandRatioBetweenSettlements(NavigationCacheElement<Settlement>settlement1, NavigationCacheElement<Settlement>settlement2, out float landRatio)` | method |
| `GetFaceRecordForPoint` | `protected override void GetFaceRecordForPoint(Vec2 position, out bool isOnRegion1)` | method |
| `CheckBeingNeighbor` | `protected override bool CheckBeingNeighbor(List<Settlement>settlementsToConsider, Settlement settlement1, Settlement settlement2, bool useGate1, bool useGate2, out float distance)` | method |
| `GetRealPathDistanceFromPositionToSettlement` | `protected override float GetRealPathDistanceFromPositionToSettlement(Vec2 checkPosition, PathFaceRecord currentFaceRecord, float maxDistanceToLookForPathDetection, Settlement currentSettlementToLook, out bool isPort)` | method |
| `IEnumerable` | `protected override IEnumerable<Settlement>GetClosestSettlementsToPositionInCache(Vec2 checkPosition, List<Settlement>settlements)` | method |
| `List` | `protected override List<Settlement>GetAllRegisteredSettlements()` | method |
| `FinalizeInitialization` | `public void FinalizeInitialization()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NavigationCache](../NavigationCache__1/)
- [same namespace ISettlementDataHolder](../ISettlementDataHolder/)
- [same namespace NavigationCache](../NavigationCache__1/)
- [same namespace NavigationCacheElement](../NavigationCacheElement__1/)
