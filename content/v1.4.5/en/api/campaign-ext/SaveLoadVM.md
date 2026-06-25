---
title: "SaveLoadVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveLoadVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SaveLoadVM

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SaveLoadVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.SaveLoad/SaveLoadVM.cs`

## Overview

`SaveLoadVM` lives in `SandBox.ViewModelCollection.SaveLoad` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.SaveLoad` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLoadingSaves` | `public bool IsLoadingSaves { get; set; }` |
| `IsBusyWithAnAction` | `public bool IsBusyWithAnAction { get; set; }` |
| `IsSearchAvailable` | `public bool IsSearchAvailable { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `SearchPlaceholderText` | `public string SearchPlaceholderText { get; set; }` |
| `VisualDisabledText` | `public string VisualDisabledText { get; set; }` |
| `SaveGroups` | `public MBBindingList<SavedGameGroupVM> SaveGroups { get; set; }` |
| `CurrentSelectedSave` | `public SavedGameVM CurrentSelectedSave { get; set; }` |
| `CreateNewSaveSlotText` | `public string CreateNewSaveSlotText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `IsSaving` | `public bool IsSaving { get; set; }` |
| `CanCreateNewSave` | `public bool CanCreateNewSave { get; set; }` |
| `IsVisualDisabled` | `public bool IsVisualDisabled { get; set; }` |
| `CreateNewSaveHint` | `public HintViewModel CreateNewSaveHint { get; set; }` |
| `IsActionEnabled` | `public bool IsActionEnabled { get; set; }` |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `SaveLoadText` | `public string SaveLoadText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DeleteInputKey` | `public InputKeyItemVM DeleteInputKey { get; set; }` |

## Key Methods

### Initialize
`public async void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteCreateNewSaveGame
`public void ExecuteCreateNewSaveGame()`

**Purpose:** Executes the `create new save game` operation or workflow.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteLoadSave
`public void ExecuteLoadSave()`

**Purpose:** Executes the `load save` operation or workflow.

### DeleteSelectedSave
`public void DeleteSelectedSave()`

**Purpose:** Handles logic related to `delete selected save`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDeleteInputKey
`public void SetDeleteInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `delete input key`.

## Usage Example

```csharp
var value = new SaveLoadVM();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)