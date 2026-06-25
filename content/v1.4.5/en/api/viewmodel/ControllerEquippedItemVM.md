---
title: "ControllerEquippedItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ControllerEquippedItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ControllerEquippedItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ControllerEquippedItemVM : EquipmentActionItemVM`
**Base:** `EquipmentActionItemVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/ControllerEquippedItemVM.cs`

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

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new ControllerEquippedItemVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)