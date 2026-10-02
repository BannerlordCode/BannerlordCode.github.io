---
title: "CharacterDevelopmentModel"
description: "CharacterDevelopmentModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<CharacterDevelopmentModel>；公开成员 20 个（方法 12、属性 8、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterDevelopmentModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

CharacterDevelopmentModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<CharacterDevelopmentModel>，继承链为 CharacterDevelopmentModel → MBGameModel → GameModel。public/protected 成员共 20 个：12 方法、8 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterDevelopmentModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 CharacterDevelopmentModel → MBGameModel → GameModel。成员构成以方法为主（方法 12/20，属性 8/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SkillsRequiredForLevel` | `public abstract int SkillsRequiredForLevel(int level);` | 方法 |
| `GetMaxSkillPoint` | `public abstract int GetMaxSkillPoint();` | 方法 |
| `GetXpRequiredForSkillLevel` | `public abstract int GetXpRequiredForSkillLevel(int skillLevel);` | 方法 |
| `GetSkillLevelChange` | `public abstract int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp);` | 方法 |
| `GetXpAmountForSkillLevelChange` | `public abstract int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange);` | 方法 |
| `MaxAttribute` | `public abstract int MaxAttribute` | 属性 |
| `MaxFocusPerSkill` | `public abstract int MaxFocusPerSkill` | 属性 |
| `MaxSkillRequiredForEpicPerkBonus` | `public abstract int MaxSkillRequiredForEpicPerkBonus` | 属性 |
| `MinSkillRequiredForEpicPerkBonus` | `public abstract int MinSkillRequiredForEpicPerkBonus` | 属性 |
| `GetTraitLevelForTraitXp` | `public abstract void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int newValue, out int traitLevel, out int traitXp);` | 方法 |
| `GetTraitXpRequiredForTraitLevel` | `public abstract int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel);` | 方法 |
| `FocusPointsPerLevel` | `public abstract int FocusPointsPerLevel` | 属性 |
| `FocusPointsAtStart` | `public abstract int FocusPointsAtStart` | 属性 |
| `AttributePointsAtStart` | `public abstract int AttributePointsAtStart` | 属性 |
| `LevelsPerAttributePoint` | `public abstract int LevelsPerAttributePoint` | 属性 |
| `CalculateLearningLimit` | `public abstract ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false);` | 方法 |
| `CalculateLearningRate` | `public abstract ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false);` | 方法 |
| `GetNextSkillToAddFocus` | `public abstract SkillObject GetNextSkillToAddFocus(Hero hero);` | 方法 |
| `GetNextAttributeToUpgrade` | `public abstract CharacterAttribute GetNextAttributeToUpgrade(Hero hero);` | 方法 |
| `GetNextPerkToChoose` | `public abstract PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
