---
title: "BarterModel"
description: "BarterModel 的自动生成类参考。"
---
# BarterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BarterModel : MBGameModel<BarterModel>`
**Base:** `MBGameModel<BarterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs`

## 概述

`BarterModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BarterModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BarterCooldownWithHeroInDays` | `public abstract int BarterCooldownWithHeroInDays { get; }` |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public abstract float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` |

## 主要方法

### CalculateOverpayRelationIncreaseCosts
`public abstract int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)`

**用途 / Purpose:** 计算「overpay relation increase costs」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BarterModel 实例
BarterModel barterModel = ...;
var result = barterModel.CalculateOverpayRelationIncreaseCosts(hero, 0);
```

### GetBarterPenalty
`public abstract ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`

**用途 / Purpose:** 读取并返回当前对象中 「barter penalty」 的结果。

```csharp
// 先通过子系统 API 拿到 BarterModel 实例
BarterModel barterModel = ...;
var result = barterModel.GetBarterPenalty(faction, itemBarterable, otherHero, otherParty);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BarterModel instance = ...;
```

## 参见

- [本区域目录](../)