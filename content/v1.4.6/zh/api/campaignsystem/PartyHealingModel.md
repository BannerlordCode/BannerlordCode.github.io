---
title: "PartyHealingModel"
description: "PartyHealingModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<PartyHealingModel>；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs。"
---
# PartyHealingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`

## 概述

PartyHealingModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<PartyHealingModel>，继承链为 PartyHealingModel → MBGameModel。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyHealingModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 PartyHealingModel → MBGameModel。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSurgeryChance` | `public abstract float GetSurgeryChance(PartyBase party);` | 方法 |
| `GetSurvivalChance` | `public abstract float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null);` | 方法 |
| `GetSkillXpFromHealingTroop` | `public abstract int GetSkillXpFromHealingTroop(PartyBase party);` | 方法 |
| `GetDailyHealingForRegulars` | `public abstract ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false);` | 方法 |
| `GetDailyHealingHpForHeroes` | `public abstract ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false);` | 方法 |
| `GetHeroesEffectedHealingAmount` | `public abstract int GetHeroesEffectedHealingAmount(Hero hero, float healingRate);` | 方法 |
| `GetSiegeBombardmentHitSurgeryChance` | `public abstract float GetSiegeBombardmentHitSurgeryChance(PartyBase party);` | 方法 |
| `GetBattleEndHealingAmount` | `public abstract ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
