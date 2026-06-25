---
title: "Markable"
description: "Auto-generated class reference for Markable."
---
# Markable

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Markable : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Markable.cs`

## Overview

`Markable` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of Markable from the subsystem API first
Markable markable = ...;
var result = markable.GetTickRequirement();
```

### DisableMarkerActivation
`public void DisableMarkerActivation()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Markable from the subsystem API first
Markable markable = ...;
markable.DisableMarkerActivation();
```

### ActivateMarkerFor
`public void ActivateMarkerFor(float activeSeconds, float passiveSeconds)`

**Purpose:** Activates the resource, state, or feature associated with `marker for`.

```csharp
// Obtain an instance of Markable from the subsystem API first
Markable markable = ...;
markable.ActivateMarkerFor(0, 0);
```

### ResetPassiveDurationTimer
`public void ResetPassiveDurationTimer()`

**Purpose:** Returns `passive duration timer` to its default or initial condition.

```csharp
// Obtain an instance of Markable from the subsystem API first
Markable markable = ...;
markable.ResetPassiveDurationTimer();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Markable markable = ...;
markable.GetTickRequirement();
```

## See Also

- [Area Index](../)