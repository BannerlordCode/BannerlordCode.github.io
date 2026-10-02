---
title: "CharacterCreationManager"
description: "Auto-generated class reference for CharacterCreationManager."
---
# CharacterCreationManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationManager `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs

## Overview

Auto-generated stub for `CharacterCreationManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RegisterCharacterCreationContentHandler
`public void RegisterCharacterCreationContentHandler(ICharacterCreationContentHandler characterCreationContentHandler,int priority)`

### AddStage
`public void AddStage(CharacterCreationStageBase stage)`

### NextStage
`public void NextStage()`

### PreviousStage
`public void PreviousStage()`

### GoToStage
`public void GoToStage(int stageIndex)`

### GetIndexOfCurrentStage
`public int GetIndexOfCurrentStage()`

### GetTotalStagesCount
`public int GetTotalStagesCount()`

### GetFurthestIndex
`public int GetFurthestIndex()`

### AddNewMenu
`public void AddNewMenu(NarrativeMenu menu)`

### GetCurrentMenu
`public NarrativeMenu GetCurrentMenu(int index)`

### GetCurrentMenuOptions
`public IEnumerable<NarrativeMenuOption> GetCurrentMenuOptions(int index)`

### GetNarrativeMenuWithId
`public NarrativeMenu GetNarrativeMenuWithId(string stringId)`

### DeleteNarrativeMenuWithId
`public void DeleteNarrativeMenuWithId(string stringId)`

### ResetNarrativeMenus
`public void ResetNarrativeMenus()`

### ResetMenuOptions
`public void ResetMenuOptions()`

### StartNarrativeStage
`public void StartNarrativeStage()`

### TrySwitchToNextMenu
`public bool TrySwitchToNextMenu()`

### TrySwitchToPreviousMenu
`public bool TrySwitchToPreviousMenu()`

### OnNarrativeMenuOptionSelected
`public void OnNarrativeMenuOptionSelected(NarrativeMenuOption option)`

### GetSuitableNarrativeMenuOptions
`public IEnumerable<NarrativeMenuOption> GetSuitableNarrativeMenuOptions()`

### ApplyFinalEffects
`public void ApplyFinalEffects()`

## See Also

- [Section index](../)
