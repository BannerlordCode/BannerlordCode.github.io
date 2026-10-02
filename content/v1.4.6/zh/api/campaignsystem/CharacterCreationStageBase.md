---
title: "CharacterCreationStageBase"
description: "CharacterCreationStageBase：TaleWorlds.CampaignSystem 的 public 类；公开成员 2 个（方法 1、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationStageBase.cs。"
---
# CharacterCreationStageBase

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CharacterCreationStageBase`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationStageBase.cs`

## 概述

CharacterCreationStageBase 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationStageBase.cs。它是一个 public 类（abstract），继承链为 CharacterCreationStageBase。public/protected 成员共 2 个：1 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationStageBase 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CharacterCreationContent），继承链 CharacterCreationStageBase。成员构成以方法为主（方法 1/2，属性 1/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationStageBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Listener` | `public ICharacterCreationStageListener Listener` | 属性 |
| `OnFinalize` | `protected internal virtual void OnFinalize()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage)
- [同命名空间 CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage)
- [同命名空间 CharacterCreationContent](../CharacterCreationContent)
- [同命名空间 CharacterCreationCultureStage](../CharacterCreationCultureStage)
