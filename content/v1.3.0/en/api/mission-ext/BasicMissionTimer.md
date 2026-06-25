---
title: "BasicMissionTimer"
description: "Auto-generated class reference for BasicMissionTimer."
---
# BasicMissionTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicMissionTimer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BasicMissionTimer.cs`

## Overview

`BasicMissionTimer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ElapsedTime` | `public float ElapsedTime { get; }` |

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of BasicMissionTimer from the subsystem API first
BasicMissionTimer basicMissionTimer = ...;
basicMissionTimer.Reset();
```

### Set
`public void Set(float newElapsedTime)`

**Purpose:** Assigns a new value to the this instance's property or state.

```csharp
// Obtain an instance of BasicMissionTimer from the subsystem API first
BasicMissionTimer basicMissionTimer = ...;
basicMissionTimer.Set(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BasicMissionTimer basicMissionTimer = ...;
basicMissionTimer.Reset();
```

## See Also

- [Area Index](../)