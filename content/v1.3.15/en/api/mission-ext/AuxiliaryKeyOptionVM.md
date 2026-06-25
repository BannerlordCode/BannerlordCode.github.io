---
title: "AuxiliaryKeyOptionVM"
description: "Auto-generated class reference for AuxiliaryKeyOptionVM."
---
# AuxiliaryKeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AuxiliaryKeyOptionVM : KeyOptionVM`
**Base:** `KeyOptionVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyOptionVM.cs`

## Overview

`AuxiliaryKeyOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentHotKey` | `public HotKey CurrentHotKey { get; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of AuxiliaryKeyOptionVM from the subsystem API first
AuxiliaryKeyOptionVM auxiliaryKeyOptionVM = ...;
auxiliaryKeyOptionVM.RefreshValues();
```

### Set
`public override void Set(InputKey newKey)`

**Purpose:** **Purpose:** Assigns a new value to the this instance's property or state.

```csharp
// Obtain an instance of AuxiliaryKeyOptionVM from the subsystem API first
AuxiliaryKeyOptionVM auxiliaryKeyOptionVM = ...;
auxiliaryKeyOptionVM.Set(newKey);
```

### Update
`public override void Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of AuxiliaryKeyOptionVM from the subsystem API first
AuxiliaryKeyOptionVM auxiliaryKeyOptionVM = ...;
auxiliaryKeyOptionVM.Update();
```

### OnDone
`public override void OnDone()`

**Purpose:** **Purpose:** Invoked when the done event is raised.

```csharp
// Obtain an instance of AuxiliaryKeyOptionVM from the subsystem API first
AuxiliaryKeyOptionVM auxiliaryKeyOptionVM = ...;
auxiliaryKeyOptionVM.OnDone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AuxiliaryKeyOptionVM auxiliaryKeyOptionVM = ...;
auxiliaryKeyOptionVM.RefreshValues();
```

## See Also

- [Area Index](../)