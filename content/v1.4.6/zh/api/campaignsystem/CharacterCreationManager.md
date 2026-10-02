---
title: "CharacterCreationManager"
description: "CharacterCreationManager：TaleWorlds.CampaignSystem 的 public 类；公开成员 29 个（方法 23、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs。"
---
# CharacterCreationManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterCreationManager`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs`

## 概述

CharacterCreationManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs。它是一个 public 类，继承链为 CharacterCreationManager。public/protected 成员共 29 个：23 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationManager 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CharacterCreationContent），继承链 CharacterCreationManager。成员构成以方法为主（方法 23/29，属性 5/29），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<NarrativeMenu>NarrativeMenus` | 属性 |
| `CharacterCreationContent` | `public CharacterCreationContent CharacterCreationContent` | 属性 |
| `CurrentMenu` | `public NarrativeMenu CurrentMenu` | 属性 |
| `CharacterCreationMenuCount` | `public int CharacterCreationMenuCount` | 属性 |
| `CurrentStage` | `public CharacterCreationStageBase CurrentStage` | 属性 |
| `CharacterCreationManager` | `public CharacterCreationManager(CharacterCreationState state)` | 构造函数 |
| `RegisterCharacterCreationContentHandler` | `public void RegisterCharacterCreationContentHandler(ICharacterCreationContentHandler characterCreationContentHandler, int priority)` | 方法 |
| `AddStage` | `public void AddStage(CharacterCreationStageBase stage)` | 方法 |
| `RemoveStage` | `public bool RemoveStage<T>() where T : CharacterCreationStageBase` | 方法 |
| `GetStage` | `public T GetStage<T>() where T : CharacterCreationStageBase` | 方法 |
| `NextStage` | `public void NextStage()` | 方法 |
| `PreviousStage` | `public void PreviousStage()` | 方法 |
| `GoToStage` | `public void GoToStage(int stageIndex)` | 方法 |
| `GetIndexOfCurrentStage` | `public int GetIndexOfCurrentStage()` | 方法 |
| `GetTotalStagesCount` | `public int GetTotalStagesCount()` | 方法 |
| `GetFurthestIndex` | `public int GetFurthestIndex()` | 方法 |
| `AddNewMenu` | `public void AddNewMenu(NarrativeMenu menu)` | 方法 |
| `GetCurrentMenu` | `public NarrativeMenu GetCurrentMenu(int index)` | 方法 |
| `IEnumerable` | `public IEnumerable<NarrativeMenuOption>GetCurrentMenuOptions(int index)` | 方法 |
| `GetNarrativeMenuWithId` | `public NarrativeMenu GetNarrativeMenuWithId(string stringId)` | 方法 |
| `DeleteNarrativeMenuWithId` | `public void DeleteNarrativeMenuWithId(string stringId)` | 方法 |
| `ResetNarrativeMenus` | `public void ResetNarrativeMenus()` | 方法 |
| `ResetMenuOptions` | `public void ResetMenuOptions()` | 方法 |
| `StartNarrativeStage` | `public void StartNarrativeStage()` | 方法 |
| `TrySwitchToNextMenu` | `public bool TrySwitchToNextMenu()` | 方法 |
| `TrySwitchToPreviousMenu` | `public bool TrySwitchToPreviousMenu()` | 方法 |
| `OnNarrativeMenuOptionSelected` | `public void OnNarrativeMenuOptionSelected(NarrativeMenuOption option)` | 方法 |
| `IEnumerable` | `public IEnumerable<NarrativeMenuOption>GetSuitableNarrativeMenuOptions()` | 方法 |
| `ApplyFinalEffects` | `public void ApplyFinalEffects()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage)
- [同命名空间 CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage)
- [同命名空间 CharacterCreationContent](../CharacterCreationContent)
- [同命名空间 CharacterCreationCultureStage](../CharacterCreationCultureStage)
