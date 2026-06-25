---
title: "SaveLoadVM"
description: "Auto-generated class reference for SaveLoadVM."
---
# SaveLoadVM

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SaveLoadVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs`

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

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.Initialize();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.RefreshValues();
```

### ExecuteCreateNewSaveGame
`public void ExecuteCreateNewSaveGame()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with create new save game.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.ExecuteCreateNewSaveGame();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.ExecuteDone();
```

### ExecuteLoadSave
`public void ExecuteLoadSave()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with load save.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.ExecuteLoadSave();
```

### DeleteSelectedSave
`public void DeleteSelectedSave()`

**Purpose:** **Purpose:** Executes the DeleteSelectedSave logic.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.DeleteSelectedSave();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.SetCancelInputKey(hotkey);
```

### SetDeleteInputKey
`public void SetDeleteInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to delete input key and updates the object's internal state.

```csharp
// Obtain an instance of SaveLoadVM from the subsystem API first
SaveLoadVM saveLoadVM = ...;
saveLoadVM.SetDeleteInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SaveLoadVM saveLoadVM = ...;
saveLoadVM.Initialize();
```

## See Also

- [Area Index](../)