---
title: "NarrativeMenu"
description: "NarrativeMenu：TaleWorlds.CampaignSystem 的 public 类；公开成员 7 个（方法 3、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenu.cs。"
---
# NarrativeMenu

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class NarrativeMenu`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenu.cs`

## 概述

NarrativeMenu 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenu.cs。它是一个 public 类（sealed），继承链为 NarrativeMenu。public/protected 成员共 7 个：3 方法、2 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NarrativeMenu 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CharacterCreationContent），继承链 NarrativeMenu。成员构成以方法为主（方法 3/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenu.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<NarrativeMenuCharacter>Characters` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<NarrativeMenuOption>CharacterCreationMenuOptions` | 属性 |
| `NarrativeMenu` | `public NarrativeMenu(string stringId, string inputMenuId, string outputMenuId, TextObject title, TextObject description, List<NarrativeMenuCharacter>characters, NarrativeMenu.GetNarrativeMenuCharacterArgsDelegate getNarrativeMenuCharacterArgs)` | 构造函数 |
| `AddNarrativeMenuOption` | `public void AddNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)` | 方法 |
| `RemoveNarrativeMenuOption` | `public void RemoveNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)` | 方法 |
| `List` | `public delegate List<NarrativeMenuCharacterArgs>GetNarrativeMenuCharacterArgsDelegate(CultureObject culture, string occupationType, CharacterCreationManager characterCreationManager);` | 方法 |
| `List` | `public delegate List<NarrativeMenuCharacterArgs>GetNarrativeMenuCharacterArgsDelegate(CultureObject culture, string occupationType, CharacterCreationManager characterCreationManager)` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage)
- [同命名空间 CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage)
- [同命名空间 CharacterCreationContent](../CharacterCreationContent)
- [同命名空间 CharacterCreationCultureStage](../CharacterCreationCultureStage)
