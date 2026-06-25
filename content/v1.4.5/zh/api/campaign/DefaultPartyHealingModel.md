---
title: "DefaultPartyHealingModel"
description: "DefaultPartyHealingModel 的自动生成类参考。"
---
# DefaultPartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`
**Base:** `PartyHealingModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyHealingModel.cs`

## 概述

`DefaultPartyHealingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyHealingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSurgeryChance
`public override float GetSurgeryChance(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 surgery chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyHealingModel 实例
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSurgeryChance(party);
```

### GetSiegeBombardmentHitSurgeryChance
`public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege bombardment hit surgery chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyHealingModel 实例
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSiegeBombardmentHitSurgeryChance(party);
```

### GetSurvivalChance
`public override float GetSurvivalChance(PartyBase party, CharacterObject character, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 survival chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyHealingModel 实例
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSurvivalChance(party, character, damageType, false, null);
```

### GetSkillXpFromHealingTroop
`public override int GetSkillXpFromHealingTroop(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill xp from healing troop 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyHealingModel 实例
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSkillXpFromHealingTroop(party);
```

### GetDailyHealingForRegulars
`public override ExplainedNumber GetDailyHealingForRegulars(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 daily healing for regulars 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyHealingModel 实例
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetDailyHealingForRegulars(party, false, false);
```

### GetDailyHealingHpForHeroes
`public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 daily healing hp for heroes 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyHealingModel 实例
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetDailyHealingHpForHeroes(party, false, false);
```

### GetHeroesEffectedHealingAmount
`public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 heroes effected healing amount 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyHealingModel 实例
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetHeroesEffectedHealingAmount(hero, 0);
```

### GetBattleEndHealingAmount
`public override ExplainedNumber GetBattleEndHealingAmount(PartyBase party, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 battle end healing amount 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyHealingModel 实例
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetBattleEndHealingAmount(party, hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyHealingModel>(new MyDefaultPartyHealingModel());
```

## 参见

- [本区域目录](../)