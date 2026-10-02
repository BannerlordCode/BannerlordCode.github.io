---
title: "CharacterCreationManager"
description: "CharacterCreationManager: a public class in TaleWorlds.CampaignSystem.CharacterCreationContent; 29 exposed members (23 methods, 5 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterCreationManager`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

CharacterCreationManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs. It is a public class; the inheritance chain is CharacterCreationManager. It exposes 29 public/protected members: 23 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterCreationContent`, inheritance chain CharacterCreationManager. The surface is method-led (methods 23/29, properties 5/29), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<NarrativeMenu>NarrativeMenus` | property |
| `CharacterCreationContent` | `public CharacterCreationContent CharacterCreationContent` | property |
| `CurrentMenu` | `public NarrativeMenu CurrentMenu` | property |
| `CharacterCreationMenuCount` | `public int CharacterCreationMenuCount` | property |
| `CurrentStage` | `public CharacterCreationStageBase CurrentStage` | property |
| `CharacterCreationManager` | `public CharacterCreationManager(CharacterCreationState state)` | constructor |
| `RegisterCharacterCreationContentHandler` | `public void RegisterCharacterCreationContentHandler(ICharacterCreationContentHandler characterCreationContentHandler, int priority)` | method |
| `AddStage` | `public void AddStage(CharacterCreationStageBase stage)` | method |
| `RemoveStage` | `public bool RemoveStage<T>() where T : CharacterCreationStageBase` | method |
| `GetStage` | `public T GetStage<T>() where T : CharacterCreationStageBase` | method |
| `NextStage` | `public void NextStage()` | method |
| `PreviousStage` | `public void PreviousStage()` | method |
| `GoToStage` | `public void GoToStage(int stageIndex)` | method |
| `GetIndexOfCurrentStage` | `public int GetIndexOfCurrentStage()` | method |
| `GetTotalStagesCount` | `public int GetTotalStagesCount()` | method |
| `GetFurthestIndex` | `public int GetFurthestIndex()` | method |
| `AddNewMenu` | `public void AddNewMenu(NarrativeMenu menu)` | method |
| `GetCurrentMenu` | `public NarrativeMenu GetCurrentMenu(int index)` | method |
| `IEnumerable` | `public IEnumerable<NarrativeMenuOption>GetCurrentMenuOptions(int index)` | method |
| `GetNarrativeMenuWithId` | `public NarrativeMenu GetNarrativeMenuWithId(string stringId)` | method |
| `DeleteNarrativeMenuWithId` | `public void DeleteNarrativeMenuWithId(string stringId)` | method |
| `ResetNarrativeMenus` | `public void ResetNarrativeMenus()` | method |
| `ResetMenuOptions` | `public void ResetMenuOptions()` | method |
| `StartNarrativeStage` | `public void StartNarrativeStage()` | method |
| `TrySwitchToNextMenu` | `public bool TrySwitchToNextMenu()` | method |
| `TrySwitchToPreviousMenu` | `public bool TrySwitchToPreviousMenu()` | method |
| `OnNarrativeMenuOptionSelected` | `public void OnNarrativeMenuOptionSelected(NarrativeMenuOption option)` | method |
| `IEnumerable` | `public IEnumerable<NarrativeMenuOption>GetSuitableNarrativeMenuOptions()` | method |
| `ApplyFinalEffects` | `public void ApplyFinalEffects()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [same namespace CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [same namespace CharacterCreationContent](../CharacterCreationContent/)
- [same namespace CharacterCreationCultureStage](../CharacterCreationCultureStage/)
