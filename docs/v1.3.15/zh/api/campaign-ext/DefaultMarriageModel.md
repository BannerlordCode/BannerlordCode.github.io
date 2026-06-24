<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMarriageModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMarriageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMarriageModel : MarriageModel`
**Base:** `MarriageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs`

## 概述

`DefaultMarriageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMarriageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public override int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public override int MinimumMarriageAgeFemale { get; }` |

## 主要方法

### IsCoupleSuitableForMarriage
`public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 处理 `is couple suitable for marriage` 相关逻辑。

### IsClanSuitableForMarriage
`public override bool IsClanSuitableForMarriage(Clan clan)`

**用途 / Purpose:** 处理 `is clan suitable for marriage` 相关逻辑。

### NpcCoupleMarriageChance
`public override float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 处理 `npc couple marriage chance` 相关逻辑。

### ShouldNpcMarriageBetweenClansBeAllowed
`public override bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`

**用途 / Purpose:** 处理 `should npc marriage between clans be allowed` 相关逻辑。

### GetAdultChildrenSuitableForMarriage
`public override List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

**用途 / Purpose:** 获取 `adult children suitable for marriage` 的当前值。

### GetEffectiveRelationIncrease
`public override int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 获取 `effective relation increase` 的当前值。

### IsSuitableForMarriage
`public override bool IsSuitableForMarriage(Hero maidenOrSuitor)`

**用途 / Purpose:** 处理 `is suitable for marriage` 相关逻辑。

### GetClanAfterMarriage
`public override Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)`

**用途 / Purpose:** 获取 `clan after marriage` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMarriageModel>(new MyDefaultMarriageModel());
```

## 参见

- [完整类目录](../catalog)