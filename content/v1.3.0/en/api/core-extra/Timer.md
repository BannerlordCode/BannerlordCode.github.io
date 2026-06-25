---
title: "Timer"
description: "Auto-generated class reference for Timer."
---
# Timer

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Timer`
**Base:** none
**File:** `TaleWorlds.Core/Timer.cs`

## Overview

`Timer` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Duration` | `public float Duration { get; set; }` |
| `PreviousDeltaTime` | `public float PreviousDeltaTime { get; }` |

## Key Methods

### Check
`public virtual bool Check(float gameTime)`

**Purpose:** Verifies whether the current object meets the specified condition.

```csharp
// Obtain an instance of Timer from the subsystem API first
Timer timer = ...;
var result = timer.Check(0);
```

### ElapsedTime
`public float ElapsedTime()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Timer from the subsystem API first
Timer timer = ...;
var result = timer.ElapsedTime();
```

### Reset
`public void Reset(float gameTime)`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of Timer from the subsystem API first
Timer timer = ...;
timer.Reset(0);
```

### Reset
`public void Reset(float gameTime, float newDuration)`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of Timer from the subsystem API first
Timer timer = ...;
timer.Reset(0, 0);
```

### AdjustStartTime
`public void AdjustStartTime(float deltaTime)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Timer from the subsystem API first
Timer timer = ...;
timer.AdjustStartTime(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Timer timer = ...;
timer.Check(0);
```

## See Also

- [Area Index](../)