---
title: "StandingPoint"
description: "Auto-generated class reference for StandingPoint."
---
# StandingPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPoint : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `TaleWorlds.MountAndBlade/StandingPoint.cs`

## Overview

`StandingPoint` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisableScriptedFrameFlags` | `public virtual Agent.AIScriptedFrameFlags DisableScriptedFrameFlags { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; set; }` |
| `FavoredUser` | `public Agent FavoredUser { get; set; }` |
| `PlayerStopsUsingWhenInteractsWithOther` | `public virtual bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `UseOwnPositionInsteadOfWorldPosition` | `public bool UseOwnPositionInsteadOfWorldPosition { get; }` |
| `CustomPlayerInteractionDistance` | `public float CustomPlayerInteractionDistance { get; }` |
| `this` | `public StandingPoint this { get; }` |

## Key Methods

### OnParentMachinePhysicsStateChanged
`public void OnParentMachinePhysicsStateChanged()`

**Purpose:** **Purpose:** Invoked when the parent machine physics state changed event is raised.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
standingPoint.OnParentMachinePhysicsStateChanged();
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the disabled for agent state or condition.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
var result = standingPoint.IsDisabledForAgent(agent);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
var result = standingPoint.GetTickRequirement();
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** **Purpose:** Invoked when the use event is raised.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
standingPoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** **Purpose:** Invoked when the use stopped event is raised.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
standingPoint.OnUseStopped(userAgent, false, 0);
```

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the user frame for agent value held by the this instance.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
var result = standingPoint.GetUserFrameForAgent(agent);
```

### HasAlternative
`public virtual bool HasAlternative()`

**Purpose:** **Purpose:** Determines whether the this instance already holds alternative.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
var result = standingPoint.HasAlternative();
```

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the usage score for agent value held by the this instance.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
var result = standingPoint.GetUsageScoreForAgent(agent);
```

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(ValueTuple<Agent, float> agentPair)`

**Purpose:** **Purpose:** Reads and returns the usage score for agent value held by the this instance.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
var result = standingPoint.GetUsageScoreForAgent(valueTuple<Agent, 0);
```

### SetupOnUsingStoppedBehavior
`public void SetupOnUsingStoppedBehavior(bool autoAttach, Action<Agent, bool> action)`

**Purpose:** **Purpose:** Assigns a new value to up on using stopped behavior and updates the object's internal state.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
standingPoint.SetupOnUsingStoppedBehavior(false, action<Agent, false);
```

### OnEndMission
`public override void OnEndMission()`

**Purpose:** **Purpose:** Invoked when the end mission event is raised.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
standingPoint.OnEndMission();
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** **Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
var result = standingPoint.GetDescriptionText(gameEntity);
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the usable by agent state or condition.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
var result = standingPoint.IsUsableByAgent(userAgent);
```

### SetUsableByAIOnly
`public void SetUsableByAIOnly()`

**Purpose:** **Purpose:** Assigns a new value to usable by a i only and updates the object's internal state.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
standingPoint.SetUsableByAIOnly();
```

### SetUsableByPlayerOnly
`public void SetUsableByPlayerOnly()`

**Purpose:** **Purpose:** Assigns a new value to usable by player only and updates the object's internal state.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
standingPoint.SetUsableByPlayerOnly();
```

### SetUsableByPlayerOrAI
`public void SetUsableByPlayerOrAI()`

**Purpose:** **Purpose:** Assigns a new value to usable by player or a i and updates the object's internal state.

```csharp
// Obtain an instance of StandingPoint from the subsystem API first
StandingPoint standingPoint = ...;
standingPoint.SetUsableByPlayerOrAI();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StandingPoint standingPoint = ...;
standingPoint.OnParentMachinePhysicsStateChanged();
```

## See Also

- [Area Index](../)