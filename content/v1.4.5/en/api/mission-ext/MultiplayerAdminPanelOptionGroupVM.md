---
title: "MultiplayerAdminPanelOptionGroupVM"
description: "Auto-generated class reference for MultiplayerAdminPanelOptionGroupVM."
---
# MultiplayerAdminPanelOptionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelOptionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelOptionGroupVM.cs`

## Overview

`MultiplayerAdminPanelOptionGroupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RequiresRestart` | `public bool RequiresRestart { get; set; }` |
| `GroupName` | `public string GroupName { get; set; }` |
| `RequiresRestartHint` | `public HintViewModel RequiresRestartHint { get; set; }` |
| `Options` | `public MBBindingList<MultiplayerAdminPanelOptionBaseVM> Options { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerAdminPanelOptionGroupVM from the subsystem API first
MultiplayerAdminPanelOptionGroupVM multiplayerAdminPanelOptionGroupVM = ...;
multiplayerAdminPanelOptionGroupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MultiplayerAdminPanelOptionGroupVM from the subsystem API first
MultiplayerAdminPanelOptionGroupVM multiplayerAdminPanelOptionGroupVM = ...;
multiplayerAdminPanelOptionGroupVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerAdminPanelOptionGroupVM multiplayerAdminPanelOptionGroupVM = ...;
multiplayerAdminPanelOptionGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)