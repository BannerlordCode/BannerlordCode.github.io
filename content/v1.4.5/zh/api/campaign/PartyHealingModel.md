---
title: "PartyHealingModel"
description: "PartyHealingModel 的自动生成类参考。"
---
# PartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**Base:** `MBGameModel<PartyHealingModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyHealingModel.cs`

## 概述

`PartyHealingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyHealingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSurgeryChance
`public abstract float GetSurgeryChance(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 surgery chance 的结果。

```csharp
// 先通过子系统 API 拿到 PartyHealingModel 实例
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetSurgeryChance(party);
```

### GetSurvivalChance
`public abstract float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)`

**用途 / Purpose:** 读取并返回当前对象中 survival chance 的结果。

```csharp
// 先通过子系统 API 拿到 PartyHealingModel 实例
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetSurvivalChance(party, agentCharacter, damageType, false, null);
```

### GetSkillXpFromHealingTroop
`public abstract int GetSkillXpFromHealingTroop(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 skill xp from healing troop 的结果。

```csharp
// 先通过子系统 API 拿到 PartyHealingModel 实例
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetSkillXpFromHealingTroop(party);
```

### GetDailyHealingForRegulars
`public abstract ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 daily healing for regulars 的结果。

```csharp
// 先通过子系统 API 拿到 PartyHealingModel 实例
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetDailyHealingForRegulars(partyBase, false, false);
```

### GetDailyHealingHpForHeroes
`public abstract ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 daily healing hp for heroes 的结果。

```csharp
// 先通过子系统 API 拿到 PartyHealingModel 实例
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetDailyHealingHpForHeroes(partyBase, false, false);
```

### GetHeroesEffectedHealingAmount
`public abstract int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)`

**用途 / Purpose:** 读取并返回当前对象中 heroes effected healing amount 的结果。

```csharp
// 先通过子系统 API 拿到 PartyHealingModel 实例
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetHeroesEffectedHealingAmount(hero, 0);
```

### GetSiegeBombardmentHitSurgeryChance
`public abstract float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 siege bombardment hit surgery chance 的结果。

```csharp
// 先通过子系统 API 拿到 PartyHealingModel 实例
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetSiegeBombardmentHitSurgeryChance(party);
```

### GetBattleEndHealingAmount
`public abstract ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 battle end healing amount 的结果。

```csharp
// 先通过子系统 API 拿到 PartyHealingModel 实例
PartyHealingModel partyHealingModel = ...;
var result = partyHealingModel.GetBattleEndHealingAmount(partyBase, hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyHealingModel instance = ...;
```

## 参见

- [本区域目录](../)