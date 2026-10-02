---
title: "DefaultHeroCreationModel"
description: "DefaultHeroCreationModel：TaleWorlds.CampaignSystem 的 public 类，继承 HeroCreationModel；公开成员 15 个（方法 15、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs。"
---
# DefaultHeroCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`

## 概述

DefaultHeroCreationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs。它是一个 public 类，实现/继承 HeroCreationModel，继承链为 DefaultHeroCreationModel → HeroCreationModel → MBGameModel。public/protected 成员共 15 个：15 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultHeroCreationModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultHeroCreationModel → HeroCreationModel → MBGameModel。成员构成以方法为主（方法 15/15，属性 0/15），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CampaignTime>GetBirthAndDeathDay` | `public override ValueTuple<CampaignTime, CampaignTime>GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)` | 方法 |
| `GetBornSettlement` | `public override Settlement GetBornSettlement(Hero hero)` | 方法 |
| `GetStaticBodyProperties` | `public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)` | 方法 |
| `GetPreferredUpgradeFormation` | `public override FormationClass GetPreferredUpgradeFormation(Hero hero)` | 方法 |
| `GetClan` | `public override Clan GetClan(Hero hero)` | 方法 |
| `GetCulture` | `public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)` | 方法 |
| `GetRandomTemplateByOccupation` | `public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)` | 方法 |
| `int>>GetTraitsForHero` | `public override List<ValueTuple<TraitObject, int>>GetTraitsForHero(Hero hero)` | 方法 |
| `GetCivilianEquipment` | `public override Equipment GetCivilianEquipment(Hero hero)` | 方法 |
| `GetBattleEquipment` | `public override Equipment GetBattleEquipment(Hero hero)` | 方法 |
| `GetCharacterTemplateForOffspring` | `public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)` | 方法 |
| `TextObject>GenerateFirstAndFullName` | `public override ValueTuple<TextObject, TextObject>GenerateFirstAndFullName(Hero hero)` | 方法 |
| `int>>GetDefaultSkillsForHero` | `public override List<ValueTuple<SkillObject, int>>GetDefaultSkillsForHero(Hero hero)` | 方法 |
| `int>>GetInheritedSkillsForHero` | `public override List<ValueTuple<SkillObject, int>>GetInheritedSkillsForHero(Hero hero)` | 方法 |
| `IsHeroCombatant` | `public override bool IsHeroCombatant(Hero hero)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 HeroCreationModel](../HeroCreationModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
