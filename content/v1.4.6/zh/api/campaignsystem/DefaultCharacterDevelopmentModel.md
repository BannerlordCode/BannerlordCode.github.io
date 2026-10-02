---
title: "DefaultCharacterDevelopmentModel"
description: "DefaultCharacterDevelopmentModel：TaleWorlds.CampaignSystem 的 public 类，继承 CharacterDevelopmentModel；公开成员 23 个（方法 14、属性 8、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs。"
---
# DefaultCharacterDevelopmentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs`

## 概述

DefaultCharacterDevelopmentModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs。它是一个 public 类，实现/继承 CharacterDevelopmentModel，继承链为 DefaultCharacterDevelopmentModel → CharacterDevelopmentModel → MBGameModel。public/protected 成员共 23 个：14 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultCharacterDevelopmentModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultCharacterDevelopmentModel → CharacterDevelopmentModel → MBGameModel。成员构成以方法为主（方法 14/23，属性 8/23），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultCharacterDevelopmentModel` | `public DefaultCharacterDevelopmentModel()` | 构造函数 |
| `InitializeSkillsRequiredForLevel` | `public void InitializeSkillsRequiredForLevel()` | 方法 |
| `InitializeXpRequiredForSkillLevel` | `public void InitializeXpRequiredForSkillLevel()` | 方法 |
| `MaxFocusPerSkill` | `public override int MaxFocusPerSkill` | 属性 |
| `MaxAttribute` | `public override int MaxAttribute` | 属性 |
| `SkillsRequiredForLevel` | `public override int SkillsRequiredForLevel(int level)` | 方法 |
| `GetMaxSkillPoint` | `public override int GetMaxSkillPoint()` | 方法 |
| `GetXpRequiredForSkillLevel` | `public override int GetXpRequiredForSkillLevel(int skillLevel)` | 方法 |
| `GetSkillLevelChange` | `public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)` | 方法 |
| `GetXpAmountForSkillLevelChange` | `public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)` | 方法 |
| `GetTraitLevelForTraitXp` | `public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)` | 方法 |
| `GetTraitXpRequiredForTraitLevel` | `public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)` | 方法 |
| `AttributePointsAtStart` | `public override int AttributePointsAtStart` | 属性 |
| `LevelsPerAttributePoint` | `public override int LevelsPerAttributePoint` | 属性 |
| `FocusPointsPerLevel` | `public override int FocusPointsPerLevel` | 属性 |
| `FocusPointsAtStart` | `public override int FocusPointsAtStart` | 属性 |
| `MaxSkillRequiredForEpicPerkBonus` | `public override int MaxSkillRequiredForEpicPerkBonus` | 属性 |
| `MinSkillRequiredForEpicPerkBonus` | `public override int MinSkillRequiredForEpicPerkBonus` | 属性 |
| `CalculateLearningLimit` | `public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)` | 方法 |
| `CalculateLearningRate` | `public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)` | 方法 |
| `GetNextSkillToAddFocus` | `public override SkillObject GetNextSkillToAddFocus(Hero hero)` | 方法 |
| `GetNextAttributeToUpgrade` | `public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)` | 方法 |
| `GetNextPerkToChoose` | `public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
