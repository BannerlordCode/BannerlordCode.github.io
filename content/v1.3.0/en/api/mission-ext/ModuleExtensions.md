---
title: "ModuleExtensions"
description: "Auto-generated class reference for ModuleExtensions."
---
# ModuleExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ModuleExtensions.cs`

## Overview

`ModuleExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetUsedMachines
`public static IEnumerable<UsableMachine> GetUsedMachines(this Formation formation)`

**Purpose:** **Purpose:** Reads and returns the used machines value held by the this instance.

```csharp
// Static call; no instance required
ModuleExtensions.GetUsedMachines(formation);
```

### StartUsingMachine
`public static void StartUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)`

**Purpose:** **Purpose:** Starts the using machine flow or state machine.

```csharp
// Static call; no instance required
ModuleExtensions.StartUsingMachine(formation, usable, false);
```

### StopUsingMachine
`public static void StopUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)`

**Purpose:** **Purpose:** Stops the using machine flow or state machine.

```csharp
// Static call; no instance required
ModuleExtensions.StopUsingMachine(formation, usable, false);
```

### ToWorldPosition
`public static WorldPosition ToWorldPosition(this Vec3 rawPosition)`

**Purpose:** **Purpose:** Executes the ToWorldPosition logic.

```csharp
// Static call; no instance required
ModuleExtensions.ToWorldPosition(rawPosition);
```

## Usage Example

```csharp
ModuleExtensions.GetUsedMachines(formation);
```

## See Also

- [Area Index](../)