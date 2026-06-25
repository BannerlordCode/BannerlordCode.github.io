---
title: "DefaultKingdomCreationModel"
description: "DefaultKingdomCreationModel 的自动生成类参考。"
---
# DefaultKingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomCreationModel : KingdomCreationModel`
**Base:** `KingdomCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs`

## 概述

`DefaultKingdomCreationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultKingdomCreationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public override int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public override int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public override int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public override int MaximumNumberOfInitialPolicies { get; }` |

## 主要方法

### IsPlayerKingdomCreationPossible
`public override bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)`

**用途 / Purpose:** 判断当前对象是否处于 「player kingdom creation possible」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomCreationModel 实例
DefaultKingdomCreationModel defaultKingdomCreationModel = ...;
var result = defaultKingdomCreationModel.IsPlayerKingdomCreationPossible(explanations);
```

### IsPlayerKingdomAbdicationPossible
`public override bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)`

**用途 / Purpose:** 判断当前对象是否处于 「player kingdom abdication possible」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomCreationModel 实例
DefaultKingdomCreationModel defaultKingdomCreationModel = ...;
var result = defaultKingdomCreationModel.IsPlayerKingdomAbdicationPossible(explanations);
```

### GetAvailablePlayerKingdomCultures
`public override IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()`

**用途 / Purpose:** 读取并返回当前对象中 「available player kingdom cultures」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomCreationModel 实例
DefaultKingdomCreationModel defaultKingdomCreationModel = ...;
var result = defaultKingdomCreationModel.GetAvailablePlayerKingdomCultures();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultKingdomCreationModel>(new MyDefaultKingdomCreationModel());
```

## 参见

- [本区域目录](../)