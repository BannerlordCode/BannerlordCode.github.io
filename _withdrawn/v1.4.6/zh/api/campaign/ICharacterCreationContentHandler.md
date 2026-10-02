---
title: "ICharacterCreationContentHandler"
description: "ICharacterCreationContentHandler：TaleWorlds.CampaignSystem.CharacterCreationContent 的 public 接口；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/ICharacterCreationContentHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICharacterCreationContentHandler

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICharacterCreationContentHandler`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/ICharacterCreationContentHandler.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

ICharacterCreationContentHandler 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/ICharacterCreationContentHandler.cs。它是一个 public 接口，继承链为 ICharacterCreationContentHandler。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICharacterCreationContentHandler 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent`，继承链 ICharacterCreationContentHandler。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterCreationContent/ICharacterCreationContentHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitializeContent` | `void InitializeContent(CharacterCreationManager characterCreationManager);` | 方法 |
| `AfterInitializeContent` | `void AfterInitializeContent(CharacterCreationManager characterCreationManager);` | 方法 |
| `OnStageCompleted` | `void OnStageCompleted(CharacterCreationStageBase stage);` | 方法 |
| `OnCharacterCreationFinalize` | `void OnCharacterCreationFinalize(CharacterCreationManager characterCreationManager);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [同命名空间 CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [同命名空间 CharacterCreationContent](../CharacterCreationContent/)
- [同命名空间 CharacterCreationCultureStage](../CharacterCreationCultureStage/)
