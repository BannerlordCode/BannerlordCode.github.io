---
title: "ReinforcementFormationPreferenceComparer"
description: "Auto-generated class reference for ReinforcementFormationPreferenceComparer."
---
# ReinforcementFormationPreferenceComparer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReinforcementFormationPreferenceComparer : IComparer<ReinforcementFormationPriority>`
**Base:** `IComparer<ReinforcementFormationPriority>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## Overview

`ReinforcementFormationPreferenceComparer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(ReinforcementFormationPriority left, ReinforcementFormationPriority right)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ReinforcementFormationPreferenceComparer from the subsystem API first
ReinforcementFormationPreferenceComparer reinforcementFormationPreferenceComparer = ...;
var result = reinforcementFormationPreferenceComparer.Compare(left, right);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ReinforcementFormationPreferenceComparer reinforcementFormationPreferenceComparer = ...;
reinforcementFormationPreferenceComparer.Compare(left, right);
```

## See Also

- [Area Index](../)