<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyMoraleModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**Base:** `MBGameModel<PartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`

## 概述

`PartyMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public abstract float HighMoraleValue { get; }` |

## 主要方法

### GetDailyStarvationMoralePenalty
`public abstract int GetDailyStarvationMoralePenalty(PartyBase party)`

**用途 / Purpose:** 获取 `daily starvation morale penalty` 的当前值。

### GetDailyNoWageMoralePenalty
`public abstract int GetDailyNoWageMoralePenalty(MobileParty party)`

**用途 / Purpose:** 获取 `daily no wage morale penalty` 的当前值。

### GetStandardBaseMorale
`public abstract float GetStandardBaseMorale(PartyBase party)`

**用途 / Purpose:** 获取 `standard base morale` 的当前值。

### GetVictoryMoraleChange
`public abstract float GetVictoryMoraleChange(PartyBase party)`

**用途 / Purpose:** 获取 `victory morale change` 的当前值。

### GetDefeatMoraleChange
`public abstract float GetDefeatMoraleChange(PartyBase party)`

**用途 / Purpose:** 获取 `defeat morale change` 的当前值。

### GetEffectivePartyMorale
`public abstract ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)`

**用途 / Purpose:** 获取 `effective party morale` 的当前值。

## 使用示例

```csharp
var implementation = new CustomPartyMoraleModel();
```

## 参见

- [完整类目录](../catalog)