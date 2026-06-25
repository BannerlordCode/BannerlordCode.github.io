---
title: "AnimationPoint"
description: "Auto-generated class reference for AnimationPoint."
---
# AnimationPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class AnimationPoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/AnimationPoints/AnimationPoint.cs`

## Overview

`AnimationPoint` lives in `SandBox.Objects.AnimationPoints` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AnimationPoints` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerStopsUsingWhenInteractsWithOther` | `public override bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `IsArriveActionFinished` | `public bool IsArriveActionFinished { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; }` |

## Key Methods

### RequestResync
`public void RequestResync()`

**Purpose:** Executes the RequestResync logic.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
animationPoint.RequestResync();
```

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Executes the AfterMissionStart logic.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
animationPoint.AfterMissionStart();
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the disabled for agent state or condition.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
var result = animationPoint.IsDisabledForAgent(agent);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
var result = animationPoint.GetTickRequirement();
```

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**Purpose:** Reads and returns the user frame for agent value held by the this instance.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
var result = animationPoint.GetUserFrameForAgent(agent);
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Determines whether the this instance is in the usable by agent state or condition.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
var result = animationPoint.IsUsableByAgent(userAgent);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the use event is raised.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
animationPoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Invoked when the use stopped event is raised.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
animationPoint.OnUseStopped(userAgent, false, 0);
```

### SimulateTick
`public override void SimulateTick(float dt)`

**Purpose:** Executes the SimulateTick logic.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
animationPoint.SimulateTick(0);
```

### HasAlternative
`public override bool HasAlternative()`

**Purpose:** Determines whether the this instance already holds alternative.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
var result = animationPoint.HasAlternative();
```

### GetRandomWaitInSeconds
`public float GetRandomWaitInSeconds()`

**Purpose:** Reads and returns the random wait in seconds value held by the this instance.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
var result = animationPoint.GetRandomWaitInSeconds();
```

### GetAlternatives
`public List<AnimationPoint> GetAlternatives()`

**Purpose:** Reads and returns the alternatives value held by the this instance.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
var result = animationPoint.GetAlternatives();
```

### IsRotationCorrectDuringUsage
`public bool IsRotationCorrectDuringUsage()`

**Purpose:** Determines whether the this instance is in the rotation correct during usage state or condition.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
var result = animationPoint.IsRotationCorrectDuringUsage();
```

### OnUserConversationStart
`public override void OnUserConversationStart()`

**Purpose:** Invoked when the user conversation start event is raised.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
animationPoint.OnUserConversationStart();
```

### OnUserConversationEnd
`public override void OnUserConversationEnd()`

**Purpose:** Invoked when the user conversation end event is raised.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
animationPoint.OnUserConversationEnd();
```

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**Purpose:** Assigns a new value to agent items visibility and updates the object's internal state.

```csharp
// Obtain an instance of AnimationPoint from the subsystem API first
AnimationPoint animationPoint = ...;
animationPoint.SetAgentItemsVisibility(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AnimationPoint animationPoint = ...;
animationPoint.RequestResync();
```

## See Also

- [Area Index](../)