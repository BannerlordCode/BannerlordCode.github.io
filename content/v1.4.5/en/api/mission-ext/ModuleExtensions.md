---
title: "ModuleExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ModuleExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ModuleExtensions.cs`

## Overview

`ModuleExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetUsedMachines
`public static IEnumerable<UsableMachine> GetUsedMachines(this Formation formation)`

**Purpose:** Gets the current value of `used machines`.

### StartUsingMachine
`public static void StartUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)`

**Purpose:** Handles logic related to `start using machine`.

### StopUsingMachine
`public static void StopUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)`

**Purpose:** Handles logic related to `stop using machine`.

### ToWorldPosition
`public static WorldPosition ToWorldPosition(this Vec3 rawPosition)`

**Purpose:** Handles logic related to `to world position`.

## Usage Example

```csharp
ModuleExtensions.GetUsedMachines(formation);
```

## See Also

- [Complete Class Catalog](../catalog)