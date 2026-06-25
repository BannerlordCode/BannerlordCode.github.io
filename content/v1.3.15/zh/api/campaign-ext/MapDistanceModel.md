---
title: "MapDistanceModel"
description: "MapDistanceModel 的自动生成类参考。"
---
# MapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapDistanceModel : MBGameModel<MapDistanceModel>`
**Base:** `MBGameModel<MapDistanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs`

## 概述

`MapDistanceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MapDistanceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegionSwitchCostFromLandToSea` | `public abstract int RegionSwitchCostFromLandToSea { get; }` |
| `RegionSwitchCostFromSeaToLand` | `public abstract int RegionSwitchCostFromSeaToLand { get; }` |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public abstract float MaximumSpawnDistanceForCompanionsAfterDisband { get; }` |

## 主要方法

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public abstract float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 读取并返回当前对象中 「maximum distance between two connected settlements」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetMaximumDistanceBetweenTwoConnectedSettlements(navigationType);
```

### GetLandRatioOfPathBetweenSettlements
`public abstract float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)`

**用途 / Purpose:** 读取并返回当前对象中 「land ratio of path between settlements」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetLandRatioOfPathBetweenSettlements(fromSettlement, toSettlement, false, false);
```

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromMobileParty, toSettlement, false, customCapability, estimatedLandRatio);
```

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, landRatio);
```

### GetDistance
`public abstract bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, 0, distance, landRatio);
```

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, navigationCapability);
```

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, navigationCapability, landRatio);
```

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType, out float landRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromMobileParty, toPoint, navigationType, landRatio);
```

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetDistance(fromSettlement, toPoint, false, navigationType);
```

### GetPortToGateDistanceForSettlement
`public abstract float GetPortToGateDistanceForSettlement(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「port to gate distance for settlement」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetPortToGateDistanceForSettlement(settlement);
```

### PathExistBetweenPoints
`public abstract bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 处理与 「path exist between points」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.PathExistBetweenPoints(fromPoint, toPoint, navigationType);
```

### RegisterDistanceCache
`public abstract void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister)`

**用途 / Purpose:** 将「distance cache」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
mapDistanceModel.RegisterDistanceCache(navigationCapability, cacheToRegister);
```

### GetClosestEntranceToFace
`public abstract ValueTuple<Settlement, bool> GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities)`

**用途 / Purpose:** 读取并返回当前对象中 「closest entrance to face」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetClosestEntranceToFace(face, navigationCapabilities);
```

### GetNeighborsOfFortification
`public abstract MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)`

**用途 / Purpose:** 读取并返回当前对象中 「neighbors of fortification」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetNeighborsOfFortification(town, navigationCapabilities);
```

### GetTransitionCostAdjustment
`public abstract float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)`

**用途 / Purpose:** 读取并返回当前对象中 「transition cost adjustment」 的结果。

```csharp
// 先通过子系统 API 拿到 MapDistanceModel 实例
MapDistanceModel mapDistanceModel = ...;
var result = mapDistanceModel.GetTransitionCostAdjustment(settlement1, false, settlement2, false, false, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MapDistanceModel instance = ...;
```

## 参见

- [本区域目录](../)