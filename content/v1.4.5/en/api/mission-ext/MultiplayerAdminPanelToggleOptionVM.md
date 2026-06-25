---
title: "MultiplayerAdminPanelToggleOptionVM"
description: "Auto-generated class reference for MultiplayerAdminPanelToggleOptionVM."
---
# MultiplayerAdminPanelToggleOptionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelToggleOptionVM : MultiplayerAdminPanelOptionBaseVM`
**Base:** `MultiplayerAdminPanelOptionBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelToggleOptionVM.cs`

## Overview

`MultiplayerAdminPanelToggleOptionVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsToggleOption` | `public bool IsToggleOption { get; set; }` |
| `ToggleValue` | `public bool ToggleValue { get; set; }` |

## Key Methods

### UpdateValues
`public override void UpdateValues()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of values.

```csharp
// Obtain an instance of MultiplayerAdminPanelToggleOptionVM from the subsystem API first
MultiplayerAdminPanelToggleOptionVM multiplayerAdminPanelToggleOptionVM = ...;
multiplayerAdminPanelToggleOptionVM.UpdateValues();
```

### ExecuteToggle
`public void ExecuteToggle()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with toggle.

```csharp
// Obtain an instance of MultiplayerAdminPanelToggleOptionVM from the subsystem API first
MultiplayerAdminPanelToggleOptionVM multiplayerAdminPanelToggleOptionVM = ...;
multiplayerAdminPanelToggleOptionVM.ExecuteToggle();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerAdminPanelToggleOptionVM multiplayerAdminPanelToggleOptionVM = ...;
multiplayerAdminPanelToggleOptionVM.UpdateValues();
```

## See Also

- [Area Index](../)