---
title: "MultiplayerAdminPanelOptionBaseVM"
description: "Auto-generated class reference for MultiplayerAdminPanelOptionBaseVM."
---
# MultiplayerAdminPanelOptionBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerAdminPanelOptionBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelOptionBaseVM.cs`

## Overview

`MultiplayerAdminPanelOptionBaseVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRequired` | `public bool IsRequired { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsDirty` | `public bool IsDirty { get; set; }` |
| `CanResetToDefault` | `public bool CanResetToDefault { get; set; }` |
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `RequiresRestart` | `public bool RequiresRestart { get; set; }` |
| `OptionTitle` | `public string OptionTitle { get; set; }` |
| `OptionDescription` | `public string OptionDescription { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `DescriptionHint` | `public HintViewModel DescriptionHint { get; set; }` |
| `RequiresRestartHint` | `public HintViewModel RequiresRestartHint { get; set; }` |
| `IsDirtyHint` | `public HintViewModel IsDirtyHint { get; set; }` |
| `RestoreToDefaultsHint` | `public HintViewModel RestoreToDefaultsHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerAdminPanelOptionBaseVM from the subsystem API first
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MultiplayerAdminPanelOptionBaseVM from the subsystem API first
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.OnFinalize();
```

### UpdateValues
`public virtual void UpdateValues()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of values.

```csharp
// Obtain an instance of MultiplayerAdminPanelOptionBaseVM from the subsystem API first
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.UpdateValues();
```

### ExecuteRevertChanges
`public virtual void ExecuteRevertChanges()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with revert changes.

```csharp
// Obtain an instance of MultiplayerAdminPanelOptionBaseVM from the subsystem API first
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.ExecuteRevertChanges();
```

### ExecuteRestoreDefaults
`public virtual void ExecuteRestoreDefaults()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with restore defaults.

```csharp
// Obtain an instance of MultiplayerAdminPanelOptionBaseVM from the subsystem API first
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.ExecuteRestoreDefaults();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MultiplayerAdminPanelOptionBaseVM instance = ...;
```

## See Also

- [Area Index](../)