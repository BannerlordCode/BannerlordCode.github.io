---
title: "CrimeModel"
description: "CrimeModel 的自动生成类参考。"
---
# CrimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**Base:** `MBGameModel<CrimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`

## 概述

`CrimeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CrimeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public abstract float DeclareWarCrimeRatingThreshold { get; }` |

## 主要方法

### GetMaxCrimeRating
`public abstract float GetMaxCrimeRating()`

**用途 / Purpose:** 读取并返回当前对象中 max crime rating 的结果。

```csharp
// 先通过子系统 API 拿到 CrimeModel 实例
CrimeModel crimeModel = ...;
var result = crimeModel.GetMaxCrimeRating();
```

### GetMinAcceptableCrimeRating
`public abstract float GetMinAcceptableCrimeRating(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 min acceptable crime rating 的结果。

```csharp
// 先通过子系统 API 拿到 CrimeModel 实例
CrimeModel crimeModel = ...;
var result = crimeModel.GetMinAcceptableCrimeRating(faction);
```

### GetCrimeRatingAfterPunishment
`public abstract float GetCrimeRatingAfterPunishment()`

**用途 / Purpose:** 读取并返回当前对象中 crime rating after punishment 的结果。

```csharp
// 先通过子系统 API 拿到 CrimeModel 实例
CrimeModel crimeModel = ...;
var result = crimeModel.GetCrimeRatingAfterPunishment();
```

### DoesPlayerHaveAnyCrimeRating
`public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

**用途 / Purpose:** 判断player have any crime rating这一条件在当前对象上是否成立。

```csharp
// 先通过子系统 API 拿到 CrimeModel 实例
CrimeModel crimeModel = ...;
var result = crimeModel.DoesPlayerHaveAnyCrimeRating(faction);
```

### IsPlayerCrimeRatingSevere
`public abstract bool IsPlayerCrimeRatingSevere(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 player crime rating severe 状态或条件。

```csharp
// 先通过子系统 API 拿到 CrimeModel 实例
CrimeModel crimeModel = ...;
var result = crimeModel.IsPlayerCrimeRatingSevere(faction);
```

### IsPlayerCrimeRatingModerate
`public abstract bool IsPlayerCrimeRatingModerate(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 player crime rating moderate 状态或条件。

```csharp
// 先通过子系统 API 拿到 CrimeModel 实例
CrimeModel crimeModel = ...;
var result = crimeModel.IsPlayerCrimeRatingModerate(faction);
```

### IsPlayerCrimeRatingMild
`public abstract bool IsPlayerCrimeRatingMild(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 player crime rating mild 状态或条件。

```csharp
// 先通过子系统 API 拿到 CrimeModel 实例
CrimeModel crimeModel = ...;
var result = crimeModel.IsPlayerCrimeRatingMild(faction);
```

### GetCost
`public abstract float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)`

**用途 / Purpose:** 读取并返回当前对象中 cost 的结果。

```csharp
// 先通过子系统 API 拿到 CrimeModel 实例
CrimeModel crimeModel = ...;
var result = crimeModel.GetCost(faction, paymentMethod, 0);
```

### GetDailyCrimeRatingChange
`public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 daily crime rating change 的结果。

```csharp
// 先通过子系统 API 拿到 CrimeModel 实例
CrimeModel crimeModel = ...;
var result = crimeModel.GetDailyCrimeRatingChange(faction, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CrimeModel instance = ...;
```

## 参见

- [本区域目录](../)