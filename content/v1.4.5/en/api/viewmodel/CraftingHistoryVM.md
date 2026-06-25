---
title: "CraftingHistoryVM"
description: "Auto-generated class reference for CraftingHistoryVM."
---
# CraftingHistoryVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingHistoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/CraftingHistoryVM.cs`

## Overview

`CraftingHistoryVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDoneAvailable` | `public bool IsDoneAvailable { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `HasItemsInHistory` | `public bool HasItemsInHistory { get; set; }` |
| `HistoryHint` | `public HintViewModel HistoryHint { get; set; }` |
| `HistoryDisabledHint` | `public HintViewModel HistoryDisabledHint { get; set; }` |
| `CraftingHistory` | `public MBBindingList<WeaponDesignSelectorVM> CraftingHistory { get; set; }` |
| `SelectedDesign` | `public WeaponDesignSelectorVM SelectedDesign { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `CancelKey` | `public InputKeyItemVM CancelKey { get; set; }` |
| `DoneKey` | `public InputKeyItemVM DoneKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingHistoryVM from the subsystem API first
CraftingHistoryVM craftingHistoryVM = ...;
craftingHistoryVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of CraftingHistoryVM from the subsystem API first
CraftingHistoryVM craftingHistoryVM = ...;
craftingHistoryVM.OnFinalize();
```

### RefreshAvailability
`public void RefreshAvailability()`

**Purpose:** Keeps the display or cache of `availability` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingHistoryVM from the subsystem API first
CraftingHistoryVM craftingHistoryVM = ...;
craftingHistoryVM.RefreshAvailability();
```

### ExecuteOpen
`public void ExecuteOpen()`

**Purpose:** Runs the operation or workflow associated with `open`.

```csharp
// Obtain an instance of CraftingHistoryVM from the subsystem API first
CraftingHistoryVM craftingHistoryVM = ...;
craftingHistoryVM.ExecuteOpen();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of CraftingHistoryVM from the subsystem API first
CraftingHistoryVM craftingHistoryVM = ...;
craftingHistoryVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Runs the operation or workflow associated with `done`.

```csharp
// Obtain an instance of CraftingHistoryVM from the subsystem API first
CraftingHistoryVM craftingHistoryVM = ...;
craftingHistoryVM.ExecuteDone();
```

### SetDoneKey
`public void SetDoneKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `done key` and updates the object's internal state.

```csharp
// Obtain an instance of CraftingHistoryVM from the subsystem API first
CraftingHistoryVM craftingHistoryVM = ...;
craftingHistoryVM.SetDoneKey(hotkey);
```

### SetCancelKey
`public void SetCancelKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `cancel key` and updates the object's internal state.

```csharp
// Obtain an instance of CraftingHistoryVM from the subsystem API first
CraftingHistoryVM craftingHistoryVM = ...;
craftingHistoryVM.SetCancelKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingHistoryVM craftingHistoryVM = ...;
craftingHistoryVM.RefreshValues();
```

## See Also

- [Area Index](../)