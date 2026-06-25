---
title: "DefaultMapVisibilityModel"
description: "DefaultMapVisibilityModel 的自动生成类参考。"
---
# DefaultMapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**Base:** `MapVisibilityModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMapVisibilityModel.cs`

## 概述

`DefaultMapVisibilityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMapVisibilityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MaximumSeeingRange
`public override float MaximumSeeingRange()`

**用途 / Purpose:** **用途 / Purpose:** 调用 MaximumSeeingRange 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMapVisibilityModel 实例
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.MaximumSeeingRange();
```

### GetPartySeeingRangeBase
`public override float GetPartySeeingRangeBase(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party seeing range base 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapVisibilityModel 实例
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySeeingRangeBase(party);
```

### GetPartySpottingRange
`public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party spotting range 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapVisibilityModel 实例
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingRange(party, false);
```

### GetPartySpottingRatioForMainPartySeeingRange
`public override float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party spotting ratio for main party seeing range 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapVisibilityModel 实例
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingRatioForMainPartySeeingRange(party);
```

### GetHideoutSpottingDistance
`public override float GetHideoutSpottingDistance()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hideout spotting distance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapVisibilityModel 实例
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetHideoutSpottingDistance();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMapVisibilityModel>(new MyDefaultMapVisibilityModel());
```

## 参见

- [本区域目录](../)