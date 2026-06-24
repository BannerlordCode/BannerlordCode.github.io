<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyHealingModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`
**Base:** `PartyHealingModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyHealingModel.cs`

## 概述

`DefaultPartyHealingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyHealingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSurgeryChance
`public override float GetSurgeryChance(PartyBase party)`

**用途 / Purpose:** 获取 `surgery chance` 的当前值。

### GetSiegeBombardmentHitSurgeryChance
`public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

**用途 / Purpose:** 获取 `siege bombardment hit surgery chance` 的当前值。

### GetSurvivalChance
`public override float GetSurvivalChance(PartyBase party, CharacterObject character, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)`

**用途 / Purpose:** 获取 `survival chance` 的当前值。

### GetSkillXpFromHealingTroop
`public override int GetSkillXpFromHealingTroop(PartyBase party)`

**用途 / Purpose:** 获取 `skill xp from healing troop` 的当前值。

### GetDailyHealingForRegulars
`public override ExplainedNumber GetDailyHealingForRegulars(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `daily healing for regulars` 的当前值。

### GetDailyHealingHpForHeroes
`public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `daily healing hp for heroes` 的当前值。

### GetHeroesEffectedHealingAmount
`public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)`

**用途 / Purpose:** 获取 `heroes effected healing amount` 的当前值。

### GetBattleEndHealingAmount
`public override ExplainedNumber GetBattleEndHealingAmount(PartyBase party, Hero hero)`

**用途 / Purpose:** 获取 `battle end healing amount` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyHealingModel>(new MyDefaultPartyHealingModel());
```

## 参见

- [完整类目录](../catalog)