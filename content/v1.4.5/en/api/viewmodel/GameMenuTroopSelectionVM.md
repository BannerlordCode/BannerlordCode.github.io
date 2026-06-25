---
title: "GameMenuTroopSelectionVM"
description: "Auto-generated class reference for GameMenuTroopSelectionVM."
---
# GameMenuTroopSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuTroopSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection/GameMenuTroopSelectionVM.cs`

## Overview

`GameMenuTroopSelectionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `Troops` | `public MBBindingList<TroopSelectionItemVM> Troops { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClearSelectionText` | `public string ClearSelectionText { get; set; }` |
| `CurrentSelectedAmountText` | `public string CurrentSelectedAmountText { get; set; }` |
| `CurrentSelectedAmountTitle` | `public string CurrentSelectedAmountTitle { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuTroopSelectionVM from the subsystem API first
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.RefreshValues();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Runs the operation or workflow associated with `done`.

```csharp
// Obtain an instance of GameMenuTroopSelectionVM from the subsystem API first
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of GameMenuTroopSelectionVM from the subsystem API first
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.ExecuteCancel();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Runs the operation or workflow associated with `reset`.

```csharp
// Obtain an instance of GameMenuTroopSelectionVM from the subsystem API first
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.ExecuteReset();
```

### ExecuteClearSelection
`public void ExecuteClearSelection()`

**Purpose:** Runs the operation or workflow associated with `clear selection`.

```csharp
// Obtain an instance of GameMenuTroopSelectionVM from the subsystem API first
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.ExecuteClearSelection();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of GameMenuTroopSelectionVM from the subsystem API first
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuTroopSelectionVM from the subsystem API first
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.SetCancelInputKey(hotkey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuTroopSelectionVM from the subsystem API first
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.SetDoneInputKey(hotkey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `reset input key` and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuTroopSelectionVM from the subsystem API first
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.SetResetInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.RefreshValues();
```

## See Also

- [Area Index](../)