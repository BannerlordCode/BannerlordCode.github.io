---
title: "MultiplayerAdminPanelNumericOptionVM"
description: "Auto-generated class reference for MultiplayerAdminPanelNumericOptionVM."
---
# MultiplayerAdminPanelNumericOptionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelNumericOptionVM : MultiplayerAdminPanelOptionBaseVM`
**Base:** `MultiplayerAdminPanelOptionBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelNumericOptionVM.cs`

## Overview

`MultiplayerAdminPanelNumericOptionVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsNumericOption` | `public bool IsNumericOption { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `MinValueInt` | `public int MinValueInt { get; set; }` |
| `MaxValueInt` | `public int MaxValueInt { get; set; }` |

## Key Methods

### UpdateValues
`public override void UpdateValues()`

**Purpose:** Recalculates and stores the latest representation of `values`.

```csharp
// Obtain an instance of MultiplayerAdminPanelNumericOptionVM from the subsystem API first
MultiplayerAdminPanelNumericOptionVM multiplayerAdminPanelNumericOptionVM = ...;
multiplayerAdminPanelNumericOptionVM.UpdateValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerAdminPanelNumericOptionVM multiplayerAdminPanelNumericOptionVM = ...;
multiplayerAdminPanelNumericOptionVM.UpdateValues();
```

## See Also

- [Area Index](../)