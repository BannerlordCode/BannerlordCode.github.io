<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AdminPanelOptionSelectorVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AdminPanelOptionSelectorVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AdminPanelOptionSelectorVM : SelectorVM<AdminPanelOptionSelectorItemVM>`
**Base:** `SelectorVM<AdminPanelOptionSelectorItemVM>`
**Area:** mission-ext

## Overview

`AdminPanelOptionSelectorVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsMultiSelectionOption` | `public bool IsMultiSelectionOption { get; set; }` |
| `MultiSelectionOptions` | `public AdminPanelOptionSelectorVM MultiSelectionOptions { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateValues
`public override void UpdateValues()`

**Purpose:** Updates the state or data of `values`.

### ExecuteRestoreDefaults
`public override void ExecuteRestoreDefaults()`

**Purpose:** Executes the `restore defaults` operation or workflow.

### ExecuteRevertChanges
`public override void ExecuteRevertChanges()`

**Purpose:** Executes the `revert changes` operation or workflow.

## Usage Example

```csharp
// First obtain a AdminPanelOptionSelectorVM instance from game state, then call one of its public methods
var value = new AdminPanelOptionSelectorVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
