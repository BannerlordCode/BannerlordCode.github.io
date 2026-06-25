---
title: "AgentBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public abstract class AgentBehavior`
**Base:** none
**File:** `SandBox/Missions/AgentBehaviors/AgentBehavior.cs`

## Overview

`AgentBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Navigator` | `public AgentNavigator Navigator { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `OwnerAgent` | `public Agent OwnerAgent { get; }` |
| `Mission` | `public Mission Mission { get; }` |

## Key Methods

### GetAvailability
`public virtual float GetAvailability(bool isSimulation)`

**Purpose:** Gets the current value of `availability`.

### Tick
`public virtual void Tick(float dt, bool isSimulation)`

**Purpose:** Handles logic related to `tick`.

### ConversationTick
`public virtual void ConversationTick()`

**Purpose:** Handles logic related to `conversation tick`.

### CheckStartWithBehavior
`public virtual bool CheckStartWithBehavior()`

**Purpose:** Handles logic related to `check start with behavior`.

### OnSpecialTargetChanged
`public virtual void OnSpecialTargetChanged()`

**Purpose:** Called when the `special target changed` event is raised.

### SetCustomWanderTarget
`public virtual void SetCustomWanderTarget(UsableMachine customUsableMachine)`

**Purpose:** Sets the value or state of `custom wander target`.

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### GetDebugInfo
`public abstract string GetDebugInfo()`

**Purpose:** Gets the current value of `debug info`.

## Usage Example

```csharp
var implementation = new CustomAgentBehavior();
```

## See Also

- [Complete Class Catalog](../catalog)