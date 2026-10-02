---
title: "HeroCreationModel"
description: "HeroCreationModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<HeroCreationModel>；公开成员 15 个（方法 15、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs。"
---
# HeroCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class HeroCreationModel : MBGameModel<HeroCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs`

## 概述

HeroCreationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<HeroCreationModel>，继承链为 HeroCreationModel → MBGameModel。public/protected 成员共 15 个：15 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HeroCreationModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 HeroCreationModel → MBGameModel。成员构成以方法为主（方法 15/15，属性 0/15），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CampaignTime>GetBirthAndDeathDay` | `public abstract ValueTuple<CampaignTime, CampaignTime>GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age);` | 方法 |
| `GetBornSettlement` | `public abstract Settlement GetBornSettlement(Hero character);` | 方法 |
| `GetStaticBodyProperties` | `public abstract StaticBodyProperties GetStaticBodyProperties(Hero character, bool isOffspring, float variationAmount = 0.35f);` | 方法 |
| `GetPreferredUpgradeFormation` | `public abstract FormationClass GetPreferredUpgradeFormation(Hero character);` | 方法 |
| `GetClan` | `public abstract Clan GetClan(Hero character);` | 方法 |
| `GetCulture` | `public abstract CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan);` | 方法 |
| `GetRandomTemplateByOccupation` | `public abstract CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null);` | 方法 |
| `int>>GetTraitsForHero` | `public abstract List<ValueTuple<TraitObject, int>>GetTraitsForHero(Hero hero);` | 方法 |
| `GetCivilianEquipment` | `public abstract Equipment GetCivilianEquipment(Hero hero);` | 方法 |
| `GetBattleEquipment` | `public abstract Equipment GetBattleEquipment(Hero hero);` | 方法 |
| `GetCharacterTemplateForOffspring` | `public abstract CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale);` | 方法 |
| `TextObject>GenerateFirstAndFullName` | `public abstract ValueTuple<TextObject, TextObject>GenerateFirstAndFullName(Hero hero);` | 方法 |
| `int>>GetDefaultSkillsForHero` | `public abstract List<ValueTuple<SkillObject, int>>GetDefaultSkillsForHero(Hero hero);` | 方法 |
| `int>>GetInheritedSkillsForHero` | `public abstract List<ValueTuple<SkillObject, int>>GetInheritedSkillsForHero(Hero hero);` | 方法 |
| `IsHeroCombatant` | `public abstract bool IsHeroCombatant(Hero hero);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
