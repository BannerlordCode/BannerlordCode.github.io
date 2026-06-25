---
title: "MultiplayerAdminPanelVM"
description: "Auto-generated class reference for MultiplayerAdminPanelVM."
---
# MultiplayerAdminPanelVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelVM.cs`

## Overview

`MultiplayerAdminPanelVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsApplyDisabled` | `public bool IsApplyDisabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `ApplyText` | `public string ApplyText { get; set; }` |
| `StartMissionText` | `public string StartMissionText { get; set; }` |
| `ApplyDisabledHint` | `public HintViewModel ApplyDisabledHint { get; set; }` |
| `OptionGroups` | `public MBBindingList<MultiplayerAdminPanelOptionGroupVM> OptionGroups { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerAdminPanelVM from the subsystem API first
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MultiplayerAdminPanelVM from the subsystem API first
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.OnFinalize();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of MultiplayerAdminPanelVM from the subsystem API first
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.OnTick(0);
```

### ExecuteApplyChanges
`public void ExecuteApplyChanges()`

**Purpose:** Runs the operation or workflow associated with `apply changes`.

```csharp
// Obtain an instance of MultiplayerAdminPanelVM from the subsystem API first
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.ExecuteApplyChanges();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of MultiplayerAdminPanelVM from the subsystem API first
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.ExecuteCancel();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.RefreshValues();
```

## See Also

- [Area Index](../)