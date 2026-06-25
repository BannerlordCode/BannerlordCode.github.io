---
title: "MapVisibilityModel"
description: "MapVisibilityModel 的自动生成类参考。"
---
# MapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`
**Base:** `MBGameModel<MapVisibilityModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapVisibilityModel.cs`

## 概述

`MapVisibilityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MapVisibilityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MaximumSeeingRange
`public abstract float MaximumSeeingRange()`

**用途 / Purpose:** **用途 / Purpose:** 调用 MaximumSeeingRange 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapVisibilityModel 实例
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.MaximumSeeingRange();
```

### GetPartySeeingRangeBase
`public abstract float GetPartySeeingRangeBase(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party seeing range base 的结果。

```csharp
// 先通过子系统 API 拿到 MapVisibilityModel 实例
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.GetPartySeeingRangeBase(party);
```

### GetPartySpottingRange
`public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party spotting range 的结果。

```csharp
// 先通过子系统 API 拿到 MapVisibilityModel 实例
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.GetPartySpottingRange(party, false);
```

### GetPartySpottingRatioForMainPartySeeingRange
`public abstract float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party spotting ratio for main party seeing range 的结果。

```csharp
// 先通过子系统 API 拿到 MapVisibilityModel 实例
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.GetPartySpottingRatioForMainPartySeeingRange(party);
```

### GetHideoutSpottingDistance
`public abstract float GetHideoutSpottingDistance()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hideout spotting distance 的结果。

```csharp
// 先通过子系统 API 拿到 MapVisibilityModel 实例
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.GetHideoutSpottingDistance();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MapVisibilityModel instance = ...;
```

## 参见

- [本区域目录](../)