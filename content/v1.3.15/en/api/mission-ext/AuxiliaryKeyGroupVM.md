---
title: "AuxiliaryKeyGroupVM"
description: "Auto-generated class reference for AuxiliaryKeyGroupVM."
---
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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of AuxiliaryKeyGroupVM from the subsystem API first
AuxiliaryKeyGroupVM auxiliaryKeyGroupVM = ...;
auxiliaryKeyGroupVM.RefreshValues();
```

### OnDone
`public void OnDone()`

**Purpose:** Invoked when the `done` event is raised.

```csharp
// Obtain an instance of AuxiliaryKeyGroupVM from the subsystem API first
AuxiliaryKeyGroupVM auxiliaryKeyGroupVM = ...;
auxiliaryKeyGroupVM.OnDone();
```

### OnGamepadActiveStateChanged
`public void OnGamepadActiveStateChanged()`

**Purpose:** Invoked when the `gamepad active state changed` event is raised.

```csharp
// Obtain an instance of AuxiliaryKeyGroupVM from the subsystem API first
AuxiliaryKeyGroupVM auxiliaryKeyGroupVM = ...;
auxiliaryKeyGroupVM.OnGamepadActiveStateChanged();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AuxiliaryKeyGroupVM auxiliaryKeyGroupVM = ...;
auxiliaryKeyGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)