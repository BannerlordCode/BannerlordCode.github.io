---
title: "DefaultBarterModel"
description: "DefaultBarterModel 的自动生成类参考。"
---
# DefaultBarterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBarterModel : BarterModel`
**Base:** `BarterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs`

## 概述

`DefaultBarterModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBarterModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BarterCooldownWithHeroInDays` | `public override int BarterCooldownWithHeroInDays { get; }` |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public override float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` |

## 主要方法

### CalculateOverpayRelationIncreaseCosts
`public override int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)`

**用途 / Purpose:** 计算「overpay relation increase costs」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBarterModel 实例
DefaultBarterModel defaultBarterModel = ...;
var result = defaultBarterModel.CalculateOverpayRelationIncreaseCosts(hero, 0);
```

### GetBarterPenalty
`public override ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`

**用途 / Purpose:** 读取并返回当前对象中 「barter penalty」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBarterModel 实例
DefaultBarterModel defaultBarterModel = ...;
var result = defaultBarterModel.GetBarterPenalty(faction, itemBarterable, otherHero, otherParty);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBarterModel>(new MyDefaultBarterModel());
```

## 参见

- [本区域目录](../)