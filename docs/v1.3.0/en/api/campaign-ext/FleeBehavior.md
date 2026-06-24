<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FleeBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `tick`.

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Gets the current value of `debug info`.

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Gets the current value of `availability`.

### TargetReached
`public abstract void TargetReached()`

**Purpose:** Handles logic related to `target reached`.

### GoToTarget
`public abstract void GoToTarget()`

**Purpose:** Handles logic related to `go to target`.

### IsGoalAchievable
`public abstract bool IsGoalAchievable()`

**Purpose:** Handles logic related to `is goal achievable`.

### IsGoalAchieved
`public abstract bool IsGoalAchieved()`

**Purpose:** Handles logic related to `is goal achieved`.

### GoToTarget
`public override void GoToTarget()`

**Purpose:** Handles logic related to `go to target`.

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**Purpose:** Handles logic related to `is goal achievable`.

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**Purpose:** Handles logic related to `is goal achieved`.

### TargetReached
`public override void TargetReached()`

**Purpose:** Handles logic related to `target reached`.

### GoToTarget
`public override void GoToTarget()`

**Purpose:** Handles logic related to `go to target`.

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**Purpose:** Handles logic related to `is goal achievable`.

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**Purpose:** Handles logic related to `is goal achieved`.

### TargetReached
`public override void TargetReached()`

**Purpose:** Handles logic related to `target reached`.

### GoToTarget
`public override void GoToTarget()`

**Purpose:** Handles logic related to `go to target`.

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**Purpose:** Handles logic related to `is goal achievable`.

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**Purpose:** Handles logic related to `is goal achieved`.

### TargetReached
`public override void TargetReached()`

**Purpose:** Handles logic related to `target reached`.

### GoToTarget
`public override void GoToTarget()`

**Purpose:** Handles logic related to `go to target`.

### IsGoalAchievable
`public override bool IsGoalAchievable()`

**Purpose:** Handles logic related to `is goal achievable`.

### IsGoalAchieved
`public override bool IsGoalAchieved()`

**Purpose:** Handles logic related to `is goal achieved`.

### TargetReached
`public override void TargetReached()`

**Purpose:** Handles logic related to `target reached`.

## Usage Example

```csharp
var value = new FleeBehavior();
value.Tick(0, false);
```

## See Also

- [Complete Class Catalog](../catalog)