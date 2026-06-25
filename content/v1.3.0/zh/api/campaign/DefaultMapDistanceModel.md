---
title: "DefaultMapDistanceModel"
description: "DefaultMapDistanceModel 的自动生成类参考。"
---
# DefaultMapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapDistanceModel : MapDistanceModel`
**Base:** `MapDistanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs`

## 概述

`DefaultMapDistanceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMapDistanceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegionSwitchCostFromLandToSea` | `public override int RegionSwitchCostFromLandToSea { get; }` |
| `RegionSwitchCostFromSeaToLand` | `public override int RegionSwitchCostFromSeaToLand { get; }` |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public override float MaximumSpawnDistanceForCompanionsAfterDisband { get; }` |

## 主要方法

### RegisterDistanceCache
`public override void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister)`

**用途 / Purpose:** **用途 / Purpose:** 将distance cache注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
defaultMapDistanceModel.RegisterDistanceCache(navigationCapability, cacheToRegister);
```

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public override float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationCapabilities)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 maximum distance between two connected settlements 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetMaximumDistanceBetweenTwoConnectedSettlements(navigationCapabilities);
```

### GetLandRatioOfPathBetweenSettlements
`public override float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 land ratio of path between settlements 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetLandRatioOfPathBetweenSettlements(fromSettlement, toSettlement, false, false);
```

### GetDistance
`public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort = false, bool isTargetingPort = false, MobileParty.NavigationType navigationCapability = MobileParty.NavigationType.Default)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 distance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, mobileParty.NavigationType.Default);
```

### GetDistance
`public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 distance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, navigationCapability, landRatio);
```

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 distance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toSettlement, false, customCapability, estimatedLandRatio);
```

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 distance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, landRatio);
```

### GetDistance
`public override bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 distance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, 0, distance, landRatio);
```

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType customCapability, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 distance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toPoint, customCapability, landRatio);
```

### GetDistance
`public override float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType customCapability)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 distance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromSettlement, toPoint, false, customCapability);
```

### GetClosestEntranceToFace
`public override ValueTuple<Settlement, bool> GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 closest entrance to face 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetClosestEntranceToFace(face, navigationCapabilities);
```

### GetNeighborsOfFortification
`public override MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 neighbors of fortification 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetNeighborsOfFortification(town, navigationCapabilities);
```

### GetTransitionCostAdjustment
`public override float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 transition cost adjustment 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetTransitionCostAdjustment(settlement1, false, settlement2, false, false, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMapDistanceModel>(new MyDefaultMapDistanceModel());
```

## 参见

- [本区域目录](../)