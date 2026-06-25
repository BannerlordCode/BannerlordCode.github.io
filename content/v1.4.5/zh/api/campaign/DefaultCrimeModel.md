---
title: "DefaultCrimeModel"
description: "DefaultCrimeModel 的自动生成类参考。"
---
# DefaultCrimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCrimeModel : CrimeModel`
**Base:** `CrimeModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCrimeModel.cs`

## 概述

`DefaultCrimeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCrimeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DoesPlayerHaveAnyCrimeRating
`public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

**用途 / Purpose:** 判断player have any crime rating这一条件在当前对象上是否成立。

```csharp
// 先通过子系统 API 拿到 DefaultCrimeModel 实例
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.DoesPlayerHaveAnyCrimeRating(faction);
```

### IsPlayerCrimeRatingSevere
`public override bool IsPlayerCrimeRatingSevere(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 player crime rating severe 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultCrimeModel 实例
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.IsPlayerCrimeRatingSevere(faction);
```

### IsPlayerCrimeRatingModerate
`public override bool IsPlayerCrimeRatingModerate(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 player crime rating moderate 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultCrimeModel 实例
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.IsPlayerCrimeRatingModerate(faction);
```

### IsPlayerCrimeRatingMild
`public override bool IsPlayerCrimeRatingMild(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 player crime rating mild 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultCrimeModel 实例
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.IsPlayerCrimeRatingMild(faction);
```

### GetCost
`public override float GetCost(IFaction faction, PaymentMethod paymentMethod, float minimumCrimeRating)`

**用途 / Purpose:** 读取并返回当前对象中 cost 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCrimeModel 实例
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetCost(faction, paymentMethod, 0);
```

### GetDailyCrimeRatingChange
`public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 daily crime rating change 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCrimeModel 实例
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetDailyCrimeRatingChange(faction, false);
```

### GetMaxCrimeRating
`public override float GetMaxCrimeRating()`

**用途 / Purpose:** 读取并返回当前对象中 max crime rating 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCrimeModel 实例
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetMaxCrimeRating();
```

### GetMinAcceptableCrimeRating
`public override float GetMinAcceptableCrimeRating(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 min acceptable crime rating 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCrimeModel 实例
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetMinAcceptableCrimeRating(faction);
```

### GetCrimeRatingAfterPunishment
`public override float GetCrimeRatingAfterPunishment()`

**用途 / Purpose:** 读取并返回当前对象中 crime rating after punishment 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCrimeModel 实例
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetCrimeRatingAfterPunishment();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCrimeModel>(new MyDefaultCrimeModel());
```

## 参见

- [本区域目录](../)