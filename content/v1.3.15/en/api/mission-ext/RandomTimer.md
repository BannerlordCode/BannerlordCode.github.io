---
title: "RandomTimer"
description: "Auto-generated class reference for RandomTimer."
---
# RandomTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RandomTimer : Timer`
**Base:** `Timer`
**File:** `TaleWorlds.MountAndBlade/RandomTimer.cs`

## Overview

`RandomTimer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Check
`public override bool Check(float gameTime)`

**Purpose:** Verifies whether the this instance meets the specified condition.

```csharp
// Obtain an instance of RandomTimer from the subsystem API first
RandomTimer randomTimer = ...;
var result = randomTimer.Check(0);
```

### ChangeDuration
`public void ChangeDuration(float min, float max)`

**Purpose:** Executes the ChangeDuration logic.

```csharp
// Obtain an instance of RandomTimer from the subsystem API first
RandomTimer randomTimer = ...;
randomTimer.ChangeDuration(0, 0);
```

### RecomputeDuration
`public void RecomputeDuration()`

**Purpose:** Recomputes duration and returns the result.

```csharp
// Obtain an instance of RandomTimer from the subsystem API first
RandomTimer randomTimer = ...;
randomTimer.RecomputeDuration();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RandomTimer randomTimer = ...;
randomTimer.Check(0);
```

## See Also

- [Area Index](../)