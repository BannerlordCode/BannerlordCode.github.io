---
title: "MultiplayerAdminPanelMultiSelectionOptionVM"
description: "Auto-generated class reference for MultiplayerAdminPanelMultiSelectionOptionVM."
---
# MultiplayerAdminPanelMultiSelectionOptionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelMultiSelectionOptionVM : MultiplayerAdminPanelOptionBaseVM`
**Base:** `MultiplayerAdminPanelOptionBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelMultiSelectionOptionVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerAdminPanelMultiSelectionOptionVM from the subsystem API first
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.RefreshValues();
```

### UpdateValues
`public override void UpdateValues()`

**Purpose:** Recalculates and stores the latest representation of values.

```csharp
// Obtain an instance of MultiplayerAdminPanelMultiSelectionOptionVM from the subsystem API first
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.UpdateValues();
```

### ExecuteRestoreDefaults
`public override void ExecuteRestoreDefaults()`

**Purpose:** Runs the operation or workflow associated with restore defaults.

```csharp
// Obtain an instance of MultiplayerAdminPanelMultiSelectionOptionVM from the subsystem API first
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.ExecuteRestoreDefaults();
```

### ExecuteRevertChanges
`public override void ExecuteRevertChanges()`

**Purpose:** Runs the operation or workflow associated with revert changes.

```csharp
// Obtain an instance of MultiplayerAdminPanelMultiSelectionOptionVM from the subsystem API first
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.ExecuteRevertChanges();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.RefreshValues();
```

## See Also

- [Area Index](../)