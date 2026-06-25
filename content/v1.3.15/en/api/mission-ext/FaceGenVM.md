---
title: "FaceGenVM"
description: "Auto-generated class reference for FaceGenVM."
---
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

**Purpose:** **Purpose:** Assigns a new value to face generation params and updates the object's internal state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.SetFaceGenerationParams(faceGenerationParams);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.RefreshValues();
```

### InitializeHistory
`public void InitializeHistory(FaceGenHistory faceGenHistory)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by history.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.InitializeHistory(faceGenHistory);
```

### OnTabClicked
`public void OnTabClicked(int index)`

**Purpose:** **Purpose:** Invoked when the tab clicked event is raised.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.OnTabClicked(0);
```

### SelectPreviousTab
`public void SelectPreviousTab()`

**Purpose:** **Purpose:** Executes the SelectPreviousTab logic.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.SelectPreviousTab();
```

### SelectNextTab
`public void SelectNextTab()`

**Purpose:** **Purpose:** Executes the SelectNextTab logic.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.SelectNextTab();
```

### Refresh
`public void Refresh(bool clearProperties)`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.Refresh(false);
```

### ExecuteHearCurrentVoiceSample
`public void ExecuteHearCurrentVoiceSample()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with hear current voice sample.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteHearCurrentVoiceSample();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with reset.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteReset();
```

### ExecuteResetAll
`public void ExecuteResetAll()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with reset all.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteResetAll();
```

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with randomize.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteRandomize();
```

### ExecuteRandomizeAll
`public void ExecuteRandomizeAll()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with randomize all.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteRandomizeAll();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteDone();
```

### ExecuteRedo
`public void ExecuteRedo()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with redo.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteRedo();
```

### ExecuteUndo
`public void ExecuteUndo()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with undo.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteUndo();
```

### ExecuteChangeClothing
`public void ExecuteChangeClothing()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with change clothing.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteChangeClothing();
```

### AddCommand
`public void AddCommand()`

**Purpose:** **Purpose:** Adds command to the current collection or state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.AddCommand();
```

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties, bool ignoreDebugValues, int race = 0, int gender = -1, bool recordChange = false)`

**Purpose:** **Purpose:** Assigns a new value to body properties and updates the object's internal state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.SetBodyProperties(bodyProperties, false, 0, 0, false);
```

### UpdateFacegen
`public void UpdateFacegen()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of facegen.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.UpdateFacegen();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.SetDoneInputKey(hotKey);
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to previous tab input key and updates the object's internal state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.SetPreviousTabInputKey(hotKey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to next tab input key and updates the object's internal state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.SetNextTabInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.AddCameraControlInputKey(gameAxisKey);
```

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of FaceGenVM from the subsystem API first
FaceGenVM faceGenVM = ...;
faceGenVM.Reset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FaceGenVM faceGenVM = ...;
faceGenVM.SetFaceGenerationParams(faceGenerationParams);
```

## See Also

- [Area Index](../)