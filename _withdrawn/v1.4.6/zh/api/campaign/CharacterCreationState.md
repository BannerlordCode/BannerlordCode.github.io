---
title: "CharacterCreationState"
description: "CharacterCreationState：TaleWorlds.CampaignSystem.CharacterCreationContent 的 public 类，继承 PlayerGameState；公开成员 8 个（方法 5、属性 2、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationState

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterCreationState : PlayerGameState`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

CharacterCreationState 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationState.cs。它是一个 public 类，实现/继承 PlayerGameState，继承链为 CharacterCreationState → PlayerGameState → GameState → MBObjectBase。public/protected 成员共 8 个：5 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationState 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent`，继承链 CharacterCreationState → PlayerGameState → GameState → MBObjectBase。成员构成以方法为主（方法 5/8，属性 2/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationManager` | `public CharacterCreationManager CharacterCreationManager` | 属性 |
| `Handler` | `public ICharacterCreationStateHandler Handler` | 属性 |
| `CharacterCreationState` | `public CharacterCreationState()` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `FinalizeCharacterCreationState` | `public void FinalizeCharacterCreationState()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `OnStageActivated` | `public void OnStageActivated(CharacterCreationStageBase stage)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PlayerGameState](../../core-extra/PlayerGameState/)
- [同命名空间 CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [同命名空间 CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [同命名空间 CharacterCreationContent](../CharacterCreationContent/)
- [同命名空间 CharacterCreationCultureStage](../CharacterCreationCultureStage/)
