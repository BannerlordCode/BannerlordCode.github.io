---
title: "NarrativeMenuOption"
description: "NarrativeMenuOption：TaleWorlds.CampaignSystem.CharacterCreationContent 的 public 类；公开成员 9 个（方法 7、属性 1、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NarrativeMenuOption

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class NarrativeMenuOption`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

NarrativeMenuOption 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs。它是一个 public 类（sealed），继承链为 NarrativeMenuOption。public/protected 成员共 9 个：7 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NarrativeMenuOption 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent`，继承链 NarrativeMenuOption。成员构成以方法为主（方法 7/9，属性 1/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PositiveEffectText` | `public TextObject PositiveEffectText` | 属性 |
| `NarrativeMenuOption` | `public NarrativeMenuOption(string stringId, TextObject text, TextObject descriptionText, GetNarrativeMenuOptionArgsDelegate getNarrativeMenuOptionArgs, NarrativeMenuOptionOnConditionDelegate onCondition, NarrativeMenuOptionOnSelectDelegate onSelect, NarrativeMenuOptionOnConsequenceDelegate onConsequence)` | 构造函数 |
| `OnCondition` | `public bool OnCondition(CharacterCreationManager characterCreationManager)` | 方法 |
| `OnSelect` | `public void OnSelect(CharacterCreationManager characterCreationManager)` | 方法 |
| `OnConsequence` | `public void OnConsequence(CharacterCreationManager characterCreationManager)` | 方法 |
| `SetOnCondition` | `public void SetOnCondition(NarrativeMenuOptionOnConditionDelegate onCondition)` | 方法 |
| `SetOnSelect` | `public void SetOnSelect(NarrativeMenuOptionOnSelectDelegate onSelect)` | 方法 |
| `SetOnConsequence` | `public void SetOnConsequence(NarrativeMenuOptionOnConsequenceDelegate onConsequence)` | 方法 |
| `ApplyFinalEffects` | `public void ApplyFinalEffects(CharacterCreationContent characterCreationContent)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [同命名空间 CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [同命名空间 CharacterCreationContent](../CharacterCreationContent/)
- [同命名空间 CharacterCreationCultureStage](../CharacterCreationCultureStage/)
