---
title: "PartyHealingModel"
description: "PartyHealingModel 的自动生成类参考。"
---
# PartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel> `
**Base:** MBGameModel<PartyHealingModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs

## 概述

`PartyHealingModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSurgeryChance
`public abstract float GetSurgeryChance(PartyBase party)`

### GetSurvivalChance
`public abstract float GetSurvivalChance(PartyBase party,CharacterObject agentCharacter,DamageTypes damageType,bool canDamageKillEvenIfBlunt,PartyBase enemyParty = null)`

### GetSkillXpFromHealingTroop
`public abstract int GetSkillXpFromHealingTroop(PartyBase party)`

### GetDailyHealingForRegulars
`public abstract ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase,bool isPrisoner,bool includeDescriptions = false)`

### GetDailyHealingHpForHeroes
`public abstract ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase,bool isPrisoners,bool includeDescriptions = false)`

### GetSiegeBombardmentHitSurgeryChance
`public abstract float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

### GetBattleEndHealingAmount
`public abstract ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase,Hero hero)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
