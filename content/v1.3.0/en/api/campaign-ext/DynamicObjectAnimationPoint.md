---
title: "DynamicObjectAnimationPoint"
description: "Auto-generated class reference for DynamicObjectAnimationPoint."
---
# DynamicObjectAnimationPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class DynamicObjectAnimationPoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/AnimationPoints/DynamicObjectAnimationPoint.cs`

## Overview

`DynamicObjectAnimationPoint` lives in `SandBox.Objects.AnimationPoints` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AnimationPoints` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsArriveActionFinished` | `public bool IsArriveActionFinished { get; }` |
| `PlayerStopsUsingWhenInteractsWithOther` | `public override bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.GetTickRequirement();
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Determines whether the this instance is in the usable by agent state or condition.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.IsUsableByAgent(userAgent);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the use event is raised.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.OnUse(userAgent, 0);
```

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**Purpose:** Reads and returns the user frame for agent value held by the this instance.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.GetUserFrameForAgent(agent);
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the disabled for agent state or condition.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.IsDisabledForAgent(agent);
```

### SimulateTick
`public override void SimulateTick(float dt)`

**Purpose:** Executes the SimulateTick logic.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.SimulateTick(0);
```

### HasAlternative
`public override bool HasAlternative()`

**Purpose:** Determines whether the this instance already holds alternative.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.HasAlternative();
```

### OnUserConversationStart
`public override void OnUserConversationStart()`

**Purpose:** Invoked when the user conversation start event is raised.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.OnUserConversationStart();
```

### OnUserConversationEnd
`public override void OnUserConversationEnd()`

**Purpose:** Invoked when the user conversation end event is raised.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.OnUserConversationEnd();
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Invoked when the use stopped event is raised.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.OnUseStopped(userAgent, false, 0);
```

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**Purpose:** Assigns a new value to agent items visibility and updates the object's internal state.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.SetAgentItemsVisibility(false);
```

### IsRotationCorrectDuringUsage
`public bool IsRotationCorrectDuringUsage()`

**Purpose:** Determines whether the this instance is in the rotation correct during usage state or condition.

```csharp
// Obtain an instance of DynamicObjectAnimationPoint from the subsystem API first
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
var result = dynamicObjectAnimationPoint.IsRotationCorrectDuringUsage();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DynamicObjectAnimationPoint dynamicObjectAnimationPoint = ...;
dynamicObjectAnimationPoint.GetTickRequirement();
```

## See Also

- [Area Index](../)