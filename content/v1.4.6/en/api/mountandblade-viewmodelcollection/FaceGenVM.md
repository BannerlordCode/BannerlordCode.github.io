---
title: "FaceGenVM"
description: "FaceGenVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 101 exposed members (28 methods, 69 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs."
---
# FaceGenVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class FaceGenVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs`

## Overview

FaceGenVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is FaceGenVM → ViewModel. It exposes 101 public/protected members: 28 methods, 69 properties, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FaceGenVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator) the module directory; inheritance chain FaceGenVM → ViewModel. The surface is property-led (properties 69/101, methods 28/101), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetFaceGenerationParams` | `public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)` | method |
| `FaceGenVM` | `public FaceGenVM(BodyGenerator bodyGenerator, IFaceGeneratorHandler faceGeneratorScreen, Action<float>onHeightChanged, Action onAgeChanged, TextObject affirmitiveText, TextObject negativeText, int currentStageIndex, int totalStagesCount, int furthestIndex, Action<int>goToIndex, bool canChangeGender, bool openedFromMultiplayer, IFaceGeneratorCustomFilter filter)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `InitializeHistory` | `public void InitializeHistory(FaceGenHistory faceGenHistory)` | method |
| `OnTabClicked` | `public void OnTabClicked(int index)` | method |
| `SelectPreviousTab` | `public void SelectPreviousTab()` | method |
| `SelectNextTab` | `public void SelectNextTab()` | method |
| `Refresh` | `public void Refresh(bool clearProperties)` | method |
| `ExecuteHearCurrentVoiceSample` | `public void ExecuteHearCurrentVoiceSample()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `ExecuteResetAll` | `public void ExecuteResetAll()` | method |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | method |
| `ExecuteRandomizeAll` | `public void ExecuteRandomizeAll()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteRedo` | `public void ExecuteRedo()` | method |
| `ExecuteUndo` | `public void ExecuteUndo()` | method |
| `ExecuteChangeClothing` | `public void ExecuteChangeClothing()` | method |
| `AddCommand` | `public void AddCommand()` | method |
| `SetBodyProperties` | `public void SetBodyProperties(BodyProperties bodyProperties, bool ignoreDebugValues, int race = 0, int gender = -1, bool recordChange = false)` | method |
| `UpdateFacegen` | `public void UpdateFacegen()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotKey)` | method |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | property |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | property |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | property |
| `AreAllTabsEnabled` | `public bool AreAllTabsEnabled` | property |
| `IsBodyEnabled` | `public bool IsBodyEnabled` | property |
| `IsFaceEnabled` | `public bool IsFaceEnabled` | property |
| `IsEyesEnabled` | `public bool IsEyesEnabled` | property |
| `IsNoseEnabled` | `public bool IsNoseEnabled` | property |
| `IsMouthEnabled` | `public bool IsMouthEnabled` | property |
| `IsHairEnabled` | `public bool IsHairEnabled` | property |
| `IsTaintEnabled` | `public bool IsTaintEnabled` | property |
| `FlipHairLbl` | `public string FlipHairLbl` | property |
| `SkinColorLbl` | `public string SkinColorLbl` | property |
| `RaceLbl` | `public string RaceLbl` | property |
| `GenderLbl` | `public string GenderLbl` | property |
| `CancelBtnLbl` | `public string CancelBtnLbl` | property |
| `DoneBtnLbl` | `public string DoneBtnLbl` | property |
| `BodyHint` | `public HintViewModel BodyHint` | property |
| `FaceHint` | `public HintViewModel FaceHint` | property |
| `EyesHint` | `public HintViewModel EyesHint` | property |
| `NoseHint` | `public HintViewModel NoseHint` | property |
| `HairHint` | `public HintViewModel HairHint` | property |
| `TaintHint` | `public HintViewModel TaintHint` | property |
| `MouthHint` | `public HintViewModel MouthHint` | property |
| `RedoHint` | `public HintViewModel RedoHint` | property |
| `UndoHint` | `public HintViewModel UndoHint` | property |
| `RandomizeHint` | `public HintViewModel RandomizeHint` | property |
| `RandomizeAllHint` | `public HintViewModel RandomizeAllHint` | property |
| `ResetHint` | `public HintViewModel ResetHint` | property |
| `ResetAllHint` | `public HintViewModel ResetAllHint` | property |
| `ClothHint` | `public HintViewModel ClothHint` | property |
| `HairNum` | `public int HairNum` | property |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>SkinColorSelector` | property |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>HairColorSelector` | property |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>TattooColorSelector` | property |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>RaceSelector` | property |
| `Tab` | `public int Tab` | property |
| `SelectedGender` | `public int SelectedGender` | property |
| `IsFemale` | `public bool IsFemale` | property |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>BodyProperties` | property |
| `CanChangeGender` | `public bool CanChangeGender` | property |
| `CanChangeRace` | `public bool CanChangeRace` | property |
| `IsUndoEnabled` | `public bool IsUndoEnabled` | property |
| `IsRedoEnabled` | `public bool IsRedoEnabled` | property |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>FaceProperties` | property |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>EyesProperties` | property |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>NoseProperties` | property |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>MouthProperties` | property |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>HairProperties` | property |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>TaintProperties` | property |
| `MBBindingList` | `public MBBindingList<FacegenListItemVM>TaintTypes` | property |
| `MBBindingList` | `public MBBindingList<FacegenListItemVM>BeardTypes` | property |
| `MBBindingList` | `public MBBindingList<FacegenListItemVM>HairTypes` | property |
| `SoundPreset` | `public FaceGenPropertyVM SoundPreset` | property |
| `EyebrowTypes` | `public FaceGenPropertyVM EyebrowTypes` | property |
| `TeethTypes` | `public FaceGenPropertyVM TeethTypes` | property |
| `FlipHairCb` | `public bool FlipHairCb` | property |
| `IsDressed` | `public bool IsDressed` | property |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled` | property |
| `FaceTypes` | `public FaceGenPropertyVM FaceTypes` | property |
| `Title` | `public string Title` | property |
| `TotalStageCount` | `public int TotalStageCount` | property |
| `CurrentStageIndex` | `public int CurrentStageIndex` | property |
| `FurthestIndex` | `public int FurthestIndex` | property |
| `FaceGenTabs` | `public enum FaceGenTabs` | property |
| `Presets` | `public enum Presets` | property |
| `GenderBasedSelectedValue` | `public struct GenderBasedSelectedValue` | property |
| `FaceGenTabs` | `public enum FaceGenTabs` | nested type |
| `Presets` | `public enum Presets` | nested type |
| `GenderBasedSelectedValue` | `public struct GenderBasedSelectedValue` | nested type |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FacegenListItemVM](../FacegenListItemVM)
- [same namespace FaceGenPropertyVM](../FaceGenPropertyVM)
