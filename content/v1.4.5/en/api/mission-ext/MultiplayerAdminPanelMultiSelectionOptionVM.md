---
title: "MultiplayerAdminPanelMultiSelectionOptionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAdminPanelMultiSelectionOptionVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAdminPanelMultiSelectionOptionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelMultiSelectionOptionVM : MultiplayerAdminPanelOptionBaseVM`
**Base:** `MultiplayerAdminPanelOptionBaseVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelMultiSelectionOptionVM.cs`

## Overview

`MultiplayerAdminPanelMultiSelectionOptionVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new MultiplayerAdminPanelMultiSelectionOptionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)