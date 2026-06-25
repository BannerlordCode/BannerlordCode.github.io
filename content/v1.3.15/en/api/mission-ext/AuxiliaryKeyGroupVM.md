---
title: "AuxiliaryKeyGroupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AuxiliaryKeyGroupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AuxiliaryKeyGroupVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AuxiliaryKeyGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs`

## Overview

`AuxiliaryKeyGroupVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HotKeys` | `public MBBindingList<AuxiliaryKeyOptionVM> HotKeys { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnDone
`public void OnDone()`

**Purpose:** Called when the `done` event is raised.

### OnGamepadActiveStateChanged
`public void OnGamepadActiveStateChanged()`

**Purpose:** Called when the `gamepad active state changed` event is raised.

## Usage Example

```csharp
var value = new AuxiliaryKeyGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)