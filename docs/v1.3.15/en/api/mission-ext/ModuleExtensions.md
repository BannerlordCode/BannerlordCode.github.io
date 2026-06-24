<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleExtensions`
**Area:** mission-ext

## Overview

`ModuleExtensions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
ModuleExtensions.GetUsedMachines(formation);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
