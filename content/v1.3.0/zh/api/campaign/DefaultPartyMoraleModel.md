---
title: "DefaultPartyMoraleModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyMoraleModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**Base:** `PartyMoraleModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`

## 概述

`DefaultPartyMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public override float HighMoraleValue { get; }` |

## 主要方法

### GetDailyStarvationMoralePenalty
`public override int GetDailyStarvationMoralePenalty(PartyBase party)`

**用途 / Purpose:** 获取 `daily starvation morale penalty` 的当前值。

### GetDailyNoWageMoralePenalty
`public override int GetDailyNoWageMoralePenalty(MobileParty party)`

**用途 / Purpose:** 获取 `daily no wage morale penalty` 的当前值。

### GetStandardBaseMorale
`public override float GetStandardBaseMorale(PartyBase party)`

**用途 / Purpose:** 获取 `standard base morale` 的当前值。

### GetVictoryMoraleChange
`public override float GetVictoryMoraleChange(PartyBase party)`

**用途 / Purpose:** 获取 `victory morale change` 的当前值。

### GetDefeatMoraleChange
`public override float GetDefeatMoraleChange(PartyBase party)`

**用途 / Purpose:** 获取 `defeat morale change` 的当前值。

### GetEffectivePartyMorale
`public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)`

**用途 / Purpose:** 获取 `effective party morale` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyDefaultPartyMoraleModel());
```

## 参见

- [完整类目录](../catalog)