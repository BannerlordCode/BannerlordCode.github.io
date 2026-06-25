---
title: "MissionAgentTakenDamageVM"
description: "Auto-generated class reference for MissionAgentTakenDamageVM."
---
# MissionAgentTakenDamageVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentTakenDamageVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentTakenDamageVM.cs`

## Overview

`MissionAgentTakenDamageVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TakenDamageList` | `public MBBindingList<MissionAgentTakenDamageItemVM> TakenDamageList { get; set; }` |

## Key Methods

### SetIsEnabled
`public void SetIsEnabled(bool isEnabled)`

**Purpose:** Assigns a new value to is enabled and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentTakenDamageVM from the subsystem API first
MissionAgentTakenDamageVM missionAgentTakenDamageVM = ...;
missionAgentTakenDamageVM.SetIsEnabled(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionAgentTakenDamageVM missionAgentTakenDamageVM = ...;
missionAgentTakenDamageVM.SetIsEnabled(false);
```

## See Also

- [Area Index](../)