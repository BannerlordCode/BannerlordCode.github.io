---
title: "ReloadPhaseItemVM"
description: "Auto-generated class reference for ReloadPhaseItemVM."
---
# ReloadPhaseItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReloadPhaseItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ReloadPhaseItemVM.cs`

## Overview

`ReloadPhaseItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Progress` | `public float Progress { get; set; }` |
| `RelativeDurationToMaxDuration` | `public float RelativeDurationToMaxDuration { get; set; }` |

## Key Methods

### Update
`public void Update(float progress, float relativeDurationToMaxDuration)`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of ReloadPhaseItemVM from the subsystem API first
ReloadPhaseItemVM reloadPhaseItemVM = ...;
reloadPhaseItemVM.Update(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ReloadPhaseItemVM reloadPhaseItemVM = ...;
reloadPhaseItemVM.Update(0, 0);
```

## See Also

- [Area Index](../)