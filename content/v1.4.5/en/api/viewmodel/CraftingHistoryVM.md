---
title: "CraftingHistoryVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingHistoryVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingHistoryVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingHistoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/CraftingHistoryVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RefreshAvailability
`public void RefreshAvailability()`

**Purpose:** Refreshes the display or cache of `availability`.

### ExecuteOpen
`public void ExecuteOpen()`

**Purpose:** Executes the `open` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### SetDoneKey
`public void SetDoneKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done key`.

### SetCancelKey
`public void SetCancelKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel key`.

## Usage Example

```csharp
var value = new CraftingHistoryVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)