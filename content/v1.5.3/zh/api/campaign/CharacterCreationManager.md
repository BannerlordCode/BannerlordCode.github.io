---
title: "CharacterCreationManager"
description: "CharacterCreationManager 的自动生成类参考。"
---
# CharacterCreationManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationManager `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs

## 概述

`CharacterCreationManager` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RegisterCharacterCreationContentHandler
`public void RegisterCharacterCreationContentHandler(ICharacterCreationContentHandler characterCreationContentHandler,int priority) `

### AddStage
`public void AddStage(CharacterCreationStageBase stage) `

### NextStage
`public void NextStage() `

### PreviousStage
`public void PreviousStage() `

### GoToStage
`public void GoToStage(int stageIndex) `

### GetIndexOfCurrentStage
`public int GetIndexOfCurrentStage() `

### GetTotalStagesCount
`public int GetTotalStagesCount() `

### GetFurthestIndex
`public int GetFurthestIndex() `

### AddNewMenu
`public void AddNewMenu(NarrativeMenu menu) `

### GetCurrentMenu
`public NarrativeMenu GetCurrentMenu(int index) `

### GetCurrentMenuOptions
`public IEnumerable<NarrativeMenuOption> GetCurrentMenuOptions(int index) `

### GetNarrativeMenuWithId
`public NarrativeMenu GetNarrativeMenuWithId(string stringId) `

### DeleteNarrativeMenuWithId
`public void DeleteNarrativeMenuWithId(string stringId) `

### ResetNarrativeMenus
`public void ResetNarrativeMenus() `

### ResetMenuOptions
`public void ResetMenuOptions() `

### StartNarrativeStage
`public void StartNarrativeStage() `

### TrySwitchToNextMenu
`public bool TrySwitchToNextMenu() `

### TrySwitchToPreviousMenu
`public bool TrySwitchToPreviousMenu() `

### OnNarrativeMenuOptionSelected
`public void OnNarrativeMenuOptionSelected(NarrativeMenuOption option) `

### GetSuitableNarrativeMenuOptions
`public IEnumerable<NarrativeMenuOption> GetSuitableNarrativeMenuOptions() `

### ApplyFinalEffects
`public void ApplyFinalEffects() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
