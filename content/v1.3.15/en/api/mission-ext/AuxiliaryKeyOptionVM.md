---
title: "AuxiliaryKeyOptionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AuxiliaryKeyOptionVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### Set
`public override void Set(InputKey newKey)`

**Purpose:** Sets the value or state of `set`.

### Update
`public override void Update()`

**Purpose:** Updates the state or data of `update`.

### OnDone
`public override void OnDone()`

**Purpose:** Called when the `done` event is raised.

## Usage Example

```csharp
var value = new AuxiliaryKeyOptionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)