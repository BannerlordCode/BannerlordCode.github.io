---
title: "MarriageModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MarriageModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MarriageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`
**Base:** `MBGameModel<MarriageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`

## 概述

`MarriageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MarriageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public abstract int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public abstract int MinimumMarriageAgeFemale { get; }` |

## 主要方法

### IsCoupleSuitableForMarriage
`public abstract bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 处理 `is couple suitable for marriage` 相关逻辑。

### GetEffectiveRelationIncrease
`public abstract int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 获取 `effective relation increase` 的当前值。

### GetClanAfterMarriage
`public abstract Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 获取 `clan after marriage` 的当前值。

### IsSuitableForMarriage
`public abstract bool IsSuitableForMarriage(Hero hero)`

**用途 / Purpose:** 处理 `is suitable for marriage` 相关逻辑。

### IsClanSuitableForMarriage
`public abstract bool IsClanSuitableForMarriage(Clan clan)`

**用途 / Purpose:** 处理 `is clan suitable for marriage` 相关逻辑。

### NpcCoupleMarriageChance
`public abstract float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 处理 `npc couple marriage chance` 相关逻辑。

### ShouldNpcMarriageBetweenClansBeAllowed
`public abstract bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`

**用途 / Purpose:** 处理 `should npc marriage between clans be allowed` 相关逻辑。

### GetAdultChildrenSuitableForMarriage
`public abstract List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

**用途 / Purpose:** 获取 `adult children suitable for marriage` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMarriageModel();
```

## 参见

- [完整类目录](../catalog)