---
title: "SavedGameVM"
description: "SavedGameVM: a public class in SandBox.ViewModelCollection.SaveLoad, inheriting ViewModel; 35 exposed members (5 methods, 29 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SavedGameVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SavedGameVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SavedGameVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SavedGameVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 35 public/protected members: 5 methods, 29 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SavedGameVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.SaveLoad`, inheritance chain SavedGameVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 29/35, methods 5/35), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Save` | `public SaveGameFileInfo Save` | property |
| `RequiresInquiryOnLoad` | `public bool RequiresInquiryOnLoad` | property |
| `IsModuleDiscrepancyDetected` | `public bool IsModuleDiscrepancyDetected` | property |
| `SavedGameVM` | `public SavedGameVM(SaveGameFileInfo save, bool isSaving, Action<SavedGameVM>onDelete, Action<SavedGameVM>onSelection, Action onCancelLoadSave, Action onDone, bool isCorruptedSave = false, bool isIronman = false)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSaveLoad` | `public void ExecuteSaveLoad()` | method |
| `ExecuteUpdate` | `public void ExecuteUpdate()` | method |
| `ExecuteDelete` | `public void ExecuteDelete()` | method |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `MBBindingList` | `public MBBindingList<SavedGamePropertyVM>SavedGameProperties` | property |
| `MBBindingList` | `public MBBindingList<SavedGameModuleInfoVM>LoadedModulesInSave` | property |
| `SaveVersionAsString` | `public string SaveVersionAsString` | property |
| `DeleteText` | `public string DeleteText` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsCorrupted` | `public bool IsCorrupted` | property |
| `BannerTextCode` | `public string BannerTextCode` | property |
| `SaveLoadText` | `public string SaveLoadText` | property |
| `OverrideSaveText` | `public string OverrideSaveText` | property |
| `UpdateSaveText` | `public string UpdateSaveText` | property |
| `ModulesText` | `public string ModulesText` | property |
| `CorruptedSaveText` | `public string CorruptedSaveText` | property |
| `NameText` | `public string NameText` | property |
| `GameTimeText` | `public string GameTimeText` | property |
| `CharacterNameText` | `public string CharacterNameText` | property |
| `MainHeroVisualCode` | `public string MainHeroVisualCode` | property |
| `CharacterVisual` | `public CharacterViewModel CharacterVisual` | property |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | property |
| `RealTimeText1` | `public string RealTimeText1` | property |
| `RealTimeText2` | `public string RealTimeText2` | property |
| `LevelText` | `public string LevelText` | property |
| `DateTimeHint` | `public HintViewModel DateTimeHint` | property |
| `UpdateButtonHint` | `public HintViewModel UpdateButtonHint` | property |
| `DisabledReasonHint` | `public HintViewModel DisabledReasonHint` | property |
| `IsFilteredOut` | `public bool IsFilteredOut` | property |
| `IsDisabled` | `public bool IsDisabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapSaveVM](../MapSaveVM/)
- [same namespace SavedGameGroupVM](../SavedGameGroupVM/)
- [same namespace SavedGameModuleInfoVM](../SavedGameModuleInfoVM/)
- [same namespace SavedGamePropertyVM](../SavedGamePropertyVM/)
