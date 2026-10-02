---
title: "SaveLoadVM"
description: "SaveLoadVM: a public class in SandBox.ViewModelCollection.SaveLoad, inheriting ViewModel; 33 exposed members (10 methods, 22 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveLoadVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SaveLoadVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SaveLoadVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SaveLoadVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 33 public/protected members: 10 methods, 22 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveLoadVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.SaveLoad`, inheritance chain SaveLoadVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 22/33, methods 10/33), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SaveLoadVM` | `public SaveLoadVM(bool isSaving, bool isCampaignMapOnStack)` | constructor |
| `Initialize` | `public async void Initialize()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteCreateNewSaveGame` | `public void ExecuteCreateNewSaveGame()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteLoadSave` | `public void ExecuteLoadSave()` | method |
| `DeleteSelectedSave` | `public void DeleteSelectedSave()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsLoadingSaves` | `public bool IsLoadingSaves` | property |
| `IsBusyWithAnAction` | `public bool IsBusyWithAnAction` | property |
| `IsSearchAvailable` | `public bool IsSearchAvailable` | property |
| `SearchText` | `public string SearchText` | property |
| `SearchPlaceholderText` | `public string SearchPlaceholderText` | property |
| `VisualDisabledText` | `public string VisualDisabledText` | property |
| `MBBindingList` | `public MBBindingList<SavedGameGroupVM>SaveGroups` | property |
| `CurrentSelectedSave` | `public SavedGameVM CurrentSelectedSave` | property |
| `CreateNewSaveSlotText` | `public string CreateNewSaveSlotText` | property |
| `TitleText` | `public string TitleText` | property |
| `CancelText` | `public string CancelText` | property |
| `IsSaving` | `public bool IsSaving` | property |
| `CanCreateNewSave` | `public bool CanCreateNewSave` | property |
| `IsVisualDisabled` | `public bool IsVisualDisabled` | property |
| `CreateNewSaveHint` | `public HintViewModel CreateNewSaveHint` | property |
| `IsActionEnabled` | `public bool IsActionEnabled` | property |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected` | property |
| `DoneText` | `public string DoneText` | property |
| `SaveLoadText` | `public string SaveLoadText` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `SetDeleteInputKey` | `public void SetDeleteInputKey(HotKey hotkey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DeleteInputKey` | `public InputKeyItemVM DeleteInputKey` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapSaveVM](../MapSaveVM/)
- [same namespace SavedGameGroupVM](../SavedGameGroupVM/)
- [same namespace SavedGameModuleInfoVM](../SavedGameModuleInfoVM/)
- [same namespace SavedGamePropertyVM](../SavedGamePropertyVM/)
