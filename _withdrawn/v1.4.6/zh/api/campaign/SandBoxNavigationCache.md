---
title: "SandBoxNavigationCache"
description: "SandBoxNavigationCache：TaleWorlds.CampaignSystem.Map.DistanceCache 的 public 类，继承 NavigationCache<Settlement>、MapDistanceModel.INavigationCache；公开成员 17 个（方法 16、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxNavigationCache

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SandBoxNavigationCache : NavigationCache<Settlement>, MapDistanceModel.INavigationCache`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

SandBoxNavigationCache 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs。它是一个 public 类，实现/继承 NavigationCache<Settlement>、MapDistanceModel.INavigationCache，继承链为 SandBoxNavigationCache → NavigationCache → ISettlementDataHolder。public/protected 成员共 17 个：16 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxNavigationCache 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Map.DistanceCache`，继承链 SandBoxNavigationCache → NavigationCache → ISettlementDataHolder。成员构成以方法为主（方法 16/17，属性 0/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Map/DistanceCache/SandBoxNavigationCache.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandBoxNavigationCache` | `public SandBoxNavigationCache(MobileParty.NavigationType navigationType) : base(navigationType)` | 构造函数 |
| `GetCacheElement` | `protected override Settlement GetCacheElement(string settlementId)` | 方法 |
| `NavigationCacheElement` | `protected override NavigationCacheElement<Settlement>GetCacheElement(Settlement settlement, bool isPortUsed)` | 方法 |
| `GetSceneXmlCrcValues` | `public override void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)` | 方法 |
| `GetNavMeshFaceCount` | `protected override int GetNavMeshFaceCount()` | 方法 |
| `GetNavMeshFaceCenterPosition` | `protected override Vec2 GetNavMeshFaceCenterPosition(int faceIndex)` | 方法 |
| `GetFaceRecordAtIndex` | `protected override PathFaceRecord GetFaceRecordAtIndex(int faceIndex)` | 方法 |
| `GetRegionSwitchCostTo0` | `protected override int GetRegionSwitchCostTo0()` | 方法 |
| `GetRegionSwitchCostTo1` | `protected override int GetRegionSwitchCostTo1()` | 方法 |
| `int[]GetExcludedFaceIds` | `protected override int[]GetExcludedFaceIds()` | 方法 |
| `GetRealDistanceAndLandRatioBetweenSettlements` | `protected override float GetRealDistanceAndLandRatioBetweenSettlements(NavigationCacheElement<Settlement>settlement1, NavigationCacheElement<Settlement>settlement2, out float landRatio)` | 方法 |
| `GetFaceRecordForPoint` | `protected override void GetFaceRecordForPoint(Vec2 position, out bool isOnRegion1)` | 方法 |
| `CheckBeingNeighbor` | `protected override bool CheckBeingNeighbor(List<Settlement>settlementsToConsider, Settlement settlement1, Settlement settlement2, bool useGate1, bool useGate2, out float distance)` | 方法 |
| `GetRealPathDistanceFromPositionToSettlement` | `protected override float GetRealPathDistanceFromPositionToSettlement(Vec2 checkPosition, PathFaceRecord currentFaceRecord, float maxDistanceToLookForPathDetection, Settlement currentSettlementToLook, out bool isPort)` | 方法 |
| `IEnumerable` | `protected override IEnumerable<Settlement>GetClosestSettlementsToPositionInCache(Vec2 checkPosition, List<Settlement>settlements)` | 方法 |
| `List` | `protected override List<Settlement>GetAllRegisteredSettlements()` | 方法 |
| `FinalizeInitialization` | `public void FinalizeInitialization()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NavigationCache](../NavigationCache__1/)
- [同命名空间 ISettlementDataHolder](../ISettlementDataHolder/)
- [同命名空间 NavigationCache](../NavigationCache__1/)
- [同命名空间 NavigationCacheElement](../NavigationCacheElement__1/)
