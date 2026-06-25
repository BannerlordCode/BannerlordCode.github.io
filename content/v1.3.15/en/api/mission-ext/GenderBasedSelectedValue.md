---
title: "GenderBasedSelectedValue"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenderBasedSelectedValue`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenderBasedSelectedValue

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenderBasedSelectedValue`
**Area:** mission-ext

## Overview

`GenderBasedSelectedValue` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

## Usage Example

```csharp
// First obtain a GenderBasedSelectedValue instance from game state, then call one of its public methods
var value = new GenderBasedSelectedValue();
value.SetFaceGenerationParams(faceGenerationParams);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
