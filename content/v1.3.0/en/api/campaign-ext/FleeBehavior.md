---
title: "FleeBehavior"
description: "Auto-generated class reference for FleeBehavior."
---
# FleeBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class FleeBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/FleeBehavior.cs`

## Overview

`FleeBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Savior` | `public Agent Savior { get; }` |
| `EscapePortal` | `public Passage EscapePortal { get; }` |
| `Position` | `public Vec3 Position { get; }` |

## Key Methods

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.Tick(0, false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Reads and returns the `debug info` value held by the current object.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.GetDebugInfo();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Reads and returns the `availability` value held by the current object.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.GetAvailability(false);
```

### TargetReached
`public abstract void TargetReached()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

### GoToTarget
`public abstract void GoToTarget()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public abstract bool IsGoalAchievable()`

**Purpose:** Determines whether the current object is in the `goal achievable` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public abstract bool IsGoalAchieved()`

**Purpose:** Determines whether the current object is in the `goal achieved` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### GoToTarget
`public override void GoToTarget()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**Purpose:** Determines whether the current object is in the `goal achievable` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**Purpose:** Determines whether the current object is in the `goal achieved` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### TargetReached
`public override void TargetReached()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

### GoToTarget
`public override void GoToTarget()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**Purpose:** Determines whether the current object is in the `goal achievable` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**Purpose:** Determines whether the current object is in the `goal achieved` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### TargetReached
`public override void TargetReached()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

### GoToTarget
`public override void GoToTarget()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**Purpose:** Determines whether the current object is in the `goal achievable` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**Purpose:** Determines whether the current object is in the `goal achieved` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### TargetReached
`public override void TargetReached()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

### GoToTarget
`public override void GoToTarget()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.GoToTarget();
```

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**Purpose:** Determines whether the current object is in the `goal achievable` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchievable();
```

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**Purpose:** Determines whether the current object is in the `goal achieved` state or condition.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
var result = fleeBehavior.IsGoalAchieved();
```

### TargetReached
`public override void TargetReached()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FleeBehavior from the subsystem API first
FleeBehavior fleeBehavior = ...;
fleeBehavior.TargetReached();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FleeBehavior fleeBehavior = ...;
fleeBehavior.Tick(0, false);
```

## See Also

- [Area Index](../)