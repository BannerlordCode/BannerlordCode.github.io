---
title: "BarterModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `calculate overpay relation increase costs` 相关逻辑。

### GetBarterPenalty
`public abstract ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`

**用途 / Purpose:** 获取 `barter penalty` 的当前值。

## 使用示例

```csharp
var implementation = new CustomBarterModel();
```

## 参见

- [完整类目录](../catalog)