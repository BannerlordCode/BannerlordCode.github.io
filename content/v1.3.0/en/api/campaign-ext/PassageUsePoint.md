---
title: "PassageUsePoint"
description: "Auto-generated class reference for PassageUsePoint."
---
# PassageUsePoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class PassageUsePoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/PassageUsePoint.cs`

## Overview

`PassageUsePoint` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MovingAgents` | `public MBReadOnlyList<Agent> MovingAgents { get; }` |
| `MovingAgent` | `public override Agent MovingAgent { get; }` |
| `ToLocation` | `public Location ToLocation { get; }` |
| `HasAIMovingTo` | `public override bool HasAIMovingTo { get; }` |
| `FocusableObjectType` | `public override FocusableObjectType FocusableObjectType { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; }` |

## Key Methods

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the disabled for agent state or condition.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.IsDisabledForAgent(agent);
```

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** **Purpose:** Executes the AfterMissionStart logic.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
passageUsePoint.AfterMissionStart();
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** **Purpose:** Invoked when the use event is raised.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
passageUsePoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** **Purpose:** Invoked when the use stopped event is raised.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
passageUsePoint.OnUseStopped(userAgent, false, 0);
```

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the usable by agent state or condition.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.IsUsableByAgent(userAgent);
```

### GetMovingAgentCount
`public override int GetMovingAgentCount()`

**Purpose:** **Purpose:** Reads and returns the moving agent count value held by the this instance.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.GetMovingAgentCount();
```

### GetMovingAgentWithIndex
`public override Agent GetMovingAgentWithIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the moving agent with index value held by the this instance.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.GetMovingAgentWithIndex(0);
```

### AddMovingAgent
`public override void AddMovingAgent(Agent movingAgent)`

**Purpose:** **Purpose:** Adds moving agent to the current collection or state.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
passageUsePoint.AddMovingAgent(movingAgent);
```

### RemoveMovingAgent
`public override void RemoveMovingAgent(Agent movingAgent)`

**Purpose:** **Purpose:** Removes moving agent from the current collection or state.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
passageUsePoint.RemoveMovingAgent(movingAgent);
```

### IsAIMovingTo
`public override bool IsAIMovingTo(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the a i moving to state or condition.

```csharp
// Obtain an instance of PassageUsePoint from the subsystem API first
PassageUsePoint passageUsePoint = ...;
var result = passageUsePoint.IsAIMovingTo(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PassageUsePoint passageUsePoint = ...;
passageUsePoint.IsDisabledForAgent(agent);
```

## See Also

- [Area Index](../)