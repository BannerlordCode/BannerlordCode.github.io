---
title: "KingdomCreationModel"
description: "KingdomCreationModel 的自动生成类参考。"
---
# KingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomCreationModel : MBGameModel<KingdomCreationModel>`
**Base:** `MBGameModel<KingdomCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs`

## 概述

`KingdomCreationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `KingdomCreationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public abstract int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public abstract int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public abstract int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public abstract int MaximumNumberOfInitialPolicies { get; }` |

## 主要方法

### IsPlayerKingdomCreationPossible
`public abstract bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 player kingdom creation possible 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomCreationModel 实例
KingdomCreationModel kingdomCreationModel = ...;
var result = kingdomCreationModel.IsPlayerKingdomCreationPossible(explanations);
```

### IsPlayerKingdomAbdicationPossible
`public abstract bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 player kingdom abdication possible 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomCreationModel 实例
KingdomCreationModel kingdomCreationModel = ...;
var result = kingdomCreationModel.IsPlayerKingdomAbdicationPossible(explanations);
```

### GetAvailablePlayerKingdomCultures
`public abstract IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 available player kingdom cultures 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomCreationModel 实例
KingdomCreationModel kingdomCreationModel = ...;
var result = kingdomCreationModel.GetAvailablePlayerKingdomCultures();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
KingdomCreationModel instance = ...;
```

## 参见

- [本区域目录](../)