---
title: "NarrativeMenuOptionArgs"
description: "NarrativeMenuOptionArgs：TaleWorlds.CampaignSystem 的 public 类；公开成员 22 个（方法 9、属性 12、字段 0）。源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs。"
---
# NarrativeMenuOptionArgs

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NarrativeMenuOptionArgs`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs`

## 概述

NarrativeMenuOptionArgs 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs。它是一个 public 类，继承链为 NarrativeMenuOptionArgs。public/protected 成员共 22 个：9 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NarrativeMenuOptionArgs 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CharacterCreationContent），继承链 NarrativeMenuOptionArgs。成员构成以属性为主（属性 12/22，方法 9/22），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBList` | `public MBList<SkillObject>AffectedSkills` | 属性 |
| `SkillLevelToAdd` | `public int SkillLevelToAdd` | 属性 |
| `MBList` | `public MBList<TraitObject>AffectedTraits` | 属性 |
| `TraitLevelToAdd` | `public int TraitLevelToAdd` | 属性 |
| `FocusToAdd` | `public int FocusToAdd` | 属性 |
| `UnspentFocusToAdd` | `public int UnspentFocusToAdd` | 属性 |
| `EffectedAttribute` | `public CharacterAttribute EffectedAttribute` | 属性 |
| `AttributeLevelToAdd` | `public int AttributeLevelToAdd` | 属性 |
| `UnspentAttributeToAdd` | `public int UnspentAttributeToAdd` | 属性 |
| `RenownToAdd` | `public int RenownToAdd` | 属性 |
| `GoldToAdd` | `public int GoldToAdd` | 属性 |
| `PositiveEffectText` | `public TextObject PositiveEffectText` | 属性 |
| `NarrativeMenuOptionArgs` | `public NarrativeMenuOptionArgs()` | 构造函数 |
| `SetAffectedSkills` | `public void SetAffectedSkills(SkillObject[]affectedSkills)` | 方法 |
| `SetFocusToSkills` | `public void SetFocusToSkills(int focusToAdd)` | 方法 |
| `SetLevelToSkills` | `public void SetLevelToSkills(int levelToAdd)` | 方法 |
| `SetAffectedTraits` | `public void SetAffectedTraits(TraitObject[]affectedTraits)` | 方法 |
| `SetLevelToTraits` | `public void SetLevelToTraits(int levelToAdd)` | 方法 |
| `SetLevelToAttribute` | `public void SetLevelToAttribute(CharacterAttribute characterAttribute, int levelToAdd)` | 方法 |
| `SetRenownToAdd` | `public void SetRenownToAdd(int value)` | 方法 |
| `SetUnspentFocusToAdd` | `public void SetUnspentFocusToAdd(int value)` | 方法 |
| `SetUnspentAttributeToAdd` | `public void SetUnspentAttributeToAdd(int value)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage)
- [同命名空间 CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage)
- [同命名空间 CharacterCreationContent](../CharacterCreationContent)
- [同命名空间 CharacterCreationCultureStage](../CharacterCreationCultureStage)
