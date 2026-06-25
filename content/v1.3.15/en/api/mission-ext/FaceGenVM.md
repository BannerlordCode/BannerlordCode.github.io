---
title: "FaceGenVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGenVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceGenVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGenVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs`

## Overview

`FaceGenVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `AreAllTabsEnabled` | `public bool AreAllTabsEnabled { get; }` |
| `IsBodyEnabled` | `public bool IsBodyEnabled { get; set; }` |
| `IsFaceEnabled` | `public bool IsFaceEnabled { get; set; }` |
| `IsEyesEnabled` | `public bool IsEyesEnabled { get; set; }` |
| `IsNoseEnabled` | `public bool IsNoseEnabled { get; set; }` |
| `IsMouthEnabled` | `public bool IsMouthEnabled { get; set; }` |
| `IsHairEnabled` | `public bool IsHairEnabled { get; set; }` |
| `IsTaintEnabled` | `public bool IsTaintEnabled { get; set; }` |
| `FlipHairLbl` | `public string FlipHairLbl { get; set; }` |
| `SkinColorLbl` | `public string SkinColorLbl { get; set; }` |
| `RaceLbl` | `public string RaceLbl { get; set; }` |
| `GenderLbl` | `public string GenderLbl { get; set; }` |
| `CancelBtnLbl` | `public string CancelBtnLbl { get; set; }` |
| `DoneBtnLbl` | `public string DoneBtnLbl { get; set; }` |
| `BodyHint` | `public HintViewModel BodyHint { get; set; }` |
| `FaceHint` | `public HintViewModel FaceHint { get; set; }` |
| `EyesHint` | `public HintViewModel EyesHint { get; set; }` |
| `NoseHint` | `public HintViewModel NoseHint { get; set; }` |
| `HairHint` | `public HintViewModel HairHint { get; set; }` |
| `TaintHint` | `public HintViewModel TaintHint { get; set; }` |
| `MouthHint` | `public HintViewModel MouthHint { get; set; }` |
| `RedoHint` | `public HintViewModel RedoHint { get; set; }` |
| `UndoHint` | `public HintViewModel UndoHint { get; set; }` |
| `RandomizeHint` | `public HintViewModel RandomizeHint { get; set; }` |
| `RandomizeAllHint` | `public HintViewModel RandomizeAllHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `ResetAllHint` | `public HintViewModel ResetAllHint { get; set; }` |
| `ClothHint` | `public HintViewModel ClothHint { get; set; }` |
| `HairNum` | `public int HairNum { get; set; }` |
| `SkinColorSelector` | `public SelectorVM<SelectorItemVM> SkinColorSelector { get; set; }` |
| `HairColorSelector` | `public SelectorVM<SelectorItemVM> HairColorSelector { get; set; }` |
| `TattooColorSelector` | `public SelectorVM<SelectorItemVM> TattooColorSelector { get; set; }` |
| `RaceSelector` | `public SelectorVM<SelectorItemVM> RaceSelector { get; set; }` |
| `Tab` | `public int Tab { get; set; }` |
| `SelectedGender` | `public int SelectedGender { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `BodyProperties` | `public MBBindingList<FaceGenPropertyVM> BodyProperties { get; set; }` |
| `CanChangeGender` | `public bool CanChangeGender { get; set; }` |
| `CanChangeRace` | `public bool CanChangeRace { get; set; }` |
| `IsUndoEnabled` | `public bool IsUndoEnabled { get; set; }` |
| `IsRedoEnabled` | `public bool IsRedoEnabled { get; set; }` |
| `FaceProperties` | `public MBBindingList<FaceGenPropertyVM> FaceProperties { get; set; }` |
| `EyesProperties` | `public MBBindingList<FaceGenPropertyVM> EyesProperties { get; set; }` |
| `NoseProperties` | `public MBBindingList<FaceGenPropertyVM> NoseProperties { get; set; }` |
| `MouthProperties` | `public MBBindingList<FaceGenPropertyVM> MouthProperties { get; set; }` |
| `HairProperties` | `public MBBindingList<FaceGenPropertyVM> HairProperties { get; set; }` |
| `TaintProperties` | `public MBBindingList<FaceGenPropertyVM> TaintProperties { get; set; }` |
| `TaintTypes` | `public MBBindingList<FacegenListItemVM> TaintTypes { get; set; }` |
| `BeardTypes` | `public MBBindingList<FacegenListItemVM> BeardTypes { get; set; }` |
| `HairTypes` | `public MBBindingList<FacegenListItemVM> HairTypes { get; set; }` |
| `SoundPreset` | `public FaceGenPropertyVM SoundPreset { get; set; }` |
| `EyebrowTypes` | `public FaceGenPropertyVM EyebrowTypes { get; set; }` |
| `TeethTypes` | `public FaceGenPropertyVM TeethTypes { get; set; }` |
| `FlipHairCb` | `public bool FlipHairCb { get; set; }` |
| `IsDressed` | `public bool IsDressed { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |
| `FaceTypes` | `public FaceGenPropertyVM FaceTypes { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `TotalStageCount` | `public int TotalStageCount { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `FurthestIndex` | `public int FurthestIndex { get; set; }` |

## Key Methods

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**Purpose:** Sets the value or state of `face generation params`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### InitializeHistory
`public void InitializeHistory(FaceGenHistory faceGenHistory)`

**Purpose:** Initializes the state, resources, or bindings for `history`.

### OnTabClicked
`public void OnTabClicked(int index)`

**Purpose:** Called when the `tab clicked` event is raised.

### SelectPreviousTab
`public void SelectPreviousTab()`

**Purpose:** Handles logic related to `select previous tab`.

### SelectNextTab
`public void SelectNextTab()`

**Purpose:** Handles logic related to `select next tab`.

### Refresh
`public void Refresh(bool clearProperties)`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteHearCurrentVoiceSample
`public void ExecuteHearCurrentVoiceSample()`

**Purpose:** Executes the `hear current voice sample` operation or workflow.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### ExecuteResetAll
`public void ExecuteResetAll()`

**Purpose:** Executes the `reset all` operation or workflow.

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Executes the `randomize` operation or workflow.

### ExecuteRandomizeAll
`public void ExecuteRandomizeAll()`

**Purpose:** Executes the `randomize all` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteRedo
`public void ExecuteRedo()`

**Purpose:** Executes the `redo` operation or workflow.

### ExecuteUndo
`public void ExecuteUndo()`

**Purpose:** Executes the `undo` operation or workflow.

### ExecuteChangeClothing
`public void ExecuteChangeClothing()`

**Purpose:** Executes the `change clothing` operation or workflow.

### AddCommand
`public void AddCommand()`

**Purpose:** Adds `command` to the current collection or state.

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties, bool ignoreDebugValues, int race = 0, int gender = -1, bool recordChange = false)`

**Purpose:** Sets the value or state of `body properties`.

### UpdateFacegen
`public void UpdateFacegen()`

**Purpose:** Updates the state or data of `facegen`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `previous tab input key`.

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `next tab input key`.

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var value = new FaceGenVM();
value.SetFaceGenerationParams(faceGenerationParams);
```

## See Also

- [Complete Class Catalog](../catalog)