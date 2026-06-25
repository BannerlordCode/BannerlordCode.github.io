---
title: "ControllerEquippedItemVM"
description: "Auto-generated class reference for ControllerEquippedItemVM."
---
# ControllerEquippedItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ControllerEquippedItemVM : EquipmentActionItemVM`
**Base:** `EquipmentActionItemVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/ControllerEquippedItemVM.cs`

## Overview

`ControllerEquippedItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `DropProgress` | `public float DropProgress { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of ControllerEquippedItemVM from the subsystem API first
ControllerEquippedItemVM controllerEquippedItemVM = ...;
controllerEquippedItemVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ControllerEquippedItemVM controllerEquippedItemVM = ...;
controllerEquippedItemVM.OnFinalize();
```

## See Also

- [Area Index](../)