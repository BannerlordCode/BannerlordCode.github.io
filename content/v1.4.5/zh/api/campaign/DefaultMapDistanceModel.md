---
title: "DefaultMapDistanceModel"
description: "DefaultMapDistanceModel 的自动生成类参考。"
---
# DefaultMapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapDistanceModel : MapDistanceModel`
**Base:** `MapDistanceModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMapDistanceModel.cs`

## 概述

`DefaultMapDistanceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMapDistanceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### RegisterDistanceCache
`public override void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, INavigationCache cacheToRegister)`

**用途 / Purpose:** 将「distance cache」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
defaultMapDistanceModel.RegisterDistanceCache(navigationCapability, cacheToRegister);
```

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public override float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationCapabilities)`

**用途 / Purpose:** 读取并返回当前对象中 「maximum distance between two connected settlements」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetMaximumDistanceBetweenTwoConnectedSettlements(navigationCapabilities);
```

### GetLandRatioOfPathBetweenSettlements
`public override float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)`

**用途 / Purpose:** 读取并返回当前对象中 「land ratio of path between settlements」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetLandRatioOfPathBetweenSettlements(fromSettlement, toSettlement, false, false);
```

### GetDistance
`public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort = false, bool isTargetingPort = false, MobileParty.NavigationType navigationCapability = MobileParty.NavigationType.Default)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, mobileParty.NavigationType.Default);
```

### GetDistance
`public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromSettlement, toSettlement, false, false, navigationCapability, landRatio);
```

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toSettlement, false, customCapability, estimatedLandRatio);
```

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, landRatio);
```

### GetDistance
`public override bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toMobileParty, customCapability, 0, distance, landRatio);
```

### GetDistance
`public override float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType customCapability, out float landRatio)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromMobileParty, toPoint, customCapability, landRatio);
```

### GetDistance
`public override float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType customCapability)`

**用途 / Purpose:** 读取并返回当前对象中 「distance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetDistance(fromSettlement, toPoint, false, customCapability);
```

### GetPortToGateDistanceForSettlement
`public override float GetPortToGateDistanceForSettlement(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「port to gate distance for settlement」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetPortToGateDistanceForSettlement(settlement);
```

### PathExistBetweenPoints
`public override bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.PathExistBetweenPoints(fromPoint, toPoint, navigationType);
```

### GetNeighborsOfFortification
`public override MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)`

**用途 / Purpose:** 读取并返回当前对象中 「neighbors of fortification」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapDistanceModel 实例
DefaultMapDistanceModel defaultMapDistanceModel = ...;
var result = defaultMapDistanceModel.GetNeighborsOfFortification(town, navigationCapabilities);
```

### GetTransitionCostAdjustment
`public override float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)`

**用途 / Purpose:** 读取并返回当前对象中 「transition cost adjustment」 的结果。

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