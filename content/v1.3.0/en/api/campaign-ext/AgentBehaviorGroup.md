---
title: "AgentBehaviorGroup"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentBehaviorGroup`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public abstract class AgentBehaviorGroup`
**Base:** none
**File:** `SandBox/Missions/AgentBehaviors/AgentBehaviorGroup.cs`

## Overview

`AgentBehaviorGroup` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerAgent` | `public Agent OwnerAgent { get; }` |
| `ScriptedBehavior` | `public AgentBehavior ScriptedBehavior { get; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Mission` | `public Mission Mission { get; }` |

## Key Methods

### DisableScriptedBehavior
`public void DisableScriptedBehavior()`

**Purpose:** Handles logic related to `disable scripted behavior`.

### DisableAllBehaviors
`public void DisableAllBehaviors()`

**Purpose:** Handles logic related to `disable all behaviors`.

### GetActiveBehavior
`public AgentBehavior GetActiveBehavior()`

**Purpose:** Gets the current value of `active behavior`.

### Tick
`public virtual void Tick(float dt, bool isSimulation)`

**Purpose:** Handles logic related to `tick`.

### ConversationTick
`public virtual void ConversationTick()`

**Purpose:** Handles logic related to `conversation tick`.

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### GetScore
`public virtual float GetScore(bool isSimulation)`

**Purpose:** Gets the current value of `score`.

### ForceThink
`public virtual void ForceThink(float inSeconds)`

**Purpose:** Handles logic related to `force think`.

## Usage Example

```csharp
var implementation = new CustomAgentBehaviorGroup();
```

## See Also

- [Complete Class Catalog](../catalog)